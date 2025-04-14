import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleRouteComponent } from './components/example-route/example-route.component'; // Import the new component
import { DynamicDictionaryComponent } from './components/dynamic-dictionary/dynamic-dictionary.component';
import { FormsExampleComponent } from './components/forms-example/forms-example.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CarListComponent } from './components/car-list/car-list.component';



const routes: Routes = [
  // { path: '', redirectTo: '/dynamic-dictionary', pathMatch: 'full' }, // Default route redirects to the dynamic dictionary
  // { path: 'dynamic-dictionary', component: DynamicDictionaryComponent }, // Route for Dynamic Dictionary
  // { path: 'example', component: ExampleRouteComponent },
  // {path:'forms-example',component:FormsExampleComponent},
  // {path:'user-register',component:UserRegisterComponent},
  // {path:'user-details',component:UserDetailsComponent}, 
 
  // { path: '**', redirectTo: '/dynamic-dictionary' } // Wildcard route for undefined paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
