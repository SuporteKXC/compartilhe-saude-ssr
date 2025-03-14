import { HttpErrorResponse } from '@angular/common/http';

export function isHttpErrorResponse(e: unknown): e is HttpErrorResponse {
  return (
    typeof e === 'object' &&
    'name' in (e ?? {}) &&
    (e as HttpErrorResponse).name === 'HttpErrorResponse'
  );
}

export function isServerError(e: HttpErrorResponse): boolean {
  return Math.round(e.status / 100) === 5;
}
