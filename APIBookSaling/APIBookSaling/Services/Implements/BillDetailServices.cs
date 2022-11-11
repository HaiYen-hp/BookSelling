using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.BillDto.BillDetailDto;
using APIBookSaling.Entities;
using APIBookSaling.Services.Interfaces;

namespace APIBookSaling.Services.Implements
{
    public class BillDetailServices : IBillDetailServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly IHttpContextAccessor _httpContext;

        public BillDetailServices(ILogger<BillDetailServices> logger, ApplicationDbContext dbContext, IHttpContextAccessor httpContext)
        {
            _logger = logger;
            _dbContext = dbContext;
            _httpContext = httpContext;
        }

        public void CreateBill(CreateBillDetailDto input)
        {
            _dbContext.billDetails.Add(new BillDetail()
            {
                ListIdBill = input.ListIdBill,
                TotalPrice = input.TotalPrice,
            });
            _dbContext.SaveChanges();
        }

        public Bill FindById(int id)
        {
            var billDetailQuery = _dbContext.bills.AsQueryable();
            var billDetailFind = billDetailQuery.FirstOrDefault(s => s.Id == id);
            if (billDetailFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            return billDetailFind;
        }

        public int Deleted(int id)
        {
            var billDetailQuery = _dbContext.bills.AsQueryable();
            var billDetailFind = billDetailQuery.FirstOrDefault(s => s.Id == id);
            if (billDetailFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            _dbContext.bills.Remove(billDetailFind);
            return 0;
        }

        public void UpdateBill(CreateBillDetailDto input, int id)
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
