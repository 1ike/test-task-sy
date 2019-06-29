import renderTarifCard from './tarifCard';

const tarifsElem = document.getElementsByClassName('tarifs')[0];

export default (props) => {
  const { tarifs, openModal } = props;

  tarifs.forEach((tarif) => {
    const tarifCard = renderTarifCard({ tarif });
    tarifCard.classList.add('card--as-link');
    tarifCard.addEventListener('click', () => openModal(tarif.name));
    tarifsElem.appendChild(tarifCard);
  });
};
