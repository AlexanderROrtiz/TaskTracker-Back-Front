using Microsoft.AspNetCore.Mvc;
using TaskTracker.Application.DTOs;
using TaskTracker.Application.Services;

namespace TaskTracker.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    //[Route("api/v1/[controller]")] //En caso de que se necesite versionar y escalar el API en el futuro
    public class TasksController : ControllerBase
    {
        private readonly TaskService _taskService;
        private readonly ILogger<TasksController> _logger;

        public TasksController(TaskService taskService, ILogger<TasksController> logger)
        {
            _taskService = taskService;
            _logger = logger;
        }

        [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] TaskDto dto)
        {
            try
            {
                if (string.IsNullOrWhiteSpace(dto.Name))
                {
                    _logger.LogWarning("Intento de crear tarea sin nombre");
                    return BadRequest(new { success = false, message = "El nombre de la tarea es obligatorio" });
                }

                await _taskService.CreateTaskAsync(dto);
                _logger.LogInformation("Tarea creada: {TaskName}", dto.Name);

                return Ok(new { success = true, message = "Tarea creada exitosamente" });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al crear la tarea");
                return StatusCode(500, new { success = false, message = "Ocurrió un error al procesar la solicitud" });
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetTasks()
        {
            try
            {
                var tasks = await _taskService.GetTasksAsync();
                _logger.LogInformation("Se consultaron {Count} tareas", tasks.Count());
                return Ok(tasks);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error al obtener las tareas");
                return StatusCode(500, new { success = false, message = "Ocurrió un error al obtener las tareas" });
            }
        }
    }
}