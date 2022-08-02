using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Entities;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderDetailsController : ControllerBase
    {
        private readonly DataContext context;

        public OrderDetailsController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<OrderDetails>>> Get()
        {
            return Ok(await context.OrderDetailss.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<OrderDetails>> Get(int id)
        {
            var order = await context.OrderDetailss.FindAsync(id);
            if (order == null)
                return BadRequest("order not found.");
            return Ok(order);
        }
        [HttpPost]
        public async Task<ActionResult<List<OrderDetails>>> AddOrder(OrderDetails order)
        {
            context.OrderDetailss.Add(order);
            await context.SaveChangesAsync();
            return Ok(await context.OrderDetailss.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<OrderDetails>>> UpdateOrder(OrderDetails request)
        {
            var dbOrder = await context.OrderDetailss.FindAsync(request.Id);
            if (dbOrder == null)
                return BadRequest("order not found.");

            dbOrder.Price = request.Price;
            dbOrder.Quantity = request.Quantity;

            await context.SaveChangesAsync();
            return Ok(await context.OrderDetailss.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<OrderDetails>> Delete(int id)
        {
            var dbOrder = await context.OrderDetailss.FindAsync(id);
            if (dbOrder == null)
                return BadRequest("order not found.");
            context.OrderDetailss.Remove(dbOrder);
            await context.SaveChangesAsync();
            return Ok(await context.OrderDetailss.ToListAsync());
        }
    }
}