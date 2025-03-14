export interface Recaptcha {
  enterprise: RecaptchaEnterprise;
}

export interface RecaptchaEnterprise {
  ready: (fn: () => unknown | Promise<unknown>) => void;
  execute: (keyId: string, options: { action: string }) => Promise<string>;
}
