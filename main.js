const names = ["Alice", "Bob", "Carol","James","Emily","John","Ethan","Hanna" ];
const occupations = [
  "Writer",
  "Teacher",
  "Programmer",
  "Banker",
  "Clinician",
  "Baker",
  "Hair stylist",
];
const maxFreelancer = 15;
// This array will hold freelancer objects.
const freelancers = [

]; 

// Call the renderFreelancers function initially
renderFreelancers();

// Set an interval to add new freelancers every 5 seconds (5000 milliseconds)
const addFreelancer =  setInterval(generateRandomFreelancer, 2000);


//update the DOM to reflect the current state.
function renderFreelancers() {
  const freelancerList = document.querySelector("#freelancer-list");
  freelancerList.innerHTML = "";
  // Loop through the freelancers array and create HTML elements for each freelancer
  for (const freelancer of freelancers) {
    const element = document.createElement("li");
    element.innerHTML = `${freelancer.name}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${freelancer.occupation}, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Starting at $${freelancer.price}`;

    freelancerList.appendChild(element);
  }
}


//add random name, occupation and price to the freelancers array. 
function generateRandomFreelancer() {

  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 80) + 30; // Random price between 30 and 100

  const newFreelancer = {
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice,
  };

  freelancers.push(newFreelancer);

  // Call the renderFreelancers function to update the displayed list
  renderFreelancers();
   
   // stop adding freelancers if reached the max number of freelancers.
  if(freelancers.length >= maxFreelancer) {
    clearInterval(addFreelancer)
  }
}



