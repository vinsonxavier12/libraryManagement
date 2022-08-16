let products = {
    data: [
      {
        productName: "Da Vinci Code",
        category: "crime",
        price: "1200",
        image: "books/da vinci code.jpg",
      },
      {
        productName: "Harry potter and the deathly hallows",
        category: "children-fiction",
        price: "1000",
        image: "books/harry potter.jpg",
      },
      {
        productName: "Harry potter and the philosopher's stone",
        category: "children-fiction",
        price: "1100",
        image: "books/harry potter philosopher stone.jpg",
      },
      {
        productName: "Harry potter and the order of phoenix",
        category: "children-fiction",
        price: "1050",
        image: "books/harry potter order of phoenix.jpg",
      },
      {
        productName: "Fifty Shades of grey",
        category: "romance",
        price: "1500",
        image: "books/fifty shades of grey.jpg",
      },
      {
        productName: "Harry Potter and the Goblet of Fire",
        category: "children-fiction",
        price: "1000",
        image: "books/Harry Potter and the Goblet of Fire.jpg",
      },
      {
        productName: "Harry Potter and the Chamber of Secrets",
        category: "children-fiction",
        price: "1050",
        image: "books/Harry Potter and the Chamber of Secrets.jpg",
      },
      {
        productName: "Harry Potter and the Prisoner of Azkaban",
        category: "children-fiction",
        price: "1050",
        image: "books/Harry Potter and the Prisoner of Azkaban.jpg",
      },
      {
        productName: "Angels and Demons",
        category: "crime",
        price: "1600",
        image: "books/Angels and Demons.jpg",
      },
      {
        productName: "Harry Potter and the Half-blood Prince:Children's Edition",
        category: "children-fiction",
        price: "1000",
        image: "books/half blood prince.jpg",
      },
      {
        productName: "Fifty Shades Darker",
        category: "romance",
        price: "1800",
        image: "books/Fifty Shades Darker.jpg",
      },
      {
        productName: "Twilight",
        category: "young-adult-fiction",
        price: "1600",
        image: "books/Twilight.jpg",
      },
      {
        productName: "Girl with the Dragon Tattoo,The:Millennium Trilogy",
        category: "crime",
        price: "1600",
        image: "books/dragon tattoo.jpg",
      },
      {
        productName: "Fifty Shades Freed",
        category: "romance",
        price: "2000",
        image: "books/Fifty Shades Freed.jpg",
      },
      {
        productName: "The lost symbol",
        category: "crime",
        price: "1900",
        image: "books/Lost Symbol,The.jpg",
      },
      {
        productName: "New Moon",
        category: "young-adult-fiction",
        price: "1200",
        image: "books/New Moon.jpg",
      },
      {
        productName: "Deception Point",
        category: "crime",
        price: "1700",
        image: "books/Deception Point.jpg",
      },
      {
        productName: "Eclipse",
        category: "young-adult-fiction",
        price: "1650",
        image: "books/Eclipse.jpg",
      },
      {
        productName: "The lovely bones",
        category: "young-adult-fiction",
        price: "1600",
        image: "books/Lovely Bones,The.jpg",
      },
      {
        productName: "Digital Fortress",
        category: "crime",
        price: "2900",
        image: "books/Digital Fortress.jpg",
      },
      {
        productName: "Breaking Dawn",
        category: "young-adult-fiction",
        price: "2100",
        image: "books/Breaking Dawn.jpg",
      },
      {
        productName: "One Day",
        category: "young-adult-fiction",
        price: "1900",
        image: "books/One Day.jpg",
      },
      {
        productName: "Atonement",
        category: "young-adult-fiction",
        price: "2000",
        image: "books/Atonement.jpg",
      },
      {
        productName: "Life of Pi",
        category: "young-adult-fiction",
        price: "2500",
        image: "books/Life of Pi.jpg",
      },
      {
        productName: "Billy Connolly",
        category: "young-adult-fiction",
        price: "1020",
        image: "books/Billy Connolly.jpg",
      },
      {
        productName: "Birdsong",
        category: "young-adult-fiction",
        price: "1950",
        image: "books/Birdsong.jpg",
      },
      {
        productName: "Man and Boy",
        category: "young-adult-fiction",
        price: "2300",
        image: "books/Man and Boy.jpg",
      },
    ],
  };
  
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "₹" + i.price;
    container.appendChild(price);
  
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("active");
      } else {
        button.classList.remove("active");
      }
    });
  
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }
  
  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("search-input").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
  
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });
  
  //Initially display all products
  window.onload = () => {
    filterProduct("all");
  };