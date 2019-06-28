import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
@Component({
  templateUrl: "video-analysis.component.html"
})
export class VideoAnalysisComponent implements OnInit {

  ngOnInit()
  {
    this.getFileNames()
  }

  authenticated = (sessionStorage.getItem("token") && sessionStorage.getItem("token").length > 1)

  fileNamesUrl = "http://localhost:8080/fileNames"
  videosUrl = "http://localhost:8080/videos"
  usernamesUrl = "http://localhost:8080/usernames"
  pointsUrl = "http://localhost:8080/individualVideoAnalysis"

  fileNames = null
  videos    = null
  usernames = null

  selectedFileNameValue : string
  selectedVideoValue    : string
  selectedUserNameValue : string

  userNotFound = false

  points = []

  chart = new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'VideoWatching',
        data: this.points,
        type: "line"
      }
    ]
  });

  constructor(private http: HttpClient) { }

  updatePlot()
  {
    // this.points.forEach(point =>
    //   this.chart.addPoint(point)
    // )
    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      series: [
        {
          name: 'VideoWatching',
          data: this.points,
          type: "line"
        }
      ]
    });
  }
 
  getFileNames() {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + sessionStorage.getItem("token")
    })
    this.http.get(this.fileNamesUrl, { headers: headers })
      .subscribe(data => {
         this.fileNames = data
         if (this.fileNames)
          this.selectedFileNameValue = this.fileNames[0]
      })
    
  }
  // add point to chart serie
  add() {
    this.chart.addPoint(Math.floor(Math.random() * 10));
  }

  getVideosUsers(fileName: string)
  {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + sessionStorage.getItem("token")
    })
    this.http.get(this.usernamesUrl, {params: {fileName: fileName}, headers: headers})
      .subscribe(data => {
        this.usernames = data
        if (this.usernames.length > 0)
        {
          this.selectedUserNameValue = this.usernames[0]
          this.userNotFound = false
        }
        else
          this.userNotFound = true
      })
    this.http.get(this.videosUrl, {params: {fileName: fileName}, headers: headers})
      .subscribe(data => {
        this.videos = data
        this.selectedVideoValue = this.videos[0]
      })    
      this.selectedFileNameValue = fileName
  }

  getPlotPoints()
  {
    const headers = new HttpHeaders({
      authorization: 'Basic ' + sessionStorage.getItem("token")
    })
    this.http.get(this.pointsUrl, {headers: headers, 
      params: 
      {
        fileName: this.selectedFileNameValue,
        userName: this.selectedUserNameValue,
        videoId : this.selectedVideoValue
      }})
      .subscribe(data => {
        this.points = data['points'].map(point => [point.x, point.y])
        this.updatePlot()
        console.log(this.points)
      })
  }

  changeVideo(video)
  {
    this.selectedVideoValue = video
    this.getPlotPoints()
  }

  changeUser(user)
  {
    this.selectedUserNameValue = user
    this.getPlotPoints()
  }
}