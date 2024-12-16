/* eslint-disable no-unused-vars */
import React from 'react'
import Card from './Card'
// import Towaybinding from './Towaybinding'
// import Form from './Form'

const App = () => {

  const users = [
    {
        "name": "Alice Johnson",
        "city": "New York",
        "age": 28,
        "profession": "Software Engineer",
        "profile": "Experienced in building scalable web applications with a focus on user experience.",
        "photo": "https://example.com/photos/alice.jpg"
    },
    {
        "name": "David Martinez",
        "city": "San Francisco",
        "age": 34,
        "profession": "Product Manager",
        "profile": "Specialized in product lifecycle management and team leadership.",
        "photo": "https://example.com/photos/david.jpg"
    },
    {
        "name": "Sophia Lee",
        "city": "Chicago",
        "age": 26,
        "profession": "Graphic Designer",
        "profile": "Expert in branding, UI/UX design, and creative direction.",
        "photo": "https://example.com/photos/sophia.jpg"
    },
    {
        "name": "Michael Brown",
        "city": "Austin",
        "age": 40,
        "profession": "Data Scientist",
        "profile": "Passionate about turning complex data into actionable insights.",
        "photo": "https://example.com/photos/michael.jpg"
    },
    {
        "name": "Emily Davis",
        "city": "Seattle",
        "age": 30,
        "profession": "Digital Marketer",
        "profile": "Focused on content strategy, SEO, and performance marketing.",
        "photo": "https://example.com/photos/emily.jpg"
    }
];


users.forEach((e)=> {
    console.log(e);
})


  return (
    <div>
      <div className='p-10'>
        {users.map((elem)=> {
          // eslint-disable-next-line react/jsx-key
          return <Card  user={elem.name} age={elem.age} city={elem.city} profile={elem.photo}/>
        })}
      </div>
    </div>
  )
}

export default App

