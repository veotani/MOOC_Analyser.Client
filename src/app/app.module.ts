import { BrowserModule          } from '@angular/platform-browser';
import { NgModule               } from '@angular/core';
import { HttpClientModule       } from '@angular/common/http';
import { NgbModule              } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule            } from 'angular-highcharts';
import { RouterModule, Routes   } from '@angular/router';
import { AppComponent           } from './app.component';
import { VideoAnalysisComponent } from './VideoAnalysisComponent/video-analysis.component';

const appRoutes: Routes = [
  { path: 'video-analysis', component: VideoAnalysisComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VideoAnalysisComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ChartModule,
    RouterModule.forRoot(
      appRoutes,
      //{ enableTracing: true } // <-- for debug
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
