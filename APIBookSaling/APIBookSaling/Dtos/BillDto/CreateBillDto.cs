namespace APIBookSaling.Dtos.BillDto
{
    public class CreateBillDto
    {
        public int IdBook { get; set; }
        public decimal TotalPrice { get; set; }
        // tên quyển sách
        public string BookName { get; set; }
        // số lượng
        public int Quatity { get; set; }
        // ngày tạo
        public DateTime CreateDate { get; set; }
        // người tạo
        public string CreateBy { get; set; }
    }
}
