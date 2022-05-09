using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Entities
{
    public class Order
    {
        [Key]  
        public int CustomerId { get; set; }

            public decimal Amount { get; set; }

            public string ShippingAdress { get; set; }

            public string OrderEmail { get; set; }
        }
}
