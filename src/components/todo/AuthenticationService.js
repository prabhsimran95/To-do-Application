class AuthenticationService{

    registerSuccesfulLogin(username,password){
        console.log('in register method');
        sessionStorage.setItem('authenticatedUser', username);
    }

    logout(){
        sessionStorage.removeItem('authenticatedUser');
    }
    
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser');
        if (user===null) return false
        return true
    }
    getLoggedinUser(){
        let user = sessionStorage.getItem('authenticatedUser');
        if (user===null) return ''
        return user
    }
}

export default new AuthenticationService()