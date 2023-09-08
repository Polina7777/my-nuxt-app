export const url_ngrok =  'http://localhost:1337/';

export const getAllProductsEn = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}

export const getAllProductsEnWithCollection = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?populate=*`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const filterProductsEnBySearchString = async(string:string)=>{
  const response = await fetch(`${url_ngrok}api/product-ens?filters[description_small][$containsi]=${string}`,{method:'GET'});
  const data = await response.json();
  const products = data.data
  return products;
}
export const filterProductsEnByPopUpFilter = async(string:string)=>{
  const response = await fetch(`${url_ngrok}api/product-ens?filters[${string}]=true`,{method:'GET'});
  const data = await response.json();
  const products = data.data
  return products;
}

export const getProductsEnById = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/product-ens/${id}`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const getProductsEnByIdWithCollection = async(id:string)=>{
    const response = await fetch(`${url_ngrok}api/product-ens/${id}?populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const sortProductsEnASC = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?sort=title%3Aasc&populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const sortProductsEnDESC = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?sort=title%3Adesc&populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const getAllNewProductsEn = async(string:string)=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[new]=true&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllSaleProductsEn = async(string:string)=>{
    const sale = true;
    const response = await fetch(`${url_ngrok}api/product-ens?filters[sale]=${sale}&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllBestsellerProductsEn = async(string:string)=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[bestseller]=true&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllForBodyProductsEn = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[forBody]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllProblemSkinProductsEn = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[problemSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllDrySkinProductsEn = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[drySkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllOilySkinProductsEn = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[oilySkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllSensitiveSkinProductsEn = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[sensitiveSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllMatureSkinProductsEn = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[matureSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllProductsEnFromBasket = async()=>{
    const response = await fetch(`${url_ngrok}api/product-ens?filters[basket]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}


export const addProductEnToBasket = async (id: string) => {
    try {
      const response = await fetch(`${url_ngrok}api/product-ens/${id}`, {
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
  export const deleteProductEnFromBasket = async (id: string) => {
    try {
      const response = await fetch(`${url_ngrok}api/product-ens/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "PUT",
        body: JSON.stringify({
          data: {
            basket:false,
            basket_count:0
          },
        }),
      });
    } catch (error) {
      console.log(error)
    }
  };
  export const changeProductEnCountInBasket = async (id: string,count:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/product-ens/${id}`, {
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
  
export const productsEnApi = {getAllProductsEn,getProductsEnById,getProductsEnByIdWithCollection,getAllProductsEnWithCollection,sortProductsEnASC, sortProductsEnDESC,getAllBestsellerProductsEn,getAllDrySkinProductsEn,getAllForBodyProductsEn,getAllMatureSkinProductsEn, getAllNewProductsEn,getAllOilySkinProductsEn,getAllProblemSkinProductsEn,getAllSaleProductsEn,getAllSensitiveSkinProductsEn,getAllProductsEnFromBasket,addProductEnToBasket,deleteProductEnFromBasket, changeProductEnCountInBasket,filterProductsEnBySearchString, filterProductsEnByPopUpFilter}