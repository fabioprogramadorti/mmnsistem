using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MultiSis.Domain;
using MultiSis.API.Models;
using MultiSis.Common.Token;
using System.Web.Services.Protocols;
using System.ServiceModel;
using AutoMapper;
using MultiSis.API.Filters;

namespace MultiSis.API.Controllers
{
    [RoutePrefix("Pessoa")]
    [TokenFilter]
    public class PessoaController : ApiController
    {
        MultiSisEntities db = new MultiSisEntities();
        IMapper mapper;

        public PessoaController()
        {
            var config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<Pessoa, PessoaModel>();
                cfg.CreateMap<Conta, ContaModel>().ForMember(x => x.PlanoNegocio, m => m.MapFrom(u => u.PlanoNegocio.Nome));
            });

            mapper = config.CreateMapper();
        }

        [HttpGet]
        [Route("{id}")]
        public IHttpActionResult GetPessoaPorId(int id)
        {
            try
            {
                if (id < 1)
                    throw new FaultException("Nenhum id informado");

                var pessoa = db.Pessoa.FirstOrDefault(x => x.Id.Equals(id));
                if (pessoa == null)
                    throw new FaultException("Nenhum registro encontrado");
                else
                    return Ok(mapper.Map<PessoaModel>(pessoa));
            }
            catch (FaultException fault)
            {
                throw new SoapException(fault.Message, SoapException.ServerFaultCode);
            }
            catch
            {
                throw new SoapException("Erro ao processar sua solicitação. Informe o erro ao administrador do sistema", SoapException.ServerFaultCode);
            }
        }

        [HttpGet]
        [Route("{id}/Contas")]
        public IHttpActionResult GetContasPorIdPessoa(int id)
        {
            try
            {
                if (id < 1)
                    throw new FaultException("Nenhum id informado");

                var contas = db.Conta.Include("PlanoNegocio").Where(x => x.IdPessoa.Equals(id)).ToList();
                if (contas == null)
                    throw new FaultException("Nenhum registro encontrado");
                return Ok(mapper.Map<List<Conta>, List<ContaModel>>(contas));
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
