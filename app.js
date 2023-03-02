const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)


// besoin de systeme -- présenter le chapitre 1 
// pour les besoins chercher UML -- pas obliger de chercher les diagrammes