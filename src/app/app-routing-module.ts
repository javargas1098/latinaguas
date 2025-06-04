import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Product } from './product/product';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: Product  },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
