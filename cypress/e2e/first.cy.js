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
})