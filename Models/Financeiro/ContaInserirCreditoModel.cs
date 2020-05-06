using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using MultiSis.Domain;

namespace MultiSis.Administrativo.Controllers
{
    public class ContaInserirCreditoModel
    {
        public int IdConta { get; set; }
        public string Identificacao { get; set; }
        public decimal Valor { get; set; }
        public string NomeTitular{ get; set; }
        public string CPFCNPJTitular { get; set; }
    }
}
