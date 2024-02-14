function generateNumber(){
    const min = Math.ceil(document.querySelector('.input-min').value)
    const max = Math.floor(document.querySelector('.input-max').value)
    let h2 = document.querySelector('h2')

    if(min >= max){
        alert('O valor minimo tem que ser menor que o valor maximo')
    }else{

    const result = Math.floor(Math.random() * (max - min +1)) + min;

    h2.innerHTML = result
    
}
}