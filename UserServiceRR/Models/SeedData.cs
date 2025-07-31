using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Linq;
namespace UserServiceRR.Models;

public class SeedData
{
    public static void Initialize(IServiceProvider serviceProvider)
    {
        using (var context = new ApplicationDbContext(
            serviceProvider.GetRequiredService<
                DbContextOptions<ApplicationDbContext>>()))
        {
            if (context.User.Any())
            {
                return;
            }

            context.User.AddRange(
                new User
                {
                    ID = Guid.NewGuid(),
                    UserName = "James",
                    BirthDay = DateTime.Parse("2000-01-01"),
                    PhoneNumber = "123-456-7890",
                    CreatedDate = DateTime.Now,
                    CreatedByUserID = Guid.NewGuid(),
                    ModifiedDate = DateTime.Now,
                    ModifiedByUserID = Guid.NewGuid(),
                    Email = "abc@gmail.com",
                    Password = "abc",
                    PasswordHint = "alphabet",
                    Permission = null
                }
            );

            context.SaveChanges();
        }
    }
}
