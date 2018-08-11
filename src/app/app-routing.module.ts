import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';


const routes: Routes = [{
    path:'',redirectTo: 'mainPage',pathMatch: 'prefix'
},{
    path: 'mainPage', component: MainPageComponent
},{
    path: 'contacts', component: ContactsComponent
},
{
    path: 'project-detail', component: ProjectDetailComponent
}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export  class AppRoutingModule {

}
export const routingComponents= [ContactsComponent,ProjectDetailComponent];