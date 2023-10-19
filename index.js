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
// ========================================================//
// Note: Headers were included for SBA purposes only       //
// ========================================================//
// ========================================================//
// Function: Validate input data                           //
// ========================================================//
const validateInputData = function (objName, objID, errMsg) {
  if (!Object.values(objName).includes(objID)) {
    throw errMsg;
  }
};
// ========================================================//
// Function: Create an array                               //
// ========================================================//
//update this function to include data from AG
// to get the following from Assignment Grp - ag.name, ag.due date, and ag.possible points
// also - l.submission date and l.score
const createArray = function (learnerID) {
  let newArray = LearnerSubmissions.filter(
    (learner) => learner.learner_id == learnerID
  );
  console.log(newArray);
};
// ========================================================//
// Main function                                           //
// ========================================================//
function getLearnerData(course, ag, submissions) {
  //Validate the input data:
  validateInputData(CourseInfo, course, "Invalid Course ID");
  validateInputData(AssignmentGroup, ag, "Invalid Assignment Group ID");

  // Validate the input learner's ID
  if (
    LearnerSubmissions.some(
      (learnerValid) => learnerValid.learner_id === submissions
    )
  ) {
    createArray(submissions);
  } else {
    throw "Invalid Learner ID";
  }

  // ========================END=============================//
}

// Code console to get the input data
const result = getLearnerData(451, 12345, 125);

// console.log(result);
