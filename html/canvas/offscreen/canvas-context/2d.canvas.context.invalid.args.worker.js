// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.canvas.context.invalid.args
// Description:Calling getContext with invalid arguments.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Calling getContext with invalid arguments.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d');

  assert_throws_js(TypeError, function() { canvas.getContext(''); });
  assert_throws_js(TypeError, function() { canvas.getContext('This is not an implemented context in any real browser'); });
  assert_throws_js(TypeError, function() { canvas.getContext('2d#'); });
  assert_throws_js(TypeError, function() { canvas.getContext('2d\0'); });
  assert_throws_js(TypeError, function() { canvas.getContext('2\uFF44'); });
  assert_throws_js(TypeError, function() { canvas.getContext('2D'); });
  assert_throws_js(TypeError, function() { canvas.getContext(); });
  assert_throws_js(TypeError, function() { canvas.getContext('null'); });
  assert_throws_js(TypeError, function() { canvas.getContext('undefined'); });
  t.done();
});
done();
