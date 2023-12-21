
export class AuthService {
    async createAccount({ email, password, name }) {
        console.log(email, password, name);
        if (password && name) {
            return true
        } else {
            return false
        }
    }

    async login({ email, password }) {
        console.log(email, password);
        if (password) {
            return true
        } else {
            return false
        }
    }

    async getCurrentUser({ email, password }) {
        try {
            if(email&& password){
                return true
            }else{
                return false
            }
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout(token) {
        if(token){
            return true;
        }else{
            return false;
        }
    }
}

const authService = new AuthService();

export default authService