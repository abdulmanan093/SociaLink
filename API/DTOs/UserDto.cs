using System;

namespace API.DTOs;

public class UserDto
{
    public required string Id { get; set; }
    public required string UserName { get; set; }
    public required string Email { get; set; }
    public required string? ImageUrl { get; set; }
    public required string Token { get; set; }
}
