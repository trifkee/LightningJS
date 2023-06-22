// import Lightning from "@lightningjs/sdk/src/Lightning";
// import { Carousel } from "@lightningjs/ui";
// import { Card } from "./Cards";

// export class GenreCarousel extends Lightning.Component {
//   static _template() {
//     return {
//       GenreCarousel: {
//         type: Carousel,
//         direction: "row",
//         Cards: {},
//       },
//     };
//   }

//   _setup() {
//     const cardsArr = [];

//     for (let i = 0; i < 5; i++) {
//       cardsArr.push({
//         margin: 15,
//         type: Card,
//         singleCard: {
//           title: `Kartica ${i + 1}`,
//           description:
//             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//           src: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262",
//         },
//       });
//       this.tag("GenreCarousel").add(cardsArr);
//     }
//   }
//   //   KADA SE RADI SA CAROUSEL NEMA INIT VEC SETUP
//   //   _init() {
//   //     this.index = 0;
//   //     this.dataLength = 7;
//   //     const cardsArr = [];

//   //     for (let i = 0; i < this.dataLength; i++) {
//   //       cardsArr.push({
//   //         type: Card,
//   //         x: i * (450 + 50),
//   //         singleCard: {
//   //           title: `Kartica ${i + 1}`,
//   //           description:
//   //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
//   //           src: "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/9d8e73e436b536a7c81644c6e9877c7a_1c9d0f90-9991-4326-8f37-3dd980abeacf_480x.progressive.jpg?v=1573590262",
//   //         },
//   //       });
//   //     }

//   //     this.tag("GenreCarousel").add(cardsArr);
//   //     console.log(cardsArr);
//   //   }
// }
