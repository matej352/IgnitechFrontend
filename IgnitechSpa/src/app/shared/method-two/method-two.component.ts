import { Component, Input } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { SubjectModel, Teacher } from '../method/method.component';

@Component({
  selector: 'app-method-two',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    MatButtonModule,
  ],
  templateUrl: './method-two.component.html',
  styleUrl: './method-two.component.scss',
})
export class MethodTwoComponent {
  teachers$!: Observable<Teacher[]>;

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

  getSubjects() {
    this.subjects$ = this._dataService.getSubjectsByTeacher(
      this.selectedTeacherId
    );
  }
}
