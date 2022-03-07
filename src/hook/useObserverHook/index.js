import { useEffect } from 'react';
let observer;
export function useObserverHook(ele, callback, watch = []) {
  useEffect(() => {
    const node = document.querySelector(ele);
    if (node) {
      observer = new IntersectionObserver((entry) => {
        callback(entry);
      });
      observer.observe(node);
    }
    
    return function aaa() {
      if (observer) {
        //解除元素绑定
        /* observer.unobserve(document.querySelector(ele)); */
        //停止监听
        observer.disconnect();
      }
    };
  }, watch);
}
