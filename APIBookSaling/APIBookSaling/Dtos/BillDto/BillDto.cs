using APIBookSaling.Dtos.BooksDto;

namespace APIBookSaling.Dtos.BillDto
{
    public class BillDto
    {
        public Decimal TotalPrice { get; set; }
        public List<BookDto> Books { get; set; }
    }
}
