using APIBookSaling.Dtos.BillDto;
using APIBookSaling.Dtos.BillDto.BillDetailDto;
using APIBookSaling.Dtos.BillDto.BillDetailsDto;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface IBillServices
    {
        void CreateBill(CreateBillDto input, List<int> ListIdBook);
        BillDto FindById(int id);
        int Deleted(int id);
        void UpdateBill(CreateBillDetailDto input, int id);
        PageResultDto<BillDetailDto> FindAll(FilterDto input);
    }
}
