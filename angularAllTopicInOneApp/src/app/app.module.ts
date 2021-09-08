import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HighlightTextDirective } from './Directives/highlightText.directive';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      UsersComponent,
      AddUserComponent,
      HighlightTextDirective
   ],
   imports: [
	 BrowserModule,
	 FormsModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
