// META: title=test WebNN API split operation
// META: global=window,dedicatedworker
// META: variant=?cpu
// META: variant=?gpu
// META: variant=?npu
// META: script=../resources/utils.js
// META: timeout=long

'use strict';

// https://www.w3.org/TR/webnn/#api-mlgraphbuilder-split
// Split the input tensor into a number of sub tensors along the given axis.
//
// dictionary MLSplitOptions {
//   [EnforceRange] unsigned long axis = 0;
// };
//
// sequence<MLOperand> split(
//     MLOperand input,
//     ([EnforceRange] unsigned long or sequence<[EnforceRange] unsigned long>)
//     splits, optional MLSplitOptions options = {});


const getSplitPrecisionTolerance = (graphResources) => {
  const toleranceValueDict = {float32: 0, float16: 0};
  const dataType =
      graphResources
          .expectedOutputs[Object.keys(graphResources.expectedOutputs)[0]]
          .descriptor.dataType;
  return {metricType: 'ULP', value: toleranceValueDict[dataType]};
};

const splitTests = [
  {
    'name': 'split float32 1D constant tensor number splits default options',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [24], dataType: 'float32'},
          'constant': true
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [{'input': 'splitInput'}, {'splits': 3}],
        'outputs': ['splitOutput1', 'splitOutput2', 'splitOutput3']
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375, 75.99607849121094
          ],
          'descriptor': {shape: [8], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -61.05668640136719, -90.92643737792969, 53.916622161865234,
            84.16268920898438, -95.57494354248047, -52.40757751464844,
            -29.007186889648438, 71.65496063232422
          ],
          'descriptor': {shape: [8], dataType: 'float32'}
        },
        'splitOutput3': {
          'data': [
            50.66357421875, 21.364582061767578, -27.127241134643555,
            65.1489486694336, -30.40681266784668, -6.818390369415283,
            46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [8], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 1D tensor number splits default options',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [24], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [{'input': 'splitInput'}, {'splits': 3}],
        'outputs': ['splitOutput1', 'splitOutput2', 'splitOutput3']
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375, 75.99607849121094
          ],
          'descriptor': {shape: [8], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -61.05668640136719, -90.92643737792969, 53.916622161865234,
            84.16268920898438, -95.57494354248047, -52.40757751464844,
            -29.007186889648438, 71.65496063232422
          ],
          'descriptor': {shape: [8], dataType: 'float32'}
        },
        'splitOutput3': {
          'data': [
            50.66357421875, 21.364582061767578, -27.127241134643555,
            65.1489486694336, -30.40681266784668, -6.818390369415283,
            46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [8], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 2D tensor number splits default options',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [8, 3], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [{'input': 'splitInput'}, {'splits': 2}],
        'outputs': ['splitOutput1', 'splitOutput2']
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375, 75.99607849121094, -61.05668640136719,
            -90.92643737792969, 53.916622161865234, 84.16268920898438
          ],
          'descriptor': {shape: [4, 3], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -95.57494354248047, -52.40757751464844, -29.007186889648438,
            71.65496063232422, 50.66357421875, 21.364582061767578,
            -27.127241134643555, 65.1489486694336, -30.40681266784668,
            -6.818390369415283, 46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [4, 3], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 3D tensor number splits default options',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [4, 3, 2], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [{'input': 'splitInput'}, {'splits': 2}],
        'outputs': ['splitOutput1', 'splitOutput2']
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375, 75.99607849121094, -61.05668640136719,
            -90.92643737792969, 53.916622161865234, 84.16268920898438
          ],
          'descriptor': {shape: [2, 3, 2], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -95.57494354248047, -52.40757751464844, -29.007186889648438,
            71.65496063232422, 50.66357421875, 21.364582061767578,
            -27.127241134643555, 65.1489486694336, -30.40681266784668,
            -6.818390369415283, 46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [2, 3, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 4D tensor number splits default options',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [12, 1, 1, 2], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [{'input': 'splitInput'}, {'splits': 4}],
        'outputs':
            ['splitOutput1', 'splitOutput2', 'splitOutput3', 'splitOutput4']
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258
          ],
          'descriptor': {shape: [3, 1, 1, 2], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -68.11224365234375, 75.99607849121094, -61.05668640136719,
            -90.92643737792969, 53.916622161865234, 84.16268920898438
          ],
          'descriptor': {shape: [3, 1, 1, 2], dataType: 'float32'}
        },
        'splitOutput3': {
          'data': [
            -95.57494354248047, -52.40757751464844, -29.007186889648438,
            71.65496063232422, 50.66357421875, 21.364582061767578
          ],
          'descriptor': {shape: [3, 1, 1, 2], dataType: 'float32'}
        },
        'splitOutput4': {
          'data': [
            -27.127241134643555, 65.1489486694336, -30.40681266784668,
            -6.818390369415283, 46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [3, 1, 1, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 5D tensor number splits default options',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [6, 1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [{'input': 'splitInput'}, {'splits': 2}],
        'outputs': ['splitOutput1', 'splitOutput2']
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375, 75.99607849121094, -61.05668640136719,
            -90.92643737792969, 53.916622161865234, 84.16268920898438
          ],
          'descriptor': {shape: [3, 1, 1, 2, 2], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -95.57494354248047, -52.40757751464844, -29.007186889648438,
            71.65496063232422, 50.66357421875, 21.364582061767578,
            -27.127241134643555, 65.1489486694336, -30.40681266784668,
            -6.818390369415283, 46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [3, 1, 1, 2, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 4D tensor array splits default options',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [12, 1, 1, 2], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [{'input': 'splitInput'}, {'splits': [3, 3, 3, 3]}],
        'outputs':
            ['splitOutput1', 'splitOutput2', 'splitOutput3', 'splitOutput4'],
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258
          ],
          'descriptor': {shape: [3, 1, 1, 2], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -68.11224365234375, 75.99607849121094, -61.05668640136719,
            -90.92643737792969, 53.916622161865234, 84.16268920898438
          ],
          'descriptor': {shape: [3, 1, 1, 2], dataType: 'float32'}
        },
        'splitOutput3': {
          'data': [
            -95.57494354248047, -52.40757751464844, -29.007186889648438,
            71.65496063232422, 50.66357421875, 21.364582061767578
          ],
          'descriptor': {shape: [3, 1, 1, 2], dataType: 'float32'}
        },
        'splitOutput4': {
          'data': [
            -27.127241134643555, 65.1489486694336, -30.40681266784668,
            -6.818390369415283, 46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [3, 1, 1, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 4D tensor number splits options.axis',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [12, 1, 1, 2], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments':
            [{'input': 'splitInput'}, {'splits': 3}, {'options': {'axis': 0}}],
        'outputs': ['splitOutput1', 'splitOutput2', 'splitOutput3'],

      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375, 75.99607849121094
          ],
          'descriptor': {shape: [4, 1, 1, 2], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -61.05668640136719, -90.92643737792969, 53.916622161865234,
            84.16268920898438, -95.57494354248047, -52.40757751464844,
            -29.007186889648438, 71.65496063232422
          ],
          'descriptor': {shape: [4, 1, 1, 2], dataType: 'float32'}
        },
        'splitOutput3': {
          'data': [
            50.66357421875, 21.364582061767578, -27.127241134643555,
            65.1489486694336, -30.40681266784668, -6.818390369415283,
            46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [4, 1, 1, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 5D tensor array splits=[3, 3] options.axis=2',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [1, 1, 6, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [
          {'input': 'splitInput'}, {'splits': [3, 3]}, {'options': {'axis': 2}}
        ],
        'outputs': ['splitOutput1', 'splitOutput2']
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375, 75.99607849121094, -61.05668640136719,
            -90.92643737792969, 53.916622161865234, 84.16268920898438
          ],
          'descriptor': {shape: [1, 1, 3, 2, 2], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -95.57494354248047, -52.40757751464844, -29.007186889648438,
            71.65496063232422, 50.66357421875, 21.364582061767578,
            -27.127241134643555, 65.1489486694336, -30.40681266784668,
            -6.818390369415283, 46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [1, 1, 3, 2, 2], dataType: 'float32'}
        }
      }
    }
  },
  {
    'name': 'split float32 5D tensor array splits=[2, 4] options.axis=0',
    'graph': {
      'inputs': {
        'splitInput': {
          'data': [
            -64.52056884765625,  -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375,  75.99607849121094,  -61.05668640136719,
            -90.92643737792969,  53.916622161865234, 84.16268920898438,
            -95.57494354248047,  -52.40757751464844, -29.007186889648438,
            71.65496063232422,   50.66357421875,     21.364582061767578,
            -27.127241134643555, 65.1489486694336,   -30.40681266784668,
            -6.818390369415283,  46.673622131347656, -21.12453842163086
          ],
          'descriptor': {shape: [6, 1, 1, 2, 2], dataType: 'float32'}
        }
      },
      'operators': [{
        'name': 'split',
        'arguments': [
          {'input': 'splitInput'}, {'splits': [2, 4]}, {'options': {'axis': 0}}
        ],
        'outputs': ['splitOutput1', 'splitOutput2']
      }],
      'expectedOutputs': {
        'splitOutput1': {
          'data': [
            -64.52056884765625, -84.60513305664062, -67.99282836914062,
            -23.446075439453125, -85.64382934570312, 46.87752151489258,
            -68.11224365234375, 75.99607849121094
          ],
          'descriptor': {shape: [2, 1, 1, 2, 2], dataType: 'float32'}
        },
        'splitOutput2': {
          'data': [
            -61.05668640136719, -90.92643737792969, 53.916622161865234,
            84.16268920898438, -95.57494354248047, -52.40757751464844,
            -29.007186889648438, 71.65496063232422, 50.66357421875,
            21.364582061767578, -27.127241134643555, 65.1489486694336,
            -30.40681266784668, -6.818390369415283, 46.673622131347656,
            -21.12453842163086
          ],
          'descriptor': {shape: [4, 1, 1, 2, 2], dataType: 'float32'}
        }
      }
    }
  }
];

if (navigator.ml) {
  splitTests.forEach((test) => {
    webnn_conformance_test(
        buildAndExecuteGraph, getSplitPrecisionTolerance, test);
  });
} else {
  test(() => assert_implements(navigator.ml, 'missing navigator.ml'));
}
