using APIBookSaling.Dtos.BillDto.BillDetailDto;
using APIBookSaling.Dtos.BillDto.BillDetailsDto;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface IBillDetailServices
    {
        BillDetailDto FindById(int id);
        int Deleted(int id);
        void UpdateBillDetail(CreateBillDetailDto input, int id);
        PageResultDto<BillDetailDto> FindAll(FilterDto input);
    }
}
