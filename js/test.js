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
$.getJSON('data/data.json', function(json) {
                            alert(json.sites.site[0].expiryDate);
                        });
}


function wtf() {
alert("entro");
var textFile = null,
  makeTextFile = function (text) {
    var data = new Blob([text], {type: 'text/plain'});

    // If we are replacing a previously generated file we need to
    // manually revoke the object URL to avoid memory leaks.
    if (textFile !== null) {
      window.URL.revokeObjectURL(textFile);
    }
	alert(text);
    textFile = window.URL.createObjectURL(data);

    return textFile;
  };
  alert("japlaja");
 alert(makeTextFile("pablO"));
 alert("japlaja2");
}