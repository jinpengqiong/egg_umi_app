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
    const element = document.querySelector(elem)
    if(element){
      observer = new IntersectionObserver(
      entries => {
        console.log(`entries`, entries)
      }
    )
      observer.observe(element)
    }
    return () => {
      console.log('leave page')
      if(observer && element){
        observer.unobserve(element)
        observer.disconnect()
      }
    }
  }, watch)
}

