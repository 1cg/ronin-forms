package roflmao

uses ronin.*
uses java.util.Stack
uses gw.lang.reflect.IParameterInfo
uses java.util.LinkedHashMap

class ROFLMAOHelper {

  static final var ROFLMAO_STACK_SLOT = "$$$ROFLMAO_STACK_SLOT$$$$"

  // TODO check and include the XSRFToken (but DON'T generate it if the user hasn't said so)
  static function form(target : gw.lang.reflect.features.MethodReference) : String {
    var formTarget = RoninTemplate.target(target)
    formTarget.enter()
    ROFLMAOStack.push(formTarget)
    return "<form action='${URLUtil.urlFor(target)}'"
  }
  
  private static property get ROFLMAOStack() : Stack<ronin.RoninTemplate.FormTarget> {
    var stack = RoninTemplate.RoninRequest.HttpRequest.getAttribute(ROFLMAO_STACK_SLOT) as Stack<ronin.RoninTemplate.FormTarget>
    if(stack == null) {
      stack = new()
      RoninTemplate.RoninRequest.HttpRequest.setAttribute(ROFLMAO_STACK_SLOT, stack)
    }
    return stack
  }
  
  static function input(target : Object, value : Object = "$#$NO_VALUE_ROFLMAO$#$" ) : String {
    if(target typeis IParameterInfo){
      //TODO -- verify that the parameter comes from the current target?
      return "<input name='${target.Name}'/>"
    } else {
      return "<input/>"
    }
  }

  static function submit(label : String, html : LinkedHashMap = null) : String {
    return "<input type='submit' value='${label}'${format(html)}/>"
  }

  static function link(text : String, target : gw.lang.reflect.features.MethodReference, html : LinkedHashMap = null) : String {
    return "<a href='${URLUtil.urlFor(target)}'${format(html)}>${RoninTemplate.h(text)}</a>"
  }

  private static function format(html : LinkedHashMap) : String {
    if(html == null) {
      return ""
    } else {
      return " " + html.entrySet().map( \ elt -> elt.Key + "='" + elt.Value + "'").join(" ")
    }
  }

  static property get endForm() : String {
    ROFLMAOStack.pop().exit()
    return "</form>"
  }
}