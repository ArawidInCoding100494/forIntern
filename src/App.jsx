import { useState } from 'react'
import Tables from './Components/Tables/Tables';

function App() {
  const [count, setCount] = useState(0)
  const users = [
  {
    id: 1,
    name: "Ali Karimov",
    email: "ali.karimov@gmail.com",
    age: 25,
    role: "user",
    active: true,
  },
  {
    id: 2,
    name: "Dilshod Akbarov",
    email: "dilshod.akbarov@gmail.com",
    age: 32,
    role: "admin",
    active: true,
  },
  {
    id: 3,
    name: "Madina Rasulova",
    email: "madina.r@gmail.com",
    age: 28,
    role: "user",
    active: false,
  },
  {
    id: 4,
    name: "Jasur Tursunov",
    email: "jasur.t@gmail.com",
    age: 41,
    role: "manager",
    active: true,
  },
  {
    id: 5,
    name: "Shahnoza Aliyeva",
    email: "shahnoza.a@gmail.com",
    age: 23,
    role: "user",
    active: true,
  },
  {
    id: 6,
    name: "Bekzod Xolmatov",
    email: "bekzod.x@gmail.com",
    age: 35,
    role: "user",
    active: false,
  },
  {
    id: 7,
    name: "Aziza Karimova",
    email: "aziza.k@gmail.com",
    age: 29,
    role: "user",
    active: true,
  },
  {
    id: 8,
    name: "Rustam Abdullayev",
    email: "rustam.a@gmail.com",
    age: 46,
    role: "admin",
    active: false,
  },
  {
    id: 9,
    name: "Nodir Islomov",
    email: "nodir.i@gmail.com",
    age: 31,
    role: "manager",
    active: true,
  },
  {
    id: 10,
    name: "Malika Usmonova",
    email: "malika.u@gmail.com",
    age: 26,
    role: "user",
    active: true,
  },
  {
    id: 11,
    name: "Sardor Rahimov",
    email: "sardor.r@gmail.com",
    age: 38,
    role: "user",
    active: false,
  },
  {
    id: 12,
    name: "Nigora Sobirova",
    email: "nigora.s@gmail.com",
    age: 22,
    role: "user",
    active: true,
  },
  {
    id: 13,
    name: "Otabek Muminov",
    email: "otabek.m@gmail.com",
    age: 44,
    role: "manager",
    active: true,
  },
  {
    id: 14,
    name: "Zarina Yusupova",
    email: "zarina.y@gmail.com",
    age: 27,
    role: "user",
    active: false,
  },
  {
    id: 15,
    name: "Farrux Qodirov",
    email: "farrux.q@gmail.com",
    age: 34,
    role: "admin",
    active: true,
  },
];




  return (
    <div>
      <Tables users={users}/>
    </div>
  )
}

export default App
