import { Routes } from '@angular/router';

import { Ahorcado } from './ahorcado/ahorcado';
import { MayorMenor } from './mayor-menor/mayor-menor';
import { Preguntados } from './preguntados/preguntados';
import { Sudoku } from './sudoku/sudoku';

export const JUEGOS_ROUTES: Routes = [

  {path: 'ahorcado',component: Ahorcado},

  {path: 'mayor-menor',component: MayorMenor},

  {path: 'preguntados',component: Preguntados},

  {path: 'sudoku',component: Sudoku}

];