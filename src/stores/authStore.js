import {action, decorate, observable} from "mobx";
import Auth from "../services/Auth";

class AuthStore {
    loading = false;
    error = null;

    username = '';
    password = '';

    register = {
        username: '',
        password: '',
        confirmedpassword: '',
    }

    setUsername(username) {
        this.username = username;
    }

    setPassword(password) {
        this.password = password;
    }

    async login({username, password}) {
        this.loading = true;
        this.error = undefined;
        return await Auth.login({username, password})
            .then(res => {
                Auth.saveUser(res.token);
            })
            .catch(error => {
                console.log(error)
            })
    }
}

decorate(AuthStore, {
    setUsername: action,
    setPassword: action,
    login: action,
    loading: observable,
    error: observable,
    values: observable,
});

export default new AuthStore();
