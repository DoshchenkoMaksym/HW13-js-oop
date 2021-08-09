let clock = document.querySelector('.clock');
class Clock {
    constructor(clock) {
        clock.addEventListener('click', () => { this.switchScreen() });
    }
    render () {
        let data = new Date;
        let hours = data.getHours();
        let minutes = data.getMinutes();
        let seconds = data.getSeconds();
        if (clock.classList.contains('full')) {
            clock.innerHTML = `${hours}:${minutes}:${seconds}`;
        } else {
            clock.innerHTML = `${hours}:${minutes}`
        };
    };
    switchScreen() {
        clock.classList.toggle('full');
    };
};


let newClock = new Clock(clock);

setInterval(() => newClock.render(), 1000);

