type Position = {
    linea: string; //"defensa | medio | delantero"
    rol: string; //"defender | filtrar | hacer goles"
}

type Jugador = {
    nombre: string;
    club: string;
    dorsal: number;
    activo: boolean;
    position: Position;
}

// Plantilla inicial

const jugador1: Jugador = {
    nombre: "James rodriguez",
    club: "Seleccion colombia",
    dorsal: 10,
    activo: true,
    position: { linea: "medio campo", rol: "caminar" }
}

const jugador2: Jugador = {
    nombre: "Falcao",
    club: "Seleccion colombia",
    dorsal: 9,
    activo: true,
    position: { linea: "delantero", rol: "hacer goles" }
}

const jugador3: Jugador = {
    nombre: "Ronaldo Nazario",
    club: "Brasil",
    dorsal: 9,
    activo: false,
    position: { linea: "delantero", rol: "ser el mejor delantero" }
}

// Logica de negocio: Agreguen otros dos objetos y recórranlos todos.

const jugador4: Jugador = {
    nombre: "Lionel Messi",
    club: "Inter Miami",
    dorsal: 10,
    activo: true,
    position: { linea: "delantero", rol: "crear juego" }
}

const jugador5: Jugador = {
    nombre: "Cristiano Ronaldo",
    club: "Al Nassr",
    dorsal: 7,
    activo: true,
    position: { linea: "delantero", rol: "hacer goles" }
}

const jugadores: Jugador[] = [jugador1, jugador2, jugador3, jugador4, jugador5];

console.log("--- Lista de Jugadores ---");
for (const j of jugadores) {
    console.log(`Jugador: ${j.nombre}  Club: ${j.club}  Dorsal: ${j.dorsal}  Posición: ${j.position.linea} (${j.position.rol})`);
    console.log(`Activo: ${j.activo ? "Sí" : "No"}`);
}