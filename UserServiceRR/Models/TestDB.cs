using Microsoft.EntityFrameworkCore;

namespace UserServiceRR.Models
{
    namespace UserServiceRR.Models
    {
        public class TestDB : DbContext
        {
            public TestDB(DbContextOptions<TestDB> options)
                : base(options)
            {
            }

            public DbSet<UserClass> Users { get; set; }
            public DbSet<ProductClass> Products { get; set; }
            public DbSet<TransactionClass> Transactions { get; set; }
        }
    }
}
