import { RestClient, RestMethod } from "./restClient";

class AuthService {

    private static BASE_URL : string = "http://localhost:5237";

    public static SignUpUser(credentials : AuthSignupRequest) {
        let a = RestClient.makeRequest(this.BASE_URL + "/api/auth/signup", RestMethod.POST, credentials)    
    }
}