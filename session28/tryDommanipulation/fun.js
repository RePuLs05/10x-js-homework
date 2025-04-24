const modal=document.querySelector('.modal');
console.log(modal);
const overlay=document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.btn--close-modal');
console.log(btnCloseModal);
const btnOpenModal=document.querySelector('.btn--show-modal');
const container=document.querySelector('.container');
console.log(container);
function openModal(){
  container.style.display="none";
  modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
};

function closeModal(){
  container.style.display="flex";
  modal.classList.add('hidden');
   overlay.classList.add('hidden');
};
btnOpenModal.addEventListener("click",openModal);
btnCloseModal.addEventListener("click",closeModal);
overlay.addEventListener("click",closeModal);
document.addEventListener("keydown",(e)=>{
  console.log(e);
  if(e.key==="Escape" && !modal.classList.contains('hidden')){
    closeModal();
  }
});