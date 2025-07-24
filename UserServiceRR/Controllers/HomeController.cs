using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UserServiceRR.Models;
using Microsoft.EntityFrameworkCore;

namespace UserServiceRR.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly ApplicationDbContext _context;

    public HomeController(ILogger<HomeController> logger, ApplicationDbContext context)
    {
        _logger = logger;
        _context = context;
    }
    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }

    public string LogIn(string email, string password) 
    {
        var contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
        .UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=TestDB;ConnectRetryCount=0")
        .Options;

        using var context2 = new ApplicationDbContext(contextOptions);
        var userList = new List<User>();
        using (var context = context2)
        {
            var users = context.User.ToList();
            foreach (var user in users)
            {
                if (user.Email == email && user.Password == password)
                {
                    var userID = Guid.NewGuid();
                    var userInfo = new User();
                    userInfo.Email = email;
                    userInfo.Password = password;
                    userInfo.ID = userID;
                    userInfo.CreatedByUserID = userID;
                    userInfo.CreatedDate = DateTime.UtcNow;
                    userInfo.ModifiedByUserID = userID;
                    userInfo.ModifiedDate = DateTime.UtcNow;
                    userList.Add(userInfo);
                    return "success";
                }
            }
            //users = context.User.Where(b => b.UserName == email).ToList();
            return "login fail";
        }
    }

    public async Task<string> SignUp(string firstName, string lastName, string birthDay, string phoneNumber, string email, string password)
    {
        var contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>()
            .UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=TestDB;ConnectRetryCount=0")
            .Options;

        using (var context = new ApplicationDbContext(contextOptions))
        {
            var userID = Guid.NewGuid();
            var userInfo = new User();

            userInfo.ID = userID;
            userInfo.FirstName = firstName;
            userInfo.LastName = lastName;
            userInfo.UserName = firstName + " " + lastName;
            userInfo.BirthDay = DateTime.Parse(birthDay);
            userInfo.PhoneNumber = phoneNumber;
            userInfo.Email = email;
            userInfo.Password = password;

            userInfo.CreatedByUserID = userID;
            userInfo.CreatedDate = DateTime.UtcNow;
            userInfo.ModifiedByUserID = userInfo.ID;
            userInfo.ModifiedDate = DateTime.UtcNow;

            context.User.Add(userInfo);
            await context.SaveChangesAsync();
        }
        return "add user info";
    }
}
