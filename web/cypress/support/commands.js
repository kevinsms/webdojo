import 'cypress-real-events'
import './actions/consuntancy.actions'
import { getTodayFormattedDate } from '../support/utils'

Cypress.Commands.add('start',()=>{
  cy.visit('/')
})

Cypress.Commands.add('submitLoginForm', (email, password) => {
  cy.get('#email').type(email)
  cy.get('#password').type(password)
  cy.contains('Entrar').click()
})
Cypress.Commands.add('goTo',(buttonName, pageTitle)=>{
  cy.contains('button',buttonName)
  .should('be.visible')
  .click()
cy.contains('h1',pageTitle)
  .should('be.visible')
})
//
Cypress.Commands.add('login',(ui = false)=>{
  if(ui){
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");
  }else{
    const token = 'e1033d63a53fe66c0fd3451c7fd8f617'
    const loginDate = getTodayFormattedDate()
  
    cy.setCookie('login_date', loginDate)
    cy.visit('/dashboard',{
      onBeforeLoad(win){
        win.localStorage.setItem('token', token)
      }
    })
  }
})