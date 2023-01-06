const timeTrackDaily = fetch('../data.json')
  .then((res) => res.json())
  .then((data) => {
    cardDetail.html(
      data.map((time) => {
        return `
          <div class="card-detail card-work">
            <h2 class="card-title title-work">${time.title}</h2>
            <span class="ellipsis-icon"><img src="./images/icon-ellipsis.svg" alt=""></span>
            <p class="currentHours">${time.timeframes.daily.current}hrs</p>
            <p class="previous-hours">Last Week - ${time.timeframes.daily.previous}</p>
          </div>
      `;
      }),
    );
  });

const cardDetail = $('.individual-card');
const daily = $('.daily');
const weekly = $('.weekly');
const monthly = $('.monthly');

$(document).ready(() => {});
