import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ContentComponent } from './components/content/content.component';

const routerOptions: ExtraOptions =  {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

const routes: Routes = [
{
  path: 'content',
  component: ContentComponent
},
{
  path: '',
  redirectTo: '/content',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/content',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
