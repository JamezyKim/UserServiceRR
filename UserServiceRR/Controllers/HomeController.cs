using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using UserServiceRR.Models;
using Microsoft.EntityFrameworkCore;

namespace UserServiceRR.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;
    private readonly ApplicationDbContext _context;
    DbContextOptions<ApplicationDbContext> contextOptions = new DbContextOptionsBuilder<ApplicationDbContext>().UseSqlServer(@"Server=localhost\SQLEXPRESS;Database=TestDB;ConnectRetryCount=0").Options;

    private bool IsUserExits(string email)
    {
        ApplicationDbContext context = new ApplicationDbContext(contextOptions);
        List<User> userList = new List<User>();

        using (context)
        {
            var users = context.User.ToList();
            foreach (var user in users)
            {
                if (user.Email == email)
                {
                    return true;
                }
            }
        }
        return false;
    }



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

    //public IActionResult countUserNum()
    //{
    //    int userNum = 0;
    //    ApplicationDbContext context = new ApplicationDbContext(contextOptions);

    //    var userInfo = new User();
    //    using (context)
    //    {
    //        var users = context.User.ToList();
    //        foreach (var user in users)
    //        {
    //            userNum++;
    //        }
    //    }
    //    return Json(userNum);
    //}

    public int countUser()
    {
        int userNum = 0;
        ApplicationDbContext context = new ApplicationDbContext(contextOptions);

        var userInfo = new User();
        using (context)
        {
            var users = context.User.ToList();
            foreach (var user in users)
            {
                userNum++;
            }
        }
        return userNum;
    }

    public bool validateUser(string email, string password){
        ApplicationDbContext context = new ApplicationDbContext(contextOptions);

        var userInfo = new User();
        using (context)
        {
            var users = context.User.ToList();
            foreach (var user in users)
            {
                if (user.Email == email && user.Password == password)
                {
                    return true;
                }
            }
            //users = context.User.Where(b => b.UserName == email).ToList();
        }
        return false;
    }

    public string LogIn(string email, string password) 
    {
        if(IsUserExits(email) == false)
        {
            return "Your email does not exist";
        }

        ApplicationDbContext context = new ApplicationDbContext(contextOptions);

        var userInfo = new User();
        using (context)
        {
            var users = context.User.ToList();
            foreach (var user in users)
            {
                if (user.Email == email && user.Password == password)
                {
                    userInfo.ID = user.ID;
                    userInfo.Email = user.Email;
                    userInfo.Password = user.Password;
                    userInfo.CreatedByUserID = user.CreatedByUserID;
                    userInfo.CreatedDate = user.CreatedDate;
                    userInfo.ModifiedByUserID = user.ModifiedByUserID;
                    userInfo.ModifiedDate = user.ModifiedDate;
                    return "success";
                }
            }
            //users = context.User.Where(b => b.UserName == email).ToList();
            return "Password does not match with the email";
        }
    }

    public async Task<string> SignUp(string firstName, string lastName, string birthDay, string phoneNumber, string email, string password)
    {

        if(IsUserExits(email) == true)
        {
            return "Your account already exist";
        }

        using (var context = new ApplicationDbContext(contextOptions))
        {
            var userID = Guid.NewGuid();
            var userInfo = new User();

            userInfo.ID = userID;
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
