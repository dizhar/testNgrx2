import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {IncrementComponent} from './counter/increment/increment.component';
import {ListOfPeopleComponent } from './counter/list-of-people/list-of-people.component';

export const appRoutes: Routes = [
    // { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: ListOfPeopleComponent },
    { path: 'list',  redirectTo: '/', pathMatch: 'full' },
    { path: 'increment',  component: IncrementComponent },
];


export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes); 
