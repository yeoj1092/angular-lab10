export class Course {
  course_id!: number;
  course_title!: string;
  semester!: string;
  period!: string;
  lecturer!: string;
  selectedCourse!: Course;

  constructor() {
    this.course_id = 1;
    this.course_title = 'Web Development';
    this.semester = 'One';
    this.period = 'Wednesday 4-6pm';
    this.lecturer = 'Dr. Jian Yu';
  }
}
