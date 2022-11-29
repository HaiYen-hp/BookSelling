using APIBookSaling.Dtos.CartsDto;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface ICartServices
    {
        CartDto FindById(int id);
        int Deleted(int id);
        void UpdateCart(List<int> idBook);
        PageResultDto<CartDto> FindAll(FilterDto input);
    }
}
