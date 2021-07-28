import React, { useEffect } from 'react'

interface Observer {
  unobserve: Function,
  disconnect: Function
}

let observer: Observer;
export default function useObserver(elem: String, callback: Function, watch: []) {
  useEffect(() => {
    const elements = document.querySelector(elem)
    observer = new IntersectionObserver(
      entries => {
        console.log(`entries`, entries)
      }
    )
    observer.unobserve(elements)
    return () => {
      if(observer){
        observer.unobserve(elements)
        observer.unobserve()
      }
    }
  }, watch)
}

