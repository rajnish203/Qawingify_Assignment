import home from "../../pageObjects/homePage";
import Login from "../../pageObjects/login";

describe(' first test',()=>{
    it.only('LogInText', () =>{
       cy.visit("https://sakshingp.github.io/assignment/login.html");
       // Object of Login class
       const logIn=new Login();
       logIn.setUserName("Rajnish");
       logIn.setPassword("Raj6504");
       logIn.clickOnRememberMe();
       logIn.clickSubmit();
       logIn.verifyLogin();  
    })
    

    it.only("sortedAmount",()=>{
      cy.visit("https://sakshingp.github.io/assignment/login.html");
      const logIn=new home();
       logIn.setUserName("Rajnish");
       logIn.setPassword("Raj6504");
       logIn.clickSubmit();
       logIn.verifyLogin();
       logIn.checkUrl();
       logIn.clickAmount();
       logIn.checkSortedValue();
    })

    it.only('BlankUserNameTest',()=>{
      cy.visit("https://sakshingp.github.io/assignment/login.html");
      const logIn=new Login();
      cy.get('#username').should('have.value', '') 
      logIn.setPassword('Rajnish6504');
      logIn.clickSubmit();
      cy.url()
      .should('contain', 'https://sakshingp.github.io/assignment/login.html')
      cy.get('.alert')
      .should('have.text',"Username must be present")
    })

    it.only('BlankPasswordTest',()=>{
      cy.visit("https://sakshingp.github.io/assignment/login.html");
      const logIn=new Login();
      logIn.setUserName('Rajnish');
      cy.get('#password').should('have.value', '') 
      logIn.clickSubmit();
      cy.url()
      .should('contain', 'https://sakshingp.github.io/assignment/login.html')
      cy.get('.alert-warning')
      .should('have.text',"Password must be present")
    })

    it.only('BothBlankTest',()=>{
      cy.visit("https://sakshingp.github.io/assignment/login.html");
      const logIn=new Login();
      cy.get('#username').should('have.value', '') 
      cy.get('#password').should('have.value', '') 
      logIn.clickSubmit();
      cy.url()
      .should('contain', 'https://sakshingp.github.io/assignment/login.html')
      cy.get('.alert')
      .should('have.text',"Both Username and Password must be present ")
    })


})