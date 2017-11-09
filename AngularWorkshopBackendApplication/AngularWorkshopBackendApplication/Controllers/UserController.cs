using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularWorkshopBackendApplication.Data;
using AngularWorkshopBackendApplication.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularWorkshopBackendApplication.Controllers
{
    [Produces("application/json")]
    [Route("api/User")]
    public class UserController : Controller
    {
        private readonly AngularWorkshopContext _context;

        public UserController(AngularWorkshopContext context)
        {
            _context = context;
        }
        [HttpPost("Login")]
        public async Task<bool> Login([FromBody]User user)
        {
            return await _context.User.AnyAsync(f => f.UserName == user.UserName && f.Password == user.Password);
        }
    }
}