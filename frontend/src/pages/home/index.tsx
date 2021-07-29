import React, {useState, useEffect} from 'react';
import { BsFillAlarmFill } from "react-icons/bs";
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import { useObserver } from '@/hooks/index'
import { history } from "umi";
import './index.less'
interface propsType {
  a: string
}

export default function (props: propsType) {
  const [lists, setLists ] = useState([])
  useObserver('.observable', (entries:Object)=> {
    console.log(`entries`, entries)
  }, [])
  const handleClick = () => {
    history.push('/order')
  }
  


  return (
    <div>
      <WhiteSpace />
      <BsFillAlarmFill style={{ fontSize: '4em'}}/>Home Page
      <WhiteSpace />
      <SearchBar placeholder="Search" maxLength={8} />
      <Button onClick={handleClick} type='primary'>redirect to Order Page</Button>
      <div>

      </div>
      <div className='observable'>
        observable
      </div>
      <br />
    </div>
  )
}
