export const environment = {
  name: 'hml',
  apiUrl: 'https://api.hml.sejacompartilhe.com.br/',
  dev: false,
  recaptchaEnterpriseKeyId: '6LfO1AkpAAAAABBYSuz0Ey8HCcmZS5ld7emqqv3h',
  adoptKey: 'ba92d137-e738-4b67-8756-80131ce2519b',
  imgUrl: 'https://hml-compartilhe-saude-upload-imagens.s3.amazonaws.com',
  auth: {
    server: 'https://hml-kc.sejacompartilhe.com.br',
    realm: 'compartilhesaude',
    clientId: 'compartilhesaude-api',
    requireHttps: true,
  },
  hotjar: {
    siteId: 3798721,
    version: 6,
  },
  silentOrderPost: {
    useSandbox: true,
  },
  carrinho: {
    ttl: null,
  },
  bigNumbers: {
    pessoasCadastradas: '20 mil',
    especialidadesMedicas: '45',
    estabelecimentosParceiros: '32',
    servicosRealizados: '75 mil',
  },
  numeroParcelas: 12,
  planosPrecos: {
    mensal: {
      free: {
        nome: 'Free',
        preco: 0,
        descontoAnual: null as null | number,
        recomendado: false,
      },
      start: {
        nome: 'Start',
        preco: 399,
        descontoAnual: null as null | number,
        recomendado: false,
      },
      plus: {
        nome: 'Plus',
        preco: 699,
        descontoAnual: null as null | number,
        recomendado: true,
      },
      max: {
        nome: 'Max',
        preco: 899,
        descontoAnual: null as null | number,
        recomendado: false,
      }
    },
    anual: {
      free: {
        nome: 'Free',
        preco: 0,
        descontoAnual: null as null | number,
        recomendado: false,
      },
      start: {
        nome: 'Start',
        preco: 359,
        descontoAnual: 480,
        recomendado: false,
      },
      plus: {
        nome: 'Plus',
        preco: 649,
        descontoAnual: 600,
        recomendado: true,
      },
      max: {
        nome: 'Max',
        preco: 839,
        descontoAnual: 720,
        recomendado: false,
      }
    }
  },
  videoPath: 'https://www.youtube-nocookie.com/embed/SXeZRiiZy0s',
};
