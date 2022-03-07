import { useEffect } from 'react';
let observer;
export function useImgHook(ele, callback, watch = []) {
  useEffect(() => {
    const nodes = document.querySelectorAll(ele);
    if (nodes && nodes.length) {
      observer = new IntersectionObserver((entry) => {
        callback(entry);
        entry.forEach((item) => {
          //在对这里的已经进入视区进行操作
          //1.将真实的src转移到节点的src属性。
          //2.将该节点解绑
          if (item.isIntersecting) {
            const attr = item.target.getAttribute('real-src');
            item.target.setAttribute('src', attr);
            observer.unobserve(item.target);
          }
        });
      });
      //从一开头就对每个img节点进行监听
      nodes.forEach((item) => {
        observer.observe(item);
      });
    }
    return () => {
      //在useEffect钩子声明周期结束时，也就是页面要消失时，将停止监听
      if (nodes && nodes.length && observer) {
        observer.disconnect();
      }
    };
  }, watch);
}
