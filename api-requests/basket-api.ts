export const url_ngrok =  'http://localhost:1337/';


export const getBasketProducts = async (id: string) => {
  const basketProductsArr = []
    const response = await fetch(`${url_ngrok}api/baskets/${id}?populate=*`, {
      method: "GET",
    });
    const data = await response.json();
    // console.log(data.data.attributes)
    const basketProducts = data.data.attributes.products.data;
    const basketProductsEn = data.data.attributes.product_ens.data;
    const basketGiftCards = data.data.attributes.giftcards.data;
    basketProductsArr.push(...basketProducts);
    basketProductsArr.push(...basketProductsEn);
    basketProductsArr.push(...basketGiftCards);
    return basketProductsArr;
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
  export const setBasketGiftCard = async (id: string, giftcard: any) => {
    const giftcardId = String(giftcard.id);
    try {
      const response = await fetch(`${url_ngrok}api/baskets/${id}`, {
        headers:{
        "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            giftcards: {
              connect: [giftcardId],
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
      const response = await fetch(`${url_ngrok}api/baskets/${id}`, {
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
  export const deleteGiftCardFromBasket = async (id: string, giftcard:any) => {
    const giftcardId = String(giftcard.id);
    try {
      const response = await fetch(`${url_ngrok}api/baskets/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            giftcards: {
              disconnect: [giftcardId],
            },
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  
  export const basketsApi = { getBasketProducts, setBasketProduct,setBasketGiftCard, deleteProductFromBasket, deleteGiftCardFromBasket,createBasketCollection };