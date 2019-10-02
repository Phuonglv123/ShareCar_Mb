import axios from 'axios';
import config from "../config/config";

let jwt = null;

class Auth {
    constructor() {
        this.apiUrl = config.api_url;
        this.loadUser();
    }

    async login(params) {
        try {
            const res = await axios({
                method: 'POST',
                header: {
                    'Content-type': 'application/json',
                },
                url: `${this.apiUrl}home/login`,
                data: params,
                validateStatus: status => {
                    return true;
                },
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    async regiterPassenger(params) {
        try {
            const res = await axios({
                method: 'POST',
                header: {
                    'Content-type': 'application/json',
                },
                url: `${this.apiUrl}passenger/register`,
                data: params,
                validateStatus: status => {
                    return true;
                },
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    async regiterDriver(params) {
        try {
            const res = await axios({
                method: 'POST',
                header: {
                    'Content-type': 'application/json',
                },
                url: `${this.apiUrl}driver/register`,
                data: params,
                validateStatus: status => {
                    return true;
                },
            });
            return res.data;
        } catch (e) {
            console.log(e);
        }
    }

    logout() {
        localStorage.removeItem('user');
        jwt = null;
    }

    saveUser(user) {
        try {
            if (user) {
                localStorage.setItem('AUTH', JSON.stringify(user));
            }
        } catch (e) {
            console.log(e);
        }
    }

    loadUser() {
        try {
            let user = localStorage.getItem('AUTH');
            if (user) {
                user = JSON.parse(user);
            }
            if (user && user.token) {
                jwt = user;
                let token = user.token;
                this.token = token;
            }
        } catch (e) {
            console.log(e);
        }

    }
}

export default new Auth();
