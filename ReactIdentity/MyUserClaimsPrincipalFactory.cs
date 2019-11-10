using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using ReactIdentity.Infrastructure.Models;

namespace ReactIdentity
{
    public class MyUserClaimsPrincipalFactory : UserClaimsPrincipalFactory<ApplicationUser>
    {
        public MyUserClaimsPrincipalFactory(
            UserManager<ApplicationUser> userManager,
            // RoleManager<IdentityRole> roleManager,
            IOptions<IdentityOptions> optionsAccessor)
            : base(userManager, optionsAccessor) {
        }      
        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user) {
            var identity = await base.GenerateClaimsAsync(user);
            identity.AddClaim(new Claim("given_name", user.FirstName ?? ""));
            return identity;
        }          
    }
}