import React, {useState, useEffect} from 'react';
import { BsFillAlarmFill } from "react-icons/bs";

interface propsType {
  a: string
}

export default function (props: propsType) {
  const [state, setState ] = useState()
  useEffect(() => {

  },[])
  return (
    <div>
      <br />
      <BsFillAlarmFill style={{ fontSize: '4em'}}/>Home Page
    </div>
  )
}
