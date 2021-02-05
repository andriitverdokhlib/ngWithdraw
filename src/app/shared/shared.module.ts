import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './components/header/header.component';
import { AlertComponent } from './components/alert/alert.component';

import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    HeaderComponent, 
    AlertComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  exports: [
    HeaderComponent,
    AlertComponent,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    FormsModule
  ]
})
export class SharedModule { }
