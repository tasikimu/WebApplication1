using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Entities;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly DataContext context;

        public OrderController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Order>>> Get()
        {
            return Ok(await context.Orders.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Order>> Get(int id)
        {
            var order = await context.Orders.FindAsync(id);
            if (order == null)
                return BadRequest("order not found.");
            return Ok(order);
        }
        [HttpPost]
        public async Task<ActionResult<List<Order>>> AddOrder(Order order)
        {
            context.Orders.Add(order);
            await context.SaveChangesAsync();
            return Ok(await context.Orders.ToListAsync());
        }

        /*[HttpPut]
        public async Task<ActionResult<List<Order>>> UpdateOrder(Order request)
        {
            var dbOrder = await context.Orders.FindAsync(request.CustomerId);
            if (dbOrder == null)
                return BadRequest("order not found.");

            dbOrder.pr = request.Amount;
            dbOrder.ShippingAdress = request.ShippingAdress;
            dbOrder.OrderEmail = request.OrderEmail;

            await context.SaveChangesAsync();
            return Ok(await context.Orders.ToListAsync());
        }*/
        [HttpDelete("{id}")]
        public async Task<ActionResult<Order>> Delete(int id)
        {
            var dbOrder = await context.Orders.FindAsync(id);
            if (dbOrder == null)
                return BadRequest("order not found.");
            context.Orders.Remove(dbOrder);
            await context.SaveChangesAsync();
            return Ok(await context.Orders.ToListAsync());
        }
    }
}