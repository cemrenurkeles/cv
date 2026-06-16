class Component {
  constructor(selector) {
    this.root = document.querySelector(selector);
  }

  render() {
    throw new Error("La méthode render() doit être implémentée.");
  }
}

class Navbar extends Component {
  constructor(selector, options) {
    super(selector);
    this.currentPage = options.currentPage;
    this.links = options.links;
    this.contact = options.contact;
  }

  createLinks() {
    return this.links
      .map((link) => {
        const current = link.page === this.currentPage ? ' class="current"' : "";
        return `<li><a${current} href="${link.href}">${link.label}</a></li>`;
      })
      .join("");
  }

  render() {
    if (!this.root) {
      return;
    }

    this.root.innerHTML = `
      <nav aria-label="Navigation principale">
        <a class="brand" href="./index.php">
          <strong>CK</strong>
          <span>
            <span>Cemrenur Keles</span>
            <span>Étudiante en informatique</span>
          </span>
        </a>
        <ul>
          ${this.createLinks()}
        </ul>
        <a href="${this.contact.href}">${this.contact.label}</a>
      </nav>
    `;
  }
}

class PortfolioApp {
  constructor() {
    this.navbar = new Navbar("body > header", {
      currentPage: document.body.dataset.page || "home",
      links: [
        { label: "Accueil", href: "./index.php", page: "home" },
        { label: "Formation", href: "./formation.php", page: "formation" },
        { label: "Expériences", href: "./experiences.php", page: "experiences" },
        { label: "Compétences", href: "./competences.php", page: "competences" },
        { label: "Projets", href: "./projets.php", page: "projets" }
      ],
      contact: {
        label: "Contact",
        href: "./contact.php"
      }
    });
  }

  init() {
    this.navbar.render();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new PortfolioApp().init();
});
