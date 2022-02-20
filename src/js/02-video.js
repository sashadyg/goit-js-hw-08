import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const savedTime = function (data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
}
player.on('timeupdate', throttle(savedTime, 1000));

const getTime = localStorage.getItem("videoplayer-current-time")
const getParsedTime = JSON.parse(getTime)

player.setCurrentTime(getParsedTime.seconds)

if (getParsedTime.seconds === 571.52) {
  localStorage.removeItem('videoplayer-current-time');
}
