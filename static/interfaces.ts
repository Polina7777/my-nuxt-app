export interface ICard {
    id:string;
    attributes:ICardAttributes
};

export interface ICardAttributes{
    title: string;
    small_description:string;
    description: string;
    image: string;
    price:string;
    brand:string;
    new:boolean;
    bestseller:boolean;
    sale:boolean;
    basket:boolean;
    basket_count:number
  }

export interface IBasketCard{
    product:any;
    count:number
}
export interface IGiftCard {
    id:string;
    attributes:IGiftAttributes
};

export interface IGiftAttributes{
    name: string;
    for:string;
    giftcard_text: string;
    price:string;
   adress_type:string;
   adress:string;
    basket:boolean;
    basket_count:number;
  }
  export interface IClickPopUpValue{
    title:string;
    open:boolean;
  }

