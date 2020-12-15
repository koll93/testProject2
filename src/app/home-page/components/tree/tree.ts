export const tree = [
  {
    nameButton: 'Договоры', id: '1', icon: 'https://www.jqwidgets.com/angular/images/folder.png',
    childTask: [
      {
      nameButton: 'Входящие', id: '11', icon: 'https://www.jqwidgets.com/angular/images/mailIcon.png',
        childTask: [
          {
            nameButton: 'Поставки',
            id: '111',
            icon: 'https://www.jqwidgets.com/angular/images/favorites.png'
          },
          {
            nameButton: 'Прочие',
            id: '112',
            icon: 'https://www.jqwidgets.com/angular/images/favorites.png'
          }
        ]
    },
      {
        nameButton: 'Исходящие', id: '12', icon: 'https://www.jqwidgets.com/angular/images/mailIcon.png',
        childTask: [
          {
            nameButton: 'Исходящие1',
            id: '121',
            icon: 'https://www.jqwidgets.com/angular/images/favorites.png'
          },
          {
            nameButton: 'Исходящие2',
            id: '122',
            icon: 'https://www.jqwidgets.com/angular/images/favorites.png'
          }
        ]
      }
      ]
  },
  {
    nameButton: 'Справочники', id: '2', icon: 'https://www.jqwidgets.com/angular/images/notesIcon.png',
    childTask: [{
      nameButton: 'Справочник1',
      id: '21',
      icon: 'https://www.jqwidgets.com/angular/images/notesIcon.png'
    },
      {
        nameButton: 'Справочник2',
        id: '22',
        icon: 'https://www.jqwidgets.com/angular/images/notesIcon.png'
      }]
  },
];
