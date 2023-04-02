const data = fetch('../data.json')
  .then((res) => res.json())
  .then((data) => {
    const cards = data.map((item) => {
      const divCard = document.createElement('div');
      divCard.classList.add('card-detail');

      divCard.innerHTML = `
        <h2 class="card-title">${item.title}</h2>
        <span class="ellipsis-icon"><img src="./images/icon-ellipsis.svg" alt=""></span>
        <p class="current-hours">${item.timeframes.daily.current}hrs</p>
        <p class="previous-hours">Last Week - ${item.timeframes.daily.previous}hrs</p>
      `;
      return divCard;
    });

    const individualCard = document.querySelector('.card');
    cards.forEach((divCard) => individualCard.appendChild(divCard));

    const daily = document.querySelector('.daily');
    daily.addEventListener('click', () => {});
  });
