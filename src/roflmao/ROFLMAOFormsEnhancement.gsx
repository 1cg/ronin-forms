package roflmao

uses ronin.*
uses gw.lang.reflect.features.*
uses java.util.Map

enhancement ROFLMAOFormsEnhancement: IRoninUtils {

  static function form(target: gw.lang.reflect.features.MethodReference): String {
    return ROFLMAOHelper.form(target)
  }

  static function input(target: Object): String {
    return ROFLMAOHelper.input(target)
  }

  static function link(text: String, target: gw.lang.reflect.features.MethodReference, html: Map = null): String {
    return ROFLMAOHelper.link(text, target, html)
  }

  static function endForm() : String {
    return ROFLMAOHelper.endForm()
  }

}