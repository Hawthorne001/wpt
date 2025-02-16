// META: title=test WebNN API element-wise tan operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-unary
// Compute the tangent of the input tensor, element-wise.
//
// MLOperand tan(MLOperand input);


const getTanPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {float32: 1 / 1024, float16: 1 / 512};
  const expectedDataType =
      getExpectedDataTypeOfSingleOutput(graphResources.expectedOutputs);
  return {metricType: 'ATOL', value: toleranceValueDict[expectedDataType]};
};

const tanTests = [
  {
    'name': 'tan float32 0D scalar',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [52.69781494140625],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [-0.8582430481910706],
          'descriptor': {shape: [], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'tan float32 1D constant tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.69781494140625,  70.06912994384766,   90.49689483642578,
            24.65666961669922,  11.66512680053711,   -50.95264434814453,
            40.320064544677734, -9.641122817993164,  -31.567750930786133,
            45.59520721435547,  -55.93085861206055,  -44.602970123291016,
            80.4539794921875,   -2.314880847930908,  -25.474767684936523,
            62.589454650878906, -70.94403076171875,  62.84861755371094,
            84.79766845703125,  -95.58502960205078,  15.552484512329102,
            -55.25654220581055, -26.884889602661133, 0.159261092543602
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.8582430481910706,   1.410544753074646,    -0.6978657245635986,
            -0.5156278610229492,   -1.2633823156356812,  -0.8205758929252625,
            -0.5734118819236755,   -0.21978461742401123, -0.1530018001794815,
            -23.731182098388672,   0.7106066942214966,   -0.7149254679679871,
            -2.7969717979431152,   1.086239218711853,    -0.3560185432434082,
            -0.24726025760173798,  3.7865755558013916,   0.016766052693128586,
            -0.025338610634207726, -4.203672409057617,   -0.1567438244819641,
            3.495089292526245,     5.453553199768066,    0.16062140464782715
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'tan float32 1D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.69781494140625,  70.06912994384766,   90.49689483642578,
            24.65666961669922,  11.66512680053711,   -50.95264434814453,
            40.320064544677734, -9.641122817993164,  -31.567750930786133,
            45.59520721435547,  -55.93085861206055,  -44.602970123291016,
            80.4539794921875,   -2.314880847930908,  -25.474767684936523,
            62.589454650878906, -70.94403076171875,  62.84861755371094,
            84.79766845703125,  -95.58502960205078,  15.552484512329102,
            -55.25654220581055, -26.884889602661133, 0.159261092543602
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.8582430481910706,   1.410544753074646,    -0.6978657245635986,
            -0.5156278610229492,   -1.2633823156356812,  -0.8205758929252625,
            -0.5734118819236755,   -0.21978461742401123, -0.1530018001794815,
            -23.731182098388672,   0.7106066942214966,   -0.7149254679679871,
            -2.7969717979431152,   1.086239218711853,    -0.3560185432434082,
            -0.24726025760173798,  3.7865755558013916,   0.016766052693128586,
            -0.025338610634207726, -4.203672409057617,   -0.1567438244819641,
            3.495089292526245,     5.453553199768066,    0.16062140464782715
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'tan float32 2D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.69781494140625,  70.06912994384766,   90.49689483642578,
            24.65666961669922,  11.66512680053711,   -50.95264434814453,
            40.320064544677734, -9.641122817993164,  -31.567750930786133,
            45.59520721435547,  -55.93085861206055,  -44.602970123291016,
            80.4539794921875,   -2.314880847930908,  -25.474767684936523,
            62.589454650878906, -70.94403076171875,  62.84861755371094,
            84.79766845703125,  -95.58502960205078,  15.552484512329102,
            -55.25654220581055, -26.884889602661133, 0.159261092543602
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.8582430481910706,   1.410544753074646,    -0.6978657245635986,
            -0.5156278610229492,   -1.2633823156356812,  -0.8205758929252625,
            -0.5734118819236755,   -0.21978461742401123, -0.1530018001794815,
            -23.731182098388672,   0.7106066942214966,   -0.7149254679679871,
            -2.7969717979431152,   1.086239218711853,    -0.3560185432434082,
            -0.24726025760173798,  3.7865755558013916,   0.016766052693128586,
            -0.025338610634207726, -4.203672409057617,   -0.1567438244819641,
            3.495089292526245,     5.453553199768066,    0.16062140464782715
          ],
          'descriptor': {shape: [4, 6], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'tan float32 3D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.69781494140625,  70.06912994384766,   90.49689483642578,
            24.65666961669922,  11.66512680053711,   -50.95264434814453,
            40.320064544677734, -9.641122817993164,  -31.567750930786133,
            45.59520721435547,  -55.93085861206055,  -44.602970123291016,
            80.4539794921875,   -2.314880847930908,  -25.474767684936523,
            62.589454650878906, -70.94403076171875,  62.84861755371094,
            84.79766845703125,  -95.58502960205078,  15.552484512329102,
            -55.25654220581055, -26.884889602661133, 0.159261092543602
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.8582430481910706,   1.410544753074646,    -0.6978657245635986,
            -0.5156278610229492,   -1.2633823156356812,  -0.8205758929252625,
            -0.5734118819236755,   -0.21978461742401123, -0.1530018001794815,
            -23.731182098388672,   0.7106066942214966,   -0.7149254679679871,
            -2.7969717979431152,   1.086239218711853,    -0.3560185432434082,
            -0.24726025760173798,  3.7865755558013916,   0.016766052693128586,
            -0.025338610634207726, -4.203672409057617,   -0.1567438244819641,
            3.495089292526245,     5.453553199768066,    0.16062140464782715
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'tan float32 4D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.69781494140625,  70.06912994384766,   90.49689483642578,
            24.65666961669922,  11.66512680053711,   -50.95264434814453,
            40.320064544677734, -9.641122817993164,  -31.567750930786133,
            45.59520721435547,  -55.93085861206055,  -44.602970123291016,
            80.4539794921875,   -2.314880847930908,  -25.474767684936523,
            62.589454650878906, -70.94403076171875,  62.84861755371094,
            84.79766845703125,  -95.58502960205078,  15.552484512329102,
            -55.25654220581055, -26.884889602661133, 0.159261092543602
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.8582430481910706,   1.410544753074646,    -0.6978657245635986,
            -0.5156278610229492,   -1.2633823156356812,  -0.8205758929252625,
            -0.5734118819236755,   -0.21978461742401123, -0.1530018001794815,
            -23.731182098388672,   0.7106066942214966,   -0.7149254679679871,
            -2.7969717979431152,   1.086239218711853,    -0.3560185432434082,
            -0.24726025760173798,  3.7865755558013916,   0.016766052693128586,
            -0.025338610634207726, -4.203672409057617,   -0.1567438244819641,
            3.495089292526245,     5.453553199768066,    0.16062140464782715
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'tan float32 5D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.69781494140625,  70.06912994384766,   90.49689483642578,
            24.65666961669922,  11.66512680053711,   -50.95264434814453,
            40.320064544677734, -9.641122817993164,  -31.567750930786133,
            45.59520721435547,  -55.93085861206055,  -44.602970123291016,
            80.4539794921875,   -2.314880847930908,  -25.474767684936523,
            62.589454650878906, -70.94403076171875,  62.84861755371094,
            84.79766845703125,  -95.58502960205078,  15.552484512329102,
            -55.25654220581055, -26.884889602661133, 0.159261092543602
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.8582430481910706,   1.410544753074646,    -0.6978657245635986,
            -0.5156278610229492,   -1.2633823156356812,  -0.8205758929252625,
            -0.5734118819236755,   -0.21978461742401123, -0.1530018001794815,
            -23.731182098388672,   0.7106066942214966,   -0.7149254679679871,
            -2.7969717979431152,   1.086239218711853,    -0.3560185432434082,
            -0.24726025760173798,  3.7865755558013916,   0.016766052693128586,
            -0.025338610634207726, -4.203672409057617,   -0.1567438244819641,
            3.495089292526245,     5.453553199768066,    0.16062140464782715
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float32'}
        }
      }
    }
  },

  // float16 tests
  {
    'name': 'tan float16 0D scalar',
    'graph': {
      'inputs': {
        'tanInput':
            {'data': [52.6875], 'descriptor': {shape: [], dataType: 'float16'}}
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [-0.87646484375],
          'descriptor': {shape: [], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'tan float16 1D constant tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.6875,    70.0625,   90.5,       24.65625,       11.6640625,
            -50.9375,   40.3125,   -9.640625,  -31.5625,       5.59375,
            -55.9375,   -44.59375, 80.4375,    -2.314453125,   -25.46875,
            62.59375,   -70.9375,  62.84375,   84.8125,        -95.5625,
            15.5546875, -55.25,    -26.890625, 0.1593017578125
          ],
          'descriptor': {shape: [24], dataType: 'float16'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.87646484375,       1.390625,       -0.693359375,
            -0.51611328125,       -1.2666015625,  -0.79541015625,
            -0.58349609375,       -0.21923828125, -0.1475830078125,
            -0.82421875,          0.70068359375,  -0.701171875,
            -2.94921875,          1.0869140625,   -0.349365234375,
            -0.24267578125,       3.888671875,    0.01189422607421875,
            -0.01050567626953125, -3.8203125,     -0.154541015625,
            3.583984375,          5.28125,        0.16064453125
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'tan float16 1D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.6875,    70.0625,   90.5,       24.65625,       11.6640625,
            -50.9375,   40.3125,   -9.640625,  -31.5625,       5.59375,
            -55.9375,   -44.59375, 80.4375,    -2.314453125,   -25.46875,
            62.59375,   -70.9375,  62.84375,   84.8125,        -95.5625,
            15.5546875, -55.25,    -26.890625, 0.1593017578125
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.87646484375,       1.390625,       -0.693359375,
            -0.51611328125,       -1.2666015625,  -0.79541015625,
            -0.58349609375,       -0.21923828125, -0.1475830078125,
            -0.82421875,          0.70068359375,  -0.701171875,
            -2.94921875,          1.0869140625,   -0.349365234375,
            -0.24267578125,       3.888671875,    0.01189422607421875,
            -0.01050567626953125, -3.8203125,     -0.154541015625,
            3.583984375,          5.28125,        0.16064453125
          ],
          'descriptor': {shape: [24], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'tan float16 2D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.6875,    70.0625,   90.5,       24.65625,       11.6640625,
            -50.9375,   40.3125,   -9.640625,  -31.5625,       5.59375,
            -55.9375,   -44.59375, 80.4375,    -2.314453125,   -25.46875,
            62.59375,   -70.9375,  62.84375,   84.8125,        -95.5625,
            15.5546875, -55.25,    -26.890625, 0.1593017578125
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.87646484375,       1.390625,       -0.693359375,
            -0.51611328125,       -1.2666015625,  -0.79541015625,
            -0.58349609375,       -0.21923828125, -0.1475830078125,
            -0.82421875,          0.70068359375,  -0.701171875,
            -2.94921875,          1.0869140625,   -0.349365234375,
            -0.24267578125,       3.888671875,    0.01189422607421875,
            -0.01050567626953125, -3.8203125,     -0.154541015625,
            3.583984375,          5.28125,        0.16064453125
          ],
          'descriptor': {shape: [4, 6], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'tan float16 3D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.6875,    70.0625,   90.5,       24.65625,       11.6640625,
            -50.9375,   40.3125,   -9.640625,  -31.5625,       5.59375,
            -55.9375,   -44.59375, 80.4375,    -2.314453125,   -25.46875,
            62.59375,   -70.9375,  62.84375,   84.8125,        -95.5625,
            15.5546875, -55.25,    -26.890625, 0.1593017578125
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.87646484375,       1.390625,       -0.693359375,
            -0.51611328125,       -1.2666015625,  -0.79541015625,
            -0.58349609375,       -0.21923828125, -0.1475830078125,
            -0.82421875,          0.70068359375,  -0.701171875,
            -2.94921875,          1.0869140625,   -0.349365234375,
            -0.24267578125,       3.888671875,    0.01189422607421875,
            -0.01050567626953125, -3.8203125,     -0.154541015625,
            3.583984375,          5.28125,        0.16064453125
          ],
          'descriptor': {shape: [2, 3, 4], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'tan float16 4D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.6875,    70.0625,   90.5,       24.65625,       11.6640625,
            -50.9375,   40.3125,   -9.640625,  -31.5625,       5.59375,
            -55.9375,   -44.59375, 80.4375,    -2.314453125,   -25.46875,
            62.59375,   -70.9375,  62.84375,   84.8125,        -95.5625,
            15.5546875, -55.25,    -26.890625, 0.1593017578125
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.87646484375,       1.390625,       -0.693359375,
            -0.51611328125,       -1.2666015625,  -0.79541015625,
            -0.58349609375,       -0.21923828125, -0.1475830078125,
            -0.82421875,          0.70068359375,  -0.701171875,
            -2.94921875,          1.0869140625,   -0.349365234375,
            -0.24267578125,       3.888671875,    0.01189422607421875,
            -0.01050567626953125, -3.8203125,     -0.154541015625,
            3.583984375,          5.28125,        0.16064453125
          ],
          'descriptor': {shape: [2, 2, 2, 3], dataType: 'float16'}
        }
      }
    }
  },
  {
    'name': 'tan float16 5D tensor',
    'graph': {
      'inputs': {
        'tanInput': {
          'data': [
            52.6875,    70.0625,   90.5,       24.65625,       11.6640625,
            -50.9375,   40.3125,   -9.640625,  -31.5625,       5.59375,
            -55.9375,   -44.59375, 80.4375,    -2.314453125,   -25.46875,
            62.59375,   -70.9375,  62.84375,   84.8125,        -95.5625,
            15.5546875, -55.25,    -26.890625, 0.1593017578125
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float16'}
        }
      },
      'operators': [{
        'name': 'tan',
        'arguments': [{'input': 'tanInput'}],
        'outputs': 'tanOutput'
      }],
      'expectedOutputs': {
        'tanOutput': {
          'data': [
            -0.87646484375,       1.390625,       -0.693359375,
            -0.51611328125,       -1.2666015625,  -0.79541015625,
            -0.58349609375,       -0.21923828125, -0.1475830078125,
            -0.82421875,          0.70068359375,  -0.701171875,
            -2.94921875,          1.0869140625,   -0.349365234375,
            -0.24267578125,       3.888671875,    0.01189422607421875,
            -0.01050567626953125, -3.8203125,     -0.154541015625,
            3.583984375,          5.28125,        0.16064453125
          ],
          'descriptor': {shape: [2, 1, 4, 1, 3], dataType: 'float16'}
        }
      }
    }
  }
];

if (navigator.ml) {
  tanTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getTanPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
