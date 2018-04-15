import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementComponent } from './increment/increment.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter';
import { ListOfPeopleComponent } from './list-of-people/list-of-people.component';
import { listReducer } from './list';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [IncrementComponent, ListOfPeopleComponent],
  exports: [IncrementComponent, ListOfPeopleComponent]
})
export class CounterModule { }
