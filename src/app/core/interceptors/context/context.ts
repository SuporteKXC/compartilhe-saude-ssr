import { HttpContextToken } from '@angular/common/http';

export const AUTHENTICATED = new HttpContextToken(() => false);
export const SKIP_400_ERROR_MODAL = new HttpContextToken(() => false);
export const SKIP_ERROR_MODAL = new HttpContextToken(() => false);
export const MAX_RETRIES = new HttpContextToken(() => 2);
