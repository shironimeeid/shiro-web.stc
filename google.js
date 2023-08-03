/**
 * Google Translate Module
 * @author Rhythm Shahriar
 * @version 1.0
 */
//in body
//<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateInit"></script>

function googleTranslateInit() {
    new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ru', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate');
  }
  
  /**
   * This will fire the event on target element
   * @param element
   * @param event
   * @returns {boolean}
   */
  function fireEvent(element,event){
    console.log("in Fire Event");
    if (document.createEventObject){
      // dispatch for IE
      //console.log("in IE FireEvent");
      var evt = document.createEventObject();
      return element.fireEvent('on'+event,evt)
    }
    else{
      // dispatch for firefox + others
      //console.log("In HTML5 dispatchEvent");
      var evt = document.createEvent("HTMLEvents");
      evt.initEvent(event, true, true ); // event type,bubbling,cancelable
      return !element.dispatchEvent(evt);
    }
  }
  
  /**
   * This will set the language and fire the event
   * @param lang
   * e.g onclick="changeLanguage('bn')"
   */
  function changeLanguage(lang) {
    var jObj = $('.goog-te-combo');
    var db = jObj.get(0);
    jObj.val(lang);
    fireEvent(db, 'change');
  }