import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlertModule,BsDropdownModule } from 'ngx-bootstrap';
import { CreateUomComponent } from './create-uom/create-uom.component';
import { UomDetailsComponent } from './uom-details/uom-details.component';
import { UomListComponent } from './uom-list/uom-list.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpinterseptorService } from './httpinterseptor.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateUomComponent,
    UomDetailsComponent,
    UomListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    HttpClientModule,
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
