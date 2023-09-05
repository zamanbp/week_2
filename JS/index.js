// form changing 
// Get references to the forms and links
const signInForm = document.getElementById("signInForm");
const createAccountForm = document.getElementById("createAccountForm");
const showSignInLink = document.getElementById("showSignIn");
const showCreateAccountLink = document.getElementById("showCreateAccount");

// Function to show the Sign In form and hide the Create Account form
function showSignIn() {
signInForm.style.display = "block";
createAccountForm.style.display = "none";
}

// Function to show the Create Account form and hide the Sign In form
function showCreateAccount() {
signInForm.style.display = "none";
createAccountForm.style.display = "block";
}

// Add event listeners to the links to toggle form visibility
showSignInLink.addEventListener("click", showSignIn);
showCreateAccountLink.addEventListener("click", showCreateAccount);
// ends 

// Page running when submit 
document.getElementById("submissionForNext").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Perform your form validation here, and if it's successful:
    // You can redirect the user to another page using window.location.href:
    window.location.href = "./HTML/overviewPage.html";
});
// ends