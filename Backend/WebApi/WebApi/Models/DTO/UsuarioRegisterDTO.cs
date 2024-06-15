using System.ComponentModel.DataAnnotations;

namespace WebApi.Models.DTO
{
    public class UsuarioRegisterDTO
    {
        [Required]
        public string NombreUsuario { get; set; }
        [Required]
        public string Contraseña { get; set; }
        [Required]
        public string Email { get; set; }
    }
}
