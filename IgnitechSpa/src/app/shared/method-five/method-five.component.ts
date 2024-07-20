import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Grade, Student, SubjectModel } from '../method/method.component';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'app-method-five',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
    FormatDatePipe,
  ],
  templateUrl: './method-five.component.html',
  styleUrl: './method-five.component.scss',
})
export class MethodFiveComponent {
  studentId!: number;
  subjectId!: number;

  students$!: Observable<Student[]>;
  subjects$!: Observable<SubjectModel[]>;
  grades$!: Observable<Grade[]>;

  onStudentSelectionChange(event: any) {
    this.studentId = event.value;

    this.getSubjects();
  }

  onSubjectSelectionChange(event: any) {
    this.subjectId = event.value;
  }

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.students$ = this._dataService.getStudents();
  }

  getSubjects() {
    this.subjects$ = this._dataService.getSubjectsByStudent(this.studentId);
  }

  getGrades() {
    this.grades$ = this._dataService.getGradesByStudentAndSubject(
      this.studentId,
      this.subjectId
    );
  }
}
