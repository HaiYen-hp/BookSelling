using APIBookSaling.Constants;
using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.UsersDto;
using APIBookSaling.Entities;
using APIBookSaling.Exceptions;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using APIBookSaling.Utils;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace APIBookSaling.Services.Implements
{
    public class UserServices : IUserServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly IConfiguration _configuration;

        public UserServices(
            ILogger<CustomerServices> logger,
            ApplicationDbContext dbContext,
            IConfiguration configuration)
        {
            _logger = logger;
            _dbContext = dbContext;
            _configuration = configuration;
        }

        public void Create(CreateUserDto input)
        {
            if (_dbContext.users.Any(u => u.UserName == input.Username))
            {
                throw new UserFriendlyException($"Tên tài khoản \"{input.Username}\" đã tồn tại");
            }
            _dbContext.users.Add(new User()
            {
                UserName = input.Username,
                Password = CommonUtils.CreateMD5(input.Password),
                Email = input.Email,
                Phone = input.Phone,
                UserType = input.UserType,
                CustomerId = input.CustomerId
            });
            _dbContext.SaveChanges();
        }

        public void CreateListUser(List<CreateUserDto> input)
        {

            foreach (var user in input)
            {
                if (_dbContext.users.Any(u => u.UserName == user.Username))
                {
                    throw new UserFriendlyException($"Tên tài khoản \"{user.Username}\" đã tồn tại");
                }
                _dbContext.users.Add(new User
                {
                    UserName = user.Username,
                    Password = CommonUtils.CreateMD5(user.Password)
                });
            }
            _dbContext.SaveChanges();
        }

        public string Login(LoginUserDto input)
        {
            var user = _dbContext.users.FirstOrDefault(u => u.UserName == input.UserName);
            if (user == null)
            {
                throw new UserFriendlyException($"Tài khoản \"{input.UserName}\" không tồn tại");
            }

            if (CommonUtils.CreateMD5(input.Password) == user.Password)
            {
                var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

                var claims = new List<Claim>
                {
                    new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                    new Claim(JwtRegisteredClaimNames.Name, user.UserName),
                    new Claim(CustomClaimTypes.UserType, user.UserType.ToString(), ClaimValueTypes.Integer32)
                };

                var token = new JwtSecurityToken(
                    issuer: _configuration["JWT:ValidIssuer"],
                    audience: _configuration["JWT:ValidAudience"],
                    expires: DateTime.Now.AddSeconds(_configuration.GetValue<int>("JWT:Expires")),
                    claims: claims,
                    signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );

                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            else
            {
                throw new UserFriendlyException($"Mật khẩu không chính xác");
            }
        }

        public User FindById(int id)
        {
            var userQuery = _dbContext.users.AsQueryable();
            var userFind = userQuery.FirstOrDefault(s => s.Id == id);
            if (userFind == null)
            {
                throw new Exception("khong tim thay tai khoan");
            }
            return userFind;
        }

        public PageResultDto<List<User>> FindAll(FilterDto input)
        {
            var userQuery = _dbContext.users.AsQueryable();
            if (input.Keyword != null)
            {
                userQuery = userQuery.Where(s => s.UserName != null && s.UserName.Contains(input.Keyword));
            }
            int totalItem = userQuery.Count();

            userQuery = userQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            return new PageResultDto<List<User>>
            {
                Item = userQuery.ToList(),
                TotalItem = totalItem
            };
        }


        public int Deleted(int id)
        {
            var userQuery = _dbContext.users.AsQueryable();
            var userFind = userQuery.FirstOrDefault(s => s.Id == id);
            if (userFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            _dbContext.users.Remove(userFind);
            return 0;
        }

        public void UpdateUser(User input, int id)
        {
            var userQuery = _dbContext.users.AsQueryable();
            var userFind = userQuery.FirstOrDefault(s => s.Id == id);
            if (userFind == null)
            {
                throw new Exception("khong tim tai khoan");
            }
            userFind.UserName = input.UserName;
            userFind.Password = input.Password;
            userFind.Email = input.Email;
            userFind.Phone = input.Phone;
            userFind.UserType = input.UserType;
            _dbContext.SaveChanges();
        }
    }
}
