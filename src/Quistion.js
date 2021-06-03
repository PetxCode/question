import { Button, Input, Select } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import React,{useState, useEffect} from 'react'
import { app } from './base'
import img from './asset/curly.png'
import { Link } from 'react-router-dom'

const Quistion = () => {
  const[name, setName] = useState("")
  const[question, setQuestion] = useState("")
  const[question1, setQuestion1] = useState("")
  const[question2, setQuestion2] = useState("")
  const[question3, setQuestion3] = useState("")
  const[question4, setQuestion4] = useState("")
  const[question5, setQuestion5] = useState("")
  const[question6, setQuestion6] = useState("")
  const[question7, setQuestion7] = useState("")
  const[question8, setQuestion8] = useState("")
  const[question9, setQuestion9] = useState("")

  const postQuestion = async() => {
    await app.firestore().collection("question").doc().set({
      name,
      question,
      question1,
      question2,
      question3,
      question4,
      question5,
      question6,
      question7,
      question8,
      question9,
     
    })
  }

  return (
    <div
    style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center", 
      backgroundColor:"lightgray",    
    }}
    > 
    
    <div
    style={{
      marginTop:"40px",     
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      display:"flex",
      backgroundColor:"lightgray",
     

    }}
    >
        <div
        style={{
          textAlign:"center",
          marginBottom:"0px",
          fontWeight:"bold",
          fontSize:"20px",
        }}
        >You have 20Mins to answer all Question</div>
        <div
        style={{
          textAlign:"center",
          marginBottom:"30px",
          fontWeight:"bold",
          fontSize:"15px",
        }}
        >Lofty Inc Software Engineering Short Quiz</div>

        <Input
style={{ 
  marginBottom:"30px",
  width: "300px",
}}
placeholder="Plase enter your Full Name"
value={name}
onChange={(e)=>{
  setName(e.target.value)
}}
/>
        <div
      style={{
        width:"300px",
        height:"700px",
        // backgroundColor:"red"
      }}
      >

        
<div
         style={{
         marginBottom:"10px"
        }}
        >Question1: What programming language doesnt NODE uses?</div>
     <select
     value={question}
     onChange={(e)=>{
       setQuestion(e.target.value)
     }}
     style={{
        width:"300px",
        height:"40px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px"
     }}
     >
       <option>A. Java</option>
       <option>B. JavaScript</option>
       <option>C. Python</option>
       <option>D. C#</option>
     </select>
      
      


        <div
         style={{
         marginBottom:"10px"
        }}
        >Question2: What does MERN stack referred to as discussed in Class?</div>
     <select
     value={question1}
     onChange={(e)=>{
       setQuestion1(e.target.value)
     }}
     style={{
        width:"300px",
        height:"40px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px"
     }}
     >
       <option>A. MongoDB Express ReactJS NodeJS</option>
       <option>B. Mongoose Express Reaction NodeJS</option>
       <option>C. Monday Express ReactJS NoSQL</option>
       <option>D. None of the Above</option>
     </select>
      

        <div
         style={{
         marginBottom:"10px"
        }}
        >Question3: What default command installs package.json file in NODE?</div>
     <select
     value={question2}
     onChange={(e)=>{
       setQuestion2(e.target.value)
     }}
     style={{
        width:"300px",
        height:"40px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px"
     }}
     >
       <option>A. npm init</option>
       <option>B. npm init --y</option>
       <option>C. npm start</option>
       <option>D. npm nodemon</option>
     </select>
      

        <div
         style={{
         marginBottom:"10px"
        }}
        >Question4: Explain callback in Node.js: (not more than 50 words)</div>
     <TextArea
     value={question3}
     onChange={(e)=>{
       setQuestion3(e.target.value)
     }}
     style={{
        width:"300px",
        height:"80px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px",
        resize:"none"
     }}

     />
       
      

        <div
         style={{
         marginBottom:"10px"
        }}
        >Question5: Explain the difference between FrontEnd and BackEnd development? (not more than 50 words)</div>
     <TextArea
     value={question4}
     onChange={(e)=>{
       setQuestion4(e.target.value)
     }}
     style={{
        width:"300px",
        height:"80px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px",
        resize:"none"
     }}

     />
       
      

        <div
         style={{
         marginBottom:"10px"
        }}
        >Question6: Which database is more popularly used with Node.js?</div>
     <select
     value={question5}
     onChange={(e)=>{
       setQuestion5(e.target.value)
     }}
     style={{
        width:"300px",
        height:"40px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px"
     }}
     >
       <option>A. Mongoose</option>
       <option>B. NoSQL</option>
       <option>C. MySQL</option>
       <option>D. MongoDB</option>
     </select>
      

        <div
         style={{
         marginBottom:"10px"
        }}
        >Question7: to declear a function, which of this syntax is correct?Which database is more popularly used with Node.js?</div>
     <select
     value={question6}
     onChange={(e)=>{
       setQuestion6(e.target.value)
     }}
     style={{
        width:"300px",
        height:"40px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px"
     }}
     >
       <option>A. function( ){ }  </option>
       <option>B. ( )=> </option>
       <option>C. All of the above</option>
       <option>D. None of the above</option>
     </select>
      


     <div
         style={{
         marginBottom:"10px"
        }}
        >Question8: to push your code to github, declear the five steps to achieve that?</div>
     <TextArea
     value={question7}
     onChange={(e)=>{
       setQuestion7(e.target.value)
     }}
     style={{
        width:"300px",
        height:"120px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px",
        resize:"none"
     }}

     />


        <div
         style={{
         marginBottom:"10px"
        }}
        >Question9: which hooks is responsible of rendering or drawing or destoring a state and creating a 
        state in ReactJS?</div>
     <select
     value={question8}
     onChange={(e)=>{
       setQuestion8(e.target.value)
     }}
     style={{
        width:"300px",
        height:"40px", 
        borderRadius:"5px",
        borderColor:"lightblue",
        padding:"0px 0px 0px 10px",
        marginBottom:"20px"
     }}
     >
       <option>A. useState</option>
       <option>B. useRef</option>
       <option>C. useEffect</option>
       <option>D. useCallback</option>
     </select>
      

     <div
         style={{
         marginBottom:"10px"
        }}
        >Question10: Name three clould hosting platform you can use to deploy your code?</div>
     <TextArea
     value={question9}
     onChange={(e)=>{
       setQuestion9(e.target.value)
     }}
     style={{
        width:"300px",
        height:"120px", 
        borderRadius:"5px",
        borderColor:"lightblue", 
        padding:"0px 0px 0px 10px",
        marginBottom:"20px",
        resize:"none"
     }}

     />

      <Link
      to="/participate"
      >
      <Button
      type="primary"
      danger
      style={{
        width:"300px",
        height:"40px",
        fontSize:"13px",
        // fontWeight:'bold',
        textTransform: 'uppercase'
      }}
    onClick={postQuestion}
      >Satisfy with your Answer, then submit</Button>
      </Link>
      
      </div>
      </div>
     
    </div>
  )
}

export default Quistion

