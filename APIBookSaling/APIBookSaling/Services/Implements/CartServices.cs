using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Dtos.CartsDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using APIBookSaling.Utils;
using AutoMapper;

namespace APIBookSaling.Services.Implements
{
    public class CartServices : ICartServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IHttpContextAccessor _httpContext;

        public CartServices(ILogger<CartServices> logger, ApplicationDbContext dbContext, IMapper mapper, IHttpContextAccessor httpContext)
        {
            _logger = logger;
            _dbContext = dbContext;
            _mapper = mapper;
            _httpContext = httpContext;
        }

        public CartDto FindById()
        {
            var userid = CommonUtils.GetCurrentUserId(_httpContext);
            var cartQuery = _dbContext.carts.AsQueryable();
            var cardBookFind = _dbContext.cardBook.AsQueryable();
            var cartFind = cartQuery.FirstOrDefault(s => s.IdUser == userid);
            if (cartFind == null)
            {
                throw new Exception("khong tim thay gio hang");
            }
            foreach (var cardBook in cardBookFind)
            {
                var bookFind = _dbContext.books.FirstOrDefault(x => x.Id == cardBook.IdBook);
            }
            cartFind.Add(new Cart()
            {
                IdBook = bookFind
            });
            var CartItem = _mapper.Map<CartDto>(cartFind);
            return CartItem;
        }

        public int Deleted(int id)
        {
            var cartQuery = _dbContext.carts.AsQueryable();
            var cartFind = cartQuery.FirstOrDefault(s => s.Id == id);
            if (cartFind == null)
            {
                throw new Exception("khong tim thay gio hang");
            }
            _dbContext.carts.Remove(cartFind);
            _dbContext.SaveChanges();
            return 0;
        }

        public void UpdateCart(List<int> idBook)
        {
            var userid = CommonUtils.GetCurrentUserId(_httpContext);
            var cartQuery = _dbContext.carts.AsQueryable();
            var bookQuery = _dbContext.books.AsQueryable();

            var cartFind = cartQuery.FirstOrDefault(s => s.IdUser == userid);
            if (cartFind == null)
            {
                throw new Exception("khong tim thay gio hang");
            }
            foreach(var item in idBook)
            {
                var bookFind = bookQuery.FirstOrDefault(x => x.Id == item);
                _dbContext.cardBook.Add(new CardBook()
                {
                    IdCard = cartFind.Id,
                    IdBook = bookFind.Id,
                });
            }
            _dbContext.SaveChanges();
        }

        public PageResultDto<CartDto> FindAll(FilterDto input)
        {
            var cartQuery = _dbContext.carts.AsQueryable();
            //if (input.Keyword != null)
            //{
            //    cartQuery = cartQuery.Where(s => s. != null && s.Fullname.Contains(input.Keyword));
            //}
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
