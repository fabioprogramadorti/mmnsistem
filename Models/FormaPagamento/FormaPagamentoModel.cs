using MultiSis.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class FormaPagamentoModel : FormaPagamento
    {

        public FormaPagamento GetFormaPagamento()
        {
            return new FormaPagamento()
            {
                Ativo = this.Selecionado,
                CampoExtra1 = this.CampoExtra1,
                CampoExtra2 = this.CampoExtra2,
                CampoExtra3 = this.CampoExtra3,
                FormaPagamentoProduto = this.FormaPagamentoProduto,
                Id = this.Id,
                Login = this.Login,
                Nome = this.Nome,
                Pedido = this.Pedido,
                Senha = this.Senha,
                URLIntegracao = this.URLIntegracao
            };
        }

        public bool Selecionado { get; set; }

    }
}