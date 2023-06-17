import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AlumniDTO} from '../../model/alumni-dto.model';
import {AlumniService} from '../../service/alumni/alumni-service.service';

@Component({
  selector: 'app-alumni-management',
  templateUrl: './alumni-management.component.html',
  styleUrls: ['./alumni-management.component.css'],
})
export class AlumniManagementComponent implements OnInit {
  alumniList: AlumniDTO[] = [];
  newAlumni: AlumniDTO = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    paid: false,
    phone: '',
    promotion: '',
  };

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'actions'];
  alumniDataSource: MatTableDataSource<AlumniDTO>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private alumniService: AlumniService) {
    this.alumniDataSource = new MatTableDataSource<AlumniDTO>([]);
  }

  ngOnInit(): void {
    this.getAlumniList();
  }

  getAlumniList(): void {
    this.alumniService.getAllAlumni().subscribe((alumniList) => {
      this.alumniList = alumniList;
      this.alumniDataSource = new MatTableDataSource<AlumniDTO>(this.alumniList);
      this.alumniDataSource.paginator = this.paginator;
      this.alumniDataSource.sort = this.sort;
      this.alumniDataSource.filterPredicate = this.createFilterPredicate();
    });
  }

  addAlumni(): void {
    this.alumniService.addAlumni(this.newAlumni).subscribe((newAlumni) => {
      this.alumniList.push(newAlumni);
      this.newAlumni = {
        id: 0,
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        paid: false,
        phone: '',
        promotion: '',
      };
      this.alumniDataSource.data = this.alumniList;
    });
  }

  updateAlumni(alumni: AlumniDTO): void {
    this.alumniService
      .updateAlumni(alumni.id, alumni)
      .subscribe((updatedAlumni) => {
        const index = this.alumniList.findIndex((a) => a.id === updatedAlumni.id);
        if (index !== -1) {
          this.alumniList[index] = updatedAlumni;
          this.alumniDataSource.data = this.alumniList;
        }
      });
  }

  deleteAlumni(alumniId: number): void {
    this.alumniService.deleteAlumni(alumniId).subscribe(() => {
      this.alumniList = this.alumniList.filter((a) => a.id !== alumniId);
      this.alumniDataSource.data = this.alumniList;
    });
  }

  createFilterPredicate(): (data: AlumniDTO, filter: string) => boolean {
    return (data: AlumniDTO, filter: string): boolean => {
      const filterText = filter.trim().toLowerCase();
      return (
        data.firstName.toLowerCase().includes(filterText) ||
        data.lastName.toLowerCase().includes(filterText) ||
        data.email.toLowerCase().includes(filterText)
      );
    };
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.alumniDataSource.filter = filterValue.trim().toLowerCase();

    if (this.alumniDataSource.paginator) {
      this.alumniDataSource.paginator.firstPage();
    }
  }
}
