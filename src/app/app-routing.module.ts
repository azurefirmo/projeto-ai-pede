import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(module => module.LoginPageModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(module => module.RegisterPageModule) },
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(module => module.TabsPageModule) },
  { path: 'bakery-detail', loadChildren: () => import('./bakery-detail/bakery-detail.module').then(module => module.BakeryDetailPageModule) }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
