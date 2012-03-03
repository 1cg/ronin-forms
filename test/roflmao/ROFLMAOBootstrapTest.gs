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
