using APIBookSaling.Entities;

namespace APIBookSaling.Dtos.BillDto.BillDetailDto
{
    public class CreateBillDetailDto
    {
        public List<Bill> ListIdBill { get; set; }
        // tổng giá trị cả đơn hàng
        public Decimal TotalPrice { get; set; }
    }
}
