namespace APIBookSaling.Entities
{
    public class Bill
    {
        public int Id { get; set; }
        public int IdBook { get; set; }
        // tổng giá
        public float TotalPrice { get; set; }
        // tên quyển sách
        public string BookName { get; set; }
        // số lượng
        public int Quatity { get; set; }
        // ngày tạo
        public DateTime CreateDate { get; set; }
        // người tạo
        public string CreateBy { get; set; }

        public int IdHistoryBill { get; set; }
    }
}
