export const url_ngrok =  'http://localhost:1337/';

export const getAllProducts = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}

export const getAllProductsWithCollection = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&populate=*`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const filterProductsBySearchString = async(string:string,locale:any)=>{
  const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[description_small][$containsi]=${string}`,{method:'GET'});
  const data = await response.json();
  const products = data.data
  return products;
}
export const filterProductsByFiltersForm = async(brand:string,priceFrom:any,priceTo:any,locale:any)=>{
  // let filterBrand = brand ? brand : "" ;
  // let filterPriceFrom = priceFrom ? priceFrom : null ;
  // let filterPriceTo = priceTo ? priceTo : null ;
  console.log(brand,priceFrom,priceTo)
  if( brand && priceFrom && priceTo){
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[brand][$containsi]=${brand}&filters[priceNum][$between]=${priceFrom}&filters[priceNum][$between]=${priceTo}`,{method:'GET'});
  const data = await response.json();
  const products = data.data
  return products;
   }
   else if(!brand){
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[priceNum][$between]=${priceFrom}&filters[priceNum][$between]=${priceTo}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
   }
   else if(!brand && priceFrom && !priceTo){
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[priceNum][$gte]=${priceFrom}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
   }
   else if(!brand && !priceFrom && priceTo){
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[priceNum][$lte]=${priceTo}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
   }
   else if(brand && !priceFrom && priceTo){
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[brand][$containsi]=${brand}&filters[priceNum][$between]=0&filters[priceNum][$between]=${priceTo}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
   }
   else if(brand && priceFrom && !priceTo){
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[brand][$containsi]=${brand}&filters[priceNum][$gte]=${priceFrom}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
   }
   else if(brand && !priceFrom && !priceTo){
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[brand][$containsi]=${brand}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
   }
  // else if (priceFrom){
  //   const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[priceNum][$gte]=${priceFrom}&filters[priceNum][$between]=${priceTo}`,{method:'GET'});
  //   const data = await response.json();
  //   const products = data.data
  //   return products;
  // }

}
export const filterProductsByPopUpFilter = async(string:string,locale:any)=>{
  const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[${string}]=true`,{method:'GET'});
  const data = await response.json();
  const products = data.data
  return products;
}

export const getProductsById = async(id:string,locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products/${id}?locale=${locale}`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const getProductsBySmallDescription = async(title:string,locale:any)=>{
  const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[description_small][$containsi]=${title}`,{method:'GET'});
  const data = await response.json();
  const product = data.data
  return product;
}
export const getProductsByIdWithCollection = async(id:string,locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products/${id}?locale=${locale}&populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const sortProductsASC = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&sort=title%3Aasc&populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const sortProductsDESC = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&sort=title%3Adesc&populate=*`,{method:'GET'});
    const data = await response.json();
    const product = data.data
    return product;
}
export const getAllNewProducts = async(string:string,locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[new]=true&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllSaleProducts = async(string:string,locale:any)=>{
    const sale = true;
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[sale]=${sale}&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllBestsellerProducts = async(string:string,locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[bestseller]=true&filters[description_small][$containsi]=${string}`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllForBodyProducts = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[forBody]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllProblemSkinProducts = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[problemSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllDrySkinProducts = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[drySkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllOilySkinProducts = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[oilySkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllSensitiveSkinProducts = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[sensitiveSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllMatureSkinProducts = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}&filters[matureSkin]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllProductsFromBasket = async(locale:any)=>{
    const response = await fetch(`${url_ngrok}api/products?locale=${locale}filters[basket]=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}


export const addProductToBasket = async (id: string,locale:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/products/${id}?locale=${locale}`, {
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
  export const deleteProductFromBasket = async (id: string,locale:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/products/${id}?locale=${locale}`, {
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
  export const changeProductCountInBasket = async (id: string,count:any,locale:any) => {
    try {
      const response = await fetch(`${url_ngrok}api/products/${id}?locale=${locale}`, {
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
  
export const productsApi = {getAllProducts,getProductsById,getProductsBySmallDescription,getProductsByIdWithCollection,getAllProductsWithCollection,sortProductsASC, sortProductsDESC,getAllBestsellerProducts,getAllDrySkinProducts,getAllForBodyProducts,getAllMatureSkinProducts, getAllNewProducts,getAllOilySkinProducts,getAllProblemSkinProducts,getAllSaleProducts,getAllSensitiveSkinProducts,getAllProductsFromBasket,addProductToBasket,deleteProductFromBasket, changeProductCountInBasket,filterProductsBySearchString, filterProductsByPopUpFilter,filterProductsByFiltersForm}