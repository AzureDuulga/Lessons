// fetch("https://randomuser.me/api")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
let data = null;
let state = false;
const cards = document.getElementById("cards");

async function fetchUsers() {
  try {
    const res = await fetch("https://randomuser.me/api");
    // console.log(res);
    data = await res.json();
  } catch (error) {
    console.log("ymr negen aldaa garlaa");
  }
}

// data = fetchUsers().then((d) => {
//   let firstName = d.results[0].name.first;
//   let lastName = d.results[0].name.last;
// });
// console.log(data);
const renderHTML = () => {
  if (data) {
    data.results.forEach((d) => {
      const item = `
          <div style="color: red;">${d.name.first}</div>
      `;
      cards.innerHTML += item;
    });
  }
};

fetchUsers()
  .then(() => {
    console.log("Start");
    renderHTML();
  })
  .catch((err) => console.log(err));
