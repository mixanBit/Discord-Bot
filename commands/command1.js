module.exports = async (bot, message, args, argsF) => {

  let arrayNow = [
    {
      name: 'Торт с кремом',
      image: 'https://i.ibb.co/28V31gz/tort-1.jpg'
    },
    {
      name: 'Шоколадный торт',
      image: 'https://i.ibb.co/YDkNbkV/tort-2.jpg'
    },
    {
      name: 'Клубничный торт',
      image: 'https://i.ibb.co/tz3bJ3g/tort-3.jpg'
    },
    {
      name: 'Черничный торт',
      image: 'https://i.ibb.co/q9yYSy3/tort-4.jpg'
    },
    {
      name: 'Шоколадный торт',
      image: 'https://i.ibb.co/vcqsm2g/tort-5.jpg'
    },
    {
      name: 'Шоколадный торт',
      image: 'https://i.ibb.co/MgmdG3d/tort-6.jpg'
    },
    {
      name: 'Торт с ягодами',
      image: 'https://i.ibb.co/zQhQQHV/tort-7.jpg'
    },
    {
      name: 'С ягодами',
      image: 'https://i.ibb.co/Wyg8Gw7/tort-8.jpg'
    },
    {
      name: 'Торт с цветами',
      image: 'https://i.ibb.co/0f9kVwZ/tort-9.jpg'
    },
    {
      name: 'Красочный торт',
      image: 'https://i.ibb.co/PgBySCf/tort-10.jpg'
    }
  ]

  let rand = arrayNow[Math.floor(arrayNow.length * Math.random())]

  message.channel.send({
    // content: 'pong'
    embeds: [
      {
        title: 'Торт:',
        description: rand.name,
        color: 'WHITE',
        // timestamp: new Date(),
        // author: {
        //   name: 'Автор: Mihail',
        //   url: 'http://a90679ug.beget.tech/',
        //   iconURL: 'http://a90679ug.beget.tech/photo/dark.png'
        // },
        // thumbnail: {
        //   url: 'https://im0-tub-ru.yandex.net/i?id=09011385fd94dcd9b44d3a54a996e62c-l&n=13',
        //   width: 1920,
        //   height: 1080,
        //   proxyURL: 'https://im0-tub-ru.yandex.net/i?id=09011385fd94dcd9b44d3a54a996e62c-l&n=13'
        // },
        image: {
          url: `${rand.image}`
        },
        footer: {
          text: 'Все любят тортики!!!'
        }
      }
    ]
  })
  
}
module.exports.names = ['торт']