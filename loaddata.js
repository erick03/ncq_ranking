var mydata = JSON.parse(personas);
var tableusers = document.getElementById("tbl_users");

console.log(mydata);
orderPoints();
addRows();
function addRows() {
  var rk = 1;
  mydata.forEach((person) => {
    newrow = getRow(rk, person.Nombre, person.Pts, 1, person.foto);
    insertRow(newrow);
    rk++;
  });
}

function insertRow(newR) {
  tableusers.innerHTML += "<tr>" + newR + "</tr>";
}

function getRow(ranking, name, pts, avance, foto) {
  const myrow =
    "<td>" +
    ranking +
    "</td>" +
    '<th scope="row">' +
    '<div class="media align-items-center">' +
    '<a href="#" class="avatar rounded-circle mr-3">' +
    '<img alt="Image placeholder" src="' +
    foto +
    '"/>' +
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
    "/9" +
    "</span>" +
    '<div><div class="progress">' +
    '<div class="progress-bar bg-warning" role="progressbar" aria-valuenow="' +
    avance +
    '" aria-valuemin="0" aria-valuemax="9" style="width:' +
    avance * 10 +
    '%"></div>' +
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
