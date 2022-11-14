using APIBookSaling.Dtos.CartsDto;
using APIBookSaling.Exceptions;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace APIBookSaling.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CartController : ApiControllerBase
    {
        private readonly ICartServices _cartServices;

        public CartController(
        ICartServices cartServices,
        ILogger<CustomerController> logger) : base(logger)
        {
            _cartServices = cartServices;
        }
        // GET api/<UserController>/5
        [HttpGet("find-customer/{id}")]
        public IActionResult FindByIdSubject(int id)
        {
            try
            {
                var user = _cartServices.FindById(id);
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
                var user = _cartServices.FindAll(input);
                return Ok(user);
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // use create FromBody
        [HttpPost("create-customer")]
        public IActionResult CreateCustomer(CreateCartDto input)
        {
            try
            {
                _cartServices.CreateCart(input);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // PUT api/<UserController>/5
        [HttpPut("update-customer/{id}")]
        public IActionResult UpdateCustomer(CreateCartDto input, int id)
        {
            try
            {
                _cartServices.UpdateCart(input, id);
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
                _cartServices.Deleted(id);

                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
