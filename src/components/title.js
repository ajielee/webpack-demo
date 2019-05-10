import body from './body'

export default () => {
  const title = 'Hello world!'
  body.innerHTML += `<h1>${title}</h1>`

  console.log(title);
  console.log(body);
}
