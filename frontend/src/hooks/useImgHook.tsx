import React, { useEffect } from 'react'
interface Observer {
  unobserve: Function,
  disconnect: Function,
  observe: Function
}

let observer: Observer;
export default function useImgHook(elem: String, callback: Function, watch: []) {
  useEffect(() => {
    console.log('enter page')
    const nodes = document.querySelectorAll(elem)
    if(nodes && nodes.length){
      observer = new IntersectionObserver(
      entries => {
        callback && callback(entries)
        entries.forEach(
          item => {
            if(item.isIntersecting){
              const dataSrc = item.target.getAttribute('data-src')
              item.target.setAttribute('src', dataSrc)
              observer.unobserve(item.target)
            }
          }
        )
      }
    )
      nodes.forEach(
        item => {
          observer.observe(item)
        }
      )
    }
    return () => {
      console.log('leave page')
      if(observer && nodes){
        observer.disconnect()
      }
    }
  }, watch)
}
