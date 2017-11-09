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
    [Route("api/Comment")]
    public class CommentController : Controller
    {
        private readonly AngularWorkshopContext _context;

        public CommentController(AngularWorkshopContext context)
        {
            _context = context;
        }
        [HttpPost("Insert")]
        public async Task<bool> Insert(Comment comment)
        {
            _context.Comment.Add(comment);
            await _context.SaveChangesAsync();
            return true;
        }

    }
}