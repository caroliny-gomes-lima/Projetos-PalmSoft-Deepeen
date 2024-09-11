import { createStyles, Grid } from "@material-ui/core";
import React from "react";

import ResponsiveComponent from "./ResponsiveComponent";
import { Spacing } from "../../config";
class InputRowContainerRegisterComponent extends ResponsiveComponent {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  render() {
    const { children, ...props } = this.props;

    const styles = makeStyles(this.state, props);
    const { length } = children;
    return (
      <Grid container style={styles.container}>
        {length ? (
          children.map((child, index) => {
            const style =
              index === 0
                ? styles.inputContainerLeft
                : index === length - 1
                ? styles.inputContainerRight
                : styles.inputContainer;
            return (
              <Grid {...props} key={index} style={style} item>
                {child}
              </Grid>
            );
          })
        ) : (
          <Grid {...props} item style={styles.inputContainerLeft}>
            {children}
          </Grid>
        )}
      </Grid>
    );
  }
}

export default InputRowContainerRegisterComponent;
function makeStyles({ mdUp, lgUp }, { md, lg, withVerticalMargin }) {
  return createStyles({
    container: {
      margin: Spacing(withVerticalMargin ? 2 : 0, 0),
    },
    inputContainerLeft: {
      paddingRight: (md === 6 && mdUp) || (lg === 6 && lgUp) ? Spacing(2) : 0,
    },
    inputContainer: {
      padding: (md === 6 && mdUp) || (lg === 6 && lgUp) ? Spacing(0, 2) : 0,
    },
    inputContainerRight: {
      paddingLeft: (md === 6 && mdUp) || (lg === 6 && lgUp) ? Spacing(2) : 0,
    },
  });
}
