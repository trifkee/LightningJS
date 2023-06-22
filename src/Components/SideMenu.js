import { Lightning } from "@lightningjs/sdk";

export class SideMenu extends Lightning.Component {
  _template() {
    return {
      rect: true,
      w: 80,
      h: 1080,
      color: 0xff623cea,
      zIndex: 2,
    };
  }

  _focus() {
    this.patch({
      smooth: {
        w: 120,
        color: 0xff32ee00,
      },
    });
  }

  _unfocus() {
    this.patch({
      smooth: {
        w: 80,
        color: 0xff623cea,
      },
    });
  }
}
