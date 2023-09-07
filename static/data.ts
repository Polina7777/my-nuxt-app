
import plus from "../static/images/plus.svg";
export const hair =[
  {title:"Очищение",filter:'cleansing'},
  {title:"Отшелушивание",filter:'exfoliation'},
  {title:"Сыворотки",filter:'serum'},
  {title:"Кремы",filter:'cream'},
  {title:"Маски",filter:'mask'},
  {title:"SPF-защита от солнца",filter:'spf'},
  {title:"Профессиональный уход",filter:'professional_care'},
  {title:"Гаджеты и аксессуары для волос",filter:'accessories'},
]
export const body = [
  {title:"Очищение",filter:'cleansing'},
  {title:"Отшелушивание",filter:'exfoliation'},
  {title:"Тонизирование",filter:'toning'},
  {title:"Сыворотки",filter:'serum'},
  {title:"Кремы",filter:'cream'},
  {title:"Автозагар",filter:'self-tanning'},
  {title:"Щетки и массажеры",filter:'brushes_massagers'},
  {title:"Скрабы",filter:'scrubs'},
  {title:"Обертывания",filter:'wraps'},
  {title:"SPF-защита от солнца",filter:'spf'},
]
export const makeUp = [
  {title:"Для губ",filter:'forLips'},
  {title:"Для глаз",filter:'forEyes'},
  {title:"Для лица",filter:'forFace'},
  {title:"Для бровей",filter:'forBrows'},
  {title:"Кисти",filter:'brushes'},
  {title:"Палетки",filter:'palletes'},
  {title:"Спонжи",filter:'sponges'},
  {title:"Гаджеты и аксессуары для макияжа",filter:'accessories'},
]
export const sets =[
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
]
export const mini =[
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
]
export const face =[
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
  {title:"Точечные средства",filter:'pointMeans'},
  {title:"SPF-защита от солнца",filter:'spf'},
  {title:"Гаджеты и аксессуары для лица",filter:'accessories'},
]
export const  popUpList1= [
    {title:"Уход за лицом",filter:'forFace',popup: face},
    {title:"Волосы",filter:'forHair',popup: hair},
    {title:"Макияж",filter:'forMakeUp',popup: makeUp},
    {title:"Тело",filter:'forBody',popup: body},
   {title: "Наборы",filter:'sets',popup: sets},
    {title:"Миниатюры",filter:'mini',popup: mini},
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
  export const data = {popUpList1,popUpList2,navScheme1,navScheme2,delivery,face,hair,body,makeUp,sets,mini}