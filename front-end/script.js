function updateUI()
{
    const display = document.querySelector('.main-container');
    const targetNav = document.querySelector('.home-page-nav'); 
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if(isLoggedIn === 'true')
    {
        const logOut = document.createElement('button');
        logOut.textContent = 'logout';
        logOut.id = 'logout-button';
        targetNav.appendChild(logOut);

        const userText = document.createElement("h2");
        userText.textContent = "Hello User!";
        userText.id = "user-message"
        display.appendChild(userText);
    }
}

document.querySelector('.home-page-nav').addEventListener("click", async (e)=>
{
    if(e.target && e.target.id === 'logout-button')
    {
           try
   {
     const response = await(fetch("http://localhost:8000/api/logout",{
        method : "POST",
        credentials: 'include'
    }));
    const data = await response.json();

    if(response.ok)
    {
        localStorage.removeItem('isLoggedIn');
        document.getElementById("logout-button").remove();
        document.getElementById("user-message").remove();

        alert("you have been logged out!");

        window.location.reload();
    }

   }catch(error)
   {
    console.log("an error occured during logout",error);
   }

    }

})

updateUI();