using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MultiSis.Domain;

namespace MultiSis.Administrativo.Models
{
    public class VoucherModel
    {
        public int IdConta { get; set; }
        public int IdContaReserva { get; set; }
        public string IdentificacaoConta { get; set; }
        public string IdentificacaoContaReserva { get; set; }
        public decimal Valor { get; set; }
        public int Quantidade { get; set; }
        public Conta ContaDestino { get; set; }
        public bool AguardandoPagamento { get; set; }
    }
}