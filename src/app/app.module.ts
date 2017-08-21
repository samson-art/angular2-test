import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }         from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { TableEditorComponent } from "./table-editor/table-editor.component";
import { CarEditorService } from "./table-editor/table-editor.service";
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // NgbModule.forRoot(),
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    TableEditorComponent,
  ],
  bootstrap: [ AppComponent ],
  providers: [ HeroService, CarEditorService ],
})
export class AppModule { }
