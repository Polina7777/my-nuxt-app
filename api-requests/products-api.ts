export const url_ngrok =  'http://localhost:1337/';

export const getAllProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}

export const getAllProductsWithCollection = async()=>{
    const response = await fetch(`${url_ngrok}api/products?populate=*`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const filterProductsBySearchString = async(string)=>{
  console.log(string)
  const response = await fetch(`${url_ngrok}api/products?filters[description_small][$containsi]=${string}`,{method:'GET'});
  const data = await response.json();
  const products = data.data
  return products;
}
export const filterProductsByPopUpFilter = async(string)=>{
  const response = await fetch(`${url_ngrok}api/products?filters[${string}]=true`,{method:'GET'});
  const data = await response.json();
  const products = data.data
  return products;
}

export const getProductsById = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/products/${id}`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const getProductsByIdWithCollection = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/products/${id}?populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const sortProductsASC = async()=>{
    const response = await fetch(`${url_ngrok}api/products?sort=title%3Aasc&populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const sortProductsDESC = async()=>{
    const response = await fetch(`${url_ngrok}api/products?sort=title%3Adesc&populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const getAllNewProducts = async(string)=>{
    const response = await fetch(`${url_ngrok}api/products?filters[new]=true&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    console.log(products)
    return products;
}
export const getAllSaleProducts = async(string)=>{
    const sale = true;
    const response = await fetch(`${url_ngrok}api/products?filters[sale]=${sale}&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllBestsellerProducts = async(string)=>{
    const response = await fetch(`${url_ngrok}api/products?filters[bestseller]=true&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllForBodyProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?filters[forBody]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllProblemSkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?filters[problemSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllDrySkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?filters[drySkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllOilySkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?filters[oilySkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllSensitiveSkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?filters[sensitiveSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllMatureSkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?filters[matureSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllProductsFromBasket = async()=>{
    const response = await fetch(`${url_ngrok}api/products?filters[basket]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}


export const addProductToBasket = async (id: string) => {
    try {
      const response = await fetch(`${url_ngrok}api/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            basket:true
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  export const deleteProductFromBasket = async (id: string) => {
    try {
      const response = await fetch(`${url_ngrok}api/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            basket:false
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  export const changeProductCountInBasket = async (id: string,count:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/products/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            basket_count:count,
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  
export const productsApi = {getAllProducts,getProductsById,getProductsByIdWithCollection,getAllProductsWithCollection,sortProductsASC, sortProductsDESC,getAllBestsellerProducts,getAllDrySkinProducts,getAllForBodyProducts,getAllMatureSkinProducts, getAllNewProducts,getAllOilySkinProducts,getAllProblemSkinProducts,getAllSaleProducts,getAllSensitiveSkinProducts,getAllProductsFromBasket,addProductToBasket,deleteProductFromBasket, changeProductCountInBasket,filterProductsBySearchString, filterProductsByPopUpFilter}