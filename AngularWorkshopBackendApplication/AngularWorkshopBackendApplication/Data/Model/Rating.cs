namespace AngularWorkshopBackendApplication.Data.Model
{
    public class Rating
    {
        public int Id { get; set; }
        public int PostId { get; set; }
        public int Score { get; set; }
    }
}