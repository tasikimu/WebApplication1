using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entities
{
    public class OrderDetails
{
        [Key]
        public int OrderId { get; set; }
        public decimal Price { get; internal set; }
        public int Quantity { get; set; }
    }
}
