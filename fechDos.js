async function obtenerVengador() {
    try{
        const response = await fetch("https://akabab.github.io/superhero-api/api/id/307.json");
        const data = await response.json();
        console.log(`nombreReal: ${data.biography.fullName}`);
        console.log(`Inteligencia: ${data.powerstats.intelligence}`);
    } catch (error) {
        console.log("Error al obtener el vengador:", error);
    }
}
obtenerVengador();