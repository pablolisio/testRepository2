// Defines una funcion de javascript 
function prueba() { 
// Haces la consulta al servidor 
$.post("http://compremosbien.com/bus", {
               texto : "hola"
           }, function(data) {
				alert(data.val1);
           }, "json");
}