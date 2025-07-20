using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UserServiceRR.Models;
using Microsoft.EntityFrameworkCore;
using UserServiceRR.Models.UserServiceRR.Models;
using UserServiceRR.Models;

namespace UserServiceRR.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly TestDB _context;

    public HomeController(ILogger<HomeController> logger, TestDB context)
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
        var userID = Guid.NewGuid();
        var userInfo = new User();
        userInfo.UserName = email;
        userInfo.Password = password;
        userInfo.ID = userID;
        userInfo.CreatedByUserID = userID;
        userInfo.CreatedDate = DateTime.UtcNow;
        userInfo.ModifiedByUserID = userID;
        userInfo.ModifiedDate = DateTime.UtcNow;



        using (var context = _context)
        {

            var users = context.Users.ToList();

        }

        return email;
    }

}
