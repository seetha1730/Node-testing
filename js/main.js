$(function () {
    //fetching data from Cuisine

    fetch('http://192.168.1.105:5100/api/cuisine')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {

            myJson.forEach(function (opt) {

                var option = document.createElement("option");
                option.text = opt.name;

                option.value = opt.id;

                document.querySelector('#cuisine').appendChild(option);

            });

            });

  //fetching data from regions api
    fetch('http://192.168.1.105:5100/api/regions')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {

            myJson.forEach(function (opt) {

                var option = document.createElement("option");
                option.text = opt.name;

                option.value = opt.id;

                document.querySelector('#region').appendChild(option);

            });

            });
    //fetching data from gender api
    fetch('http://192.168.1.105:5100/api/gender')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {

            myJson.forEach(function (opt) {

                var option = document.createElement("option");
                option.text = opt.gender;

                option.value = opt.id;

                document.querySelector('#gender').appendChild(option);

            });

            });



//dashboard menu list table
    function deleteRow(row)
    {
        var i=row.parentNode.parentNode.rowIndex;
        document.getElementById('POITable').deleteRow(i);
    }


    function insRow()
    {
        var x=document.getElementById('POITable').insertRow(1);
        var c1=x.insertCell(0);
        var c2=x.insertCell(1);
        c1.innerHTML="NEW CELL1";
        c2.innerHTML="NEW CELL2";
    }



});



