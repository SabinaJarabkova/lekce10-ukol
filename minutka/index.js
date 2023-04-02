console.log('funguju!')

const secondsAlarm = document.querySelector('.alarm__seconds')

const audio = document.querySelector('audio')

const handleSubmit = (event) => {

    event.preventDefault()

    let timeInput = document.querySelector('#time-input').value

    console.log(timeInput)

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
