using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityModel;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using ReactIdentity.Infrastructure.Models;

namespace ReactIdentity
{
    public class AppUserClaimsPrincipalFactory : UserClaimsPrincipalFactory<ApplicationUser,IdentityRole>
    {
        public AppUserClaimsPrincipalFactory(
            UserManager<ApplicationUser> userManager,
            RoleManager<IdentityRole> roleManager,
            IOptions<IdentityOptions> optionsAccessor)
            : base(userManager, roleManager, optionsAccessor) {
        }      
        protected override async Task<ClaimsIdentity> GenerateClaimsAsync(ApplicationUser user) {
            var identity = await base.GenerateClaimsAsync(user);
            identity.AddClaim(new Claim(JwtClaimTypes.GivenName, user.FirstName ?? ""));
            
            var roles = await UserManager.GetRolesAsync(user);
            identity.AddClaims(roles.Select(r => new Claim(ClaimTypes.Role, r)));
            return identity;
        }          
    }
}