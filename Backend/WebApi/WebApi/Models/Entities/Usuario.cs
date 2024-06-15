using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.Entities
{
    public class Usuario
    {
        [Key]
        public Guid Id { get; set; }
        public string NombreUsuario { get; set; }
        public string Contraseña { get; set; }
        public string Email { get; set; }
        public string Rol { get; set; }
        public string Salt { get; set; }
    }
}
