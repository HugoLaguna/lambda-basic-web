function getDatos() {
        apiUrlGetDatos = "https://api.licoreros.com/functions";
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                licorerosData = JSON.parse(this.responseText);

                var renderHTML = '';

                licorerosData.body.Items.forEach(function(itemJS){
                    renderHTML += itemJS.name + '<br>';
                })

                document.getElementById("console").innerHTML = renderHTML;
            }
        }
        xhttp.open('GET', apiUrlGetDatos, true);
        xhttp.send();
    }
