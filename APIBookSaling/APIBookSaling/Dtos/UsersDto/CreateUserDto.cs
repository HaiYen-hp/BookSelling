namespace APIBookSaling.Dtos.UsersDto
{
    public class CreateUserDto
    {
        private string _username;
        public string Username
        {
            get => _username;
            set => _username = value?.Trim();
        }

        private string _password;
        public string Password
        {
            get => _password;
            set => _password = value?.Trim();
        }
        public string Email { get; set; }
        public int UserType { get; set; }
        public int CustomerId { get; set; }
    }
}
