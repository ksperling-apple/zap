/*
 *
 *    Copyright (c) 2021 Project CHIP Authors
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

// Import helpers from zap core
const dbEnum = require('../../../../../../src-shared/db-enum');
const ChipTypesHelper = require('../../../app/zap-templates/common/ChipTypesHelper');

function asPythonType(zclType) {
  const type = ChipTypesHelper.asBasicType(zclType);
  switch (type) {
    case 'bool':
      return 'bool';
    case 'int8_t':
    case 'int16_t':
    case 'int32_t':
    case 'int64_t':
    case 'uint8_t':
    case 'uint16_t':
    case 'uint32_t':
    case 'uint64_t':
      return 'int';
    case 'char *':
      return 'str';
    case 'uint8_t *':
    case 'chip::ByteSpan':
      return 'bytes';
    case 'chip::CharSpan':
      return 'str';
  }
}

function asPythonCType(zclType) {
  const type = ChipTypesHelper.asBasicType(zclType);
  switch (type) {
    case 'bool':
    case 'int8_t':
    case 'int16_t':
    case 'int32_t':
    case 'int64_t':
    case 'uint8_t':
    case 'uint16_t':
    case 'uint32_t':
    case 'uint64_t':
      return 'c_' + type.replace('_t', '');
    case 'char *':
    case 'uint8_t *':
      return 'c_char_p';
  }
}

//
// Module exports
//
exports.asPythonType = asPythonType;
exports.asPythonCType = asPythonCType;

exports.meta = {
  category: dbEnum.helperCategory.matter,
  alias: ['controller/python/templates/helper.js', 'matter-python-helper'],
};
