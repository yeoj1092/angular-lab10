export class Course {
  course_id!: number;
  course_title!: string;
  semester!: string;
  period!: string;
  lecturer!: string;
  selectedCourse!: Course;
}

    constructor() {
        this.course_id = "01";
        this.course_title = "Web Development";
        this.semester = "Semester 1";
        this.period = "1";
        this.lecturer = "Dr. Jian Yu";
    }
