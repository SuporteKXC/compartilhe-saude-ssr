import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlInterceptor } from './core/interceptors/base-url-interceptor';
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor';
import { SharedModule } from './modules/shared/shared.module';

import '@angular/common/locales/global/pt';
import { OAuthModule } from 'angular-oauth2-oidc';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { IMAGE_LOADER, ImageLoaderConfig } from '@angular/common';
import { environment } from 'src/environments/environment';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    DynamicDialogModule,
    OAuthModule.forRoot(),
    ToastModule
  ],
  providers: [
    provideClientHydration(),
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    { provide: DialogService },
    {
      provide: IMAGE_LOADER,
      useValue: (config: ImageLoaderConfig) => {
        return `${environment.imgUrl}${config.src}`;
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
