using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.BillDto;
using APIBookSaling.Dtos.BillDto.BillDetailsDto;
using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using APIBookSaling.Utils;
using AutoMapper;

namespace APIBookSaling.Services.Implements
{
    public class BillServices : IBillServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly IHttpContextAccessor _httpContext;
        private readonly IMapper _mapper;

        public BillServices(ILogger<BillServices> logger, ApplicationDbContext dbContext, IHttpContextAccessor httpContext, IMapper mapper)
        {
            _logger = logger;
            _dbContext = dbContext;
            _httpContext = httpContext;
            _mapper = mapper;
        }

        public void CreateBill(CreateBillDto input, List<int> ListIdBook)
        {
            var username = CommonUtils.GetCurrentUsername(_httpContext);
            var userId = CommonUtils.GetCurrentUserId(_httpContext);
            // tìm kiếm giỏ hàng
            var cartFind = _dbContext.carts.FirstOrDefault(x => x.IdUser == userId);
            var bill = _dbContext.bills.Add(new Bill());
            List<BillDetail> listBillDetail = new List<BillDetail>();
            // với mỗi id trong giỏ hàng được tích
            foreach (var IdBook in ListIdBook)
            {
                var cartDetailFind = _dbContext.cardDetails.FirstOrDefault(x => x.IdCard == cartFind.Id && x.IdBook == IdBook);
                // add billDetail khi thanh toán giỏ hàng
                var bookFind = _dbContext.books.FirstOrDefault(x => x.Id == IdBook);
                // add billDetail
                var resultBill = _dbContext.billDetails.Add(new BillDetail()
                {
                    IdBook = IdBook,
                    BillId = bill.Entity.Id,
                    BookName = bookFind.BookName,
                    Quantity = cartDetailFind.Quantity,
                    TotalPrice = bookFind.Price * cartDetailFind.Quantity,
                    CreateDate = DateTime.Now,
                    CreateBy = username,
                });
                // tìm sách để xóa
                var cardBookFind = _dbContext.cardDetails.FirstOrDefault(x => x.IdBook == IdBook);
                // tìm BillDetail để add vào list 
                var billDetailFind = _dbContext.billDetails.FirstOrDefault(b => b.Id == resultBill.Entity.Id);
                listBillDetail.Add(billDetailFind);
                // xóa những quyển sách được thanh toán trong giỏ hàng
                _dbContext.cardDetails.Remove(cardBookFind);
            }
            // tính tổng bill
            var billSum = listBillDetail.Select(x => x.TotalPrice).Sum();
            // add detailBill và tổng của giỏ hàng

            bill.Entity.TotalPrice = billSum;
            bill.Entity.IdCard = cartFind.Id;
            bill.Entity.IdUser = userId;

            _dbContext.SaveChanges();
        }

        /// <summary>
        /// lấy tất cả bill của user đăng nhập
        /// </summary>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public List<BillDto> Find()
        {
            var userId = CommonUtils.GetCurrentUserId(_httpContext);
            var billQuery = _dbContext.bills.AsQueryable().Where(o => o.IdUser == userId);
            List<BillDto> ListBill = new List<BillDto>();
            foreach (var billItem in billQuery)
            {
                var billDetailQuery = _dbContext.bills.AsQueryable();
                if (billItem == null)
                {
                    throw new Exception("khong tim thay hoa don");
                }
                foreach (var item in billDetailQuery)
                {
                    var billDetailFind = _dbContext.billDetails.FirstOrDefault(s => s.Id == item.Id && s.BillId == billItem.Id);
                    var bookFind = _dbContext.books.FirstOrDefault(b => b.Id == billDetailFind.IdBook);
                    billItem.IdBook.Add(bookFind);
                }
                var billMap = _mapper.Map<BillDto>(billItem);
                ListBill.Add(billMap);
            }    
            return ListBill;
        }


        /// <summary>
        /// tìm bill theo id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        /// <exception cref="Exception"></exception>
        public BillDto FindById(int id)
        {
            var billQuery = _dbContext.bills.AsQueryable();
            var billFind = billQuery.FirstOrDefault(s => s.Id == id);
            var billDetailQuery = _dbContext.bills.AsQueryable();
            if (billFind == null)
            {
                throw new Exception("khong tim thay hoa don");
            }
            foreach(var item in billDetailQuery)
            {
                var billDetailFind = _dbContext.billDetails.FirstOrDefault(s => s.Id == item.Id && s.BillId == billFind.Id);
                var bookFind = _dbContext.books.FirstOrDefault(b => b.Id == billDetailFind.IdBook);
                billFind.IdBook.Add(bookFind);
            }
            var bill = _mapper.Map<BillDto>(billFind);
            return bill;
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

        public void UpdateBill(CreateBillDetailDto input, int id)
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
