import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch: 'full'},
  // {path: 'login', loadChildren:() => import('./login/login.module')
  //   .then(mod => mod.LoginModule) },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},

  {path: 'product', loadChildren:() => import('./products/products.module')
    .then(mod=> mod.ProductsModule)},

    {path: 'Feedback', loadChildren:() => import('./feed-back/feed-back.module')
    .then(mod=> mod.FeedBackModule)},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
