import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './core/component/book/list/list.component'
import { CreateComponent } from './core/component/book/create/create.component';
import { EditComponent } from './core/component/book/edit/edit.component';

const routes: Routes = [
  { path:'' , redirectTo:'list', pathMatch:'full'},
  { path:'list', component:ListComponent },
  { path:'create', component:CreateComponent },
  { path:'edit/:isbn', component:EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//Como buenas practicas exportar al app.module para no llenarlo de importaciones
export const routingComponent = [ListComponent,CreateComponent,EditComponent]
