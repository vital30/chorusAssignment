import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../_services/database/database.service';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  staticId="4d79041e-f25f-421d-9e5f-3462459b9934";
  videoSrc:any;
  transcriptData:[];
  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
    this.getVideo();
    this.getTranscript();
  }

  getVideo(){
    this.videoSrc = this.databaseService.getVideo(this.staticId);  
  }

  getTranscript(){
    this.databaseService.getTranscript(this.staticId).subscribe(data => {
       data.sort((a,b)=> a.time-b.time)
       this.transcriptData = data;  
      },
      err=>{
       console.log(err);
     });
  }

  legendFunc(index){
    if(index < this.transcriptData.length){
      console.log(this.transcriptData[index]['speaker']);
      return this.transcriptData[index]['speaker'];
    }
  }

  transcriptFunc(index){
    if(index > 0 && index < this.transcriptData.length){
      console.log(this.transcriptData[index]['speaker']);
      return this.transcriptData[index]['speaker'];
    }
  }


}
