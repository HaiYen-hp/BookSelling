using APIBookSaling.Constants;
using APIBookSaling.Entities;
using Microsoft.EntityFrameworkCore;

namespace APIBookSaling.DbContexts
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<Customer> customers { get; set; }
        public DbSet<User> users { get; set; }
        public DbSet<Book> books { get; set; }
        public DbSet<Cart> carts { get; set; }

        public ApplicationDbContext()
        {
        }
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Customer>(entity =>
            {
                entity.ToTable("Customer");
                entity.HasKey(e => e.Id);
                entity.Property(s => s.Id)
                    .ValueGeneratedOnAdd()
                    .IsRequired();

                entity.Property(e => e.Fullname)
                    .HasColumnType("nvarchar(100)")
                    .IsRequired();

                entity.Property(e => e.DateOfBirth)
                    .HasColumnType("date")
                    .IsRequired();

                entity.Property(e => e.CCCD)
                    .HasColumnType("nvarchar(100)")
                    .IsRequired();

                entity.Property(e => e.Address)
                    .HasColumnType("nvarchar(100)")
                    .IsRequired();
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.ToTable("User");
                entity.HasKey(e => e.Id);
                entity.Property(s => s.Id)
                    .ValueGeneratedOnAdd()
                    .IsRequired();

                entity.Property(e => e.UserName)
                    .IsUnicode(false)
                    .HasMaxLength(50)
                    .IsRequired();

                entity.Property(e => e.Password)
                    .IsUnicode(false)
                    .HasMaxLength(100)
                    .IsRequired();

                entity.Property(e => e.Email)
                    .HasColumnType("nvarchar(100)")
                    .IsRequired();

                entity.Property(e => e.Phone)
                    .HasColumnType("nvarchar(100)")
                    .IsRequired();

                entity.Property(e => e.UserType)
                    .HasDefaultValue(UserTypes.Customer)
                    .IsRequired();

                entity.Property(e => e.CustomerId)
                    .IsRequired();
            });
        }
    }
}
