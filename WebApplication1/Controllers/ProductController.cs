using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Entities;


namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        private readonly DataContext context;

        public ProductController(DataContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public async Task<ActionResult<List<Product>>> Get()
        {
            return Ok(await context.Products.ToListAsync());
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Product>> Get(int id)
        {
            var user = await context.Products.FindAsync(id);
            if (user == null)
                return BadRequest("product not found.");
            return Ok(user);
        }
        [HttpPost]
        public async Task<ActionResult<List<Product>>> AddProduct(Product product)
        {
            context.Products.Add(product);
            await context.SaveChangesAsync();
            return Ok(await context.Products.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<Product>>> UpdateProduct(Product request)
        {
            var dbProd = await context.Products.FindAsync(request.Id);
            if (dbProd == null)
                return BadRequest("product not found.");

            dbProd.Name = request.Name;
            dbProd.Description = request.Description;
            dbProd.Price = request.Price;
            dbProd.Image = request.Image;

            await context.SaveChangesAsync();
            return Ok(await context.Products.ToListAsync());
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Product>> Delete(int id)
        {
            var dbProd = await context.Products.FindAsync(id);
            if (dbProd == null)
                return BadRequest("product not found.");
            context.Products.Remove(dbProd);
            await context.SaveChangesAsync();
            return Ok(await context.Products.ToListAsync());
        }
    }
}