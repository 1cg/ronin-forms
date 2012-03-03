package roflmao

uses ronin.*
uses java.util.Map
uses java.util.Stack

class ROFLMAOHelper extends RoninTemplate {

  static final var ROFLMAO_STACK_SLOT = "$$$ROFLMAO_STACK_SLOT$$$$"

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

  static function link(text : String, target : gw.lang.reflect.features.MethodReference, html : Map = null) : String {
    var additionalProps = ""
    if(html != null){
      additionalProps = " " + html.entrySet().orderBy( \ elt -> elt.Key?.toString() ).map( \ elt -> elt.Key + '="' + elt.Value + '"').join(" ")
    }
    return "<a href='${URLUtil.urlFor(target)}'${additionalProps}>${h(text)}</a>
  }

  static function endForm() : String {
    ROFLMAOStack.pop().exit()
    return "</form>"
  }

}