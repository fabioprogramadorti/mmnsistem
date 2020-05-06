using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class RelatorioSaldosModel
    {
        public int IdPessoa { get; set; }
        public string Nome { get; set; }
        public string Conta { get; set; }
        public int IdConta { get; set; }
        public decimal EntradasBonus { get; set; }
        public decimal SaidasBonus { get; set; }
        public decimal SaldoBonus { get; set; }
        public decimal EntradasSaldoAdicional { get; set; }
        public decimal SaidasSaldoAdicional { get; set; }
        public decimal SaldoSaldoAdicional { get; set; }
    }
}