using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diversify.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserTopsController : ControllerBase
    {
        private readonly ILogger<UserTopsController> _logger;

        public UserTopsController(ILogger<UserTopsController> logger)
        {
            _logger = logger;
        }

        [HttpPost]
        [Route("/UserTops/GetUserTopTracks")]
        [ProducesResponseType(typeof(string), 200)]
        [Produces("application/json")]
        public IActionResult GetUserTopTracks([FromBody] string accessToken)
        {
            return Ok("hello out therer");
        }
    }
}
