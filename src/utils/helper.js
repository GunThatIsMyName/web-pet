const shop_list = [
  {
    id: 1,
    title: '헤어',
    name: 'hair',
  },
  {
    id: 2,
    title: '헤어핀 / 모자',
    name: 'cap',
  },
  {
    id: 3,
    title: '악세사리',
    name: 'acc',
  },
  {
    id: 4,
    title: '상의',
    name: 'tshirts',
  },
  {
    id: 5,
    title: '안경',
    name: 'glass',
  },
  {
    id: 6,
    title: '가방',
    name: 'bag',
  },
  {
    id: 7,
    title: '리본',
    name: 'ribon',
  },
];

const levelList = [
  {level: 1, icon: '🏵'},
  {level: 2, icon: '🥉'},
  {level: 3, icon: '🥈'},
  {level: 4, icon: '🏅 '},
  {level: 5, icon: '🐯 '},
  {level: 6, icon: ' 🥷🏼 '},
  {level: 7, icon: '🦹🏼‍♀️'},
  {level: 8, icon: '🧙🏼‍♀️'},
  {level: 9, icon: '🧝🏼‍♀️ '},
  {level: 10, icon: '🧛🏼‍♀️ '},
];
const medalList = (level) => {
  let newMedal;
  levelList.find((item) => {
    if (item.level === level) {
      return (newMedal = item.icon);
    }
    return null;
  });
  return newMedal;
};

const headerList = [
  {
    id: 1,
    title: 'Game',
    path: '/game',
  },
  {
    id: 2,
    title: 'Characters',
    path: '/show',
  },
  {
    id: 3,
    title: 'Logout',
  },
];

const FeaturedList = [
  {
    id: 1,
    image: 'assets/basic.png',
    name: 'basic-character',
    subTitle: '기본 캐릭터 !',
  },
  {
    id: 2,
    image: 'assets/featured1.png',
    name: 'Clothes',
    subTitle: '돈모아서 옷을 고르고 ,',
  },
  {
    id: 3,
    image: 'assets/featured2.png',
    name: 'Hair',
    subTitle: '돈 또 모아서 머리를 고르고 ,',
  },
  {
    id: 4,
    image: 'assets/featured3.png',
    name: 'Bag',
    subTitle: '가방을 고르고 ,',
  },
  {
    id: 5,
    image: 'assets/featured4.png',
    name: 'Acc',
    subTitle: '악세사리를 고르고 ,',
  },
  {
    id: 6,
    image: 'assets/featured5.png',
    name: 'Hat',
    subTitle: '모자를 고르고 ,',
  },
  {
    id: 7,
    image: 'assets/featured6.png',
    name: 'Glass',
    subTitle: '영끌해서 안경을 고르고 ,',
  },
  {
    id: 8,
    image: 'assets/featured7.png',
    name: 'Ribbon',
    subTitle: '만렙찍어서 리본을 고르고 ,',
  },
];

const home = 'assets/header.png';
export {shop_list, medalList, headerList, FeaturedList, home};
