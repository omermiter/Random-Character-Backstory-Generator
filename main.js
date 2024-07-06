const professions = [
    'librarian', 'detective', 'chef', 'astronaut', 'teacher',
    'artist', 'doctor', 'mechanic', 'writer', 'athlete'
];

const traits = [
    'with a photographic memory', 'who can talk to animals',
    'with an irrational fear of doorknobs', 'who never sleeps',
    'with a mysterious tattoo', 'who can see ghosts',
    'with an uncanny sense of direction', 'who is allergic to water',
    'with the ability to predict the weather', 'who only speaks in rhymes'
];

const lifeEvents = [
    'survived a shipwreck', 'won the lottery',
    'was raised by wolves', 'discovered a new element',
    'traveled through time', 'solved a centuries-old mystery',
    'accidentally became a viral meme', 'inherited a haunted mansion',
    'swapped bodies with their arch-nemesis', 'founded a secret society'
];


function GrabRandomElement(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}



console.log(`A ${GrabRandomElement(professions)} ${GrabRandomElement(traits)} that ${GrabRandomElement(lifeEvents)}`);


