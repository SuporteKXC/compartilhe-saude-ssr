export const environment = {
  name: 'prod' as 'prod' | 'hml' | 'dev',
  apiUrl: 'https://api.sejacompartilhe.com.br/',
  dev: false,
  recaptchaEnterpriseKeyId: '6LfYvlEpAAAAADhcLEczO2dv1L-HbBBIk3hqOXyt',
  adoptKey: 'ba92d137-e738-4b67-8756-80131ce2519b',
  imgUrl: 'https://prod-compartilhe-saude-upload-imagens.s3.us-east-1.amazonaws.com',
  auth: {
    server: 'https://kc.sejacompartilhe.com.br',
    realm: 'compartilhesaude',
    clientId: 'compartilhesaude_api',
    requireHttps: true,
  },
  hotjar: {
    siteId: 3818859,
    version: 6,
  },
  silentOrderPost: {
    useSandbox: false,
  },
  carrinho: {
    ttl: null as null | number,
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
  videoPath: '',
};
