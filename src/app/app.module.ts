import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './components/doc-progress/doc-progress.component';
import { HammingDistanceComponent } from './components/hamming-distance/hamming-distance.component';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from './components/editor/editor.component';
import { DynamicDictionaryComponent } from './components/dynamic-dictionary/dynamic-dictionary.component';
import { ExampleRouteComponent } from './components/example-route/example-route.component';
import { FormsExampleComponent } from './components/forms-example/forms-example.component';
import { UserRegisterComponent } from './components/user-register/user-register.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

import { GraphQLModule } from './graphql.module';
import { Apollo, ApolloModule } from 'apollo-angular';

import { CarListComponent } from './components/car-list/car-list.component';
import { CarFormComponent } from './components/car-form/car-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    HammingDistanceComponent,
    EditorComponent,
    DynamicDictionaryComponent,
    ExampleRouteComponent,
    FormsExampleComponent,
    UserRegisterComponent,
    UserDetailsComponent,
    CarListComponent,
    CarFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    GraphQLModule,
    ApolloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
