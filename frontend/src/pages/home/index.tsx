import React, {useState, useEffect} from 'react';
import { BsFillAlarmFill } from "react-icons/bs";
import { SearchBar, Button, WhiteSpace } from 'antd-mobile';
import { useObserver, useImgHook } from '@/hooks/index'
import { history } from "umi";
import './index.less'
interface propsType {
  a: string
}

export default function (props: propsType) {
  const data = [
    {
      title: '成都小故事',
      src: 'http://image.mzliaoba.com/pic/chatroom/20161108/cdff4812-9e23-41fd-bf25-3cf3249fea52.png'
    },
    {
      title: '中原故事',
      src: 'http://image.mzliaoba.com/pic/chatroom/20161121/1d0f0c82-d380-4620-8185-5c457ad3ac5a.png'
    },
    {
      title: '测试一下',
      src: 'http://image.mzliaoba.com/pic/chatroom/20171113/ba90aa18-df21-49a4-a2e6-aec7d2d3efd1.png'
    },
    {
      title: '资讯频道1',
      src: 'http://image.mzliaoba.com/pic/chatroom/20161103/d9312a17-ff42-4ba6-8438-e4ae794323c3.png'
    },
    {
      title: '资讯频道2',
      src: 'http://image.mzliaoba.com/pic/chatroom/20161103/b237fbfd-0d05-4bbf-8a06-179b1e94526d.png'
    },
    {
      title: '小飞龙的小空间',
      src: 'http://image.mzliaoba.com/pic/chatroom/20161103/75ee5eaa-4306-479d-974a-e0eedf56f9e0.png'
    },
    {
      title: 'viox测试',
      src: 'http://image.mzliaoba.com/pic/chatroom/20161103/270cc6c3-e650-4c7b-a09c-9ea55d4652fa.png'
    },
  ]
  const [lists, setLists ] = useState(data)
  useObserver('.observable', (entries:Object)=> {
    // console.log(`entries`, entries)
  }, [])
  const handleClick = () => {
    history.push('/order')
  }

  useImgHook('.image_observed', (entries) => {}, [])

  return (
    <div>
      <WhiteSpace />
      <BsFillAlarmFill style={{ fontSize: '4em'}}/>Home Page
      <WhiteSpace />
      <SearchBar placeholder="Search" maxLength={8} />
      <Button onClick={handleClick} type='primary'>redirect to Order Page</Button>
      <div>
        {
          lists.map(
            item => (
              <div>
                <p>{item.title}</p>
                <img className='image_observed' src={require('../../../src/assets/Xnip2021-07-29_16-49-58.jpg')} alt="#" data-src={item.src}/>
              </div>
            )
          )
        }
      </div>
      <div className='observable'>
        observable
      </div>
      <br />
    </div>
  )
}
