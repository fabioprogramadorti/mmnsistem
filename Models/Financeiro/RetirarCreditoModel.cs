using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class RetirarCreditoModel
    {
        public byte IdOperacao { get; set; }
        public int IdConta { get; set; }
        public string Identificacao { get; set; }
        public decimal Valor { get; set; }
        public string NomeTitular { get; set; }
        public string CPFCNPJTitular { get; set; }
        public List<MultiSis.Domain.SaidaConta> UltimasSaidas { get; set; }
    }
}