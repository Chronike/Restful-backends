function loadQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((Response) => Response.json())
    .then((data) => {
      document.body.appendChild(document.createTextNode(data.quote));
    });
}

const button = document.querySelector("button");
button.addEventListener("click", loadQuote);

/*function loadQuote() {
  // Quote und Author aus dem Html auswählen.
  const quoteElement = document.querySelector("#quote");
  const authorElement = document.querySelector("#author");

  // Überprüfen ob die Quote und der Author den Standartwert hat.
  const isDefaultQuote = quoteElement.textContent === "Default Quote";
  const isDefaultAuthor = authorElement.textContent === "Default Author";

  // Wenn Quote oder Author den standartwert hat, dann benutze diesen.
  if (isDefaultQuote || isDefaultAuthor) {
    quoteElement.textContent = "Default Quote";
    authorElement.textContent = "Default Author";
  } else {
    // wenn nicht zutrifft, dann rufe die daten aus der API auf und aktualisiere
    fetch("https://dummy-apis.netlify.app/api/quote")
      .then((response) => response.json())
      .then((data) => {
        quoteElement.textContent = data.quote;
        authorElement.textContent = data.author;
      });
  }
}
loadQuote();

const button = document.querySelector("button");
button.addEventListener("click", loadQuote);*/
