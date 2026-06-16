  const supabaseUrl = "https://sgypllkfiykzmeqhrdey.supabase.co";
  const supabaseKey = "sb_publishable_5HMZOqFPDPYt9LHonI5V9A_2UVdaLAy";

  const { createClient } = supabase;
  const client = createClient(supabaseUrl, supabaseKey);

  function formatDate(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    return `${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}`;
  }

  async function load() {
const { data, error } = await client
  .from("experiences")
  .select("*")
  .order("id", { ascending: false });

    if (error) {
      console.error(error);
      return;
    }

const assoContainer = document.getElementById("asso");
const proContainer = document.getElementById("pro");

assoContainer.innerHTML = "";
proContainer.innerHTML = "";

data.forEach(item => {
    const logoType =
        item.logo_type === null
            ? "square"
            : item.logo_type
                ? "horizontal"
                : "vertical";

    const dateDisplay =
        item.date_fin === null
            ? `Depuis ${formatDate(item.date_debut)}`
            : `${formatDate(item.date_debut)} - ${formatDate(item.date_fin)}`;

    const article = `
    <article>
    <details>
        <summary>
            <header>
                <span class="logo logo--${logoType}">
                    <a href="${item.lien_enseigne ?? "#"}" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/img/${item.img}" alt="Logo de ${item.enseigne}">
                    </a>
                </span>

                <time>${dateDisplay}</time>
            </header>

            <h2>${item.title} - <a href="${item.lien_enseigne ?? "#"}" target="_blank" rel="noopener noreferrer"> ${item.entreprise} </a></h2>
            <p>${item.description}</p>
            </summary>
        
        <div class="vlog_card">
            ${item.other}
        </div>
        </details>
        </article>
    `;

    if (item.is_asso) {
        assoContainer.innerHTML += article;
    } else {
        proContainer.innerHTML += article;
    }
});
}
  load();