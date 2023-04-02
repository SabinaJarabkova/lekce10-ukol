console.log('funguju!')

//let timeInput = document.querySelector('.time-input').value

let timeInput = 5

const secondsAlarm = document.querySelector('.alarm__seconds')

const audio = document.querySelector('audio')

const handleSubmit = (event) => {

    event.preventDefault()

    const counter = () => {

        if (timeInput > 0) {
            timeInput = timeInput - 1
            secondsAlarm.textContent = String(timeInput).padStart(2, '0')
        }

        if (timeInput <= 0) {
            timeInput = '00'
            clearInterval(counting)
            audio.play()
        }        
    }

    const counting = setInterval(counter, 1000)
}

const form = document.querySelector('.controls')
form.addEventListener('submit', handleSubmit)