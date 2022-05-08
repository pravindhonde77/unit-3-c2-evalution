var cartData=JSON.parse(localStorage.getItem("items"))
console.log(cartData);

var total=cartData.reduce(function(sum,elem,index,arr){
  console.log(elem);
  return sum+Number(elem.price);
},0)

document.getElementById("cart_total").innerText=`${total}`

cartData.map(function(el,index){
  let div=document.createElement("div")
    div.setAttribute("class","food")
    // console.log(el);

    let image=document.createElement("img")
    image.src=el.image;

    let name=document.createElement("p")
    name.innerText=el.name;

    let price=document.createElement("p")
    price.innerText=el.price;

    let btn=document.createElement("button")
    btn.setAttribute("id","remove")
    btn.innerHTML="remove";
    btn.addEventListener("click",function(){
      removeItem(el,index)
    })
    div.append(image,name,price,btn)

    document.getElementById("cart").append(div)  

})

function removeItem(el,index){
  console.log(el,index);
  cartData.splice(index,1)
  console.log(cartData);
  localStorage.setItem("items",JSON.stringify(cartData));
  window.location.reload();
}
