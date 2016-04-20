module.exports = function (source, target) {
  if (typeof window === 'undefined') {
    return
  }
  source = source || window.parent.document.URL
  target = target || window.parent
  window.console = {
    log: function (msg) { return target.postMessage({type: 'log', data: maybeStringify(msg)}, source) },
    warn: function (msg) { return target.postMessage({type: 'warn', data: maybeStringify(msg)}, source) },
    error: function (err) {
      if (err) {
        if (typeof err === 'string') {
          err = err.split(' at ')[0]
        }
        return target.postMessage({type: 'error', data: maybeStringify(err.message || err)}, source)
      }
    }
  }
  window.onerror = function (error) {
    return console.error(error)
  }
}

function maybeStringify (msg) {
  return typeof msg === 'object' ? JSON.stringify(msg) : msg
}
