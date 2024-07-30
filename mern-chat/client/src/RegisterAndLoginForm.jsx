/*
=== Basic Register Page ===

> Change colours? Bg?
> User can choose custom theme? dark mode vs light mode
> Add logos?
> Make password **** instead
> Button to show password
> Forgot password functionality maybe??

*/

import axios from "axios";
import { useContext, useState } from "react";
import { UserContext } from "./UserContext";

export default function RegisterAndLoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginOrRegister, setIsLoginOrRegister] = useState('login');
    const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

    async function handleSubmit(ev) {
        ev.preventDefault();
        const url = isLoginOrRegister === 'register' ? 'register' : 'login';
        const { data } = await axios.post(url, { username, password });
        setLoggedInUsername(username);
        setId(data.id);
    }

    return (
        <div className="bg-blue-50 h-screen flex items-center">
            <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
                <input value={username}
                    onChange={ev => setUsername(ev.target.value)}
                    type="text"
                    placeholder="username"
                    className="block w-full rounded-sm p-2 mb-2 border" />
                <input value={password}
                    onChange={ev => setPassword(ev.target.value)}
                    type="password"
                    placeholder="password"
                    className="block w-full rounded-sm p-2 mb-2 border" />
                <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
                    {isLoginOrRegister === 'register' ? 'Register' : 'Login'}
                </button>
                <div className="text-center mt-2">

                    {isLoginOrRegister === 'register' && (
                        <div>

                            <button onClick={() => setIsLoginOrRegister('login')}>
                                Already a member?
                            </button>
                        </div>
                    )}

                    {isLoginOrRegister === 'login' && (
                        <div>
                            <button onClick={() => setIsLoginOrRegister('register')}>
                                Don't have an account?
                            </button>
                        </div>
                    )}
                </div>
            </form>
        </div>
    );
}