import { Component, OnInit } from '@angular/core';
import { Course } from './../course';
import { COURSES } from './../test-course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  course = new Course();
  courses = COURSES;
  selectedCourse = this.course.selectedCourse;

  onSelect(course) {
    this.selectedCourse = course;
  }

  constructor() {}

  ngOnInit() {}
}
