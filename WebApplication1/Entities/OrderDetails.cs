using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entities
{
    public class OrderDetails
    {
        [Key]
        public int Id { get; set; }
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}
