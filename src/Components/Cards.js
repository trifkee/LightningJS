import Lightning from "@lightningjs/sdk/src/Lightning";
import { Storage } from "@lightningjs/sdk";

export class Card extends Lightning.Component {
  static _template() {
    return {
      rect: true,
      w: 250,
      h: 350,
      color: 0x00000000,
      flex: { direction: "column", margin: 0, padding: 20 },
      shader: {
        type: Lightning.shaders.RoundedRectangle,
        radius: 10,
      },
      signals: {
        changeCard: true,
      },
      Image: {
        rect: true,
        shader: {
          type: Lightning.shaders.RoundedRectangle,
          topLeft: 20,
          topRight: 20,
          stroke: 2,
          strokeColor: 0xffffffff,
        },
      },
      CardText: {
        shader: {
          type: Lightning.shaders.RoundedRectangle,
          radius: [0, 0, 10, 10],
        },
        h: 50,
        rect: true,
        color: 0xfffffaff,
        textColor: 0xff623cea,
        flex: { direction: "column", padding: 10 },
        Label: {
          textOverflow: "ellipsis",
          text: {
            textOverflow: "ellipsis",
            fontWeight: 900,
            fontSize: 20,
            textColor: 0xff623cea,
            textAlign: "center",
            fontStyle: "italic bold",
          },
        },
        Description: {
          rect: true,
          w: 230,
          text: {
            textAlign: "left",
            textColor: 0xff623cea,
            fontStyle: "normal",
            fontSize: 10,
          },
        },
      },
    };
  }

  // changeCard(title, image) {
  //   this.tag("Card").patch([]);
  // }

  $changeActiveCard(title, desc, image) {
    this.patch({
      title,
      desc,
      image,
    });
  }

  set singleCard(obj) {
    const { title, description, texture } = obj;

    this.patch({
      Image: { texture },
      CardText: {
        Label: { text: title.toString() },
        Description: { text: description.toString() },
      },
    });
  }

  _focus() {
    Storage.set("singleCard", {
      Image: this.texture,
      CardText: {
        Label: this.text,
        Description: this.text,
      },
    });
    this.patch({
      smooth: {
        CardText: {
          color: 0xff623cea,
        },
      },
      Image: {
        clipping: true,
      },
      CardText: {
        color: 0xff623cea,
        Label: {
          text: {
            textColor: 0xffffffff,
          },
        },
        Description: {
          text: {
            textColor: 0xffffffff,
          },
        },
      },
    });
  }

  _unfocus() {
    this.patch({
      smooth: {
        color: 0x00000000,
      },
      CardText: {
        color: 0xfffffaff,
        textColor: 0xff623cea,
        Label: {
          text: {
            textColor: 0xff623cea,
          },
        },
        Description: {
          text: {
            textColor: 0xff623cea,
          },
        },
      },
    });
  }
}
