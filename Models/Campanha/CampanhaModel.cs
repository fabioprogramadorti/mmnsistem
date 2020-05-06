using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MultiSis.Domain;

namespace MultiSis.Administrativo.Models
{
    public class CampanhaModel
    {
        public int IdCampanha { get; set; }
        public DateTime DataExpiracaoCampanha { get; set; }
        public Campanha DadosCampanha { get; set; }
        public CampanhaArquivo DadosCampanhaArquivo { get; set; }
        public Arquivo DadosArquivo { get; set; }
        public PagedList.IPagedList<PessoaCampanha> Pessoas { get; set; }

            public class PessoaCampanha
            {
                public bool Selecionado {get; set;}
                public int IdPessoa {get; set;}
                public string Nome {get; set;}
                public DateTime DataNascimento { get; set; }
                public String UF { get; set; }
            }
    }
}