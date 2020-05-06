using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class TrocaTitularidadeModel
    {
        public string IdentificacaoConta { get; set; }
        public int IdConta { get; set; }
        public string NomeNovoTitular { get; set; }
        public int IdPessoaNovoTitular { get; set; }
    }
}