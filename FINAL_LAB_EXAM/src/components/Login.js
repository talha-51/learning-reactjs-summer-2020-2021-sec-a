const Login = () => {

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={onsubmit}>
                <table>
                    <tr>
                        <td>
                            Email
                        </td>
                       
                        <td>
                            <input type='email' name='email' value='' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Password
                        </td>
                        <td>
                            <input type='password' name='password' value='' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type='submit' value='Login' />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Login;