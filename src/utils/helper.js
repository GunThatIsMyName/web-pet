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
  {level:1,icon:"🏵"},
  {level:2,icon:"🥉"},
  {level:3,icon:"🥈"},
  {level:4,icon:"🏅 "},
  {level:5,icon:"🐯 "},
  {level:6,icon:" 🥷🏼 "},
  {level:7,icon:"🦹🏼‍♀️"},
  {level:8,icon:"🧙🏼‍♀️"},
  {level:9,icon:"🧝🏼‍♀️ "},
  {level:10,icon:"🧛🏼‍♀️ "},
]
const medalList = (level)=>{
  let newMedal;
  levelList.find(item=>{
      if(item.level === level){
        return newMedal=item.icon;
      }
      return null;
  })
  return newMedal
}




export {shop_list,medalList};
