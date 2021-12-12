var names = [];
var profs = [];
var class_t = [];
var assignment_t = [];
var study_t = [];
var recreation_t = [];

var courseArray = [
  {
    courseName: "CSC 123",
    profName: "Liang",
    class_t: 20,
    assignment_t: 20,
    study_t: 20,
    recreation_t: 20,
  },
  {
    courseName: "CSC 190",
    profName: "Illiev",
    class_t: 20,
    assignment_t: 20,
    study_t: 20,
    recreation_t: 20,
  },
];
var myCourseArray = [];

var nameInput = document.getElementById("courseName");
var profInput = document.getElementById("courseProf");
var classInput = document.getElementById("class_t");
var assignmentInput = document.getElementById("assignment_t");
var studyInput = document.getElementById("study_t");
var recreationInput = document.getElementById("recreation_t");
var courseData = document.getElementById("courseData");
var searchCourseData = document.getElementById("searchCourseData");
var courseSearchInput = document.getElementById("courseSearch");

function insert() {
  const course = {
    courseName: nameInput.value,
    profName: profInput.value,
    class_t: parseInt(classInput.value),
    assignment_t: parseInt(assignmentInput.value),
    study_t: parseInt(studyInput.value),
    recreation_t: parseInt(recreationInput.value),
  };
  myCourseArray.push(course);
  courseArray.push(course);

  clearAndShow();
}

function show() {
  courseData.innerHTML = "";
  myCourseArray.forEach(function (course, index) {
    var coursePercent = calculatePercents(course);
    console.log(coursePercent);

    courseData.innerHTML += `
        <br>
        <h5>Course Name: ${course.courseName}</h5>
        <h5>Professor: ${course.profName}</h5>
        <div class="progress" style="max-width: 40%; margin: auto">
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
        <div class="outerDiv">
            <div class="colorDiv">
            <div id="classKey" class="colorKey"></div>
            <p class="colorKeyText">Class Time</p>
            </div>
            <div class="colorDiv">
        <div id="assignmentKey" class="colorKey"></div>
            <p class="colorKeyText">Assignments Time</p>
            </div>
            <div class="colorDiv">
            <div id="studyKey" class="colorKey"></div>
            <p class="colorKeyText">Study Time</p>
            </div>
            <div class="colorDiv">
                <div id="recreationKey" class="colorKey"></div>
                <p class="colorKeyText">Recreation Time</p>
            </div>
        </div>
        <br />
        <button type="button" class="btn btn-danger" style="margin-bottom: 8px" onclick="deleteCourse(${index})">Delete course</button>
        `;
  });
}

function deleteCourse(courseIndex) {
  console.log("clicked");
  myCourseArray.splice(courseIndex, 1);
  show();
}

function clearAndShow() {
  // Clear our fields
  nameInput.value = "";
  profInput.value = "";
  classInput.value = "";
  assignmentInput.value = "";
  studyInput.value = "";
  recreationInput.value = "";

  show();
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

function searchCourses() {
  var courseName = courseSearchInput.value;
  var course = courseArray.find(function (course) {
    return course.courseName === courseName;
  });
  var coursePercent = calculatePercents(course);
  searchCourseData.innerHTML = `
        <br>
        <h5>Course Name: ${course.courseName}</h5>
        <h5>Professor: ${course.profName}</h5>
        <div class="progress" style="max-width: 40%; margin: auto">
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
        <div class="outerDiv">
            <div class="colorDiv">
            <div id="classKey" class="colorKey"></div>
            <p class="colorKeyText">Class Time</p>
            </div>
            <div class="colorDiv">
                <div id="assignmentKey" class="colorKey"></div>
                <p class="colorKeyText">Assignments Time</p>
            </div>
            <div class="colorDiv">
                <div id="studyKey" class="colorKey"></div>
                <p class="colorKeyText">Study Time</p>
            </div>
            <div class="colorDiv">
                <div id="recreationKey" class="colorKey"></div>
                <p class="colorKeyText">Recreation Time</p>
            </div>
        </div>
        <br />
        `;
}
