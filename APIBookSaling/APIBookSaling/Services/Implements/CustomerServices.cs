using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.CustomerDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;

namespace APIBookSaling.Services.Implements
{
    public class CustomerServices : ICustomerServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        public CustomerServices(ILogger<CustomerServices> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        public void CreateCustomer(CreateCustomerDto input)
        {
            _dbContext.customers.Add(new Customer()
            {
                Fullname = input.Fullname,
                DateOfBirth = input.DateOfBirth,
                CCCD = input.CCCD,
                Address = input.Address,
            });
            _dbContext.SaveChanges();
        }

        public Customer FindById(int id)
        {
            var customerQuery = _dbContext.customers.AsQueryable();
            var customerFind = customerQuery.FirstOrDefault(s => s.Id == id);
            if (customerFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            return customerFind;
        }

        public int Deleted(int id)
        {
            var customerQuery = _dbContext.customers.AsQueryable();
            var customerFind = customerQuery.FirstOrDefault(s => s.Id == id);
            if (customerFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            _dbContext.customers.Remove(customerFind);
            return 0;
        }

        public void UpdateCustomer(CreateCustomerDto input, int id)
        {
            var customerQuery = _dbContext.customers.AsQueryable();
            var customerFind = customerQuery.FirstOrDefault(s => s.Id == id);
            if (customerFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            customerFind.Fullname = input.Fullname;
            customerFind.DateOfBirth = input.DateOfBirth;
            customerFind.CCCD = input.CCCD;
            customerFind.Address = input.Address;
            _dbContext.SaveChanges();
        }

        public PageResultDto<List<Customer>> FindAll(FilterDto input)
        {
            var customerQuery = _dbContext.customers.AsQueryable();
            if (input.Keyword != null)
            {
                customerQuery = customerQuery.Where(s => s.Fullname != null && s.Fullname.Contains(input.Keyword));
            }
            int totalItem = customerQuery.Count();

            customerQuery = customerQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            return new PageResultDto<List<Customer>>
            {
                Item = customerQuery.ToList(),
                TotalItem = totalItem
            };
        }
    }
}
