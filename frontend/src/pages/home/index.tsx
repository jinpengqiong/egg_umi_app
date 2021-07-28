import React, {useState, useEffect} from 'react';
import { BsFillAlarmFill } from "react-icons/bs";
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';

interface propsType {
  a: string
}

export default function (props: propsType) {
  const [state, setState ] = useState()
  useEffect(() => {

  },[])
  return (
    <div>
      <WhiteSpace />
      <BsFillAlarmFill style={{ fontSize: '4em'}}/>Home Page
      <WhiteSpace />
      <SearchBar placeholder="Search" maxLength={8} />
    </div>
  )
}
