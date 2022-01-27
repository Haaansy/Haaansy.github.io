// if hover -> display txt
function displayTxt(evt) {
    evt.currentTarget.parentNode.querySelector( '.innerText' ).classList.remove( 'hide' );
}
// if leave -> hide txt
function removeTxt(evt) {
    evt.currentTarget.querySelector( '.innerText' ).classList.add( 'hide' );
}