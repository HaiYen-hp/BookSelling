namespace APIBookSaling.Dtos.BooksDto
{
    public class CreateBookDto
    {
        public int Id { get; set; }
        // ten quyen sach
        public string BookName { get; set; }
        // tac gia
        public string Author { get; set; }
        // the loai sach
        public string TypeOfBook { get; set; }
        // gia quyen sach
        public decimal Price { get; set; }
        public string BookCode { get; set; }
    }
}
