export default {

    preencherEmail(email){
        cy.get('#user').type(email)
    },

    preencherSenha(senha){
        cy.get('#password').type(senha);
    },

    clicarBotaoLogin(){
        cy.get('#btnLogin').click();

    },

    validarMensagemErro(mensagem){
        cy.get('.invalid_input')
           .should('be.visible')
           .should('have.text',mensagem )
    },

    clicarCkeckBox(){
        cy.get('#materialUnchecked').should('not.be.checked').click();

    },
    clicarAindaNaoTemConta(){
        cy.get('#createAccount').click();
        cy.get('.account_form > h3')
            .should('be.visible')
            .should('have.text', 'Cadastro de usuário' );
    },

    validarLoginSucesso() {
        cy.get('#swal2-title')
            .should('have.text', 'Login realizado');
        cy.get('.swal2-confirm').click();
    }

    }