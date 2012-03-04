package roflmao

uses org.junit. *
uses controller. *
uses ronin.*
uses ronin.test. *
uses junit.framework.TestCase
uses roflmao.examples.*

class ROFLMAOBootstrapTest extends TestCase {

  function testRawLinkMethod() {
    using (RoninTest.request()) {
      assertEquals("<a href='http://localhost/DummyController/foo'>Merp</a>", RoninTemplate.link("Merp", DummyController#foo()))
    }
  }

  function testRawLinkMethodWithAttributes() {
    using (RoninTest.request()) {
      assertEquals("<a href='http://localhost/DummyController/foo' id='my_input'>Merp</a>",
                   RoninTemplate.link("Merp", DummyController#foo(), {"id"->"my_input"}))

      assertEquals("<a href='http://localhost/DummyController/foo' id='my_input' class='my_class'>Merp</a>",
                   RoninTemplate.link("Merp", DummyController#foo(), {"id"->"my_input", "class"->"my_class"}))

      assertEquals("<a href='http://localhost/DummyController/foo' class='my_class' id='my_input'>Merp</a>",
                   RoninTemplate.link("Merp", DummyController#foo(), {"class"->"my_class", "id"->"my_input"}))
    }
  }

  function testLinkWithinTemplate(){
    using (RoninTest.request()) {
      assertEquals("\n<a href='http://localhost/DummyController/foo'>Merp</a>", SimpleLink.renderToString())
    }
  }

  function testRawInputMethod() {
    using (RoninTest.request()) {
      assertEquals("<input name='str'/>", RoninTemplate.input(DummyController#bar().$str))
    }
  }

}
