using System;
using System.ComponentModel.DataAnnotations;

namespace UserServiceRR.Models
{
    public class TransactionClass
    {
        [Key]
        public Guid TransactionId { get; set; }
        public Guid UserId { get; set; }
        public decimal Amount { get; set; }
        public DateTime TransactionDate { get; set; }

    }
}
