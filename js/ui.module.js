export class Ui {
  displayAllGames(data) {
    let gamesBox = ``;
    for (let i = 0; i < data.length; i++) {
      gamesBox += `
      <div class="col-md-6 col-lg-3">
        <div class="game-card h-100 p-3 rounded-3 bg-transparent" data-id="${data[i].id}">
          <div class="card-image mb-3 text-center">
            <img
              src=${data[i].thumbnail}
              class="object-fit-cover h-100 card-img-top"
              alt="image detail"
            />
          </div>
          <div class="game-name d-flex justify-content-between">
            <h3 class="h6 small">${data[i].title}</h3>
            <span class="free">Free</span>
          </div>
          <p class="text-center  small game-p p-0 m-0">
            ${data[i].short_description}
          </p>
          <div class="game-footer d-flex justify-content-between">
            <span>${data[i].genre}</span>
            <span>${data[i].platform}</span>
          </div>
        </div>
      </div>`;
    }

    document.getElementById("AllGames").innerHTML = gamesBox;
  }

  displayDetails(data) {
    const content = `
       <div class="col-md-4">
       <img src="${data.thumbnail}" class="w-100" alt="image details" />
    </div>
    <div class="col-md-8">
       <h3>Title: ${data.title}</h3>
       <p>Category: <span class="badge text-bg-info"> ${data.genre}</span> </p>
       <p>Platform: <span class="badge text-bg-info"> ${data.platform}</span> </p>
       <p>Status: <span class="badge text-bg-info"> ${data.status}</span> </p>
       <p class="small">${data.description}</p>
       <a class="btn btn-outline-warning" target="_blank" href="${data.game_url}">Show Game</a>
    </div>
       
       `;

    const content2 = `
       
         <div class="col-md-4">
       <img src="${data.thumbnail}" class="w-100" alt="image detail" />
     </div>
     <div class="col-md-8 text-white">
       <h3>Title : ${data.title}</h3>
       <p>
         "Category: "
         <span class="text-bg-info">${data.genre} </span>
       </p>
       <p>Platform:  <span class="badge text-bg-info"> ${data.platform}</span></p>
       <p>Status: <span class="badge text-bg-info"> ${data.status}</span></p>
       <p class="small">
        ${data.description}
       </p>
       <a
         class="btn btn-outline-warning"
         target="_blank"
         href="${data.game_url}" >Show Game</a
       >
     </div>
       
       `;

    document.getElementById("gameDetail").innerHTML = content;
  }
}
