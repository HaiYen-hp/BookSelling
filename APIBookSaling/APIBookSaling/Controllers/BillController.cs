using APIBookSaling.Dtos.BillDto;
using APIBookSaling.Exceptions;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace APIBookSaling.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BillController : ApiControllerBase
    {
        private readonly IBillServices _billServices;

        public BillController(
        IBillServices billServices,
        ILogger<CustomerController> logger) : base(logger)
        {
            _billServices = billServices;
        }
        // GET api/<UserController>/5
        [HttpGet("find-customer/{id}")]
        public IActionResult FindByIdSubject(int id)
        {
            try
            {
                var user = _billServices.FindById(id);
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
                var user = _billServices.FindAll(input);
                return Ok(user);
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // use create FromBody
        [HttpPost("create-customer")]
        public IActionResult CreateCustomer(int idCart, CreateBillDto input)
        {
            try
            {
                _billServices.CreateBill(idCart, input);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // PUT api/<UserController>/5
        [HttpPut("update-customer/{id}")]
        public IActionResult UpdateCustomer(CreateBillDto input, int id)
        {
            try
            {
                _billServices.UpdateBill(input, id);
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
                _billServices.Deleted(id);

                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
