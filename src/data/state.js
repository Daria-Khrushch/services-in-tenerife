import man from "./../images/men.png";
import woman from "./../images/woman.png";
import radmiraManicur from './../images/manicur/radmira.jpg';
import nataliaManicur from './../images/manicur/natalia.jpg';
import browsGallery from './../images/brows.jpg';
import lashGallery from './../images/lash.jpg';
import productOne from "./../images/products/maneg1.jpg";
import productTwo from "./../images/products/maneg2.jpg";
import productThree from "./../images/products/maneg3.jpg";
import cookerTatiana from './../images/cooker/Tatiana.jpg';
import juliaDressOne from './../images/products/juliaDressOne.jpg';
import juliaDressTwo from './../images/products/juliaDressTwo.jpg';
import juliaDressThree from './../images/products/juliaDressThree.jpg';
import juliaDressFour from './../images/products/juliaDressFour.jpg';
import juliaDressFive from './../images/products/juliaDressFive.jpg';
import cookerLena from './../images/cooker/cookerLena.jpg';
import hairOksana from './../images/hair/oksanaHair.jpg';
import nataliClean from './../images/cleaning/nataliClean.jpg';
import cleanInna from './../images/cleaning/cleanInna.jpg';
import maniSveta from './../images/manicur/svetlana.jpg';
import tetianaInterest from 'images/interesting/tetiana.jpg'


// €

// git add .
// git commit -m "test"
// git push origin main
const state = {
  ServicesPage: {
    cleaningData: [
      {
        id: "Natali+380637369507",
        name: "Натали",
        avatar: nataliClean,
        about:
          "Предоставляю услуги по уборке апартаментов, вилл, коммерческой недвижимости. Качественный сервис и выгодная цена! Уборка регулярная или одноразовая. Аккуратно и с заботой отношусь к предметам интерьера вашего помещения. Услуги предоставляю по всему Тенерифе. Владею испанским, русским и украинским языками. Telegram и WhatsApp +380637369507, звонить 611597350.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/+380637369507',
          whatsapp: " https://wa.me/+380637369507"
        },
        price: "10€/час",
      },
       {
        id: "Inna+380632836761",
        name: "Инна",
        avatar: cleanInna,
        about:
          "Опыт работы пол года. Говорю на русском и украинском. Немного на английском.",
        location: "Los Cristianos, Costa Adeje, Adeje",
        contacts: {
          telega: 'https://t.me/+380632836761',
          whatsapp: " https://wa.me/+380632836761"
        },
        price: "10€/час",
      },
     
    ],
    driverData: [
      {
        id: 1,
        name: "Тест",
        avatar: man,
        about: "Трансфер в аэропорт, из аэропорта и по острову. Юг от 15€, север от 50€. Вызов 10€. Пишите.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
      {
        id: 2,
        name: "Тест",
        avatar: man,
        about: "Трансфер в аэропорт, из аэропорта и по острову. Юг от 15€, север от 50€. Вызов 10€. Пишите.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
      {
        id: 3,
        name: "Тест",
        avatar: man,
        about: "Трансфер в аэропорт, из аэропорта и по острову. Юг от 15€, север от 50€. Вызов 10€. Пишите.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
      {
        id: 4,
        name: "Тест",
        avatar: man,
        about: "За рулем більше 10 років. 6 місць в авто. Південь від 15 €, північ від 50 €. Виклик 10 €. Володію українською та англійською мовами. ",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
        {
        id: 5,
        name: "Тест",
        avatar: man,
        about: "Трансфер в аэропорт, из аэропорта и по острову. Юг от 15€, север от 50€. Вызов 10€. Пишите.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
      {
        id: 6,
        name: "Тест",
        avatar: man,
        about: "За рулем більше 10 років. 6 місць в авто. Володію українською та англійською мовами. Південь від 15 €, північ від 50 €. Виклик 10 €.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
        {
        id: 7,
        name: "Тест",
        avatar: man,
        about: "Трансфер в аэропорт, из аэропорта и по острову. Юг от 15€, север от 50€. Вызов 10€. Пишите.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
      {
        id: 8,
        name: "Тест",
        avatar: man,
        about: "За рулем більше 10 років. 6 місць в авто. Південь від 15 €, північ від 50 €. Виклик 10 €. Володію українською та англійською мовами.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
    ],
    hairdresserData: [
      {
        id: "Oksana+380957583249",
        gallery: hairOksana,
        about: "Мене звати Оксана. Роблю жіночі, чоловічі та дитячі стрижки. Також зачіски та фарбування. Працювала в Україні 16 років перукарем. Приймаю дома. Живу в Плая Сан Хуан. Ціни: жіноча стрижка-10€, чоловіча і дитяча-8€, фарбування в один тон-10€. Інше по ситуації, залежить від складності роботи і побажання клієнтки.",
        location: "Playa San Juan",
        contacts: {
          telega: 'https://t.me/+380957583249',
          whatsapp: " https://wa.me/+380957583249"
        },
      },
      
    ],
    manicuristData: [
      {
        id: "Radmira+34689673169",
        gallery: radmiraManicur,
        about: "Меня зовут Радмира. Делаю педикюр и маникюр на севере острова в Icod de los Vinos. Возможен выезд в ближайшие города. Маникюр+гель лак 30€. Педикюр+гель лак 35€.  Опыт работы 6 лет. Сухожар, одноразовые расходные материалы. Одноразовые фрезы для педикюра. Говорю на русском, испанском, немного на казахском. Мои работы можно посмотреть ",
        location: "Tenerife North, Icod de los Vinos",
         contacts: {
          telega: 'https://t.me/+34689673169',
           whatsapp: "https://wa.me/+34689673169",
          instagram: "https://instagram.com/nails_caxar_tenerife?igshid=YmMyMTA2M2Y="
        },
      },
      {
        id: "Natalia+34642673891",
        gallery: nataliaManicur,
        about: "Меня зовут Наталья. Предоставляю услуги маникюра, педикюра, наращивание и коррекция гелем и акригелем. А также удаление натоптышей, мозолей и лечение врастающих ногтей. Опыт работы более 6 лет. Также окончила медицинскую школу по специальности «Техник медицинской стерилизации инструмента», поэтому безопасность в салоне для меня играет очень важную роль. Принимаю в салоне по адресу Pl. César Monrique 4, Adeje. Разговариваю на Украинском, русском, польском и английском языках. Маникюр без покрытия 25€. Педикюр без покрытия 35€. Пишите, отправлю полный прайс услуг! Мои работы можно посмотреть ",
        location: "Pl. César Monrique 4, Adeje",
         contacts: {
          telega: 'https://t.me/+34642673891',
           whatsapp: "https://wa.me/+34642673891",
          instagram: "https://instagram.com/perfectnailses?igshid=YmMyMTA2M2Y="
        },
      },
      {
        id: "Svetlana+380950423296",
        gallery: maniSveta,
        about: "Меня зовут Светлана и я мастер маникюра. Нахожусь в Эль Медано. Покрытие гель лаком 20€, наращивание 25€, корекцция 20€. Все инструменты проходят стирилизацию. Разговариваю на русском, украинском и немного знаю английский.",
        location: "El Médano",
         contacts: {
          telega: 'https://t.me/+380950423296',
           whatsapp: "https://wa.me/+380950423296"
        },
      },
    ],
    nannyData: [
      {
        id: 1,
        name: "Тест",
        avatar: woman,
        about: "Я професійна няня зі стажем роботи понад 10 років. В мої обов'язки входить: купання дитини, проведення гігієни всього тіла за необхідності, годування приготованою їжею, ігри з дитиною, активна участь у її всесторонньому розвитку, прогулянки на свіжому повітрі,догляд за дитячою кімнатою, чищення дитячого одягу. Ціна моїх послуг 15€/год.",
        location: "South of Tenerife",
          contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 2,
        name: "Тест",
        avatar: woman,
        about: "Предлагаю услугу няни по сопровождению. Только с одним ребенком. Территориально только север Тенерифе. Встретить из школы, сопроводить на тренировки, в кружки, бассейн и т. д. Ваш ребенок будет под чутким присмотром. Вовремя накормлен, Переодет. Помощь в выполнении домашних заданий. Пишите, буду рада помочь!",
        location: "North of Tenerife",
          contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
        {
        id: 3,
        name: "Тест",
        avatar: woman,
        about: "Я професійна няня зі стажем роботи понад 10 років. В мої обов'язки входить: купання дитини, проведення гігієни всього тіла за необхідності, годування приготованою їжею, ігри з дитиною, активна участь у її всесторонньому розвитку, прогулянки на свіжому повітрі,догляд за дитячою кімнатою, чищення дитячого одягу. Ціна моїх послуг 15€/год.",
        location: "South of Tenerife",
          contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 4,
        name: "Тест",
        avatar: woman,
        about: "Предлагаю услугу няни по сопровождению. Только с одним ребенком. Территориально только север Тенерифе. Встретить из школы, сопроводить на тренировки, в кружки, бассейн и т. д. Ваш ребенок будет под чутким присмотром. Вовремя накормлен, Переодет. Помощь в выполнении домашних заданий. Пишите, буду рада помочь!",
        location: "North of Tenerife",
          contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
        {
        id: 5,
        name: "Тест",
        avatar: woman,
        about: "Я професійна няня зі стажем роботи понад 10 років. В мої обов'язки входить: купання дитини, проведення гігієни всього тіла за необхідності, годування приготованою їжею, ігри з дитиною, активна участь у її всесторонньому розвитку, прогулянки на свіжому повітрі,догляд за дитячою кімнатою, чищення дитячого одягу. Ціна моїх послуг 15€/год.",
        location: "South of Tenerife",
          contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 6,
        name: "Тест",
        avatar: woman,
        about: "Предлагаю услугу няни по сопровождению. Только с одним ребенком. Территориально только север Тенерифе. Встретить из школы, сопроводить на тренировки, в кружки, бассейн и т. д. Ваш ребенок будет под чутким присмотром. Вовремя накормлен, Переодет. Помощь в выполнении домашних заданий. Пишите, буду рада помочь!",
        location: "North of Tenerife",
          contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
    ],
    masseurData: [
      {
        id: 1,
        name: "Тест",
        avatar: woman,
        about: "Выполненяю различные виды массажа: лечебный (классический), антицеллюлитный, лимфодренажный.",
        location: "Santa Cruz",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 2,
        name: "Тест",
        avatar: man,
        about: "Я масажист-реабілітолог. Вже більше 8 років допомагаю людям позбутися та полегшити проблеми із ОРА, відновитися після травм і переломів, а також підтримувати свій організм у гарному стані без медикаментів. За більш детальною інформацією звертайтесь по телефону.",
        location: "Los Cristianos, Adeje, Arona",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
         {
        id: 3,
        name: "Тест",
        avatar: woman,
        about: "Выполненяю различные виды массажа: лечебный (классический), антицеллюлитный, лимфодренажный.",
        location: "Santa Cruz",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 4,
        name: "Тест",
        avatar: man,
        about: "Я масажист-реабілітолог. Вже більше 8 років допомагаю людям позбутися та полегшити проблеми із ОРА, відновитися після травм і переломів, а також підтримувати свій організм у гарному стані без медикаментів. За більш детальною інформацією звертайтесь по телефону.",
        location: "Los Cristianos, Adeje, Arona",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
         {
        id: 5,
        name: "Тест",
        avatar: woman,
        about: "Выполненяю различные виды массажа: лечебный (классический), антицеллюлитный, лимфодренажный.",
        location: "Santa Cruz",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 6,
        name: "Тест",
        avatar: man,
        about: "Я масажист-реабілітолог. Вже більше 8 років допомагаю людям позбутися та полегшити проблеми із ОРА, відновитися після травм і переломів, а також підтримувати свій організм у гарному стані без медикаментів. За більш детальною інформацією звертайтесь по телефону.",
        location: "Los Cristianos, Adeje, Arona",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
         {
        id: 7,
        name: "Тест",
        avatar: woman,
        about: "Выполненяю различные виды массажа: лечебный (классический), антицеллюлитный, лимфодренажный.",
        location: "Santa Cruz",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 8,
        name: "Тест",
        avatar: man,
        about: "Я масажист-реабілітолог. Вже більше 8 років допомагаю людям позбутися та полегшити проблеми із ОРА, відновитися після травм і переломів, а також підтримувати свій організм у гарному стані без медикаментів. За більш детальною інформацією звертайтесь по телефону.",
        location: "Los Cristianos, Adeje, Arona",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
    ],
    sportData: [
      {
        id: 1,
        name: "Тест",
        avatar: woman,
        about: "Я инструктор по йоге. С помощью специальных упражнений и дыхательных практик помогу развить гибкость и выносливость тела, научу правильно расслабляться и снимать стресс. Стоимость одной тренировки в группе 5евро. Занятия проходят на русском языке.",
        location: "Каждое утро в 9:00 на пляже Playa Paraíso",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 2,
        name: "Тест",
        avatar: man,
        about: "Я тренер з плавання. Навчу плавати правильно і швидко ваших дітей або вас. Пишіть, за ціни домовимося в особистих повідомленнях.",
        location: "Tenerife",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
        {
        id: 3,
        name: "Тест",
        avatar: woman,
        about: "Я инструктор по йоге. С помощью специальных упражнений и дыхательных практик помогу развить гибкость и выносливость тела, научу правильно расслабляться и снимать стресс. Стоимость одной тренировки в группе 5евро. Занятия проходят на русском языке.",
        location: "Каждое утро в 9:00 на пляже Playa Paraíso",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 4,
        name: "Тест",
        avatar: man,
        about: "Я тренер з плавання. Навчу плавати правильно і швидко ваших дітей або вас. Пишіть, за ціни домовимося в особистих повідомленнях.",
        location: "Tenerife",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
        {
        id: 5,
        name: "Тест",
        avatar: woman,
        about: "Я инструктор по йоге. С помощью специальных упражнений и дыхательных практик помогу развить гибкость и выносливость тела, научу правильно расслабляться и снимать стресс. Стоимость одной тренировки в группе 5евро. Занятия проходят на русском языке.",
        location: "Каждое утро в 9:00 на пляже Playa Paraíso",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 6,
        name: "Тест",
        avatar: man,
        about: "Я тренер з плавання. Навчу плавати правильно і швидко ваших дітей або вас. Пишіть, за ціни домовимося в особистих повідомленнях.",
        location: "Tenerife",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
        {
        id: 7,
        name: "Тест",
        avatar: woman,
        about: "Я инструктор по йоге. С помощью специальных упражнений и дыхательных практик помогу развить гибкость и выносливость тела, научу правильно расслабляться и снимать стресс. Стоимость одной тренировки в группе 5евро. Занятия проходят на русском языке.",
        location: "Каждое утро в 9:00 на пляже Playa Paraíso",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 8,
        name: "Тест",
        avatar: man,
        about: "Я тренер з плавання. Навчу плавати правильно і швидко ваших дітей або вас. Пишіть, за ціни домовимося в особистих повідомленнях.",
        location: "Tenerife",
           contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
    ],
    eyebrowsData: [
      {
        id: 1,
        gallery: browsGallery,
        about: "Мене звати Тест. Роблю ламінування брів якісно і шквидко. Розмовляю українською та російською. Звертайтесь в особисті!",
        location: "San Isidro",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 2,
        gallery: lashGallery,
        about: "Меня зовут Тест. Наращиваю ресницы более 5 лет. Принимаю у себя в салоне, возможен выезд на дом. Сделаю из вас красотку. Пишите!",
        location: "Alcalá",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
         {
        id: 3,
        gallery: browsGallery,
        about: "Мене звати Тест. Роблю ламінування брів якісно і шквидко. Розмовляю українською та російською. Звертайтесь в особисті!",
        location: "San Isidro",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 4,
        gallery: lashGallery,
        about: "Меня зовут Тест. Наращиваю ресницы более 5 лет. Принимаю у себя в салоне, возможен выезд на дом. Сделаю из вас красотку. Пишите!",
        location: "Alcalá",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
         {
        id: 5,
        gallery: browsGallery,
        about: "Мене звати Тест. Роблю ламінування брів якісно і шквидко. Розмовляю українською та російською. Звертайтесь в особисті!",
        location: "San Isidro",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 6,
        gallery: lashGallery,
        about: "Меня зовут Тест. Наращиваю ресницы более 5 лет. Принимаю у себя в салоне, возможен выезд на дом. Сделаю из вас красотку. Пишите!",
        location: "Alcalá",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      
    ],
    deliveryData: [
      {
        id: 1,
        name: "Тест",
        avatar: man,
        about: "Доставка еды, вещей. Юг от 15€, север от 50€. Вызов 10€. Пишите.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "",
      },
    ],
    cookData: [
       {
        id:"Tatiana+380965143333",
        gallery: cookerTatiana,
        about: "Меня зовут Татьяна и я шеф-повар. Опыт работы в ресторанном бизнесе более 10 лет, работаем качественно с соблюдением всех канонов еды. Готовим правильные, полезные и очень вкусные разнообразные блюда. Сами выпекаем хлебобулочные изделия, торты, любые десерты. Есть доставка по северу острова или самовывоз. Можем выезжать обслуживать кейтеринг (юг и север), пикники на свежем воздухе, приготовление для группы туристов, возможна готовка как у вас на дому, так и у нас.",
        location: "South and North Tenerife",
        contacts: {
          telega: 'https://t.me/+380965143333',
          whatsapp: " https://wa.me/+380965143333"
        },
      },
       {
        id:"Lena+34634495066",
        gallery: cookerLena,
        about: "Меня зовут Лена. Приготовлю и доставлю вареники с картошкой и жареным луком, с картошкой без жареного лука (нежные), с творогом соленые (добавляю укроп для вкуса) и с творогом сладкие. Пельмени свиные, свино-говяжьи, из индейки и курицы. Есть доставка по Югу (по договоренности). Цена 10-12 € за 1 кг. Могу испечь блинчики, сырники. Приготовить первые блюда включая конечно же борщ, а также плов, голубцы, котлетки(пальчики оближешь).  Знаю украинский и русский языки. ",
        location: "Tenerife South",
        contacts: {
          whatsapp: " https://wa.me/+34634495066"
        },
      },
    ],
    psychData: [
     
    ],

    interestingData: [
       {
        id: "Тетяна+380662918093",
        name: "Тетяна",
        avatar: tetianaInterest,
        about: "Виконую генеалогічний пошук, це пошук даних у архівах України, складання родового древа, генограми, і родословної взагалі. Наразі виконую віддалений онлайн пошук. Провожу консультування по збереженості документів, та перспектив пошуку. Вартість консультації - 10 євро, вартість пошуку  за однією гілкою (одне прізвище) в межах 100 років - від 80 євро, усе залежить від збереженості архівних фондів.",
        location: "Online",
           contacts: {
          telega: 'https://t.me/+380662918093',
          whatsapp: " https://wa.me/+380662918093"
        },
      },
    ]
  },
  BuyPage: 
    [
      {
        id: 1,
        text: "Продам детский манеж. В хорошем состоянии.  Размеры: 1х1 метр. Самовывоз из Parque de la Reina, Cho.",
        price: "30€",
        pictures: {
          one: productOne ,
          two: productTwo,
          three: productThree,
          four: productOne,
          five: productTwo,
        },
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },

      },
       {
        id: "Julia",
        text: "Продам красивые платья. Цены от 15 евро. Нахожусь на юге Тенерифе - Коста Адехе. Пишите пожалуйста в личные сообщения для детальной информации.",
        price: "от 15€",
        pictures: {
          one: juliaDressOne ,
          two: juliaDressTwo,
          three: juliaDressThree,
          four: juliaDressFour,
          five: juliaDressFive,
        },
        contacts: {
          telega: 'https://t.me/+34613402213',
          insta: "https://instagram.com/juliadress777?igshid=YmMyMTA2M2Y=",
        },

      },
    ]
  
};

export default state;
