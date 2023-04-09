using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;
using backend.Models;

namespace backend.Models
{
    public class BudgetAPIDbContext : DbContext
    {
        protected readonly IConfiguration _configuration;

        public BudgetAPIDbContext(DbContextOptions<BudgetAPIDbContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            var connectionString = _configuration.GetConnectionString("BudgetTree");
            Console.WriteLine(connectionString);
            options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString));
        }

        public DbSet<User> Users { get; set; } = null!;
        
    }
}
