fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => cards(data));

const row = document.querySelector(".row");

function cards(products) {
  products.forEach((element) => {
    row.innerHTML += `<div class="card">
        <img src=${element.image} class="card-img-top" alt="...">
        <div class="card-body">

        <a href="./detail.html?id=${element.id}"><h4 class="card-title">${element.title}</h4></a>
          
          <p class="card_text"><span style="font-weight:bold">Price:</span>${element.price}$</p>
          <p class="card_text"><span  style="font-weight:bold">Category:</span>${element.category}</p>
          <p class="card_text"><span  style="font-weight:bold">Rating:</span><i class="fa-solid fa-star"></i> ${element.rating.rate}</p>

       
         
        </div>
      </div>`;
  });
}

const inp1 = document.getElementById("inp1");

const btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
});
