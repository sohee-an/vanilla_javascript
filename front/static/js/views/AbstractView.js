export function useState(initValue) {
  let state = initValue;
  console.log("inini", initValue);
  const setState = (newState) => {
    state = newState;
  };
  return [state, setState];
}

export default class {
  constructor(params) {
    this.params = params;
    console.log(this.params);
  }
  setTitle(title) {
    document.title = title;
  }
  // getValue(value) {
  //   console.log("value", value);
  // }
  useState(initValue) {
    let state = initValue;
    console.log("inini", initValue);
    const setState = (newState) => {
      state = newState;
    };
    return [state, setState];
  }

  async getHtml() {
    return "";
  }
}
