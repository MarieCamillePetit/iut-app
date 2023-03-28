import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students$: Observable<Student[]>;

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'class',
    'email',
    'update',
    'delete',
  ];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students$ = this.studentService.get();
  }

  openStudentForm(student?: Student) {
    console.log("afficher popup pour modifier l'étudiant", student);
  }

  delete(id: number) {
    console.log("afficher popup pour supprimer l'étudiant", id);
  }
}
