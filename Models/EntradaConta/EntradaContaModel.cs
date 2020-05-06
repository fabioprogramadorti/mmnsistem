using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class EntradaContaModel
    {
        public string Conta { get; set; }
        public string  Operacao { get; set; }
        public decimal Valor { get; set; }
        public bool ValorAdicional { get; set; }
        public System.DateTime DataTransacao { get; set; }
        public System.DateTime DataDesbloqueio { get; set; }
        public Nullable<System.DateTime> DataCancelamento { get; set; }
        public string UsuarioAdministrativoFezCredito { get; set; }
        public string Origem { get; set; }
    }
}