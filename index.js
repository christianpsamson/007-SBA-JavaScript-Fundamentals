// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
    },
  },
];

function getLearnerData(course, ag, submissions) {
  // Check for valid Course ID:
  if (!Object.values(CourseInfo).includes(course)) {
    throw "Invalid Course ID";
  }

  //  Check for valid Assignment Group:
  if (!Object.values(AssignmentGroup).includes(ag)) {
    throw "Invalid Assignment Group ID";
  }

  //    Check for valid Learner ID. This is array.
  // Look into helper function!

  // Get the l.assignment ID
  console.log(LearnerSubmissions.prototype.some((learnerValid) => learnerValid.learner_id == sumbmission));
//Filter the learner's ID data
//   console.log(
//     LearnerSubmissions.filter((learner) => learner.learner_id == submissions)
//   );
 
  // to get the following from Assignment Grp - ag.name, ag.due date, and ag.possible points
  // also - l.submission date and l.score
}

// Code console to get the input data
const result = getLearnerData(451, 12345, 1256);

// console.log(result);
