import { Component, Input } from '@angular/core';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss'],
})
export class StudentCardComponent {
  @Input() selectedStudent: Student;
}
