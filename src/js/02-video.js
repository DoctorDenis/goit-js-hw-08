import Vimeo from '@vimeo/player';
import throttle from "lodash.throttle";

const player = new Vimeo('vimeo-player', {});

player.on('timeupdate', throttle(function (data) {

  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem("videoplayer-current-time", JSON.stringify(seconds));
    })
    .catch(function (error) {
      console.error(error);
    });
}, 1000));

player
  .setCurrentTime(localStorage.getItem("videoplayer-current-time"))
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.error("The time was less than 0 or greater than the video’s duration!");
        break;

      default:
        console.error(error.name);
        break;
    }
  });


