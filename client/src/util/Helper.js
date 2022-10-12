class Helper {
  static positionCards(position) {
    let classes = "";
    let style = {};
    if (position <= 9) {
      style = {
        gridColumn: 12 - position,
        gridRowStart: 12,
        gridRowEnd: 14,
      };
    } else if (position <= 19) {
      classes = "left";
      style = {
        gridColumnStart: 1,
        gridRowStart: 22 - position,
        gridRowEnd: 20 - position,
      };
    } else if (position <= 30) {
      classes = "top";
      style = {
        gridColumnStart: position - 18,
        gridRowStart: 1,
        gridRowEnd: 3,
      };
    } else {
      classes = "right";
      style = {
        gridColumnStart: 12,
        gridRowStart: position - 27,
        gridRowEnd: position - 25,
      };
    }
    return [classes, style];
  }
}

export default Helper;
