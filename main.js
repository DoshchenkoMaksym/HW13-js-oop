let clock = document.querySelector('.clock');
class Clock {
    constructor() {
    }
    render() {
        let data = new Date;
        this.hours = data.getHours();
        this.minutes = data.getMinutes();
        this.seconds = data.getSeconds();
        if (clock.classList.contains('full')){
            clock.innerHTML = `${this.hours}:${this.minutes}:${this.seconds}`;
        } else (
            clock.innerHTML = `${this.hours}:${this.minutes}`
        );
    };
    fullScreen() {
        clock.classList.add('full');
    };
    shortScreen() {
        clock.classList.remove('full');
    }

};

clock.addEventListener('click', () => {
    clock.classList.toggle('full');
})

let newClock = new Clock();

setInterval(newClock.render, 1000);

