using MultiSis.API.Filters;
using MultiSis.Common.Criptografia;
using MultiSis.Domain;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.ServiceModel;
using System.Web.Http;

namespace MultiSis.API.Controllers
{
    [RoutePrefix("Usuario")]
    [TokenFilter]
    public class UsuarioController : ApiController
    {
        MultiSisEntities db = new MultiSisEntities();
        TresDES tresDES = new TresDES(ConfigurationManager.AppSettings["ChaveCriptografiaHEX"].ToString());

        [Route("Login")]
        public IHttpActionResult GetIdPessoaPorLoginSenha()
        {
            var login = this.Request.Headers.FirstOrDefault(x => x.Key == "login");
            var senha = this.Request.Headers.FirstOrDefault(x => x.Key == "senha");
            if (login.Key == null || senha.Key == null || login.Value.Count() == 0 || senha.Value.Count() == 0)
                throw new FaultException("Login e/ou senha não informados.");

            var password = tresDES.Encrypt(senha.Value.FirstOrDefault());
            Usuario usuario = db.Usuario.FirstOrDefault(x => x.Login.Equals(login.Value.FirstOrDefault()) && x.Senha.Equals(password));
            if (usuario == null)
                throw new FaultException("E-mail ou senha incorreto");

            return Ok(new { idPessoa = usuario.IdPessoa });
        }

    }
}
