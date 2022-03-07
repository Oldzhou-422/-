import { Toast } from 'antd-mobile';
import { history } from 'umi'
export default function Http({
  url,
  method="post",
  headers={},
  body,
  setResult,
  setloading,
}) {
  setloading && setloading(true);
  const token = localStorage.getItem("token")
  let defaultheaders = {
    'Content-type': 'application/json',
  };
  defaultheaders = token ? {
    ...defaultheaders,
    token
  } : defaultheaders
  let params;
  if (method.toUpperCase() === 'GET') {
    params = undefined;
  } else {
    //fetch的xhr发送请求所有的请求头打包成一个对象（这里简称为params即可）
    params = {
      headers: {
        ...defaultheaders,
        headers,
      },
      method,
      body: JSON.stringify(body),
    };
  }
  return new Promise((resolve, reject) => {
    fetch('/api' + url, params)
      .then((res) => res.json()) //res.json将res解析为一个JSON的promise对象。以便接下来继续then链式调用
      // return new Promise((resolve)=>{ resolve(res) })
      .then((res) => {
        if (res.status === 200) {
          resolve(res.data);
          setResult && setResult(res.data);
        } else if(res.status === 1001){
          Toast.fail(res.errMsg);
          history.push("/login")

        } else {
          Toast.fail(res.errMsg);
          reject(res.errMsg);
        }
      })
      .catch((err) => {
        Toast.fail(err);
        reject(err);
      })
      .finally(() => {
        setloading && setloading(false);
      });
  });
}
