using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entities
{
    public class Order
    {
        [Key]  
        public int CustomerId { get; set; }
        public decimal Price { get; set; }
        public int quantity  { get; set;}
        public string name { get; set; }
        public string image { get; set; }

    }
}
