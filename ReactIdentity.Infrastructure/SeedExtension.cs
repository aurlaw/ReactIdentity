using System;
using ReactIdentity.Infrastructure.Data.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using ReactIdentity.Infrastructure.Models;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;

namespace ReactIdentity.Infrastructure
{
    public static class SeedExtension
    {
        public static void SeedIdentity(this IApplicationBuilder app) 
        {
            using (var scope = app.ApplicationServices.CreateScope()) 
            {
                var context = scope.ServiceProvider.GetRequiredService<AppIdentityDbContext>();
                // create roles
                var roles = new string[]{Roles.Admin, Roles.Consumer};
                var roleStore = new RoleStore<IdentityRole>(context);
                foreach(var role in roles) 
                {
                    if(!context.Roles.Any(r => r.Name == role)) {
                        var r = new IdentityRole(role);
                        r.NormalizedName = role.ToUpper();
                        roleStore.CreateAsync(r);
                    }
                }

                // create admin user
                var adminUser = new ApplicationUser 
                {
                    FirstName = "Admin",
                    LastName = "User",
                    Email = "admin@example.com",
                    EmailConfirmed = true,
                    PhoneNumber = "+111111111111",
                    PhoneNumberConfirmed = true,
                    SecurityStamp = Guid.NewGuid().ToString("D"),
                    LockoutEnabled = true
                    
                };
                adminUser.NormalizedEmail = adminUser.Email.ToUpper();
                adminUser.UserName = adminUser.Email;
                adminUser.NormalizedUserName = adminUser.UserName.ToUpper();

                if(!context.Users.Any(u => u.UserName == adminUser.UserName)) 
                {
                    var password = new PasswordHasher<ApplicationUser>();
                    var hashed = password.HashPassword(adminUser, "mypassword");
                    adminUser.PasswordHash = hashed;
        
                    var userStore = new UserStore<ApplicationUser>(context);
                    var r = userStore.CreateAsync(adminUser).Result;
                    userStore.AddToRoleAsync(adminUser, Roles.Admin.ToUpper());
                    

                }

                // AssignRoles(app, adminUser.Email, new string[]{Roles.Admin});
                // create consumer user
                var consumerUser = new ApplicationUser 
                {
                    FirstName = "Consumer",
                    LastName = "User",
                    Email = "consumer@example.com",
                    UserName = "consumer",
                    EmailConfirmed = true,
                    PhoneNumber = "+111111111111",
                    PhoneNumberConfirmed = true,
                    SecurityStamp = Guid.NewGuid().ToString("D"),
                    LockoutEnabled = true
                };
                consumerUser.NormalizedEmail = consumerUser.Email.ToUpper();
                consumerUser.UserName = consumerUser.Email;
                consumerUser.NormalizedUserName = consumerUser.UserName.ToUpper();

                if(!context.Users.Any(u => u.UserName == consumerUser.UserName)) 
                {
                    var password = new PasswordHasher<ApplicationUser>();
                    var hashed = password.HashPassword(consumerUser, "mypassword");
                    consumerUser.PasswordHash = hashed;
        
                    var userStore = new UserStore<ApplicationUser>(context);
                    var r = userStore.CreateAsync(consumerUser).Result;
                    userStore.AddToRoleAsync(consumerUser, Roles.Consumer.ToUpper());

                }
                // AssignRoles(app, consumerUser.Email, new string[]{Roles.Consumer});
                context.SaveChanges();                

            }
        }
    // private static IdentityResult AssignRoles(IApplicationBuilder app, string email, string[] roles)
    // {
    //     using (var scope = app.ApplicationServices.CreateScope()) 
    //     {
    //         var _userManager = scope.ServiceProvider.GetRequiredService<UserManager<ApplicationUser>>();
    //         var user = _userManager.FindByEmailAsync(email).Result;
    //         var result = _userManager.AddToRolesAsync(user, roles).Result;

    //         return result;
            
    //     }
    // }
    }
}
