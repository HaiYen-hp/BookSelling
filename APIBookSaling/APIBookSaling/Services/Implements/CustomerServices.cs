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
            var manageQuery = _dbContext.customers.AsQueryable();
            var manageFind = manageQuery.FirstOrDefault(s => s.Id == id);
            if (manageFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            return manageFind;
        }

        public int Deleted(int id)
        {
            var manageQuery = _dbContext.customers.AsQueryable();
            var manageFind = manageQuery.FirstOrDefault(s => s.Id == id);
            if (manageFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            _dbContext.customers.Remove(manageFind);
            return 0;
        }

        public void UpdateCustomer(CreateCustomerDto input, int id)
        {
            var manageQuery = _dbContext.customers.AsQueryable();
            var manageFind = manageQuery.FirstOrDefault(s => s.Id == id);
            if (manageFind == null)
            {
                throw new Exception("khong tim thay hoc sinh");
            }
            manageFind.Fullname = input.Fullname;
            manageFind.DateOfBirth = input.DateOfBirth;
            manageFind.CCCD = input.CCCD;
            manageFind.Address = input.Address;
            _dbContext.SaveChanges();
        }

        public PageResultDto<List<Customer>> FindAll(FilterDto input)
        {
            var manageQuery = _dbContext.customers.AsQueryable();
            if (input.Keyword != null)
            {
                manageQuery = manageQuery.Where(s => s.Fullname != null && s.Fullname.Contains(input.Keyword));
            }
            int totalItem = manageQuery.Count();

            manageQuery = manageQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            return new PageResultDto<List<Customer>>
            {
                Item = manageQuery.ToList(),
                TotalItem = totalItem
            };
        }
    }
}
