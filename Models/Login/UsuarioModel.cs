using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MultiSis.Domain;

namespace MultiSis.Administrativo.Models
{
    public class UsuarioModel
    {

        public UsuarioAdministrativo Usuario { get; set; }
        public List<Grupo> Grupos { get; set; }

        public class Grupo
        {
            public bool Selecionado { get; set; }
            public byte IdGrupo { get; set; }
            public string Nome { get; set; }
        }

    }
}