
class Clock {
    constructor() {
        this.clock = document.querySelector('.clock');
        this.time = function () {
            let data = new Date;
            let hours = data.getHours();
            let minutes = data.getMinutes();
            let seconds = data.getSeconds();
            if (this.clock.classList.contains('full')) {
                this.clock.innerHTML = `${hours}:${minutes}:${seconds}`;
            } else {
                this.clock.innerHTML = `${hours}:${minutes}`
            };
        };
        this.clock.addEventListener('click', () => { this.switchScreen() });
    }
    render() {
        return this.time();
    };
    switchScreen() {
        this.clock.classList.toggle('full');
    };
};


let newClock = new Clock();

setInterval(() => newClock.render(), 1000);

