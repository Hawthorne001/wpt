(function comments_wast_js() {

// comments.wast:9
let $1 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");

// comments.wast:56
let $2 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");

// comments.wast:67
let $3 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");

// comments.wast:76
let $4 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00");

// comments.wast:83
let $5 = instance("\x00\x61\x73\x6d\x01\x00\x00\x00\x01\x85\x80\x80\x80\x00\x01\x60\x00\x01\x7f\x03\x84\x80\x80\x80\x00\x03\x00\x00\x00\x07\x90\x80\x80\x80\x00\x03\x02\x66\x31\x00\x00\x02\x66\x32\x00\x01\x02\x66\x33\x00\x02\x0a\xa5\x80\x80\x80\x00\x03\x87\x80\x80\x80\x00\x00\x41\x01\x41\x02\x0f\x0b\x87\x80\x80\x80\x00\x00\x41\x01\x41\x02\x0f\x0b\x87\x80\x80\x80\x00\x00\x41\x01\x41\x02\x0f\x0b");

// comments.wast:104
assert_return(() => call($5, "f1", []), 2);

// comments.wast:105
assert_return(() => call($5, "f2", []), 2);

// comments.wast:106
assert_return(() => call($5, "f3", []), 2);
reinitializeRegistry();
})();
