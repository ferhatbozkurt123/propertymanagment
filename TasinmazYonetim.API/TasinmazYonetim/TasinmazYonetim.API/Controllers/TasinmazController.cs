using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TasinmazYonetim.API.Data;
using TasinmazYonetim.API.Models;

namespace TasinmazYonetim.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TasinmazController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TasinmazController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tasinmaz>>> GetTasinmazlar()
        {
            return await _context.Tasinmazlar.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Tasinmaz>> GetTasinmaz(int id)
        {
            var tasinmaz = await _context.Tasinmazlar.FindAsync(id);

            if (tasinmaz == null)
            {
                return NotFound();
            }

            return tasinmaz;
        }

        [HttpPost]
        public async Task<ActionResult<Tasinmaz>> PostTasinmaz(Tasinmaz tasinmaz)
        {
            _context.Tasinmazlar.Add(tasinmaz);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetTasinmaz), new { id = tasinmaz.Id }, tasinmaz);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutTasinmaz(int id, Tasinmaz tasinmaz)
        {
            if (id != tasinmaz.Id)
            {
                return BadRequest();
            }

            tasinmaz.GuncellemeTarihi = DateTime.UtcNow;
            _context.Entry(tasinmaz).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TasinmazExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTasinmaz(int id)
        {
            var tasinmaz = await _context.Tasinmazlar.FindAsync(id);
            if (tasinmaz == null)
            {
                return NotFound();
            }

            _context.Tasinmazlar.Remove(tasinmaz);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TasinmazExists(int id)
        {
            return _context.Tasinmazlar.Any(e => e.Id == id);
        }
    }
} 