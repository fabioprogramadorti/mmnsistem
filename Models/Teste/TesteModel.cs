using MultiSis.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class TesteModel
    {
        public string NomePessoa { get; set; }
        public string EmailPessoa { get; set; }
        public string IdentificacaoConta { get; set; }
        public List<PlanoNegocio> PlanosNegocio { get; set; }
        public string IdentificacaoPatrocinador { get; set; }
        public byte IdPlanoNegocioSelecionado { get; set; }
        public string Equipe { get; set; }
        
    }
}