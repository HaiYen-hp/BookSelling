using APIBookSaling.DbContexts;
using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Entities;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using AutoMapper;

namespace APIBookSaling.Services.Implements
{
    public class BookServices : IBookServices
    {
        private readonly ILogger _logger;
        private readonly ApplicationDbContext _dbContext;
        private readonly IMapper _mapper;
        private readonly IConfiguration _configuration;

        public BookServices(ILogger<BookServices> logger, ApplicationDbContext dbContext, IMapper mapper, IConfiguration configuration)
        {
            _logger = logger;
            _dbContext = dbContext;
            _mapper = mapper;
            _configuration = configuration;
        }

        public BookDto CreateBook(FileUpLoad fileObj, BookDto input)
        {
            if (fileObj.file.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    fileObj.file.CopyToAsync(ms);
                    var fileBytes = ms.ToArray();
                    
                    _dbContext.books.Add(new Book()
                    {
                        BookName = input.BookName,
                        Author = input.Author,
                        TypeOfBook = input.TypeOfBook,
                        BookCode = input.BookCode,
                        Price = input.Price,
                        Image = fileBytes,
                });
                }
            }
            _dbContext.SaveChanges();
            return input;
        }

        public BookDto FindById(int id)
        {
            var bookQuery = _dbContext.books.AsQueryable();
            var bookFind = bookQuery.FirstOrDefault(s => s.Id == id);
            if (bookFind == null)
            {
                throw new Exception("khong tim thay sach");
            }
            var bookItem= _mapper.Map<BookDto>(bookFind);

            return bookItem;
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

        public void UpdateBook(CreateBookDto input, int id)
        {
            var bookQuery = _dbContext.books.AsQueryable();
            var bookFind = bookQuery.FirstOrDefault(s => s.Id == id);
            if (bookFind == null)
            {
                throw new Exception("khong tim thay sach");
            }
            // tạo lịch sử thay đổi giá
            if (bookFind.Price != input.Price)
            {
                _dbContext.historyPrices.Add(new HistoryPrice()
                {
                    Price = bookFind.Price,
                    BookId = bookFind.Id,
                    BookCode = bookFind.BookCode,
                });
            }
            bookFind.BookName = input.BookName;
            bookFind.Author = input.Author;
            bookFind.TypeOfBook = input.TypeOfBook;
            bookFind.Price = input.Price;
            _dbContext.SaveChanges();
        }

        public PageResultDto<BookDto> FindAll(FilterDto input)
        {
            var bookQuery = _dbContext.books.AsQueryable();
            if (input.Keyword != null)
            {
                bookQuery = bookQuery.Where(s => s.BookName != null && s.BookName.Contains(input.Keyword));
            }
            int totalItem = bookQuery.Count();

            bookQuery = bookQuery.Skip(input.PageSize * (input.PageIndex - 1)).Take(input.PageSize);
            var bookItem = _mapper.Map<BookDto>(bookQuery);
            return new PageResultDto<BookDto>
            {
                Item = bookItem,
                TotalItem = totalItem
            };
        }


        public byte[] GetImage(string sBase64String)
        {
            byte[] bytes = null;
            if (!string.IsNullOrEmpty(sBase64String))
            {
                bytes = Convert.FromBase64String(sBase64String);
            }
            return bytes;
        }
    }
}
