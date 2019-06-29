import renderTarifCard from './tarifCard';

export const modalElem = document.getElementsByClassName('modal')[0];
const tarifElem = document.getElementsByClassName('modal__body')[0];

export default (props) => {
  const { modal: { isOpen, tarif } } = props;
  const modalOpenClassName = 'modal--open';
  const bodyModalOpenClassName = 'modal-open';

  if (!isOpen) {
    modalElem.classList.remove(modalOpenClassName);
    document.body.classList.remove(bodyModalOpenClassName);
    return;
  }

  modalElem.classList.add(modalOpenClassName);
  document.body.classList.add(bodyModalOpenClassName);

  const tarifCard = renderTarifCard({ tarif });
  tarifElem.innerHTML = '';
  tarifElem.appendChild(tarifCard);
};
