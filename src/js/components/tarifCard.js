export default ({ tarif }) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('id', tarif.name);
  card.setAttribute('role', 'button');

  card.innerHTML = `
    <img  class="card__img" src="img/${tarif.img}" alt="${tarif.name}">
    <h2 class="card__header">${tarif.name}</h2>
    <p class="card__descr">${tarif.descr}</p>
    <div class="card__price price">
      <div class="price__value"><div class="price__currency">$</div>${tarif.price}</div> / month
    </div>`;

  return card;
};
