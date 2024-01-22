
import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'
import {faker} from '@faker-js/faker'
describe('Cadastro de usuário', () => {
    
   beforeEach('Acessar cadastro de usuario', () => {
    commum_page.acessarCadastroUsuario()
   });

    it('Campo nome vazio', () => {
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')
    });
    it('Campo e-mail vazio', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });
    it('Campo e-mail invalido', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.person.firstName())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')
    });

    it('Campo senha vazio', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')  
    });

    it('Campo senha invalido', () => {
        cadastro_page.preencherNome(faker.person.fullName())
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherSenha('123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
    });

    it('Cadastro de usuário com sucesso', async () => {

        const name = await faker.person.fullName()

        cadastro_page.preencherNome(name)
        cadastro_page.preencherEmail(faker.internet.email())
        cadastro_page.preencherSenha('123456')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso(name)
    });
});