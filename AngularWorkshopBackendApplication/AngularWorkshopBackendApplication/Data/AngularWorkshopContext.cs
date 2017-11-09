using AngularWorkshopBackendApplication.Data.Model;
using Microsoft.EntityFrameworkCore;

namespace AngularWorkshopBackendApplication.Data
{
    public class AngularWorkshopContext:DbContext
    {
        public AngularWorkshopContext(DbContextOptions options) : base(options) { }

        public DbSet<User> User { get; set; }
        public DbSet<Post> Post { get; set; }
        public DbSet<Rating> Rating { get; set; }
        public DbSet<Comment> Comment { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            base.OnModelCreating(modelBuilder);
        }
    }
}