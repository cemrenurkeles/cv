class Component {
  constructor(rootSelector) {
    this.root = document.querySelector(rootSelector);
  }

  render() {
    throw new Error("La methode render() doit etre implementee.");
  }
}

class Navbar extends Component {
  constructor(rootSelector, options) {
    super(rootSelector);
    this.brand = options.brand;
    this.role = options.role;
    this.links = options.links;
    this.cta = options.cta;
  }

  createLinks() {
    return this.links
      .map(
        (link) =>
          `<li><a href="${link.href}">${link.label}</a></li>`
      )
      .join("");
  }

  render() {
    if (!this.root) {
      return;
    }

    this.root.innerHTML = `
      <nav class="navbar" aria-label="Navigation principale">
        <div class="navbar__brand">
          <div class="navbar__badge">${this.brand.initials}</div>
          <div>
            <p class="navbar__title">${this.brand.name}</p>
            <p class="navbar__subtitle">${this.role}</p>
          </div>
        </div>

        <ul class="navbar__links">
          ${this.createLinks()}
        </ul>

        <a class="navbar__cta" href="${this.cta.href}">${this.cta.label}</a>
      </nav>
    `;
  }
}

class PortfolioApp {
  constructor() {
    this.navbar = new Navbar("#site-header", {
      brand: {
        initials: "CV",
        name: "Votre Nom",
      },
      role: "Developpeur Full Stack",
      links: [
        { label: "Accueil", href: "#main-content" },
        { label: "A propos", href: "#about" },
        { label: "Projets", href: "#projets" },
        { label: "Competences", href: "#skills" },
      ],
      cta: {
        label: "Contact",
        href: "#contact",
      },
    });
  }

  init() {
    this.navbar.render();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const app = new PortfolioApp();
  app.init();
});
