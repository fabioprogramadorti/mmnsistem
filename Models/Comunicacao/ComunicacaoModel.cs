using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace MultiSis.Administrativo.Models
{
    public class ComunicacaoModel
    {
        [UIHint("tinymce_jquery_full"), AllowHtml]
        public string Mensagem { get; set; }
    }
}
