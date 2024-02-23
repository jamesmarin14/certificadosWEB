//Funcione del boton contacto modal
const btnAbrirModal = document.querySelector("#abrir-modal")
const btnCerrarModal = document.querySelector("#cerrar-modal")
const modal = document.querySelector("#modal")
    
    btnAbrirModal.addEventListener("click",()=>{
      modal.showModal();
      console.log(btnAbrirModal);
})
    btnCerrarModal.addEventListener("click",()=>{
      modal.close()
});