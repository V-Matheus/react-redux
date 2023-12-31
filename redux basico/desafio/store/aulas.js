const COMPLETAR_AULA = 'aulas/COMPLETAR_AULA';
const COMPLETAR_CURSO = 'aulas/COMPLETAR_CURSO';
const RESETAR_CURSO = 'aulas/RESETAR_CURSO';

export const completar_aula = (id) => ({ type: COMPLETAR_AULA, paylod: id });
export const completar_curso = () => ({ type: COMPLETAR_CURSO });
export const resetar_curso = (email) => ({ type: RESETAR_CURSO });

const initialState = [
  {
    id: 1,
    nome: 'Design',
    completa: true,
  },
  {
    id: 2,
    nome: 'HTML',
    completa: false,
  },
  {
    id: 3,
    nome: 'CSS',
    completa: false,
  },
  {
    id: 4,
    nome: 'JavaScript',
    completa: false,
  },
];

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case COMPLETAR_AULA:
      const index = state.findIndex((x) => x.id === action.paylod);
      if (!isNaN(index) && state[index]) state[index].completa = true;
      break;
    case COMPLETAR_CURSO:
      state.forEach((aula) => (aula.completa = true));
      break;
    case RESETAR_CURSO:
      state.forEatch((aula) => (aula.completa = false));
      break;
  }
}, initialState);

export default reducer;
