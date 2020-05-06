using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MultiSis.Domain;

namespace MultiSis.Administrativo
{
    public class AutenticacaoAttribute : AuthorizeAttribute
    {
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            base.OnAuthorization(filterContext);

            if (!filterContext.HttpContext.User.Identity.IsAuthenticated)
            {
                filterContext.Result = new RedirectResult("~/login");
            }
            else
            {
                if (!Usuario.VerificarUsuarioLogadoAcessoAdministrativo())
                {
                    filterContext.Result = new RedirectResult("~/Login");
                }
            }
        }
    }
}