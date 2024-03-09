const togglebtn= document.querySelector('.toggle')
const togglebtn_icon= document.querySelector('.toggle i')
const menumobile= document.querySelector('.menumobile')


togglebtn.onclick = function (){
    menumobile.classList.toggle('open')
    const isOpen = menumobile.classList.contains('open')
    togglebtn_icon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}