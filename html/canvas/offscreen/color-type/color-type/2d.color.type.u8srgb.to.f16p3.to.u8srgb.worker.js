// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.color.type.u8srgb.to.f16p3.to.u8srgb
// Description:test display-p3 float16 canvas storing 8-bit srgb data accurately
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("test display-p3 float16 canvas storing 8-bit srgb data accurately");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

  var canvas = new OffscreenCanvas(100, 50);
  var ctx = canvas.getContext('2d', {colorType: "float16", colorSpace: "display-p3"});

  // Consider the color in sRGB:
  //   (5,250,128)/255
  // In Display P3 this is:
  //   (0.450400386839, 0.9659537931, 0.55239459823)
  // Quantized to float16, that should evaluate to:
  //   (0x3735, 0x3BBA, 0x386B)
  //   (0.450439453125, 0.9658203125, 0.55224609375)
  // Converted back to sRGB this is:
  //   (5.342920953809, 249.965067892273, 127.959124250169)/255
  // Quantized to 8-bit, this is:
  //   (5, 250, 128)
  var input = new ImageData(new Uint8ClampedArray([5, 250, 128, 255]),
                            1, 1, {colorSpace: "srgb"});
  ctx.putImageData(input, 0, 0);
  var readback = ctx.getImageData(0, 0, 1, 1, {colorSpace:"srgb"});
  const kEpsilon = 2;
  assert_approx_equals(readback.data[0], 5, kEpsilon);
  assert_approx_equals(readback.data[1], 250, kEpsilon);
  assert_approx_equals(readback.data[2], 128, kEpsilon);
  t.done();
});
done();
