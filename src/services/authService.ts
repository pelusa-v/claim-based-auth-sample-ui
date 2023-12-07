import { AuthResponse } from "../models/authResponse";
import { AuthSignupRequest } from "../models/authSignupRequest";
import { RestClient, RestMethod } from "./restClient";

class AuthService {

    private static BASE_URL : string = "http://localhost:5237";

    public static SignUpUser(credentials : AuthSignupRequest) : Promise<AuthResponse> {
        let res = RestClient.makeRequest(this.BASE_URL + "/api/auth/signup", RestMethod.POST, credentials);
        return res
            .then((res : any) => {
                return res as AuthResponse
            })
    }
}

export default AuthService;