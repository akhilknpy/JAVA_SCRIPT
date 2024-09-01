 // Hide and Unhide Image
 const button = document.getElementById('Button');
 const image = document.getElementById('image');

 button.addEventListener('click', hide_display)
 function hide_display(){
    if (image.style.display==="none") {

        button.textContent="Hide Image";
        image.style.display="block"
    } else {
        button.textContent="Show Image";
        image.style.display='none';
    }

 }


 // Event Listener for onfocus
 var usernameField = document.getElementById('username');
 usernameField.addEventListener('focus', () => {
     usernameField.style.backgroundColor = '#e0f7fa';
 });
// Event Listener for onblur
 var usernameField = document.getElementById('username');
 usernameField.addEventListener('blur', () => {
     usernameField.style.backgroundColor = 'white';
 });

 // Event Listener for onsubmit
 const form = document.getElementById('myForm');
 form.addEventListener('submit', (event) => {
     alert('Form Submitted Successfully!');
 });