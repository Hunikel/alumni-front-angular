import { Component, OnInit } from '@angular/core';
import {AlumniDTO} from "../../model/alumni-dto.model";
import {AlumniService} from "../../service/alumni/alumni-service.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: AlumniDTO = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    company: "",
    paid: false,
    phone: "",
    promotion: ""
    // Add any additional properties as needed
  };

  constructor(private alumniService: AlumniService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.alumniService.getAlumniProfile()
      .subscribe(profile => this.profile = profile);
  }

  updateProfile(): void {
    this.alumniService.updateAlumni(this.profile.id, this.profile)
      .subscribe(updatedProfile => {
        this.profile = updatedProfile;
        // Handle any success logic or display a success message
      });
  }
}
