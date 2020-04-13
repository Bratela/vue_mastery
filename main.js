// let product = "Socks";
let app = new Vue({
  el: '#app',
  data:{
    product: "Socks",
    description: "A pair of warm, fuzzy socks.",
    image: "./images/vmSocks-green-onWhite.jpg",
    altText: "A pair of socks.",
    link: "https://www.socksworld.co.uk/",
    inventory: 9,
    onSale: true,
    details: ["80% Cotton","20% Polyester","Gender Neutral"],
    variants: [
      {
        variantId: 2345,
        variantColor: "green",
        variantImage: "images/vmSocks-green-onWhite.jpg"
      },
      {
        variantId: 2346,
        variantColor: "blue",
        variantImage: "images/vmSocks-blue-onWhite.jpg"
      }
    ],
    size: [7,8,9],
    cart: 0,
    inStock: false
  },
  methods:{
    addToCart() {
      this.cart += 1;
    },
    removeFromCart() {
      this.cart -= 1;
    },
    updateProduct(variantImage) {
      this.image = variantImage;
    }
  }
});
