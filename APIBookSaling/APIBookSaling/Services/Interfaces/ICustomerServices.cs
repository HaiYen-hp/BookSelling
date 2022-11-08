using APIBookSaling.Dtos.CustomerDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface ICustomerServices
    {
        void CreateCustomer(CreateCustomerDto input);
        Customer FindById(int id);
        int Deleted(int id);
        void UpdateCustomer(CreateCustomerDto input, int id);
        PageResultDto<List<Customer>> FindAll(FilterDto input);
    }
}
