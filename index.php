<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>CV | Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./styles.css" />
  </head>
  <body>
    <div class="page-shell">
      <header id="site-header"></header>

      <main id="main-content">
        <section class="hero">
          <div class="hero__content">
            <p class="hero__eyebrow">Developpeur web</p>
            <h1>Je conçois des experiences web utiles, lisibles et ambitieuses.</h1>
            <p class="hero__text">
              Cette premiere version du CV pose une direction visuelle claire,
              une navigation responsive et une architecture orientee objet pour
              faire evoluer facilement tout le site.
            </p>
            <div class="hero__actions">
              <a href="#contact" class="button button--primary">Me contacter</a>
              <a href="#projets" class="button button--secondary">Voir mes projets</a>
            </div>
          </div>

          <aside class="hero__card">
            <p class="hero__card-label">Profil rapide</p>
            <ul>
              <li>Developpement frontend et backend</li>
              <li>Architecture propre et maintenable</li>
              <li>UI responsive pensee pour le portfolio</li>
            </ul>
          </aside>
        </section>

        <section class="content-section" id="about">
          <h2>A propos</h2>
          <p>
            Je construis des interfaces claires et des applications web fiables.
            Cette section accueillera votre presentation, votre parcours et votre
            approche du developpement.
          </p>
        </section>

        <section class="content-section" id="projets">
          <h2>Projets</h2>
          <p>
            Cette section est prete pour mettre en avant vos projets les plus
            solides avec contexte, technologies utilisees et resultats.
          </p>
        </section>

        <section class="content-section" id="skills">
          <h2>Competences</h2>
          <p>
            Vous pourrez y presenter vos langages, frameworks, outils de travail
            et points forts techniques.
          </p>
        </section>

        <section class="content-section" id="contact">
          <h2>Contact</h2>
          <p>
            Cette zone servira a afficher vos liens utiles comme email, LinkedIn,
            GitHub et tout autre moyen de contact professionnel.
          </p>
        </section>
      </main>
    </div>

    <script src="./js/app.js"></script>
  </body>
</html>
