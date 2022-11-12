using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.BillDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using APIBookSaling.Utils;

namespace APIBookSaling.Services.Implements
{
    public class BillServices : IBillServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly IHttpContextAccessor _httpContext;

        public BillServices(ILogger<BillServices> logger, ApplicationDbContext dbContext, IHttpContextAccessor httpContext)
        {
            _logger = logger;
            _dbContext = dbContext;
            _httpContext = httpContext;
        }

        public void CreateBill(int idCart, CreateBillDto input)
        {
            var username = CommonUtils.GetCurrentUsername(_httpContext);
            var cartFind = _dbContext.carts.FirstOrDefault(x => x.Id == idCart);
            
            var listBill = new List<Bill>();
            foreach(var idBook in cartFind.IdBook)
            {
                var bookFind = _dbContext.books.FirstOrDefault(x => x.Id == idBook.Id);
                var resultBill = _dbContext.bills.Add(new Bill()
                {
                    IdBook = idBook.Id,
                    BookName = bookFind.BookName,
                    Quatity = input.Quatity,
                    TotalPrice = bookFind.Price * input.Quatity,
                    CreateDate = DateTime.Now,
                    CreateBy = username
                });
                listBill.Add(resultBill.Entity);
            }

            var billSum = listBill.Select(x => x.TotalPrice).Sum();
            _dbContext.billDetails.Add(new BillDetail()
            {
                TotalPrice = billSum,
            });
            _dbContext.SaveChanges();
        }

        public Bill FindById(int id)
        {
            var billQuery = _dbContext.bills.AsQueryable();
            var billFind = billQuery.FirstOrDefault(s => s.Id == id);
            if (billFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            return billFind;
        }

        public int Deleted(int id)
        {
            var billQuery = _dbContext.bills.AsQueryable();
            var billFind = billQuery.FirstOrDefault(s => s.Id == id);
            if (billFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            _dbContext.bills.Remove(billFind);
            return 0;
        }

        public void UpdateBill(CreateBillDto input, int id)
        {
            var billQuery = _dbContext.bills.AsQueryable();
            var billFind = billQuery.FirstOrDefault(s => s.Id == id);
            if (billFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            billFind.IdBook = input.IdBook;
            billFind.TotalPrice = input.TotalPrice;
            billFind.BookName = input.BookName;
            billFind.Quatity = input.Quatity;
            billFind.CreateDate = input.CreateDate;
            billFind.CreateBy = input.CreateBy;
            _dbContext.SaveChanges();
        }

        public PageResultDto<List<Bill>> FindAll(FilterDto input)
        {
            var billQuery = _dbContext.bills.AsQueryable();
            if (input.Keyword != null)
            {
                billQuery = billQuery.Where(s => s.BookName != null && s.BookName.Contains(input.Keyword));
            }
            int totalItem = billQuery.Count();

            billQuery = billQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            return new PageResultDto<List<Bill>>
            {
                Item = billQuery.ToList(),
                TotalItem = totalItem
            };
        }
    }
}
