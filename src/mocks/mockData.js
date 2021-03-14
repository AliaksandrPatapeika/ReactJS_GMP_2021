import image01 from '../img/posters/01-pulp-fiction.jpg';
// import image02 from '../img/posters/02-bohemian-rhapsody.jpg';
import image03 from '../img/posters/03-kill-bill.jpg';
import image04 from '../img/posters/04-avengers-infinity-war.jpg';
import image05 from '../img/posters/05-inception.jpg';
import image06 from '../img/posters/06-reservoir-dogs.jpg';

export const MockMovies = [
  {
    id: 1,
    movieURL: image01,
    name: 'Pulp Fiction',
    releaseDate: '2004-03-15',
    genre: 'Action & Adventure',
    runtime: 154,
    rating: 4.3,
    overview: 'Pulp Fiction is a 1994 American neo-noir black comedy crime film written and directed by Quentin Tarantino, who conceived it with Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The title refers to the pulp magazines and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.'
  },
  {
    id: 2,
    // movieURL: image02,
    name: 'Bohemian Rhapsody',
    releaseDate: '2003-05-23',
    genre: 'Drama, Biography, Music'
  },
  {
    id: 3,
    movieURL: image03,
    name: 'Kill Bill: Vol 2',
    releaseDate: '1994-01-08',
    genre: 'Oscar winning Movie',
    runtime: 122,
    rating: 4.7,
    overview: 'Kill Bill: Volume 2 is a 2004 American martial arts film written and directed by Quentin Tarantino. It stars Uma Thurman as the Bride, who continues her campaign of revenge against the Deadly Viper Assassination Squad (Lucy Liu, Michael Madsen, Daryl Hannah, and Vivica A. Fox) and their leader Bill (David Carradine), who tried to kill her and her unborn child.'
  },
  {
    id: 4,
    movieURL: image04,
    name: 'Avengers: War of Infinity',
    releaseDate: '2004-07-21',
    genre: 'Action & Adventure',
    runtime: 98,
    rating: 4.2,
    overview: 'Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team the Avengers. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to The Avengers (2012) and Avengers: Age of Ultron (2015), and the 19th film in the Marvel Cinematic Universe (MCU). Directed by Anthony and Joe Russo and written by Christopher Markus and Stephen McFeely, the film features an ensemble cast including Robert Downey Jr., Chris Hemsworth, Mark Ruffalo, Chris Evans, Scarlett Johansson, Benedict Cumberbatch, Don Cheadle, Tom Holland, Chadwick Boseman, Paul Bettany, Elizabeth Olsen, Anthony Mackie, Sebastian Stan, Danai Gurira, Letitia Wright, Dave Bautista, Zoe Saldana, Josh Brolin, and Chris Pratt. In the film, the Avengers and the Guardians of the Galaxy attempt to prevent Thanos from collecting the six all-powerful Infinity Stones as part of his quest to kill half of all life in the universe.'
  },
  {
    id: 5,
    movieURL: image05,
    name: 'Inception',
    releaseDate: '2003-05-02',
    genre: 'Action & Adventure',
    runtime: 105,
    rating: 4.5,
    overview: 'Inception is a 2010 science fiction action film[4][5][6] written and directed by Christopher Nolan, who also produced the film with his wife, Emma Thomas. The film stars Leonardo DiCaprio as a professional thief who steals information by infiltrating the subconscious of his targets. He is offered a chance to have his criminal history erased as payment for the implantation of another person\'s idea into a target\'s subconscious.[7] The ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt, Marion Cotillard, Elliot Page,[a] Tom Hardy, Dileep Rao, Cillian Murphy, Tom Berenger, and Michael Caine.'
  },
  {
    id: 6,
    movieURL: image06,
    name: 'Reservoir dogs',
    releaseDate: '1994-11-30',
    genre: 'Oscar winning Movie',
    runtime: 113,
    rating: 4.1,
    overview: 'Reservoir Dogs is a 1992 American crime film written and directed by Quentin Tarantino in his feature-length debut. It stars Harvey Keitel, Tim Roth, Chris Penn, Steve Buscemi, Lawrence Tierney, Michael Madsen, Tarantino, and Edward Bunker as diamond thieves whose planned heist of a jewelry store goes terribly wrong. The film depicts the events before and after the heist. Kirk Baltz, Randy Brooks, and Steven Wright also play supporting roles. It incorporates many motifs that have become Tarantino\'s hallmarks: violent crime, pop culture references, profanity, and nonlinear storytelling.'
  }
];

export const MockResultCount = 39; // 0 for testing No Movies found page

// eslint-disable-next-line no-console
export const MockOnClick = (button, attrs) => console.log(`Clicked from "${button}"`, attrs);
