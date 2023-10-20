**********************************************************************************
                               Description: 
**********************************************************************************
This JavaScript application is designed to extract a participant or learner's performance score by leveraging data from two distinct sources: (1) LearnerSubmissions and (2) AssignmentGroup. Additional validation procedure will also be executed against (3) CourseInfo object to ensure input data accuracy.

To utilize this application, three essential input parameters are required: CourseInfo, AssignmentGroup, and an array containing LearnerSubmissions. This critical piece of code can be found at the bottom section. Notably, the final input parameter is an array.

The output of this process is conveniently presented in the console.log, facilitating easy testing and verification.

**********************************************************************************
                               Requirements included: 
**********************************************************************************
- Variables were declared using let and const
- Used operators to calculate the weighted avarage
- Used strings, numbers, and boolean
- Used if/else statements in generateResult() function; Also used a switch statement with break statements.
- Used try/catch statements to manage potential errors in the code
- Utilized the for loops and forEach()
- Created and/or manipulates arrays and objects.
- Demonstrated the retrieval, manipulation, and removal of items in an array or properties in an object
- Created and evoked functions
- Program outputs the expected array
- Program runs without errors
- Final result:
[
  { '1': 0.94, '2': 1, id: 125, ave: 0.985 },
  { '1': 0.78, '2': 0.833, id: 132, ave: 0.82 }
]
