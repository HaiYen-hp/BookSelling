using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.BillDto.BillDetailsDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using AutoMapper;

namespace APIBookSaling.Services.Implements
{
    public class BillDetailServices : IBillDetailServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly IHttpContextAccessor _httpContext;
        private readonly IMapper _mapper;

        public BillDetailServices(ILogger<BillDetailServices> logger, ApplicationDbContext dbContext, IHttpContextAccessor httpContext, IMapper mapper)
        {
            _logger = logger;
            _dbContext = dbContext;
            _httpContext = httpContext;
            _mapper = mapper;
        }

        public BillDetailDto FindById(int id)
        {
            var billDetailQuery = _dbContext.billDetails.AsQueryable();
            var billDetailFind = billDetailQuery.FirstOrDefault(s => s.Id == id);
            if (billDetailFind == null)
            {
                throw new Exception("khong tim thay chi tiet hoa don");
            }
            var billDetailItem = _mapper.Map<BillDetailDto>(billDetailFind);
            return billDetailItem;
        }

        public int Deleted(int id)
        {
            var billDetailQuery = _dbContext.billDetails.AsQueryable();
            var billDetailFind = billDetailQuery.FirstOrDefault(s => s.Id == id);
            if (billDetailFind == null)
            {
                throw new Exception("khong tim thay chi tiet hoa don");
            }
            _dbContext.billDetails.Remove(billDetailFind);
            _dbContext.SaveChanges();
            return 0;
        }

        public void UpdateBillDetail(CreateBillDetailDto input, int id)
        {
            var billDetailQuery = _dbContext.billDetails.AsQueryable();
            var billDetailFind = billDetailQuery.FirstOrDefault(s => s.Id == id);
            if (billDetailFind == null)
            {
                throw new Exception("khong tim thay chi tiet hoa don");
            }
            billDetailFind.TotalPrice = input.TotalPrice;
            _dbContext.SaveChanges();
        }

        public PageResultDto<BillDetailDto> FindAll(FilterDto input)
        {
            var billDetailQuery = _dbContext.billDetails.AsQueryable();
            //if (input.Keyword != null)
            //{
            //    billDetailQuery = billDetailQuery.Where(s => s.ListIdBill != null && s.ListIdBill.Contains(input.Keyword));
            //}
            int totalItem = billDetailQuery.Count();

            billDetailQuery = billDetailQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            var billDetailItem = _mapper.Map<BillDetailDto>(billDetailQuery);
            return new PageResultDto<BillDetailDto>
            {
                Item = billDetailItem,
                TotalItem = totalItem
            };
        }
    }
}
