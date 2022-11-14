using APIBookSaling.Dtos.BookDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface IBookServices
    {
        void CreateBook(CreateBookDto input);
        Book FindById(int id);
        int Deleted(int id);
        void UpdateBook(CreateBookDto input, int id);
        PageResultDto<List<Book>> FindAll(FilterDto input);
    }
}
