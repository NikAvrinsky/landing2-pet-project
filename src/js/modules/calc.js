const calc = (size, material, options, promocode, result) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result)
    let sum = 0
    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value * +materialBlock.value) + (+optionsBlock.value))
        
        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Выберите размер и материал картины"
            resultBlock.style.fontSize = '14px'
        } else if (promocodeBlock.value === "IWANTPORTRAIT") {
            resultBlock.textContent = `${Math.round((sum * 0.7))} руб.`
            resultBlock.style.fontSize = '30px'
        } else {
            resultBlock.textContent = `${sum} руб.`
            resultBlock.style.fontSize = '30px'
        }
    }
    sizeBlock.addEventListener('change', calcFunc)
    materialBlock.addEventListener('change', calcFunc)
    optionsBlock.addEventListener('change', calcFunc)
    promocodeBlock.addEventListener('input', calcFunc)
}

export default calc