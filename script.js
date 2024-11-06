// document.addEventListener("DOMContentLoaded", function() {
//     // Crée un élément pour l'ombre du curseur
//     const shadow = document.createElement("div");
//     shadow.classList.add("cursor-shadow");
//     document.body.appendChild(shadow);

//     // Mettre à jour la position de l'ombre en fonction de la position de la souris
//     document.addEventListener("mousemove", function(event) {
//         shadow.style.left = event.clientX + "px";
//         shadow.style.top = event.clientY + "px";
//     });
// });
document.addEventListener('mousemove', e => {
    const cursor = document.querySelector('.cursor');
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});