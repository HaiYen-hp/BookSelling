namespace APIBookSaling.Dtos.CustomerDto
{
    public class CreateCustomerDto
    {
        public string Fullname { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string CCCD { get; set; }
        public string Address { get; set; }
    }
}
