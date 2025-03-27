// Web Worker线程处理图片预加载
self.addEventListener('message', async (e) => {
  const { imageList, chunkSize, retryCount } = e.data;
  const total = imageList.length;
  let loaded = 0;
  
  // 分片加载控制
  for (let i = 0; i < imageList.length; i += chunkSize) {
      const chunk = imageList.slice(i, i + chunkSize);
      await Promise.allSettled(
          chunk.map(url => loadImageWithRetry(url, retryCount))
      );
      
      loaded += chunk.length;
      self.postMessage({
          type: 'progress',
          data: { loaded, total }
      });
  }
  
  self.postMessage({ type: 'complete' });
});

async function loadImageWithRetry(url, retries) {
  try {
      const blob = await fetchImage(url);
      self.postMessage({
          type: 'loaded',
          data: { url, blob }
      });
  } catch (error) {
      if (retries > 0) {
          return loadImageWithRetry(url, retries - 1);
      }
      self.postMessage({
          type: 'error',
          data: { url, error }
      });
  }
}

async function fetchImage(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(response.statusText);
  return response.blob();
}