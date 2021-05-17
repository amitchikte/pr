///<reference types="cypress" />


describe("Automation Task Part1",()=>{

             it("Create User login",()=>{
               cy.visit("https://www.demoblaze.com/index.html")
               cy.get("#signin2").click()
               cy.get("#sign-username").type("Amit6")
               cy.get("#sign-password").type("123456")
               cy.get("[onclick='send()']").click({force: true})
              
              cy.on("windows:alert",(str)=>{
                      except(str).to.equal("Sign up successful.")
                    })

              })
            it("To check  whether user can login and logout application",()=>{
              cy.visit("https://www.demoblaze.com/index.html")
              cy.get("#login2").click()
              cy.get("#loginusername").type("Amit")
              cy.get("#loginpassword").type("123456")
              cy.get("[onclick='logIn()']").click()
              cy.get("#logout2").should("be.visible")
              cy.get("#logout2").click()
              cy.get("#login2").should("be.visible")

              })



})



describe("Automation Task Part2",()=>{
  it("Contact us field,Verify categories,Verify products,Add to Cart,Verify cart,Place order,Logout",()=>{
    cy.visit("https://www.demoblaze.com/index.html")
    cy.get("#login2").click()
    cy.get("#loginusername").type("Amit")
    cy.get("#loginpassword").type("123456")
    cy.get("[onclick='logIn()']").click()
    cy.get("#logout2").should("be.visible")
    cy.get("[data-target='#exampleModal']").click()
    cy.get("#recipient-email").type("amitchikte@gmail.com")
    cy.get("#message-text").type("Kindly contact me")
    cy.get("[onclick='send()']").click()
    cy.on("windows:alert",(str)=>{
      except(str).to.equal("Thanks for the message!!")
    })
    cy.get(".list-group a").first().should("have.text","CATEGORIES")
    cy.get(".list-group a").eq(1).should("have.text","Phones")
    cy.get(".list-group a").eq(2).should("have.text","Laptops")
    cy.get(".list-group a").last().should("have.text","Monitors")
    cy.get("#tbodyid div .card-title").first().should("have.text","Samsung galaxy s6")
    cy.get("#tbodyid div .card-title").last().should("have.text","Sony vaio i7\n")
    cy.wait(2000)
    cy.contains("Samsung galaxy s6").click()
    // cy.get("#tbodyid div .card-title").first().click({force: true})
    cy.get("[onclick='addToCart(1)']").click()
    cy.on("windows:alert",(str)=>{
      except(str).to.equal("Thanks for the message!!")
    })
    cy.get("#cartur").click()
    cy.wait(5000)
    cy.contains("Samsung galaxy s6").should("be.visible")
    cy.get(".btn.btn-success").click()
    cy.get("#name").type("Amit")
    cy.get("#country").type("India")
    cy.get("#city").type("Pune")
    cy.get("#card").type("123456")
    cy.get("#month").type("May")
    cy.get("#year").type("2021")
    cy.get("[onclick='purchaseOrder()']").click()
    cy.on("windows:alert",(str)=>{
      except(str).to.equal("Thank you for your purchase!")
    })
    cy.get(".confirm").click()
    // cy.get("[data-dismiss='modal']").click()
    cy.get("#logout2").click({force: true})
    cy.get("#login2").should("be.visible")
  })

})