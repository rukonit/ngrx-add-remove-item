import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../reducers/app.state';
import { Tutorial } from '../tutorial.model';
import * as TutorialActions from '../actions/tutorial.action'

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  tutorials !: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.tutorials = this.store.select('tutorial')
  }

  removeItem(i: number){
    this.store.dispatch(new TutorialActions.RemoveTutorialAction(i))
  }

}
