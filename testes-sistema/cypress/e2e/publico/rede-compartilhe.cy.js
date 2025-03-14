
describe('Página Rede Compartilhe', () => {

    const elementosHome = {
        botaoAdoptReject: '[id=adopt-reject-all-button]',
        botaoMenuMobile: '[data-testid=botao-menu]',
        itemMenuRedeCompartilhe: '[data-testid=menu-item-rede-compartilhe]',
        botaoRedeCompartilhe: '[data-testid=btn-rede]',
    }
    const elementosRede = {
        campoCidade: '[role=searchbox]',
        primeiroItemDropdown: '[role=option]:first',
        cardParceiroNome: '[data-testid=nome-parceiro]',
        campoEspecialidade: '[data-testid=especialidade]',
        labelEspecialiade: '.p-dropdown-label',
        botaoCarregarMais: '[data-testid=btn-carregar-mais]',
    }

    beforeEach(() => {
        cy.viewport("iphone-4")
        cy.visit("");
    });

    function fechaAvisoCookies() {
        if (Cypress.$(elementosHome.botaoAdoptReject).length > 0) {
            cy.get(elementosHome.botaoAdoptReject).click();
        }
    }

    function abrePaginaRedeMobile() {
        cy.get(elementosHome.botaoMenuMobile).click();
        cy.get(elementosHome.itemMenuRedeCompartilhe).click();
    }

    function pesquisaCidade() {
        cy.get(elementosRede.campoCidade).type("sao mate");
        cy.get(elementosRede.primeiroItemDropdown).should('have.text', 'São Mateus - ES');

        cy.get(elementosRede.primeiroItemDropdown).click();
        cy.get(elementosRede.campoCidade).should('have.value', 'São Mateus - ES');

        cy.get(elementosRede.cardParceiroNome).eq(0).should('have.text', 'Compartilhe Saúde São Mateus');
        cy.get(elementosRede.cardParceiroNome).eq(1).should('have.text', 'Bella Derm Clínica');
    }

    function pesquisaEspecialidade() {

        cy.get(elementosRede.campoEspecialidade).type('cirúrGIAo');
        cy.get(elementosRede.primeiroItemDropdown).should('have.text', 'Cirurgião Odontológico');

        cy.get(elementosRede.primeiroItemDropdown).click();
        cy.get(elementosRede.labelEspecialiade).should('have.text', 'Cirurgião Odontológico');

        cy.get(elementosRede.cardParceiroNome).eq(0).should('have.text', 'João Vitor Gouveia Vital');
        cy.get(elementosRede.cardParceiroNome).eq(1).should('have.text', 'Laísa Cabral Palaoro');

        cy.get(elementosRede.botaoCarregarMais).should('not.exist');
    }

    it('Deve pesquisar parceiros por cidade e especialidade', () => {

        fechaAvisoCookies();
        abrePaginaRedeMobile();
        pesquisaCidade();
        pesquisaEspecialidade();
    })

    it('Deve persistir pesquisa', () => {
        fechaAvisoCookies();
        pesquisaCidade();
        cy.get(elementosHome.botaoRedeCompartilhe).click();

        cy.url().should('include', 'nossos-parceiros');
        cy.get(elementosRede.campoCidade).should('have.value', 'São Mateus - ES');
        cy.get(elementosRede.cardParceiroNome).eq(0).should('have.text', 'Compartilhe Saúde São Mateus');
        cy.get(elementosRede.cardParceiroNome).eq(1).should('have.text', 'Bella Derm Clínica');

        cy.get(elementosRede.botaoCarregarMais).should('exist');
    })

})
