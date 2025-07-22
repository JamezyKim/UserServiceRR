using Microsoft.EntityFrameworkCore;

namespace UserServiceRR.Models
{
    public class ApplicationDbContext : DbContext
    {
        private string _connectionString;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
        }
        public DbSet<User> User { get; set; }
        public DbSet<Product> Product { get; set; }
        public DbSet<Transaction> Transaction { get; set; }

        public ApplicationDbContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            _connectionString = @"Server=localhost\SQLEXPRESS;Database=TestDB;ConnectRetryCount=0;Integrated Security=true;persist security info=False;Encrypt=False";
            optionsBuilder.UseSqlServer(_connectionString);
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseSqlServer(
        //        @"Server=localhost\SQLEXPRESS;Database=TestDB;ConnectRetryCount=0");
            
        //}
    }
}
