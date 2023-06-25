import Login from "./login";
class home{
     ln=new Login();
     tableId="#transactionsTable";
     amountColumnId="#amount";

    txtUserName="#username";
    txtPassowrd="#password";
    btnSubmit="#log-in";
    veriMsg="#time";

    setUserName(username){
        cy.get(this.txtUserName).type(username);
    }


    setPassword(password){

        cy.get(this.txtPassowrd).type(password);
    }

    clickSubmit(){

        cy.get(this.btnSubmit).click();
    }

    verifyLogin(){
        cy.get(this.veriMsg).should('have.text',"Your nearest branch closes in: 30m 5s");
    }

    checkUrl(){
        cy.url().should('include', 'https://sakshingp.github.io/assignment/home.html');
    }

    clickAmount(){
        cy.get(this.amountColumnId).click();
    }
    checkSortedValue(){
        cy.get(this.amountColumnId)
        .then($columnElements =>{
            const columnValue=$columnElements.toArray().map(element => parseFloat(element.innerText));
            const sortedValue=[...columnValue].sort((a,b)=>a-b);

            expect(columnValue).to.deep.equal(sortedValue);
        })
    }
}

export default home;
