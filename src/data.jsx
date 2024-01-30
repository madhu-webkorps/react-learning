import React from "react";
import { ReactDOM } from "react";
const data = [
  { id: 1,
    src: 'https://picsum.photos/200/300',
    title: 'First Image',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link: 'https://picsum.photos/',
  },
  {
    id: 2,
    src: 'https://picsum.photos/201/300',
    title: 'Second Image',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link: 'https://picsum.photos/'
  },
  {
    id: 3,
    src: 'https://picsum.photos/252/300',
    title: 'Thrid Image',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link: 'https://picsum.photos/',
  },
  {
    id: 4,
    src: 'https://picsum.photos/202/300',
    title: 'Thrid Image',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link: 'https://picsum.photos/',
  },
  {
    id: 5,
    src: 'https://picsum.photos/272/300',
    title: 'Thrid Image',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link: 'https://picsum.photos/',
  },
  { 
    id: 6,
    src: 'https://picsum.photos/292/300',
    title: 'Thrid Image',
    text: 'Some quick example text to build on the card title and make up the bulk of the card',
    link: 'https://picsum.photos/',
  }
]

const ApiData = () => {

  
  const apiUrl = 'http://localhost:3000/apply'
  const fetchDAta = () => {
    console.log('clicked --------------------------------------------')
    fetch("http://localhost:3000/apply")
    .then((response) => response.json())
    .then((data) => {
      data.map((user) => {
        
      })
      console.log(data)
    })
  }

  return (
    <div>
      <h1>Result data</h1>
      <button onClick={fetchDAta}>Show data</button>
      {/* {fetchDAta} */}
    </div>
  )

}

export default ApiData;
