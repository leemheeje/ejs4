document.addEventListener('DOMContentLoaded', () => {
  ;(function () {
    const onInputFocus = function () {
      this.closest('.bs-ipt-wrap').classList.add('is-focus')
    }
    const onInputBlur = function () {
      this.closest('.bs-ipt-wrap').classList.remove('is-focus')
    }
    const inputElements = document.querySelectorAll('.b-ipt-text')
    inputElements.forEach((input) => {
      input.addEventListener('focus', onInputFocus)
      input.addEventListener('blur', onInputBlur)
    })
  })()

  const _util = new Util()

  const setScreenMinHeight = function () {
    const wh = window.innerHeight
    document.body.style.minHeight = `${wh}px`
    document.documentElement.style.setProperty('--device-height', `${wh}px`)
  }
  setScreenMinHeight()


  
  window.addEventListener('resize', _util.debounce(setScreenMinHeight))
  // 글쓰기영역 하단플로팅
  if (document.querySelector('.board-write')) {

    document.body.style.minHeight = `${visualViewport.height}px`
    document.documentElement.style.setProperty('--device-height', `${visualViewport.height}px`)
    document.body.style.maxHeight = `${visualViewport.height}px`
    document.body.style.height = `${visualViewport.height}px`
    document.querySelector('.board-write').style.height = `${visualViewport.height}px`
    document.querySelector('.board-footer').style.top = `${visualViewport.height - 57 - 60}px`

    const DEFAULT_HEIGHT = 20; // textarea 기본 height

    const $textarea = document.querySelector('#textarea');
    $textarea.oninput = (event) => {
      const $target = event.target;
    
      $target.style.height = 0;
      $target.style.height = $target.scrollHeight + 'px';
    };

    if ('VisualViewport' in window) {
      visualViewport.addEventListener('resize', function () {
        document.body.style.minHeight = `${visualViewport.height}px`
        document.documentElement.style.setProperty('--device-height', `${visualViewport.height}px`)
        document.body.style.maxHeight = `${visualViewport.height}px`
        document.body.style.height = `${visualViewport.height}px`
        document.querySelector('.board-write').style.height = `${visualViewport.height}px`
        document.querySelector('.board-footer').style.top = `${visualViewport.height - 57 - 60}px`
      })
    }
    window.addEventListener('scroll', function () {
      if (window.scrollY + visualViewport.height - 60 > document.body.offsetHeight - 2) {
        window.scrollTo(0, document.body.offsetHeight - visualViewport.height - 1)
        document.querySelector('.board-footer').style.top = `${visualViewport.height - 57 - 60}px`
      }
    })
  }

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY
    document.body.classList.toggle('is-scroll-0', !!scrollTop)
  })
})

function Util() {
  this.params = 1
  this.windowInnerHeight = window.innerHeight
}

Util.prototype = {
  debounce: function (func, delay) {
    let timer = null
    return function () {
      const args = arguments
      clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay || 200)
    }
  },
  throttle: function (callbackFn, timerTick) {
    let waiting = false
    return (...args) => {
      if (!waiting) {
        callbackFn.apply(this, args)
        waiting = true
        setTimeout(() => (waiting = false), timerTick || 50)
      }
    }
  }
}
