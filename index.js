// console.log('WElcome to the cv screener');
// poeple = [{
//         name: "Guglani",
//         city: "shamli",
//         age: 21,
//         language: "python",
//         framework: "Django",
//         img: 'https://randomuser.me/api/portraits/men/1.jpg'
//     },
//     {
//         name: "Rohit",
//         city: "Ghaziabad",
//         age: 20,
//         language: "C++",
//         framework: "STL",
//         img: 'https://randomuser.me/api/portraits/men/11.jpg'
//     },
//     {
//         name: "Arshraj",
//         city: "Ghaziabad",
//         age: 21,
//         language: "dart",
//         framework: "Flutter",
//         img: 'https://randomuser.me/api/portraits/men/21.jpg'
//     },
//     {
//         name: "Kishan",
//         city: "Ayodhya",
//         age: 21,
//         language: "Java",
//         framework: "Spring",
//         img: 'https://randomuser.me/api/portraits/men/35.jpg'
//     },
//     {
//         name: "Ambuj",
//         city: "Lucknow",
//         age: 21,
//         language: "Go",
//         framework: "Go flask",
//         img: 'https://randomuser.me/api/portraits/men/23.jpg'
//     },
//     {
//         name: "Raza",
//         city: "Lucknow",
//         age: 21,
//         language: "JAVASCRIPT",
//         framework: "NodeJS",
//         img: 'https://randomuser.me/api/portraits/men/71.jpg'
//     }
// ]
// console.log(poeple[3].language);
async function fun1() {
    const response = await fetch('https://randomuser.me/api?results=12');
    const users = await response.json();
    return users;
}

let a = fun1();
// console.log(a);

a.then((data) => {
    poeple = data.results
    console.log(poeple)


    function cvIterator(poeple) {
        let nextIndex = 0;
        return {
            next: function () {
                return nextIndex < poeple.length ? {
                    value: poeple[nextIndex++],
                    done: false
                } : {
                    done: true
                }
            }
        }
    }
    const candidates = cvIterator(poeple);

    nextCv();


    let btn = document.getElementById('btn');
    btn.addEventListener('click', nextCv);

    function nextCv() {

        const currentCandidate = candidates.next().value
        if (currentCandidate != undefined) {
            let image = document.getElementById('image')
            let profile = document.getElementById('profile')
            image.innerHTML = `<img src='${currentCandidate.picture.large}'>
    `;
            console.log(currentCandidate.picture.large);

            profile.innerHTML = `
    <ul class="list-group">

                    
                    <li class="list-group-item">Name :${currentCandidate.name.first}</li>
                    <li class="list-group-item">${currentCandidate.dob.age} years old</li>
                    <li class="list-group-item"> Lives in:${currentCandidate.location.country}</li>
                    <li class="list-group-item">Email: ${currentCandidate.email}</li>
                    <li class="list-group-item"> Contact: ${currentCandidate.cell} </li>
                    
                </ul> 
    `
        } else {
            alert('End of the aplications of candidates');
            window.location.reload();
        }
    }
});