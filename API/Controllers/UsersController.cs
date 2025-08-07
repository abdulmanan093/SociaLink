using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{

    public class UsersController(DataContext context) : BaseApiController
    {
        [AllowAnonymous] //only for now
        [HttpGet]
        public async Task<ActionResult<IReadOnlyList<AppUser>>> GetUsers()
        {
            var users = await context.Users.ToListAsync();

            return users;
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<AppUser>> GetUsers(string id)
        {
            var user = await context.Users.FindAsync(id);

            if (user == null) return NotFound();

            return user;
        }
    }
}
