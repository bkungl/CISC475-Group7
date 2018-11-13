import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BarGraphComponent } from './bar-graph/bar-graph.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import 'hammerjs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { QuestionTableComponent } from './question-table/question-table.component';

import { MatTableModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';

import { TableService } from './table-service.service';
<<<<<<< HEAD
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
=======
import { AppRoutingModule } from './app-routing.module';
import {MatSliderModule} from '@angular/material/slider';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MaterialModule } from './material.module';
import { FilterComponent } from './filter/filter.component';
import { ExamSearchComponent } from './exam-search/exam-search.component';
import { QuestionSearchComponent } from './question-search/question-search.component';
>>>>>>> master



@NgModule({
  declarations: [
    AppComponent,
    BarGraphComponent,
    QuestionTableComponent,
<<<<<<< HEAD
    SidebarComponent,
    TopbarComponent,
=======
    FilterComponent,
    ExamSearchComponent,
    QuestionSearchComponent
>>>>>>> master
  ],
  imports: [
    ChartsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
