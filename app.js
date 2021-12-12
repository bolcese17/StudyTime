var names = [];
var profs = [];
var class_t = [];
var assignment_t = [];
var study_t = [];
var recreation_t = [];

var courseArray = [];

var nameInput = document.getElementById("courseName");
var profInput = document.getElementById("courseProf");
var classInput = document.getElementById("class_t");
var assignmentInput = document.getElementById("assignment_t");
var studyInput = document.getElementById("study_t");
var recreationInput = document.getElementById("recreation_t");
var courseData = document.getElementById("courseData");

function insert() {
  courseArray.push({
    courseName: nameInput.value,
    profName: profInput.value,
    class_t: parseInt(classInput.value),
    assignment_t: parseInt(assignmentInput.value),
    study_t: parseInt(studyInput.value),
    recreation_t: parseInt(recreationInput.value),
  });

  //   clearAndShow();
}

function show() {
  courseData.innerHTML = "";
  courseArray.forEach(function (course) {
    var coursePercent = calculatePercents(course);
    console.log(coursePercent);

    var inputElement = document.createElement("input");
    inputElement.type = "button";
    inputElement.value = "Delete Course";
    inputElement.addEventListener("click", function () {
      deleteCourse(course);
    });

    courseData.innerHTML += `
        <br>
        <h5>Course Name: ${course.courseName}</h5>
        <h5>Professor: ${course.profName}</h5>
        <div class="progress" style="max-width: 60%">
            <div class="progress-bar"
                style="width: ${coursePercent.classPercent}%">(${parseInt(
      coursePercent.classPercent
    )}%)
            </div>
            <div class="progress-bar bg-success"
                style="width: ${coursePercent.assignmentPercent}%">(${parseInt(
      coursePercent.assignmentPercent
    )}%)
            </div>
            <div class="progress-bar bg-danger
                progress-bar-stripped" style="width: ${
                  coursePercent.studyPercent
                }%">
                (${parseInt(coursePercent.studyPercent)}%)
            </div>
            <div class="progress-bar bg-warning
                progress-bar-stripped" style="width: ${
                  coursePercent.recreationPercent
                }%">
                (${parseInt(coursePercent.recreationPercent)}%)
            </div>
        </div>
        <br>
        `;
    courseData.appendChild(inputElement);
  });
}

function deleteCourse(course) {
  console.log(course.courseName);
}

function clearAndShow() {
  // Clear our fields
  nameInput.value = "";
  profInput.value = "";
  classInput.value = "";
  assignmentInput.value = "";
  studyInput.value = "";
  recreationInput.value = "";
}

/*
class_t = 6
assignment_t = 8
study_t = 5
recreation_t = 5
(6 + 8 + 5 +5) = 24
*/
function calculatePercents(course) {
  var sum =
    course.class_t + course.assignment_t + course.study_t + course.recreation_t;
  console.log(sum);
  return {
    classPercent: (course.class_t / sum) * 100,
    assignmentPercent: (course.assignment_t / sum) * 100,
    studyPercent: (course.study_t / sum) * 100,
    recreationPercent: (course.recreation_t / sum) * 100,
  };
}
