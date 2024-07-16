// Dummy/dummy.js

const dummyClasses = [
  {
    className: '6th Grade',
    section: 'A',
    students: [
      { name: 'John Doe', rollNumber: 'A001' },
      { name: 'Jane Doe', rollNumber: 'A002' },
    ],
    exams: [
      {
        name: 'Math Midterm',
        date: '2024-03-10',
        detail: 'Midterm exam covering chapters 1-5.',
        fullMarks: 100,
        scores: ['A', 'B+', 'A-', 'C'],
      },
    ],
  },
  {
    className: '7th Grade',
    section: 'B',
    students: [
      { name: 'Alice Johnson', rollNumber: 'B001' },
      { name: 'Bob Brown', rollNumber: 'B002' },
    ],
    exams: [
      {
        name: 'Science Final',
        date: '2024-05-15',
        detail: 'Final exam for the Science subject.',
        fullMarks: 100,
        scores: ['B', 'A+', 'A', 'B-'],
      },
    ],
  },
  {
    className: '8th Grade',
    section: 'C',
    students: [],
    exams: [],
  },
];

export default dummyClasses;
