using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Entities;

namespace APIBookSaling.Dtos.CartsDto
{
    public class CreateCartDto
    {
        public int IdUser { get; set; }
        public List<Book> IdBook { get; set; }
    }
}
