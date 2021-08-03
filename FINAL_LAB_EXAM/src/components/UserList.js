

const UserList = ({list})=>{
   
    return (
        <div>
            <h1>All Product List</h1>
            <table>
                <tr>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                </tr>
            </table>
            {
                list.map((u)=>{
                    return {u};
                })
            }
        </div>
    );
}

export default UserList;