import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactSearchComponent } from './contact-search/contact-search.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactDeleteComponent } from './contact-delete/contact-delete.component';
import { ContactCategoriesComponent } from './contact-categories/contact-categories.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactSearchComponent,
    ContactFormComponent,
    ContactDetailsComponent,
    ContactDeleteComponent,
    ContactCategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
