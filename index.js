class Avatar {
  constructor(id, name, picture, gender, age, job, hobbies) {
    this.id = id;
    this.name = name;
    this.picture = picture;
    this.gender = gender;
    this.age = age;
    this.job = job;
    this.hobbies = hobbies;
  }

  aboutMe() {
    document.getElementById(this.id + "name").innerHTML = this.name;
    document.getElementById(this.id + "picture").src = this.picture;
    document.getElementById(this.id + "picture").className = "avatar-card-img";
    document.getElementById(this.id + "gender").innerHTML = this.gender;
    document.getElementById(this.id + "age").innerHTML = this.age;
    document.getElementById(this.id + "job").innerHTML = this.job;
    document.getElementById(this.id + "hobbies").innerHTML = this.hobbies;
  }
}

let sara = new Avatar(
  "001",
  "sara",
  "./img/avatar1.png",
  "female",
  20,
  "doctor",
  "dancing, swimming, cooking"
);

let breanna = new Avatar(
  "002",
  "Breanna",
  "./img/avatar2.png",
  "female",
  35,
  "pilates teacher",
  "reading, running, traveling"
);

let lisa = new Avatar(
  "003",
  "Lisa",
  "./img/avatar3.png",
  "female",
  26,
  "cashier",
  "tennis, hiking, chess"
);

sara.aboutMe();
breanna.aboutMe();
lisa.aboutMe();

// Carousel Functionality

let counter = 1;

document.querySelector("#foward-button").addEventListener("click", () => {
  document.querySelector("#slide-image").src = `./img/outfit${counter}.png`;
  counter++;
  if (counter > 11) {
    counter = 1;
  }
});

document.querySelector("#backward-button").addEventListener("click", () => {
  document.querySelector("#slide-image").src = `./img/outfit${counter}.png`;
  counter--;
  if (counter < 1) {
    counter = 11;
  }
});

// Drag and Drop Info

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
