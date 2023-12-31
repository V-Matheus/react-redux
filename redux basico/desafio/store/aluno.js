const INCREMENTAR_TEMPO = 'aluno/INCREMENTAR_TEMPO';
const REDUZIR_TEMPO = 'aluno/REDUZIR_TEMPO';
const MODIFICAR_EMAIL = 'aluno/MODIFICAR_EMAIL';

export const incrementar_tempo = () => ({ type: INCREMENTAR_TEMPO });
export const reduzir_tempo = () => ({ type: REDUZIR_TEMPO });
export const modificar_email = (email) => ({
  type: MODIFICAR_EMAIL,
  paylod: email,
});

const initialState = {
  nome: 'André Rafael',
  email: 'andre@origamid.com',
  diasRestantes: 120,
};

const reducer = immer.produce((state, action) => {
  switch (action.type) {
    case INCREMENTAR_TEMPO:
      state.diasRestantes++;
      break;
    case REDUZIR_TEMPO:
      state.diasRestantes--;
      break;
    case MODIFICAR_EMAIL:
      state.email = action.paylod;
      break;
  }
}, initialState);

export default reducer;
