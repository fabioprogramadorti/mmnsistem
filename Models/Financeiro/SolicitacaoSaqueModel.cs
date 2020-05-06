using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class SolicitacaoSaqueModel
    {
        public string Nome { get; set; }
        public string Email { get; set; }
        public string CPFCNPJ { get; set; }
        public string NumeroBanco { get; set; }
        public string NomeBanco { get; set; }
        public string NumeroCartao { get; set; }
        public string Bandeira { get; set; }
        public string Empresa { get; set; }
        public string Agencia { get; set; }
        public string Conta { get; set; }
        public string TipoConta { get; set; }
        public decimal ValorSolicitado { get; set; }
        public decimal ValorTarifa { get; set; }
        public decimal ValorLiquido { get; set; }
        public System.DateTime DataSolicitacao { get; set; }
    }
}