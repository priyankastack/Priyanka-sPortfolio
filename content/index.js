/*---active-link js start---*/
const navLinks = document.querySelectorAll('.nav-links a');
function setActiveLink(event) {
    navLinks.forEach(link => {
        link.classList.remove('active-link');
    });
    event.target.classList.add('active-link');
}
navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});
/*---active-link js end---*/

/*--Proffession js of first section start--*/
const professions = ["Frontend Developer", "WordPress Developer"];
let currentProfessionIndex = 0;
let charIndex = 0;
const professionElement = document.getElementById("profession");

function typeProfession() {
  // Get current word
  const currentProfession = professions[currentProfessionIndex];
  
  // Display characters one by one
  if (charIndex < currentProfession.length) {
    professionElement.textContent += currentProfession.charAt(charIndex);
    charIndex++;
    setTimeout(typeProfession, 100); // Adjust typing speed here
  } else {
    // Pause before erasing
    setTimeout(eraseProfession, 2000); // Delay after full word is typed
  }
}

function eraseProfession() {
  if (charIndex > 0) {
    // Remove characters one by one
    professionElement.textContent = professionElement.textContent.slice(0, --charIndex);
    setTimeout(eraseProfession, 50); // Adjust erasing speed here
  } else {
    // Move to the next word
    currentProfessionIndex = (currentProfessionIndex + 1) % professions.length;
    setTimeout(typeProfession, 500); // Delay before typing next word
  }
}

// Start the typing effect
typeProfession();


/*--Proffession js of first section ends--*/

/*---About section js start---*/
let tablinks = document.querySelectorAll(".tab-link");
let tabcontents = document.querySelectorAll(".tab-content");

function opentab(tabname, event) {
    // Remove active class from all tab links
    tablinks.forEach(tablink => {
        tablink.classList.remove("active-link");
    });

    // Remove active class from all tab contents
    tabcontents.forEach(tabcontent => {
        tabcontent.classList.remove("active-tab");
    });

    // Add active class to the clicked tab link
    event.currentTarget.classList.add("active-link");

    // Show the corresponding tab content
    document.getElementById(tabname).classList.add("active-tab");
}
/*--About section js end---*/

/*--Contact-form js start---*/
function sendMail(){
    let parms = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value
    };
    emailjs.send("service_cqafgcl","template_cyt2gqb", parms)
        .then(() =>{
            alert("Email has been sent!");
        })
        .catch((error) => {
            console.error("Failed to send email:", error);
        });
}

/*---Contact-form js end---*/

/*---js start for toggling menu---*/

function toggleMenu(){
    let navlink=document.querySelector(".nav-links");
    navlink.classList.toggle('show');
   }

/*---js end for toggling menu---*/

/*--js for cross-icon starts--*/
 function cross(){
    let navlink=document.querySelector(".nav-links");
    navlink.classList.remove('show');
 }
/*--js for cross-icon ends--*/

/*--js for show more projects starts--*/
 function project() {
    let seeMoreBtn = document.querySelector("#see-more-btn");
    let projectSection = document.querySelector("#project-section");
    let projectContainer2 = document.querySelector("#project-container2");
  
    if (projectContainer2.classList.contains('showmore')) {
      // Hide the extra content and change button back
      projectContainer2.classList.remove('showmore');
      projectSection.classList.remove('height');
      seeMoreBtn.innerHTML = 'See More <i class="fa-solid fa-angles-down" id="see-more-icon"></i>';
    } else {
      // Show the extra content and update the button text
      projectContainer2.classList.add('showmore');
      projectSection.classList.add('height');
      seeMoreBtn.innerHTML = 'See Less <i class="fa-solid fa-angles-up" id="see-more-icon"></i>';
    }
  }
  /*--js for show more projects ends--*/
  
