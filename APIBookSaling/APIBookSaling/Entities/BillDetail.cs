namespace APIBookSaling.Entities
{
    public class BillDetail
    {
        public int Id { get; set; }
        public int IdBill { get; set; }
        // tổng giá trị cả đơn hàng
        public Decimal TotalPrice { get; set; }

        public List<Bill> ListIdBill { get; set; }
    }
}
