// Defines una funcion de javascript 
function prueba() { 
// Haces la consulta al servidor 
$.post("http://compremosbien.com/bus", {
               texto : "hola"
           }, function(data) {
				alert(data.val1);
           }, "json");
}


function getDataFromJson() { 
// Haces la consulta al servidor
$.getJSON('data/data.json', function(json) {
                            alert(json.sites.site[0].expiryDate);
                        });
}

