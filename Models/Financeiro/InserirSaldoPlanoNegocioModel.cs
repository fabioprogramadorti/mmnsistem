using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class InserirSaldoPlanoNegocioModel
    {
        public byte IdPlanoNegocio { get; set; }
        public byte IdOperacao { get; set; }
        public decimal Valor { get; set; }
    }
}