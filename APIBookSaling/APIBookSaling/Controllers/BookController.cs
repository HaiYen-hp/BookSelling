using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Entities;
using APIBookSaling.Exceptions;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Text;

namespace APIBookSaling.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ApiControllerBase
    {
        private readonly IBookServices _bookServices = null;

        public BookController(
        IBookServices bookServices,
        ILogger<CustomerController> logger) : base(logger)
        {
            _bookServices = bookServices;
        }
        // GET api/<UserController>/5
        [HttpGet("find-book/{id}")]
        public IActionResult FindByIdSubject(int id)
        {
            try
            {
                var book = _bookServices.FindById(id);
                book.Image = _bookServices.GetImage(Convert.ToBase64String(book.Image));
                return Ok(book);
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("find-book")]
        public IActionResult FindAll([FromQuery] FilterDto input)
        {
            try
            {
                var user = _bookServices.FindAll(input);
                return Ok(user);
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<UserController>/5
        [HttpPut("update-book/{id}")]
        public IActionResult UpdateCustomer(CreateBookDto input, int id)
        {
            try
            {
                _bookServices.UpdateBook(input, id);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<UserController>/5
        [HttpDelete("delete-book/{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            try
            {
                _bookServices.Deleted(id);

                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // use create FromBody
        [HttpPost("create-book")]
        public IActionResult CreateBook([FromQuery] FileUpLoad fileObj,[FromQuery] BookDto input)
        {
            try
            {
                _bookServices.CreateBook(fileObj, input);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
