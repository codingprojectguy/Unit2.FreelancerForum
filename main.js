const names = ["Alice", "Bob", "Carol","James","Emily","John","Ethan","Hanna", "Liam", "Emma", "Noah", "Olivia", "Oliver", "Ava", "Elijah", "Charlotte", "James", "Sophia",
"Benjamin", "Amelia", "Lucas", "Isabella", "Henry", "Mia", "Alexander", "Harper", "Sebastian", "Evelyn",
"William", "Abigail", "Michael", "Aria", "Ethan", "Riley", "Daniel", "Grace", "Matthew", "Chloe",
"Logan", "Ella", "David", "Lily", "Jackson", "Zoe", "Joseph", "Madison", "Samuel", "Layla",
"Henry", "Scarlett", "Owen", "Nora", "Carter", "Luna", "John", "Mila", "Jack", "Sofia" ];
const occupations = [
  "Software Developer",
  "Graphic Designer",
  "Doctor",
  "Teacher",
  "Engineer",
  "Nurse",
  "Architect",
  "Web Developer",
  "Accountant",
  "Electrician",
  "Plumber",
  "Chef",
  "Writer",
  "Photographer",
  "Marketing Manager",
  "Data Analyst",
  "Lawyer",
  "Mechanic",
  "Dentist",
  "Artist",
  "Psychologist",
  "Social Worker",
  "Veterinarian",
  "Financial Analyst",
  "Human Resources Manager",
  "Translator",
  "Physiotherapist",
  "Pharmacist",
  "Meteorologist",
  "Pilot",
  "Hair stylist",
];
const maxFreelancer = 15;
// This array will hold freelancer objects.
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
]; 

render();

 const addfreelancer = setInterval(generateRandom, 5000)

function render () {
  const freelancerList = document.querySelector("#freelancer-list");
  freelancerList.innerHTML='';
  for(const freelancer of freelancers) {
    const element = document.createElement('li');
    element.innerHTML = `${freelancer.name},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${freelancer.occupation},&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Starting at $${freelancer.price}`
    //console.log('select element:',element)
    freelancerList.appendChild(element);
  }
}

function generateRandom () {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const rendomPrice = Math.floor(Math.random() * 80) + 30;

     const newFreelancer ={
      name : randomName,
      occupation : randomOccupation,
      price : rendomPrice,
     }
     freelancers.push(newFreelancer)
     console.log('new random freelancer',newFreelancer)
     render();
     calculateAveragePrice();

    //  if(freelancers.length === 50 ) {
    //   clearInterval(addfreelancer)
    //  }
}

function calculateAveragePrice () {
  const averagePrice = document.querySelector('#average-price');

  const totalprice = freelancers.reduce((acc,cur) => acc + cur.price, 0);
  let averagePriceamount = totalprice / freelancers.length;
  
  averagePrice.textContent = `Average starting price: $${averagePriceamount.toFixed(2)}`
}
calculateAveragePrice();