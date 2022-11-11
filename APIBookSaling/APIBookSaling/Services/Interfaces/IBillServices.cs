using APIBookSaling.Dtos.BillDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface IBillServices
    {
        void CreateBill(CreateBillDto input);
        Bill FindById(int id);
        int Deleted(int id);
        void UpdateBill(CreateBillDto input, int id);
        PageResultDto<List<Bill>> FindAll(FilterDto input);
    }
}
