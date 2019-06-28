export default (tarif) => {
  const card = document.createElement('div');
  card.classList.add('tarifs__card');

  card.innerHTML = `
    <img  class="tarifs__img" src="img/${tarif.img}" alt="${tarif.name}">
    <h2 class="tarifs__header">${tarif.name}</h2>
    <p class="tarifs__descr">${tarif.descr}</p>
    <p class="tarifs__price">${tarif.price}</p>`;
  // const { body } = document;
  // body.insertBefore(main, body.firstChild);

  return card;
};
