module.exports = function (source, target) {
  target = target || window.parent
  source = source || window.parent.document.URL
  window.console = {
    log: function (msg) { target.postMessage({type: 'log', data: maybeStringify(msg)}, source) },
    warn: function (msg) { target.postMessage({type: 'warn', data: maybeStringify(msg)}, source) },
    error: function (err) {
      if (err) {
        target.postMessage({type: 'error', data: maybeStringify(err.message || err)}, source)
      }
    }
  }

  window.onerror = function (error, url, line, column, errObj) {
    if (typeof error === 'string') error = error.split('at')[0]
    console.error(error)
  }
}

function maybeStringify (msg) {
  return typeof msg === 'object' ? JSON.stringify(msg) : msg
}
