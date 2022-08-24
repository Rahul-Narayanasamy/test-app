let products = [{
    id: 1,
	"name": "Hero Product",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "99",
	"hero": "OMG This just came out today!",
	"image": "http://placehold.it/940x300/999/CCC"
},{
    id: 2,
	"name": "Product 1",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "99",
	"info": "This is the latest and greatest product from Derp corp.",
    "hero": "OMG This just came out today!",
	"image": "http://placehold.it/300x300/999/CCC"
},{
    id: 3,
	"name": "Product 2",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "99",
	"offer": "BOGOF",
    "hero": "OMG This just came out today!",
	"image": "http://placehold.it/300x300/999/CCC"
},{
    id: 4,
	"name": "Product 3",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "99",
	"image": "http://placehold.it/300x300/999/CCC",
    "hero": "OMG This just came out today!",
},{
    id: 5,
	"name": "Product 4",
	"detail": "Lorem ipsum dolor sit amet",
	"price": "99",
    "hero": "OMG This just came out today!",
	"offer": "No srsly GTFO",
	"image": "http://placehold.it/300x300/999/CCC"
},{
    id: 6,
	"name": "Product 5",
	"detail": "Lorem ipsum dolor sit amet",
    "hero": "OMG This just came out today!",
	"price": "99",
	"image": "http://placehold.it/300x300/999/CCC"
},{
    id: 7,
	"name": "Product 6",
	"detail": "Lorem ipsum dolor sit amet",
    "hero": "OMG This just came out today!",
	"price": "99",
	"info": "This is the latest and greatest product from Derp corp.",
	"offer": "info with offer",
	"image": "http://placehold.it/300x300/999/CCC"
}]
  
  export function getProducts() {
    return products;
  }
  export function getProduct(id: number) {
    return products.find((ele) =>  ele.id === id)
  }

//   export function getUser(id: number) {
//     return users.find((ele) =>  ele.number === id)
//   }