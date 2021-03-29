const btn = document.querySelector('button') 
function change(){
    document.body.style.backgroundColor='rgb(30,144,255)';
    btn.textContent='你上当了，我还不会实现';
}
btn.addEventListener('click', change)