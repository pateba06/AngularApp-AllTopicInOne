import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// definining array of Routes
// const appRoutes:Routes= [
//   {path:'',component: HomeComponent},
//   {path:'users',component:UsersComponent},
//   // dynamic route using id and prams
//   {path:'users/:id/:name',component:UserComponent},
//   {path:'categories',component:CategoriesComponent}
// ]
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    component: UsersComponent,
    children: [
            {
              // we removed users as we are already mentioning above as parent
              path: ':id/:name',
              component: UserComponent,
            },
            {
              // 22- for taking param to other component example
              path: ':id/:edit',
              component: EditUserComponent,
            },
          ],
        },
          // dynamic route using id and prams
          { path: 'categories', component: CategoriesComponent },
          { path: 'not-found', component: PageNotFoundComponent },
          // wild card it can only come at bottom. Once all above path are checked then it will come
          { path: '**', redirectTo: 'not-found' },
      ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
    EditUserComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
