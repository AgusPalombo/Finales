/*===== MENU SHOW =====*/ 
const showMenu= (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }

}

showMenu('nav-toggle','nav-menu')





/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active Link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove menu mobile
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click', linkAction))





/*===== CHANGE NAVBAR COLOR =====*/

document.addEventListener("scroll",function(){
  var scroll = document.querySelector("header");
  scroll.classList.toggle("bgScroll", window.scrollY>700)
})


/*===== CHANGE NAVBAR COLOR =====*/

// quiero agregar la clase "selected al span de talle seleccionado, para luego guardar el dato del span"

// const element = document.querySelectorAll(".size span");
//   element.addEventListener("click",()=>
//     element.classList.add("selected")
//   )



