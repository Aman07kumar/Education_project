const dummyClasses = [
  {
    className: '6th Grade',
    section: 'A',
    grade: '6',
    subject: 'Mathematics',
    teacher: 'Mrs. Smith',
    students: [
      { name: 'John Doe', gender: 'Male', rollNumber: 'A001', email: 'john.doe@example.com' },
      { name: 'Jane Doe', gender: 'Female', rollNumber: 'A002', email: 'jane.doe@example.com' },
    ],
    exams: [
      {
        name: 'Math Midterm',
        date: '2024-03-10',
        detail: 'Midterm exam covering chapters 1-5.',
        fullMarks: 100,
        scores: [85, 90, 78, 65], 
      },
    ],
  },
  {
    className: '7th Grade',
    section: 'B',
    grade: '7',
    subject: 'Science',
    teacher: 'Mr. Johnson',
    students: [
      { name: 'Alice Johnson', gender: 'Female', rollNumber: 'B001', email: 'alice.johnson@example.com' },
      { name: 'Bob Brown', gender: 'Male', rollNumber: 'B002', email: 'bob.brown@example.com' },
    ],
    exams: [
      {
        name: 'Science Final',
        date: '2024-05-15',
        detail: 'Final exam for the Science subject.',
        fullMarks: 100,
        scores: [88, 92, 81, 76], 
      },
    ],
  },
  {
    className: '8th Grade',
    section: 'C',
    grade: '8',
    subject: 'English',
    teacher: 'Ms. Davis',
    students: [],
    exams: [],
  },
];

export default dummyClasses;
