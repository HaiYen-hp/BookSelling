using APIBookSaling.Dtos.BillDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface IBillServices
    {
        void CreateBill(int idCart, CreateBillDto input, List<int> ListIdBook);
        Bill FindById(int id);
        int Deleted(int id);
        void UpdateBill(CreateBillDto input, int id);
        PageResultDto<List<Bill>> FindAll(FilterDto input);
    }
}
