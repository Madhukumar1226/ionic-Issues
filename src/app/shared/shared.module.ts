import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";



@NgModule({
  imports: [IonicModule.forRoot(), RouterModule, CommonModule, FormsModule, ReactiveFormsModule],

})
export class SharedModule { }
