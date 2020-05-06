using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using MultiSis.Domain;

namespace MultiSis.Administrativo.Models
{
    public class AssociadoModel
    {
        // Eu tenho uma pessoa
        public Pessoa Pessoa { get; set; }
        // Que pode ter várias contas bancárias
        public List<ContaBancaria> ContasBancarias { get; set; }
        // Que pode ter várias contas
        public List<Conta> Contas { get; set; }
        // Que tem apenas um usuário
        public Usuario Usuario { get; set; }
        // Saldo conta
        public Pessoa.Saldo Saldo { get; set; }
        // Minutos VooLig
        public decimal MinutosVooLig { get; set; }
        public List<DocumentoPessoa> Documentos { get; set; }

        public AceiteContratoLicenciamento Contrato { get; set; }
    }
}