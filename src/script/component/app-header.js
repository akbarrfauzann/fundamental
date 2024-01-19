class AppHeader extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
     <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .navbar {
        background-color: #fff;
        padding: 25px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #7D0A0A;
        }

        .logo {
        font-size: 1.2rem;
        font-family: "Copperplate", fantasy;
        font-style: italic;
        }
        
        .nav-links {
            list-style: none;
            display: flex;
        }

        .nav-links li {
            margin-right: 20px;}


            .nav-links a {
              font-weight: bold;
                text-decoration: none;
                color: #7D0A0A;
            }

            .content {
                padding: 20px;
            }
            </style>
    
            <nav class="navbar">
            <div class="logo">Luxurious Delicacies</div>
            <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Store</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
            </nav>`;
  }
}

customElements.define("app-header", AppHeader);
