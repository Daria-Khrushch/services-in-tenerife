import man from "./../images/men.png";
import woman from "./../images/woman.png";
import hairdresserGalleryOne from './../images/photo_2022-10-03_18-31-25.jpg';
import hairdresserGalleryTwo from './../images/photo_2022-10-03_18-34-42.jpg';
import radmiraManicur from './../images/manicur/radmira.jpg';
// import maniGalleryTwo from './../images/man-two.jpg';
import browsGallery from './../images/brows.jpg';
import lashGallery from './../images/lash.jpg'


const state = {
  ServicesPage: {
    cleaningData: [
      {
        id: 1,
        name: "Тест",
        avatar: woman,
        about:
          "Вологе та сухе прибирання приміщень, миття вікон, фасаду, мийка санвузла, заміна пакетів в урнах. Розмовляю українською та російською.",
        location: "Los Cristianos, Adeje, Arona",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
        price: "10€/год.",
      },
      {
        id: 2,
        name: "Тест",
        avatar: man,
        about:
          "Трудолюбивый, активный и исполнительный. Поддержание чистоты и уборка помещений. Разговариваю на испанском, русском и украинском.",
        location: "Las Caletillas, Candelaria",
        contacts: "+3400002",
        price: "15€/год.",
      },
      {
        id: 3,
        name: "Тест",
        avatar: woman,
        about:
          "Вологе та сухе прибирання приміщень, миття вікон, фасаду, мийка санвузла, заміна пакетів в урнах. Розмовляю українською та російською.",
        location: "Los Cristianos, Adeje, Arona",
        contacts: "+3400000",
        price: "10€/год.",
      },
      {
        id: 4,
        name: "Тест",
        avatar: man,
        about:
          "Трудолюбивый, активный и исполнительный. Поддержание чистоты и уборка помещений. Разговариваю на испанском, русском и украинском.",
        location: "Las Caletillas, Candelaria",
        contacts: "+3400002",
        price: "15€/год.",
      },
      {
        id: 5,
        name: "Тест",
        avatar: woman,
        about:
          "Вологе та сухе прибирання приміщень, миття вікон, фасаду, мийка санвузла, заміна пакетів в урнах. Розмовляю українською та російською.",
        location: "Los Cristianos, Adeje, Arona",
        contacts: "+3400000",
        price: "10€/год.",
      },
      {
        id: 6,
        name: "Тест",
        avatar: man,
        about:
          "Трудолюбивый, активный и исполнительный. Поддержание чистоты и уборка помещений. Разговариваю на испанском, русском и украинском.",
       location: "Las Caletillas, Candelaria",
        contacts: "+3400002",
        price: "15€/год.",
      },
      {
        id: 7,
        name: "Тест",
        avatar: woman,
        about:
          "Вологе та сухе прибирання приміщень, миття вікон, фасаду, мийка санвузла, заміна пакетів в урнах. Розмовляю українською та російською.",
        location: "Los Cristianos, Adeje, Arona",
        contacts: "+3400000",
        price: "10€/год.",
      },
      {
        id: 8,
        name: "Тест",
        avatar: man,
        about:
          "Трудолюбивый, активный и исполнительный. Поддержание чистоты и уборка помещений. Разговариваю на испанском, русском и украинском.",
       location: "Las Caletillas, Candelaria",
        contacts: "+3400002",
        price: "15€/год.",
      },
      {
        id: 9,
        name: "Тест",
        avatar: woman,
        about:
          "Вологе та сухе прибирання приміщень, миття вікон, фасаду, мийка санвузла, заміна пакетів в урнах. Розмовляю українською та російською.",
        location: "Los Cristianos, Adeje, Arona",
        contacts: "+3400000",
        price: "10€/год.",
      },
      {
        id: 10,
        name: "Тест",
        avatar: man,
        about:
          "Трудолюбивый, активный и исполнительный. Поддержание чистоты и уборка помещений. Разговариваю на испанском, русском и украинском.",
        location: "Las Caletillas, Candelaria",
        contacts: "+3400002",
        price: "15€/год.",
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
        id: 1,
        gallery: hairdresserGalleryOne,
        about: "Мене звати Тест. Роблю стрижки та покраску волосся. Розмовляю українською та іспанською. Ціни помірні.",
        location: "San Isidro",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 2,
        gallery: hairdresserGalleryTwo,
        about: "Меня зовут Тест. Я парикмахер-колорист с опытом работы более 5 лет. Принимаю на дому. Сделаю из вас красотку. Пишите!",
        location: "Alcalá",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },

      },
       {
        id: 3,
        gallery: hairdresserGalleryOne,
        about: "Мене звати Тест. Роблю стрижки та покраску волосся. Розмовляю українською та іспанською. Ціни помірні.",
        location: "San Isidro",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 4,
        gallery: hairdresserGalleryTwo,
        about: "Меня зовут Тест. Я парикмахер-колорист с опытом работы более 5 лет. Принимаю на дому. Сделаю из вас красотку. Пишите!",
        location: "Alcalá",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },

      },
       {
        id: 5,
        gallery: hairdresserGalleryOne,
        about: "Мене звати Тест. Роблю стрижки та покраску волосся. Розмовляю українською та іспанською. Ціни помірні.",
        location: "San Isidro",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 6,
        gallery: hairdresserGalleryTwo,
        about: "Меня зовут Тест. Я парикмахер-колорист с опытом работы более 5 лет. Принимаю на дому. Сделаю из вас красотку. Пишите!",
        location: "Alcalá",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },

      },
       {
        id: 7,
        gallery: hairdresserGalleryOne,
        about: "Мене звати Тест. Роблю стрижки та покраску волосся. Розмовляю українською та іспанською. Ціни помірні.",
        location: "San Isidro",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },
      },
      {
        id: 8,
        gallery: hairdresserGalleryTwo,
        about: "Меня зовут Тест. Я парикмахер-колорист с опытом работы более 5 лет. Принимаю на дому. Сделаю из вас красотку. Пишите!",
        location: "Alcalá",
        contacts: {
          telega: 'https://t.me/Made_in_Ukrai',
          whatsapp: " https://wa.me/+34604379859"
        },

      },
      
    ],
    manicuristData: [
      {
        id: "Radmira",
        gallery: radmiraManicur,
        about: "Меня зовут Радмира. Делаю педикюр и маникюр на севере острова в Icod de los Vinos. Возможен выезд в ближайшие города. Маникюр+гель лак 30€. Педикюр+гель лак 35€.  Опыт работы 6 лет. Сухожар, одноразовые расходные материалы. Одноразовые фрезы для педикюра. Говорю на русском, испанском, немного на казахском. Мои работы можно посмотреть ",
        location: "Tenerife North, Icod de los Vinos",
         contacts: {
          telega: 'https://t.me/+34689673169',
           whatsapp: "https://wa.me/+34689673169",
          instagram: "https://instagram.com/nails_caxar_tenerife?igshid=YmMyMTA2M2Y="
        },
      },
      // {
      //   id: 2,
      //   gallery: maniGalleryTwo,
      //   about: " Меня зовут Ольга и я дипломированный мастер маникюра, педикюра, наращивания ногтей, покрытия шеллаком (более 70 цветов в коллекции) и биогелем, наращивания.",
      //   location: "Santa Cruz",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
      // {
      //   id: 3,
      //   gallery: maniGalleryOne,
      //   about: "Я Олена. Роблю апаратний або обрізний манікюр і педикюр, лікую та поліпшую рост нігтьових пластин, роблю нарощування нігтів та корекцію, створюю різні види манікюру та педикюру.",
      //   location: "Fraile",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
      // {
      //   id: 4,
      //   gallery: maniGalleryTwo,
      //   about: " Меня зовут Ольга и я дипломированный мастер маникюра, педикюра, наращивания ногтей, покрытия шеллаком (более 70 цветов в коллекции) и биогелем, наращивания.",
      //   location: "Santa Cruz",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
      // {
      //   id: 5,
      //   gallery: maniGalleryOne,
      //   about: "Я Олена. Роблю апаратний або обрізний манікюр і педикюр, лікую та поліпшую рост нігтьових пластин, роблю нарощування нігтів та корекцію, створюю різні види манікюру та педикюру.",
      //   location: "Fraile",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
      // {
      //   id: 6,
      //   gallery: maniGalleryTwo,
      //   about: " Меня зовут Ольга и я дипломированный мастер маникюра, педикюра, наращивания ногтей, покрытия шеллаком (более 70 цветов в коллекции) и биогелем, наращивания.",
      //   location: "Santa Cruz",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
      // {
      //   id: 7,
      //   gallery: maniGalleryOne,
      //   about: "Я Олена. Роблю апаратний або обрізний манікюр і педикюр, лікую та поліпшую рост нігтьових пластин, роблю нарощування нігтів та корекцію, створюю різні види манікюру та педикюру.",
      //   location: "Fraile",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
      // {
      //   id: 8,
      //   gallery: maniGalleryTwo,
      //   about: " Меня зовут Ольга и я дипломированный мастер маникюра, педикюра, наращивания ногтей, покрытия шеллаком (более 70 цветов в коллекции) и биогелем, наращивания.",
      //   location: "Santa Cruz",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
      // {
      //   id: 9,
      //   gallery: maniGalleryOne,
      //   about: "Я Олена. Роблю апаратний або обрізний манікюр і педикюр, лікую та поліпшую рост нігтьових пластин, роблю нарощування нігтів та корекцію, створюю різні види манікюру та педикюру.",
      //   location: "Fraile",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
      // {
      //   id: 10,
      //   gallery: maniGalleryTwo,
      //   about: " Меня зовут Ольга и я дипломированный мастер маникюра, педикюра, наращивания ногтей, покрытия шеллаком (более 70 цветов в коллекции) и биогелем, наращивания.",
      //   location: "Santa Cruz",
      //    contacts: {
      //     telega: 'https://t.me/Made_in_Ukrai',
      //     whatsapp: " https://wa.me/+34604379859"
      //   },
      // },
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
    ]
    
  }
};

export default state;
