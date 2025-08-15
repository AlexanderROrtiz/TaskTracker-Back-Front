using TaskTracker.Domain.Entities;
using TaskTracker.Domain.Interfaces;

namespace TaskTracker.Infrastructure.Repositories
{
    public class InMemoryTaskRepository : ITaskRepository
    {
        private readonly List<TaskItem> _tasks = new();

        public Task AddAsync(TaskItem task)
        {
            _tasks.Add(task);
            return Task.CompletedTask;
        }

        public Task<IEnumerable<TaskItem>> GetAllAsync()
        {
            return Task.FromResult<IEnumerable<TaskItem>>(_tasks);
        }
    }
}