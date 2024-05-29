import { useCallback, useEffect, useMemo, useState } from "react";
import Age from "./Age/Age";
import Name from "./Age/Name";
import AutoCount from "./Age/AutoCount";

function App() {
  const [age,setAge] = useState(25)
  const [fullname,setFullName] = useState({fname:'',lname:''})
  const [Acount,setAcount] = useState(0)

  const handleAge = useCallback((e)=>{
    e.target.innerHTML==='+' ? setAge(prev=>prev+1) : setAge(prev=>prev-1);
  },[])

  const handleName = useCallback((e)=>{
    setFullName((prev)=> {return {...prev,[e.target.name]:e.target.value}})
    console.log(fullname)
  },[fullname])

  const even = useMemo(()=>{
    if(age%2===0) return true;
    else return false
  },[age])
  const handleAutoCount = ()=>{
    setAcount(prev=>prev+1)
  }

  useEffect(()=>{
    const interval = setInterval(handleAutoCount,1000);
    return ()=>{
      clearInterval(interval)
    }
  },[])

  return (
    <div>
      <Age handleAge={handleAge} age={age}/>
      <span>{even?'Even':'Odd'}</span>
      <Name handleName={handleName} name={fullname} tag='fname'/>
      <Name handleName={handleName} name={fullname} tag='lname'/>
      <AutoCount Acount={Acount}/>
    </div>
  );
}

export default App;
