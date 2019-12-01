import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule, MatDialogModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateUomComponent } from './create-uom/create-uom.component';
import { UomDetailsComponent } from './uom-details/uom-details.component';
import { UomListComponent } from './uom-list/uom-list.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpinterseptorService } from './httpinterseptor.service';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from '@angular/material';
import { EditDialogComponent } from './components/master/uom/dialog/edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from './components/master/uom/dialog/delete-dialog/delete-dialog.component';
import { AddDialogComponent } from './components/master/uom/dialog/add-dialog/add-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    CreateUomComponent,
    UomDetailsComponent,
    UomListComponent,
    LoginComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent
  ],
  entryComponents: [
    EditDialogComponent,
    DeleteDialogComponent,
    AddDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpinterseptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
