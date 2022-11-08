using APIBookSaling.Constants;
using APIBookSaling.Dtos.CustomerDto;
using APIBookSaling.Entities;
using APIBookSaling.Exceptions;
using APIBookSaling.Filters;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace APIBookSaling.Controllers
{
    [Authorize]
    [AuthenticationFilter(UserTypes.Customer)]
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ApiControllerBase
    {
        private readonly ICustomerServices _customerServices;

        public CustomerController(
        ICustomerServices customerServices,
        ILogger<CustomerController> logger) : base(logger)
        {
            _customerServices = customerServices;
        }
        // GET api/<UserController>/5
        [HttpGet("find-customer/{id}")]
        public IActionResult FindByIdSubject(int id)
        {
            try
            {
                var user = _customerServices.FindById(id);
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
                var user = _customerServices.FindAll(input);
                return Ok(user);
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [Authorize]
        // use create FromBody
        [HttpPost("create-customer")]
        public IActionResult CreateCustomer(CreateCustomerDto input)
        {
            try
            {
                _customerServices.CreateCustomer(input);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // PUT api/<UserController>/5
        [HttpPut("update-customer/{id}")]
        public IActionResult UpdateCustomer(Customer input, int id)
        {
            try
            {
                _customerServices.UpdateCustomer(input, id);
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
                _customerServices.Deleted(id);

                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
