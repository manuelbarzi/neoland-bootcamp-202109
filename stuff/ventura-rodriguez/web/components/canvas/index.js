////////////////////////////////////////////////////////////////////////////////
//      lógica visual del modal
////////////////////////////////////////////////////////////////////////////////

/** Crea la funcionalidad de cerrar el modal, debe llamarse cada vez que
 *  se genere el modal para su correcto funcionamiento. */
function createCloseModal() {
    var modal = document.getElementById("modal")
    var close = document.getElementById("close-modal")

    close.onclick = function() { modal.remove() }

    modal.onclick = function(event) {
        if(event.target != this.getElementsByClassName("modal__pop-up")[0]) modal.remove()
    }
}

/** Copia y genera un nuevo modal a través de la plantilla con id 'template-modal'. */
function generateModal() {
    var modal = document.getElementById("template-modal")
    var clone = modal.content.cloneNode(true)
    document.body.appendChild(clone)
    createCloseModal()
}



////////////////////////////////////////////////////////////////////////////////
//      lógica componente main
////////////////////////////////////////////////////////////////////////////////

var btn = document.getElementById("show-modal",)
btn.onclick = generateModal