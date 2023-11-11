describe('Application Test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/');
  });
  it('Visits the app root url', () => {
    cy.contains('h2', 'To see your favorite movies, search in the input above');
  });

  it('Search for a movie', () => {
    cy.get('input').type('Star Wars');

    cy.get('button[type="submit"]').click();
  });

  it('Favorites a movie', () => {
    cy.get('input').type('Star Wars');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.get('button[type="button"]').click();

    cy.contains('h2', 'Star Wars: Episode IV - A New Hope');
  });

  it('Favorites another movie', () => {
    cy.get('input').type('Star Wars');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);

    cy.get('input').type('Harry Potter');
    cy.get('button[type="submit"]').click();

    cy.contains('h2', 'Harry Potter');
  });
  it('Select a movie', () => {
    cy.get('input').type('Star Wars');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);
    cy.get('button[type="button"]').click();

    cy.contains('h3', 'Movies you bookmarked');

    cy.get('input').type('Harry Potter');
    cy.get('button[type="submit"]').click();
    cy.wait(1000);

    // bookmarks Harry potter movie
    cy.get('button.v-icon').click();

    cy.get('div.v-window__next').click();

    cy.contains('h2', 'Harry Potter');
  });
});
