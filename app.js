(function() {
    var app = angular.module('store', ['store-directives'])

    
    app.controller("ReviewController", function(){
      this.review = {}
      this.addReview = function(product){
        product.reviews.push(this.review)
        this.review = {}
      }
    })
    app.controller('StoreController', function(){
      this.products = gems
     
})
let gems =[ { 
  name:"Dodecahedron",
  price: 2,
  description: "Dodecahedron is very hard to broke, its a gem very nice",
  specs: [
    {
    faces: 14,
    color: "#000",
    rarity: 10,
    shine: 30
  }
],
  images:[
          {
            full: "./img/gem-01.gif",
            thumb:'./img/gem-01.gif'
          },
          {
              full:'./img/gem-01.gif',
              thumb:'./img/gem-01.gif'
            }
          ],
  canPurchase: true,
  soldOut: false,
  reviews:[
            {
              stars: 5,
              body:"I love this product!",
              author:"Arnold@homas.com"
            },
            {
              stars:1,
              body:"This product sucks",
              author:"Reali@hater.com",
            }
          ]
}, 
{
  name:"Pentagonal Gem",
  price: 5.95,
  description: "this gem is so good to have fun",
  specs: [
    {
    faces: 5,
    color: "#000",
    rarity: 6,
    shine: 10
  }
],
  images:[
            {
              full: "./img/gem-02.gif",
              thumb:'./img/gem-02.gif'
            },
            {
              full:'./img/gem-02.gif',
              thumb:'./img/gem-02.gif'
            }
          ],
  canPurchase: true,
  soldOut: false,
  reviews:[
            {
              stars: 5,
              body:"I love this product!",
              author:"Arnold@homas.com",
            },
            {
              stars:1,
              body:"This product sucks",
              author:"Reali@hater.com",
            }
          ]
},
{
  name:"Azurite",
  price: 110.5,
  description: "Some gems have hidden qualities beyond their luster.",
  specs: [
    {
    faces: 14,
    color: "#000",
    rarity: 7,
    shine: 8
  }
],
  images:[
            {
              full: "./img/gem-03.gif",
              thumb:'./img/gem-03.gif'
            },
            {
              full:'./img/gem-03.gif',
              thumb:'./img/gem-03.gif'
            }
          ],
  canPurchase: true,
  soldOut: false,
  reviews:[
            {
              stars: 5,
              body:"I love this product!",
              author:"Arnold@homas.com",
            },
            {
              stars:1,
              body:"This product sucks",
              author:"Reali@hater.com",
            },
            {
              "stars": 5,
              "body": "I love this gem!",
              "author": "joe@example.org",
            }
          ]
},
{
  name:"Bloodstone",
  price: 22.9,
  description: "Origin of the Bloodstone is unknown, hence its low value.",
  specs: [
    {
    faces: 12,
    color: "#000",
    rarity: 6,
    shine: 9
  }
],
  images:[
            {
              full: "./img/gem-04.gif",
              thumb:'./img/gem-04.gif'
            },
            {
              full:'./img/gem-04.gif',
              thumb:'./img/gem-04.gif'
            }
          ],
  canPurchase: true,
  soldOut: false,
  reviews:[
            {
              stars: 5,
              body:"I love this product!",
              author:"Arnold@homas.com"
            },
            {
              stars:1,
              body:"This product sucks",
              author:"Reali@hater.com"
            },
            {
              stars: 3,
              body: "I think this gem was just OK, could honestly use more shine, IMO.",
              author: "JimmyDean@example.org",
            }
          ]
},
{
  name:"Zircon",
  price: 1100,
  description: "Zircon is our most coveted and sought after gem.",
  specs: [
    {
    faces: 6,
    color: "#000",
    rarity: 2,
    shine: 70
  }
],
  images:[
            {
              full: "./img/gem-05.gif",
              thumb:'./img/gem-05.gif'
            },
            {
              full:'./img/gem-05.gif',
              thumb:'./img/gem-05.gif'
            }
          ],
  canPurchase: true,
  soldOut: false,
  reviews:[
            {
              stars: 5,
              body:"I love this product!",
              author:"Arnold@homas.com"
            },
            {
              stars:1,
              body:"This product sucks",
              author:"Reali@hater.com"
            },
            {
              stars: 1,
              body: "This gem is WAY too expensive for its rarity value.",
              author: "turtleguyy@example.org",
            }
          ]
}
] 
      })()