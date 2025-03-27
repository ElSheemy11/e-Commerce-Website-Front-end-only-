// mult();
// function mult(){
//     for (let j=1;j<12;j++)  {
//         for(let i=1; <= 12; i++){
//             document.write(i*j+"<br>");
//         }
//     }
// }
// let num=window.print();
// do{
//     document.write(num*20);
//     num++
// }while(num<100)
let nam=document.getElementsByClassName('name');
console.log(valname)
let pass=document.getElementsByClassName('pass');
console.log(pass)
let pa=document.createElement("p")
pa.style.fontSize="30px"
pa.innerHTML="mariam"
document.body.appendChildm(pa)
let im=document/createElement("img")
im.src="../img/"
document.body.appendChild(im)
// Start Scroll Animation 
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        console.log (entry)
entry.target.classList.toggle('show', entry.isIntersecting);
    });
});

const hiddenElements1 = document.querySelectorAll('.continer')
const hiddenElements2 = document.querySelectorAll('.card')
hiddenElements1.forEach((el)=> observer.observe(el));
hiddenElements2.forEach((el)=> observer.observe(el));
// End Scroll Animation
