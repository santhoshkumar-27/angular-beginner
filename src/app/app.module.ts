import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { loginModule } from './login/login.module';
import { registerModule } from './register/register.module';
import { UsersService } from './services/users.service';
import { UsersListModule } from './userslist/userlist.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UsersListModule,
    loginModule,
    registerModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
