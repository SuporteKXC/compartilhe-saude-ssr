import { environment } from 'src/environments/environment';
import { Script } from '../models/script.model';

export const Scripts = {
  RECAPTCHA_ENTERPRISE: {
    identifier: 'recaptcha-enterprise',
    src: `https://www.recaptcha.net/recaptcha/enterprise.js?render=${environment.recaptchaEnterpriseKeyId}`,
  },

  ADOPT_COOKIE: {
    identifier: 'adopt',
    src: `//tag.goadopt.io/injector.js?website_code=${environment.adoptKey}`,
  },

  SOP_SANDBOX: {
    identifier: 'sop-sandbox',
    src: 'https://www.pagador.com.br/post/scripts/silentorderpost-1.0.min.js',
  },

  SOP: {
    identifier: 'sop',
    src: 'https://www.pagador.com.br/post/scripts/silentorderpost-1.0.min.js',
  },
} satisfies { [key: string]: Script };
