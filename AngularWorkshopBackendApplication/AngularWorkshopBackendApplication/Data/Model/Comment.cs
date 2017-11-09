using System.ComponentModel.DataAnnotations;

namespace AngularWorkshopBackendApplication.Data.Model
{
    public class Comment
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        [Required]
        [StringLength(100)]
        public string Title { get; set; }
        [Required]
        [StringLength(500)]
        public string Text { get; set; }
        public long Date { get; set; }
    }
}