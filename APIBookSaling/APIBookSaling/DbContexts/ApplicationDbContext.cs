using APIBookSaling.Constants;
using APIBookSaling.Entities;
using Microsoft.EntityFrameworkCore;
using System.Data;

namespace APIBookSaling.DbContexts
{
    public class ApplicationDbContext : DbContext
    {
        public DbSet<User> users { get; set; }
        public DbSet<Book> books { get; set; }
        public DbSet<Cart> carts { get; set; }
        public DbSet<CardDetail> cardDetails { get; set; }
        public DbSet<Bill> bills { get; set; }
        public DbSet<BillDetail> billDetails { get; set; }
        public DbSet<HistoryBill> historyBills { get; set; }
        public DbSet<HistoryPrice> historyPrices { get; set; }

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

                entity.Property(e => e.UserType)
                    .HasDefaultValue(UserTypes.Customer)
                    .IsRequired();

            });

            modelBuilder.Entity<HistoryPrice>(entity =>
            {
                entity.ToTable("HistoryPrice");
                entity.HasKey(e => e.Id);
                entity.Property(s => s.Id)
                    .ValueGeneratedOnAdd()
                    .IsRequired();

                entity.Property(e => e.Price)
                    .IsRequired();

                entity.Property(e => e.BookCode)
                    .HasColumnType("nvarchar(500)")
                    .IsRequired();

                entity.Property(e => e.BookId)
                    .HasColumnType("nvarchar(500)")
                    .IsRequired();
            });

            modelBuilder.Entity<Book>(entity =>
            {
                entity.ToTable("Book");
                entity.HasKey(e => e.Id);
                entity.Property(s => s.Id)
                    .ValueGeneratedOnAdd()
                    .IsRequired();

                entity.Property(e => e.BookName)
                    .IsRequired();

                entity.Property(e => e.Author)
                    .IsRequired();

                entity.Property(e => e.TypeOfBook)
                    .IsRequired();

                entity.Property(e => e.Price)
                    .IsRequired();

                entity.Property(e => e.BookCode)
                    .IsRequired();

                entity.Property(e => e.Image)
                    .IsRequired();
            });
        }
    }
}
