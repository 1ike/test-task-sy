import renderTarifs from './components/tarifs';
import renderModal, { modalElem } from './components/modal';
import state from './state';


const { tarifs, modal } = state;


const closeModal = () => {
  modal.isOpen = false;
  modal.tarif = null;

  renderModal({ modal });
};

const buttonClose = modalElem.getElementsByClassName('modal__closeBtn')[0];
buttonClose.addEventListener('click', (event) => {
  event.stopPropagation();

  closeModal();
});
const modalElemClose = modalElem.getElementsByClassName('modal__dialog')[0];
modalElem.addEventListener('click', ({ target }) => {
  if (target !== modalElemClose) return;
  closeModal();
});


const openModal = (name) => {
  modal.isOpen = true;
  modal.tarif = tarifs.filter(tarif => tarif.name === name)[0]; // eslint-disable-line

  renderModal({ modal });
};

renderTarifs({ tarifs, openModal });
