using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class CotaModel
    {
        public decimal TotalPedidosDia { get; set; }
        public int CotasAtivas { get; set; }
        public decimal ValorSugeridoCota { get; set; }
        public decimal PorcentagemFaturamento { get; set; }
        public decimal ValorCotaAposCalculo { get; set; }
    }
}