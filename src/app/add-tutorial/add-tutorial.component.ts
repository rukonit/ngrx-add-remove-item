import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddTutorialAction } from '../actions/tutorial.action';
import { AppState } from '../reducers/app.state';
import * as TutorialActions from '../actions/tutorial.action'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  @ViewChild('inputForm', {static: true}) slForm!: NgForm;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  addTutorial(form: NgForm) {
    const name = form.value.name;
    const url = form.value.url;
  

   this.store.dispatch(new TutorialActions.AddTutorialAction({name: name, url: url}))


  }
}
