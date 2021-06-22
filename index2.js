console.log("Welcome to the fetch api");

function getData() {
  URL = "https://randomuser.me/api?results=22";
  fetch(URL)
    .then((Response) => {
      return Response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

//by await
console.log("welcome to async await");

async function fun1() {
  const response = await fetch("https://randomuser.me/api?results=12");
  const users = await response.json();
  return users;
}

let a = fun1();
// console.log(a);

a.then((data) => {
  poeple = data.results;
  // console.log(poeple)

  // console.log(phone)

  // function cvIterator(poeple) {
  //     let nextIndex = 0;
  //     return {
  //         next: function () {
  //             return nextIndex < poeple.length ? {
  //                 value: poeple[nextIndex++],
  //                 done: false
  //             } : {
  //                 done: true
  //             }
  //         }
  //     }
  // }

  // const candidates = cvIterator(poeple);
  nextCv();

  let btn = document.getElementById("btn");
  btn.addEventListener("click", nextCv);

  function nextCv() {
    console.log("guglani");

    // const currentCandidate = candidates.next().value
    for (let i of poeple) {
      // console.log(i);
      let name = i.name.first;
      let age = i.dob.age;
      let country = i.location.country;
      let email = i.email;
      let phone = i.cell;
      if (true) {
        let image = document.getElementById("image");
        let profile = document.getElementById("profile");
        image.innerHTML = `<img src='${i.picture.large}'> `;

        // console.log(currentCandidate.img);

        profile.innerHTML = `
                    <ul class="list-group">
                    <li class="list-group-item">Name :${name}</li>
                    <li class="list-group-item">${age} years old</li>
                    <li class="list-group-item"> Lives in:${country}</li>
                    <li class="list-group-item">Primarily works on: ${email}</li>
                    <li class="list-group-item"> with ${phone} framework</li>
                    
                </ul> 
    `;
      }
    }
    profile.innerHTML = "";
  }
});
