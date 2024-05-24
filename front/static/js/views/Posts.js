import View from "./View.js";

export function useState(initValue) {
  let state = initValue;

  const setState = (newState) => {
    state = newState;
  };
  const getState = () => {
    return state;
  };
  console.log("state", state);

  return [getState, setState];
}

export default class extends View {
  constructor(params) {
    super(params);
    this.setTitle("Posts");
  }

  async getHtml() {
    const [number, setNumber] = useState(1);

    return `
   
    <h1>Welcome Posts </h1>
     <div> <button id="countButton">count</button></div>
     <span id="numberSpan">${number()}</span>`;
  }

  bindEvents() {
    const [number, setNumber] = useState(1);
    const countButton = document.getElementById("countButton");
    const numberSpan = document.getElementById("numberSpan");

    countButton.addEventListener("click", () => {
      setNumber(number() + 1);
      numberSpan.textContent = number();
    });
  }
}
