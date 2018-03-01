function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://api.football-data.org/v1/competitions/?season=2017", true);
    //xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.setRequestHeader("X-Auth-Token", "dad01b148baf414c8de0d4e4df4c8b9c");
    xhttp.send();
    //var response = JSON.parse(xhttp.responseText);
    var response = xhttp.responseText;
    alert(response);
}

/*
headers: { 'X-Auth-Token': 'YOUR_API_TOKEN' },
  url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
  dataType: 'json',
  type: 'GET',
*/