const API_url = "http://localhost:8000/api";


document.querySelector('.sign-in-form').addEventListener("submit",async (e)=>
{
    e.preventDefault();
    const fullName = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if(password.length < 6)
    {
        alert("password must be atleast 8 characters long!");
        return;
    }

    try
    {
        const response = await fetch(`${API_url}/signup`,{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'}, //tells the backend we are sending json data
            body : JSON.stringify({fullName, email, password}) //convert JS object to string
        });

        const data = await response.json();
        console.log(`JSON data received from the backend: `,data);
        if(response.ok)
        {
            alert('Signup successful! Redirecting to Home Page');
            window.location.href = 'index.html';
        }
        else{
            alert(data.message || 'Signup failed.');
        }
    }catch(error)
    {
        console.error("Error during signup fetch",error);
        alert("something went wrong. please try again later");
    }
});


