import { Details } from "./details.module.js";
import { Ui } from "./ui.module.js";

export class Games {
  constructor() {
    this.getGames("mmorpg");

    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        document.querySelector(".nav-link.active").classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });
    });

    this.ui = new Ui();
  }

  async getGames(category) {
    const loading = document.querySelector(".loading");
    loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "761b8a3226msh868f0d927cb6ea4p117ef0jsn46d63d281712",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const api = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    const response = await api.json();

    this.ui.displayAllGames(response);
    this.startEvent();
    loading.classList.add("d-none");
  }

  startEvent() {
    // Attach event listener to the parent container
    document.querySelector("#AllGames").addEventListener("click", (e) => {
      // Check if the clicked element is a card (or inside a card)
      const card = e.target.closest(".game-card");
      if (card) {
        const id = card.dataset.id; // Retrieve the dataset ID (set in the API response if needed)
        this.showDetails(id);
      }
    });
  }

  showDetails(idGame) {
    const details = new Details(idGame);
    document.querySelector(".games").classList.add("d-none");
    document.querySelector(".game-section").classList.add("d-none");

    document.querySelector(".details").classList.remove("d-none");
  }
}
