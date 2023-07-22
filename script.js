const studentData = [
  {
    name: "Madhu",
    address: "123 Main St",
    location: "Nellore",
	collage:"svcet",
	qualification:"Mca"
  },
  {
    name: "Hari",
    address: "ramalaya main street",
    location: "Thirupathi",
	collage: "narayana collage",
	qualification:"B Tech"
  },
  {
    name: "Naveen",
    address: "vrc center main street",
    location: "Gudur",
	collage: "adishankara",
	qualification:"B Tech"  
	 
  }
];

function showHomePage() {
  document.getElementById("content").innerHTML = "<h2>Welcome to Home Page</h2>";
}

function showContactUsPage() {
  document.getElementById("content").innerHTML = "<h2>Welcome to Contact Us page</h2>";
}

// Display student data initially
const studentList = studentData.map(student => `
  <h2>Student Data:</h2>
  <p>Name: ${student.name}</p>
  <p>Address: ${student.address}</p>
  <p>Location: ${student.location}</p>
  <p>collage: ${student.collage}</P>
  <p>qualification: ${student.qualification}</p>
`).join('');

document.getElementById("content").innerHTML = studentList;
