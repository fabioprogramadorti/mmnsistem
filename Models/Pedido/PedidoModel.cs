using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class PedidoModel
    {
        public enum StatusPedido
        {
            Aberto,
            Cancelado,
            Pago
        }

        public StatusPedido? Status
        {
            get
            {
                if (Pedido.Id > 0)
                {
                    if (Pedido.DataCancelamento != null)
                        return StatusPedido.Cancelado;
                    else if (Pedido.DataPagamento == null)
                        return StatusPedido.Aberto;
                    else if (Pedido.DataPagamento != null)
                        return StatusPedido.Pago;
                    else
                        return null;
                }
                else
                    return null;
            }
        }

        public MultiSis.Domain.Pedido Pedido { get; set; }
        public List<MultiSis.Domain.PedidoItem> Itens { get; set; }
        public List<MultiSis.Domain.ComprovanteDepositoTransferencia> Comprovantes { get; set; }
    }
}