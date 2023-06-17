// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { AnnouncementService } from '../../service/announcement/announcement.service';
import { AnnouncementDTO } from '../../model/announcement-dto.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  jobs: AnnouncementDTO[] = [];

  constructor(private jobService: AnnouncementService) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.jobService.getAllAnnouncements().subscribe((jobs: AnnouncementDTO[]) => {
      this.jobs = jobs;
    });
  }

  openJobDetailsModal(job: AnnouncementDTO): void {
    // Implement logic to open a modal with detailed information for the selected job
  }
}
