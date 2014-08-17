/**
 * Unit tests for AppleDoc Highlight Code Safari Extension
 */

QUnit.test('findRawCodeBlocks', function (assert) {
    var elements = findRawCodeBlocks();
    assert.equal(elements.length, 1, "findRawCodeBlocks return correct number of elements");
});

QUnit.test('isValidCodeBlock', function (assert) {
    var validElement = document.createElement('div');
    var invalidElement = document.createElement('p');

    assert.ok(isValidCodeBlock(validElement));
    assert.ok(!isValidCodeBlock(invalidElement));
});

QUnit.test('convertRawElementToCode', function (assert) {
    var rawElement = document.getElementById('correct-code-block');
    var finalElement = convertRawElementToCode(rawElement);

    assert.equal(finalElement.tagName.toLowerCase(), 'pre', '<pre> is the outermost element');
    var codeEl = finalElement.firstChild;
    assert.equal(codeEl.tagName.toLowerCase(), 'code', '<code> is a child of <pre>');
    assert.ok(/\blanguage-.*/.test(codeEl.className), '<code> has at least one "language-xxx" class');
});

QUnit.test('emptyElement', function (assert) {
    var el1 = document.createElement('div'),
        el2 = document.createElement('p'),
        el3 = document.createElement('span');
    el1.appendChild(el2);
    el1.appendChild(el3);

    emptyElement(el1);
    assert.equal(el1.childNodes.length, 0, 'Element is empty');
});
