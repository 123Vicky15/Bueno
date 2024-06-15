using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.DTO
{
    public class UsuarioDTO
    {
        public Guid Id { get; set; }
        [Required]
        public string NombreUsuario { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Rol { get; set; }
    }
}
