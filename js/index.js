const openMenu = getElement('.architect--header-open-menu');
const closeMenu = getElement('.architect--header-close-menu');
const mainMenu = getElement('.architect--header-main-menu')

console.log(openMenu,closeMenu, mainMenu)

addListener(openMenu, 'click', function() {
    console.log("clicke")
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    mainMenu.style.top = '0';
});

addListener(closeMenu, 'click', function() {
    console.log("clicke")
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
    mainMenu.style.top = '-120%';
});

function getElement(id) {
    return document.querySelector(id);
}

function addListener(element, eventType, callBack) {
    element.addEventListener(eventType, callBack);
}