const url = "http://localhost:3000/dashboard";

describe('Check Local API', () => {
    //Visit The URL and Check Table if it has Data
    it('Test Data Insert', () => {
        cy.visit(url);
        //Assert Url
        cy.url().should('eq', url);

        cy.get('#MyTable').should('length', 1);


        cy.get('#MyTable > tr').last().find('td').last().find('button').first().click();

        cy.get('#MyTable > tr').last().find('td').first().find('input').first().should('have.value', 'Test');
        cy.get('#MyTable > tr').last().find('td').first().find('input').first().type('1');
        cy.get('#MyTable > tr').last().find('td').first().find('input').first().should('have.value','Test1');

        cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().should('have.value', 'Testing');
        cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().type('2');
        cy.get('#MyTable > tr').last().find('td').eq(1).find('input').first().should('have.value','Testing2');


        cy.get('#MyTable > tr').last().find('td').last().find('button').first().click();
        cy.wait(2000);
        cy.get('#MyTable > tr').last().find('td').first().find('span').first().should('have.text', 'Test1');
        cy.get('#MyTable > tr').last().find('td').eq(1).find('span').first().should('have.text', 'Testing2');

    });
});
