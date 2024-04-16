let id =new URLSearchParams(location.search).get("id")
fetch("https://fakestoreapi.com/products/"+id)
  .then((res) => res.json())
  .then((data) =>detailCreate(data));


  const big = document.querySelector(".big");

function detailCreate(element) {
 
    big.innerHTML += `<div class="card">
        <img src=${element.image} class="card-img-top" alt="...">
        <div class="card-body">

        <a href="./detail.html?id=${element.id}"><h4 class="card-title">${element.title}</h4></a>
          
          <p class="card_text"><span style="font-weight:bold">Price:</span>${element.price}$</p>
          <p class="card_text"><span  style="font-weight:bold">Category:</span>${element.category}</p>
          <p class="card_text"><span  style="font-weight:bold">Rating:</span><i class="fa-solid fa-star"></i> ${element.rating.rate}</p>

       
         
        </div>
      </div>`;
  
}