using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Model;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExampleController : ControllerBase
    {
        private static List<Example> heroes = new List<Example>
            {
                new Example
                {
                    Id = 1,
                    Name = "Spider Man",
                    FirstName = "Peter",
                    LastName = "Parker",
                    Place = "New York CIty"
                },
                    new Example
                {
                    Id = 2,
                    Name = "Iron Man",
                    FirstName = "Tony",
                    LastName = "Stark",
                    Place = "Ireland"
                }
            };
        [HttpGet]
        public async Task<ActionResult<List<Example>>> Get()
        {
            return Ok(heroes);
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Example>> Get(int id)
        {
            var hero = heroes.Find(h => h.Id == id);
            if (hero == null)
                return BadRequest("Hero not found.");
            return Ok(hero);
        }
        [HttpPost]
        public async Task<ActionResult<List<Example>>> AddHero(Example hero)
        {
            heroes.Add(hero);
            return Ok(heroes);
        }

        [HttpPut]
        public async Task<ActionResult<List<Example>>> UpdateHero(Example request)
        {
            var hero = heroes.Find(h => h.Id == request.Id);
            if (hero == null)
                return BadRequest("Hero not found.");
            hero.Name = request.Name;
            hero.FirstName = request.FirstName;
            hero.LastName = request.LastName;
            hero.Place = request.Place;
            return Ok(heroes);
        }
        [HttpDelete("{id}")]
        public async Task<ActionResult<Example>> Delete(int id)
        {
            var hero = heroes.Find(h => h.Id == id);
            if (hero == null)
                return BadRequest("Hero not found.");
            heroes.Remove(hero);
            return Ok(heroes);
        }
    }
}
