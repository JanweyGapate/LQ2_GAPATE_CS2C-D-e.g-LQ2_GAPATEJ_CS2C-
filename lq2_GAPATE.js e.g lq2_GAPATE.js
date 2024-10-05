function getUserInfo() {
  let name = prompt("Gapate Janwey:");
  let address = prompt("Sabangan Bato Galimuyod Ilocos Sur:");
  let age = parseInt(prompt("19:"));
  let classRole = prompt("Student role (Officer, Student, Teacher):");
  let course = prompt("BSCS (BSCS, BSM, BAEL):");

  // Course-specific logic
  if (course === "BSCS") {
    if (classRole === "Student") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Student") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Teacher") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role.");
    }
  } else if (course === "BSM") {
    if (classRole === "Officer") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Student") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Teacher") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role.");
    }
  } else if (course === "BAEL") {
    if (classRole === "Officer") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Student") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else if (classRole === "Teacher") {
      for (let i = 0; i < age / 4; i++) {
        console.log(name);
      }
    } else {
      console.log("Invalid class role.");
    }
  } else {
    console.log("Invalid course.");
  }
}

getUserInfo();
 
