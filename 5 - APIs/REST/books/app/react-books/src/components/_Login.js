import React from 'react'
import axios from 'axios'

const Login = () => {
    async function login(e) {
        e.preventDefault()
        const input = {
            email: e.target.elements.email.value,
            password: e.target.elements.password.value
        }
        console.log(input)

        try {
            axios
                .post('http://localhost:5000/users/login', input)
                .then(res => {
                    if (res.status === 200) {
                        const token = res.headers['auth-token']
                        console.log(token)
                    }
                    else
                        return

                })

        }
        catch (err) {
            console.log(err)
        }

    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
                <input type="text" name="email" />
                <input type="password" name="password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;