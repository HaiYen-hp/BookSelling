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

        public void CreateBill(int idCart, CreateBillDto input, List<int> ListIdBook)
        {
            var username = CommonUtils.GetCurrentUsername(_httpContext);
            // tìm kiếm giỏ hàng
            var cartFind = _dbContext.carts.FirstOrDefault(x => x.Id == idCart);

            var historyBill = _dbContext.historyBills.Add(new HistoryBill()
            {
                BillDate = DateTime.Now,
            });

            var listBill = new List<Bill>();
            // với mỗi id trong giỏ hàng được tích
            foreach (var IdBook in ListIdBook)
            {
                // add bill khi thanh toán giỏ hàng
                    var bookFind = _dbContext.books.FirstOrDefault(x => x.Id == IdBook);
                    var resultBill = _dbContext.bills.Add(new Bill()
                    {
                        IdBook = IdBook,
                        BookName = bookFind.BookName,
                        Quatity = input.Quatity,
                        TotalPrice = bookFind.Price * input.Quatity,
                        CreateDate = DateTime.Now,
                        CreateBy = username,
                        IdHistoryBill = historyBill.Entity.Id,
                    });
                    listBill.Add(resultBill.Entity);
                var cardBookFind = _dbContext.cardBook.FirstOrDefault(x => x.IdBook == IdBook);
                _dbContext.cardBook.Remove(cardBookFind);
            }

            // tính tổng bill
            var billSum = listBill.Select(x => x.TotalPrice).Sum();
            // add detailBill và tổng của giỏ hàng
            _dbContext.billDetails.Add(new BillDetail()
            {
                TotalPrice = billSum,
                IdCard = idCart,
                IdHistoryBill = historyBill.Entity.Id,
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
            _dbContext.SaveChanges();
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
