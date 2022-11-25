using APIBookSaling.Dtos.UsersDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;

namespace APIBookSaling.Services.Interfaces
{
    public interface IUserServices
    {
        void Create(CreateUserDto input);
        string Login(LoginUserDto input);
        public void CreateListUser(List<CreateUserDto> input);
        User FindById(int id);
        PageResultDto<List<User>> FindAll(FilterDto input);
        public int Deleted(int id);
        public void UpdateUser(User input, int id);
    }
}
