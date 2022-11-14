using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.CartsDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using AutoMapper;

namespace APIBookSaling.Services.Implements
{
    public class CartServices : ICartServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
        public CartServices(ILogger<CartServices> logger, ApplicationDbContext dbContext, IMapper mapper)
        {
            _logger = logger;
            _dbContext = dbContext;
            _mapper = mapper;
        }

        public void CreateCart(CreateCartDto input)
        {
            _dbContext.carts.Add(new Cart()
            {
                IdBook = input.IdBook,
            });
            _dbContext.SaveChanges();
        }

        public CartDto FindById(int id)
        {
            var cartQuery = _dbContext.carts.AsQueryable();
            var cartFind = cartQuery.FirstOrDefault(s => s.Id == id);
            if (cartFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            var CartItem = _mapper.Map<CartDto>(cartFind);

            return CartItem;
        }

        public int Deleted(int id)
        {
            var cartQuery = _dbContext.carts.AsQueryable();
            var cartFind = cartQuery.FirstOrDefault(s => s.Id == id);
            if (cartFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            _dbContext.carts.Remove(cartFind);
            return 0;
        }

        public void UpdateCustomer(CreateCartDto input, int id)
        {
            var cartQuery = _dbContext.carts.AsQueryable();
            var cartFind = cartQuery.FirstOrDefault(s => s.Id == id);
            if (cartFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            cartFind.IdBook = input.IdBook;
            _dbContext.SaveChanges();
        }

        public PageResultDto<CartDto> FindAll(FilterDto input)
        {
            var cartQuery = _dbContext.customers.AsQueryable();
            if (input.Keyword != null)
            {
                cartQuery = cartQuery.Where(s => s.Fullname != null && s.Fullname.Contains(input.Keyword));
            }
            int totalItem = cartQuery.Count();

            cartQuery = cartQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            var CartItem = _mapper.Map<CartDto>(cartQuery);
            return new PageResultDto<CartDto>
            {
                Item = CartItem,
                TotalItem = totalItem
            };
        }
    }
}
