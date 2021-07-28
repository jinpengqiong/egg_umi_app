import React, { useEffect } from 'react'
interface Observer {
  unobserve: Function,
  disconnect: Function,
  observe: Function
}

let observer: Observer;
export default function useObserver(elem: String, callback: Function, watch: []) {
  useEffect(() => {
    console.log('enter page')
    const elements = document.querySelector(elem)
    observer = new IntersectionObserver(
      entries => {
        console.log(`entries`, entries)
      }
    )
    observer.observe(elements)
    return () => {
      console.log('leave page')
      if(observer){
        observer.unobserve(elements)
        observer.disconnect()
      }
    }
  }, watch)
}

