/**
 * Identify codeblocks following Apple Developer documentation structure.
 *
 * @return Array Array of elements
 */
function findRawCodeBlocks() {
    var elements = document.getElementsByClassName('codesample'),
        codeBlocks = [];
    for (var i = 0; i < elements.length; i++) {
        if (isValidCodeBlock(elements[i])) {
            codeBlocks.push(elements[i]);
        }
    }
    return codeBlocks;
}

/**
 * Check if current element is a valid code block.
 *
 * @return bool
 */
function isValidCodeBlock(element) {
    return (element.tagName.toLowerCase() == 'div');
}

/**
 * Convert original HTML structure to correct code block for Prism plugin.
 *
 * Prism needs the following structure:
 *
 * <pre><code class="language-objectivec">
 * // code block here
 * </code></pre>
 *
 * @param HTMLElement
 * @return HTMLElement
 */
function convertRawElementToCode(rawElement) {
    var linesOfCode = rawElement.getElementsByTagName('pre');

    var content = "";
    for (var i = 0; i < linesOfCode.length; i++) {
        content += linesOfCode[i].textContent + "\n";
    }

    var code = document.createElement('code');
    code.className = 'language-objectivec';
    code.appendChild(document.createTextNode(content));

    var pre = document.createElement('pre');
    pre.appendChild(code);
    return pre;
}

/**
 * Utility function to remove all childs from an element
 *
 * @param HTMLElement
 */
function emptyElement(el) {
    while (el.firstChild) {
        el.removeChild(el.firstChild);
    }
}

/**
 * Apply Prism syntax highlighter to code blocks
 */
function applyPrism() {
    var rawCodeBlocks = findRawCodeBlocks(),
        codeElement;
    for (var i = 0; i < rawCodeBlocks.length; i++) {
        codeElement = convertRawElementToCode(rawCodeBlocks[i]);
        emptyElement(rawCodeBlocks[i]);
        rawCodeBlocks[i].appendChild(codeElement);
    }
    Prism.highlightAll();
}

function enableLanguageLabel() {
    var Languages = {
        objectivec: 'Objective-C',
        clike: 'C-like',
        c: 'C',
        swift: 'Swift'
    };
    Prism.hooks.add('before-highlight', function(env) {
        var language = Languages[env.language] || env.language;
        env.element.setAttribute('data-language', language);
    });
}
