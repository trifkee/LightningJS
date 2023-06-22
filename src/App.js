import { Lightning, Utils, Img } from "@lightningjs/sdk";
import { SingleRow } from "./Components/SingleRow";
import { Storage } from "@lightningjs/sdk";
import { Featured } from "./Components/Featured";
import { SideMenu } from "./Components/SideMenu";

export default class App extends Lightning.Component {
  static getFonts() {
    return [
      {
        family: "Regular",
        url: Utils.asset("fonts/Poppins-Regular.ttf"),
      },
    ];
  }

  static _template() {
    return {
      Background: {
        w: 1920,
        h: 1080,
        rect: true,
        color: 0xff0f0f0f,
      },
      Wrapper: {
        flex: { direction: "row" },
        Container: {
          flex: { direction: "column" },
          h: 1920,
          color: 0xff323321,
          w: 1850,
          x: 0,
          FeaturedCard: {
            type: Featured,
            rect: true,
            x: 0,
            y: 0,
            w: 1920,
            h: 1080 / 2,
            zIndex: 2,
            colorTop: 0xff000000,
            colorBottom: 0xff0f0f0f,
          },
          Rows: {
            zIndex: 1,
          },
        },
      },
    };
  }

  _init() {
    this._setState("CloseMenu");
    let rowArr = [];
    this.indexY = 0;
    Storage.set("indexY", this.indexY);

    this.rowsLen = 20;

    for (let i = 0; i < this.rowsLen; i++) {
      rowArr.push({
        type: SingleRow,
        x: 0,
        h: 100,
        y: i * 450,
        Slider: {
          SlideTitle: {
            text: {
              text: `Genre title ${i + 1}`,
            },
          },
        },
      });
    }

    this.tag("Rows").children = rowArr;
  }

  repositionRows() {
    const rows = this.tag("Rows");
    const canvaH = rows.children[this.indexY].h;
    const currentRowY = rows.transition("y").targetvalue || rows.y;
    const currentFocus = rows.children[this.indexY];
    const currentFocusY = currentFocus.y + currentRowY;
    const currentFocusOuterWidth = currentFocus.y + currentFocus.h;

    if (currentFocusY < 0) {
      rows.setSmooth("y", -currentFocus.y);
    } else if (currentFocusOuterWidth > canvaH) {
      rows.setSmooth("y", canvaH - currentFocusOuterWidth);
    }
  }

  // static _states() {
  //   return [
  //     class OpenMenu extends this {
  //       _getFocused() {
  //         return this.tag("SideMenu");
  //       }

  //       _handleRight() {
  //         this._setState("CloseMenu");
  //       }
  //     },

  //     class CloseMenu extends this {
  //       _getFocused() {
  //         console.log("lol");
  //         return this.tag("Rows").children[this.indexY];
  //       }

  //       _handleLeft() {
  //         this._setState("OpenMenu");
  //       }
  //     },
  //   ];
  // }

  _handleDown() {
    if (this.indexY < this.rowsLen - 1) {
      this.indexY += 1;
      this.repositionRows();
    }
  }

  _handleUp() {
    if (this.indexY !== 0) {
      this.indexY -= 1;
      this.repositionRows();
    }
  }

  _getFocused() {
    return this.tag("Rows").children[this.indexY];
  }
}
