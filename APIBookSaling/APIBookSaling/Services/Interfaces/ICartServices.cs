using APIBookSaling.Dtos.CartsDto;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface ICartServices
    {
        void CreateCart(CreateCartDto input);
        CartDto FindById(int id);
        int Deleted(int id);
        void UpdateCart(CreateCartDto input, int id);
        PageResultDto<CartDto> FindAll(FilterDto input);
    }
}
