import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCreationFormComponent } from 'src/components/item-creation-form/item-creation-form.component';
import { CatalogueComponent } from 'src/components/catalogue/catalogue.component';
import { HomeComponent } from 'src/components/home/home.component';
import { ItemDetailsComponent } from 'src/components/item-details/item-details.component';
import { ItemEditComponent } from 'src/components/item-edit/item-edit.component';

const appRoutes: Routes = [
    { path: 'creation', component: ItemCreationFormComponent },
    { path: 'catalogue', component: CatalogueComponent },
    { path: 'home', component: HomeComponent },
    { path: 'item-details/:id', component: ItemDetailsComponent },
    { path: 'item-edit/:id', component: ItemEditComponent },
    { path: 'creation/:id', component: ItemCreationFormComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/