
/*  ######### select input filter ########### */

document.querySelector("#categorySelect").addEventListener("change", function () {
  const selectedValue = this.value;
  const coffeesCard = document.querySelectorAll(".card__article");

  coffeesCard.forEach(coffee => {
    if (coffee.getAttribute("data-id") === selectedValue) {
      coffee.style.display = "block";

    } else {
      coffee.style.display = "none";
    }

  });

  coffeesCard.forEach(coffee => {
    if (selectedValue === "") {
      coffee.style.display = "block";
    }

  })

});





/* ########### catalog button display all / not with reset dropdown ######## */

const catalogList = document.querySelectorAll(".card__container article");
const first3coffee = document.querySelectorAll(".card__container article:nth-child(-n+3)");
const after3CoffeeList = document.querySelectorAll(".card__container article:nth-child(3) ~ article");
const catalogButton = document.querySelector("#catalogButton")
const paginationContainer = document.querySelector("#pagination");
const articles = document.querySelectorAll('.card__article');
const articlesPerPage = 8;
let currentPage = 1;
let selectInput = document.querySelector("#categorySelect")

catalogButton.addEventListener("click", () => {
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  showPage(currentPage);
  updatePagination(totalPages);


  if (catalogButton.innerText == "Voir tout") {
    selectInput.selectedIndex = 0
    catalogButton.innerText = "Réduire la liste";
  }
  else if (catalogButton.innerText = "Réduire la liste") {
    catalogButton.innerText = "Voir tout";
    selectInput.selectedIndex = 0
    after3CoffeeList.forEach(article => {
      article.style.display = ("none");
    });
    first3coffee.forEach(article => {
      article.style.display = ("block");
    });
    paginationContainer.innerHTML = "";
  }

});

/*  pagination */

function showPage(page) {
  const start = (page - 1) * articlesPerPage;
  const end = start + articlesPerPage;

  articles.forEach((article, index) => {
    article.style.display = (index >= start && index < end) ? 'block' : 'none';
  });
}

function updatePagination(totalPages) {
  paginationContainer.innerHTML = "";

  if (currentPage > 1) {
    const prevButton = document.createElement("button");
    prevButton.textContent = 'Précédent';
    prevButton.addEventListener('click', () => {
      currentPage--;
      showPage(currentPage);
      updatePagination(totalPages);
    });
    paginationContainer.appendChild(prevButton);
  }

  for (let page = 1; page <= totalPages; page++) {
    const pageButton = document.createElement("button");
    pageButton.textContent = page;
    pageButton.classList.add("pageButton")
    pageButton.classList.toggle('active', page === currentPage);
    pageButton.addEventListener('click', () => {
      currentPage = page;
      showPage(currentPage);
      updatePagination(totalPages);
    });
    paginationContainer.appendChild(pageButton);
  }

  if (currentPage < totalPages) {
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Suivant';
    nextButton.addEventListener('click', () => {
      currentPage++;
      showPage(currentPage);
      updatePagination(totalPages);
    });
    paginationContainer.appendChild(nextButton);
  }
}


