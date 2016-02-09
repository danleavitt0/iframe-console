module.exports = function (target, source) {
  target = target || window.parent
  source = source || 'http://localhost:5000'
  window.console = {
    log: function (msg) { target.postMessage({type: 'log', data: msg}, source) },
    warn: function (msg) { target.postMessage({type: 'warn', data: msg}, source) },
    error: function (err) { target.postMessage(err, source) }
  }

  window.onerror = function (error, url, line) {
    console.error({type: 'error', data: error, line: line})
  }
}
