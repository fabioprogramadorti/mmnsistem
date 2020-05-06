using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class DiferencaAdesaoBonusPorPlanoModel
    {
        public int IdConta { get; set; }
        public string Identificacao { get; set; }
        public string NomePlano { get; set; }
        public decimal ValorInvestimento { get; set; }
        public Nullable<decimal> ValorGanho { get; set; }
        public Decimal ValorDiferenca { get; set; }
        public Decimal? SaldoConta { get; set; }
    }
}