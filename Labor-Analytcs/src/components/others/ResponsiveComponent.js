import React from "react";
import { bp as Breakpoints } from "../../config";

class ResponsiveComponent extends React.Component {
  responseComponent_updateOnlyKeys = false;
  constructor() {
    super();

    window.addEventListener("resize", this.responseComponent_resize.bind(this));

    this.state = {
      ...this.responseComponent_getSizes(),
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  validateUpdateProperty(arrayProperties) {
    if (!arrayProperties) {
      return true;
    } else if (arrayProperties.length > 0) {
      const iMax = arrayProperties.length;
      let i = 0;
      for (; i < iMax; i++) {
        const item = arrayProperties[i];
        if (item[0] !== item[1]) {
          return true;
        }
      }
    } else {
      return true;
    }
  }

  responseComponent_allConditionsToUpdate = (nextState) => {
    return (
      this.responseComponent_screenSizesConditionsToUpdate(nextState) ||
      this.responseComponent_responsiveKeysConditionsToUpdate(nextState)
    );
  };

  responseComponent_screenSizesConditionsToUpdate = (nextState) => {
    if (nextState.screenWidth !== this.state.screenWidth) {
      return true;
    }
    if (nextState.screenHeight !== this.state.screenHeight) {
      return true;
    }
    return false;
  };

  responseComponent_responsiveKeysConditionsToUpdate = (nextState) => {
    const iMax = Breakpoints.keys.length;
    let i = 0;
    for (; i < iMax; i++) {
      const key = Breakpoints.keys[i];
      if (nextState[`${key}Up`] !== this.state[`${key}Up`]) {
        return true;
      }
      if (nextState[`${key}Down`] !== this.state[`${key}Down`]) {
        return true;
      }
    }

    return false;
  };

  componentWillUnmount() {
    this.mounted = false;
    window.removeEventListener(
      "resize",
      this.responseComponent_resize.bind(this)
    );
  }

  responseComponent_resize() {
    if (this.mounted) {
      this.setState((state) => ({
        ...state,
        ...this.responseComponent_getSizes(),
      }));
    }
  }

  responseComponent_getSizes() {
    const screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    const screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;

    const media = {};

    Breakpoints.keys.map((key, index) => {
      media[`${key}Up`] = screenWidth >= Breakpoints.values[key];
      media[`${key}Down`] = Breakpoints.values[Breakpoints.keys[index + 1]]
        ? screenWidth <= Breakpoints.values[Breakpoints.keys[index + 1]]
        : false;

      return null;
    });

    if (
      this.responseComponent_updateOnlyKeys &&
      this.responseComponent_responsiveKeysConditionsToUpdate(media)
    ) {
      return { ...media };
    } else {
      return { screenWidth, screenHeight, ...media };
    }
  }
}

export default ResponsiveComponent;
