
//   Autor: Jose Manuel Rodriguez
//   proyecto: ejemplificacion del uso de una API con ayuda de https://pokeapi.co
//   se realiza un "pokedex" que se conecta a la API para mostrar los datos

var idAnteiror=1;
var idSiguiente=1;

const consulta=()=>{
    const pokeName = document.getElementById("pokeName")
    let pokeInput = pokeName.value.toLowerCase();
    fetchPokemon(pokeInput);
}

function pokemonAnterior(){
    fetchPokemon(idAnteiror);
    console.log(idAnteiror);
}

function pokemonSiguiente(){
    fetchPokemon(idSiguiente);
    console.log(idSiguiente);
}

const fetchPokemon = (pokeConsulta) => {
    const url =`https://pokeapi.co/api/v2/pokemon/${pokeConsulta}`;
    fetch(url)
        .then ( res => {
            if(res.status !="200"){ 
                console.log("res");
                window.alert("No encontramos ese Pokemon");
            }
            else{
                return res.json();
            }    
        })
        .then( data => {
            console.log(data)
            const pokemon ={
                nombre:data.name,
                id:data.id,
                altura:data.height,
                peso:data.weight,
                imagen:data.sprites['front_default'],
                tipo:data.types.map((type) => type.type.name),
                habilidad:data.abilities.map((abilities) => abilities.ability.name),
                stats:data.stats.map((stat) => stat.base_stat),
            };
            console.log(pokemon);
            imprimirTarjeta1(pokemon);
            imprimirTarjeta2(pokemon);
            imprimirTarjeta3(pokemon);
            imprimirTarjeta4(pokemon);
            funImgAn(pokemon.id);
            funImpSg(pokemon.id);
        })
    }


    function imprimirTarjeta1 (pokemon){
        let pokeImagenPantalla = document.getElementById("pokeImg");
        pokeImagenPantalla.src = pokemon.imagen;
        let pokeNombrePantalla = document.getElementById("pokeNombre"); 
        pokeNombrePantalla.innerHTML = pokemon.nombre;
        let pokeIdPantalla = document.getElementById("pokeId");
        pokeIdPantalla.innerHTML = pokemon.id;
        let pokePesoPantalla = document.getElementById("pokePeso");
        pokePesoPantalla.innerHTML = pokemon.peso;
        let pokeAlturaPantalla = document.getElementById("pokeAltura");
        pokeAlturaPantalla.innerHTML = pokemon.altura;   
    }

    function imprimirTarjeta2(pokemon){
        console.log(pokemon.tipo.length);
        let pokeTipo1=pokemon['tipo'][0];
        let pokeTipoPantalla1 = document.getElementById("pokeTipo1");
        pokeTipoPantalla1.innerHTML=pokeTipo1;
        let pokeTipo2;
        if (pokemon.tipo.length == 2){
             pokeTipo2=pokemon['tipo'][1];
             let pokeTipoPantalla2 = document.getElementById("pokeTipo2");
        pokeTipoPantalla2.innerHTML=pokeTipo2;
        }        
    }

    const imprimirTarjeta3 = pokemon => {
        let borrar="";
        let borrarPantalla= document.getElementById("pokeHabilidad");
        borrarPantalla.innerHTML=borrar;
        pokemon.habilidad.forEach(abilities => {
            console.log(abilities);
            let pokeHabilidadPantalla = document.getElementById("pokeHabilidad");
            pokeHabilidadPantalla.innerHTML += abilities+"<br>";
        });
    }

    function imprimirTarjeta4(pokemon){
        let pokeStatusPantalla1 =document.getElementById("pokeStatus1");
        pokeStatusPantalla1.innerHTML=pokemon.stats[0];
        let pokeStatusPantalla2 =document.getElementById("pokeStatus2");
        pokeStatusPantalla2.innerHTML=pokemon.stats[1];
        let pokeStatusPantalla3 =document.getElementById("pokeStatus3");
        pokeStatusPantalla3.innerHTML=pokemon.stats[2];
        let pokeStatusPantalla4 =document.getElementById("pokeStatus4");
        pokeStatusPantalla4.innerHTML=pokemon.stats[3];
        let pokeStatusPantalla5 =document.getElementById("pokeStatus5");
        pokeStatusPantalla5.innerHTML=pokemon.stats[4];
        let pokeStatusPantalla6 =document.getElementById("pokeStatus6");
        pokeStatusPantalla6.innerHTML=pokemon.stats[5];
    }


    const funImgAn = (id) => {
        if (id<=1){
            id=898;
        }
        else{
            id=id-1;
        }
        idAnteiror=id;
        console.log(id);
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        fetch(url).then((res)=>{
            return res.json()}).then((data) =>{
                console.log(data);
                let pokeImgAn = data.sprites.front_default;
                impAnt(pokeImgAn);
            })
    }
    
    const impAnt = (url) => {
        const pokeImgAnt = document.getElementById("pokeImgAn");
        pokeImgAnt.src = url;
    }
    
    const funImpSg = (id) => {
        if (id>=898){
            id=1;
        }
        else{
            id=id+1;
        }
        idSiguiente=id;
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        fetch(url).then((res)=>{
            return res.json()}).then((data) =>{
                console.log(data);
                let pokeImgAn = data.sprites.front_default;
                impSg(pokeImgAn);
            })
    }
    
    const impSg = (url) => {
        const pokeImgSgt = document.getElementById("pokeImgSg");
        pokeImgSgt.src = url;
    }

