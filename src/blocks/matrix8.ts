/**
 * @file Matrix8 (8x8) block for Blockly.
 * roborisen G Cube LED 매트릭스 제어용. stock matrix(5x5)를 8x8로 확장한 field_matrix8을 사용한다.
 */
import * as Blockly from 'blockly/core'
import * as Constants from '../constants'

Blockly.Blocks.matrix8 = {
  /**
   * Block for 8x8 matrix value.
   */
  init: function (this: Blockly.Block) {
    this.jsonInit({
      message0: '%1',
      args0: [
        {
          type: 'field_matrix8',
          name: 'MATRIX8',
        },
      ],
      outputShape: Constants.OUTPUT_SHAPE_ROUND,
      output: 'Number',
      extensions: ['colours_pen'],
    })
  },
}
