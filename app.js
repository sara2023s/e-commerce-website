const wrapper = document.querySelector(".slider__wrapper")
const menu__items = document.querySelectorAll(".menu__item")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let chosenProduct = products[0]

  const currentProduct__Img = document.querySelector(".product__img");
  const currentProduct__title = document.querySelector(".product__title");
  const currentProduct__price = document.querySelector(".product__price");
  const currentProduct__colors = document.querySelectorAll(".color");
  const currentProduct__sizes = document.querySelectorAll(".size");


menu__items.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the chosen product
        chosenProduct = products[index]

        //change texts of current product
        currentProduct__title.textContent = chosenProduct.title
        currentProduct__price.textContent = "$" + chosenProduct.price
        currentProduct__price.textContent = "$" + chosenProduct.price
        currentProduct__Img.src = chosenProduct.colors[0].img

        //assign new colors
        currentProduct__colors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        })
    });
});

currentProduct__colors.forEach((color, index) => {
    color.addEventListener("click", ()=> {
        currentProduct__Img.src = chosenProduct.colors[index].img
    })
})

currentProduct__sizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProduct__sizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".product__button");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display="flex"
})

close.addEventListener("click", () => {
    payment.style.display="none"
})