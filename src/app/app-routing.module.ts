import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { ContactCategoriesComponent } from './contact-categories/contact-categories.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/new', component: ContactFormComponent },
  { path: 'contacts/:id', component: ContactDetailsComponent },
  { path: 'contacts/:id/edit', component: ContactFormComponent },
  { path: 'contacts/:id/delete', component: ContactDeleteComponent },
  { path: 'categories', component: ContactCategoriesComponent },
  { path: 'search', component: ContactSearchComponent },
  { path: '**', redirectTo: '/contacts' } // Redirecionar para a lista de contatos se a rota não for encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
