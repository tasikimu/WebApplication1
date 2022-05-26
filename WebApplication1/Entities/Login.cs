using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entities
{
    public class Login
    {
        [Key]
        public int Id { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
