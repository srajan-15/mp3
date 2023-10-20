document.getElementById('register-button').addEventListener('click', function() {
    // Collect data from the form
    const formData = {
      RegistrationType: document.querySelector('input[name="registration-type"]:checked').value,
      Title: document.getElementById('title').value,
      Name: document.getElementById('name').value,
      FatherTitle: document.getElementById('father-title').value,
      FatherName: document.getElementById('father-name').value,
      BirthDate: document.getElementById('birth-date').value,
      Address: document.getElementById('address').value,
      PINCode: document.getElementById('pincode').value,
      MobileNo: document.getElementById('mobile-no').value,
      EmailID: document.getElementById('email').value,
      PANNumber: document.getElementById('pan-number').value,
      AadharNumber: document.getElementById('aadhar-number').value,
      NomineeName: document.getElementById('nominee-name').value,
      NomineeRelation: document.getElementById('nominee-relation').value,
      Password: document.getElementById('password').value,
    };
  
    // Send the formData to the registration API using a POST request
    fetch('http://uatbenmoon.malayinfotech.com/api/memberapi/', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the API as needed
      console.log(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  