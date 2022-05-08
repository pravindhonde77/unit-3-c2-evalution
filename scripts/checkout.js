let id;
function checkOut(e){
  e.preventDefault();

  alert("Your order is accepted ")

  const myTimeout=setTimeout(myGreeting,3000)
  function myGreeting(){
    alert("Your order is being Packed") 
  }
  function mystop(){
    clearTimeout(myTimeout)
  }

  const cook=setTimeout(cookfood,8000)
  function cookfood(){
    alert("Your order is in transit") 
  }
  function mystop(){
    clearTimeout(cook)
  }


  const delivery=setTimeout(deliveryfood,10000)
  function deliveryfood(){
    alert("Your order is out for delivery ") 
  }
  function mystop(){
    clearTimeout(delivery)
  }


  const deliver=setTimeout(deliverfood,12000)
  function deliverfood(){
    alert("Order delivered") 
  }
  function mystop(){
    clearTimeout(deliver)
  }

  
}