const data = [
  { name: "Dr. Slice", price: 42, occupation: "gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "teacher" },
  { name: "Prof. Prism", price: 81, occupation: "teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "teacher" },
  { name: "Prof. Spark", price: 76, occupation: "programmer" },
  { name: "Dr. Wire", price: 47, occupation: "teacher" },
  { name: "Prof. Goose", price: 72, occupation: "driver" },
];

getData();

function getData() {
  const listSection = document.querySelector(".freelancer-info");

  // Loop through the data array and create elements for each object
  data.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("freelancer-item");

    const nameDiv = document.createElement("div");
    nameDiv.innerHTML = `<h3>${item.name}</h3>`;

    const occDiv = document.createElement("div");
    occDiv.innerHTML = `<h3>${item.occupation}</h3>`;

    const priceDiv = document.createElement("div");
    priceDiv.innerHTML = `<h3>${item.price}</h3>`;

    itemDiv.appendChild(nameDiv);
    itemDiv.appendChild(occDiv);
    itemDiv.appendChild(priceDiv);

    listSection.appendChild(itemDiv);
  });
}
//This code will loop through your data array and create a set of div elements for each object, displaying the name, occupation, and starting price correctly.
