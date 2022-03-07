import { useState, useEffect } from 'react';
import { Http } from '@/utils';
export function useHttpHook({
  url,
  method = 'post',
  headers,
  body = {},
  watch = [],
}) {
  const [result, setResult] = useState();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    Http({ url, method, headers, body, setResult, setloading });
  }, watch);
  return [result, loading];
}
