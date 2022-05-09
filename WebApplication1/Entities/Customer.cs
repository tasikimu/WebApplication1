using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entities
{
    public class Customer
    {
        [Key]
        public int Id { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Fullname { get; set; }
        public string Address { get; set;}
        public string UserName { get; set; } 
    }
}
