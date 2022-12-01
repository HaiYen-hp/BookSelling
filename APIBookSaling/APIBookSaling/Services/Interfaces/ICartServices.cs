using APIBookSaling.Dtos.CartsDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface ICartServices
    {
        CartDto Find();
        int Deleted(int id);
        void UpdateCart(List<int> idBook);
        PageResultDto<List<Cart>> FindAll(FilterDto input);

    }
}
