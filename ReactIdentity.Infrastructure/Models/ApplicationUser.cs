using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ReactIdentity.Infrastructure.Models
{
    public class ApplicationUser : IdentityUser
    {
        [PersonalData]
        public string FirstName {get;set;}


        
    }
}
