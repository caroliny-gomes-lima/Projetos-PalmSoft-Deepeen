class Parse {
  constructor(data, modelName, parseFunction) {
    this.data = data;
    this.modelName = modelName;
    this.setParseFunction(parseFunction);
  }

  setParseFunction = (parseFunction) => {
    this.parseFunction = (item, index) => {
      try {
        return parseFunction(item, index, this.modelName);
      } catch (e) {
        console.error(
          `${e.message} Endpoint: ${this.modelName}${
            index !== undefined ? "" : ", Array index: " + index
          }`
        );
      }
    };
  };

  parse = () => {
    this.data = this.parseFunction(this.data);
    return this.data;
  };

  parseArray = () => {
    const parseArrayResult = [];
    const iMax = this.data.length;
    let i = 0;
    for (; i < iMax; i++) {
      const dataItem = this.data[i];
      const result = this.parseFunction(dataItem, i);
      if (result) {
        parseArrayResult.push(result);
      }
    }
    this.data = parseArrayResult;
    return this.data;
  };
}

export default Parse;
