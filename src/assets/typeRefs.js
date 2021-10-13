const commonLink = (type, thumbNumber) =>
  `https://upload.wikimedia.org/wikipedia/commons/thumb/${thumbNumber}/Pok%C3%A9mon_${type}_Type_Icon.svg/120px-Pok%C3%A9mon_${type}_Type_Icon.svg.png`;

  const typeRefs = {
  fire: [
    commonLink('Fire', '5/56'),
    'rgb(255,152,63)',
  ],
  water: [
    commonLink('Water', '0/0b'),
    'rgb(50,147,220)',
  ],
  electric: [
    commonLink('Electric', 'a/a9'),
    'rgb(251,210,1)',
  ],
  dragon: [
    commonLink('Dragon', 'a/a6'),
    'rgb(0,111,202)',
  ],
  poison: [
    commonLink('Poison', 'c/c4'),
    'rgb(182,103,207)',
  ],
  psychic: [
    commonLink('Psychic', 'a/ab'),
    'rgb(255,102,118)',
  ],
  bug: [
    commonLink('Bug', '3/3c'),
    'rgb(132,196,0)',
  ],
  normal: [
    commonLink('Normal', 'a/aa'),
    'rgb(146,155,162)',
  ],
  grass: [
    commonLink('Grass', 'f/f6'),
    'rgb(53,190,75)',
  ],
  flying: [
    commonLink('Flying', 'e/e0'),
    'rgb(138,172,228)',
  ],
  dark: [
    commonLink('Dark', '0/09'),
    'rgb(91,83,102)',
  ],
  fairy: [
    commonLink('Fairy', '0/08'),
    'rgb(251,138,236)',
  ],
  fighting: [
    commonLink('Fighting', 'b/be'),
    'rgb(224,45,106)',
  ],
  ghost: [
    commonLink('Ghost', 'a/a0'),
    'rgb(75,107,178)',
  ],
  ground: [
    commonLink('Ground', '8/8d'),
    'rgb(232,114,51)',
  ],
  ice: [
    commonLink('Ice', '8/88'),
    'rgb(74,211,193)',
  ],
  rock: [
    commonLink('Rock', 'b/bb'),
    'rgb(200,183,134)',
  ],
  steel: [
    commonLink('Steel', '3/38'),
    'rgb(90,143,163)',
  ],
};

export default typeRefs;
