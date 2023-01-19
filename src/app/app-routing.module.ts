import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { GuardloginGuard } from './guard/guardlogin.guard';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/formulario'
  },
  { 
    path: 'formulario',
    component: FormularioComponent,
  },
  { 
    path: 'post', 
    component: PostComponent,
    //canActivate: [GuardloginGuard]
    //no permite entrar a 'post'- LOGOUT dirige a LOGIN
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
