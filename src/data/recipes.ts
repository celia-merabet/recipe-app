import { Recipe } from '../types/Recipe';

const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Spaghetti Carbonara',
    prepTime: '20 min',
    difficulty: 'Facile',
    image: 'https://images.unsplash.com/photo-1588013273468-315fd88ea34c',
    ingredients: ['Spaghetti', 'Oeufs', 'Parmesan', 'Lardons', 'Poivre']
  },
  {
    id: '2',
    title: 'Poulet Curry',
    prepTime: '35 min',
    difficulty: 'Moyen',
    image: 'https://images.unsplash.com/photo-1604908176997-431d3b1e0baf',
    ingredients: ['Poulet', 'Lait de coco', 'Curry', 'Oignon', 'Riz']
  },
  {
    id: '3',
    title: 'Salade César',
    prepTime: '15 min',
    difficulty: 'Facile',
    image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9',
    ingredients: ['Salade', 'Poulet', 'Parmesan', 'Croutons', 'Sauce césar']
  },
  {
    id: '4',
    title: 'Tacos Mexicains',
    prepTime: '25 min',
    difficulty: 'Moyen',
    image: 'https://images.unsplash.com/photo-1617196032182-6f0a35c97920',
    ingredients: ['Tortillas', 'Viande hachée', 'Laitue', 'Tomate', 'Fromage', 'Salsa']
  },
  {
    id: '5',
    title: 'Pancakes aux myrtilles',
    prepTime: '30 min',
    difficulty: 'Facile',
    image: 'https://images.unsplash.com/photo-1587730168040-03e2be3fcd9c',
    ingredients: ['Farine', 'Lait', 'Oeufs', 'Sucre', 'Myrtilles', 'Beurre']
  }
];

export default recipes;