using APIBookSaling.Entities;

namespace APIBookSaling.Dtos.BillDto.BillDetailDto
{
    public class CreateBillDetailDto
    {
        // tổng giá trị cả đơn hàng
        public Decimal TotalPrice { get; set; }
    }
}
