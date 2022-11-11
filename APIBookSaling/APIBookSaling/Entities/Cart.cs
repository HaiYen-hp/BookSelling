namespace APIBookSaling.Entities
{
    public class Cart
    {
        public int Id { get; set; }
        public int IdUser { get; set; }
        public List<Book> IdBook { get; set; }
    }
}
