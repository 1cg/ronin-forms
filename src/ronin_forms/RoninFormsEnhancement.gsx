package ronin_forms

uses ronin.*
uses gw.lang.reflect.features.*
uses java.util.Map
uses java.util.LinkedHashMap

enhancement RoninFormsEnhancement: IRoninUtils {

  static function form(target: gw.lang.reflect.features.MethodReference): String {
    return RoninFormsHelper.form(target)
  }

  static function input(target: Object): String {
    return RoninFormsHelper.input(target)
  }

  static function link(text: String, target: gw.lang.reflect.features.MethodReference, html: LinkedHashMap = null): String {
    return RoninFormsHelper.link(text, target, html)
  }

  static property get endForm() : String {
    return RoninFormsHelper.endForm
  }

  static function submit(label : String, html : LinkedHashMap = null) : String {
    return RoninFormsHelper.submit(label, html)
  }
}