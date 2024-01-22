export default {

 acessarPaginaInicial(){
   cy.visit('/')
        .get('#top_header')
 },

 acessarPaginaLogin(){

   cy.visit('/')
   cy.get('#top_header').as('cabecalho')
      .contains('Login')
      .click()
 },

 acessarCadastroUsuario() {
    cy.visit('/')
        .get('#top_header')

     cy.get('.fa-lock')
          .click()

 }



}