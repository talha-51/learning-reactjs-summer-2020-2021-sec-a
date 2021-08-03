const Login = () => {

    return (
        <div>
            <h1>Add Product</h1>
            <form onSubmit={onsubmit}>
                <table>
                    <tr>
                        <td>
                            Product Name
                        </td>
                       
                        <td>
                            <input type='text' name='name' value='' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Quantity
                        </td>
                        <td>
                            <input type='number' name='quantity' value='' />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Price
                        </td>
                        <td>
                            <input type='number' name='price' value='' />
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type='submit' value='Add' />
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}

export default Login;