// const form = document.getElementById("form");
const successMessage = document.getElementById("success-message");
const loadingSpinner = document.getElementById("loading-spinner");

// form.addEventListener("submit", submitForm);

function displayValues() {
  // Assuming you have retrieved the values from your form fields
  var nameValue = document.getElementById('name').value;
  var emailValue = document.getElementById('email').value;
  var phoneNumValue = document.getElementById('phoneNum').value;
  var pinCodeValue = document.getElementById('pinCode').value;
  var bgt = document.getElementById('bgt').value;
  var prValue = document.getElementById('pr').value;
  var destValue = "harsh@internovo.in";  // replace with the actual value
  var websiteValue = "Indihomes.co.in";    // replace with the actual value

  // console.log(bgt);

  // Create a new FormData object
  const formData = {
    name: nameValue,
    email: emailValue,
    phoneNum: phoneNumValue,
    pinCode: pinCodeValue,
    budget: bgt,
    pr: prValue,
    dest: destValue,
    website: websiteValue
  };

  // Show the loading spinner
  loadingSpinner.style.display = "block";

  fetch("https://email-serve-gamma.vercel.app/upload_files", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      // Hide the loading spinner regardless of the result
      loadingSpinner.style.display = "none";

      if (res.ok) {
        // Email sent successfully
        successMessage.textContent = 'Email sent successfully';
      } else {
        // Handle other responses or errors
        successMessage.textContent = 'Error sending email';
      }
    })
    .catch((err) => {
      // Hide the loading spinner on error
      loadingSpinner.style.display = "none";

      console.error("Error occurred", err);
      successMessage.textContent = 'Error sending email';
    });
}
