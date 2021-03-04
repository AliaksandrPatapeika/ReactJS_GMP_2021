import image01 from '../img/posters/01-pulp-fiction.jpg';
import image02 from '../img/posters/02-bohemian-rhapsody.jpg';
import image03 from '../img/posters/03-kill-bill.jpg';
import image04 from '../img/posters/04-avengers-infinity-war.jpg';
import image05 from '../img/posters/05-inception.jpg';
import image06 from '../img/posters/06-reservoir-dogs.jpg';

export const MockMovies = [
  {
    id: 1,
    url: image01,
    description: 'Pulp Fiction',
    year: 2004,
    genre: 'Action & Adventure'
  },
  {
    id: 2,
    url: image02,
    description: 'Bohemian Rhapsody',
    year: 2003,
    genre: 'Drama, Biography, Music'
  },
  {
    id: 3,
    url: image03,
    description: 'Kill Bill: Vol 2',
    year: 1994,
    genre: 'Oscar winning Movie'
  },
  {
    id: 4,
    url: image04,
    description: 'Avengers: War of Infinity',
    year: 2004,
    genre: 'Action & Adventure'
  },
  {
    id: 5,
    url: image05,
    description: 'Inception',
    year: 2003,
    genre: 'Action & Adventure'
  },
  {
    id: 6,
    url: image06,
    description: 'Reservoir dogs',
    year: 1994,
    genre: 'Oscar winning Movie'
  }
];

export const MockResultCount = 39;

// eslint-disable-next-line no-console
export const MockOnClick = (button) => console.log(`Clicked from "${button}"`);
