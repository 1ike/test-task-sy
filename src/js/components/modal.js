import renderTarifCard from './tarifCard';

export const modalElem = document.getElementsByClassName('modal')[0];
const tarifElem = document.getElementsByClassName('modal__body')[0];

export default (props) => {
  const { modal: { isOpen, tarif } } = props;
  const modalOpenClassName = 'modal--open';

  if (!isOpen) {
    modalElem.classList.remove(modalOpenClassName);
    return;
  }
  modalElem.classList.add(modalOpenClassName);

  const tarifCard = renderTarifCard({ tarif });
  tarifElem.innerHTML = '';
  tarifElem.appendChild(tarifCard);
};
