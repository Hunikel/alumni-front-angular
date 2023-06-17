import { Component } from '@angular/core';
import { AnnouncementDTO } from '../../model/announcement-dto.model';
import {AnnouncementService} from "../../service/announcement/announcement.service";
@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})
export class PostAdComponent {
  ad: AnnouncementDTO = AnnouncementDTO.createEmptyInstance();

  constructor(private announcementService: AnnouncementService) {}

  postAd() {
    this.announcementService.createAnnouncement(this.ad).subscribe((response) => {
      // Handle success or error response
      console.log(response);
    });
  }
}
