
import commum_page from '../support/pages/commum_page';
import login_page from "../support/pages/login_page";


describe('Login', () => {
    beforeEach('Acessar cadastro de usuario', () => {
        commum_page.acessarPaginaLogin()
       });

    it('Realizando login com e-mail invalido', () => {
        login_page.preencherEmail('email.com');
        login_page.preencherSenha('123346');
        login_page.clicarBotaoLogin();
        login_page.validarMensagemErro('E-mail inválido.');
    });

    it('Realizando login com senha invalido', () => {
        login_page.preencherEmail('teste@email.com');
        login_page.preencherSenha('123');
        login_page.clicarBotaoLogin();
        login_page.validarMensagemErro('Senha inválida.');
    });

    it('Usuário que não possui conta', () => {
        login_page.clicarAindaNaoTemConta();
    });

    it('Lembrar usuário e senha', () => {
        login_page.preencherEmail('teste@email.com');
        login_page.preencherSenha('123456');
        login_page.clicarCkeckBox();
        login_page.clicarBotaoLogin();
    });

    it('Realizando login com sucesso', () => {
        login_page.preencherEmail('teste@email.com');
        login_page.preencherSenha('123456');
        login_page.clicarBotaoLogin();
        login_page.validarLoginSucesso();
         

    });

});