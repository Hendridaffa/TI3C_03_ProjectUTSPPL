context('Cypress Logout 1', () => {
    it('Login Skenario 1', () => {
        cy.visit('https://www.saucedemo.com') // mengunjungi website
        cy.get('#user-name').type('standard_user') // cari input username kemudian otomatis isi dengan username
        cy.get('#password').type('secret_sauce') // cari input password kemudian otomatis isi dengan password
        cy.get('#login-button').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('#react-burger-menu-btn').click() // klik dropdown
        cy.get('#logout_sidebar_link').click() // klik logout
    })
})

context('Cypress Logout 2', () => {
    it('Login Skenario 2', () => {
        cy.visit('https://www.saucedemo.com') // mengunjungi website
        cy.get('#user-name').type('locked_out_user') // cari input username kemudian otomatis isi dengan username
        cy.get('#password').type('secret_sauce') // cari input password kemudian otomatis isi dengan password
        cy.get('#login-button').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('#react-burger-menu-btn').click() // klik dropdown
        cy.get('#logout_sidebar_link').click() // klik logout
    })
})

context('Cypress Logout 3', () => {
    it('Login Skenario 3', () => {
        cy.visit('https://www.saucedemo.com') // mengunjungi website
        cy.get('#user-name').type('problem_user') // cari input username kemudian otomatis isi dengan username
        cy.get('#password').type('secret_sauce') // cari input password kemudian otomatis isi dengan password
        cy.get('#login-button').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('#react-burger-menu-btn').click() // klik dropdown
        cy.get('#logout_sidebar_link').click() // klik logout
    })
})

context('Cypress Logout 4', () => {
    it('Login Skenario 4', () => {
        cy.visit('https://www.saucedemo.com') // mengunjungi website
        cy.get('#user-name').type('performance_glitch_user') // cari input username kemudian otomatis isi dengan username
        cy.get('#password').type('secret_sauce') // cari input password kemudian otomatis isi dengan password
        cy.get('#login-button').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('#react-burger-menu-btn').click() // klik dropdown
        cy.get('#logout_sidebar_link').click() // klik logout
    })
})