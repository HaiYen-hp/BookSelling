using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.BillDto.BillDetailDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
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
                TotalPrice = input.TotalPrice,
            });
            _dbContext.SaveChanges();
        }

        public BillDetail FindById(int id)
        {
            var billDetailQuery = _dbContext.billDetails.AsQueryable();
            var billDetailFind = billDetailQuery.FirstOrDefault(s => s.Id == id);
            if (billDetailFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            return billDetailFind;
        }

        public int Deleted(int id)
        {
            var billDetailQuery = _dbContext.billDetails.AsQueryable();
            var billDetailFind = billDetailQuery.FirstOrDefault(s => s.Id == id);
            if (billDetailFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            _dbContext.billDetails.Remove(billDetailFind);
            return 0;
        }

        public void UpdateBill(CreateBillDetailDto input, int id)
        {
            var billDetailQuery = _dbContext.billDetails.AsQueryable();
            var billDetailFind = billDetailQuery.FirstOrDefault(s => s.Id == id);
            if (billDetailFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            billDetailFind.TotalPrice = input.TotalPrice;
            _dbContext.SaveChanges();
        }

        public PageResultDto<List<BillDetail>> FindAll(FilterDto input)
        {
            var billDetailQuery = _dbContext.billDetails.AsQueryable();
            //if (input.Keyword != null)
            //{
            //    billDetailQuery = billDetailQuery.Where(s => s.ListIdBill != null && s.ListIdBill.Contains(input.Keyword));
            //}
            int totalItem = billDetailQuery.Count();

            billDetailQuery = billDetailQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            return new PageResultDto<List<BillDetail>>
            {
                Item = billDetailQuery.ToList(),
                TotalItem = totalItem
            };
        }
    }
}
