import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormComponent } from './member-form/member-form.component';
import { MembreListComponent } from './membre-list/membre-list.component';

const routes: Routes = [

  { path: 'members', pathMatch: 'full', component: MembreListComponent },
  { path: 'Form', pathMatch: 'full', component: MemberFormComponent },
  //pour créer une variable dynamique fil path naamlou :im il variable
  { path: 'members/:id/edit', pathMatch: 'full', component: MemberFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'members' },
  { path: '**', redirectTo: 'members' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
