package roflmao

uses ronin.*
uses java.util.Map
uses java.util.Stack

class ROFLMAOHelper extends RoninTemplate {

  static final var ROFLMAO_STACK_SLOT = "$$$ROFLMAO_STACK_SLOT$$$$"

  // TODO check and include the XSRFToken (but DON'T generate it if the user hasn't said so)
  static function form(target : gw.lang.reflect.features.MethodReference) : String {
    var formTarget = target(target)
    formTarget.enter()
    ROFLMAOStack.push(formTarget)
    return "<form action='${URLUtil.urlFor(target)}'
  }
  
  private static property get ROFLMAOStack() : Stack<ronin.RoninTemplate.FormTarget> {
    var stack = RoninRequest.HttpRequest.getAttribute(ROFLMAO_STACK_SLOT) as Stack<ronin.RoninTemplate.FormTarget>
    if(stack == null) {
      stack = new()
      RoninRequest.HttpRequest.setAttribute(ROFLMAO_STACK_SLOT, stack)
    }
    return stack
  }
  
  static function input( target : Object ) : String {
    return "<input/>"    
  }
  
  static function submit(label : String, html : Map = null) : String {
    return "<input type='submit' value='${label}'${format(html)}/>"
  }

  static function link(text : String, target : gw.lang.reflect.features.MethodReference, html : Map = null) : String {
    return "<a href='${URLUtil.urlFor(target)}'${format(html)}>${h(text)}</a>
  }

  private static function format(html : Map) : String {
    if(html == null) {
      return ""
    } else {
      return " " + html.entrySet().orderBy( \ elt -> elt.Key?.toString() ).map( \ elt -> elt.Key + '="' + elt.Value + '"').join(" ")
    }
  }

  static property get endForm() : String {
    ROFLMAOStack.pop().exit()
    return "</form>"
  }
}