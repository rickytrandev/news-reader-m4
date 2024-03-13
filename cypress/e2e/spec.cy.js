describe("News Reader UI", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.intercept(
      "GET",
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=577266e24cf74d529491d477a433bbdf",
      {
        statusCode: 200,
        fixture: "trending.json",
      }
    ).as("getTrending");
  });

  it("When I visit the page, i should see a title", () => {
    cy.wait("@getTrending");
    cy.get("header a").should("contain", "News Reader");
  });

  it("I should see a list of articles", () => {
    cy.wait("@getTrending");

    cy.get(".articles article").first().find("img").should("exist");
    cy.get(" article .article-details")
      .first()
      .find("a")
      .should(
        "contain",
        "Ukraine drone strikes hit Russian oil facilities, militias attack Russia - The Washington Post"
      );
    cy.get("article .article-details")
      .first()
      .find("p")
      .should("contain", "Robyn Dixon, Serhii Korolchuk");
    cy.get("article .article-details")
      .first()
      .find("p")
      .should("contain", "2024-03-12T16:28:00Z");

    cy.get(".articles article").last().find("img").should("exist");
    cy.get(" article .article-details")
      .last()
      .find("a")
      .should(
        "contain",
        "Splashdown! NASA's SpaceX Crew-7 Finishes Mission, Returns to Earth - NASA"
      );
    cy.get("article .article-details")
      .last()
      .find("p")
      .should("contain", "Jennifer M. Dooren");
    cy.get("article .article-details")
      .last()
      .find("p")
      .should("contain", "2024-03-12T11:10:26Z");
  });

  it("I should be able to click on an article and view its details", () => {
    cy.wait("@getTrending");

    cy.get(" article .article-details")
      .first()
      .find("a")
      .should(
        "contain",
        "Ukraine drone strikes hit Russian oil facilities, militias attack Russia - The Washington Post"
      )
      .click();

    cy.get(".article-main")
      .find("a")
      .should(
        "contain",
        "Ukraine drone strikes hit Russian oil facilities, militias attack Russia - The Washington Post"
      );
    cy.get(".article-main")
      .find("p")
      .should("contain", "Robyn Dixon, Serhii Korolchuk");
    cy.get(".article-main").find("p").should("contain", "2024-03-12T16:28:00Z");
  });

  it.only("I can query a search topic", () => {
    cy.intercept("GET", "https://newsapi.org/v2/everything?q=+Ukraine&sortBy=popularity&apiKey=577266e24cf74d529491d477a433bbdf&pageSize=20", {
      statusCode: 200,
      fixture: "search.json",
    }).as("getSearch");
    cy.wait("@getTrending");
    cy.get("header input[type='text']").type("Ukraine");
    cy.get(".search-button").click();

    cy.wait("@getSearch");
    cy.get(" article .article-details")
    .first()
    .find("a")
    .should(
      "contain",
      "Mock Article 1 about Ukraine"
    );
  cy.get("article .article-details")
    .first()
    .find("p")
    .should("contain", "Mock Author");
  cy.get("article .article-details")
    .first()
    .find("p")
    .should("contain", "2022-01-01T00:00:00.000Z");

    cy.get(" article .article-details")
    .last()
    .find("a")
    .should(
      "contain",
      "Mock Article 2 about Ukraine"
    );
  cy.get("article .article-details")
    .last()
    .find("p")
    .should("contain", "Mock Author");
  cy.get("article .article-details")
    .last()
    .find("p")
    .should("contain", "2022-01-01T00:00:00.000Z");
  });
});
