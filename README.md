# UI-LangJS
Site language tool used in behemehal services


## Getting page ready

### main.html
```html
    <!DOCTYPE html>
    <head>       
        <script src="uilang.js"></script>
        <!--
            This is important to add your language file after lang.js and add defer tag to be sure script runs after page fully loaded
        -->
        <script defer src="panel_language.js"></script>
    </head>
    <body>
        <a uiLang="a1"></a>
        <input type="text" uiLang="a2">
    </body>
```

### panel_language.js
```js
    window.lang.data = {
        ver: '1.0.0',
        'tr-TR': {
            a1: {
                text: 'Test',
                type: 'innerHTML'
            },
            a2: {
                text: 'Test',
                type: 'placeholder'
            }
        },
        'en-US': {
            a1: {
                text: 'Test',
                type: 'innerHTML'
            },
            a2: {
                text: 'Test',
                type: 'placeholder'
            }
        }
    }
    window.lang.init() //Start language load after panel_language.js loaded
    window.lang.loadEmitter = () => {
        console.log('Language Loaded')
    }
```

### That's it

