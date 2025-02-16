// META: global=window,worker
// META: title=IndexedDB: The source of requests made against cursors
// META: script=resources/support.js

// Spec: https://w3c.github.io/IndexedDB/#dom-idbrequest-source

'use strict';

[cursor => cursor.update(0), cursor => cursor.delete()].forEach(
    func => indexeddb_test(
        (t, db) => {
          db.createObjectStore('store', {autoIncrement: true});
        },
        (t, db) => {
          const tx = db.transaction('store', 'readwrite');
          const store = tx.objectStore('store');
          store.put('value');
          store.openCursor().onsuccess = t.step_func(e => {
            const cursor = e.target.result;
            assert_equals(
                func(cursor).source, cursor,
                `${func}.source should be the cursor itself`);
            t.done();
          });
        },
        `The source of the request from ${func} is the cursor itself`));
