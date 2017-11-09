using System.ComponentModel.DataAnnotations;

namespace AngularWorkshopBackendApplication.Data.Model
{
    public class User
    {
        [Key]
        [StringLength(50)]
        public string UserName { get; set; }
        [StringLength(20)]
        public string Password { get; set; }
    }
}