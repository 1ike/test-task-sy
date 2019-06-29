export default ({ tarif }) => {
  const card = document.createElement('div');
  card.classList.add('tarifs__card');
  card.setAttribute('role', 'button');

  card.innerHTML = `
    <img  class="tarifs__img" src="img/${tarif.img}" alt="${tarif.name}">
    <h2 class="tarifs__header">${tarif.name}</h2>
    <p class="tarifs__descr">${tarif.descr}</p>
    <div class="tarifs__price price">
      <div class="price__value"><div class="price__currency">$</div>${tarif.price}</div> / month
    </div>`;

  return card;
};
