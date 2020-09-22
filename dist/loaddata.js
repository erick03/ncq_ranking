var mydata = JSON.parse(personas);
var tableusers = document.getElementById("tbl_users");

console.log(mydata);
orderPoints();
addRows();
function addRows() {
  var rk = 1;
  mydata.forEach((person) => {
    newrow = getRow(rk, person.nombre, person.pts, 10);
    insertRow(newrow);
    rk++;
  });
}

function insertRow(newR) {
  tableusers.innerHTML += "<tr>" + newR + "</tr>";
}

function getRow(ranking, name, pts, avance) {
  const myrow =
    "<td>" +
    ranking +
    "</td>" +
    '<th scope="row">' +
    '<div class="media align-items-center">' +
    '<a href="#" class="avatar rounded-circle mr-3">' +
    '<img alt="Image placeholder" src="https://scontent.ffon1-1.fna.fbcdn.net/v/t1.0-9/79492108_10218402774595688_3370613617194958848_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=j0lKyI1sow8AX-fIz89&_nc_ht=scontent.ffon1-1.fna&oh=c5964c27614ae53fbb8c0645be278819&oe=5F8D84A1"/>' +
    "</a>" +
    '<div class="media-body">' +
    '<span class="mb-0 text-sm"> ' +
    name +
    "</span>" +
    "</div>" +
    "</div>" +
    "</th>" +
    "<td>" +
    pts +
    "</td><td>" +
    '<div class="d-flex align-items-center">' +
    '<span class="mr-2">' +
    avance +
    "</span>" +
    '<div><div class="progress">' +
    '<div class="progress-bar bg-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%"></div>' +
    "</div>" +
    "</div>" +
    "</div>" +
    "</td>";
  return myrow;
}

function orderPoints() {
  mydata.sort((a, b) => (a.pts > b.pts ? -1 : Number(a.pts < b.pts)));
  console.log(mydata);
}
