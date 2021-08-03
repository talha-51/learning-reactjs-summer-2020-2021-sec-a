const AddEmployee = ()=>{
    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={onsubmit}>
                <table>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            <input type='name' name='email' value=''/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Contact NO
                        </td>
                        <td>
                            <input type='number' name='contactNo' value='' />
                        </td>
                    </tr>
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
                            <input type='submit' value='Signup' />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default AddEmployee;