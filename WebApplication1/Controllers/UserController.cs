using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Entities;

namespace WebApplication1.Controllers
{
    [Route("api/User/Register")]
    [ApiController]
    public class UserController : ControllerBase 
    {
        private readonly DataContext context;

        public UserController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Customer>>> Get()
        {
            return Ok(await context.Customers.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> Get(int id)
        {
            var user = await context.Customers.FindAsync(id);
            if (user == null)
                return BadRequest("user not found.");
            return Ok(user);
        }
        [HttpPost]
        public async Task<ActionResult<List<Customer>>> AddUser(Customer user)
        {
            context.Customers.Add(user);
            await context.SaveChangesAsync();
            return Ok(await context.Customers.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Customer>>> UpdateUser(Customer request)
        {
            var dbUser = await context.Customers.FindAsync(request.Id);
            if (dbUser == null)
                return BadRequest("user not found.");
            
            dbUser.UserName = request.UserName;
            dbUser.Fullname = request.Fullname;
            dbUser.Address = request.Address;
            dbUser.Email = request.Email;
            dbUser.Password = request.Password;

            await context.SaveChangesAsync();
            return Ok(await context.Customers.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Customer>> Delete(int id)
        {
            var dbUser = await context.Customers.FindAsync(id);
            if (dbUser == null)
                return BadRequest("user not found.");
            context.Customers.Remove(dbUser);
            await context.SaveChangesAsync();
            return Ok(await context.Customers.ToListAsync());
        }
    }
}
