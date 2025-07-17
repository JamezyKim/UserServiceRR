using System;
using System.ComponentModel.DataAnnotations;

namespace UserServiceRR.Models
{
    public class ProductClass
    {
        [Key]
        public Guid ProductId { get; set; }
        public DateTime CreatedDate { get; set; }
        public string ProductName { get; set; } = null!;
        public decimal Price { get; set; }
        public int Stock { get; set; }
    }
}
