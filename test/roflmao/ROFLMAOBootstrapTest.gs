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
      Assert.assertEquals("<a href='http://localhost/DummyController/foo'>Merp</a>",
                          RoninTemplate.link("Merp", DummyController#foo()))
    }
  }

  function testLinkWithinTemplate(){
    using (RoninTest.request()) {
      Assert.assertEquals("<a href='http://localhost/DummyController/foo'>Merp</a>",
                          SimpleLink.renderToString())
    }
  }

}
