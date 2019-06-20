import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ChartModule } from 'angular-highcharts';




import { AppComponent } from './app.component';
import { VideoAnalysisComponent } from './VideoAnalysisComponent/video-analysis.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoAnalysisComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
