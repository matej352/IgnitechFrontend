import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-method',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './method.component.html',
  styleUrl: './method.component.scss',
})
export class MethodComponent {
  @Input() methodType!: number;

  teachers$!: Observable<Teacher[]>;
  students$!: Observable<Student[]>;
  subjects$!: Observable<SubjectModel[]>;

  selectedTeacherId!: number;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.teachers$ = this._dataService.getTeachers();
  }

  onSelectionChange(event: any) {
    this.selectedTeacherId = event.value;
  }

  getStudents() {
    this.students$ = this._dataService.getStudentsByTeacher(
      this.selectedTeacherId
    );
  }
}

export interface Teacher {
  id: number;
  firstName: string;
  lastName: string;
  teacherCode: string;
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  studentCode: string;
}

export interface Student {
  id: number;
  firstName: string;
  lastName: string;
  studentCode: string;
}

export interface SubjectModel {
  id: number;
  studentName: string;
  name: string;
}
