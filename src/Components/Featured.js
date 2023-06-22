import Lightning from "@lightningjs/sdk/src/Lightning";
import { Img } from "@lightningjs/sdk";

export class Featured extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 250,
      h: 50,
      x: 0,
      y: 0,
      Image: {
        colorTop: 0xffffffff,
        colorBottom: 0x00000033,
        rect: true,
        alpha: 0.3,
        texture: Img(
          "https://cdn.shopify.com/s/files/1/0057/3728/3618/products/108b520c55e3c9760f77a06110d6a73b_e97cf224-d57f-44e3-8477-4f5479cd746b_480x.progressive.jpg?v=1573616089"
        ).cover(1920, 1080 / 2),
      },
      Text: {
        flex: { direction: "column" },
        mountY: -0.3,
        x: 100,
        Title: {
          w: 1500,
          text: {
            text: "Avengers: End game",
            fontSize: 90,
            fontWeight: 500,
          },
        },
        Description: {
          y: -15,
          w: 1300,
          text: {
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            fontSize: 25,
            fontWeight: 200,
          },
        },
      },
    };
  }
}
