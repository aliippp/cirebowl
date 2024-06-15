import type { Food } from '@/utils/types'

const foodData: Food[] = [
  {
    id: '1',
    name: 'Chicken Based',

    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    options: [
      { 'Fried chicken': 3 },
      { 'Grilled chicken': 5 },
      { 'Roasted chicken': 7 },
      { 'Chicken curry': 10 }
    ],
    price: 2.3
  },
  {
    id: '2',
    name: 'Beef Based',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    options: [{ 'Beef steak': 8.0 }, { 'Beef stew': 15 }, { 'Beef curry': 20.0 }],
    price: 3.5
  },
  {
    id: '3',
    name: 'Pork Based',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    options: [{ 'Pork chop': 2.5 }, { 'Pork stew': 2.8 }, { 'Pork curry': 3.0 }],
    price: 4.2
  },
  {
    id: '4',
    name: 'Vegetarian Meals',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    options: [{ 'Vegetable salad': 1.5 }, { 'Vegetable soup': 1.8 }, { 'Vegetable curry': 2.0 }],
    price: 2.0
  },
  {
    id: '5',
    name: 'Seafood Based',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.',
    options: [{ 'Fish fillet': 3.0 }, { 'Shrimp scampi': 3.2 }, { Calamari: 3.5 }],
    price: 5.0
  }
]

export { foodData }
