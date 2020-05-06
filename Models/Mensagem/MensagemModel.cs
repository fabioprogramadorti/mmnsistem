using System;

namespace MultiSis.Administrativo.Models
{
    public class MensagemModel
    {
        public enum TipoMensagem
        {
            Alerta,
            Erro,
            Informacao
        }

        public TipoMensagem Tipo { get; set; }
        public string Mensagem { get; set; }
    }
}