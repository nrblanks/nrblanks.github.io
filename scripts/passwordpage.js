//Passwork Page Java//

function windo()
{
	var person = prompt("what is your first and last name");
		if (person != null) 
		{
		document.getElementById("dem").innerHTML= "<a href=./pages/secretpage.html>Click</a>" ;
		}

		else
		{
			document.getElementById("dem").innerHTML="sorry this secret page is not for you";
		}


}