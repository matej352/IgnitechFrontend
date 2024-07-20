import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Student, SubjectModel, Teacher } from '../method/method.component';

@Component({
  selector: 'app-method-four',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './method-four.component.html',
  styleUrl: './method-four.component.scss',
})
export class MethodFourComponent {
  studentId!: number;
  subjectId!: number;

  students$!: Observable<Student[]>;
  subjects$!: Observable<SubjectModel[]>;
  teacher$!: Observable<Teacher>;

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

  getTeacher() {
    this.teacher$ = this._dataService.getTeacherByStudentAndSubject(
      this.studentId,
      this.subjectId
    );
  }
}
