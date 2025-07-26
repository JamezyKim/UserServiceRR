using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserServiceRR.Models
{
    public class User
    {
        [Key]
        public Guid ID { get; set; }
        public string Email { get; set; }
        public DateTime? BirthDay { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime? CreatedDate { get; set; }
        public Guid CreatedByUserID { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public Guid ModifiedByUserID { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
    }
}
