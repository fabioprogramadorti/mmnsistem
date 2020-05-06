using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MultiSis.Domain;

namespace MultiSis.Administrativo.Models
{
    public class ControleAcessoModel
    {
        #region Variaveis

        private List<Controle> controles;

        #endregion

        #region Metodos privados

        public ControleAcessoModel()
        {
            controles = new List<Controle>();
        }

        #endregion

        #region Metodos publicos

        public void AddTela(byte id, string nome)
        {
            Controle ctrl = new Controle();
            ctrl.ID_TELA = id;
            ctrl.NM_TELA = nome;
            controles.Add(ctrl);
        }

        public void AddTela(byte id, string nome, bool salvar, bool alterar, bool excluir)
        {
            Controle ctrl = new Controle();
            ctrl.FL_SALVAR = salvar;
            ctrl.FL_ALTERAR = alterar;
            ctrl.FL_EXCLUIR = excluir;
            ctrl.ID_TELA = id;
            ctrl.NM_TELA = nome;
            controles.Add(ctrl);
        }

        #endregion

        #region Propriedades

        public GrupoAcesso GrupoAcesso { get; set; }

        public List<Controle> Controles
        {
            get
            {
                return controles;
            }
        }

        #endregion

        public class Controle
        {
            public byte ID_TELA { get; set; }
            public string NM_TELA { get; set; }
            public bool FL_SALVAR { get; set; }
            public bool FL_ALTERAR { get; set; }
            public bool FL_EXCLUIR { get; set; }
        }

    }
}