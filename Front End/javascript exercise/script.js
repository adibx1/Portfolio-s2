
function getSaladIngs(veg1,veg2,veg3,veg4,veg5){
const wholesalad = veg1 + " " + veg2 + veg3 + veg4 + veg5;
return wholesalad
}
var x = getSaladIngs("tom","pot","spinach","walnuts","carrot");
console.log(x)

function turnBulbOn(){
    var image = document.getElementById('myImage');
    if (image.src.match('imgs/pic_bulboff.gif')){
    image.src='imgs/pic_bulbon.gif';
    image.alt='image 2'
}
    else{
        image.src='imgs/pic_bulboff.gif'
        image.alt='image 1'
    }
}
