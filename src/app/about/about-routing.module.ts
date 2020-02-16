import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LinksComponent } from './about/links/links.component';
import { InfoComponent } from './about/info/info.component';


const routes: Routes = [{
  path: 'about',
  component: AboutComponent,
  children: [
    {
      path: 'links',
      component: LinksComponent
    },
    {
      path: 'info',
      component: InfoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
