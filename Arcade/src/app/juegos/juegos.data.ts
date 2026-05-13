import { Juego } from "../models/juego";

export const JUEGOS: Juego[] = [
  {
    nombre: 'Ahorcado',
    subtitulo: '¡No dejes que te cuelguen! Adiviná la palabra letra por letra.',
    imagen: '/ahorcado.jpg',
    descripcion: 'En este clásico juego de adivinanzas, tu objetivo es descubrir una palabra oculta antes de que el muñeco del ahorcado esté completo. Cada vez que adivines una letra incorrecta, el muñeco se acerca un paso más a su destino final. ¡Pon a prueba tu vocabulario y tu suerte para salvar al ahorcado!',
    ruta: '/juegos/ahorcado'
  },
  {
    nombre: 'Mayor o Menor',
    subtitulo: 'Poné a prueba tu intuición: ¿la carta que viene es más alta o más baja?',
    imagen: '/mayormenor.jpg',
    descripcion: 'En este juego de cartas, tu objetivo es adivinar si la próxima carta que se revelará será mayor o menor que la carta actual. Cada vez que aciertes, ganarás puntos y avanzarás en el juego. Pero cuidado, una mala suposición podría hacerte perder todo lo acumulado. ¡Confía en tu instinto y demuestra que eres un maestro del mayor o menor!',
    ruta: '/juegos/mayor-menor'
  },
  {
    nombre: 'Preguntados',
    subtitulo: '¿Quién es este personaje? ¡Poné a prueba tu memoria!',
    imagen: '/preguntados.jpg',
    descripcion: '¡Pon a prueba tu memoria con este clásico juego de preguntas y respuestas! Adivina quién es el personaje descrito en cada carta.',
    ruta: '/juegos/preguntados'
  },
  {
    nombre: 'Sudoku',
    subtitulo: 'Desafiá tu mente: completá el rompecabezas donde solo la lógica sobrevive.',
    imagen: '/sudoku.jpg',
    descripcion: '¡Pon a prueba tu mente con este desafío lógico! Completa el tablero de Sudoku siguiendo las reglas del juego.',
    ruta: '/juegos/sudoku'
  }
];