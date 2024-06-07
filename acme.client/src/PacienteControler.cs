using ACME.Server.Models;
using Microsoft.AspNetCore.Mvc;

namespace ACME.Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class PacienteController : ControllerBase
    {
        private static List<Paciente> pacientes = new List<Paciente>();

        [HttpGet]
        public IEnumerable<Paciente> Get()
        {
            return pacientes;
        }

        [HttpPost]
        public IActionResult Post(Paciente paciente)
        {
            // Verificar se o CPF já está cadastrado
            if (pacientes.Any(p => p.CPF == paciente.CPF))
            {
                return BadRequest("CPF já cadastrado.");
            }

            pacientes.Add(paciente);
            return CreatedAtAction(nameof(Get), paciente);
        }

        [HttpPut("{cpf}")]
        public IActionResult Put(string cpf, Paciente paciente)
        {
            var existingPaciente = pacientes.FirstOrDefault(p => p.CPF == cpf);
            if (existingPaciente == null)
            {
                return NotFound();
            }

            existingPaciente.Nome = paciente.Nome;
            existingPaciente.DataNascimento = paciente.DataNascimento;
            existingPaciente.Sexo = paciente.Sexo;
            existingPaciente.Endereco = paciente.Endereco;
            existingPaciente.Status = paciente.Status;

            return NoContent();
        }

        [HttpDelete("{cpf}")]
        public IActionResult Delete(string cpf)
        {
            var paciente = pacientes.FirstOrDefault(p => p.CPF == cpf);
            if (paciente == null)
            {
                return NotFound();
            }

            pacientes.Remove(paciente);
            return NoContent();
        }
    }
}