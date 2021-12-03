const students = require("./jsonInputs/students.json");
const groups = require("./jsonInputs/groups.json");
const colleges = require("./jsonInputs/colleges.json");
const uuid = require("uuid");

const printOutput1 = () => {
  const activeStudents = students.filter(
    (student) => student.status === true
  ).length;
  const inActiveStudent = students.length - activeStudents;
  const aciveGroups = groups.filter((group) => group.status === true).length;
  const inActiveGroups = groups.length - aciveGroups;
  const activeColleges = colleges.filter(
    (college) => college.status === true
  ).length;
  const inActiveColleges = colleges.length - activeColleges;

  console.log("Output 1 =>", {
    total_active_clgs: activeColleges,
    total_inactive_clgs: inActiveColleges,
    total_active_grps: aciveGroups,
    total_inactive_grps: inActiveGroups,
    total_active_stds: activeStudents,
    total_inactive_stds: inActiveStudent,
  });
};

const printOutput2 = () => {
  const findGrpById = (id) => groups.find((group) => group.grp_id === id);
  const findCollegeById = (id) =>
    colleges.find((college) => college.clg_id === id).clg_name;

  console.log(
    "Output 2 =>",
    students.map((student) => ({
      std_name: student.std_name,
      std_code: student.std_code,
      std_id: student.std_id,
      status: student.status,
      clg_name: findCollegeById(findGrpById(student.grp_id).clg_id),
      grp_name: findGrpById(student.grp_id).grp_name,
    }))
  );
};

const printOutput3 = () => {
  console.log(
    "Output 3 =>",
    colleges.map((college) => ({
      ...college,
      clg_id: uuid.v5(college.clg_name, uuid.v5.URL),
    }))
  );
};

module.exports.run = function () {
  printOutput1();
  printOutput2();
  printOutput3();
};
