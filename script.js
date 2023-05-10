const year = new Date().getFullYear();
const footer = document.querySelector('footer');
footer.innerHTML = '&copy; ' + year + ' Eclipse Automotive';


const contactBtn = document.querySelector('#contact');

/*var tabButtons=document.querySelector(".TabContainer .buttonContainer button");
var tabPanels=document.querySelector(".TabContainer .tabcontent");

function showPanel(panelIndex,colorcode) {
    tabButtons.forEach(function(node) {
        node.style.backgroundColor="";
        node.style.Color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node) {
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}

showPanel(0);
*/

function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();

//Navigation menu on small screens

const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#nav-menu');
menuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('show');
});

