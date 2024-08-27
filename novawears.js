let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{
  ul.classList.toggle("showData");
   if(ul.className=="showData"){
    document.getElementById('bar').className="fa-solid fa-xmark";
   }else{
    document.getElementById('bar').className="fa-solid fa-bars";
   }
})

// Nav Bar

let shops = document.getElementById('shops');
let reviews = document.getElementById('reviews');
let blogs = document.getElementById('blogs');
let contacts = document.getElementById('contacts');

shops.addEventListener("click", ()=>{
  shops.style.color="rgb(240, 113, 2)";
  reviews.style.color="white";
  blogs.style.color="white";
  contacts.style.color="white";
})

reviews.addEventListener("click", ()=>{
  reviews.style.color="rgb(240, 113, 2)";
  shops.style.color="white";
  blogs.style.color="white";
  contacts.style.color="white";
})

blogs.addEventListener("click", ()=>{
  blogs.style.color="rgb(240, 113, 2)";
  reviews.style.color="white";
  shops.style.color="white";
  contacts.style.color="white";

})

contacts.addEventListener("click", ()=>{
  contacts.style.color="rgb(240, 113, 2)";
  reviews.style.color="white";
  blogs.style.color="white";
  shops.style.color="white";
})

// Cart Section

let card = document.querySelectorAll(".card");
let itemPage = document.querySelector(".itemPage")
let all = document.querySelector(".all");
let itemImg = document.getElementById("itemImg");
let buyBtn = document.getElementById("buyBtn");

console.log(card);


  card.forEach(function(currentValue){
     currentValue.addEventListener("click", function(){
      itemPage.style.display="flex";
      all.style.display="none";

      let imgSrc = currentValue.firstElementChild.src ;
      itemImg.src = imgSrc;

      let buyText = document.querySelector(".buyText");
      buyBtn.addEventListener("click", function(){
        document.querySelector(".buyPage").style.display="block";
        buyText.innerHTML=`
        <h3>Enter details: </h3>
        <input type="text" placeholder="Enter Your Name" id="name"><br>
        <input type="text" placeholder="Enter Your Address" id="address"><br>
        <input type="text" placeholder="Enter Your Mobile Number" id="number"><br>
        <h3>Payment option: </h3>
        <select>
          <option value="Esewa">Esewa</option>
          <option value="Khalti">Khalti</option>
          <option value="Phone-Pay">Phone-Pay</option>
          <option value="IME Pay">IME Pay</option>
          <option value="cash-on-delivery">Cash On Delivery</option>
        </select><br>
        
        
        `

        let button = document.createElement("button");
        button.innerText="Submit";
        buyText.appendChild(button);

        button.addEventListener("click", function(){
          let name = document.getElementById("name");
          
          

          if(name.value == "" && address.value == "" && number.value == ""){
            alert("Please Enter Your details.")
          }else{
            alert("Your order has been placed.")
            document.querySelector(".buyPage").style.display="none";
          }
        })


        
        let cross = document.querySelector(".cross");
        cross.addEventListener("click", function(){
           document.querySelector(".buyPage").style.display="none";
        })
      })
     })   
})

 // connect

      function connect(){
        let names = document.getElementById("names");
        let num = document.getElementById("number");
        if(name.value == "" && address.value == "" && num.value == ""){
            alert("Please fill up your information.")
        }else{
            alert("Thanks For connecting with us.")
        }

    }

    // Text animation
    const textArray = ["Clothes", "Quality", "Styles", "Comfort", "Price"];
let textIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
  const secTextElement = document.querySelector('.sec-text');

  if (isDeleting) {
    currentText = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
  } else {
    currentText = textArray[textIndex].substring(0, charIndex + 1);
    charIndex++;
  }

  secTextElement.textContent = currentText;

  if (!isDeleting && charIndex === textArray[textIndex].length) {
    setTimeout(() => {
      isDeleting = true;
    }, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % textArray.length;
  }

  setTimeout(type, isDeleting ? 50 : 150);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});




