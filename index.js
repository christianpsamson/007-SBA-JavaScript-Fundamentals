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
// ====================================================================//
// Define global variable                                              //
// ====================================================================//
let newArray = [];
let resultArray = [];
let resultArrayReordered = [];
// ====================================================================//
// Desc: Validate input Course ID & Assignment Group ID                //
// ====================================================================//
const validateInputData = function (objName, objID, errMsg) {
  if (!Object.values(objName).includes(objID)) {
    throw errMsg;
  }
};
// ====================================================================//
// Desc: Create an array from Learner Object & Assignment Grp          //
// ====================================================================//

const createArray = function () {
  // A. Create new array from Learner:
  newArray = LearnerSubmissions;
  // B. Filter Assignment Group according to Assignment ID:
  for (i = 0; i < LearnerSubmissions.length; i++) {
    const ag_ID = LearnerSubmissions[i].assignment_id;
    const addAgData = AssignmentGroup.assignments.filter(
      (assignmentData) => assignmentData.id === ag_ID
    );
    // C. Update the newArray; Note: addAgData length is always 1
    // hence addAgData[0]
    newArray[i]["due_date"] = addAgData[0].due_at;
    newArray[i]["max_points"] = addAgData[0].points_possible;
  }
};
// ====================================================================//
// Desc: Generate the final result                                     //
// ====================================================================//
const generateResult = function () {
  let rptId = 0;
  let rptIdTemp = 0;
  let rptAssignId = 0;
  let rptScore = 0;
  let rptScoreMax = 0;
  let rptScoreAcc = 0;
  let rptScoreMaxAcc = 0;
  let rptAve = 0;
  let rptAccAve = 0;
  let rptDateDue = "";
  let rptDateSub = "";
  let indexResultArray = 0;
  // A. Loop through newArray
  for (i = 0; i < newArray.length; i++) {
    rptId = newArray[i].learner_id;
    if (i === 0) {
      resultArray[indexResultArray] = { id: rptId };
    } else if (i === newArray.length - 1) {
      rptAccAve = rptScoreAcc / rptScoreMaxAcc;
      resultArray[indexResultArray]["ave"] = rptAccAve;
    }
    if (rptIdTemp !== rptId && i != 0) {
      rptAccAve = rptScoreAcc / rptScoreMaxAcc;
      resultArray[indexResultArray]["ave"] = rptAccAve;
      rptScoreAcc = 0;
      rptScoreMaxAcc = 0;
      indexResultArray += 1;
      resultArray[indexResultArray] = { id: rptId };
    }
    rptIdTemp = rptId;
    rptAssignId = newArray[i].assignment_id;
    rptDateDue = new Date(newArray[i].due_date);
    rptDateSub = new Date(newArray[i].submission.submitted_at);
    // Validate if late
    if (rptDateSub > rptDateDue) {
      rptScore = newArray[i].submission.score - 0.1 * newArray[i].max_points;
    } else {
      rptScore = newArray[i].submission.score;
    }
    // Validate if due in the future
    if (rptDateDue > new Date()) {
      rptScore = 0;
      rptScoreMax = 0;
    } else {
      rptScoreMax = newArray[i].max_points;
      rptAve = parseFloat((rptScore / rptScoreMax).toFixed(3));
      switch (rptAssignId) {
        case 1:
          resultArray[indexResultArray]["1"] = rptAve;
          break;
        case 2:
          resultArray[indexResultArray]["2"] = rptAve;
          break;
        case 3:
          resultArray[indexResultArray]["3"] = rptAve;
          break;
      }

      rptScoreMaxAcc += rptScoreMax;
      rptScoreAcc += rptScore;
    }
  }

  return resultArray;
};
// ====================================================================//
// MAIN FUNCTION                                                       //
// Note: Headers were included for SBA purposes only                   //
// ====================================================================//
function getLearnerData(course, ag, submissions) {
  //Validate the (1)Course ID and (2) Assignment Group ID:
  validateInputData(CourseInfo, course, "Invalid Course ID");
  validateInputData(AssignmentGroup, ag, "Invalid Assignment Group ID");

  // Validate the Learner ID.
  LearnerSubmissions.forEach((learnerData) => {
    if (!submissions.includes(learnerData.learner_id))
      throw "Invalid Learner ID";
  });
  createArray();
  console.log(generateResult());

  // ================================END=================================//
}

// Input data; Note: Learner Submission is an array
const result = getLearnerData(451, 12345, [125, 132]);
