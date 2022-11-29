using APIBookSaling.Constants;
using APIBookSaling.Dtos.UsersDto;
using APIBookSaling.Entities;
using APIBookSaling.Exceptions;
using APIBookSaling.Filters;
using APIBookSaling.Page;
using APIBookSaling.Services.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;


namespace APIBookSaling.Controllers
{
    //[Authorize]
    //[AuthenticationFilter(UserTypes.Admin)]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ApiControllerBase
    {
        private readonly IUserServices _userService;

        public UserController(
            IUserServices userService,
            ILogger<UserController> logger) : base(logger)
        {
            _userService = userService;
        }

        [HttpPost("create")]
        public IActionResult Create(CreateUserDto input)
        {
            try
            {
                _userService.Create(input);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return ReturnException(ex);
            }
        }

        [HttpPost("login")]
        public IActionResult Login(LoginUserDto input)
        {
            try
            {
                string token = _userService.Login(input);
                return Ok(new { token });
            }
            catch (UserFriendlyException ex)
            {
                return ReturnException(ex);
            }
        }

        [HttpPost("create-list-user")]
        public IActionResult CreateListUser(List<CreateUserDto> input)
        {
            try
            {
                _userService.CreateListUser(input);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return ReturnException(ex);
            }
        }
        [HttpGet("find-user-by-id/{id}")]
        public IActionResult FindByUserId(int id)
        {
            try
            {
                var user = _userService.FindById(id);
                return Ok(user);
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("find-user")]
        public IActionResult FindAll([FromQuery] FilterDto input)
        {
            try
            {
                var user = _userService.FindAll(input);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("get-info-user")]
        public IActionResult GetMyInfo()
        {
            try
            {
                var user = _userService.GetMyInfo();
                return Ok(user);
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut("update-user/{id}")]
        public IActionResult UpdateUser(User input, int id)
        {
            try
            {
                _userService.UpdateUser(input, id);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }
        // DELETE api/<UserController>/5
        [HttpDelete("delete-user/{id}")]
        public IActionResult DeleteUser(int id)
        {
            try
            {
                _userService.Deleted(id);
                return Ok();
            }
            catch (UserFriendlyException ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
