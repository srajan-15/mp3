document.getElementById('login-button').addEventListener('click', function() {
    // Collect login data from the form
    const loginData = {
      LoginName: document.getElementById('login-id').value,
      LoginPwd: document.getElementById('login-password').value
    };
  
    // Send the loginData to the login API using a POST request
    fetch('http://uatbenmoon.malayinfotech.com/api/memberlogin/', {
      method: 'POST',
      body: JSON.stringify(loginData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response from the API as needed
      console.log(data);
  
      // Display member details on successful login
      const memberDetails = document.createElement('div');
      memberDetails.innerHTML = `
        <p>Member Name: ${data.MemberName}</p>
        <p>Member Address: ${data.MemberAddress}</p>
        <p>Member City Name: ${data.MemberCityName}</p>
        <p>Member PIN Code: ${data.MemberPinCode}</p>
        <p>Mobile No: ${data.MobileNo}</p>
        <p>Email ID: ${data.EmailID}</p>
        <p>PAN Number: ${data.MemberPANNo}</p>
        <p>Birth Date: ${data.BirthDate}</p>
      `;
  
      document.body.appendChild(memberDetails);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  