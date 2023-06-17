import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AlumniDTO} from '../../model/alumni-dto.model';
import {TreasuryService} from '../../service/treasury/treasury-service.service';

@Component({
  selector: 'app-treasury',
  templateUrl: './treasury.component.html',
  styleUrls: ['./treasury.component.css']
})
export class TreasuryComponent implements OnInit {
  alumniList: AlumniDTO[] = [];
  displayedColumns: string[] = ['lastName', 'firstName', 'company', 'promotion', 'email', 'phone', 'paid', 'action'];
  dataSource: MatTableDataSource<AlumniDTO> = new MatTableDataSource<AlumniDTO>([]);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private treasuryService: TreasuryService) {}

  ngOnInit() {
    this.loadAlumniList();
  }

  loadAlumniList() {
    this.treasuryService.getAlumniList().subscribe((response) => {
      this.alumniList = response;
      this.dataSource = new MatTableDataSource<AlumniDTO>(this.alumniList);
      this.dataSource.sort = this.sort;
    });
  }

  applyFilter(event: Event, column: string) {
    this.dataSource.filter = (event.target as HTMLInputElement).value.trim().toLowerCase();

    // Apply individual column filters
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  markPaid(alumniId: number) {
    this.treasuryService.markPaid(alumniId).subscribe(() => {
      // Update the alumni's paid status
      const alumni = this.alumniList.find((alumni) => alumni.id === alumniId);
      if (alumni) {
        alumni.paid = true;
      }
    });
  }
}
