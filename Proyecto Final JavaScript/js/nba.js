let id = document.querySelector("#id");
let name = document.querySelector("#name");
let ape = document.querySelector("#ape");
let pos = document.querySelector("#pos");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let team = document.querySelector("#team");
let confe = document.querySelector("#confe");

function buscarPlayer(){
    fetch("https://free-nba.p.rapidapi.com/players/"+id.value+"", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "free-nba.p.rapidapi.com",
            "x-rapidapi-key": "6fa167fdd5msh8dac2a23f58d78ap1a79e6jsn96723215c051"
        }
    })
    .then(response => response.json())
    .then(data =>{
        let auxName = data['first_name'];
        let auxApe = data['last_name'];
        let auxPos = data['position'];
        let auxPeso = data['weight_pounds'];
        let auxAltura = data['height_feet'];
        let auxTeam = data['team']['full_name']
        let auxConfe = data['team']['conference']

        name.innerHTML = auxName;
        ape.innerHTML = auxApe;
        pos.innerHTML = auxPos;
        peso.innerHTML = auxPeso;
        altura.innerHTML = auxAltura;
        team.innerHTML = auxTeam;
        confe.innerHTML = auxConfe;

        console.log("informacion encontrada con exito");
    })



    .catch(err => {
        console.log("No se encontro al jugador")
    });
}