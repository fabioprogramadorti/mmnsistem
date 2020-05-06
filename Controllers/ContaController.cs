using MultiSis.API.Filters;
using MultiSis.API.Models;
using MultiSis.Domain;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.ServiceModel;
using System.Web.Http;
using System.Web.Services.Protocols;
using PagedList;
using AutoMapper;

namespace MultiSis.API.Controllers
{
    [RoutePrefix("Conta")]
    [TokenFilter]
    public class ContaController : ApiController
    {
        MultiSisEntities db = new MultiSisEntities();

        [HttpGet]
        [Route("{id:int}/ExtratoSaldo")]
        [Route("{id:int}/{di}/ExtratoSaldo")]
        [Route("{id:int}/{di}/{df}/ExtratoSaldo")]
        [Route("{id:int}/{pg:int?}/ExtratoSaldo")]
        [Route("{id:int}/{pg:int?}/{di}/ExtratoSaldo")]
        [Route("{id:int}/{pg:int?}/{di}/{df}/ExtratoSaldo")]
        public IHttpActionResult GetExtratoSaldoPorIdConta(int id, int? pg = 1, DateTime? di = null, DateTime? df = null)
        {
            try
            {
                if (id < 1)
                    throw new FaultException("Nenhum id informado");
                if (pg < 1)
                    throw new FaultException("Nenhuma página informada");

                ExtratoSaldoModel extrato = new ExtratoSaldoModel();
                List<ExtratoSaldoModel.Registro> itens = new List<ExtratoSaldoModel.Registro>();

                int qtRegistrosPagina = 25;
                int paginaAtual = pg.Value;
                DateTime dataInicio = new DateTime(2015, 01, 01);
                DateTime dataFim = DateTime.Now;

                if (di != null)
                    dataInicio = di.Value;
                if (df != null)
                    dataFim = df.Value;

                using (var connection = new SqlConnection(db.Database.Connection.ConnectionString))
                {
                    var command = new SqlCommand("dbo.sp_GetExtratoSaldoConta", connection);
                    command.CommandType = CommandType.StoredProcedure;
                    command.Parameters.Add(new SqlParameter("@IdConta", id));
                    command.Parameters.Add(new SqlParameter("@DataInicioProcessamento", dataInicio));
                    command.Parameters.Add(new SqlParameter("@DataFimProcessamento", dataFim));
                    command.Parameters.Add(new SqlParameter("@Entradas", true));
                    command.Parameters.Add(new SqlParameter("@Saidas", true));

                    connection.Open();
                    var reader = command.ExecuteReader();
                    while (reader.Read())
                    {
                        itens.Add(new ExtratoSaldoModel.Registro()
                        {
                            DataTransacao = reader.GetDateTime(reader.GetOrdinal("DataTransacao")),
                            IdConta = reader.GetInt32(reader.GetOrdinal("IdConta")),
                            IdOperacao = reader.GetByte(reader.GetOrdinal("IdOperacao")),
                            Movimento = reader.GetString(reader.GetOrdinal("Movimento")) == "E" ? "Entrada" : "Saída",
                            Operacao = reader.GetString(reader.GetOrdinal("Operacao")),
                            Valor = reader.GetDecimal(reader.GetOrdinal("Valor")),
                        });
                    }

                    connection.Close();
                }

                if (itens.Count == 0)
                    throw new FaultException("Nenhum registro encontrado");

                // Ordenando
                extrato.Extrato = itens.ToPagedList(paginaAtual, qtRegistrosPagina).ToList();

                return Ok(extrato.Extrato);

            }
            catch (FaultException fault)
            {
                throw new SoapException(fault.Message, SoapException.ServerFaultCode);
            }
            catch (Exception ex)
            {
                var e = ex;
                throw new SoapException("Erro ao processar sua solicitação. Informe o erro ao administrador do sistema", SoapException.ServerFaultCode);
            }
        }
    }
}
