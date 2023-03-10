const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.querySelector('#fortune-btn')
const colorIn = document.querySelector('#fave-color')
const clrForm = document.querySelector('#clr-form')
const strForm = document.querySelector('#str-form')
const strIn = document.querySelector('#str-in')
const dltBtn = document.querySelector('#dlt-btn')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/').then(res => {
        alert(res.data);
    }).catch(e => console.log(e));
}

const faveColor = evt => {
    evt.preventDefault()

    console.log(colorIn.value)

    axios.put('http://localhost:4000/api/color/', { id: colorIn.value }).then(res => {
        if (res.data) {
            document.querySelector('body').classList.remove('not-purple')
            document.querySelector('body').classList.remove('purple')
            document.querySelector('body').classList.add(res.data);
        } else {
            document.querySelector('body').classList.remove('not-purple')
            document.querySelector('body').classList.remove('purple')
            document.querySelector('body').classList.add('not-purple')
            alert('Purple is the only right choice')
        }
    }).catch(e => console.log(e))
}

const postStr = (evt) => {
    evt.preventDefault();

    axios.post('http://localhost:4000/api/', { id: strIn.value }).then(res => {
        document.querySelector('#h-container').innerHTML = ''
        res.data.forEach((e) => {
            let newHeader = document.createElement('h2')
            newHeader.innerHTML = `<p>${e}</p>`
            document.querySelector('#h-container').appendChild(newHeader)
        })
    }).catch(e => console.log(e))
}

const deleteStr = evt => {
    evt.preventDefault()

    axios.delete('http://localhost:4000/api/').then(res => {
        document.querySelector('#h-container').innerHTML = ''
        res.data.forEach((e) => {
            let newHeader = document.createElement('h2')
            newHeader.innerHTML = `<p>${e}</p>`
            document.querySelector('#h-container').appendChild(newHeader)
        })
    }).catch(e => console.log(e))
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
clrForm.addEventListener('submit', faveColor)
strForm.addEventListener('submit', postStr)
dltBtn.addEventListener('click', deleteStr)