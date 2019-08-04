import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./components/home-page/home-page.module').then(m => m.HomePageModule),
    data: {animation: 'home'}
  },

  {
    path: 'short-search',
    loadChildren: () => import('./components/short-search-page/short-search-page.module').then(m => m.ShortSearchPageModule),
    data: {animation: 'short-search'}
  },

  {
    path: 'long-search',
    loadChildren: () => import('./components/long-search-page/long-search-page.module').then(m => m.LongSearchPageModule),
    data: {animation: 'long-search'}
  },

  {
    path: 'friends',
    loadChildren: () => import('./components/friends-page/friends-page.module').then(m => m.FriendsPageModule),
    data: {animation: 'profile', preload: true}
  },

  {
    path: 'login',
    loadChildren: () => import('./components/login-page/login-page.module').then(m => m.LoginPageModule),
    data: {animation: 'login'}
  },

  {
    path: 'profile',
    loadChildren: () => import('./components/profile-page/profile-page.module').then(m => m.ProfilePageModule),
    data: {animation: 'profile', preload: true}
  },

  {
    path: 'createLobby',
    loadChildren: () => import('./components/create-active-search/create-active-search.module').then(m => m.CreateActiveSearchModule),
    data: {animation: 'createLobby'}
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
