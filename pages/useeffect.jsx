import { useEffect, useState } from 'react'

export default function useEffectPage() {
  const [userList, setUserList] = useState([])  

  useEffect(() => {
    console.log('Componente inicializado')
  }, [])  

  useEffect(() => {
    async function fetchData() {
      const request = await fetch('https://jsonplaceholder.typicode.com/users')  
      const data = await request.json()
      setUserList(data)
    }
    
    fetchData()
  }, [])

  useEffect(() => {
    console.log('Lista modificada')
  }, ['Lista modficada'])

  return (
    <div>
      {userList.map((user, key) => (
        <div key={`user-${key}`}>{user.name}</div>
      ))}
    </div>
  )
}
