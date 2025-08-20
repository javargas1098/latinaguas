import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app.component';
import { HomeComponent } from './home/home.component';
import { Navbar } from './shared/navbar/navbar';
import { Product } from './product/product';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { Footer } from './shared/footer/footer';

// Importaciones para ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Conditions } from './conditions/conditions';
import { Services } from './services/services';
import { Projects } from './projects/projects';

// Función para cargar traducciones
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    App,
    HomeComponent,
    Navbar,
    Product,
    AboutComponent,
    ContactComponent,
    Footer,
    Conditions,
    Services,
    Projects,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
