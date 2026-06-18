function order(product){

let size = document.getElementById("size").value;

let message = 
"سلام، سفارش دارم\n" +
"محصول: " + product +
"\nسایز: " + size;

window.open(
"https://rubika.ir/mohamad_kazeme"
);

}

function changeImage(src){

document.getElementById("mainImage").src = src;

}
