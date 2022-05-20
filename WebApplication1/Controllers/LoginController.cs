using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using WebApplication1.Entities;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly DataContext context;
        private readonly IConfiguration configuration;
        public LoginController(DataContext context, IConfiguration configuration)
        {
            this.context = context;
            this.configuration = configuration;
        }

        [HttpPost]
        public async Task<ActionResult<string>> Login(Login login)
        {
            //What do we do with the login details
            var user = context.Customers.Where(x => x.UserName == login.UserName && x.Password == login.Password).FirstOrDefault();
            if (user == null) return BadRequest("The user doesn't exist");

            var token = GenerateToken(user);
            return Ok(token);
        }

        private string GenerateToken(Customer user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.UTF8.GetBytes(this.configuration["Jwt:Secret"]);
            var issuer = this.configuration["Jwt:Issuer"];
            var audience = this.configuration["Jwt:Audience"];

            var claimsIdentity = new ClaimsIdentity(new[] {
                new Claim("id", user.Id.ToString()),
                new Claim("email", user.Email)
            });

            var signingCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                Issuer = issuer,
                Audience = audience,
                Expires = DateTime.Now.AddHours(1),
                SigningCredentials = signingCredentials,

            };
            var securityToken = tokenHandler.CreateToken(tokenDescriptor);

            return tokenHandler.WriteToken(securityToken);
        }
    }
}
