using Microsoft.EntityFrameworkCore;
using TasinmazYonetim.API.Models;

namespace TasinmazYonetim.API.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }

        public DbSet<Tasinmaz> Tasinmazlar { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Örnek veri ekleyelim
            modelBuilder.Entity<Tasinmaz>().HasData(
                new Tasinmaz
                {
                    Id = 1,
                    Il = "Adıyaman",
                    Ilce = "Adıyaman Merkez",
                    Mahalle = "Fatih Mahallesi",
                    Ada = "12345",
                    Parsel = "12345",
                    Nitelik = "Tarla",
                    Boylam = 37.7636,
                    Enlem = 38.2773
                }
            );
        }
    }
} 