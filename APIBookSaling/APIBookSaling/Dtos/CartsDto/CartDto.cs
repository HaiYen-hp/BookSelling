using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Entities;

namespace APIBookSaling.Dtos.CartsDto
{
    public class CartDto
    {
        public int IdUser { get; set; }
        public List<BookDto> IdBook { get; set; }
    }
}
