import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { tutorialActionReducer } from './reducers/app.state';
import { tutorialReducer } from './reducers/tutorial.reducer';
import { ReaderComponent } from './reader/reader.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReaderComponent,
    AddTutorialComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot(tutorialActionReducer)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
