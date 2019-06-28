import renderTarifs from './components/tarifs';
import state from './state';


const tarifs = renderTarifs(state.tarifs);
const { body } = document;
body.insertBefore(tarifs, body.firstChild);
