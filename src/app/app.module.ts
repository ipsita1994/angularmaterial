import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule,MatInputModule} from "@angular/material";
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MenuComponent } from './menu/menu.component';
import {RouterModule} from "@angular/router";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { DatepickerComponent } from './datepicker/datepicker.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MomentModule } from 'ngx-moment';
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { FrmfieldComponent } from './frmfield/frmfield.component';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {LayoutComponent} from './layout/layout.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { TreeChecklistExampleComponent } from './tree-checklist-example/tree-checklist-example.component';
import {MatTreeModule} from '@angular/material/tree';
import {DemoMaterialModule} from './material-module';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { ButtonsandindicatorsComponent } from './buttonsandindicators/buttonsandindicators.component'; 

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteComponent,
    CheckboxComponent,
    MenuComponent,
    DatepickerComponent,
    FrmfieldComponent,
    LayoutComponent,
    TreeChecklistExampleComponent,
    ButtonsandindicatorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    BrowserAnimationsModule,MatMenuModule,MatAutocompleteModule,FormsModule,
    ReactiveFormsModule,MatFormFieldModule,MatInputModule,RouterModule,MatCheckboxModule,MatRadioModule,MatCardModule,MatDatepickerModule,MomentModule,MatMomentDateModule,MatSelectModule,MatIconModule,MatSliderModule,MatSlideToggleModule,MatDividerModule,MatListModule,MatExpansionModule,MatGridListModule,MatStepperModule,MatTabsModule,MatButtonToggleModule,MatTreeModule,DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
