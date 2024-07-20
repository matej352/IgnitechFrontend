import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Student,
  SubjectModel,
  Teacher,
} from '../shared/method/method.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'https://localhost:7110';

  constructor(private http: HttpClient) {}

  getTeachers(): Observable<Teacher[]> {
    return this.http.get<Teacher[]>(`${this.apiUrl}/api/teacher`);
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.apiUrl}/api/student`);
  }

  getStudentsByTeacher(teacherId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/api/student/${teacherId}`);
  }

  getSubjectsByTeacher(teacherId: number): Observable<SubjectModel[]> {
    return this.http.get<SubjectModel[]>(
      `${this.apiUrl}/api/subject/fromTeacher/${teacherId}`
    );
  }

  getSubjectsByStudent(studentId: number): Observable<SubjectModel[]> {
    return this.http.get<SubjectModel[]>(
      `${this.apiUrl}/api/subject/fromStudent/${studentId}`
    );
  }

  getTeacherByStudentAndSubject(
    studentId: string,
    subjectId: string
  ): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/students/${studentId}/subjects/${subjectId}/teacher`
    );
  }

  getGradesByStudentAndSubject(
    studentId: string,
    subjectId: string
  ): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/students/${studentId}/subjects/${subjectId}/grades`
    );
  }

  getAverageGradeByStudentAndSubject(
    studentId: string,
    subjectId: string
  ): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/students/${studentId}/subjects/${subjectId}/average-grade`
    );
  }
}
