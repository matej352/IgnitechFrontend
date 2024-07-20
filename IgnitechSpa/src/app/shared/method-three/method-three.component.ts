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
  selector: 'app-method-three',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './method-three.component.html',
  styleUrl: './method-three.component.scss',
})
export class MethodThreeComponent {
  students$!: Observable<Student[]>;

  subjects$!: Observable<SubjectModel[]>;

  selectedStudentId!: number;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.students$ = this._dataService.getStudents();
  }

  onSelectionChange(event: any) {
    this.selectedStudentId = event.value;
  }

  getSubjects() {
    this.subjects$ = this._dataService.getSubjectsByStudent(
      this.selectedStudentId
    );
  }
}
