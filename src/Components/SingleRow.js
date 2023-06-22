import { Lightning, Utils, Img } from "@lightningjs/sdk";
import { Card } from "./Cards";
import cardPosters from "../movieList";

export class SingleRow extends Lightning.Component {
  static getFonts() {
    return [{ family: "Light", url: Utils.asset("fonts/Poppins-Light.ttf") }];
  }

  static _template() {
    return {
      signals: {
        changingCard: "_changingCard",
      },
      Slider: {
        w: 1850 - 40,
        x: 0,
        flex: { direction: "column" },
        SlideTitle: {
          mountY: -0.2,
          mountX: -0.1,
          text: {
            fontSize: 40,
            fontWeight: 500,
          },
        },
        Cards: {},
      },
    };
  }

  _changingCard() {}

  _init() {
    this.index = 0;
    this.dataLength = cardPosters.length;

    const cardsArr = [];

    for (let i = 0; i < this.dataLength; i++) {
      cardsArr.push({
        type: Card,
        x: i * (250 + 20),
        singleCard: {
          title: `${cardPosters[i]?.movieTitle}`,
          description: `Some cool description for ${
            cardPosters[i].movieTitle
          }, and it is ${i + 1} card in a row`,
          texture: Img(`${cardPosters[i]?.movieBackdrop}`).cover(250, 300),
        },
      });
    }
    this.tag("Cards").children = cardsArr;
  }

  repositionCards() {
    const wrapper = this.tag("Cards");
    const sliderW = this.tag("Slider").w;
    const currentWrapperX = wrapper.transition("x").targetvalue || wrapper.x;
    const currentFocus = wrapper.children[this.index];
    const currentFocusX = currentFocus.x + currentWrapperX;
    const currentFocusOuterWidth = currentFocus.x + currentFocus.w;

    if (currentFocusX < 0) {
      wrapper.setSmooth("x", -currentFocus.x);
    } else if (currentFocusOuterWidth > sliderW) {
      wrapper.setSmooth("x", sliderW - currentFocusOuterWidth);
    }
  }

  _handleRight() {
    if (this.index < this.dataLength - 1) {
      this.index += 1;
    }
    this.repositionCards();
  }

  _handleLeft() {
    if (this.index !== 0) {
      this.index -= 1;
    }
    this.repositionCards();
  }

  _getFocused() {
    return this.tag("Cards").children[this.index];
  }
}

// RANDOM
// const randId = Math.floor(Math.random() * this.dataLength);
// singleCard: {
//   title: `${cardPosters[randId]?.movieTitle}`,
//   description: `Some cool description for ${
//     cardPosters[randId].movieTitle
//   }, and it is ${i + 1} card in a row`,
//   texture: Img(`${cardPosters[randId]?.movieBackdrop}`).cover(250, 300),
// },
