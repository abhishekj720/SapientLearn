describe('First test',()=>{
    it('is working',()=>{
        expect(true).to.equal(true); //mocha
    })
})


describe('Functional testing Counter',()=>{
    it('Visit the app and click the button',()=>{
        //navigate to the app
        cy.visit('/'); //localhost 3000
        cy.get('button').click();
        cy.get('p').should('contain','Current Count: 1')
    })
})