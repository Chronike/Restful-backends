const contacts = document.querySelector("#contacts");
const apiUrl = "https://dummy-apis.netlify.app/api/contact-suggestions?count=";

const state = {
  persons: [],
};

getData();

function getData() {
  fetch(apiUrl + "8")
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      state.persons = jsonData;
      renderData();
    });
}

function getSingleContact() {
  return fetch(apiUrl + 1)
    .then((response) => response.json())
    .then((jsonData) => {
      state.persons.push(jsonData[0]);
      renderData();
    });
}

function renderData() {
  const unorderedList = document.querySelector("ul");
  unorderedList.innerHTML = "";
  for (let person of state.persons) {
    //const unorderedList = document.querySelector("ul");
    let list = document.createElement("li");
    unorderedList.appendChild(list);

    let personContainer = document.createElement("div");
    personContainer.classList.add("personContainer");
    list.appendChild(personContainer);

    let contentContainer = document.createElement("div");
    contentContainer.classList.add("contentContainer");
    personContainer.appendChild(contentContainer);

    let bannerImg = document.createElement("img");
    bannerImg.classList.add("banner-img");
    bannerImg.src = "https://source.unsplash.com/random/300×300";
    bannerImg.alt = "Banner Image";
    personContainer.appendChild(bannerImg);

    let personImg = document.createElement("img");
    personImg.classList.add("profile-img");
    personImg.src = person.picture;
    personImg.alt = "Profile Picture";
    personImg.style.backgroundImage = `url(${person.backgroundImage})`;
    contentContainer.appendChild(personImg);

    let title = document.createElement("p");
    title.classList.add("name");
    contentContainer.appendChild(title);

    let firstName = document.createElement("p");
    firstName.classList.add("name");
    contentContainer.appendChild(firstName);

    let lastName = document.createElement("p");
    lastName.classList.add("name");
    contentContainer.appendChild(lastName);

    let profession = document.createElement("p");
    profession.classList.add("profession");
    contentContainer.appendChild(profession);
    profession.innerText = person.title;

    firstName.innerText =
      person.name.title + " " + person.name.first + " " + person.name.last;

    let mutualConnections = document.createElement("p");
    mutualConnections.classList.add("mutual");
    contentContainer.appendChild(mutualConnections);
    mutualConnections.innerText = `Mutual Connections: ${person.mutualConnections}`;

    let btnConnect = document.createElement("button");
    btnConnect.classList.add("btnConnect");
    btnConnect.innerText = "Connect ";
    contentContainer.appendChild(btnConnect);
    btnConnect.addEventListener("click", connect);

    let btnClose = document.createElement("button");
    btnClose.classList.add("btnClose");
    btnClose.innerText = "X";
    btnClose.person = person;
    personContainer.appendChild(btnClose);
    btnClose.addEventListener("click", changecontact);
  }
}

function changecontact(event) {
  const indexToRemove = state.persons.indexOf(event.target.person);
  if (indexToRemove != -1) {
    state.persons.splice(indexToRemove, 1);
    getSingleContact();
  }
}
let newCount = 0;

function connect(event) {
  const pending = document.querySelector("#pending");
  const btnConnect = event.target;

  if (btnConnect.innerText === "Connect") {
    newCount++;
    pending.innerText = newCount + " pending invitations";
    btnConnect.innerText = "Pending";
  } else {
    newCount--;
    pending.innerText = newCount + " pending invitations";
    btnConnect.innerText = "Connect";
  }
}
