class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchElement").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
            @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
        * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", sans-serif;
        }
        body {
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #4070f4;
        }
        .container {
        margin: auto;
        width: 50%;
        padding: 10px;
        }
        .input-box {
        position: relative;
        height: 76px;
        max-width: 900px;
        width: 100%;
        background: #fff;
        margin: 0 20px;
        border-radius: 8px;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        }
        .input-box i,
        .input-box .button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        }
        .input-box i {
        left: 20px;
        font-size: 30px;
        color: #707070;
        }
        .input-box input {
        height: 100%;
        width: 100%;
        outline: none;
        font-size: 15px;
        font-weight: 400;
        border: none;
        padding: 0 155px 0 65px;
        background-color: transparent;
        }
        .input-box .button {
        right: 20px;
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        border: none;
        padding: 12px 30px;
        border-radius: 6px;
        background-color: #7D0A0A;
        cursor: pointer;
        }
        .input-box .button:active {
        transform: translateY(-50%) scale(0.98);
        }
        /*  Responsive */
        @media screen and (max-width: 500px) {
        .input-box {
            height: 66px;
            margin: 0 8px;
        }
        .input-box i {
            left: 12px;
            font-size: 25px;
        }
        .input-box input {
            padding: 0 112px 0 50px;
        }
        .input-box .button {
            right: 12px;
            font-size: 14px;
            padding: 8px 18px;
        }
        }
        </style>

        <div class="container">
        <div class="input-box">
        <i class="uil uil-search"></i>
        <input id="searchElement" type="text" placeholder="Search drink..." />
        <button id="searchButtonElement" class="button">Search</button>
        </div>
        </div>
       `;

    this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
