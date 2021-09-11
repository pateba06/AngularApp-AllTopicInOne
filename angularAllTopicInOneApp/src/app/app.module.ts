import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HighlightTextDirective } from './Directives/highlightText.directive';
import { RendererHiglightDirective } from './Directives/rendererHiglight.directive';
import { LoggingService } from './services/logging.service';

@NgModule({
   declarations: [
      AppComponent,
      UserComponent,
      UsersComponent,
      AddUserComponent,
      HighlightTextDirective,
      RendererHiglightDirective
   ],
   imports: [
	 BrowserModule,
	 FormsModule
	],
   providers: [LoggingService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
