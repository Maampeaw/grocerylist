
const ulTag = document.createElement('ul')

function addItem(){
    const li = document.createElement('li')
    inputValue = document.querySelector('input').value
    const text = document.createTextNode(inputValue)
    li.append(text)
    if (inputValue === ''){
        alert('Enter a grocery')
    } else {
        document.getElementById('grocList').appendChild(li)
    }
    document.querySelector('input').value = ''
}

