using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class ContasAtivasPorPlanoModel
    {
        public string Nome { get; set; }
        public Nullable<int> QuantidadeContasAtivas { get; set; }
        public decimal ValorAdesao { get; set; }
        public decimal ValorArrecadado { get; set; }
    }
}