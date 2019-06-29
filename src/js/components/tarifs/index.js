import renderTarifCard from './tarifCard';

export default (tarifs = []) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('tarifs');

  tarifs.forEach((tarif) => {
    const tarifCard = renderTarifCard(tarif);
    wrapper.appendChild(tarifCard);
  });

  const button = document.createElement('button');
  button.classList.add('feedback-btn');
  button.textContent = 'Give feedback';


  const main = document.createElement('main');
  main.classList.add('content');
  main.appendChild(wrapper);
  main.appendChild(button);

  return main;
};
