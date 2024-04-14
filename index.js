const leftButton = document.getElementById('left');
const rightButton = document.getElementById('right');
let images = [
"https://www.ancient-origins.net/sites/default/files/field/image/Lalibela.jpg",
"https://frayedpassport.com/wp-content/uploads/2023/03/gondar-ethiopia-cultural-mosaic-waiting-to-be-explored-frayed-passport.jpg",
"https://trainsplanesandtuktuks.com/wp-content/uploads/2017/09/Ethiopia-2016-759.jpg",
"https://i.ytimg.com/vi/_X45yDSVT5w/maxresdefault.jpg"];
let qoutes = ["Ermiasddsfsdg","sdfdfgdfgdf","cvxbdsfgcxcvb"];

let i=0;
function goRight(){
    i+=1;
    document.querySelector('body').style.background = "url(`${images[i]}`)";
    document.getElementById('qoute').setAttribute = `${qoutes[i]}`;
}

