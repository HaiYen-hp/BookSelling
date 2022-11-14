namespace APIBookSaling.Entities
{
    public class HistoryPrice
    {
        public int Id { get; set; }
        public decimal Price { get; set; }
        public string BookCode { get; set; }
        public int BookId { get; set; }
    }
}
