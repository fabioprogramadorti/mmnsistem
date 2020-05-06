using System;

namespace MultiSis.Administrativo.Models
{
    public class LoginModel
    {
        public string Login { get; set; }
        public string Senha { get; set; }
        public string SenhaAtual { get; set; }
        public string SenhaAtualInformada { get; set; }
        public string ConfirmacaoSenha { get; set; }
        public int IdUsuario { get; set; }
    }
}