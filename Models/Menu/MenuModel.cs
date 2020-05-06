using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;


namespace MultiSis.Administrativo.Models
{
    public partial class MenuModel
    {

        #region Variaveis

        private List<Menu> menus;

        #endregion

        #region Metodos privados

        private MenuModel()
        {
            menus = new List<Menu>();
        }

        #endregion

        #region Metodos publicos

        public void AddMenu(Menu menu)
        {
            menus.Add(menu);
        }

        #endregion

        #region Propriedades

        public List<Menu> Menus
        {
            get
            {
                return menus;
            }
        }

        #endregion

        public class Menu
        {

            private List<SubMenu> subMenus;
            private List<Menu> menus;

            public Menu()
            {
                List<SubMenu> subMenus = new List<SubMenu>();
                List<Menu> menus = new List<Menu>();
            }

            public int ID_MENU { get; set; }
            public int ID_MENU_PAI { get; set; }
            public string NM_MENU { get; set; }
            public int NU_ORDEM_MENU { get; set; }
            public List<SubMenu> SubMenus
            {
                get
                {
                    return subMenus;
                }
                set
                {
                    subMenus = value;
                }
            }

            public List<Menu> Menus
            {
                get
                {
                    return menus;
                }
                set
                {
                    menus = value;
                }
            }

            public class SubMenu
            {
                public int ID_TELA { get; set; }
                public int ID_MENU { get; set; }
                public string NM_TELA { get; set; }
                public string NM_CONTROLE { get; set; }
                public string NM_FUNCAO { get; set; }
                public string NM_TELA_MENU { get; set; }
                public string NM_URL { get; set; }
                public string NM_URL_IMAGEM { get; set; }
                public string NM_TOOLTIP { get; set; }
                public bool FL_ATIVO { get; set; }
            }
        }

    }
}