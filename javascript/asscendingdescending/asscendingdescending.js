let arr = [];
let isAscending = true;
let tableCont = document.getElementById("tableBody");

const url = "http://jsonplaceholder.typicode.com/posts";
const generateMarkup = () => {
  let tableCont = document.getElementById("tableBody");
  tableCont.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    var collect = "";
    collect += "<tr>";
    collect += `<td>${arr[i].id}</td>`;
    collect += `<td>${arr[i].userId}</td>`;
    collect += `<td>${arr[i].body}</td>`;
    collect += `<td>${arr[i].title}</td>`;
    collect += "</tr>";
    tableCont.innerHTML += collect;
  }
};

const fetchPosts = () => {
  fetch(url, { method: "GET" })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      if (data.length) {
        arr = data;
        generateMarkup();
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const sort = () => {
  let btn = document.querySelector("#sortbtn");
  if (isAscending) {
    btn.innerHTML = "Descending";
    arr.sort(function (a, b) {
      return b.id - a.id;
    });
    isAscending = false;
  } else {
    btn.innerHTML = "Ascending";
    arr.sort(function (a, b) {
      return a.id - b.id;
    });
    isAscending = true;
  }
  generateMarkup();
};

const search = () => {
  let filter = document.getElementById("input").value.toUpperCase();
  console.log(filter);
  let myTable = document.getElementById("tableBody");
  let tr = myTable.getElementsByTagName("tr");
  // console.log(tr[1]);

  for (let i = 0; i < tr.length; i++) {
    let td = tr[i]
      .getElementsByTagName("td")[2]
      .textContent.toLocaleUpperCase();
    // console.log(td);
    if (td.indexOf(filter) > -1) {
      tr[i].style.display = "";
    } else {
      tr[i].style.display = "none";
    }
  }
};

const saveData = () => {
  localStorage.setItem("new", JSON.stringify(arr));
};

window.addEventListener("DOMContentLoaded", (event) => {
  let data = localStorage.getItem("new");
  if (data) {
    arr = JSON.parse(data);
    generateMarkup();
  }
});