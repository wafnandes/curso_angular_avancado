import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule, LoginRoutingModule, CadastroPjModule, CadastroPjRoutingModule } from './autenticacao';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CadastroPjService } from './autenticacao';
import { CadastroPfModule } from './autenticacao';
import { CadastroPfRoutingModule } from './autenticacao';
import { FuncionarioModule } from './funcionario';
import { FuncionarioRoutingModule } from './funcionario';
import { AdminModule } from './admin';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    LoginModule,
    LoginRoutingModule,
    CadastroPjModule,
    CadastroPjRoutingModule,
    CadastroPfModule,
    CadastroPfRoutingModule,
    FuncionarioModule,
    FuncionarioRoutingModule,
    AdminModule,

    
    AppRoutingModule
  ],
  providers: [
    CadastroPjService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
