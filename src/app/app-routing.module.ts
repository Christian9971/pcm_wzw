import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StartAppGuard } from 'src/core/start-app.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    loadChildren: () => import('./welcome/welcome.module').then( m => m.WelcomePageModule),
    canActivate: [StartAppGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'setup-class',
    loadChildren: () => import('./tab1/pages/setup-class/setup-class.module').then( m => m.SetupClassPageModule)
  },
  {
    path: 'join-class',
    loadChildren: () => import('./tab1/pages/join-class/join-class.module').then( m => m.JoinClassPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'class-tabs',
    loadChildren: () => import('./tab1/pages/class-tabs/class-tabs.module').then( m => m.ClassTabsPageModule)
  },
  {
    path: 'gesture',
    loadChildren: () => import('./tab1/pages/gesture-lock/gesture-lock.module').then( m => m.GestureLockPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./tab1/pages/SignIn/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'result',
    loadChildren: () => import('./tab1/pages/SignIn/result/result.module').then( m => m.ResultPageModule)
  },
  {
    path: 'statistic',
    loadChildren: () => import('./tab1/pages/SignIn/statistic/statistic.module').then( m => m.StatisticPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./tab1/pages/SignIn/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },
<<<<<<< HEAD
=======
  {
    path: 'stu-sign-in',
    loadChildren: () => import('./tab1/pages/SignIn/stu-sign-in/stu-sign-in.module').then( m => m.StuSignInPageModule)
  },
  {
    path: 'stu-gesture-lock',
    loadChildren: () => import('./tab1/pages/SignIn/stu-gesture-lock/stu-gesture-lock.module').then( m => m.StuGestureLockPageModule)
  },
  {
    path: 'tea-sign-result',
    loadChildren: () => import('./tab1/pages/SignIn/tea-sign-result/tea-sign-result.module').then( m => m.TeaSignResultPageModule)
  },
>>>>>>> 9b09be8... first_commit

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
