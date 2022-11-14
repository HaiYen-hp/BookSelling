using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface IBookServices
    {
        void CreateBook(CreateBookDto input);
        BookDto FindById(int id);
        int Deleted(int id);
        void UpdateBook(CreateBookDto input, int id);
        PageResultDto<BookDto> FindAll(FilterDto input);
    }
}
