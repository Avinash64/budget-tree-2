using System.ComponentModel.DataAnnotations;

namespace backend.Models
{
    public class User
    {
        public int Id { get; set; }

        [Required]
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        /*public List<>*/
    }
}
