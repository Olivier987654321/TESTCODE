class APIAuth {
    Login () {
        return cy.request ({
            method: 'POST'
            url: 'https://qacart-todo.herokuapp.com/api/v1/users/login'
            body: {
                  email: "olivier@gmail.com",
                  password: "Olivier123456"
            }
        })
 }}
 export default APIAuth