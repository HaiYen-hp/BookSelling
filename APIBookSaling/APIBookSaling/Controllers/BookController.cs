using APIBookSaling.Dtos.BooksDto;
using APIBookSaling.Exceptions;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace APIBookSaling.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BookController : ApiControllerBase
    {
        private readonly IBookServices _bookServices;

        public BookController(
        IBookServices bookServices,
        ILogger<CustomerController> logger) : base(logger)
        {
            _bookServices = bookServices;
        }
        // GET api/<UserController>/5
        [HttpGet("find-customer/{id}")]
        public IActionResult FindByIdSubject(int id)
        {
            try
            {
                var user = _bookServices.FindById(id);
                return Ok(user);
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpGet("find-customer")]
        public IActionResult FindAll(FilterDto input)
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

        // use create FromBody
        [HttpPost("create-customer")]
        public IActionResult CreateCustomer(CreateBookDto input)
        {
            try
            {
                _bookServices.CreateBook(input);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // PUT api/<UserController>/5
        [HttpPut("update-customer/{id}")]
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
        [HttpDelete("delete-customer/{id}")]
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
    }
}
