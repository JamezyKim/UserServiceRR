using System;

namespace UserServiceRR.Models
{
    public class Transaction
    {
        public Guid TransactionId { get; set; }
        public Guid UserId { get; set; }
        public decimal Amount { get; set; }
        public DateTime TransactionDate { get; set; }

    }
}
