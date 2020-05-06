using MultiSis.Domain;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MultiSis.Administrativo.Models
{
    public class ConfiguracoesModel
    {

        public Configuracoes GetConfiguracoes()
        {
            return new Configuracoes()
            {
                Id = this.Id,
                Agencia = this.Agencia,
                Boleto = this.Boleto,
                BonusEquiparacaoEquipe = this.BonusEquiparacaoEquipe,
                Carteira = this.Carteira,
                CEP = this.CEP,
                CodigoCedente = this.CodigoCedente,
                Complemento = this.Complemento,
                Cotas = this.Cotas,
                CPFCNPJ = this.CPFCNPJ,
                DepositoConta = this.DepositoConta,
                Email = this.Email,
                EmailGerencial = this.EmailGerencial,
                EmailSuporte = this.EmailSuporte,
                Endereco = this.Endereco,
                EnderecoSMTP = this.EnderecoSMTP,
                IBGECodigoMunicipio = this.IBGECodigoMunicipio,
                IBGEIdUF = this.IBGEIdUF,
                IdBanco = this.IdBanco,
                IdiomaPadrao = this.IdiomaPadrao,
                IdTipoConta = this.IdTipoConta,
                MaximoNivelLinear = this.MaximoNivelLinear,
                Moeda = this.Moeda,
                Nome = this.Nome,
                Numero = this.Numero,
                NumeroConta = this.NumeroConta,
                NumeroContratoBanco = this.NumeroContratoBanco,
                Operacao = this.Operacao,
                PagueSeguro = this.PagueSeguro,
                PorcentagemPagamentoSobrePontosBinario = this.PorcentagemPagamentoSobrePontosBinario,
                PortaSTMP = this.PortaSTMP,
                PrimeirasContasBinarioApenasQualifica = this.PrimeirasContasBinarioApenasQualifica,
                QuantidadeContasPorCPF = this.QuantidadeContasPorCPF,
                RecolheIR = this.RecolheIR,
                RedeBinaria = this.RedeBinaria,
                RedeLinear = this.RedeLinear,
                SenhaSMTP = this.SenhaSMTP,
                SMTPProprio = this.SMTPProprio,
                SSLSMTP = this.SSLSMTP,
                TaxaTransferenciaSaldoAdicional = this.TaxaTransferenciaSaldoAdicional,
                TaxaTransferenciaSaldoBonus = this.TaxaTransferenciaSaldoBonus,
                TemaPadrao = this.TemaPadrao,
                TokenPagueSeguro = this.TokenPagueSeguro,
                TransferenciaSaldoAdicional = this.TransferenciaSaldoAdicional,
                TransferenciaSaldoBonus = this.TransferenciaSaldoBonus,
                UsuarioSMTP = this.UsuarioSMTP,
                ValorMaximoTransferenciaSaldoAdicional = this.ValorMaximoTransferenciaSaldoAdicional,
                ValorMaximoTransferenciaSaldoBonus = this.ValorMaximoTransferenciaSaldoBonus,
                ValorMinimoTransferenciaSaldoAdicional = this.ValorMinimoTransferenciaSaldoAdicional,
                ValorMinimoTransferenciaSaldoBonus = this.ValorMinimoTransferenciaSaldoBonus,
                ValorPontoBinario = this.ValorPontoBinario,
                Voucher = this.Voucher,
                EmailPadraoCadastro = this.EmailPadraoCadastro,
                PodePatrocinarSemAindaEstarAtivo = this.PodePatrocinarSemAindaEstarAtivo,
                PosicionaContaApenasComPedidoPago = this.PosicionaContaApenasComPedidoPago
            };
        }

        public Configuracoes GetConfiguracoesPorConfiguracoesModel(ConfiguracoesModel model)
        {
            return new Configuracoes()
            {
                Id = model.Id,
                Agencia = model.Agencia,
                Bairro = model.Bairro,
                Boleto = model.Boleto,
                BonusEquiparacaoEquipe = model.BonusEquiparacaoEquipe,
                Carteira = model.Carteira,
                CEP = model.CEP,
                CodigoCedente = model.CodigoCedente,
                Complemento = model.Complemento,
                Cotas = model.Cotas,
                CPFCNPJ = model.CPFCNPJ,
                DepositoConta = model.DepositoConta,
                Email = model.Email,
                EmailGerencial = model.EmailGerencial,
                EmailSuporte = model.EmailSuporte,
                Endereco = model.Endereco,
                EnderecoSMTP = model.EnderecoSMTP,
                IBGECodigoMunicipio = model.IBGECodigoMunicipio,
                IBGEIdUF = model.IBGEIdUF,
                IdBanco = model.IdBanco,
                IdiomaPadrao = model.IdiomaPadrao,
                IdTipoConta = model.IdTipoConta,
                MaximoNivelLinear = model.MaximoNivelLinear,
                Moeda = model.Moeda,
                Nome = model.Nome,
                Numero = model.Numero,
                NumeroConta = model.NumeroConta,
                NumeroContratoBanco = model.NumeroContratoBanco,
                Operacao = model.Operacao,
                PagueSeguro = model.PagueSeguro,
                PorcentagemPagamentoSobrePontosBinario = model.PorcentagemPagamentoSobrePontosBinario,
                PortaSTMP = model.PortaSTMP,
                PrimeirasContasBinarioApenasQualifica = model.PrimeirasContasBinarioApenasQualifica,
                QuantidadeContasPorCPF = model.QuantidadeContasPorCPF,
                RecolheIR = model.RecolheIR,
                RedeBinaria = model.RedeBinaria,
                RedeLinear = model.RedeLinear,
                SenhaSMTP = model.SenhaSMTP,
                SMTPProprio = model.SMTPProprio,
                SSLSMTP = model.SSLSMTP,
                TaxaTransferenciaSaldoAdicional = model.TaxaTransferenciaSaldoAdicional,
                TaxaTransferenciaSaldoBonus = model.TaxaTransferenciaSaldoBonus,
                TemaPadrao = model.TemaPadrao,
                TipoConta = model.TipoConta,
                TokenPagueSeguro = model.TokenPagueSeguro,
                TransferenciaSaldoAdicional = model.TransferenciaSaldoAdicional,
                TransferenciaSaldoBonus = model.TransferenciaSaldoBonus,
                UsuarioSMTP = model.UsuarioSMTP,
                ValorMaximoTransferenciaSaldoAdicional = model.ValorMaximoTransferenciaSaldoAdicional,
                ValorMaximoTransferenciaSaldoBonus = model.ValorMaximoTransferenciaSaldoBonus,
                ValorMinimoTransferenciaSaldoAdicional = model.ValorMinimoTransferenciaSaldoAdicional,
                ValorMinimoTransferenciaSaldoBonus = model.ValorMinimoTransferenciaSaldoBonus,
                ValorPontoBinario = model.ValorPontoBinario,
                Voucher = model.Voucher,
                EmailPadraoCadastro = model.EmailPadraoCadastro,
                PodePatrocinarSemAindaEstarAtivo = model.PodePatrocinarSemAindaEstarAtivo,
                PosicionaContaApenasComPedidoPago = model.PosicionaContaApenasComPedidoPago
            };
        }

        public ConfiguracoesModel GetConfiguracoesModelPorConfiguracoes(Configuracoes model)
        {
            return new ConfiguracoesModel()
            {
                Id = model.Id,
                Agencia = model.Agencia,
                Bairro = model.Bairro,
                Banco = model.Banco,
                Boleto = model.Boleto,
                BonusEquiparacaoEquipe = model.BonusEquiparacaoEquipe,
                Carteira = model.Carteira,
                CEP = model.CEP,
                CodigoCedente = model.CodigoCedente,
                Complemento = model.Complemento,
                Cotas = model.Cotas,
                CPFCNPJ = model.CPFCNPJ,
                DepositoConta = model.DepositoConta,
                Email = model.Email,
                EmailGerencial = model.EmailGerencial,
                EmailSuporte = model.EmailSuporte,
                Endereco = model.Endereco,
                EnderecoSMTP = model.EnderecoSMTP,
                IBGECodigoMunicipio = model.IBGECodigoMunicipio,
                IBGEIdUF = model.IBGEIdUF,
                IdBanco = model.IdBanco,
                IdiomaPadrao = model.IdiomaPadrao,
                IdTipoConta = model.IdTipoConta,
                MaximoNivelLinear = model.MaximoNivelLinear,
                Moeda = model.Moeda,
                Nome = model.Nome,
                Numero = model.Numero,
                NumeroConta = model.NumeroConta,
                NumeroContratoBanco = model.NumeroContratoBanco,
                Operacao = model.Operacao,
                PagueSeguro = model.PagueSeguro,
                PorcentagemPagamentoSobrePontosBinario = model.PorcentagemPagamentoSobrePontosBinario,
                PortaSTMP = model.PortaSTMP,
                PrimeirasContasBinarioApenasQualifica = model.PrimeirasContasBinarioApenasQualifica,
                QuantidadeContasPorCPF = model.QuantidadeContasPorCPF,
                RecolheIR = model.RecolheIR,
                RedeBinaria = model.RedeBinaria,
                RedeLinear = model.RedeLinear,
                SenhaSMTP = model.SenhaSMTP,
                SMTPProprio = model.SMTPProprio,
                SSLSMTP = model.SSLSMTP,
                TaxaTransferenciaSaldoAdicional = model.TaxaTransferenciaSaldoAdicional,
                TaxaTransferenciaSaldoBonus = model.TaxaTransferenciaSaldoBonus,
                TemaPadrao = model.TemaPadrao,
                TipoConta = model.TipoConta,
                TokenPagueSeguro = model.TokenPagueSeguro,
                TransferenciaSaldoAdicional = model.TransferenciaSaldoAdicional,
                TransferenciaSaldoBonus = model.TransferenciaSaldoBonus,
                UsuarioSMTP = model.UsuarioSMTP,
                ValorMaximoTransferenciaSaldoAdicional = model.ValorMaximoTransferenciaSaldoAdicional,
                ValorMaximoTransferenciaSaldoBonus = model.ValorMaximoTransferenciaSaldoBonus,
                ValorMinimoTransferenciaSaldoAdicional = model.ValorMinimoTransferenciaSaldoAdicional,
                ValorMinimoTransferenciaSaldoBonus = model.ValorMinimoTransferenciaSaldoBonus,
                ValorPontoBinario = model.ValorPontoBinario,
                Voucher = model.Voucher,
                EmailPadraoCadastro = model.EmailPadraoCadastro,
                PodePatrocinarSemAindaEstarAtivo = model.PodePatrocinarSemAindaEstarAtivo,
                PosicionaContaApenasComPedidoPago = model.PosicionaContaApenasComPedidoPago
            };
        }

        public byte Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string EmailGerencial { get; set; }
        public string EmailSuporte { get; set; }
        public string CPFCNPJ { get; set; }
        public string Endereco { get; set; }
        public string Numero { get; set; }
        public string Complemento { get; set; }
        public Nullable<int> CEP { get; set; }
        public string IBGEIdUF { get; set; }
        public string IBGECodigoMunicipio { get; set; }
        public string Bairro { get; set; }
        public Nullable<byte> IdBanco { get; set; }
        public Nullable<byte> IdTipoConta { get; set; }
        public string Agencia { get; set; }
        public string NumeroConta { get; set; }
        public string CodigoCedente { get; set; }
        public string Operacao { get; set; }
        public string Carteira { get; set; }
        public string NumeroContratoBanco { get; set; }
        public bool RedeLinear { get; set; }
        public byte MaximoNivelLinear { get; set; }
        public bool RedeBinaria { get; set; }
        public Nullable<decimal> ValorPontoBinario { get; set; }
        public bool TransferenciaSaldoBonus { get; set; }
        public decimal ValorMinimoTransferenciaSaldoBonus { get; set; }
        public decimal ValorMaximoTransferenciaSaldoBonus { get; set; }
        public decimal TaxaTransferenciaSaldoBonus { get; set; }
        public bool TransferenciaSaldoAdicional { get; set; }
        public decimal ValorMinimoTransferenciaSaldoAdicional { get; set; }
        public decimal ValorMaximoTransferenciaSaldoAdicional { get; set; }
        public decimal TaxaTransferenciaSaldoAdicional { get; set; }
        public bool Boleto { get; set; }
        public bool PagueSeguro { get; set; }
        public string TokenPagueSeguro { get; set; }
        public bool DepositoConta { get; set; }
        public bool Voucher { get; set; }
        public byte QuantidadeContasPorCPF { get; set; }
        public decimal PorcentagemPagamentoSobrePontosBinario { get; set; }
        public bool PrimeirasContasBinarioApenasQualifica { get; set; }
        public bool Cotas { get; set; }
        public string IdiomaPadrao { get; set; }
        public bool SMTPProprio { get; set; }
        public string EnderecoSMTP { get; set; }
        public string UsuarioSMTP { get; set; }
        public string SenhaSMTP { get; set; }
        public Nullable<int> PortaSTMP { get; set; }
        public Nullable<bool> SSLSMTP { get; set; }
        public string TemaPadrao { get; set; }
        public bool BonusEquiparacaoEquipe { get; set; }
        public string Moeda { get; set; }
        public bool RecolheIR { get; set; }
        public bool PosicionaContaApenasComPedidoPago { get; set; }
        public bool PodePatrocinarSemAindaEstarAtivo { get; set; }

        [UIHint("tinymce_jquery_full"), AllowHtml]
        public string EmailPadraoCadastro { get; set; }

        public virtual Banco Banco { get; set; }
        public virtual TipoConta TipoConta { get; set; }

        public List<FormaPagamentoModel> FormasPagamento { get; set; }

    }
}