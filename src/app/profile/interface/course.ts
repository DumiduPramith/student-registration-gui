export interface CourseList {
  data: [Course];
}

export interface Course {
  course_id: string;
  course_code: string;
  course_title: string;
  course_description: string;
}
