export const url_ngrok =  'http://localhost:1337/';


export const getBasketProducts = async (id: string) => {
    const response = await fetch(`${url_ngrok}api/baskets/${id}?populate=*`, {
      method: "GET",
    });
    const data = await response.json();
    const basketProducts = data.data.attributes.products.data;
    return basketProducts;
  };
  export const createBasketCollection = async () => {
    const response = await fetch(`${url_ngrok}api/baskets`, {
      headers:{
        "Content-Type": "application/json",
        },
      method: "POST",
      body: JSON.stringify({
        data: {
          products: {
          },
        },
      }),
    });
    const data = await response.json();
    const collection = data.data
   return collection
  };
  
  export const setBasketProduct = async (id: string, product: any) => {
    const productId = String(product.id);
    try {
      const response = await fetch(`${url_ngrok}api/baskets/${id}`, {
        headers:{
        "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            products: {
              connect: [productId],
            },
          },
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const deleteProductFromBasket = async (id: string, product:any) => {
    const productId = String(product.id);
    try {
      const response = await fetch(`${url_ngrok}api/baskets/${id}?populate=*`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            products: {
              disconnect: [productId],
            },
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  
  export const basketsApi = { getBasketProducts, setBasketProduct, deleteProductFromBasket,createBasketCollection };