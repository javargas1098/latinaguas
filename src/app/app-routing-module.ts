import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Product } from './product/product';
import { AboutComponent } from './about/about';
import { ContactComponent } from './contact/contact';
import { Conditions } from './conditions/conditions';
import { Services } from './services/services';
import { Projects } from './projects/projects';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'products', component: Product  },
    { path: 'about', component: AboutComponent},
    { path: 'contact', component: ContactComponent},
    { path: 'conditions', component: Conditions},
    { path: 'services', component: Services },
    { path: 'projects', component: Projects },
    { path: '', redirectTo: 'home', pathMatch: 'full'}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
