import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MaterialInstance, MaterialService } from '../shared/classes/material.service';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-ministries-page',
  templateUrl: './ministries-page.component.html',
  styleUrls: ['./ministries-page.component.css']
})
export class MinistriesPageComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('tabs') tabsRef: ElementRef;
  public tabs: MaterialInstance;
  // videoId = 'E5vUkUx1-HE'
  videos: any[];
  destroy$: Subject<boolean> = new Subject<boolean>();
  sermons = [
    {
      "id": {
        "videoId": '6TpJ1EU62RU'
      }
    },
    {
      "id": {
        "videoId": '4r-08UeFSqg'
      }
    },
    {
      "id": {
        "videoId": 'xkqTZjS3foU'
      }
    },
  ];
  worships = [
    {
      id: {
        videoId: 'qin4FY7kXbo'
      }
    },
    {
      id: {
        videoId: 'dzvRen0Oz4U'
      }
    },
    {
      id: {
        videoId: 'E5vUkUx1-HE'
      }
    },
  ];

  constructor(
    private youTubeService: YoutubeService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.videos = [];
    // this.youTubeService
    //   .getVideosForChanel('UCWxxa2khLOqHmhEp3P4E-Qw', 15)
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(lista => {
    //     if (lista) {
    //       console.log(lista)
    //       for (let element of lista["items"]) {
    //         this.videos.push(element)
    //         this.sermons = this.videos.filter(video => video.snippet.title.split(' ').includes('ПРОПОВЕДЬ'));
    //         this.worships = this.videos.filter(video => video.snippet.title.split(' ').includes('ПРОСЛАВЛЕНИЕ'));
    //         console.log(this.videos);
    //       }
    //     }
    //   });
  }

  ngAfterViewInit(): void {
    // this.tabs = MaterialService.initTabs(this.tabsRef);
  }

  getSafeUrl(videoId: string) {
    const url = 'https://www.youtube.com/embed/' + videoId;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  

  ngOnDestroy() {
    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
