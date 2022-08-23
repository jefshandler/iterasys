describe("Testes do site iterasys", () => {
    before(() => {
        cy.log("Testes do site iterasys")
    });


    context("CONTEXT pagina inicial", () => {
        before(() => {
          cy.log("before dentro contex");
        });
        it("meu primeiro teste", () => {
            cy.visit("https://iterasys.com.br");
            cy.log("coisa de louco");
        });
    });

    context('Context seuganda pagina', () => {
      // segundo teste
      it("Meu segundo teste", () => {
        cy.log("coisa de louco 3");
      });
    });
 
});
