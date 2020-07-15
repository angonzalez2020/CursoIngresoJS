/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var nombreIngresado;//declaro o creo variable

	nombreIngresado = prompt("Please enter your name", "Harry Potter"); //asigno o cargo la variable
	// var es declaracion variable /person es el identificador, variable /valor literal se llama lo que esta entre () /
	// el prom es el area para dejar el mensaje es una ventana emergente
//el valor de la asignacion es destructivo
	alert(nombreIngresado); //mostrar el valor de la variable
}

