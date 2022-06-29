
const perguntas = document.querySelector('.perguntas')

  perguntas.addEventListener('change',(e) => {
    
    let parentNode = e.target.parentNode;
    let els = parentNode.parentNode.querySelectorAll('[type=radio]');

    let input = e.target.value
    if(input == "correct"){
      e.target.parentNode.style.backgroundColor = "green"
      els.forEach(element => {
        element.disabled = true
      });   
    }
    else{
      e.target.parentNode.style.backgroundColor = "red"
      els.forEach(element => {
        element.disabled = true
      });
    }
  })
