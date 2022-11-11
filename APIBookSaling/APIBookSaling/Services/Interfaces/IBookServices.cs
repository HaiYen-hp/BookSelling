using APIBookSaling.Dtos.BookDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface IBookServices
    {
        void CreateCustomer(CreateBookDto input);
        Book FindById(int id);
        int Deleted(int id);
        void UpdateCustomer(CreateBookDto input, int id);
        PageResultDto<List<Book>> FindAll(FilterDto input);
    }
}
