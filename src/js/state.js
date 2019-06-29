export default {
  tarifs: [
    {
      name: 'mobile',
      img: 'device.svg',
      descr: 'Get notifications about new releases in our mobile app.',
      price: '10',
    },
    {
      name: 'desktop',
      img: 'laptop.svg',
      descr: 'Enjoy new episodes on your laptop in browser with our web service, which supports all the platforms.',
      price: '15',
    },
    {
      name: 'tv',
      img: 'monitor.svg',
      descr: 'Watch your favourite series at home on large screen with our TV application.',
      price: '20',
    },
    // {
    //   name: 'tv',
    //   img: 'monitor.svg',
    //   descr: 'Watch your favourite series at home on large screen with our TV application.',
    //   price: '20',
    // },
  ],
  modal: {
    isOpen: false,
    tarif: null,
  },
};
