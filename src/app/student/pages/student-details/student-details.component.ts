import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { Location } from '@angular/common';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  studentId: number;
  student$: Observable<Student>;

  //ActivatedRoute permet de récupérer les paramètres de l'URL
  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService,
    private location: Location
  ) {
    // route.params.subscribe((params) => {
    //   this.studentId = params['id'];
    // });

    this.studentId = +this.route.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    if (this.studentId) {
      this.student$ = this.studentService.getById(this.studentId);
    }
  }

  goBack() {
    this.location.back();
  }
}
