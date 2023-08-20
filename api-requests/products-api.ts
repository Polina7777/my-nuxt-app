export const url_ngrok =  'http://localhost:1337/';

export const getAllProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
// export const getAllProductsWithCollection = async(sortType:string,page:any)=>{
//     const response = await fetch(`${url_ngrok}api/products?pagination[page]=${page}&pagination[pageSize]=3&sort=title%3A${sortType}&populate=*`,{method:'GET'});
//     const data = await response.json();
//     const products = data
//     return products;
// }
export const getAllProductsWithCollection = async()=>{
    const response = await fetch(`${url_ngrok}api/products?populate=*`,{method:'GET'});
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
export const getAllNewProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?new=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllSaleProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?sale=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllBestsellerProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?bestseller=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllForBodyProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?forBody=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllProblemSkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?problemSkin=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllDrySkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?drySkin=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllOilySkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?oilySkin=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllSensitiveSkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?sensitiveSkin=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}
export const getAllMatureSkinProducts = async()=>{
    const response = await fetch(`${url_ngrok}api/products?matureSkin=true`,{method:'GET'});
    const data = await response.json();
    const products = data.data
    return products;
}

export const recipesApi = {getAllProducts,getProductsById,getProductsByIdWithCollection,getAllProductsWithCollection,sortProductsASC, sortProductsDESC,getAllBestsellerProducts,getAllDrySkinProducts,getAllForBodyProducts,getAllMatureSkinProducts, getAllNewProducts,getAllOilySkinProducts,getAllProblemSkinProducts,getAllSaleProducts,getAllSensitiveSkinProducts}