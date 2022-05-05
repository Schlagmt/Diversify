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
    public class DiversifyController : ControllerBase
    {
        private readonly ILogger<DiversifyController> _logger;

        public DiversifyController(ILogger<DiversifyController> logger)
        {
            _logger = logger;
        }
    }
}
