const backdrop = document.querySelector('.backdrop')
const loginPopUp = document.querySelector('.popupLogin')
const headerLoginBtn = document.querySelector('.headerLogin')
const cansel = document.querySelector('.cansel')
const popUpLoginBtn = document.querySelector('.popUpLoginBtn')
const thisIsMyOrder = document.querySelectorAll('.thisIsMyOrder')
const popupCard = document.querySelectorAll('.popupCard')
const closePopUp = document.querySelectorAll('.closePopUp')
const logout = document.querySelector('.logout')
console.log(logout)

closePopUp.forEach((elem, i) => {
    elem.addEventListener('click', () => {
        backdrop.style.display = 'none'
        popupCard[i].style.display = 'none'
    })
});
thisIsMyOrder.forEach((elem, i) => {
    elem.addEventListener('click', () => {
        backdrop.style.display = 'block'
        popupCard[i].style.display = 'flex'
    })
});

headerLoginBtn.addEventListener('click', () => {
    backdrop.style.display = 'block'
    loginPopUp.style.display = 'flex'
})
cansel.addEventListener('click', () => {
    backdrop.style.display = 'none'
    loginPopUp.style.display = 'none'
})
popUpLoginBtn.addEventListener('click', () => {
    window.location.href = './profile.html'

})