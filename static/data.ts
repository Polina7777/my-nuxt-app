
import plus from "../static/images/plus.svg";
export const  popUpList1= [
    {title:"Уход за лицом",filter:'forFace'},
    {title:"Волосы",filter:'forHair'},
    {title:"Макияж",filter:'forMakeUp'},
    {title:"Тело",filter:'forBody'},
   {title: "Наборы",filter:'sets'},
    {title:"Миниатюры",filter:'mini'},
  ];

 export const popUpList2= [
    {title:"Демакияж",filter:'makeUpRemoval'},
    {title:"Очищение",filter:'cleansing'},
    {title:"Отшелушивание",filter:'exfoliation'},
    {title:"Тонизирование",filter:'toning'},
    {title:"Сыворотки",filter:'serum'},
    {title:"Кремы",filter:'cream'},
    {title:"Маски",filter:'mask'},
    {title:"Тканевые маски",filter:'sheetMask'},
    {title:"Для кожи вокруг глаз",filter:'eyesCream'},
    {title:"Патчи",filter:'patches'},
    {title:"Для губ",filter:'forLips'},
   {title:"Точечные средства",filter:'pointMeans'},
    {title:"SPF-защита от солнца",filter:'spf'},
    {title:"Гаджеты и аксессуары для лица",filter:'accessories'},
  ];
  export const navScheme1= [
    {
      title: "Доставка и оплата",
      navigate: "/paymethods",
    },
    {
      title: "Вопрос-ответ",
      navigate: "/questions",
    },
    {
      title: "Контакты",
      navigate: "/contacts",
    },
  ];

 export const navScheme2 = [
    {
      title: "Каталог",
      navigate: "/",
      image: plus,
    },
    {
      title: "Новинки",
      navigate: "/new",
      image: null,
    },
    {
      title: "Распродажи",
      navigate: "/sale",
      image: null,
    },
    {
      title: "Подарочные сертификаты",
      navigate: "/giftcard",
      image: null,
    },
  ];
  export const delivery  = [
    {
      title: "Пункт выдачи СДЭК",
      price:'350 р.',
      sub_price:'Бесплатно при заказе от 3000 р.',
      termin:'1-3 рабочих дня',
      payment_type:'Оплата онлайн',
      class:'green'
    },
    {
      title: "Почта России",
      price:'350 р.',
      sub_price:'Бесплатно при заказе от 3000 р.',
      termin:'10-14 рабочих дня',
      payment_type:'Оплата онлайн',
      class:'blue'
    },
    {
      title: "Самовывоз",
      price:'350 р.',
      sub_price:'',
      termin:'1-3 рабочих дня',
      payment_type:'Оплата онлайн/при получении',
      class:'purple'
    },
    {
      title: "Курьером до двери",
      price:'100 р.',
      sub_price:'Бесплатно при заказе от 1000 р.',
      termin:'1-3 рабочих дня',
      payment_type:'Оплата онлайн',
      class:'orange'
    },
  ];
  export const data = {popUpList1,popUpList2,navScheme1,navScheme2,delivery}