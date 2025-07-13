// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

const inputList = document.querySelectorAll('[type="radio"]')
console.log(inputList);

inputList.forEach(item => {
    console.log(item.value);
    item.addEventListener("change",()=>{
        document.body.style.backgroundColor = item.value
    })
})


//========================================================

// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const nameInp = document.getElementById("name-input")
const span = document.getElementById("name-output")
nameInp.addEventListener("input",(event) =>{
    span.textContent=event.target.value
})