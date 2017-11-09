using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AngularWorkshopBackendApplication.Data;
using AngularWorkshopBackendApplication.Data.Dto;
using AngularWorkshopBackendApplication.Data.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AngularWorkshopBackendApplication.Controllers
{
    [Produces("application/json")]
    [Route("api/Post")]
    public class PostController : Controller
    {
        private readonly AngularWorkshopContext _context;

        public PostController(AngularWorkshopContext context)
        {
            _context = context;
        }
        [HttpPost("Insert")]
        public async Task<bool> Insert([FromBody]Post post)
        {
            post.Date = DateTimeOffset.UtcNow.ToUnixTimeSeconds();
            _context.Post.Add(post);
            await _context.SaveChangesAsync();
            return true;
        }

        [HttpPost("Update")]
        public async Task<bool> Update(Post post)
        {
            _context.Post.Update(post);
            await _context.SaveChangesAsync();
            return true;
        }

        [HttpGet("{id}")]
        public async Task<Post> Get(int id)
        {
            var post = await _context.Post.FirstOrDefaultAsync(f => f.Id == id);
            post.ViewCount++;
            await _context.SaveChangesAsync();
            return post;
        }

        [HttpGet]
        public async Task<Post[]> Get()
        {
            var posts = await _context.Post.OrderByDescending(o => o.Date).ToArrayAsync();
            return posts;
        }

        [HttpGet("GetComments/{postId}")]
        public async Task<Comment[]> GetPostComments(int postId)
        {
            var comments = await _context.Comment.Where(w => w.PostId == postId).ToArrayAsync();
            return comments;
        }

        [HttpPost("Rate")]
        public async Task<double> Rate([FromBody] RateDto rate)
        {
            _context.Rating.Add(new Rating()
            {
                PostId = rate.PostId,
                Score = rate.Score
            });
            await _context.SaveChangesAsync();
            var post = await _context.Post.FirstOrDefaultAsync(f => f.Id == rate.PostId);
            var avg = await _context.Rating.Where(w => w.PostId == rate.PostId).Select(s => s.Score).ToListAsync();
            post.Score = avg.Average();
            await _context.SaveChangesAsync();
            return post.Score;
        }
    }
}