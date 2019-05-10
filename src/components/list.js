import body from './body'

export default () => {
  const fruits = [
    'Apple',
    'Banana',
    'Pear',
    'Strawberry',
    'Durian'
  ]

  const fruitListItems = fruits.map(fruit => `<li>${fruit}</li>`).join('')
  body.innerHTML += `<ul>Fruits:${fruitListItems}</ul>`
}
