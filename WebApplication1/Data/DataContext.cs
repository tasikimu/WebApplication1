using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Entities;
using WebApplication1.Model;

namespace WebApplication1.Data
{
    public class ApplicationUser : IdentityUser
    {
        public string FullName { get; set; }
    }
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<Product> Products { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<OrderDetails> OrderDetailss { get; set; }
    }

}
