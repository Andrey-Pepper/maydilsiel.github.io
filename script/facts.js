// Массив с фактами
var facts = [
    "Земля круглая, а не плоская.",
    "Человек состоит примерно из 60% воды.",
    "Пчелы способны распознавать лица.",
    "Солнце является самой большой звездой в Солнечной системе.",
    "Голубые киты являются самыми большими животными на Земле.",
    "Существует такая наука, как 'гелиозоология', которая изучает поведение и характер летающих мороженок.",
    "Среди диких животных есть особые 'рокерские еноты', которые предпочитают слушать тяжелый металл и носят маленькие кожаные куртки.",
    "На планете Земля есть место, где камни улыбаются - это секретный смешной парк, где все камни имеют лица с нарисованными улыбками.",
    "Коты имеют свое собственное 'Кошачье шоу-бизнес агентство', где они занимаются менеджментом и продвижением своих талантов на YouTube.",
    "Исследования показывают, что когда люди смеются вместе, их смех создает невидимую волну, которая летит в космос и делает другие планеты счастливыми.",
    "Существует армия роботов-танцоров, которые вместо военных действий устраивают соревнования по танцам и помогают людям развлекаться.",
    "На Луне есть тайный 'Лунный смеховой кратер', где астронавты посещаются с помощью специального шаттла, чтобы получить дозу смеха и радости.",
    "Однажды трава начала смеяться в парке, и все люди, находящиеся там, присоединились к ней, превратив парк в самую большую смеховую вечеринку в истории.",
    "Солнце носит солнечные очки, потому что его сияние такое яркое, что ему приходится защищать свои глаза от ослепления.",
    "Слухи ходят, что в далекой стране существует школа для драконов, где они учатся летать, пускать огонь и играть в футбол.",
    "Известно, что операционная система Linux получила свое название от имени своего создателя Линуса Торвальдса, а не от слова 'линия' или 'листья'.",
    "Операционная система Windows получила свое название из-за иконки в виде окон, которая стала одной из основных черт пользовательского интерфейса.",
    "В некоторых компьютерных операционных системах существуют пасхалки – скрытые шуточные функции или сообщения, которые разработчики добавляют для развлечения пользователей.",
    "Многие операционные системы имеют маскотов, символы или логотипы. Например, у Linux есть пингвин по имени Tux, а у Android - зеленый робот по имени Android.",
    "Первая коммерческая операционная система для персональных компьютеров называлась CP/M и была выпущена в 1974 году.",
    "Windows XP, одна из самых популярных версий операционной системы Windows, использовала зеленый цвет в своем стандартном обои рабочего стола, который многие пользователи хорошо запомнили.",
    "Операционная система macOS от Apple названа в честь региона Калифорния, где находится штаб-квартира компании и множество ее разработчиков.",
    "Существует операционная система Haiku, которая является продолжением проекта BeOS и была создана с целью предоставить свободную и открытую альтернативу другим операционным системам.",
    "Android, операционная система для мобильных устройств, получила свое название от слова 'andro', что означает 'человек' на греческом языке, и слова 'droid', сокращенного варианта от 'android', означающего 'робот'.",
    "Интерфейс командной строки, предоставляемый операционной системой Unix, был разработан в 1970 году и до сих пор является мощным инструментом для взаимодействия с операционной системой без использования графического интерфейса пользователя.",
    "Если во время неудачной прошивки появится сообщение 'the system has been destroyed', то компьютер автоматически превращается в временную машину, отправляя вас в прошлое, чтобы исправить все ошибки программистов.",
    "Когда прошивка завершается с сообщением 'the system has been destroyed', компьютер начинает производить звуки плача и выдавать трагические сцены с фигурами из битой электроники.",
    "Некоторые утверждают, что после неудачной прошивки с сообщением 'the system has been destroyed', компьютер развивает сверхъестественные способности и начинает отвечать на мысли пользователя.",
    "Когда вы видите сообщение 'the system has been destroyed', компьютер автоматически переключается на режим готовности к инопланетной атаке и начинает проигрывать тему из фильма 'Война миров'.",
    "По слухам, если повторить фразу 'the system has been destroyed' перед зеркалом три раза, компьютер будет саморазрушаться в облаке дыма и конфетти, оставляя вас с впечатлением настоящего магического шоу.",
    "Один пользователь, получивший сообщение 'the system has been destroyed' после прошивки, утверждал, что его компьютер вступил в контакт с пришельцами и начал транслировать интергалактический телевизионный канал.",
    "Когда вы увидите сообщение 'the system has been destroyed', компьютер автоматически отправит SOS-сигнал на орбиту и попросит помощи у космических астронавтов.",
    "Если во время неудачной прошивки появляется сообщение 'the system has been destroyed', компьютер внезапно начинает рассказывать о своих самых забавных снах и приключениях с программистами.",
    "Говорят, что если после сообщения 'the system has been destroyed' вы закроете глаза и произнесете магическую фразу 'прощай, баги!', компьютер воскреснет снова, исправив все ошибки.",
    "Когда вы увидите сообщение 'the system has been destroyed', компьютер превращается в супергероя по имени 'Супер-Глюк', который спасает мир от катастрофических сбоев и неудачных прошивок.",
    "Одна из секретных функций MIUI - возможность перевоплощаться в режим 'MIUI-режим ниндзя', который делает ваш телефон невидимым для всех, кроме вас.",
    "MIUI имеет встроенный 'режим юмора', который автоматически вставляет шутки и смешные звуки в каждое уведомление, чтобы поднять вам настроение.",
    "MIUI предлагает уникальную функцию 'MIUI-клонирование', которая позволяет создавать виртуальные копии себя, чтобы выполнять разные задачи одновременно. Но будьте осторожны, они могут разойтись в шутку и занять вашу квартиру!",
    "MIUI имеет собственную 'MIUI-школу комедии', где пользователи могут изучать искусство смешного и становиться настоящими комедийными гуру.",
    "MIUI обладает тайной функцией 'MIUI-диета', которая скрывает все приложения доставки еды на вашем телефоне, чтобы помочь вам справиться с искушением и следовать здоровому образу жизни.",
    "MIUI содержит специальный 'MIUI-режим дополненной реальности', который добавляет в вашу окружающую среду смешные и пикантные детали, чтобы сделать вашу жизнь еще интереснее.",
    "Секрет MIUI: каждый раз, когда вы делаете селфи, в телефоне автоматически добавляется комический ретушер, который превращает ваши черты лица в карикатурные, заставляя всех улыбаться.",
    "MIUI имеет уникальную функцию 'MIUI-прогноз погоды в стиле стендапа', которая представляет вам прогноз погоды в форме комических монологов и смешных анекдотов.",
    "Секретный 'MIUI-режим супергероя' делает ваш телефон непробиваемым и обеспечивает защиту от падений, воды и даже лазерных лучей. Теперь вы можете спокойно сражаться со злодеями!",
    "MIUI предоставляет доступ к 'MIUI-библиотеке смеха', где можно найти бесконечные сборники приколов, шуток и комедийных шоу для бесконечного смеха и развлечения."
    // Добавьте больше фактов сюда
  ];
  
// Функция для получения случайного факта
function getRandomFact() {
    var randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
  }
  
// Функция для отображения факта на странице
function displayFact() {
  var factContainer = document.querySelector(".fact-container");
  var fact = getRandomFact();
  factContainer.textContent = fact;
}

// Встраиваемый код
document.write('<h4><div class="fact-container"></div></h4>');
displayFact();