import React,{useState, useEffect} from 'react'
import { app } from './base'

const Participate = () => {

  const [info, setInfo] = useState([])

  const showResult = async(id) => {
    await app.firestore().collection("question").doc(id).get().then(doc => {
      setInfo(doc.data())
    })
  }

  useEffect(()=>{
    showResult()
  }, [])

  return (
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      width:"100vw",
      height:"100vh",
      flexDirection:"column"
    }}
    >
      <div>
        Thank you for participating in the QUIZ,
      </div>
      <div>
      you result will get to very soon... Thanks!
      </div>
      {info && info.name}
    </div>
  )
}

export default Participate
