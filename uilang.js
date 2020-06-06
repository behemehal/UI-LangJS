/*
    Copyright behemehal 2020 All rights reserved
*/

function sck (cname, cvalue, exdays) {
    var d = new Date()
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
    var expires = 'expires=' + d.toUTCString()
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/'
  }
  
  function gck (cname) {
    var name = cname + '='
    var dck = decodeURIComponent(document.cookie)
    var ca = dck.split(';')
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length)
      }
    }
    return ''
  }
  window.lang = {
    loadEmitter,
    language: gck('lang') || (navigator.language === 'en-US' || navigator.language === 'tr-TR') ? navigator.language : 'en-US',
    getPhrase: id => window.lang.data[window.lang.language][id],
    setPhrase: (el, body) => { body.type === 'innerHTML' ? el.innerHTML = body.text : el.setAttribute(body.type, body.text) },
    data: '',
    errCatch: () => {
      var self = window.lang
      if (Object.keys(self.data['tr-TR']).length !== Object.keys(self.data['en-US']).length) {
        throw new Error('Language Data Error')
      }
    },
    init: (e) => {
      var self = window.lang
      self.errCatch()
      sck('lang', self.language, 262974383)
      document.querySelectorAll('[uiLang]').forEach((el, index) => {
        var body = self.getPhrase(el.getAttribute('uiLang'))
        if (!body) {
          throw new Error(el, 'Is not correct type of language ready element')
        }
        self.setPhrase(el, body)
      })
      !!window.lang.loadEmitter && window.lang.loadEmitter(true)
    },
    replaceLanguage: () => {
      window.lang.language = window.lang.language === 'tr-TR' ? 'en-US' : 'tr-TR'
      window.lang.init()
    }
  }
  