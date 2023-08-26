export const url_ngrok =  'http://localhost:1337/';

export const getAllOrders = async()=>{
    const response = await fetch(`${url_ngrok}api/orders`,{method:'GET'});
    const data = await response.json();
    const orders = data.data
    return orders;
}

export const getOrderById = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/orders/${id}`,{method:'GET'});
    const data = await response.json();
    const order = data.data
    return order;
}

export const createNewOrder = async (orderData:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/orders/`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          data: {
            name:orderData.name,
            phone:orderData.phone,
            email:orderData.email,
            comment:orderData.comment,
            delivery:orderData.delivery.type,
            pay:orderData.pay.type,
            price:orderData.price
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };

  export const deleteOrderById = async (id: string) => {
    try {
      const response = await fetch(`${url_ngrok}api/orders/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
    } catch (error) {
      console.log(error)
    }
  };

export const ordersApi = {getAllOrders,getOrderById, createNewOrder, deleteOrderById}