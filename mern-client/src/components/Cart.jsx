import React from "react";
const Cart = () => {
    return (
        <div className="section-container">
            <div className="px-4 lg:px-24 flex items-center">
                <div className="flex w-full flex-col justify-center items-center gap-12 py-48">
                    {/* left side  */}
                    <div className="space-y-8 h-full">
                        <h2 className="text-5xl font-bold leading-snug text-black">
                            Items Added to {" "}
                            <span className="text-blue-700">Cart :</span>
                        </h2>

                        <div className="overflow-x-auto">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Serial No</th>
                                        <th>Name</th>
                                        <th>Quantity</th>
                                        <th>Price</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, index) => (
                                        <tr key={item.id}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                <button onClick={() => setItems(prevItems => {
                                                    const newItems = [...prevItems];
                                                    newItems[index].quantity++;
                                                    return newItems;
                                                })}>+</button>
                                                {item.quantity}
                                                <button onClick={() => setItems(prevItems => {
                                                    const newItems = [...prevItems];
                                                    if (newItems[index].quantity > 1) {
                                                        newItems[index].quantity--;
                                                    }
                                                    return newItems;
                                                })}>-</button>
                                            </td>
                                            <td>${item.price}</td>
                                            <td><button onClick={() => deleteItem(item.id)}>Delete</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>


        </div>


    );
};

export default Cart;
