import { BrowserModule            } from '@angular/platform-browser';
import { NgModule                 } from '@angular/core';
import { HttpClientModule         } from '@angular/common/http';
import { NgbModule                } from '@ng-bootstrap/ng-bootstrap';
import { ChartModule              } from 'angular-highcharts';
import { RouterModule, Routes     } from '@angular/router';
import { AppComponent             } from './app.component';
import { VideoAnalysisComponent   } from './VideoAnalysisComponent/video-analysis.component';
import { LoginComponent           } from './LoginComponent/login.component';
import { ReactiveFormsModule      } from '@angular/forms';
import { FormsModule              } from '@angular/forms';
import { UploadLogComponent       } from './UploadLogComponent/upload-log.component'
import { RegistrationComponent    } from './RegistrationComponent/registration.component'
import { UnavaliablePageComponent } from './UnavaliablePageComponent/unavaliable-page.component'


const appRoutes: Routes = [
  { path: 'video-analysis'  , component: VideoAnalysisComponent },
  { path: 'upload-log'      , component: UploadLogComponent     },
  { path: 'unavaliable-page', component: UnavaliablePageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    VideoAnalysisComponent,
    UploadLogComponent,
    LoginComponent,
    RegistrationComponent,
    UnavaliablePageComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    ChartModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
