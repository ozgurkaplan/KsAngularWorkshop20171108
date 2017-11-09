using System.ComponentModel.DataAnnotations;

namespace AngularWorkshopBackendApplication.Data.Model
{
    public class Post
    {
        public int Id { get; set; }
        [Required]
        [StringLength(50)]
        public string Title { get; set; }
        [Required]
        [StringLength(250)]
        public string Summary { get; set; }
        public string Text { get; set; }
        [Required]
        public long Date { get; set; }
        public double Score { get; set; }
        public int ViewCount  { get; set; }
    }
}