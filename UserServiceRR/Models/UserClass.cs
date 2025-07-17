namespace UserServiceRR.Models
{
    public class JamMarketClass
    {
        public Guid ID { get; set; }
        public DateTime CreatedDate { get; set; }

        public Guid CreatedByUserID { get; set; }

        public DateTime ModifiedDate { get; set; }

        public Guid ModifiedByUserID { get; set; }

        public string? UserName { get; set; }

        public string? Password { get; set; }
    }
}
