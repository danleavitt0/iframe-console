module.exports = function (source, target) {
  target = target || window.parent
  source = source || window.parent.document.URL
  window.console = {
    log: function (msg) { target.postMessage({type: 'log', data: msg}, source) },
    warn: function (msg) { target.postMessage({type: 'warn', data: msg}, source) },
    error: function (err) { target.postMessage(err, source) }
  }

  window.onerror = function (error, url, line, column, errObj) {
    console.error({type: 'error', data: error})
  }
}
