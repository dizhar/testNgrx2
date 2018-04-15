import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store, select } from '@ngrx/store';
import { ADD } from '../list';
import { AppState } from '../app-state';

@Component({
  selector: 'app-list-of-people',
  templateUrl: './list-of-people.component.html',
  styleUrls: ['./list-of-people.component.css']
})
export class ListOfPeopleComponent implements OnInit {
  names$: Observable<String>;


  constructor(private store: Store<AppState>) { 
     this.names$ = store.pipe(select('names'));
     console.log(this.names$)
  }

  ngOnInit() {}

  add(input){
      this.store.dispatch({
        type: ADD,  payload: input.value
      })
  }

}
