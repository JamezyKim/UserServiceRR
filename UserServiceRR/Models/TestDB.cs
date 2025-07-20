using Microsoft.EntityFrameworkCore;

namespace UserServiceRR.Models
{
    namespace UserServiceRR.Models
    {
        public class TestDB(DbContextOptions<TestDB> options) : DbContext(options)
        {
            public DbSet<User> Users { get; set; }
            public DbSet<Product> Products { get; set; }
            public DbSet<Transaction> Transactions { get; set; }
        }
    }
}
