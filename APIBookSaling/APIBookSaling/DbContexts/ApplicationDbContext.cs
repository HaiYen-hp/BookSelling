using APIBookSaling.Entities;
using Microsoft.EntityFrameworkCore;

namespace APIBookSaling.DbContexts
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Customer> customers { get; set; }
        public DbSet<User> users { get; set; }
    }
}
