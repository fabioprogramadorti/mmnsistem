using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MultiSis.Domain;

namespace MultiSis.Administrativo.Models
{
    public class ProdutoModel
    {
        public class Forma : FormaPagamento
        {
            public bool Selecionado { get; set; }
        }

        public Domain.Produto Produto { get; set; }
        public List<Forma> FormasPagamento { get; set; }
        public List<PlanoNegocio> PlanosNegocio { get; set; }
        public PlanoNegocio PlanoNegocioVinculado { get; set; }
    }
}