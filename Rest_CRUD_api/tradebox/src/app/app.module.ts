import { BrowserModule } from '@angular/platform-browser';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { from } from 'rxjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatCardModule } from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatChipsModule } from '@angular/material/chips';

// import { RouterModule, Routes } from '@angular/router';
import { ItemCreationFormComponent } from 'src/components/item-creation-form/item-creation-form.component';
import { AppRoutingModule } from './app-routing.module';
import { CatalogueComponent } from 'src/components/catalogue/catalogue.component';
import { LoaderService } from 'src/app/services/loader.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from 'src/components/home/home.component';
import 'hammerjs';
import { ItemDetailsComponent } from 'src/components/item-details/item-details.component';
import { ItemEditComponent } from 'src/components/item-edit/item-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ItemCreationFormComponent,
    HomeComponent,
    CatalogueComponent,
    ItemDetailsComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,

    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatChipsModule,
    HttpClientModule,
    AppRoutingModule,
    // RouterModule.forRoot(
    //   appRoutes)

    //ang material for catalogue page
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatCardModule,

  ],
  providers: [LoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
