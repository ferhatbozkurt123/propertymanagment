using System.ComponentModel.DataAnnotations;

namespace TasinmazYonetim.API.Models
{
    public class Tasinmaz
    {
        public int Id { get; set; }

        [Required]
        public string Il { get; set; }

        [Required]
        public string Ilce { get; set; }

        [Required]
        public string Mahalle { get; set; }

        [Required]
        public string Ada { get; set; }

        [Required]
        public string Parsel { get; set; }

        [Required]
        public string Nitelik { get; set; }

        [Required]
        public double Boylam { get; set; }

        [Required]
        public double Enlem { get; set; }

        public DateTime OlusturmaTarihi { get; set; } = DateTime.UtcNow;
        public DateTime? GuncellemeTarihi { get; set; }
    }
} 