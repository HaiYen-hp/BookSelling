namespace APIBookSaling.Entities
{
    public class Bill
    {
        public int Id { get; set; }
        public int IdCard { get; set; }
        public int IdUser { get; set; }
        public float TotalPrice { get; set; }
        public List<Book> IdBook { get; set; }
    }
}