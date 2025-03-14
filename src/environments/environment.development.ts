export const environment = {
  name: 'dev',
  apiUrl: 'http://localhost:8081/',
  dev: true,
  recaptchaEnterpriseKeyId: '6Lfd9d4oAAAAALXbvahuKWh1jGF7c83w31Y2MH0U',
  adoptKey: 'ba92d137-e738-4b67-8756-80131ce2519b',
  imgUrl: 'https://hml-compartilhe-saude-upload-imagens.s3.amazonaws.com',
  auth: {
    server: 'http://localhost:8080',
    realm: 'compartilhesaude',
    clientId: 'compartilhesaude-api',
    requireHttps: false,
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
