/*将一个观察者对象push进观察者队列，在队列中已经存在相同的id则该观察者对象将被跳过，除非它是在队列被刷新时推送*/
export function queueWatcher (watcher: Watcher) {
    /*获取watcher的id*/
    const id = watcher.id
    /*检验id是否存在，已经存在则直接跳过，不存在则标记哈希表has，用于下次检验*/
    if (has[id] == null) {
      has[id] = true
      if (!flushing) {
        /*如果没有flush掉，直接push到队列中即可*/
        queue.push(watcher)
      } else {
        // if already flushing, splice the watcher based on its id
        // if already past its id, it will be run next immediately.
        let i = queue.length - 1
        while (i >= 0 && queue[i].id > watcher.id) {
          i--
        }
        queue.splice(Math.max(i, index) + 1, 0, watcher)
      }
      // queue the flush
      if (!waiting) {
        waiting = true
        nextTick(flushSchedulerQueue)
      }
    }
  }