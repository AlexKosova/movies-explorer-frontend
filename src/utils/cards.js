const cards = [
  {
    image: 'https://sun9-32.userapi.com/impg/afR05Fc9peGMEwqAmD7Hn7-hfTy6FdzfxBAnhg/P2Tl0R1n_so.jpg?size=270x151&quality=95&sign=51c6e896c194ecd1c65d66260d0a0bc6&type=album',
    title: 'Киноальманах «100 лет дизайна»',
    time: '120',
    saved: true,
  },
  {
    image: 'https://sun9-55.userapi.com/impg/f9CHuJH1FRTepN5eczRkq9tAd9zhYVw4bC5gtg/1FZQ9p-1r2Y.jpg?size=270x151&quality=95&sign=ea5266b7ddbfc310417a37e73c449c17&type=album',
    title: '33 слова о дизайне',
    time: '142',
    saved: true,
  },
  {
    image: 'https://sun9-68.userapi.com/impg/Ba037Q4RKoST-jdkBfVac6dFitjk93JapBAJMw/bvSmyN6l4Cs.jpg?size=270x151&quality=95&sign=576cc9414f27498438804391c4654e63&type=album',
    title: 'В погоне за Бенкси',
    time: '164',
    saved: false,
  },
  {
    image: 'https://sun9-77.userapi.com/impg/j80gifPdGIKbTm5GDDiFfjfrb3KBMzsvUIKtSg/HjEyr8VgU4I.jpg?size=270x151&quality=95&sign=05a3839b127599ebe1268367832e19db&type=album',
    title: 'Баския: Взрыв реальности',
    time: '188',
    saved: true,
  },
  {
    image: 'https://sun9-69.userapi.com/impg/p2id5pcoRiWbAXRXcHqRDLxy34VOUGeNlNhAkw/5GmPf6Bbzro.jpg?size=270x151&quality=95&sign=5a1acd9e85e2563b3835dcb97f04b872&type=album',
    title: 'Бег это свобода',
    time: '162',
    saved: false,
  },
  {
    image: 'https://sun9-7.userapi.com/impg/YIUgNUm4PntKQ3jUKtYoJKWZGK3u9InUWXiyRw/rb-d7B2-VH4.jpg?size=270x151&quality=95&sign=5697926ce52151a65f195f575744a0a3&type=album',
    title: 'Книготорговцы',
    time: '54',
    saved: true,
  },
  {
    image: 'https://sun9-17.userapi.com/impg/-r-JLsRNjrEgPrwp_kXyvsBNi0G8J77nDY7mLg/SMyrGZl6CLQ.jpg?size=270x151&quality=95&sign=f822490b52b1470fff2ecd2a2ee59592&type=album',
    title: 'Когда я думаю о Германии ночью',
    time: '76',
    saved: false,
  },
  {
    image: 'https://sun9-10.userapi.com/impg/_y93HtDgP_1Wrirzm9nT-o0q5Daz2yBTBUEzMQ/hhxCLQ5mCRg.jpg?size=270x151&quality=95&sign=60a1994be54fd79ab908cd850dabf707&type=album',
    title: 'Gimme Danger: История Игги и The Stooges',
    time: '58',
    saved: true,
  },
  {
    image: 'https://sun9-17.userapi.com/impg/C3ypIQeCgDU2mYEi1hDVdNVN6KEfeFJE65uVBA/Mi729GkGhXk.jpg?size=270x151&quality=95&sign=41398612996bd2e44794986b76a3b1b1&type=album',
    title: 'Дженис: Маленькая девочка грустит',
    time: '48',
    saved: false,
  },
  {
    image: 'https://sun9-33.userapi.com/impg/sH6qxftNOVEMrWP2eYN0NE27wmEXqZbEjzbvqg/jrLbBEW_VJc.jpg?size=270x151&quality=95&sign=4e0c91c8936a28d685e5ef126441aa02&type=album',
    title: 'Соберись перед прыжком',
    time: '92',
    saved: true,
  },
  {
    image: 'https://sun9-13.userapi.com/impg/WjSNe7R5MpHANgUvhp86w8clPuzF4OOhLLI3Vg/3U7cabJdC3c.jpg?size=270x151&quality=95&sign=19e465511d18745851dd3db6603ca17f&type=album',
    title: 'Пи Джей Харви: A dog called money',
    time: '77',
    saved: true,
  },
  {
    image: 'https://sun9-25.userapi.com/impg/tEQ67S_1coygWassdCIseRJ8DD4jVuCkifxASw/Go_j11ZxiAs.jpg?size=270x151&quality=95&sign=1bd431710ef6bcaca0e17d4cd7583197&type=album',
    title: 'По волнам: Искусство звука в кино',
    time: '233',
    saved: false,
  },
  {
    image: 'https://sun9-77.userapi.com/impg/79TwEtNGnJ5-wK4h4NFYnHPaFbukHoAA9E5DdQ/EK4YGjM7uLY.jpg?size=270x151&quality=95&sign=56c14b376eb9601d27ae6da8b2bf2410&type=album',
    title: 'Рудбой',
    time: '59',
    saved: false,
  },
  {
    image: 'https://sun9-48.userapi.com/impg/ia8Jt6KrA1Dlklj5oMvmLRcxjYbzw5UH3hxUGQ/_sJTUXs7hh8.jpg?size=270x151&quality=95&sign=1e8e2e65ee5c605bb8c2ff21df47c7de&type=album',
    title: 'Скейт — кухня',
    time: '60',
    saved: false,
  },
  {
    image: 'https://sun9-15.userapi.com/impg/STmHc6M5m4O33_dJliW2YAqTa3rlBFOk1sTt_A/TUKarsAeBnQ.jpg?size=270x151&quality=95&sign=c6945e82e6609f4a923655f02168b5c0&type=album',
    title: 'Война искусств',
    time: '163',
    saved: true,
  },
  {
    image: 'https://sun9-12.userapi.com/impg/JLk7haQEpTOKQKtgEmbHDDstXtR0htfzBoatvQ/65o0JlvUIFY.jpg?size=270x151&quality=95&sign=1f1a1d4ad6944f6ed760c955fe11d8a7&type=album',
    title: 'Зона',
    time: '45',
    saved: false,
  },
  {
    image: 'https://sun9-12.userapi.com/impg/JLk7haQEpTOKQKtgEmbHDDstXtR0htfzBoatvQ/65o0JlvUIFY.jpg?size=270x151&quality=95&sign=1f1a1d4ad6944f6ed760c955fe11d8a7&type=album',
    title: 'Зона',
    time: '45',
    saved: false,
  },
];

export default cards;
