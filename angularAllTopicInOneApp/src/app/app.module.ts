import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { CategoriesComponent } from './categories/categories.component';
import { UserComponent } from './user/user.component';

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
        path: ':id/:name', component: UserComponent }],
  },
  // dynamic route using id and prams
  { path: 'categories', component: CategoriesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    CategoriesComponent,
    UserComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
