// Store cart items in local storage with key: "items"
const url="https://grocery-masai.herokuapp.com/items";
  const items=document.getElementById("items")

  var cartData=JSON.parse(localStorage.getItem("items"))||[];


  fetch(url)
  .then(function(res){
    return res.json()
  })
  .then(function(res){
    // console.log("res:",res);
    appendData(res)
  })
  .catch(function(err){
    console.log("err:",err);
  })

  function appendData(res){
    res.data.forEach(function(el,index){
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
      btn.setAttribute("id","add_to_cart")
      btn.innerHTML="add to cart";
      btn.addEventListener("click",function(){
        addToCart(el)
      })
      div.append(image,name,price,btn)

      items.append(div)  
    })
  }


  function addToCart(el){
    console.log(el);
    cartData.push(el)
    localStorage.setItem("items",JSON.stringify(cartData));
    document.getElementById("item_count").innerText=cartData.length
    // console.log(cartData.length);

  }
