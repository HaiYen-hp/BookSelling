using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.BookDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;

namespace APIBookSaling.Services.Implements
{
    public class BookServices : IBookServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;

        public BookServices(ILogger<BookServices> logger, ApplicationDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        public void CreateCustomer(CreateBookDto input)
        {
            _dbContext.books.Add(new Book()
            {
                BookName = input.BookName,
                Author = input.Author,
                TypeOfBook = input.TypeOfBook,
                Price = input.Price,
                BookCode = input.BookCode,
            });
            _dbContext.SaveChanges();
        }

        public Book FindById(int id)
        {
            var bookQuery = _dbContext.books.AsQueryable();
            var bookFind = bookQuery.FirstOrDefault(s => s.Id == id);
            if (bookFind == null)
            {
                throw new Exception("khong tim thay sach");
            }
            return bookFind;
        }

        public int Deleted(int id)
        {
            var bookQuery = _dbContext.books.AsQueryable();
            var bookFind = bookQuery.FirstOrDefault(s => s.Id == id);
            if (bookFind == null)
            {
                throw new Exception("khong tim thay sach");
            }
            _dbContext.books.Remove(bookFind);
            return 0;
        }

        public void UpdateCustomer(CreateBookDto input, int id)
        {
            var bookQuery = _dbContext.books.AsQueryable();
            var bookFind = bookQuery.FirstOrDefault(s => s.Id == id);
            if (bookFind == null)
            {
                throw new Exception("khong tim thay sach");
            }
            bookFind.BookName = input.BookName;
            bookFind.Author = input.Author;
            bookFind.TypeOfBook = input.TypeOfBook;
            bookFind.Price = input.Price;
            _dbContext.SaveChanges();
        }

        public PageResultDto<List<Book>> FindAll(FilterDto input)
        {
            var bookQuery = _dbContext.books.AsQueryable();
            if (input.Keyword != null)
            {
                bookQuery = bookQuery.Where(s => s.BookName != null && s.BookName.Contains(input.Keyword));
            }
            int totalItem = bookQuery.Count();

            bookQuery = bookQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            return new PageResultDto<List<Book>>
            {
                Item = bookQuery.ToList(),
                TotalItem = totalItem
            };
        }
    }
}
