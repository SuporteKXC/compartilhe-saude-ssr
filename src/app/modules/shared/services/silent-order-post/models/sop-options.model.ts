export interface SopOptions {
  accessToken: string;
  environment: 'sandbox' | 'production';
  language: 'pt' | 'en' | 'es';
  enableTokenize: boolean;
  cvvRequired: boolean;

  onSuccess: (e: { PaymentToken: string }) => void;
  onError: (e: { Code: string; Text: string }) => void;
  onInvalid: (e: { Field: string; Message: string }[]) => void;
}
