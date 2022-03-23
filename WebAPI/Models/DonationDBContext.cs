using System;
using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    // Create Database Context
    public class DonationDBContext : DbContext
    {

        public DonationDBContext(DbContextOptions<DonationDBContext> options):
            base(options)
        {

        }

        // An entity set typically corresponds to a database table.
        public DbSet<DonationCandidate> DonationCandidates { get; set; }
    }
}
