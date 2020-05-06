using MultiSis.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MultiSis.Administrativo.Models
{
    public class PlanoNegocioModel
    {
        public class Forma : FormaPagamento
        {
            public FormaPagamento GetFormaPagamento()
            {
                return new FormaPagamento()
                {
                    Ativo = this.Selecionado,
                    CampoExtra1 = this.CampoExtra1,
                    CampoExtra2 = this.CampoExtra2,
                    CampoExtra3 = this.CampoExtra3,
                    FormaPagamentoProduto = this.FormaPagamentoProduto,
                    Id = this.Id,
                    Login = this.Login,
                    Nome = this.Nome,
                    Pedido = this.Pedido,
                    Senha = this.Senha,
                    URLIntegracao = this.URLIntegracao
                };
            }

            public bool Selecionado { get; set; }
        }

        public PlanoNegocio GetPlanoNegocio()
        {
            return new PlanoNegocio()
            {
                AdesaoObrigatoria = this.AdesaoObrigatoria,
                ApenasPrimeiraCompra = this.ApenasPrimeiraCompra,
                Ativo = this.Ativo,
                CompraCota = this.CompraCota,
                Cota = this.Cota,
                DataValidade = this.DataValidade,
                Descricao = this.Descricao,
                Guid = this.Guid,
                Id = this.Id,
                IdPlanoNegocioEquivalente = this.IdPlanoNegocioEquivalente,
                Imagem = this.Imagem,
                LimiteBinarioDia = this.LimiteBinarioDia,
                LimiteGanhoIndicacaoDireta = this.LimiteGanhoIndicacaoDireta,
                LimiteGanhoIndicacaoIndireta = this.LimiteGanhoIndicacaoIndireta,
                NiveisPagamentoBonus = this.NiveisPagamentoBonus,
                Nome = this.Nome,
                Plano = this.Plano,
                PontosRede = this.PontosRede,
                QualificaBinario = this.QualificaBinario,
                QuantidadeCotas = this.QuantidadeCotas,
                PlanoCarreira = this.PlanoCarreira,
                RecebeIndicacaoDireta = this.RecebeIndicacaoDireta,
                RecebeIndicacaoIndireta = this.RecebeIndicacaoIndireta,
                ValorAdesao = this.ValorAdesao,
                VendeNoSite = this.VendeNoSite,
                PorcentagemGanhoBinario = this.PorcentagemGanhoBinario,
                PorcentagemLimiteGanhoInvestimento = this.PorcentagemLimiteGanhoInvestimento,
            };
        }

        public PlanoNegocioModel GetPlanoNegocioModel(PlanoNegocio model)
        {
            return new PlanoNegocioModel()
            {
                AdesaoObrigatoria = model.AdesaoObrigatoria,
                ApenasPrimeiraCompra = model.ApenasPrimeiraCompra,
                Ativo = model.Ativo,
                CompraCota = model.CompraCota,
                Cota = model.Cota,
                DataValidade = model.DataValidade,
                Descricao = model.Descricao,
                Guid = model.Guid,
                Id = model.Id,
                IdPlanoNegocioEquivalente = model.IdPlanoNegocioEquivalente,
                Imagem = model.Imagem,
                LimiteBinarioDia = model.LimiteBinarioDia,
                LimiteGanhoIndicacaoDireta = model.LimiteGanhoIndicacaoDireta,
                LimiteGanhoIndicacaoIndireta = model.LimiteGanhoIndicacaoIndireta,
                NiveisPagamentoBonus = model.NiveisPagamentoBonus,
                Nome = model.Nome,
                Plano = model.Plano,
                PontosRede = model.PontosRede,
                QualificaBinario = model.QualificaBinario,
                QuantidadeCotas = model.QuantidadeCotas,
                PlanoCarreira = model.PlanoCarreira,
                RecebeIndicacaoDireta = model.RecebeIndicacaoDireta,
                RecebeIndicacaoIndireta = model.RecebeIndicacaoIndireta,
                ValorAdesao = model.ValorAdesao,
                VendeNoSite = model.VendeNoSite,
                PorcentagemGanhoBinario = model.PorcentagemGanhoBinario,
                PorcentagemLimiteGanhoInvestimento = model.PorcentagemLimiteGanhoInvestimento
            };
        }

        public class ConfiguracaoUpgrade
        {
            public bool Selecionado { get; set; }
            public byte IdPlanoNegocio { get; set; }
            public string Nome { get; set; }
            public decimal ValorBonusIndicacaoDireta { get; set; }
            public decimal ValorBonusIndicacaoIndireta { get; set; }
        }

        public byte Id { get; set; }
        public Nullable<byte> IdPlanoNegocioEquivalente { get; set; }
        public System.Guid Guid { get; set; }
        public string Nome { get; set; }
        public string Descricao { get; set; }
        public string Imagem { get; set; }
        public decimal ValorAdesao { get; set; }
        public int NiveisPagamentoBonus { get; set; }
        public int PontosRede { get; set; }
        public byte QuantidadeCotas { get; set; }
        public decimal LimiteBinarioDia { get; set; }
        public decimal PorcentagemGanhoBinario { get; set; }
        public bool QualificaBinario { get; set; }
        public decimal PorcentagemLimiteGanhoInvestimento { get; set; }
        public bool Plano { get; set; }
        public bool PlanoCarreira { get; set; }
        public bool Cota { get; set; }
        public Nullable<decimal> LimiteGanhoIndicacaoDireta { get; set; }
        public Nullable<decimal> LimiteGanhoIndicacaoIndireta { get; set; }
        public bool ApenasPrimeiraCompra { get; set; }
        public bool CompraCota { get; set; }
        public bool AdesaoObrigatoria { get; set; }
        public bool RecebeIndicacaoDireta { get; set; }
        public bool RecebeIndicacaoIndireta { get; set; }
        public System.DateTime DataValidade { get; set; }
        public bool VendeNoSite { get; set; }
        public bool Ativo { get; set; }

        public decimal ValorBonusIndicacaoDireta { get; set; }
        public decimal ValorBonusIndicacaoIndireta { get; set; }

        public List<PlanoNegocioNivelBonus> PlanosNegocioNivelBonus { get; set; }
        public List<ValorIndicacaoDiretaIndiretaUpgrade> ValoresIndicacaoDiretaIndiretaUpgrade { get; set; }
        public List<ValoresUpgrade> ValoresUpgradePorPlano { get; set; }
        public List<Forma> FormasPagamento { get; set; }

    }
}