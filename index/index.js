// const toggleButton = document.getElementById('toggle-btn')
// const sidebar = document.getElementById('sidebar')

function toggleButton(button){
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')

}

function toggleSubMenu(button){
    // ornek olarak exercise yazan butonun
    // sonraki kardesi submenu
    // onun classlistindeki durumdan show'u aktif ve deaktif ediyoruz
    button.nextElementSibling.classList.toggle('show')
    button.classList.toggle('rotate')
}