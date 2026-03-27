exports.id = "component---src-pages-index-tsxhead";
exports.ids = ["component---src-pages-index-tsxhead"];
exports.modules = {

/***/ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = __webpack_require__(/*! react */ "react");

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var dist = {};

var blocks = {};

Object.defineProperty(blocks, "__esModule", { value: true });
blocks.BLOCKS = void 0;
/**
 * Map of all Contentful block types. Blocks contain inline or block nodes.
 */
var BLOCKS;
(function (BLOCKS) {
    BLOCKS["DOCUMENT"] = "document";
    BLOCKS["PARAGRAPH"] = "paragraph";
    BLOCKS["HEADING_1"] = "heading-1";
    BLOCKS["HEADING_2"] = "heading-2";
    BLOCKS["HEADING_3"] = "heading-3";
    BLOCKS["HEADING_4"] = "heading-4";
    BLOCKS["HEADING_5"] = "heading-5";
    BLOCKS["HEADING_6"] = "heading-6";
    BLOCKS["OL_LIST"] = "ordered-list";
    BLOCKS["UL_LIST"] = "unordered-list";
    BLOCKS["LIST_ITEM"] = "list-item";
    BLOCKS["HR"] = "hr";
    BLOCKS["QUOTE"] = "blockquote";
    BLOCKS["EMBEDDED_ENTRY"] = "embedded-entry-block";
    BLOCKS["EMBEDDED_ASSET"] = "embedded-asset-block";
    BLOCKS["EMBEDDED_RESOURCE"] = "embedded-resource-block";
    BLOCKS["TABLE"] = "table";
    BLOCKS["TABLE_ROW"] = "table-row";
    BLOCKS["TABLE_CELL"] = "table-cell";
    BLOCKS["TABLE_HEADER_CELL"] = "table-header-cell";
})(BLOCKS || (blocks.BLOCKS = BLOCKS = {}));

var inlines = {};

Object.defineProperty(inlines, "__esModule", { value: true });
inlines.INLINES = void 0;
/**
 * Map of all Contentful inline types. Inline contain inline or text nodes.
 *
 * @note This should be kept in alphabetical order since the
 * [validation package](https://github.com/contentful/content-stack/tree/master/packages/validation)
 *  relies on the values being in a predictable order.
 */
var INLINES;
(function (INLINES) {
    INLINES["ASSET_HYPERLINK"] = "asset-hyperlink";
    INLINES["EMBEDDED_ENTRY"] = "embedded-entry-inline";
    INLINES["EMBEDDED_RESOURCE"] = "embedded-resource-inline";
    INLINES["ENTRY_HYPERLINK"] = "entry-hyperlink";
    INLINES["HYPERLINK"] = "hyperlink";
    INLINES["RESOURCE_HYPERLINK"] = "resource-hyperlink";
})(INLINES || (inlines.INLINES = INLINES = {}));

var marks = {};

Object.defineProperty(marks, "__esModule", { value: true });
marks.MARKS = void 0;
/**
 * Map of all Contentful marks.
 */
var MARKS;
(function (MARKS) {
    MARKS["BOLD"] = "bold";
    MARKS["ITALIC"] = "italic";
    MARKS["UNDERLINE"] = "underline";
    MARKS["CODE"] = "code";
    MARKS["SUPERSCRIPT"] = "superscript";
    MARKS["SUBSCRIPT"] = "subscript";
    MARKS["STRIKETHROUGH"] = "strikethrough";
})(MARKS || (marks.MARKS = MARKS = {}));

var schemaConstraints = {};

(function (exports) {
	var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	};
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.V1_MARKS = exports.V1_NODE_TYPES = exports.TEXT_CONTAINERS = exports.HEADINGS = exports.CONTAINERS = exports.VOID_BLOCKS = exports.TABLE_BLOCKS = exports.LIST_ITEM_BLOCKS = exports.TOP_LEVEL_BLOCKS = void 0;
	var blocks_1 = blocks;
	var inlines_1 = inlines;
	var marks_1 = marks;
	/**
	 * Array of all top level block types.
	 * Only these block types can be the direct children of the document.
	 */
	exports.TOP_LEVEL_BLOCKS = [
	    blocks_1.BLOCKS.PARAGRAPH,
	    blocks_1.BLOCKS.HEADING_1,
	    blocks_1.BLOCKS.HEADING_2,
	    blocks_1.BLOCKS.HEADING_3,
	    blocks_1.BLOCKS.HEADING_4,
	    blocks_1.BLOCKS.HEADING_5,
	    blocks_1.BLOCKS.HEADING_6,
	    blocks_1.BLOCKS.OL_LIST,
	    blocks_1.BLOCKS.UL_LIST,
	    blocks_1.BLOCKS.HR,
	    blocks_1.BLOCKS.QUOTE,
	    blocks_1.BLOCKS.EMBEDDED_ENTRY,
	    blocks_1.BLOCKS.EMBEDDED_ASSET,
	    blocks_1.BLOCKS.EMBEDDED_RESOURCE,
	    blocks_1.BLOCKS.TABLE,
	];
	/**
	 * Array of all allowed block types inside list items
	 */
	exports.LIST_ITEM_BLOCKS = [
	    blocks_1.BLOCKS.PARAGRAPH,
	    blocks_1.BLOCKS.HEADING_1,
	    blocks_1.BLOCKS.HEADING_2,
	    blocks_1.BLOCKS.HEADING_3,
	    blocks_1.BLOCKS.HEADING_4,
	    blocks_1.BLOCKS.HEADING_5,
	    blocks_1.BLOCKS.HEADING_6,
	    blocks_1.BLOCKS.OL_LIST,
	    blocks_1.BLOCKS.UL_LIST,
	    blocks_1.BLOCKS.HR,
	    blocks_1.BLOCKS.QUOTE,
	    blocks_1.BLOCKS.EMBEDDED_ENTRY,
	    blocks_1.BLOCKS.EMBEDDED_ASSET,
	    blocks_1.BLOCKS.EMBEDDED_RESOURCE,
	];
	exports.TABLE_BLOCKS = [
	    blocks_1.BLOCKS.TABLE,
	    blocks_1.BLOCKS.TABLE_ROW,
	    blocks_1.BLOCKS.TABLE_CELL,
	    blocks_1.BLOCKS.TABLE_HEADER_CELL,
	];
	/**
	 * Array of all void block types
	 */
	exports.VOID_BLOCKS = [
	    blocks_1.BLOCKS.HR,
	    blocks_1.BLOCKS.EMBEDDED_ENTRY,
	    blocks_1.BLOCKS.EMBEDDED_ASSET,
	    blocks_1.BLOCKS.EMBEDDED_RESOURCE,
	];
	/**
	 * Dictionary of all container block types, and the set block types they accept as children.
	 *
	 * Note: This does not include `[BLOCKS.DOCUMENT]: TOP_LEVEL_BLOCKS`
	 */
	exports.CONTAINERS = (_a = {},
	    _a[blocks_1.BLOCKS.OL_LIST] = [blocks_1.BLOCKS.LIST_ITEM],
	    _a[blocks_1.BLOCKS.UL_LIST] = [blocks_1.BLOCKS.LIST_ITEM],
	    _a[blocks_1.BLOCKS.LIST_ITEM] = exports.LIST_ITEM_BLOCKS,
	    _a[blocks_1.BLOCKS.QUOTE] = [blocks_1.BLOCKS.PARAGRAPH],
	    _a[blocks_1.BLOCKS.TABLE] = [blocks_1.BLOCKS.TABLE_ROW],
	    _a[blocks_1.BLOCKS.TABLE_ROW] = [blocks_1.BLOCKS.TABLE_CELL, blocks_1.BLOCKS.TABLE_HEADER_CELL],
	    _a[blocks_1.BLOCKS.TABLE_CELL] = [blocks_1.BLOCKS.PARAGRAPH, blocks_1.BLOCKS.UL_LIST, blocks_1.BLOCKS.OL_LIST],
	    _a[blocks_1.BLOCKS.TABLE_HEADER_CELL] = [blocks_1.BLOCKS.PARAGRAPH],
	    _a);
	/**
	 * Array of all heading levels
	 */
	exports.HEADINGS = [
	    blocks_1.BLOCKS.HEADING_1,
	    blocks_1.BLOCKS.HEADING_2,
	    blocks_1.BLOCKS.HEADING_3,
	    blocks_1.BLOCKS.HEADING_4,
	    blocks_1.BLOCKS.HEADING_5,
	    blocks_1.BLOCKS.HEADING_6,
	];
	/**
	 * Array of all block types that may contain text and inline nodes.
	 */
	exports.TEXT_CONTAINERS = __spreadArray([blocks_1.BLOCKS.PARAGRAPH], exports.HEADINGS, true);
	/**
	 * Node types before `tables` release.
	 */
	exports.V1_NODE_TYPES = [
	    blocks_1.BLOCKS.DOCUMENT,
	    blocks_1.BLOCKS.PARAGRAPH,
	    blocks_1.BLOCKS.HEADING_1,
	    blocks_1.BLOCKS.HEADING_2,
	    blocks_1.BLOCKS.HEADING_3,
	    blocks_1.BLOCKS.HEADING_4,
	    blocks_1.BLOCKS.HEADING_5,
	    blocks_1.BLOCKS.HEADING_6,
	    blocks_1.BLOCKS.OL_LIST,
	    blocks_1.BLOCKS.UL_LIST,
	    blocks_1.BLOCKS.LIST_ITEM,
	    blocks_1.BLOCKS.HR,
	    blocks_1.BLOCKS.QUOTE,
	    blocks_1.BLOCKS.EMBEDDED_ENTRY,
	    blocks_1.BLOCKS.EMBEDDED_ASSET,
	    inlines_1.INLINES.HYPERLINK,
	    inlines_1.INLINES.ENTRY_HYPERLINK,
	    inlines_1.INLINES.ASSET_HYPERLINK,
	    inlines_1.INLINES.EMBEDDED_ENTRY,
	    'text',
	];
	/**
	 * Marks before `superscript` & `subscript` release.
	 */
	exports.V1_MARKS = [marks_1.MARKS.BOLD, marks_1.MARKS.CODE, marks_1.MARKS.ITALIC, marks_1.MARKS.UNDERLINE];
	
} (schemaConstraints));

var types = {};

Object.defineProperty(types, "__esModule", { value: true });

var nodeTypes = {};

Object.defineProperty(nodeTypes, "__esModule", { value: true });

var emptyDocument = {};

Object.defineProperty(emptyDocument, "__esModule", { value: true });
emptyDocument.EMPTY_DOCUMENT = void 0;
var blocks_1$1 = blocks;
/**
 * A rich text document considered to be empty.
 * Any other document structure than this is not considered empty.
 */
emptyDocument.EMPTY_DOCUMENT = {
    nodeType: blocks_1$1.BLOCKS.DOCUMENT,
    data: {},
    content: [
        {
            nodeType: blocks_1$1.BLOCKS.PARAGRAPH,
            data: {},
            content: [
                {
                    nodeType: 'text',
                    value: '',
                    marks: [],
                    data: {},
                },
            ],
        },
    ],
};

var helpers = {};

Object.defineProperty(helpers, "__esModule", { value: true });
helpers.isInline = isInline;
helpers.isBlock = isBlock;
helpers.isText = isText;
var blocks_1 = blocks;
var inlines_1 = inlines;
/**
 * Tiny replacement for Object.values(object).includes(key) to
 * avoid including CoreJS polyfills
 */
function hasValue(obj, value) {
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (value === obj[key]) {
            return true;
        }
    }
    return false;
}
/**
 * Checks if the node is an instance of Inline.
 */
function isInline(node) {
    return hasValue(inlines_1.INLINES, node.nodeType);
}
/**
 * Checks if the node is an instance of Block.
 */
function isBlock(node) {
    return hasValue(blocks_1.BLOCKS, node.nodeType);
}
/**
 * Checks if the node is an instance of Text.
 */
function isText(node) {
    return node.nodeType === 'text';
}

function commonjsRequire(path) {
	throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}

var schemas = {};

Object.defineProperty(schemas, "__esModule", { value: true });
schemas.getSchemaWithNodeType = getSchemaWithNodeType;
function getSchemaWithNodeType(nodeType) {
    try {
        return commonjsRequire("./generated/".concat(nodeType, ".json"));
    }
    catch (error) {
        throw new Error("Schema for nodeType \"".concat(nodeType, "\" was not found."));
    }
}

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getSchemaWithNodeType = exports.helpers = exports.EMPTY_DOCUMENT = exports.MARKS = exports.INLINES = exports.BLOCKS = void 0;
	var blocks_1 = blocks;
	Object.defineProperty(exports, "BLOCKS", { enumerable: true, get: function () { return blocks_1.BLOCKS; } });
	var inlines_1 = inlines;
	Object.defineProperty(exports, "INLINES", { enumerable: true, get: function () { return inlines_1.INLINES; } });
	var marks_1 = marks;
	Object.defineProperty(exports, "MARKS", { enumerable: true, get: function () { return marks_1.MARKS; } });
	__exportStar(schemaConstraints, exports);
	__exportStar(types, exports);
	__exportStar(nodeTypes, exports);
	var emptyDocument_1 = emptyDocument;
	Object.defineProperty(exports, "EMPTY_DOCUMENT", { enumerable: true, get: function () { return emptyDocument_1.EMPTY_DOCUMENT; } });
	var helpers$1 = __importStar(helpers);
	exports.helpers = helpers$1;
	var schemas_1 = schemas;
	Object.defineProperty(exports, "getSchemaWithNodeType", { enumerable: true, get: function () { return schemas_1.getSchemaWithNodeType; } });
	
} (dist));

function appendKeyToValidElement(element, key) {
    if (React.isValidElement(element) && element.key === null) {
        return React.cloneElement(element, { key: key });
    }
    return element;
}

function nodeListToReactComponents(nodes, options) {
    return nodes.map(function (node, index) {
        return appendKeyToValidElement(nodeToReactComponent(node, options), index);
    });
}
function nodeToReactComponent(node, options) {
    var renderNode = options.renderNode, renderMark = options.renderMark, renderText = options.renderText, preserveWhitespace = options.preserveWhitespace;
    if (dist.helpers.isText(node)) {
        var nodeValue = renderText ? renderText(node.value) : node.value;
        // Preserving whitespace is only supported with the default transformations.
        if (preserveWhitespace && !renderText) {
            // Preserve multiple spaces.
            nodeValue = nodeValue.replace(/ {2,}/g, function (match) { return '\u00A0'.repeat(match.length); });
            // Preserve line breaks.
            var lines_1 = nodeValue.split('\n');
            var jsxLines_1 = [];
            lines_1.forEach(function (line, index) {
                jsxLines_1.push(line);
                if (index !== lines_1.length - 1) {
                    jsxLines_1.push(React.createElement("br", null));
                }
            });
            nodeValue = jsxLines_1;
        }
        return node.marks.reduce(function (value, mark) {
            if (!renderMark[mark.type]) {
                return value;
            }
            return renderMark[mark.type](value);
        }, nodeValue);
    }
    else {
        var children = nodeListToReactComponents(node.content, options);
        if (!node.nodeType || !renderNode[node.nodeType]) {
            return React.createElement(React.Fragment, null, children);
        }
        return renderNode[node.nodeType](node, children);
    }
}

var _a, _b;
var defaultNodeRenderers = (_a = {},
    _a[dist.BLOCKS.DOCUMENT] = function (node, children) { return children; },
    _a[dist.BLOCKS.PARAGRAPH] = function (node, children) { return React.createElement("p", null, children); },
    _a[dist.BLOCKS.HEADING_1] = function (node, children) { return React.createElement("h1", null, children); },
    _a[dist.BLOCKS.HEADING_2] = function (node, children) { return React.createElement("h2", null, children); },
    _a[dist.BLOCKS.HEADING_3] = function (node, children) { return React.createElement("h3", null, children); },
    _a[dist.BLOCKS.HEADING_4] = function (node, children) { return React.createElement("h4", null, children); },
    _a[dist.BLOCKS.HEADING_5] = function (node, children) { return React.createElement("h5", null, children); },
    _a[dist.BLOCKS.HEADING_6] = function (node, children) { return React.createElement("h6", null, children); },
    _a[dist.BLOCKS.EMBEDDED_ENTRY] = function (node, children) { return React.createElement("div", null, children); },
    _a[dist.BLOCKS.EMBEDDED_RESOURCE] = function (node, children) { return React.createElement("div", null, children); },
    _a[dist.BLOCKS.UL_LIST] = function (node, children) { return React.createElement("ul", null, children); },
    _a[dist.BLOCKS.OL_LIST] = function (node, children) { return React.createElement("ol", null, children); },
    _a[dist.BLOCKS.LIST_ITEM] = function (node, children) { return React.createElement("li", null, children); },
    _a[dist.BLOCKS.QUOTE] = function (node, children) { return React.createElement("blockquote", null, children); },
    _a[dist.BLOCKS.HR] = function () { return React.createElement("hr", null); },
    _a[dist.BLOCKS.TABLE] = function (node, children) { return (React.createElement("table", null,
        React.createElement("tbody", null, children))); },
    _a[dist.BLOCKS.TABLE_ROW] = function (node, children) { return React.createElement("tr", null, children); },
    _a[dist.BLOCKS.TABLE_HEADER_CELL] = function (node, children) { return React.createElement("th", null, children); },
    _a[dist.BLOCKS.TABLE_CELL] = function (node, children) { return React.createElement("td", null, children); },
    _a[dist.INLINES.ASSET_HYPERLINK] = function (node) { return defaultInline(dist.INLINES.ASSET_HYPERLINK, node); },
    _a[dist.INLINES.ENTRY_HYPERLINK] = function (node) { return defaultInline(dist.INLINES.ENTRY_HYPERLINK, node); },
    _a[dist.INLINES.RESOURCE_HYPERLINK] = function (node) {
        return defaultInlineResource(dist.INLINES.RESOURCE_HYPERLINK, node);
    },
    _a[dist.INLINES.EMBEDDED_ENTRY] = function (node) { return defaultInline(dist.INLINES.EMBEDDED_ENTRY, node); },
    _a[dist.INLINES.EMBEDDED_RESOURCE] = function (node, _children) {
        return defaultInlineResource(dist.INLINES.EMBEDDED_RESOURCE, node);
    },
    _a[dist.INLINES.HYPERLINK] = function (node, children) { return React.createElement("a", { href: node.data.uri }, children); },
    _a);
var defaultMarkRenderers = (_b = {},
    _b[dist.MARKS.BOLD] = function (text) { return React.createElement("b", null, text); },
    _b[dist.MARKS.ITALIC] = function (text) { return React.createElement("i", null, text); },
    _b[dist.MARKS.UNDERLINE] = function (text) { return React.createElement("u", null, text); },
    _b[dist.MARKS.CODE] = function (text) { return React.createElement("code", null, text); },
    _b[dist.MARKS.SUPERSCRIPT] = function (text) { return React.createElement("sup", null, text); },
    _b[dist.MARKS.SUBSCRIPT] = function (text) { return React.createElement("sub", null, text); },
    _b[dist.MARKS.STRIKETHROUGH] = function (text) { return React.createElement("s", null, text); },
    _b);
function defaultInline(type, node) {
    return (React.createElement("span", { key: node.data.target.sys.id },
        "type: ",
        node.nodeType,
        " id: ",
        node.data.target.sys.id));
}
function defaultInlineResource(type, node) {
    return (React.createElement("span", { key: node.data.target.sys.urn },
        "type: ",
        node.nodeType,
        " urn: ",
        node.data.target.sys.urn));
}
/**
 * Serialize a Contentful Rich Text `document` to React tree
 */
function documentToReactComponents(richTextDocument, options) {
    if (options === void 0) { options = {}; }
    if (!richTextDocument) {
        return null;
    }
    return nodeToReactComponent(richTextDocument, {
        renderNode: __assign(__assign({}, defaultNodeRenderers), options.renderNode),
        renderMark: __assign(__assign({}, defaultMarkRenderers), options.renderMark),
        renderText: options.renderText,
        preserveWhitespace: options.preserveWhitespace,
    });
}

exports.documentToReactComponents = documentToReactComponents;
//# sourceMappingURL=rich-text-react-renderer.es5.js.map


/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/blocks.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/blocks.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BLOCKS = void 0;
/**
 * Map of all Contentful block types. Blocks contain inline or block nodes.
 */
var BLOCKS;
(function (BLOCKS) {
    BLOCKS["DOCUMENT"] = "document";
    BLOCKS["PARAGRAPH"] = "paragraph";
    BLOCKS["HEADING_1"] = "heading-1";
    BLOCKS["HEADING_2"] = "heading-2";
    BLOCKS["HEADING_3"] = "heading-3";
    BLOCKS["HEADING_4"] = "heading-4";
    BLOCKS["HEADING_5"] = "heading-5";
    BLOCKS["HEADING_6"] = "heading-6";
    BLOCKS["OL_LIST"] = "ordered-list";
    BLOCKS["UL_LIST"] = "unordered-list";
    BLOCKS["LIST_ITEM"] = "list-item";
    BLOCKS["HR"] = "hr";
    BLOCKS["QUOTE"] = "blockquote";
    BLOCKS["EMBEDDED_ENTRY"] = "embedded-entry-block";
    BLOCKS["EMBEDDED_ASSET"] = "embedded-asset-block";
    BLOCKS["TABLE"] = "table";
    BLOCKS["TABLE_ROW"] = "table-row";
    BLOCKS["TABLE_CELL"] = "table-cell";
    BLOCKS["TABLE_HEADER_CELL"] = "table-header-cell";
})(BLOCKS = exports.BLOCKS || (exports.BLOCKS = {}));
//# sourceMappingURL=blocks.js.map

/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/emptyDocument.js":
/*!************************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/emptyDocument.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var blocks_1 = __webpack_require__(/*! ./blocks */ "./node_modules/@contentful/rich-text-types/dist/blocks.js");
/**
 * A rich text document considered to be empty.
 * Any other document structure than this is not considered empty.
 */
var EMPTY_DOCUMENT = {
    nodeType: blocks_1.BLOCKS.DOCUMENT,
    data: {},
    content: [
        {
            nodeType: blocks_1.BLOCKS.PARAGRAPH,
            data: {},
            content: [
                {
                    nodeType: 'text',
                    value: '',
                    marks: [],
                    data: {},
                },
            ],
        },
    ],
};
exports["default"] = EMPTY_DOCUMENT;
//# sourceMappingURL=emptyDocument.js.map

/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/helpers.js":
/*!******************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/helpers.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isText = exports.isBlock = exports.isInline = void 0;
var blocks_1 = __webpack_require__(/*! ./blocks */ "./node_modules/@contentful/rich-text-types/dist/blocks.js");
var inlines_1 = __webpack_require__(/*! ./inlines */ "./node_modules/@contentful/rich-text-types/dist/inlines.js");
/**
 * Tiny replacement for Object.values(object).includes(key) to
 * avoid including CoreJS polyfills
 */
function hasValue(obj, value) {
    for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (value === obj[key]) {
            return true;
        }
    }
    return false;
}
/**
 * Checks if the node is an instance of Inline.
 */
function isInline(node) {
    return hasValue(inlines_1.INLINES, node.nodeType);
}
exports.isInline = isInline;
/**
 * Checks if the node is an instance of Block.
 */
function isBlock(node) {
    return hasValue(blocks_1.BLOCKS, node.nodeType);
}
exports.isBlock = isBlock;
/**
 * Checks if the node is an instance of Text.
 */
function isText(node) {
    return node.nodeType === 'text';
}
exports.isText = isText;
//# sourceMappingURL=helpers.js.map

/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.helpers = exports.EMPTY_DOCUMENT = exports.MARKS = exports.INLINES = exports.BLOCKS = void 0;
var blocks_1 = __webpack_require__(/*! ./blocks */ "./node_modules/@contentful/rich-text-types/dist/blocks.js");
Object.defineProperty(exports, "BLOCKS", ({ enumerable: true, get: function () { return blocks_1.BLOCKS; } }));
var inlines_1 = __webpack_require__(/*! ./inlines */ "./node_modules/@contentful/rich-text-types/dist/inlines.js");
Object.defineProperty(exports, "INLINES", ({ enumerable: true, get: function () { return inlines_1.INLINES; } }));
var marks_1 = __webpack_require__(/*! ./marks */ "./node_modules/@contentful/rich-text-types/dist/marks.js");
Object.defineProperty(exports, "MARKS", ({ enumerable: true, get: function () { return __importDefault(marks_1).default; } }));
__exportStar(__webpack_require__(/*! ./schemaConstraints */ "./node_modules/@contentful/rich-text-types/dist/schemaConstraints.js"), exports);
__exportStar(__webpack_require__(/*! ./types */ "./node_modules/@contentful/rich-text-types/dist/types.js"), exports);
__exportStar(__webpack_require__(/*! ./nodeTypes */ "./node_modules/@contentful/rich-text-types/dist/nodeTypes.js"), exports);
var emptyDocument_1 = __webpack_require__(/*! ./emptyDocument */ "./node_modules/@contentful/rich-text-types/dist/emptyDocument.js");
Object.defineProperty(exports, "EMPTY_DOCUMENT", ({ enumerable: true, get: function () { return __importDefault(emptyDocument_1).default; } }));
var helpers = __importStar(__webpack_require__(/*! ./helpers */ "./node_modules/@contentful/rich-text-types/dist/helpers.js"));
exports.helpers = helpers;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/inlines.js":
/*!******************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/inlines.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.INLINES = void 0;
/**
 * Map of all Contentful inline types. Inline contain inline or text nodes.
 */
var INLINES;
(function (INLINES) {
    INLINES["HYPERLINK"] = "hyperlink";
    INLINES["ENTRY_HYPERLINK"] = "entry-hyperlink";
    INLINES["ASSET_HYPERLINK"] = "asset-hyperlink";
    INLINES["EMBEDDED_ENTRY"] = "embedded-entry-inline";
})(INLINES = exports.INLINES || (exports.INLINES = {}));
//# sourceMappingURL=inlines.js.map

/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/marks.js":
/*!****************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/marks.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Map of all Contentful marks.
 */
var MARKS;
(function (MARKS) {
    MARKS["BOLD"] = "bold";
    MARKS["ITALIC"] = "italic";
    MARKS["UNDERLINE"] = "underline";
    MARKS["CODE"] = "code";
    MARKS["SUPERSCRIPT"] = "superscript";
    MARKS["SUBSCRIPT"] = "subscript";
})(MARKS || (MARKS = {}));
exports["default"] = MARKS;
//# sourceMappingURL=marks.js.map

/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/nodeTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/nodeTypes.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=nodeTypes.js.map

/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/schemaConstraints.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/schemaConstraints.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.V1_MARKS = exports.V1_NODE_TYPES = exports.TEXT_CONTAINERS = exports.HEADINGS = exports.CONTAINERS = exports.VOID_BLOCKS = exports.TABLE_BLOCKS = exports.LIST_ITEM_BLOCKS = exports.TOP_LEVEL_BLOCKS = void 0;
var blocks_1 = __webpack_require__(/*! ./blocks */ "./node_modules/@contentful/rich-text-types/dist/blocks.js");
var inlines_1 = __webpack_require__(/*! ./inlines */ "./node_modules/@contentful/rich-text-types/dist/inlines.js");
var marks_1 = __importDefault(__webpack_require__(/*! ./marks */ "./node_modules/@contentful/rich-text-types/dist/marks.js"));
/**
 * Array of all top level block types.
 * Only these block types can be the direct children of the document.
 */
exports.TOP_LEVEL_BLOCKS = [
    blocks_1.BLOCKS.PARAGRAPH,
    blocks_1.BLOCKS.HEADING_1,
    blocks_1.BLOCKS.HEADING_2,
    blocks_1.BLOCKS.HEADING_3,
    blocks_1.BLOCKS.HEADING_4,
    blocks_1.BLOCKS.HEADING_5,
    blocks_1.BLOCKS.HEADING_6,
    blocks_1.BLOCKS.OL_LIST,
    blocks_1.BLOCKS.UL_LIST,
    blocks_1.BLOCKS.HR,
    blocks_1.BLOCKS.QUOTE,
    blocks_1.BLOCKS.EMBEDDED_ENTRY,
    blocks_1.BLOCKS.EMBEDDED_ASSET,
    blocks_1.BLOCKS.TABLE,
];
/**
 * Array of all allowed block types inside list items
 */
exports.LIST_ITEM_BLOCKS = [
    blocks_1.BLOCKS.PARAGRAPH,
    blocks_1.BLOCKS.HEADING_1,
    blocks_1.BLOCKS.HEADING_2,
    blocks_1.BLOCKS.HEADING_3,
    blocks_1.BLOCKS.HEADING_4,
    blocks_1.BLOCKS.HEADING_5,
    blocks_1.BLOCKS.HEADING_6,
    blocks_1.BLOCKS.OL_LIST,
    blocks_1.BLOCKS.UL_LIST,
    blocks_1.BLOCKS.HR,
    blocks_1.BLOCKS.QUOTE,
    blocks_1.BLOCKS.EMBEDDED_ENTRY,
    blocks_1.BLOCKS.EMBEDDED_ASSET,
];
exports.TABLE_BLOCKS = [
    blocks_1.BLOCKS.TABLE,
    blocks_1.BLOCKS.TABLE_ROW,
    blocks_1.BLOCKS.TABLE_CELL,
    blocks_1.BLOCKS.TABLE_HEADER_CELL,
];
/**
 * Array of all void block types
 */
exports.VOID_BLOCKS = [blocks_1.BLOCKS.HR, blocks_1.BLOCKS.EMBEDDED_ENTRY, blocks_1.BLOCKS.EMBEDDED_ASSET];
/**
 * Dictionary of all container block types, and the set block types they accept as children.
 *
 * Note: This does not include `[BLOCKS.DOCUMENT]: TOP_LEVEL_BLOCKS`
 */
exports.CONTAINERS = (_a = {},
    _a[blocks_1.BLOCKS.OL_LIST] = [blocks_1.BLOCKS.LIST_ITEM],
    _a[blocks_1.BLOCKS.UL_LIST] = [blocks_1.BLOCKS.LIST_ITEM],
    _a[blocks_1.BLOCKS.LIST_ITEM] = exports.LIST_ITEM_BLOCKS,
    _a[blocks_1.BLOCKS.QUOTE] = [blocks_1.BLOCKS.PARAGRAPH],
    _a[blocks_1.BLOCKS.TABLE] = [blocks_1.BLOCKS.TABLE_ROW],
    _a[blocks_1.BLOCKS.TABLE_ROW] = [blocks_1.BLOCKS.TABLE_CELL, blocks_1.BLOCKS.TABLE_HEADER_CELL],
    _a[blocks_1.BLOCKS.TABLE_CELL] = [blocks_1.BLOCKS.PARAGRAPH],
    _a[blocks_1.BLOCKS.TABLE_HEADER_CELL] = [blocks_1.BLOCKS.PARAGRAPH],
    _a);
/**
 * Array of all heading levels
 */
exports.HEADINGS = [
    blocks_1.BLOCKS.HEADING_1,
    blocks_1.BLOCKS.HEADING_2,
    blocks_1.BLOCKS.HEADING_3,
    blocks_1.BLOCKS.HEADING_4,
    blocks_1.BLOCKS.HEADING_5,
    blocks_1.BLOCKS.HEADING_6,
];
/**
 * Array of all block types that may contain text and inline nodes.
 */
exports.TEXT_CONTAINERS = __spreadArray([blocks_1.BLOCKS.PARAGRAPH], exports.HEADINGS, true);
/**
 * Node types before `tables` release.
 */
exports.V1_NODE_TYPES = [
    blocks_1.BLOCKS.DOCUMENT,
    blocks_1.BLOCKS.PARAGRAPH,
    blocks_1.BLOCKS.HEADING_1,
    blocks_1.BLOCKS.HEADING_2,
    blocks_1.BLOCKS.HEADING_3,
    blocks_1.BLOCKS.HEADING_4,
    blocks_1.BLOCKS.HEADING_5,
    blocks_1.BLOCKS.HEADING_6,
    blocks_1.BLOCKS.OL_LIST,
    blocks_1.BLOCKS.UL_LIST,
    blocks_1.BLOCKS.LIST_ITEM,
    blocks_1.BLOCKS.HR,
    blocks_1.BLOCKS.QUOTE,
    blocks_1.BLOCKS.EMBEDDED_ENTRY,
    blocks_1.BLOCKS.EMBEDDED_ASSET,
    inlines_1.INLINES.HYPERLINK,
    inlines_1.INLINES.ENTRY_HYPERLINK,
    inlines_1.INLINES.ASSET_HYPERLINK,
    inlines_1.INLINES.EMBEDDED_ENTRY,
    'text',
];
/**
 * Marks before `superscript` & `subscript` release.
 */
exports.V1_MARKS = [marks_1.default.BOLD, marks_1.default.CODE, marks_1.default.ITALIC, marks_1.default.UNDERLINE];
//# sourceMappingURL=schemaConstraints.js.map

/***/ }),

/***/ "./node_modules/@contentful/rich-text-types/dist/types.js":
/*!****************************************************************!*\
  !*** ./node_modules/@contentful/rich-text-types/dist/types.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ "./node_modules/camelcase/index.js":
/*!*****************************************!*\
  !*** ./node_modules/camelcase/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";


const UPPERCASE = /[\p{Lu}]/u;
const LOWERCASE = /[\p{Ll}]/u;
const LEADING_CAPITAL = /^[\p{Lu}](?![\p{Lu}])/gu;
const IDENTIFIER = /([\p{Alpha}\p{N}_]|$)/u;
const SEPARATORS = /[_.\- ]+/;

const LEADING_SEPARATORS = new RegExp('^' + SEPARATORS.source);
const SEPARATORS_AND_IDENTIFIER = new RegExp(SEPARATORS.source + IDENTIFIER.source, 'gu');
const NUMBERS_AND_IDENTIFIER = new RegExp('\\d+' + IDENTIFIER.source, 'gu');

const preserveCamelCase = (string, toLowerCase, toUpperCase) => {
	let isLastCharLower = false;
	let isLastCharUpper = false;
	let isLastLastCharUpper = false;

	for (let i = 0; i < string.length; i++) {
		const character = string[i];

		if (isLastCharLower && UPPERCASE.test(character)) {
			string = string.slice(0, i) + '-' + string.slice(i);
			isLastCharLower = false;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = true;
			i++;
		} else if (isLastCharUpper && isLastLastCharUpper && LOWERCASE.test(character)) {
			string = string.slice(0, i - 1) + '-' + string.slice(i - 1);
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = false;
			isLastCharLower = true;
		} else {
			isLastCharLower = toLowerCase(character) === character && toUpperCase(character) !== character;
			isLastLastCharUpper = isLastCharUpper;
			isLastCharUpper = toUpperCase(character) === character && toLowerCase(character) !== character;
		}
	}

	return string;
};

const preserveConsecutiveUppercase = (input, toLowerCase) => {
	LEADING_CAPITAL.lastIndex = 0;

	return input.replace(LEADING_CAPITAL, m1 => toLowerCase(m1));
};

const postProcess = (input, toUpperCase) => {
	SEPARATORS_AND_IDENTIFIER.lastIndex = 0;
	NUMBERS_AND_IDENTIFIER.lastIndex = 0;

	return input.replace(SEPARATORS_AND_IDENTIFIER, (_, identifier) => toUpperCase(identifier))
		.replace(NUMBERS_AND_IDENTIFIER, m => toUpperCase(m));
};

const camelCase = (input, options) => {
	if (!(typeof input === 'string' || Array.isArray(input))) {
		throw new TypeError('Expected the input to be `string | string[]`');
	}

	options = {
		pascalCase: false,
		preserveConsecutiveUppercase: false,
		...options
	};

	if (Array.isArray(input)) {
		input = input.map(x => x.trim())
			.filter(x => x.length)
			.join('-');
	} else {
		input = input.trim();
	}

	if (input.length === 0) {
		return '';
	}

	const toLowerCase = options.locale === false ?
		string => string.toLowerCase() :
		string => string.toLocaleLowerCase(options.locale);
	const toUpperCase = options.locale === false ?
		string => string.toUpperCase() :
		string => string.toLocaleUpperCase(options.locale);

	if (input.length === 1) {
		return options.pascalCase ? toUpperCase(input) : toLowerCase(input);
	}

	const hasUpperCase = input !== toLowerCase(input);

	if (hasUpperCase) {
		input = preserveCamelCase(input, toLowerCase, toUpperCase);
	}

	input = input.replace(LEADING_SEPARATORS, '');

	if (options.preserveConsecutiveUppercase) {
		input = preserveConsecutiveUppercase(input, toLowerCase);
	} else {
		input = toLowerCase(input);
	}

	if (options.pascalCase) {
		input = toUpperCase(input.charAt(0)) + input.slice(1);
	}

	return postProcess(input, toUpperCase);
};

module.exports = camelCase;
// TODO: Remove this for the next major release
module.exports["default"] = camelCase;


/***/ }),

/***/ "./node_modules/contentful-resolve-response/dist/esm/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/contentful-resolve-response/dist/esm/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fast-copy */ "./node_modules/fast-copy/dist/esm/index.mjs");
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }



var UNRESOLVED_LINK = {}; // unique object to avoid polyfill bloat using Symbol()

/**
 * isLink Function
 * Checks if the object has sys.type "Link"
 * @param object
 */
var isLink = function isLink(object) {
  return object && object.sys && object.sys.type === 'Link';
};

/**
 * isResourceLink Function
 * Checks if the object has sys.type "ResourceLink"
 * @param object
 */
var isResourceLink = function isResourceLink(object) {
  return object && object.sys && object.sys.type === 'ResourceLink';
};

/**
 * Creates a key with spaceId and a key without for entityMap
 *
 * @param {*} sys
 * @param {String} sys.type
 * @param {String} sys.id
 * @param {*} sys.space
 * @param {*} sys.space.sys
 * @param {String} sys.space.id
 * @return {string[]}
 */
var makeEntityMapKeys = function makeEntityMapKeys(sys) {
  if (sys.space && sys.environment) {
    return [sys.type + '!' + sys.id, sys.space.sys.id + '!' + sys.environment.sys.id + '!' + sys.type + '!' + sys.id];
  }

  return [sys.type + '!' + sys.id];
};

/**
 * Looks up in entityMap
 *
 * @param entityMap
 * @param {*} linkData
 * @param {String} linkData.type
 * @param {String} linkData.linkType
 * @param {String} linkData.id
 * @param {String} linkData.urn
 * @return {String}
 */
var lookupInEntityMap = function lookupInEntityMap(entityMap, linkData) {
  var entryId = linkData.entryId,
      linkType = linkData.linkType,
      spaceId = linkData.spaceId,
      environmentId = linkData.environmentId;


  if (spaceId && environmentId) {
    return entityMap.get(spaceId + '!' + environmentId + '!' + linkType + '!' + entryId);
  }

  return entityMap.get(linkType + '!' + entryId);
};

var getIdsFromUrn = function getIdsFromUrn(urn) {
  var regExp = /.*:spaces\/([^/]+)(?:\/environments\/([^/]+))?\/entries\/([^/]+)$/;

  if (!regExp.test(urn)) {
    return undefined;
  }

  // eslint-disable-next-line no-unused-vars

  var _urn$match = urn.match(regExp),
      _urn$match2 = _slicedToArray(_urn$match, 4),
      _ = _urn$match2[0],
      spaceId = _urn$match2[1],
      _urn$match2$ = _urn$match2[2],
      environmentId = _urn$match2$ === undefined ? 'master' : _urn$match2$,
      entryId = _urn$match2[3];

  return { spaceId: spaceId, environmentId: environmentId, entryId: entryId };
};

/**
 * getResolvedLink Function
 *
 * @param entityMap
 * @param link
 * @return {undefined}
 */
var getResolvedLink = function getResolvedLink(entityMap, link) {
  var _link$sys = link.sys,
      type = _link$sys.type,
      linkType = _link$sys.linkType;

  if (type === 'ResourceLink') {
    if (!linkType.startsWith('Contentful:')) {
      return link;
    }

    var urn = link.sys.urn;

    var _getIdsFromUrn = getIdsFromUrn(urn),
        spaceId = _getIdsFromUrn.spaceId,
        environmentId = _getIdsFromUrn.environmentId,
        _entryId = _getIdsFromUrn.entryId;

    var extractedLinkType = linkType.split(':')[1];

    return lookupInEntityMap(entityMap, {
      linkType: extractedLinkType,
      entryId: _entryId,
      spaceId: spaceId,
      environmentId: environmentId
    }) || UNRESOLVED_LINK;
  }

  var entryId = link.sys.id;

  return lookupInEntityMap(entityMap, { linkType: linkType, entryId: entryId }) || UNRESOLVED_LINK;
};

/**
 * cleanUpLinks Function
 * - Removes unresolvable links from Arrays and Objects
 *
 * @param {Object[]|Object} input
 */
var cleanUpLinks = function cleanUpLinks(input) {
  if (Array.isArray(input)) {
    return input.filter(function (val) {
      return val !== UNRESOLVED_LINK;
    });
  }
  for (var key in input) {
    if (input[key] === UNRESOLVED_LINK) {
      delete input[key];
    }
  }
  return input;
};

/**
 * walkMutate Function
 * @param input
 * @param predicate
 * @param mutator
 * @param removeUnresolved
 * @return {*}
 */
var walkMutate = function walkMutate(input, predicate, mutator, removeUnresolved) {
  if (predicate(input)) {
    return mutator(input);
  }

  if (input && (typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
    for (var key in input) {
      // eslint-disable-next-line no-prototype-builtins
      if (input.hasOwnProperty(key)) {
        input[key] = walkMutate(input[key], predicate, mutator, removeUnresolved);
      }
    }
    if (removeUnresolved) {
      input = cleanUpLinks(input);
    }
  }
  return input;
};

var normalizeLink = function normalizeLink(entityMap, link, removeUnresolved) {
  var resolvedLink = getResolvedLink(entityMap, link);
  if (resolvedLink === UNRESOLVED_LINK) {
    return removeUnresolved ? resolvedLink : link;
  }
  return resolvedLink;
};

var makeEntryObject = function makeEntryObject(item, itemEntryPoints) {
  if (!Array.isArray(itemEntryPoints)) {
    return item;
  }

  var entryPoints = Object.keys(item).filter(function (ownKey) {
    return itemEntryPoints.indexOf(ownKey) !== -1;
  });

  return entryPoints.reduce(function (entryObj, entryPoint) {
    entryObj[entryPoint] = item[entryPoint];
    return entryObj;
  }, {});
};

/**
 * resolveResponse Function
 * Resolves contentful response to normalized form.
 * @param {Object} response Contentful response
 * @param {{removeUnresolved: Boolean, itemEntryPoints: Array<String>}|{}} options
 * @param {Boolean} options.removeUnresolved - Remove unresolved links default:false
 * @param {Array<String>} options.itemEntryPoints - Resolve links only in those item properties
 * @return {Object}
 */
var resolveResponse = function resolveResponse(response, options) {
  options = options || {};
  if (!response.items) {
    return [];
  }
  var responseClone = (0,fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(response);
  var allIncludes = Object.keys(responseClone.includes || {}).reduce(function (all, type) {
    return [].concat(_toConsumableArray(all), _toConsumableArray(response.includes[type]));
  }, []);

  var allEntries = [].concat(_toConsumableArray(responseClone.items), _toConsumableArray(allIncludes)).filter(function (entity) {
    return Boolean(entity.sys);
  });

  var entityMap = new Map(allEntries.reduce(function (acc, entity) {
    var entries = makeEntityMapKeys(entity.sys).map(function (key) {
      return [key, entity];
    });
    acc.push.apply(acc, _toConsumableArray(entries));
    return acc;
  }, []));

  allEntries.forEach(function (item) {
    var entryObject = makeEntryObject(item, options.itemEntryPoints);

    Object.assign(item, walkMutate(entryObject, function (x) {
      return isLink(x) || isResourceLink(x);
    }, function (link) {
      return normalizeLink(entityMap, link, options.removeUnresolved);
    }, options.removeUnresolved));
  });

  return responseClone.items;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (resolveResponse);

/***/ }),

/***/ "./node_modules/fast-copy/dist/esm/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/fast-copy/dist/esm/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyStrict: () => (/* binding */ copyStrict),
/* harmony export */   createCopier: () => (/* binding */ createCopier),
/* harmony export */   createStrictCopier: () => (/* binding */ createStrictCopier),
/* harmony export */   "default": () => (/* binding */ index)
/* harmony export */ });
var toStringFunction = Function.prototype.toString;
var create = Object.create;
var toStringObject = Object.prototype.toString;
/**
 * @classdesc Fallback cache for when WeakMap is not natively supported
 */
var LegacyCache = /** @class */ (function () {
    function LegacyCache() {
        this._keys = [];
        this._values = [];
    }
    LegacyCache.prototype.has = function (key) {
        return !!~this._keys.indexOf(key);
    };
    LegacyCache.prototype.get = function (key) {
        return this._values[this._keys.indexOf(key)];
    };
    LegacyCache.prototype.set = function (key, value) {
        this._keys.push(key);
        this._values.push(value);
    };
    return LegacyCache;
}());
function createCacheLegacy() {
    return new LegacyCache();
}
function createCacheModern() {
    return new WeakMap();
}
/**
 * Get a new cache object to prevent circular references.
 */
var createCache = typeof WeakMap !== 'undefined' ? createCacheModern : createCacheLegacy;
/**
 * Get an empty version of the object with the same prototype it has.
 */
function getCleanClone(prototype) {
    if (!prototype) {
        return create(null);
    }
    var Constructor = prototype.constructor;
    if (Constructor === Object) {
        return prototype === Object.prototype ? {} : create(prototype);
    }
    if (Constructor &&
        ~toStringFunction.call(Constructor).indexOf('[native code]')) {
        try {
            return new Constructor();
        }
        catch (_a) { }
    }
    return create(prototype);
}
function getRegExpFlagsLegacy(regExp) {
    var flags = '';
    if (regExp.global) {
        flags += 'g';
    }
    if (regExp.ignoreCase) {
        flags += 'i';
    }
    if (regExp.multiline) {
        flags += 'm';
    }
    if (regExp.unicode) {
        flags += 'u';
    }
    if (regExp.sticky) {
        flags += 'y';
    }
    return flags;
}
function getRegExpFlagsModern(regExp) {
    return regExp.flags;
}
/**
 * Get the flags to apply to the copied regexp.
 */
var getRegExpFlags = /test/g.flags === 'g' ? getRegExpFlagsModern : getRegExpFlagsLegacy;
function getTagLegacy(value) {
    var type = toStringObject.call(value);
    return type.substring(8, type.length - 1);
}
function getTagModern(value) {
    return value[Symbol.toStringTag] || getTagLegacy(value);
}
/**
 * Get the tag of the value passed, so that the correct copier can be used.
 */
var getTag = typeof Symbol !== 'undefined' ? getTagModern : getTagLegacy;

var defineProperty = Object.defineProperty, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols;
var _a = Object.prototype, hasOwnProperty = _a.hasOwnProperty, propertyIsEnumerable = _a.propertyIsEnumerable;
var SUPPORTS_SYMBOL = typeof getOwnPropertySymbols === 'function';
function getStrictPropertiesModern(object) {
    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
/**
 * Get the properites used when copying objects strictly. This includes both keys and symbols.
 */
var getStrictProperties = SUPPORTS_SYMBOL
    ? getStrictPropertiesModern
    : getOwnPropertyNames;
/**
 * Striclty copy all properties contained on the object.
 */
function copyOwnPropertiesStrict(value, clone, state) {
    var properties = getStrictProperties(value);
    for (var index = 0, length_1 = properties.length, property = void 0, descriptor = void 0; index < length_1; ++index) {
        property = properties[index];
        if (property === 'callee' || property === 'caller') {
            continue;
        }
        descriptor = getOwnPropertyDescriptor(value, property);
        if (!descriptor) {
            // In extra edge cases where the property descriptor cannot be retrived, fall back to
            // the loose assignment.
            clone[property] = state.copier(value[property], state);
            continue;
        }
        // Only clone the value if actually a value, not a getter / setter.
        if (!descriptor.get && !descriptor.set) {
            descriptor.value = state.copier(descriptor.value, state);
        }
        try {
            defineProperty(clone, property, descriptor);
        }
        catch (error) {
            // Tee above can fail on node in edge cases, so fall back to the loose assignment.
            clone[property] = descriptor.value;
        }
    }
    return clone;
}
/**
 * Deeply copy the indexed values in the array.
 */
function copyArrayLoose(array, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(array, clone);
    for (var index = 0, length_2 = array.length; index < length_2; ++index) {
        clone[index] = state.copier(array[index], state);
    }
    return clone;
}
/**
 * Deeply copy the indexed values in the array, as well as any custom properties.
 */
function copyArrayStrict(array, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(array, clone);
    return copyOwnPropertiesStrict(array, clone, state);
}
/**
 * Copy the contents of the ArrayBuffer.
 */
function copyArrayBuffer(arrayBuffer, _state) {
    return arrayBuffer.slice(0);
}
/**
 * Create a new Blob with the contents of the original.
 */
function copyBlob(blob, _state) {
    return blob.slice(0, blob.size, blob.type);
}
/**
 * Create a new DataView with the contents of the original.
 */
function copyDataView(dataView, state) {
    return new state.Constructor(copyArrayBuffer(dataView.buffer));
}
/**
 * Create a new Date based on the time of the original.
 */
function copyDate(date, state) {
    return new state.Constructor(date.getTime());
}
/**
 * Deeply copy the keys and values of the original.
 */
function copyMapLoose(map, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(map, clone);
    map.forEach(function (value, key) {
        clone.set(key, state.copier(value, state));
    });
    return clone;
}
/**
 * Deeply copy the keys and values of the original, as well as any custom properties.
 */
function copyMapStrict(map, state) {
    return copyOwnPropertiesStrict(map, copyMapLoose(map, state), state);
}
function copyObjectLooseLegacy(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    for (var key in object) {
        if (hasOwnProperty.call(object, key)) {
            clone[key] = state.copier(object[key], state);
        }
    }
    return clone;
}
function copyObjectLooseModern(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    for (var key in object) {
        if (hasOwnProperty.call(object, key)) {
            clone[key] = state.copier(object[key], state);
        }
    }
    var symbols = getOwnPropertySymbols(object);
    for (var index = 0, length_3 = symbols.length, symbol = void 0; index < length_3; ++index) {
        symbol = symbols[index];
        if (propertyIsEnumerable.call(object, symbol)) {
            clone[symbol] = state.copier(object[symbol], state);
        }
    }
    return clone;
}
/**
 * Deeply copy the properties (keys and symbols) and values of the original.
 */
var copyObjectLoose = SUPPORTS_SYMBOL
    ? copyObjectLooseModern
    : copyObjectLooseLegacy;
/**
 * Deeply copy the properties (keys and symbols) and values of the original, as well
 * as any hidden or non-enumerable properties.
 */
function copyObjectStrict(object, state) {
    var clone = getCleanClone(state.prototype);
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(object, clone);
    return copyOwnPropertiesStrict(object, clone, state);
}
/**
 * Create a new primitive wrapper from the value of the original.
 */
function copyPrimitiveWrapper(primitiveObject, state) {
    return new state.Constructor(primitiveObject.valueOf());
}
/**
 * Create a new RegExp based on the value and flags of the original.
 */
function copyRegExp(regExp, state) {
    var clone = new state.Constructor(regExp.source, getRegExpFlags(regExp));
    clone.lastIndex = regExp.lastIndex;
    return clone;
}
/**
 * Return the original value (an identity function).
 *
 * @note
 * THis is used for objects that cannot be copied, such as WeakMap.
 */
function copySelf(value, _state) {
    return value;
}
/**
 * Deeply copy the values of the original.
 */
function copySetLoose(set, state) {
    var clone = new state.Constructor();
    // set in the cache immediately to be able to reuse the object recursively
    state.cache.set(set, clone);
    set.forEach(function (value) {
        clone.add(state.copier(value, state));
    });
    return clone;
}
/**
 * Deeply copy the values of the original, as well as any custom properties.
 */
function copySetStrict(set, state) {
    return copyOwnPropertiesStrict(set, copySetLoose(set, state), state);
}

var isArray = Array.isArray;
var assign = Object.assign;
var getPrototypeOf = Object.getPrototypeOf || (function (obj) { return obj.__proto__; });
var DEFAULT_LOOSE_OPTIONS = {
    array: copyArrayLoose,
    arrayBuffer: copyArrayBuffer,
    blob: copyBlob,
    dataView: copyDataView,
    date: copyDate,
    error: copySelf,
    map: copyMapLoose,
    object: copyObjectLoose,
    regExp: copyRegExp,
    set: copySetLoose,
};
var DEFAULT_STRICT_OPTIONS = assign({}, DEFAULT_LOOSE_OPTIONS, {
    array: copyArrayStrict,
    map: copyMapStrict,
    object: copyObjectStrict,
    set: copySetStrict,
});
/**
 * Get the copiers used for each specific object tag.
 */
function getTagSpecificCopiers(options) {
    return {
        Arguments: options.object,
        Array: options.array,
        ArrayBuffer: options.arrayBuffer,
        Blob: options.blob,
        Boolean: copyPrimitiveWrapper,
        DataView: options.dataView,
        Date: options.date,
        Error: options.error,
        Float32Array: options.arrayBuffer,
        Float64Array: options.arrayBuffer,
        Int8Array: options.arrayBuffer,
        Int16Array: options.arrayBuffer,
        Int32Array: options.arrayBuffer,
        Map: options.map,
        Number: copyPrimitiveWrapper,
        Object: options.object,
        Promise: copySelf,
        RegExp: options.regExp,
        Set: options.set,
        String: copyPrimitiveWrapper,
        WeakMap: copySelf,
        WeakSet: copySelf,
        Uint8Array: options.arrayBuffer,
        Uint8ClampedArray: options.arrayBuffer,
        Uint16Array: options.arrayBuffer,
        Uint32Array: options.arrayBuffer,
        Uint64Array: options.arrayBuffer,
    };
}
/**
 * Create a custom copier based on the object-specific copy methods passed.
 */
function createCopier(options) {
    var normalizedOptions = assign({}, DEFAULT_LOOSE_OPTIONS, options);
    var tagSpecificCopiers = getTagSpecificCopiers(normalizedOptions);
    var array = tagSpecificCopiers.Array, object = tagSpecificCopiers.Object;
    function copier(value, state) {
        state.prototype = state.Constructor = undefined;
        if (!value || typeof value !== 'object') {
            return value;
        }
        if (state.cache.has(value)) {
            return state.cache.get(value);
        }
        state.prototype = getPrototypeOf(value);
        state.Constructor = state.prototype && state.prototype.constructor;
        // plain objects
        if (!state.Constructor || state.Constructor === Object) {
            return object(value, state);
        }
        // arrays
        if (isArray(value)) {
            return array(value, state);
        }
        var tagSpecificCopier = tagSpecificCopiers[getTag(value)];
        if (tagSpecificCopier) {
            return tagSpecificCopier(value, state);
        }
        return typeof value.then === 'function' ? value : object(value, state);
    }
    return function copy(value) {
        return copier(value, {
            Constructor: undefined,
            cache: createCache(),
            copier: copier,
            prototype: undefined,
        });
    };
}
/**
 * Create a custom copier based on the object-specific copy methods passed, defaulting to the
 * same internals as `copyStrict`.
 */
function createStrictCopier(options) {
    return createCopier(assign({}, DEFAULT_STRICT_OPTIONS, options));
}
/**
 * Copy an value deeply as much as possible, where strict recreation of object properties
 * are maintained. All properties (including non-enumerable ones) are copied with their
 * original property descriptors on both objects and arrays.
 */
var copyStrict = createStrictCopier({});
/**
 * Copy an value deeply as much as possible.
 */
var index = createCopier({});


//# sourceMappingURL=index.mjs.map


/***/ }),

/***/ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GatsbyImage: () => (/* binding */ X),
/* harmony export */   MainImage: () => (/* binding */ D),
/* harmony export */   Placeholder: () => (/* binding */ C),
/* harmony export */   StaticImage: () => (/* binding */ Z),
/* harmony export */   generateImageData: () => (/* binding */ b),
/* harmony export */   getImage: () => (/* binding */ I),
/* harmony export */   getImageData: () => (/* binding */ R),
/* harmony export */   getLowResolutionImageURL: () => (/* binding */ y),
/* harmony export */   getSrc: () => (/* binding */ W),
/* harmony export */   getSrcSet: () => (/* binding */ j),
/* harmony export */   withArtDirection: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! camelcase */ "./node_modules/camelcase/index.js");
/* harmony import */ var camelcase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(camelcase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);




function n() {
  return n = Object.assign ? Object.assign.bind() : function (e) {
    for (var t = 1; t < arguments.length; t++) {
      var a = arguments[t];
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
    }
    return e;
  }, n.apply(this, arguments);
}
function o(e, t) {
  if (null == e) return {};
  var a,
    i,
    r = {},
    n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(a = n[i]) >= 0 || (r[a] = e[a]);
  return r;
}
var s = [.25, .5, 1, 2],
  l = [750, 1080, 1366, 1920],
  u = [320, 654, 768, 1024, 1366, 1600, 1920, 2048, 2560, 3440, 3840, 4096],
  d = 800,
  c = 800,
  h = 4 / 3,
  g = function (e) {
    return console.warn(e);
  },
  p = function (e, t) {
    return e - t;
  },
  m = function (e, t) {
    switch (t) {
      case "constrained":
        return "(min-width: " + e + "px) " + e + "px, 100vw";
      case "fixed":
        return e + "px";
      case "fullWidth":
        return "100vw";
      default:
        return;
    }
  },
  f = function (e) {
    return e.map(function (e) {
      return e.src + " " + e.width + "w";
    }).join(",\n");
  };
function v(e) {
  var t = e.lastIndexOf(".");
  if (-1 !== t) {
    var a = e.slice(t + 1);
    if ("jpeg" === a) return "jpg";
    if (3 === a.length || 4 === a.length) return a;
  }
}
function w(e) {
  var t = e.layout,
    i = void 0 === t ? "constrained" : t,
    r = e.width,
    o = e.height,
    s = e.sourceMetadata,
    l = e.breakpoints,
    u = e.aspectRatio,
    d = e.formats,
    g = void 0 === d ? ["auto", "webp"] : d;
  return g = g.map(function (e) {
    return e.toLowerCase();
  }), i = camelcase__WEBPACK_IMPORTED_MODULE_1___default()(i), r && o ? n({}, e, {
    formats: g,
    layout: i,
    aspectRatio: r / o
  }) : (s.width && s.height && !u && (u = s.width / s.height), "fullWidth" === i ? (r = r || s.width || l[l.length - 1], o = o || Math.round(r / (u || h))) : (r || (r = o && u ? o * u : s.width ? s.width : o ? Math.round(o / h) : c), u && !o ? o = Math.round(r / u) : u || (u = r / o)), n({}, e, {
    width: r,
    height: o,
    aspectRatio: u,
    layout: i,
    formats: g
  }));
}
function y(e, t) {
  var a;
  return void 0 === t && (t = 20), null == (a = (0, (e = w(e)).generateImageSource)(e.filename, t, Math.round(t / e.aspectRatio), e.sourceMetadata.format || "jpg", e.fit, e.options)) ? void 0 : a.src;
}
function b(e) {
  var t,
    a = (e = w(e)).pluginName,
    i = e.sourceMetadata,
    r = e.generateImageSource,
    o = e.layout,
    u = e.fit,
    d = e.options,
    h = e.width,
    p = e.height,
    y = e.filename,
    b = e.reporter,
    S = void 0 === b ? {
      warn: g
    } : b,
    N = e.backgroundColor,
    x = e.placeholderURL;
  if (a || S.warn('[gatsby-plugin-image] "generateImageData" was not passed a plugin name'), "function" != typeof r) throw new Error("generateImageSource must be a function");
  i && (i.width || i.height) ? i.format || (i.format = v(y)) : i = {
    width: h,
    height: p,
    format: (null == (t = i) ? void 0 : t.format) || v(y) || "auto"
  };
  var I = new Set(e.formats);
  (0 === I.size || I.has("auto") || I.has("")) && (I.delete("auto"), I.delete(""), I.add(i.format)), I.has("jpg") && I.has("png") && (S.warn("[" + a + "] Specifying both 'jpg' and 'png' formats is not supported. Using 'auto' instead"), I.delete("jpg" === i.format ? "png" : "jpg"));
  var W = function (e) {
      var t = e.filename,
        a = e.layout,
        i = void 0 === a ? "constrained" : a,
        r = e.sourceMetadata,
        o = e.reporter,
        u = void 0 === o ? {
          warn: g
        } : o,
        d = e.breakpoints,
        h = void 0 === d ? l : d,
        p = Object.entries({
          width: e.width,
          height: e.height
        }).filter(function (e) {
          var t = e[1];
          return "number" == typeof t && t < 1;
        });
      if (p.length) throw new Error("Specified dimensions for images must be positive numbers (> 0). Problem dimensions you have are " + p.map(function (e) {
        return e.join(": ");
      }).join(", "));
      return "fixed" === i ? function (e) {
        var t = e.filename,
          a = e.sourceMetadata,
          i = e.width,
          r = e.height,
          n = e.fit,
          o = void 0 === n ? "cover" : n,
          l = e.outputPixelDensities,
          u = e.reporter,
          d = void 0 === u ? {
            warn: g
          } : u,
          h = a.width / a.height,
          p = k(void 0 === l ? s : l);
        if (i && r) {
          var m = M(a, {
            width: i,
            height: r,
            fit: o
          });
          i = m.width, r = m.height, h = m.aspectRatio;
        }
        i ? r || (r = Math.round(i / h)) : i = r ? Math.round(r * h) : c;
        var f = i;
        if (a.width < i || a.height < r) {
          var v = a.width < i ? "width" : "height";
          d.warn("\nThe requested " + v + ' "' + ("width" === v ? i : r) + 'px" for the image ' + t + " was larger than the actual image " + v + " of " + a[v] + "px. If possible, replace the current image with a larger one."), "width" === v ? (i = a.width, r = Math.round(i / h)) : i = (r = a.height) * h;
        }
        return {
          sizes: p.filter(function (e) {
            return e >= 1;
          }).map(function (e) {
            return Math.round(e * i);
          }).filter(function (e) {
            return e <= a.width;
          }),
          aspectRatio: h,
          presentationWidth: f,
          presentationHeight: Math.round(f / h),
          unscaledWidth: i
        };
      }(e) : "constrained" === i ? E(e) : "fullWidth" === i ? E(n({
        breakpoints: h
      }, e)) : (u.warn("No valid layout was provided for the image at " + t + ". Valid image layouts are fixed, fullWidth, and constrained. Found " + i), {
        sizes: [r.width],
        presentationWidth: r.width,
        presentationHeight: r.height,
        aspectRatio: r.width / r.height,
        unscaledWidth: r.width
      });
    }(n({}, e, {
      sourceMetadata: i
    })),
    j = {
      sources: []
    },
    R = e.sizes;
  R || (R = m(W.presentationWidth, o)), I.forEach(function (e) {
    var t = W.sizes.map(function (t) {
      var i = r(y, t, Math.round(t / W.aspectRatio), e, u, d);
      if (null != i && i.width && i.height && i.src && i.format) return i;
      S.warn("[" + a + "] The resolver for image " + y + " returned an invalid value.");
    }).filter(Boolean);
    if ("jpg" === e || "png" === e || "auto" === e) {
      var i = t.find(function (e) {
        return e.width === W.unscaledWidth;
      }) || t[0];
      i && (j.fallback = {
        src: i.src,
        srcSet: f(t),
        sizes: R
      });
    } else {
      var n;
      null == (n = j.sources) || n.push({
        srcSet: f(t),
        sizes: R,
        type: "image/" + e
      });
    }
  });
  var _ = {
    images: j,
    layout: o,
    backgroundColor: N
  };
  switch (x && (_.placeholder = {
    fallback: x
  }), o) {
    case "fixed":
      _.width = W.presentationWidth, _.height = W.presentationHeight;
      break;
    case "fullWidth":
      _.width = 1, _.height = 1 / W.aspectRatio;
      break;
    case "constrained":
      _.width = e.width || W.presentationWidth || 1, _.height = (_.width || 1) / W.aspectRatio;
  }
  return _;
}
var k = function (e) {
  return Array.from(new Set([1].concat(e))).sort(p);
};
function E(e) {
  var t,
    a = e.sourceMetadata,
    i = e.width,
    r = e.height,
    n = e.fit,
    o = void 0 === n ? "cover" : n,
    l = e.outputPixelDensities,
    u = e.breakpoints,
    c = e.layout,
    h = a.width / a.height,
    g = k(void 0 === l ? s : l);
  if (i && r) {
    var m = M(a, {
      width: i,
      height: r,
      fit: o
    });
    i = m.width, r = m.height, h = m.aspectRatio;
  }
  i = i && Math.min(i, a.width), r = r && Math.min(r, a.height), i || r || (r = (i = Math.min(d, a.width)) / h), i || (i = r * h);
  var f = i;
  return (a.width < i || a.height < r) && (i = a.width, r = a.height), i = Math.round(i), (null == u ? void 0 : u.length) > 0 ? (t = u.filter(function (e) {
    return e <= a.width;
  })).length < u.length && !t.includes(a.width) && t.push(a.width) : t = (t = g.map(function (e) {
    return Math.round(e * i);
  })).filter(function (e) {
    return e <= a.width;
  }), "constrained" !== c || t.includes(i) || t.push(i), {
    sizes: t = t.sort(p),
    aspectRatio: h,
    presentationWidth: f,
    presentationHeight: Math.round(f / h),
    unscaledWidth: i
  };
}
function M(e, t) {
  var a = e.width / e.height,
    i = t.width,
    r = t.height;
  switch (t.fit) {
    case "fill":
      i = t.width ? t.width : e.width, r = t.height ? t.height : e.height;
      break;
    case "inside":
      var n = t.width ? t.width : Number.MAX_SAFE_INTEGER,
        o = t.height ? t.height : Number.MAX_SAFE_INTEGER;
      i = Math.min(n, Math.round(o * a)), r = Math.min(o, Math.round(n / a));
      break;
    case "outside":
      var s = t.width ? t.width : 0,
        l = t.height ? t.height : 0;
      i = Math.max(s, Math.round(l * a)), r = Math.max(l, Math.round(s / a));
      break;
    default:
      t.width && !t.height && (i = t.width, r = Math.round(t.width / a)), t.height && !t.width && (i = Math.round(t.height * a), r = t.height);
  }
  return {
    width: i,
    height: r,
    aspectRatio: i / r
  };
}
var S = ["baseUrl", "urlBuilder", "sourceWidth", "sourceHeight", "pluginName", "formats", "breakpoints", "options"],
  N = ["images", "placeholder"];
function x() {
  return "undefined" != typeof GATSBY___IMAGE && GATSBY___IMAGE;
}
var I = function (e) {
    var t;
    return function (e) {
      var t, a;
      return Boolean(null == e || null == (t = e.images) || null == (a = t.fallback) ? void 0 : a.src);
    }(e) ? e : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImageData);
    }(e) ? e.gatsbyImageData : function (e) {
      return Boolean(null == e ? void 0 : e.gatsbyImage);
    }(e) ? e.gatsbyImage : null == e || null == (t = e.childImageSharp) ? void 0 : t.gatsbyImageData;
  },
  W = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.src;
  },
  j = function (e) {
    var t, a, i;
    return null == (t = I(e)) || null == (a = t.images) || null == (i = a.fallback) ? void 0 : i.srcSet;
  };
function R(e) {
  var t,
    a = e.baseUrl,
    i = e.urlBuilder,
    r = e.sourceWidth,
    s = e.sourceHeight,
    l = e.pluginName,
    d = void 0 === l ? "getImageData" : l,
    c = e.formats,
    h = void 0 === c ? ["auto"] : c,
    g = e.breakpoints,
    p = e.options,
    m = o(e, S);
  return null != (t = g) && t.length || "fullWidth" !== m.layout && "FULL_WIDTH" !== m.layout || (g = u), b(n({}, m, {
    pluginName: d,
    generateImageSource: function (e, t, a, r) {
      return {
        width: t,
        height: a,
        format: r,
        src: i({
          baseUrl: e,
          width: t,
          height: a,
          options: p,
          format: r
        })
      };
    },
    filename: a,
    formats: h,
    breakpoints: g,
    sourceMetadata: {
      width: r,
      height: s,
      format: "auto"
    }
  }));
}
function _(e, t) {
  var a,
    i,
    r,
    s = e.images,
    l = e.placeholder,
    u = n({}, o(e, N), {
      images: n({}, s, {
        sources: []
      }),
      placeholder: l && n({}, l, {
        sources: []
      })
    });
  return t.forEach(function (t) {
    var a,
      i = t.media,
      r = t.image;
    i ? (r.layout !== e.layout && "development" === "development" && console.warn('[gatsby-plugin-image] Mismatched image layout: expected "' + e.layout + '" but received "' + r.layout + '". All art-directed images use the same layout as the default image'), (a = u.images.sources).push.apply(a, r.images.sources.map(function (e) {
      return n({}, e, {
        media: i
      });
    }).concat([{
      media: i,
      srcSet: r.images.fallback.srcSet
    }])), u.placeholder && u.placeholder.sources.push({
      media: i,
      srcSet: r.placeholder.fallback
    })) :  true && console.warn("[gatsby-plugin-image] All art-directed images passed to must have a value set for `media`. Skipping.");
  }), (a = u.images.sources).push.apply(a, s.sources), null != l && l.sources && (null == (i = u.placeholder) || (r = i.sources).push.apply(r, l.sources)), u;
}
var A,
  O = ["src", "srcSet", "loading", "alt", "shouldLoad"],
  T = ["fallback", "sources", "shouldLoad"],
  z = function (t) {
    var a = t.src,
      i = t.srcSet,
      r = t.loading,
      s = t.alt,
      l = void 0 === s ? "" : s,
      u = t.shouldLoad,
      d = o(t, O);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", n({}, d, {
      decoding: "async",
      loading: r,
      src: u ? a : void 0,
      "data-src": u ? void 0 : a,
      srcSet: u ? i : void 0,
      "data-srcset": u ? void 0 : i,
      alt: l
    }));
  },
  L = function (t) {
    var a = t.fallback,
      i = t.sources,
      r = void 0 === i ? [] : i,
      s = t.shouldLoad,
      l = void 0 === s || s,
      u = o(t, T),
      d = u.sizes || (null == a ? void 0 : a.sizes),
      c = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(z, n({}, u, a, {
        sizes: d,
        shouldLoad: l
      }));
    return r.length ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("picture", null, r.map(function (t) {
      var a = t.media,
        i = t.srcSet,
        r = t.type;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("source", {
        key: a + "-" + r + "-" + i,
        type: r,
        media: a,
        srcSet: l ? i : void 0,
        "data-srcset": l ? void 0 : i,
        sizes: d
      });
    }), c) : c;
  };
z.propTypes = {
  src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool
}, L.displayName = "Picture", L.propTypes = {
  alt: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
  shouldLoad: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool,
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    src: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string
  }),
  sources: prop_types__WEBPACK_IMPORTED_MODULE_2__.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2__.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  }), prop_types__WEBPACK_IMPORTED_MODULE_2__.exact({
    media: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    type: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired,
    sizes: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
    srcSet: prop_types__WEBPACK_IMPORTED_MODULE_2__.string.isRequired
  })]))
};
var q = ["fallback"],
  C = function (t) {
    var a = t.fallback,
      i = o(t, q);
    return a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, i, {
      fallback: {
        src: a
      },
      "aria-hidden": !0,
      alt: ""
    })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", n({}, i));
  };
C.displayName = "Placeholder", C.propTypes = {
  fallback: prop_types__WEBPACK_IMPORTED_MODULE_2__.string,
  sources: null == (A = L.propTypes) ? void 0 : A.sources,
  alt: function (e, t, a) {
    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null;
  }
};
var D = function (t) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("noscript", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(L, n({}, t, {
    shouldLoad: !0
  }))));
};
D.displayName = "MainImage", D.propTypes = L.propTypes;
var P = ["children"],
  H = function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script", {
      type: "module",
      dangerouslySetInnerHTML: {
        __html: 'const t="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;if(t){const t=document.querySelectorAll("img[data-main-image]");for(let e of t){e.dataset.src&&(e.setAttribute("src",e.dataset.src),e.removeAttribute("data-src")),e.dataset.srcset&&(e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset"));const t=e.parentNode.querySelectorAll("source[data-srcset]");for(let e of t)e.setAttribute("srcset",e.dataset.srcset),e.removeAttribute("data-srcset");e.complete&&(e.style.opacity=1,e.parentNode.parentNode.querySelector("[data-placeholder-image]").style.opacity=0)}}'
      }
    });
  },
  F = function (t) {
    var a = t.layout,
      i = t.width,
      r = t.height;
    return "fullWidth" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      "aria-hidden": !0,
      style: {
        paddingTop: r / i * 100 + "%"
      }
    }) : "constrained" === a ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
      style: {
        maxWidth: i,
        display: "block"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
      alt: "",
      role: "presentation",
      "aria-hidden": "true",
      src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + i + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
      style: {
        maxWidth: "100%",
        display: "block",
        position: "static"
      }
    })) : null;
  },
  B = function (a) {
    var i = a.children,
      r = o(a, P);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(F, n({}, r)), i, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(H, null));
  },
  G = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
  V = ["style", "className"],
  U = function (e) {
    return e.replace(/\n/g, "");
  },
  X = function (t) {
    var a = t.as,
      i = void 0 === a ? "div" : a,
      r = t.className,
      s = t.class,
      l = t.style,
      u = t.image,
      d = t.loading,
      c = void 0 === d ? "lazy" : d,
      h = t.imgClassName,
      g = t.imgStyle,
      p = t.backgroundColor,
      m = t.objectFit,
      f = t.objectPosition,
      v = o(t, G);
    if (!u) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
    s && (r = s), g = n({
      objectFit: m,
      objectPosition: f,
      backgroundColor: p
    }, g);
    var w = u.width,
      y = u.height,
      b = u.layout,
      k = u.images,
      E = u.placeholder,
      M = u.backgroundColor,
      S = function (e, t, a) {
        var i = {},
          r = "gatsby-image-wrapper";
        return x() || (i.position = "relative", i.overflow = "hidden"), "fixed" === a ? (i.width = e, i.height = t) : "constrained" === a && (x() || (i.display = "inline-block", i.verticalAlign = "top"), r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
          className: r,
          "data-gatsby-image-wrapper": "",
          style: i
        };
      }(w, y, b),
      N = S.style,
      I = S.className,
      W = o(S, V),
      j = {
        fallback: void 0,
        sources: []
      };
    return k.fallback && (j.fallback = n({}, k.fallback, {
      srcSet: k.fallback.srcSet ? U(k.fallback.srcSet) : void 0
    })), k.sources && (j.sources = k.sources.map(function (e) {
      return n({}, e, {
        srcSet: U(e.srcSet)
      });
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(i, n({}, W, {
      style: n({}, N, l, {
        backgroundColor: p
      }),
      className: I + (r ? " " + r : "")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(B, {
      layout: b,
      width: w,
      height: y
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(C, n({}, function (e, t, a, i, r, o, s, l) {
      var u = {};
      o && (u.backgroundColor = o, "fixed" === a ? (u.width = i, u.height = r, u.backgroundColor = o, u.position = "relative") : ("constrained" === a || "fullWidth" === a) && (u.position = "absolute", u.top = 0, u.left = 0, u.bottom = 0, u.right = 0)), s && (u.objectFit = s), l && (u.objectPosition = l);
      var d = n({}, e, {
        "aria-hidden": !0,
        "data-placeholder-image": "",
        style: n({
          opacity: 1,
          transition: "opacity 500ms linear"
        }, u)
      });
      return x() || (d.style = {
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        width: "100%"
      }), d;
    }(E, 0, b, w, y, M, m, f))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(D, n({
      "data-gatsby-image-ssr": "",
      className: h
    }, v, function (e, t, a, i, r) {
      return void 0 === r && (r = {}), x() || (r = n({
        height: "100%",
        left: 0,
        position: "absolute",
        top: 0,
        transform: "translateZ(0)",
        transition: "opacity 250ms linear",
        width: "100%",
        willChange: "opacity"
      }, r)), n({}, a, {
        loading: i,
        shouldLoad: e,
        "data-main-image": "",
        style: n({}, r, {
          opacity: 0
        })
      });
    }("eager" === c, 0, j, c, g)))));
  },
  Y = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"],
  Z = function (t) {
    return function (a) {
      var i = a.src,
        r = a.__imageData,
        s = a.__error,
        l = o(a, Y);
      return s && console.warn(s), r ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(t, n({
        image: r
      }, l)) : (console.warn("Image not loaded", i), s || "development" !== "development" || console.warn('Please ensure that "gatsby-plugin-image" is included in the plugins array in gatsby-config.js, and that your version of gatsby is at least 2.24.78'), null);
    };
  }(X),
  J = function (e, t) {
    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t].concat([].slice.call(arguments, 2))) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.");
  },
  K = new Set(["fixed", "fullWidth", "constrained"]),
  Q = {
    src: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string).isRequired,
    alt: function (e, t, a) {
      return e.alt || "" === e.alt ? prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.apply((prop_types__WEBPACK_IMPORTED_MODULE_2___default()), [e, t, a].concat([].slice.call(arguments, 3))) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html');
    },
    width: J,
    height: J,
    sizes: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
    layout: function (e) {
      if (void 0 !== e.layout && !K.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".');
    }
  };
Z.displayName = "StaticImage", Z.propTypes = Q;


/***/ }),

/***/ "./node_modules/gatsby-source-contentful/rich-text.js":
/*!************************************************************!*\
  !*** ./node_modules/gatsby-source-contentful/rich-text.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.renderRichText = renderRichText;
var _richTextReactRenderer = __webpack_require__(/*! @contentful/rich-text-react-renderer */ "./node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js");
var _contentfulResolveResponse = _interopRequireDefault(__webpack_require__(/*! contentful-resolve-response */ "./node_modules/contentful-resolve-response/dist/esm/index.js"));
// @ts-check

function renderRichText({
  raw,
  references
}, options = {}) {
  const richText = JSON.parse(raw || null);

  // If no references are given, there is no need to resolve them
  if (!references || !references.length) {
    return (0, _richTextReactRenderer.documentToReactComponents)(richText, options);
  }

  // Create dummy response so we can use official libraries for resolving the entries
  const dummyResponse = {
    items: [{
      sys: {
        type: `Entry`
      },
      richText
    }],
    includes: {
      Entry: references.filter(({
        __typename
      }) => __typename !== `ContentfulAsset`).map(reference => {
        return {
          ...reference,
          sys: {
            type: `Entry`,
            id: reference.contentful_id
          }
        };
      }),
      Asset: references.filter(({
        __typename
      }) => __typename === `ContentfulAsset`).map(reference => {
        return {
          ...reference,
          sys: {
            type: `Asset`,
            id: reference.contentful_id
          }
        };
      })
    }
  };
  const resolved = (0, _contentfulResolveResponse.default)(dummyResponse, {
    removeUnresolved: true
  });
  return (0, _richTextReactRenderer.documentToReactComponents)(resolved[0].richText, options);
}

/***/ }),

/***/ "./node_modules/is-absolute-url/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-absolute-url/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isAbsoluteUrl)
/* harmony export */ });
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;

// Windows paths like `c:\`
const WINDOWS_PATH_REGEX = /^[a-zA-Z]:\\/;

function isAbsoluteUrl(url) {
	if (typeof url !== 'string') {
		throw new TypeError(`Expected a \`string\`, got \`${typeof url}\``);
	}

	if (WINDOWS_PATH_REGEX.test(url)) {
		return false;
	}

	return ABSOLUTE_URL_REGEX.test(url);
}


/***/ }),

/***/ "./public/page-data/sq/d/1327704458.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/1327704458.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"allContentfulPoem":{"nodes":[{"id":"87aaf227-8b96-58e0-bda7-8bf1720bf913","title":"Ab Initio","slug":"ab-initio","media":{"mimeType":"audio/mpeg"}},{"id":"0aadef36-3720-5de0-93ec-91885208f4d4","title":"Becoming Australian","slug":"becoming-australian","media":null},{"id":"eaec894f-124f-56bd-820a-1e494833153f","title":"Being Determined","slug":"being-determined","media":{"mimeType":"audio/mpeg"}},{"id":"52ff95f2-5198-51d3-81b5-d783a43ff298","title":"Dear Kate, kind daughter","slug":"dear-kate-kind-daughter","media":{"mimeType":"audio/mpeg"}},{"id":"8d2a6e7c-e556-55b6-8616-67d380f46a3c","title":"Endless Brevity","slug":"endless-brevity","media":{"mimeType":"audio/mpeg"}},{"id":"afe98513-c3a5-5650-a863-f38747cba8c5","title":"Epithalamion","slug":"epithalamion","media":{"mimeType":"audio/mpeg"}},{"id":"b7814943-e366-5a06-976b-140a9ac7b488","title":"Family Album","slug":"family-album","media":null},{"id":"f82618d7-55e3-557b-8309-b343e2f0e371","title":"Game Over","slug":"game-over","media":{"mimeType":"audio/mpeg"}},{"id":"faf0a858-bc89-5cce-8050-b0802cda5f6a","title":"In The Sleep of Reason","slug":"in-the-sleep-of-reason","media":{"mimeType":"audio/mpeg"}},{"id":"3f852501-3a25-59fe-aed5-efc6e5d392d6","title":"In the History-Bird\'s Beak","slug":"in-the-history-birds-beak","media":{"mimeType":"audio/mpeg"}},{"id":"da749c4d-967e-5bf4-b846-d9e8c33ff5da","title":"Old Codger","slug":"old-codger","media":null},{"id":"c292a532-fcc4-5377-a2d8-91d84c43488f","title":"Recollection in Tranquillity","slug":"recollection-in-tranquillity","media":{"mimeType":"audio/mpeg"}},{"id":"202b9f33-69b5-513b-bd7b-7c2518d7d6e8","title":"Suppressing the Welsh","slug":"suppressing-the-welsh","media":null},{"id":"25c9045e-4371-5a43-83e1-883e145fc9e3","title":"The Last of England","slug":"the-last-of-england","media":{"mimeType":"audio/mpeg"}},{"id":"19d0333b-b2ae-5ad2-b809-547476c53baf","title":"The Solace of Art","slug":"the-solace-of-art","media":{"mimeType":"audio/mpeg"}},{"id":"4f8f59a5-d04c-5abc-8a48-4bbcf12c5b4f","title":"To My Wife in Tokyo","slug":"to-my-wife-in-tokyo","media":{"mimeType":"audio/mpeg"}},{"id":"709465a1-7a45-5aea-aec0-517fcb351498","title":"Wartime","slug":"wartime","media":null}]}}}');

/***/ }),

/***/ "./public/page-data/sq/d/3090726915.json":
/*!***********************************************!*\
  !*** ./public/page-data/sq/d/3090726915.json ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"data":{"allContentfulPoem":{"nodes":[{"id":"87aaf227-8b96-58e0-bda7-8bf1720bf913","title":"Ab Initio","slug":"ab-initio"},{"id":"0aadef36-3720-5de0-93ec-91885208f4d4","title":"Becoming Australian","slug":"becoming-australian"},{"id":"eaec894f-124f-56bd-820a-1e494833153f","title":"Being Determined","slug":"being-determined"},{"id":"52ff95f2-5198-51d3-81b5-d783a43ff298","title":"Dear Kate, kind daughter","slug":"dear-kate-kind-daughter"},{"id":"8d2a6e7c-e556-55b6-8616-67d380f46a3c","title":"Endless Brevity","slug":"endless-brevity"},{"id":"afe98513-c3a5-5650-a863-f38747cba8c5","title":"Epithalamion","slug":"epithalamion"},{"id":"b7814943-e366-5a06-976b-140a9ac7b488","title":"Family Album","slug":"family-album"},{"id":"f82618d7-55e3-557b-8309-b343e2f0e371","title":"Game Over","slug":"game-over"},{"id":"faf0a858-bc89-5cce-8050-b0802cda5f6a","title":"In The Sleep of Reason","slug":"in-the-sleep-of-reason"},{"id":"3f852501-3a25-59fe-aed5-efc6e5d392d6","title":"In the History-Bird\'s Beak","slug":"in-the-history-birds-beak"},{"id":"da749c4d-967e-5bf4-b846-d9e8c33ff5da","title":"Old Codger","slug":"old-codger"},{"id":"c292a532-fcc4-5377-a2d8-91d84c43488f","title":"Recollection in Tranquillity","slug":"recollection-in-tranquillity"},{"id":"202b9f33-69b5-513b-bd7b-7c2518d7d6e8","title":"Suppressing the Welsh","slug":"suppressing-the-welsh"},{"id":"25c9045e-4371-5a43-83e1-883e145fc9e3","title":"The Last of England","slug":"the-last-of-england"},{"id":"19d0333b-b2ae-5ad2-b809-547476c53baf","title":"The Solace of Art","slug":"the-solace-of-art"},{"id":"4f8f59a5-d04c-5abc-8a48-4bbcf12c5b4f","title":"To My Wife in Tokyo","slug":"to-my-wife-in-tokyo"},{"id":"709465a1-7a45-5aea-aec0-517fcb351498","title":"Wartime","slug":"wartime"}]}}}');

/***/ }),

/***/ "./src/components/fallback.tsx":
/*!*************************************!*\
  !*** ./src/components/fallback.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Fallback)
/* harmony export */ });
function Fallback({
  blocktype
}) {
  console.warn(`No component found for: ${blocktype}`);
  return null;
}

/***/ }),

/***/ "./src/components/head.tsx":
/*!*********************************!*\
  !*** ./src/components/head.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Head)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SITE_NAME = "Selwyn Pritchard — Poet";
function Head({
  title,
  description,
  image
}) {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
  const defaultDescription = "The poetry of Selwyn Pritchard (4 August 1933 – 30 June 2005).";
  const metaDescription = description || defaultDescription;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", null, fullTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "description",
    content: metaDescription
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:type",
    content: "website"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:site_name",
    content: SITE_NAME
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:title",
    content: fullTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:description",
    content: metaDescription
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    property: "og:image",
    content: image.url
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:title",
    content: fullTitle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:description",
    content: metaDescription
  }), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("meta", {
    name: "twitter:image",
    content: image.url
  }));
}

/***/ }),

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ "./src/styles.css.ts");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/layout.scss */ "./src/styles/layout.scss");
/* harmony import */ var _styles_layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_layout_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _main_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-nav */ "./src/components/main-nav.tsx");





const Layout = ({
  children,
  showPoemDropdown
}) => {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_main_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
    showPoemDropdown: showPoemDropdown
  }), children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.Slice, {
    alias: "footer",
    allowEmpty: true,
    __renderedByLocation: {
      fileName: "src/components/layout.tsx",
      lineNumber: 17,
      columnNumber: 7,
      endLineNumber: 17,
      endColumnNumber: 42
    }
  }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "./src/components/main-nav.tsx":
/*!*************************************!*\
  !*** ./src/components/main-nav.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MainNav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/components/ui.tsx");
/* harmony import */ var _poem_nav_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poem-nav-dropdown */ "./src/components/poem-nav-dropdown.tsx");




const navItems = [{
  label: "Home",
  path: "/"
}, {
  label: "Biography",
  path: "/biography"
}, {
  label: "Published Work",
  path: "/published-work"
}, {
  label: "Poems",
  path: "/poems"
}, {
  label: "E-books",
  path: "/e-books"
}];
function MainNav({
  showPoemDropdown
}) {
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_0__.useState(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
    className: "mainNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "mainNavDesktop"
  }, navItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: item.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.path,
    className: "mainNavLink"
  }, item.label)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mainNavMobileBar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    className: "mainNavHamburger",
    onClick: () => setIsOpen(prev => !prev),
    "aria-label": isOpen ? "Close menu" : "Open menu",
    "aria-expanded": isOpen
  }, isOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: "3",
    y1: "6",
    x2: "21",
    y2: "6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: "3",
    y1: "12",
    x2: "21",
    y2: "12"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("line", {
    x1: "3",
    y1: "18",
    x2: "21",
    y2: "18"
  }))), showPoemDropdown && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_poem_nav_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"], null))), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
    className: "mainNavMobile"
  }, navItems.map(item => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    key: item.path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: item.path,
    className: "mainNavMobileLink",
    onClick: () => setIsOpen(false)
  }, item.label)))));
}

/***/ }),

/***/ "./src/components/poem-list.css.ts":
/*!*****************************************!*\
  !*** ./src/components/poem-list.css.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   poemGrid: () => (/* binding */ poemGrid),
/* harmony export */   poemMenuItem: () => (/* binding */ poemMenuItem),
/* harmony export */   poemMenuLink: () => (/* binding */ poemMenuLink),
/* harmony export */   poemMenuLinkActive: () => (/* binding */ poemMenuLinkActive),
/* harmony export */   poemMenuText: () => (/* binding */ poemMenuText)
/* harmony export */ });
/* harmony import */ var src_components_poem_list_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_components_poem_list_css_ts_vanilla_css_source_LnBvZW0tbGlzdF9wb2VtTWVudUxpbmtfXzF5OXN5dWowIHsKICBmb250LXNpemU6IDAuODc1cmVtOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBjb2xvcjogaW5oZXJpdDsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua19fMXk5c3l1ajA6aG92ZXIgLnBvZW0tbGlzdF9wb2VtTWVudVRleHRfXzF5OXN5dWoxIHsKICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua0FjdGl2ZV9fMXk5c3l1ajIgewogIGZvbnQtd2VpZ2h0OiBib2xkOwp9Ci5wb2VtLWxpc3RfcG9lbU1lbnVJdGVtX18xeTlzeXVqMyB7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Ci5wb2VtLWxpc3RfcG9lbUdyaWRfXzF5OXN5dWo0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAwOwogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7CiAgZ2FwOiAwLjI1cmVtIDFyZW07CiAgbWFyZ2luLXRvcDogMnJlbTsKfQpAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIH0KfQpAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOwogIH0KfQ_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/components/poem-list.css.ts.vanilla.css!=!../../node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/poem-list.css.ts.vanilla.css","source":"LnBvZW0tbGlzdF9wb2VtTWVudUxpbmtfXzF5OXN5dWowIHsKICBmb250LXNpemU6IDAuODc1cmVtOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBjb2xvcjogaW5oZXJpdDsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua19fMXk5c3l1ajA6aG92ZXIgLnBvZW0tbGlzdF9wb2VtTWVudVRleHRfXzF5OXN5dWoxIHsKICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua0FjdGl2ZV9fMXk5c3l1ajIgewogIGZvbnQtd2VpZ2h0OiBib2xkOwp9Ci5wb2VtLWxpc3RfcG9lbU1lbnVJdGVtX18xeTlzeXVqMyB7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Ci5wb2VtLWxpc3RfcG9lbUdyaWRfXzF5OXN5dWo0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAwOwogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7CiAgZ2FwOiAwLjI1cmVtIDFyZW07CiAgbWFyZ2luLXRvcDogMnJlbTsKfQpAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIH0KfQpAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOwogIH0KfQ"}!../../node_modules/@vanilla-extract/webpack-plugin/extracted.js */ "src/components/poem-list.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/components/poem-list.css.ts.vanilla.css\",\"source\":\"LnBvZW0tbGlzdF9wb2VtTWVudUxpbmtfXzF5OXN5dWowIHsKICBmb250LXNpemU6IDAuODc1cmVtOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBjb2xvcjogaW5oZXJpdDsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua19fMXk5c3l1ajA6aG92ZXIgLnBvZW0tbGlzdF9wb2VtTWVudVRleHRfXzF5OXN5dWoxIHsKICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua0FjdGl2ZV9fMXk5c3l1ajIgewogIGZvbnQtd2VpZ2h0OiBib2xkOwp9Ci5wb2VtLWxpc3RfcG9lbU1lbnVJdGVtX18xeTlzeXVqMyB7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Ci5wb2VtLWxpc3RfcG9lbUdyaWRfXzF5OXN5dWo0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAwOwogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7CiAgZ2FwOiAwLjI1cmVtIDFyZW07CiAgbWFyZ2luLXRvcDogMnJlbTsKfQpAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIH0KfQpAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOwogIH0KfQ\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js");
/* harmony import */ var src_components_poem_list_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_components_poem_list_css_ts_vanilla_css_source_LnBvZW0tbGlzdF9wb2VtTWVudUxpbmtfXzF5OXN5dWowIHsKICBmb250LXNpemU6IDAuODc1cmVtOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBjb2xvcjogaW5oZXJpdDsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua19fMXk5c3l1ajA6aG92ZXIgLnBvZW0tbGlzdF9wb2VtTWVudVRleHRfXzF5OXN5dWoxIHsKICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua0FjdGl2ZV9fMXk5c3l1ajIgewogIGZvbnQtd2VpZ2h0OiBib2xkOwp9Ci5wb2VtLWxpc3RfcG9lbU1lbnVJdGVtX18xeTlzeXVqMyB7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Ci5wb2VtLWxpc3RfcG9lbUdyaWRfXzF5OXN5dWo0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAwOwogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7CiAgZ2FwOiAwLjI1cmVtIDFyZW07CiAgbWFyZ2luLXRvcDogMnJlbTsKfQpAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIH0KfQpAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOwogIH0KfQ_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_components_poem_list_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_components_poem_list_css_ts_vanilla_css_source_LnBvZW0tbGlzdF9wb2VtTWVudUxpbmtfXzF5OXN5dWowIHsKICBmb250LXNpemU6IDAuODc1cmVtOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBjb2xvcjogaW5oZXJpdDsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua19fMXk5c3l1ajA6aG92ZXIgLnBvZW0tbGlzdF9wb2VtTWVudVRleHRfXzF5OXN5dWoxIHsKICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua0FjdGl2ZV9fMXk5c3l1ajIgewogIGZvbnQtd2VpZ2h0OiBib2xkOwp9Ci5wb2VtLWxpc3RfcG9lbU1lbnVJdGVtX18xeTlzeXVqMyB7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Ci5wb2VtLWxpc3RfcG9lbUdyaWRfXzF5OXN5dWo0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAwOwogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7CiAgZ2FwOiAwLjI1cmVtIDFyZW07CiAgbWFyZ2luLXRvcDogMnJlbTsKfQpAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIH0KfQpAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOwogIH0KfQ_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0__);

var poemGrid = 'poem-list_poemGrid__1y9syuj4';
var poemMenuItem = 'poem-list_poemMenuItem__1y9syuj3';
var poemMenuLink = 'poem-list_poemMenuLink__1y9syuj0';
var poemMenuLinkActive = 'poem-list_poemMenuLinkActive__1y9syuj2';
var poemMenuText = 'poem-list_poemMenuText__1y9syuj1';

/***/ }),

/***/ "./src/components/poem-list.tsx":
/*!**************************************!*\
  !*** ./src/components/poem-list.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_1327704458_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/1327704458.json */ "./public/page-data/sq/d/1327704458.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui.css */ "./src/components/ui.css.ts");
/* harmony import */ var _poem_list_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poem-list.css */ "./src/components/poem-list.css.ts");






const navLinks = [{
  to: "/",
  label: "Home"
}, {
  to: "/biography",
  label: "Biography"
}, {
  to: "/published-work",
  label: "Published Work"
}, {
  to: "/e-books",
  label: "E-books"
}];
const PoemList = ({
  type
}) => {
  var _data$allContentfulPo;
  const location = (0,_reach_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const data = _public_page_data_sq_d_1327704458_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const poems = (data === null || data === void 0 ? void 0 : (_data$allContentfulPo = data.allContentfulPoem) === null || _data$allContentfulPo === void 0 ? void 0 : _data$allContentfulPo.nodes) || [];
  const showNav = type !== "home" && type !== "poems";
  const isGrid = type === "poems";
  if (!poems.length) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
      className: _ui_css__WEBPACK_IMPORTED_MODULE_4__.container
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("p", null, "No poems found."));
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("nav", {
    className: _ui_css__WEBPACK_IMPORTED_MODULE_4__.container,
    "aria-label": "Poems menu"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: isGrid ? _poem_list_css__WEBPACK_IMPORTED_MODULE_5__.poemGrid : undefined,
    style: isGrid ? {} : {
      listStyle: "none",
      margin: 0,
      padding: 0
    }
  }, showNav && navLinks.map(({
    to,
    label
  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
    key: to,
    className: _poem_list_css__WEBPACK_IMPORTED_MODULE_5__.poemMenuItem
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
    to: to,
    className: _poem_list_css__WEBPACK_IMPORTED_MODULE_5__.poemMenuLink
  }, label))), poems.map(p => {
    var _p$media, _p$media$mimeType;
    const isActive = location.pathname === `/poems/${p.slug}` || location.pathname === `/poems/${p.slug}/`;
    const hasAudio = (_p$media = p.media) === null || _p$media === void 0 ? void 0 : (_p$media$mimeType = _p$media.mimeType) === null || _p$media$mimeType === void 0 ? void 0 : _p$media$mimeType.startsWith("audio");
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      key: p.id,
      className: _poem_list_css__WEBPACK_IMPORTED_MODULE_5__.poemMenuItem
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: `/poems/${p.slug}`,
      className: `${_poem_list_css__WEBPACK_IMPORTED_MODULE_5__.poemMenuLink}${isActive ? ` ${_poem_list_css__WEBPACK_IMPORTED_MODULE_5__.poemMenuLinkActive}` : ""}`,
      style: {
        display: "flex",
        alignItems: "flex-start"
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      title: hasAudio ? "Audio available" : undefined,
      style: {
        width: "1.2rem",
        flexShrink: 0,
        fontSize: "0.9em",
        color: "#b35000",
        visibility: hasAudio ? "visible" : "hidden"
      }
    }, "\u266A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
      className: _poem_list_css__WEBPACK_IMPORTED_MODULE_5__.poemMenuText
    }, p.title || "Untitled")));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoemList);

/***/ }),

/***/ "./src/components/poem-nav-dropdown.tsx":
/*!**********************************************!*\
  !*** ./src/components/poem-nav-dropdown.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _public_page_data_sq_d_3090726915_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/3090726915.json */ "./public/page-data/sq/d/3090726915.json");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reach/router */ "./node_modules/@gatsbyjs/reach-router/dist/index.modern.mjs");




const PoemNavDropdown = () => {
  var _data$allContentfulPo;
  const [isOpen, setIsOpen] = react__WEBPACK_IMPORTED_MODULE_1__.useState(false);
  const location = (0,_reach_router__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  const data = _public_page_data_sq_d_3090726915_json__WEBPACK_IMPORTED_MODULE_0__.data;
  const poems = (data === null || data === void 0 ? void 0 : (_data$allContentfulPo = data.allContentfulPoem) === null || _data$allContentfulPo === void 0 ? void 0 : _data$allContentfulPo.nodes) || [];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "poemDropdown"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "poemDropdownTrigger",
    onClick: () => setIsOpen(prev => !prev),
    "aria-expanded": isOpen,
    "aria-label": isOpen ? "Close poems menu" : "Open poems menu"
  }, "Poems ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "poemDropdownArrow"
  }, isOpen ? "▲" : "▼")), isOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("ul", {
    className: "poemDropdownMenu",
    role: "menu"
  }, poems.map(poem => {
    const isActive = location.pathname === `/poems/${poem.slug}` || location.pathname === `/poems/${poem.slug}/`;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("li", {
      key: poem.id,
      role: "none"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: `/poems/${poem.slug}`,
      className: `poemDropdownLink${isActive ? " poemDropdownLinkActive" : ""}`,
      onClick: () => setIsOpen(false),
      role: "menuitem"
    }, poem.title));
  })));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PoemNavDropdown);

/***/ }),

/***/ "./src/components/ui.css.ts":
/*!**********************************!*\
  !*** ./src/components/ui.css.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   avatar: () => (/* binding */ avatar),
/* harmony export */   backgrounds: () => (/* binding */ backgrounds),
/* harmony export */   blockLink: () => (/* binding */ blockLink),
/* harmony export */   blockquote: () => (/* binding */ blockquote),
/* harmony export */   box: () => (/* binding */ box),
/* harmony export */   buttons: () => (/* binding */ buttons),
/* harmony export */   container: () => (/* binding */ container),
/* harmony export */   containerLarge: () => (/* binding */ containerLarge),
/* harmony export */   containers: () => (/* binding */ containers),
/* harmony export */   ctaLink: () => (/* binding */ ctaLink),
/* harmony export */   debug: () => (/* binding */ debug),
/* harmony export */   flex: () => (/* binding */ flex),
/* harmony export */   flexGap: () => (/* binding */ flexGap),
/* harmony export */   flexVariants: () => (/* binding */ flexVariants),
/* harmony export */   gutter: () => (/* binding */ gutter),
/* harmony export */   iconLink: () => (/* binding */ iconLink),
/* harmony export */   icons: () => (/* binding */ icons),
/* harmony export */   interactiveIcon: () => (/* binding */ interactiveIcon),
/* harmony export */   link: () => (/* binding */ link),
/* harmony export */   list: () => (/* binding */ list),
/* harmony export */   logos: () => (/* binding */ logos),
/* harmony export */   margin: () => (/* binding */ margin),
/* harmony export */   margin0: () => (/* binding */ margin0),
/* harmony export */   marginBottom: () => (/* binding */ marginBottom),
/* harmony export */   marginLeft: () => (/* binding */ marginLeft),
/* harmony export */   marginRight: () => (/* binding */ marginRight),
/* harmony export */   marginTop: () => (/* binding */ marginTop),
/* harmony export */   marginY: () => (/* binding */ marginY),
/* harmony export */   media: () => (/* binding */ media),
/* harmony export */   navButtonlink: () => (/* binding */ navButtonlink),
/* harmony export */   navlink: () => (/* binding */ navlink),
/* harmony export */   order: () => (/* binding */ order),
/* harmony export */   padding: () => (/* binding */ padding),
/* harmony export */   paddingY: () => (/* binding */ paddingY),
/* harmony export */   radii: () => (/* binding */ radii),
/* harmony export */   section: () => (/* binding */ section),
/* harmony export */   text: () => (/* binding */ text),
/* harmony export */   visuallyHidden: () => (/* binding */ visuallyHidden),
/* harmony export */   widths: () => (/* binding */ widths)
/* harmony export */ });
/* harmony import */ var src_theme_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_theme_css_ts_vanilla_css_source_H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5_fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v_456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL_m1_wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR_UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0_3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY_sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU_GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF_DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp_Sp7yp_S9ePNv_9f_wiy9gcAAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/theme.css.ts.vanilla.css!=!../../node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/theme.css.ts.vanilla.css","source":"#H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5-fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v-456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL-m1-wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR-UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0-3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY-sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU-GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF-DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp-Sp7yp_S9ePNv_9f-wiy9gcAAA"}!../../node_modules/@vanilla-extract/webpack-plugin/extracted.js */ "src/theme.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/theme.css.ts.vanilla.css\",\"source\":\"#H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5-fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v-456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL-m1-wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR-UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0-3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY-sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU-GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF-DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp-Sp7yp_S9ePNv_9f-wiy9gcAAA\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js");
/* harmony import */ var src_theme_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_theme_css_ts_vanilla_css_source_H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5_fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v_456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL_m1_wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR_UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0_3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY_sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU_GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF_DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp_Sp7yp_S9ePNv_9f_wiy9gcAAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_theme_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_theme_css_ts_vanilla_css_source_H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5_fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v_456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL_m1_wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR_UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0_3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY_sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU_GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF_DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp_Sp7yp_S9ePNv_9f_wiy9gcAAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_components_ui_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_components_ui_css_ts_vanilla_css_source_H4sIAAAAAAAAE9VcTY_bOBK9z6_QZYH0Ag4sWXa7ncsie9gskNNksQufGrIs2_qWJbc_2t1Z5L_vRLJKpMQiaY8n2EyAAVrme1Uq1it_iNLHJn2Mi7yO0jwpHx_bcnrcTL3_uZ5x_htck639WHlvUblh8mkSr8n1URqfG7OzcPJX9x9Ys3LfZpPsmRXr7yoqQvpYpnuD9LVU7TdpvletBXkpyhOJiGQRndyQ4EnW_747aN8G9Vj63cibmZmuhneTtzH8m7s3FTjxlRjMI_KsjgLk6HJJLQURu917tedIUE2N5GJhoLrQce1a7JskyXJVvAtGJ_TXfbX6uLk1FGboq6Lo7WndlnyJty5Z_5s0_qURe8rr_ulI4yydJ9P0jo5VisvTvI6KWXwv6MyjfK67egyOgmmJWPqfp10V1de938tqKqjEsL7wFCKOUbB2mjRm6hKsja2giAaE0ALLTwusuaYf5Nc2PSOb9Myieu0yNubZu1GsbA4x1GCODYSa9BJDlmyJcLStiBCWiZ1fBDoZIwWDfTgLk8_J_U5ScD1HWMQGe9Pp3_5pOtbz3tqqjrdvbOq1GZJa4fl3IaT6UPEsknY2V9rx5CTZVKdirxKXyFFDo798I82l6cCkzLMPhrobgpiWtwNkb5APumRPiDvR8hAIJ_1yACQyxFyJpCZHjkD5MMIGQrkUY8kikaHnAtkrkfOAbkZIRcCWeiRC0DGI_QEgnvSQ_vobsdYCO8LgcX4JmMsBLgksBjh3RgLIa4ILMZ4P8ZCkGsCi1E_jLEQ5obAYpxTxDIB8rFKgF_HwlSaHqJsJ5qeLU1fmrZaouLfLK3rQ1pCFXy3tT0XrHkl2n_3tN_l9d95AREAf0ohsrTCRj5r1F1pK_97lqy8vOhGFxx3xWjNZ1vSBEX8jEXFD_TB31pZAA7J789ouKa8ABzy3w9puKbGABwk4M9puKbQABxU4C9ouKbaAByE4N_TcE3JAThowV_ScE3dATjWHf_BxuuKDxJg8CMDgaYCIQGGf2Mg0JQhJMAOiA0EmlqEBNgFWwOBpiAhAXZCYiDQVCXRcN3rZ6dMnkezYkVD5lkxLbd1r7e92ZyiObM5Wp7rXp8HszlFo2ZztJzXvZ5TszlF02ZztPzXvf6fzOb_2IoGzWGyPpvNKTXDbI4uL_u_vmRmc0qNMZujy9FaqkdHsz21JpkNGurXWipgucWiUsQsFumCt5YqXmGxqFQ9i0W6Qq6lEnmyWFTKpMUiXVLXUk19sVhU6qrFIl2D11IRLi0WlUJssagp2nwSJNXsSmygsJ0oW8kWzRwrNthCVdRGW4N6bbClKddgC_XQGG0NirXBlqZWgy1UwqvR1qBSG2xpCjXYQg2cjbYGZdpgS1OlwRZm_5vR1qBGG2xpSjTYwrx_N9oaFGiDLU19Blt9ef5uNDaszgZruuKM5iAXg6nZ3KA0m8xpKjOag3QMfLO5QV02mdOUZTQHGRkEZnODomwyp6nJaA6SMpiZzQ0qssmcpiCjOcjLIDSbG5RjkzlNNd43dbf0hmIczGVjfPM5jrL4A1Fovb96E1_2KzanXTCKAyCMYOHggFR9nR3QYBQHUCr3Dg5IJdnZAQ1GcQDFs3RwQKrTzg5oMIoDKKcHBwek4u3sgAajOIACixwckCq6swMajOIASm7j4IBU5p0d0GAUB3B8CGIHD_TS7_yCDqT6gErYuvggjQfuPmhAqg8ohsTFB2mQcPdBA1J9QD3sXHyQRg53HzQg1QeUxN7FB2k4cfdBA1J9QFUcXHyQxhh3HzQg7kMZbdP0cdN6UsCTp4BvSxSvSbnLivPKO6TbbcIexG2KcpuUkw7UVDD2MYoJUIgnsbuBhax1EJ4GBU_XGBAMgn8_4I_TMs7QwPM1BoBCWOhnDJviTX1mFpz0z2wdn2DCkzPPq5O3esJ_Gz5PqzgHGLQsUv_Y1g1Pnn6KUkpp6LgC7KcXFQkml3T91KAmweQarR_WGxJMLrr6IfmVBNMBw9pxJsHksqgfCt9IMLnOkYaxdxJNr1ukEeg7DSfXIf3gMZvScHJd0df9mU_DyXVCX7JnAQ0n5_19tZ3NaDi5q_LYneABglAh4Gd75MZf2wqOqpppJv5O0mIs0N8zzezdSWOMBbp9ppmCO4mNsWDva_bRTqpjLJgEmsmwk_wYC_aCZkbrpEPGgimhmZY6CZKxoChnmrmlmzI5D3aTZn7oJlHOgx2lmeO5aZXzYFdp5mluouU82FmauZabejkPdpdmvuQmY8YjSzkdM431_Ds7a4aCfpIxmgN6pKI5D2bLs4WH1DTnwWzJLDykqjkPZsvRwkPqmvNgtuQWHlLZnAezpbDwkNrmPJgtJwsPqW7O08v7xUJE61swYZeVNiZS4YIJO62yMZEaF0zYbbWNiVS5YMKOa2xMpM4FE3bdq42JVDpnkqV_1nCNtf6voj_JNjNvkpM67zgwacyb36TGOw5MF_OeNqnvjgMSJTRvVJPa7jggRULz7jOp644DkiM0bymTmu44IC1C8z4xqeeOA9UcWnZ_SS0zFuiacG5mIXXMWLBzFmYWUsOMBbvn3sxC6pexYActzSykdhkLdtGDmYXUbcciqTaMRjxjzX5my12UbajM5i56oCmYMEdiGxOpX8GEebK1MZEqFkyYK4mNidSyYMJ82dmYSEULJsyZvY2J1LVgwrw52JhIdQumXuCpjYrWOHBh9z1ZuUilAxd24LOVi9Q7cGEXZlYuUvXAhZ14tHKR2gcu7MbcykVWAMElF4FCxzauA1gA5BmfdCi023V73BTbd2j3cpGUPG9X5DV7_wRadRe_sfdRsPuzvuU5kWcs3aX_sCvVJC_KY5QBpGSQ7r2JyUGBdJe_CAhzXgC_c0DSbSMzT6VDffzqN35xaMmf3SnByJIITvyG5e2CgS2Pv1IwquaUlF_aiHRHJ0VQzEdo3I9kDA45GGKHGiv6lrvomGbvctuqDY5wlLd_c4l0e5dltCmyLaBeXYI9sORP3QOuvqUVqvE_qKGur8m_yyLjHvFbx1ANhH_jCFbN5iApuLmdgn_5mHxrhQ5vVISvtwsMSj7_1QLznMbP_CQrPF80HzWo7VjkBTR9t0UPJ1zPLtE7Jtu0OQKk_lNDp7wPO7_Dh3Rt_XVrh03Vl5zaseHOKoSJaxxdIKXYMK3a4J6i0hVyTGV06z_s24cfIaXcbrxVJVfHcHbOyHf_rhN5uAAevppmTO4q6_RJsGK8r2_NdoLuUeaCwvLFWOy7K9U_ebT3lenXLtskcrsQby5Qd9mUJkfKjT7CEiCIYm_nJ7eLixFlihWRZZiD_nBjQqtcmRgzveq6Af_YlGSwSg_D69JLc7V3tsz0PCNqbjIinLlpfkhKdNa22516M5LyK25OfZHNYnimr3Py231t5pHrzLNQmtO3Pg2iYsy4mcj4AU_Vl_S7trkVBZtganfVxw_HXbAHT6MagGP9bpsTvwsGtycfQiacvUpM3eoqkpT6_4c_srItMdk_ctpS3w6u6zJXXM2f5KId4v3ETxc_7smjybR9AfqJFCuj_RaQ1Ibo43m27pqy6hqcilbUS19FXiXlpCv6l2hlyX5klm6yIn2WiB_XIEPv90yVSEbzySa15pJKmOSt0cByJzIRbjleDDY8rKu3N338zfV_FaGh7zHnd0Tf_Q_V4KtN2MIXtpvmGzKZe38DGF9n99YkOhvwcE1gdkJLaQk3mN8W8K_KmugVzmbQuVvjVlnlMRk1z_1br_khbPLDUgit77_JASDH_iW7ItXxLVNyxCTZynKKynesYCd0z8tjUCd7ZzOymezY6sP4_6IfkVkEYEVvy7Jp8v_b_LHl2SzcQNaoou59XLCUnhJ_chf1PCUE3IXhpihoOMc_lR2CDr1Fd8tGqqW3s1Dzdi16jOsKli3iA1s7xxGc6pnjYuTqUbeaIK5rPcwGRGBr5_rg6PTA0vOawdlbsi0pd_PKHdsK75ZyvHsGJgK0mZay6iIWndPj1MT9Y9og07tSjWMtka0E4sCb_vuyxLbei_nWUzcwC1Qz8fY0Z_aT_PJetLAY3s7j6ZuSJcUGqS14N6V5zuNTQlVP5MY_5LpI83RKG_jPuJ_DE_8SkN_bIl8mkBeHyogzXiOO1lXYx_FS7eNQSvbXtGraRH_wt6mAP_5w1OwwApBnKVt4eleg_gw9dg_Rfc_N6F7PUNd7p4KvuhcedGmXTm0hZN5emhvnXd7d0fwgTKQZ_vNtk08Fhpzvu9XaR2yxHWzGOLEa_N2Yg_Qf5bp7DIq_IySXIvyrfeB6noLcLkeMdI2DIRvi_4VZIL3_BSqsVyKnarflgNzAOtAeoDhhd8RdL9O5JyW9vb4Bd8s6O7fX5b9BO_S7Z9FbbxbqFCNVs490A4lXvA5ZN243d_yuIse0h912v0yb0BYPR1LwTMte11n_jqR6G5DjL_zlc_nsw_ztr_tCjtF79ckNS3vxDbNoByJ8NZZenfTsoESC44alN8OeaoNvXHTfFFmFxtGoyb4ntGhdp0JjfVvrb1MyRFH1ow6uoeKF8E5Y_ATdE5c8PVwAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/components/ui.css.ts.vanilla.css!=!../../node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/ui.css.ts.vanilla.css","source":"#H4sIAAAAAAAAE9VcTY_bOBK9z6_QZYH0Ag4sWXa7ncsie9gskNNksQufGrIs2-qWJbc-2t1Z5L-vRLJKpMQiaY8n2EyAAVrme1Uq1it-iNLHJn2Mi7yO0jwpHx-bcnrcTL3__uZ5x-htck639WHlvUblh8mkSr8n1URqfG7OzcPJX9x9Ys3LfZpPsmRXr7yoqQvpYpnuD9LVU7TdpvletBXkpyhOJiGQRndyQ4EnW_747aN8G9Vj63cibmZmuhneTtzH8m7s3FTjxlRjMI_KsjgLk6HJJLQURu917tedIUE2N5GJhoLrQce1a7JskyXJVvAtGJ_TXfbX6uLk1FGboq6Lo7WndlnyJty5Z-5s0-qURe8rr_ulI4yydJ9P0jo5VisvTvI6KWXwv6MyjfK67egyOgmmJWPqfp10V1de938tqKqjEsL7wFCKOUbB2mjRm6hKsja2giAaE0ALLTwusuaYf5Nc2PSOb9Myieu0yNubZu1GsbA4x1GCODYSa9BJDlmyJcLStiBCWiZ1fBDoZIwWDfTgLk8-J_U5ScD1HWMQGe9Pp3_5pOtbz3tqqjrdvbOq1GZJa4fl3IaT6UPEsknY2V9rx5CTZVKdirxKXyFFDo798I82l6cCkzLMPhrobgpiWtwNkb5APumRPiDvR8hAIJ_1yACQyxFyJpCZHjkD5MMIGQrkUY8kikaHnAtkrkfOAbkZIRcCWeiRC0DGI-QEgnvSQ_vobsdYCO8LgcX4JmMsBLgksBjh3RgLIa4ILMZ4P8ZCkGsCi1E-jLEQ5obAYpxTxDIB8rFKgF_HwlSaHqJsJ5qeLU1fmrZaouLfLK3rQ1pCFXy3tT0XrHkl2n-3tN-l9d95AREAf0ohsrTCRj5r1F1pK_97lqy8vOhGFxx3xWjNZ1vSBEX8jEXFD-TB31pZAA7J789ouKa8ABzy3w9puKbGABwk4M9puKbQABxU4C9ouKbaAByE4N_TcE3JAThowV_ScE3dATjWHf-BxuuKDxJg8CMDgaYCIQGGf2Mg0JQhJMAOiA0EmlqEBNgFWwOBpiAhAXZCYiDQVCXRcN3rZ6dMnkezYkVD5lkxLbd1r7e92ZyiObM5Wp7rXp8HszlFo2ZztJzXvZ5TszlF02ZztPzXvf6fzOb-2IoGzWGyPpvNKTXDbI4uL-u-vmRmc0qNMZujy9FaqkdHsz21JpkNGurXWipgucWiUsQsFumCt5YqXmGxqFQ9i0W6Qq6lEnmyWFTKpMUiXVLXUk19sVhU6qrFIl2D11IRLi0WlUJssagp2nwSJNXsSmygsJ0oW8kWzRwrNthCVdRGW4N6bbClKddgC_XQGG0NirXBlqZWgy1UwqvR1qBSG2xpCjXYQg2cjbYGZdpgS1OlwRZm_5vR1qBGG2xpSjTYwrx_N9oaFGiDLU19Blt9ef5uNDaszgZruuKM5iAXg6nZ3KA0m8xpKjOag3QMfLO5QV02mdOUZTQHGRkEZnODomwyp6nJaA6SMpiZzQ0qssmcpiCjOcjLIDSbG5RjkzlNNd43dbf0hmIczGVjfPM5jrL4A1Fovb96E1-2KzanXTCKAyCMYOHggFR9nR3QYBQHUCr3Dg5IJdnZAQ1GcQDFs3RwQKrTzg5oMIoDKKcHBwek4u3sgAajOIACixwckCq6swMajOIASm7j4IBU5p0d0GAUB3B8CGIHD-TS7-yCDqT6gErYuvggjQfuPmhAqg8ohsTFB2mQcPdBA1J9QD3sXHyQRg53HzQg1QeUxN7FB2k4cfdBA1J9QFUcXHyQxhh3HzQg7kMZbdP0cdN6UsCTp4BvSxSvSbnLivPKO6TbbcIexG2KcpuUkw7UVDD2MYoJUIgnsbuBhax1EJ4GBU_XGBAMgn8_4I_TMs7QwPM1BoBCWOhnDJviTX1mFpz0z2wdn2DCkzPPq5O3esJ-Gz5PqzgHGLQsUv_Y1g1Pnn6KUkpp6LgC7KcXFQkml3T91KAmweQarR_WGxJMLrr6IfmVBNMBw9pxJsHksqgfCt9IMLnOkYaxdxJNr1ukEeg7DSfXIf3gMZvScHJd0df9mU_DyXVCX7JnAQ0n5_19tZ3NaDi5q_LYneABglAh4Gd75MZf2wqOqpppJv5O0mIs0N8zzezdSWOMBbp9ppmCO4mNsWDva-bRTqpjLJgEmsmwk_wYC-aCZkbrpEPGgimhmZY6CZKxoChnmrmlmzI5D3aTZn7oJlHOgx2lmeO5aZXzYFdp5mluouU82FmauZabejkPdpdmvuQmY8YjSzkdM431_Ds7a4aCfpIxmgN6pKI5D2bLs4WH1DTnwWzJLDykqjkPZsvRwkPqmvNgtuQWHlLZnAezpbDwkNrmPJgtJwsPqW7O08v7xUJE61swYZeVNiZS4YIJO62yMZEaF0zYbbWNiVS5YMKOa2xMpM4FE3bdq42JVDpnkqV-1nCNtf6voj-JNjNvkpM67zgwacyb36TGOw5MF_OeNqnvjgMSJTRvVJPa7jggRULz7jOp644DkiM0bymTmu44IC1C8z4xqeeOA9UcWnZ_SS0zFuiacG5mIXXMWLBzFmYWUsOMBbvn3sxC6pexYActzSykdhkLdtGDmYXUbcciqTaMRjxjzX5my12UbajM5i56oCmYMEdiGxOpX8GEebK1MZEqFkyYK4mNidSyYMJ82dmYSEULJsyZvY2J1LVgwrw52JhIdQumXuCpjYrWOHBh9z1ZuUilAxd24LOVi9Q7cGEXZlYuUvXAhZ14tHKR2gcu7MbcykVWAMElF4FCxzauA1gA5BmfdCi023V73BTbd2j3cpGUPG9X5DV7_wRadRe-sfdRsPuzvuU5kWcs3aX_sCvVJC_KY5QBpGSQ7r2JyUGBdJe-CAhzXgC-c0DSbSMzT6VDffzqN35xaMmf3SnByJIITvyG5e2CgS2Pv1IwquaUlF_aiHRHJ0VQzEdo3I9kDA45GGKHGiv6lrvomGbvctuqDY5wlLd-c4l0e5dltCmyLaBeXYI9sORP3QOuvqUVqvE-qKGur8m_yyLjHvFbx1ANhH-jCFbN5iApuLmdgn_5mHxrhQ5vVISvtwsMSj7_1QLznMbP-CQrPF80HzWo7VjkBTR9t0UPJ1zPLtE7Jtu0OQKk-lNDp7wPO7_Dh3Rt_-XVrh03Vl5zaseHOKoSJaxxdIKXYMK3a4J6i0hVyTGV06z-s24cfIaXcbrxVJVfHcHbOyHf-rhN5uAAevppmTO4q6_RJsGK8r2_NdoLuUeaCwvLFWOy7K9U_ebT3lenXLtskcrsQby5Qd9mUJkfKjT7CEiCIYm_nJ7eLixFlihWRZZiD_nBjQqtcmRgzveq6Af-YlGSwSg-D69JLc7V3tsz0PCNqbjIinLlpfkhKdNa22516M5LyK25OfZHNYnimr3Py231t5pHrzLNQmtO3Pg2iYsy4mcj4AU-Vl_S7trkVBZtganfVxw_-HXbAHT6MagGP9bpsTvwsGtycfQiacvUpM3eoqkpT6-_4c_srItMdk_ctpS3w6u6zJXXM2f5KId4v3ETxc_7smjybR9AfqJFCuj_RaQ1Ibo43m27pqy6hqcilbUS19FXiXlpCv6l2hlyX5klm6yIn2WiB_XIEPv90yVSEbzySa15pJKmOSt0cByJzIRbjleDDY8rKu3N338zfV-FaGh7zHnd0Tf-Q_V4KtN2MIXtpvmGzKZe38DGF9n99YkOhvwcE1gdkJLaQk3mN8W8K-KmugVzmbQuVvjVlnlMRk1z-1br-khbPLDUgit77-JASDH-iW7ItXxLVNyxCTZynKKynesYCd0z8tjUCd7ZzOymezY6sP4-6IfkVkEYEVvy7Jp8v-b-LHl2SzcQNaoou59XLCUnhJ_chf1PCUE3IXhpihoOMc_lR2CDr1Fd8tGqqW3s1Dzdi16jOsKli3iA1s7xxGc6pnjYuTqUbeaIK5rPcwGRGBr5_rg6PTA0vOawdlbsi0pd-PKHdsK75ZyvHsGJgK0mZay6iIWndPj1MT9Y9og07tSjWMtka0E4sCb-vuyxLbei-nWUzcwC1Qz8fY0Z-aT-PJetLAY3s7j6ZuSJcUGqS14N6V5zuNTQlVP5MY-5LpI83RKG__jPuJ_DE-8SkN_bIl8mkBeHyogzXiOO1lXYx-FS7eNQSvbXtGraRH__wt6mAP_5w1OwwApBnKVt4eleg_gw9dg_Rfc-N6F7PUNd7p4KvuhcedGmXTm0hZN5emhvnXd7d0fwgTKQZ-_vNtk08Fhpzvu9XaR2yxHWzGOLEa_N2Yg_Qf5bp7DIq-IySXIvyrfeB6noLcLkeMdI2DIRvi_4VZIL3_BSqsVyKnarflgNzAOtAeoDhhd8RdL9O5JyW9vb4Bd8s6O7fX5b9BO_S7Z9FbbxbqFCNVs490A4lXvA5ZN243d-yuIse0h912v0yb0BYPR1LwTMte11n_jqR6G5DjL-zlc_nsw-ztr_tCjtF79ckNS3vxDbNoByJ8NZZenfTsoESC44alN8OeaoNvXHTfFFmFxtGoyb4ntGhdp0JjfVvrb1MyRFH1ow6uoeKF8E5Y__ATdE5c8PVwAA"}!../../node_modules/@vanilla-extract/webpack-plugin/extracted.js */ "src/components/ui.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/components/ui.css.ts.vanilla.css\",\"source\":\"#H4sIAAAAAAAAE9VcTY_bOBK9z6_QZYH0Ag4sWXa7ncsie9gskNNksQufGrIs2-qWJbc-2t1Z5L-vRLJKpMQiaY8n2EyAAVrme1Uq1it-iNLHJn2Mi7yO0jwpHx-bcnrcTL3__uZ5x-htck639WHlvUblh8mkSr8n1URqfG7OzcPJX9x9Ys3LfZpPsmRXr7yoqQvpYpnuD9LVU7TdpvletBXkpyhOJiGQRndyQ4EnW_747aN8G9Vj63cibmZmuhneTtzH8m7s3FTjxlRjMI_KsjgLk6HJJLQURu917tedIUE2N5GJhoLrQce1a7JskyXJVvAtGJ_TXfbX6uLk1FGboq6Lo7WndlnyJty5Z-5s0-qURe8rr_ulI4yydJ9P0jo5VisvTvI6KWXwv6MyjfK67egyOgmmJWPqfp10V1de938tqKqjEsL7wFCKOUbB2mjRm6hKsja2giAaE0ALLTwusuaYf5Nc2PSOb9Myieu0yNubZu1GsbA4x1GCODYSa9BJDlmyJcLStiBCWiZ1fBDoZIwWDfTgLk8-J_U5ScD1HWMQGe9Pp3_5pOtbz3tqqjrdvbOq1GZJa4fl3IaT6UPEsknY2V9rx5CTZVKdirxKXyFFDo798I82l6cCkzLMPhrobgpiWtwNkb5APumRPiDvR8hAIJ_1yACQyxFyJpCZHjkD5MMIGQrkUY8kikaHnAtkrkfOAbkZIRcCWeiRC0DGI-QEgnvSQ_vobsdYCO8LgcX4JmMsBLgksBjh3RgLIa4ILMZ4P8ZCkGsCi1E-jLEQ5obAYpxTxDIB8rFKgF_HwlSaHqJsJ5qeLU1fmrZaouLfLK3rQ1pCFXy3tT0XrHkl2n-3tN-l9d95AREAf0ohsrTCRj5r1F1pK_97lqy8vOhGFxx3xWjNZ1vSBEX8jEXFD-TB31pZAA7J789ouKa8ABzy3w9puKbGABwk4M9puKbQABxU4C9ouKbaAByE4N_TcE3JAThowV_ScE3dATjWHf-BxuuKDxJg8CMDgaYCIQGGf2Mg0JQhJMAOiA0EmlqEBNgFWwOBpiAhAXZCYiDQVCXRcN3rZ6dMnkezYkVD5lkxLbd1r7e92ZyiObM5Wp7rXp8HszlFo2ZztJzXvZ5TszlF02ZztPzXvf6fzOb-2IoGzWGyPpvNKTXDbI4uL-u-vmRmc0qNMZujy9FaqkdHsz21JpkNGurXWipgucWiUsQsFumCt5YqXmGxqFQ9i0W6Qq6lEnmyWFTKpMUiXVLXUk19sVhU6qrFIl2D11IRLi0WlUJssagp2nwSJNXsSmygsJ0oW8kWzRwrNthCVdRGW4N6bbClKddgC_XQGG0NirXBlqZWgy1UwqvR1qBSG2xpCjXYQg2cjbYGZdpgS1OlwRZm_5vR1qBGG2xpSjTYwrx_N9oaFGiDLU19Blt9ef5uNDaszgZruuKM5iAXg6nZ3KA0m8xpKjOag3QMfLO5QV02mdOUZTQHGRkEZnODomwyp6nJaA6SMpiZzQ0qssmcpiCjOcjLIDSbG5RjkzlNNd43dbf0hmIczGVjfPM5jrL4A1Fovb96E1-2KzanXTCKAyCMYOHggFR9nR3QYBQHUCr3Dg5IJdnZAQ1GcQDFs3RwQKrTzg5oMIoDKKcHBwek4u3sgAajOIACixwckCq6swMajOIASm7j4IBU5p0d0GAUB3B8CGIHD-TS7-yCDqT6gErYuvggjQfuPmhAqg8ohsTFB2mQcPdBA1J9QD3sXHyQRg53HzQg1QeUxN7FB2k4cfdBA1J9QFUcXHyQxhh3HzQg7kMZbdP0cdN6UsCTp4BvSxSvSbnLivPKO6TbbcIexG2KcpuUkw7UVDD2MYoJUIgnsbuBhax1EJ4GBU_XGBAMgn8_4I_TMs7QwPM1BoBCWOhnDJviTX1mFpz0z2wdn2DCkzPPq5O3esJ-Gz5PqzgHGLQsUv_Y1g1Pnn6KUkpp6LgC7KcXFQkml3T91KAmweQarR_WGxJMLrr6IfmVBNMBw9pxJsHksqgfCt9IMLnOkYaxdxJNr1ukEeg7DSfXIf3gMZvScHJd0df9mU_DyXVCX7JnAQ0n5_19tZ3NaDi5q_LYneABglAh4Gd75MZf2wqOqpppJv5O0mIs0N8zzezdSWOMBbp9ppmCO4mNsWDva-bRTqpjLJgEmsmwk_wYC-aCZkbrpEPGgimhmZY6CZKxoChnmrmlmzI5D3aTZn7oJlHOgx2lmeO5aZXzYFdp5mluouU82FmauZabejkPdpdmvuQmY8YjSzkdM431_Ds7a4aCfpIxmgN6pKI5D2bLs4WH1DTnwWzJLDykqjkPZsvRwkPqmvNgtuQWHlLZnAezpbDwkNrmPJgtJwsPqW7O08v7xUJE61swYZeVNiZS4YIJO62yMZEaF0zYbbWNiVS5YMKOa2xMpM4FE3bdq42JVDpnkqV-1nCNtf6voj-JNjNvkpM67zgwacyb36TGOw5MF_OeNqnvjgMSJTRvVJPa7jggRULz7jOp644DkiM0bymTmu44IC1C8z4xqeeOA9UcWnZ_SS0zFuiacG5mIXXMWLBzFmYWUsOMBbvn3sxC6pexYActzSykdhkLdtGDmYXUbcciqTaMRjxjzX5my12UbajM5i56oCmYMEdiGxOpX8GEebK1MZEqFkyYK4mNidSyYMJ82dmYSEULJsyZvY2J1LVgwrw52JhIdQumXuCpjYrWOHBh9z1ZuUilAxd24LOVi9Q7cGEXZlYuUvXAhZ14tHKR2gcu7MbcykVWAMElF4FCxzauA1gA5BmfdCi023V73BTbd2j3cpGUPG9X5DV7_wRadRe-sfdRsPuzvuU5kWcs3aX_sCvVJC_KY5QBpGSQ7r2JyUGBdJe-CAhzXgC-c0DSbSMzT6VDffzqN35xaMmf3SnByJIITvyG5e2CgS2Pv1IwquaUlF_aiHRHJ0VQzEdo3I9kDA45GGKHGiv6lrvomGbvctuqDY5wlLd-c4l0e5dltCmyLaBeXYI9sORP3QOuvqUVqvE-qKGur8m_yyLjHvFbx1ANhH-jCFbN5iApuLmdgn_5mHxrhQ5vVISvtwsMSj7_1QLznMbP-CQrPF80HzWo7VjkBTR9t0UPJ1zPLtE7Jtu0OQKk-lNDp7wPO7_Dh3Rt_-XVrh03Vl5zaseHOKoSJaxxdIKXYMK3a4J6i0hVyTGV06z-s24cfIaXcbrxVJVfHcHbOyHf-rhN5uAAevppmTO4q6_RJsGK8r2_NdoLuUeaCwvLFWOy7K9U_ebT3lenXLtskcrsQby5Qd9mUJkfKjT7CEiCIYm_nJ7eLixFlihWRZZiD_nBjQqtcmRgzveq6Af-YlGSwSg-D69JLc7V3tsz0PCNqbjIinLlpfkhKdNa22516M5LyK25OfZHNYnimr3Py231t5pHrzLNQmtO3Pg2iYsy4mcj4AU-Vl_S7trkVBZtganfVxw_-HXbAHT6MagGP9bpsTvwsGtycfQiacvUpM3eoqkpT6-_4c_srItMdk_ctpS3w6u6zJXXM2f5KId4v3ETxc_7smjybR9AfqJFCuj_RaQ1Ibo43m27pqy6hqcilbUS19FXiXlpCv6l2hlyX5klm6yIn2WiB_XIEPv90yVSEbzySa15pJKmOSt0cByJzIRbjleDDY8rKu3N338zfV-FaGh7zHnd0Tf-Q_V4KtN2MIXtpvmGzKZe38DGF9n99YkOhvwcE1gdkJLaQk3mN8W8K-KmugVzmbQuVvjVlnlMRk1z-1br-khbPLDUgit77-JASDH-iW7ItXxLVNyxCTZynKKynesYCd0z8tjUCd7ZzOymezY6sP4-6IfkVkEYEVvy7Jp8v-b-LHl2SzcQNaoou59XLCUnhJ_chf1PCUE3IXhpihoOMc_lR2CDr1Fd8tGqqW3s1Dzdi16jOsKli3iA1s7xxGc6pnjYuTqUbeaIK5rPcwGRGBr5_rg6PTA0vOawdlbsi0pd-PKHdsK75ZyvHsGJgK0mZay6iIWndPj1MT9Y9og07tSjWMtka0E4sCb-vuyxLbei-nWUzcwC1Qz8fY0Z-aT-PJetLAY3s7j6ZuSJcUGqS14N6V5zuNTQlVP5MY-5LpI83RKG__jPuJ_DE-8SkN_bIl8mkBeHyogzXiOO1lXYx-FS7eNQSvbXtGraRH__wt6mAP_5w1OwwApBnKVt4eleg_gw9dg_Rfc-N6F7PUNd7p4KvuhcedGmXTm0hZN5emhvnXd7d0fwgTKQZ-_vNtk08Fhpzvu9XaR2yxHWzGOLEa_N2Yg_Qf5bp7DIq-IySXIvyrfeB6noLcLkeMdI2DIRvi_4VZIL3_BSqsVyKnarflgNzAOtAeoDhhd8RdL9O5JyW9vb4Bd8s6O7fX5b9BO_S7Z9FbbxbqFCNVs490A4lXvA5ZN243d-yuIse0h912v0yb0BYPR1LwTMte11n_jqR6G5DjL-zlc_nsw-ztr_tCjtF79ckNS3vxDbNoByJ8NZZenfTsoESC44alN8OeaoNvXHTfFFmFxtGoyb4ntGhdp0JjfVvrb1MyRFH1ow6uoeKF8E5Y__ATdE5c8PVwAA\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js");
/* harmony import */ var src_components_ui_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_components_ui_css_ts_vanilla_css_source_H4sIAAAAAAAAE9VcTY_bOBK9z6_QZYH0Ag4sWXa7ncsie9gskNNksQufGrIs2_qWJbc_2t1Z5L_vRLJKpMQiaY8n2EyAAVrme1Uq1it_iNLHJn2Mi7yO0jwpHx_bcnrcTL3_uZ5x_htck639WHlvUblh8mkSr8n1URqfG7OzcPJX9x9Ys3LfZpPsmRXr7yoqQvpYpnuD9LVU7TdpvletBXkpyhOJiGQRndyQ4EnW_747aN8G9Vj63cibmZmuhneTtzH8m7s3FTjxlRjMI_KsjgLk6HJJLQURu917tedIUE2N5GJhoLrQce1a7JskyXJVvAtGJ_TXfbX6uLk1FGboq6Lo7WndlnyJty5Z_5s0_qURe8rr_ulI4yydJ9P0jo5VisvTvI6KWXwv6MyjfK67egyOgmmJWPqfp10V1de938tqKqjEsL7wFCKOUbB2mjRm6hKsja2giAaE0ALLTwusuaYf5Nc2PSOb9Myieu0yNubZu1GsbA4x1GCODYSa9BJDlmyJcLStiBCWiZ1fBDoZIwWDfTgLk8_J_U5ScD1HWMQGe9Pp3_5pOtbz3tqqjrdvbOq1GZJa4fl3IaT6UPEsknY2V9rx5CTZVKdirxKXyFFDo798I82l6cCkzLMPhrobgpiWtwNkb5APumRPiDvR8hAIJ_1yACQyxFyJpCZHjkD5MMIGQrkUY8kikaHnAtkrkfOAbkZIRcCWeiRC0DGI_QEgnvSQ_vobsdYCO8LgcX4JmMsBLgksBjh3RgLIa4ILMZ4P8ZCkGsCi1E_jLEQ5obAYpxTxDIB8rFKgF_HwlSaHqJsJ5qeLU1fmrZaouLfLK3rQ1pCFXy3tT0XrHkl2n_3tN_l9d95AREAf0ohsrTCRj5r1F1pK_97lqy8vOhGFxx3xWjNZ1vSBEX8jEXFD_TB31pZAA7J789ouKa8ABzy3w9puKbGABwk4M9puKbQABxU4C9ouKbaAByE4N_TcE3JAThowV_ScE3dATjWHf_BxuuKDxJg8CMDgaYCIQGGf2Mg0JQhJMAOiA0EmlqEBNgFWwOBpiAhAXZCYiDQVCXRcN3rZ6dMnkezYkVD5lkxLbd1r7e92ZyiObM5Wp7rXp8HszlFo2ZztJzXvZ5TszlF02ZztPzXvf6fzOb_2IoGzWGyPpvNKTXDbI4uL_u_vmRmc0qNMZujy9FaqkdHsz21JpkNGurXWipgucWiUsQsFumCt5YqXmGxqFQ9i0W6Qq6lEnmyWFTKpMUiXVLXUk19sVhU6qrFIl2D11IRLi0WlUJssagp2nwSJNXsSmygsJ0oW8kWzRwrNthCVdRGW4N6bbClKddgC_XQGG0NirXBlqZWgy1UwqvR1qBSG2xpCjXYQg2cjbYGZdpgS1OlwRZm_5vR1qBGG2xpSjTYwrx_N9oaFGiDLU19Blt9ef5uNDaszgZruuKM5iAXg6nZ3KA0m8xpKjOag3QMfLO5QV02mdOUZTQHGRkEZnODomwyp6nJaA6SMpiZzQ0qssmcpiCjOcjLIDSbG5RjkzlNNd43dbf0hmIczGVjfPM5jrL4A1Fovb96E1_2KzanXTCKAyCMYOHggFR9nR3QYBQHUCr3Dg5IJdnZAQ1GcQDFs3RwQKrTzg5oMIoDKKcHBwek4u3sgAajOIACixwckCq6swMajOIASm7j4IBU5p0d0GAUB3B8CGIHD_TS7_yCDqT6gErYuvggjQfuPmhAqg8ohsTFB2mQcPdBA1J9QD3sXHyQRg53HzQg1QeUxN7FB2k4cfdBA1J9QFUcXHyQxhh3HzQg7kMZbdP0cdN6UsCTp4BvSxSvSbnLivPKO6TbbcIexG2KcpuUkw7UVDD2MYoJUIgnsbuBhax1EJ4GBU_XGBAMgn8_4I_TMs7QwPM1BoBCWOhnDJviTX1mFpz0z2wdn2DCkzPPq5O3esJ_Gz5PqzgHGLQsUv_Y1g1Pnn6KUkpp6LgC7KcXFQkml3T91KAmweQarR_WGxJMLrr6IfmVBNMBw9pxJsHksqgfCt9IMLnOkYaxdxJNr1ukEeg7DSfXIf3gMZvScHJd0df9mU_DyXVCX7JnAQ0n5_19tZ3NaDi5q_LYneABglAh4Gd75MZf2wqOqpppJv5O0mIs0N8zzezdSWOMBbp9ppmCO4mNsWDva_bRTqpjLJgEmsmwk_wYC_aCZkbrpEPGgimhmZY6CZKxoChnmrmlmzI5D3aTZn7oJlHOgx2lmeO5aZXzYFdp5mluouU82FmauZabejkPdpdmvuQmY8YjSzkdM431_Ds7a4aCfpIxmgN6pKI5D2bLs4WH1DTnwWzJLDykqjkPZsvRwkPqmvNgtuQWHlLZnAezpbDwkNrmPJgtJwsPqW7O08v7xUJE61swYZeVNiZS4YIJO62yMZEaF0zYbbWNiVS5YMKOa2xMpM4FE3bdq42JVDpnkqV_1nCNtf6voj_JNjNvkpM67zgwacyb36TGOw5MF_OeNqnvjgMSJTRvVJPa7jggRULz7jOp644DkiM0bymTmu44IC1C8z4xqeeOA9UcWnZ_SS0zFuiacG5mIXXMWLBzFmYWUsOMBbvn3sxC6pexYActzSykdhkLdtGDmYXUbcciqTaMRjxjzX5my12UbajM5i56oCmYMEdiGxOpX8GEebK1MZEqFkyYK4mNidSyYMJ82dmYSEULJsyZvY2J1LVgwrw52JhIdQumXuCpjYrWOHBh9z1ZuUilAxd24LOVi9Q7cGEXZlYuUvXAhZ14tHKR2gcu7MbcykVWAMElF4FCxzauA1gA5BmfdCi023V73BTbd2j3cpGUPG9X5DV7_wRadRe_sfdRsPuzvuU5kWcs3aX_sCvVJC_KY5QBpGSQ7r2JyUGBdJe_CAhzXgC_c0DSbSMzT6VDffzqN35xaMmf3SnByJIITvyG5e2CgS2Pv1IwquaUlF_aiHRHJ0VQzEdo3I9kDA45GGKHGiv6lrvomGbvctuqDY5wlLd_c4l0e5dltCmyLaBeXYI9sORP3QOuvqUVqvE_qKGur8m_yyLjHvFbx1ANhH_jCFbN5iApuLmdgn_5mHxrhQ5vVISvtwsMSj7_1QLznMbP_CQrPF80HzWo7VjkBTR9t0UPJ1zPLtE7Jtu0OQKk_lNDp7wPO7_Dh3Rt_XVrh03Vl5zaseHOKoSJaxxdIKXYMK3a4J6i0hVyTGV06z_s24cfIaXcbrxVJVfHcHbOyHf_rhN5uAAevppmTO4q6_RJsGK8r2_NdoLuUeaCwvLFWOy7K9U_ebT3lenXLtskcrsQby5Qd9mUJkfKjT7CEiCIYm_nJ7eLixFlihWRZZiD_nBjQqtcmRgzveq6Af_YlGSwSg_D69JLc7V3tsz0PCNqbjIinLlpfkhKdNa22516M5LyK25OfZHNYnimr3Py231t5pHrzLNQmtO3Pg2iYsy4mcj4AU_Vl_S7trkVBZtganfVxw_HXbAHT6MagGP9bpsTvwsGtycfQiacvUpM3eoqkpT6_4c_srItMdk_ctpS3w6u6zJXXM2f5KId4v3ETxc_7smjybR9AfqJFCuj_RaQ1Ibo43m27pqy6hqcilbUS19FXiXlpCv6l2hlyX5klm6yIn2WiB_XIEPv90yVSEbzySa15pJKmOSt0cByJzIRbjleDDY8rKu3N338zfV_FaGh7zHnd0Tf_Q_V4KtN2MIXtpvmGzKZe38DGF9n99YkOhvwcE1gdkJLaQk3mN8W8K_KmugVzmbQuVvjVlnlMRk1z_1br_khbPLDUgit77_JASDH_iW7ItXxLVNyxCTZynKKynesYCd0z8tjUCd7ZzOymezY6sP4_6IfkVkEYEVvy7Jp8v_b_LHl2SzcQNaoou59XLCUnhJ_chf1PCUE3IXhpihoOMc_lR2CDr1Fd8tGqqW3s1Dzdi16jOsKli3iA1s7xxGc6pnjYuTqUbeaIK5rPcwGRGBr5_rg6PTA0vOawdlbsi0pd_PKHdsK75ZyvHsGJgK0mZay6iIWndPj1MT9Y9og07tSjWMtka0E4sCb_vuyxLbei_nWUzcwC1Qz8fY0Z_aT_PJetLAY3s7j6ZuSJcUGqS14N6V5zuNTQlVP5MY_5LpI83RKG_jPuJ_DE_8SkN_bIl8mkBeHyogzXiOO1lXYx_FS7eNQSvbXtGraRH_wt6mAP_5w1OwwApBnKVt4eleg_gw9dg_Rfc_N6F7PUNd7p4KvuhcedGmXTm0hZN5emhvnXd7d0fwgTKQZ_vNtk08Fhpzvu9XaR2yxHWzGOLEa_N2Yg_Qf5bp7DIq_IySXIvyrfeB6noLcLkeMdI2DIRvi_4VZIL3_BSqsVyKnarflgNzAOtAeoDhhd8RdL9O5JyW9vb4Bd8s6O7fX5b9BO_S7Z9FbbxbqFCNVs490A4lXvA5ZN243d_yuIse0h912v0yb0BYPR1LwTMte11n_jqR6G5DjL_zlc_nsw_ztr_tCjtF79ckNS3vxDbNoByJ8NZZenfTsoESC44alN8OeaoNvXHTfFFmFxtGoyb4ntGhdp0JjfVvrb1MyRFH1ow6uoeKF8E5Y_ATdE5c8PVwAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_components_ui_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_components_ui_css_ts_vanilla_css_source_H4sIAAAAAAAAE9VcTY_bOBK9z6_QZYH0Ag4sWXa7ncsie9gskNNksQufGrIs2_qWJbc_2t1Z5L_vRLJKpMQiaY8n2EyAAVrme1Uq1it_iNLHJn2Mi7yO0jwpHx_bcnrcTL3_uZ5x_htck639WHlvUblh8mkSr8n1URqfG7OzcPJX9x9Ys3LfZpPsmRXr7yoqQvpYpnuD9LVU7TdpvletBXkpyhOJiGQRndyQ4EnW_747aN8G9Vj63cibmZmuhneTtzH8m7s3FTjxlRjMI_KsjgLk6HJJLQURu917tedIUE2N5GJhoLrQce1a7JskyXJVvAtGJ_TXfbX6uLk1FGboq6Lo7WndlnyJty5Z_5s0_qURe8rr_ulI4yydJ9P0jo5VisvTvI6KWXwv6MyjfK67egyOgmmJWPqfp10V1de938tqKqjEsL7wFCKOUbB2mjRm6hKsja2giAaE0ALLTwusuaYf5Nc2PSOb9Myieu0yNubZu1GsbA4x1GCODYSa9BJDlmyJcLStiBCWiZ1fBDoZIwWDfTgLk8_J_U5ScD1HWMQGe9Pp3_5pOtbz3tqqjrdvbOq1GZJa4fl3IaT6UPEsknY2V9rx5CTZVKdirxKXyFFDo798I82l6cCkzLMPhrobgpiWtwNkb5APumRPiDvR8hAIJ_1yACQyxFyJpCZHjkD5MMIGQrkUY8kikaHnAtkrkfOAbkZIRcCWeiRC0DGI_QEgnvSQ_vobsdYCO8LgcX4JmMsBLgksBjh3RgLIa4ILMZ4P8ZCkGsCi1E_jLEQ5obAYpxTxDIB8rFKgF_HwlSaHqJsJ5qeLU1fmrZaouLfLK3rQ1pCFXy3tT0XrHkl2n_3tN_l9d95AREAf0ohsrTCRj5r1F1pK_97lqy8vOhGFxx3xWjNZ1vSBEX8jEXFD_TB31pZAA7J789ouKa8ABzy3w9puKbGABwk4M9puKbQABxU4C9ouKbaAByE4N_TcE3JAThowV_ScE3dATjWHf_BxuuKDxJg8CMDgaYCIQGGf2Mg0JQhJMAOiA0EmlqEBNgFWwOBpiAhAXZCYiDQVCXRcN3rZ6dMnkezYkVD5lkxLbd1r7e92ZyiObM5Wp7rXp8HszlFo2ZztJzXvZ5TszlF02ZztPzXvf6fzOb_2IoGzWGyPpvNKTXDbI4uL_u_vmRmc0qNMZujy9FaqkdHsz21JpkNGurXWipgucWiUsQsFumCt5YqXmGxqFQ9i0W6Qq6lEnmyWFTKpMUiXVLXUk19sVhU6qrFIl2D11IRLi0WlUJssagp2nwSJNXsSmygsJ0oW8kWzRwrNthCVdRGW4N6bbClKddgC_XQGG0NirXBlqZWgy1UwqvR1qBSG2xpCjXYQg2cjbYGZdpgS1OlwRZm_5vR1qBGG2xpSjTYwrx_N9oaFGiDLU19Blt9ef5uNDaszgZruuKM5iAXg6nZ3KA0m8xpKjOag3QMfLO5QV02mdOUZTQHGRkEZnODomwyp6nJaA6SMpiZzQ0qssmcpiCjOcjLIDSbG5RjkzlNNd43dbf0hmIczGVjfPM5jrL4A1Fovb96E1_2KzanXTCKAyCMYOHggFR9nR3QYBQHUCr3Dg5IJdnZAQ1GcQDFs3RwQKrTzg5oMIoDKKcHBwek4u3sgAajOIACixwckCq6swMajOIASm7j4IBU5p0d0GAUB3B8CGIHD_TS7_yCDqT6gErYuvggjQfuPmhAqg8ohsTFB2mQcPdBA1J9QD3sXHyQRg53HzQg1QeUxN7FB2k4cfdBA1J9QFUcXHyQxhh3HzQg7kMZbdP0cdN6UsCTp4BvSxSvSbnLivPKO6TbbcIexG2KcpuUkw7UVDD2MYoJUIgnsbuBhax1EJ4GBU_XGBAMgn8_4I_TMs7QwPM1BoBCWOhnDJviTX1mFpz0z2wdn2DCkzPPq5O3esJ_Gz5PqzgHGLQsUv_Y1g1Pnn6KUkpp6LgC7KcXFQkml3T91KAmweQarR_WGxJMLrr6IfmVBNMBw9pxJsHksqgfCt9IMLnOkYaxdxJNr1ukEeg7DSfXIf3gMZvScHJd0df9mU_DyXVCX7JnAQ0n5_19tZ3NaDi5q_LYneABglAh4Gd75MZf2wqOqpppJv5O0mIs0N8zzezdSWOMBbp9ppmCO4mNsWDva_bRTqpjLJgEmsmwk_wYC_aCZkbrpEPGgimhmZY6CZKxoChnmrmlmzI5D3aTZn7oJlHOgx2lmeO5aZXzYFdp5mluouU82FmauZabejkPdpdmvuQmY8YjSzkdM431_Ds7a4aCfpIxmgN6pKI5D2bLs4WH1DTnwWzJLDykqjkPZsvRwkPqmvNgtuQWHlLZnAezpbDwkNrmPJgtJwsPqW7O08v7xUJE61swYZeVNiZS4YIJO62yMZEaF0zYbbWNiVS5YMKOa2xMpM4FE3bdq42JVDpnkqV_1nCNtf6voj_JNjNvkpM67zgwacyb36TGOw5MF_OeNqnvjgMSJTRvVJPa7jggRULz7jOp644DkiM0bymTmu44IC1C8z4xqeeOA9UcWnZ_SS0zFuiacG5mIXXMWLBzFmYWUsOMBbvn3sxC6pexYActzSykdhkLdtGDmYXUbcciqTaMRjxjzX5my12UbajM5i56oCmYMEdiGxOpX8GEebK1MZEqFkyYK4mNidSyYMJ82dmYSEULJsyZvY2J1LVgwrw52JhIdQumXuCpjYrWOHBh9z1ZuUilAxd24LOVi9Q7cGEXZlYuUvXAhZ14tHKR2gcu7MbcykVWAMElF4FCxzauA1gA5BmfdCi023V73BTbd2j3cpGUPG9X5DV7_wRadRe_sfdRsPuzvuU5kWcs3aX_sCvVJC_KY5QBpGSQ7r2JyUGBdJe_CAhzXgC_c0DSbSMzT6VDffzqN35xaMmf3SnByJIITvyG5e2CgS2Pv1IwquaUlF_aiHRHJ0VQzEdo3I9kDA45GGKHGiv6lrvomGbvctuqDY5wlLd_c4l0e5dltCmyLaBeXYI9sORP3QOuvqUVqvE_qKGur8m_yyLjHvFbx1ANhH_jCFbN5iApuLmdgn_5mHxrhQ5vVISvtwsMSj7_1QLznMbP_CQrPF80HzWo7VjkBTR9t0UPJ1zPLtE7Jtu0OQKk_lNDp7wPO7_Dh3Rt_XVrh03Vl5zaseHOKoSJaxxdIKXYMK3a4J6i0hVyTGV06z_s24cfIaXcbrxVJVfHcHbOyHf_rhN5uAAevppmTO4q6_RJsGK8r2_NdoLuUeaCwvLFWOy7K9U_ebT3lenXLtskcrsQby5Qd9mUJkfKjT7CEiCIYm_nJ7eLixFlihWRZZiD_nBjQqtcmRgzveq6Af_YlGSwSg_D69JLc7V3tsz0PCNqbjIinLlpfkhKdNa22516M5LyK25OfZHNYnimr3Py231t5pHrzLNQmtO3Pg2iYsy4mcj4AU_Vl_S7trkVBZtganfVxw_HXbAHT6MagGP9bpsTvwsGtycfQiacvUpM3eoqkpT6_4c_srItMdk_ctpS3w6u6zJXXM2f5KId4v3ETxc_7smjybR9AfqJFCuj_RaQ1Ibo43m27pqy6hqcilbUS19FXiXlpCv6l2hlyX5klm6yIn2WiB_XIEPv90yVSEbzySa15pJKmOSt0cByJzIRbjleDDY8rKu3N338zfV_FaGh7zHnd0Tf_Q_V4KtN2MIXtpvmGzKZe38DGF9n99YkOhvwcE1gdkJLaQk3mN8W8K_KmugVzmbQuVvjVlnlMRk1z_1br_khbPLDUgit77_JASDH_iW7ItXxLVNyxCTZynKKynesYCd0z8tjUCd7ZzOymezY6sP4_6IfkVkEYEVvy7Jp8v_b_LHl2SzcQNaoou59XLCUnhJ_chf1PCUE3IXhpihoOMc_lR2CDr1Fd8tGqqW3s1Dzdi16jOsKli3iA1s7xxGc6pnjYuTqUbeaIK5rPcwGRGBr5_rg6PTA0vOawdlbsi0pd_PKHdsK75ZyvHsGJgK0mZay6iIWndPj1MT9Y9og07tSjWMtka0E4sCb_vuyxLbei_nWUzcwC1Qz8fY0Z_aT_PJetLAY3s7j6ZuSJcUGqS14N6V5zuNTQlVP5MY_5LpI83RKG_jPuJ_DE_8SkN_bIl8mkBeHyogzXiOO1lXYx_FS7eNQSvbXtGraRH_wt6mAP_5w1OwwApBnKVt4eleg_gw9dg_Rfc_N6F7PUNd7p4KvuhcedGmXTm0hZN5emhvnXd7d0fwgTKQZ_vNtk08Fhpzvu9XaR2yxHWzGOLEa_N2Yg_Qf5bp7DIq_IySXIvyrfeB6noLcLkeMdI2DIRvi_4VZIL3_BSqsVyKnarflgNzAOtAeoDhhd8RdL9O5JyW9vb4Bd8s6O7fX5b9BO_S7Z9FbbxbqFCNVs490A4lXvA5ZN243d_yuIse0h912v0yb0BYPR1LwTMte11n_jqR6G5DjL_zlc_nsw_ztr_tCjtF79ckNS3vxDbNoByJ8NZZenfTsoESC44alN8OeaoNvXHTfFFmFxtGoyb4ntGhdp0JjfVvrb1MyRFH1ow6uoeKF8E5Y_ATdE5c8PVwAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_1__);


var avatar = 'ui_avatar__ur0mb5i';
var backgrounds = {primary:'ui_backgrounds_primary__ur0mb5f',muted:'ui_backgrounds_muted__ur0mb5g'};
var blockLink = 'ui_blockLink__ur0mb59';
var blockquote = 'ui_blockquote__ur0mb5h';
var box = {center:'ui_box_center__ur0mb2p'};
var buttons = {primary:'ui_buttons_primary__ur0mb5b ui_button__ur0mb5a',reversed:'ui_buttons_reversed__ur0mb5c ui_button__ur0mb5a',link:'ui_buttons_link__ur0mb5d ui_button__ur0mb5a',linkReversed:'ui_buttons_linkReversed__ur0mb5e ui_button__ur0mb5a'};
var container = 'ui_container__ur0mb0';
var containerLarge = 'ui_containerLarge__ur0mb1';
var containers = {normal:'ui_container__ur0mb0 ui_containerLarge__ur0mb1',wide:'ui_containers_wide__ur0mb3 ui_container__ur0mb0',narrow:'ui_containers_narrow__ur0mb4 ui_container__ur0mb0',tight:'ui_containers_tight__ur0mb5 ui_container__ur0mb0',fullbleed:'ui_containers_fullbleed__ur0mb6 ui_container__ur0mb0'};
var ctaLink = 'ui_ctaLink__ur0mb58';
var debug = 'ui_debug__ur0mb5r';
var flex = 'ui_flex__ur0mb7';
var flexGap = {'0':'ui_flexGap_0__ur0mbi','1':'ui_flexGap_1__ur0mbj','2':'ui_flexGap_2__ur0mbk','3':'ui_flexGap_3__ur0mbl','4':'ui_flexGap_4__ur0mbm','5':'ui_flexGap_5__ur0mbn','6':'ui_flexGap_6__ur0mbo','-1':'ui_flexGap_-1__ur0mbp','-2':'ui_flexGap_-2__ur0mbq','-3':'ui_flexGap_-3__ur0mbr','-4':'ui_flexGap_-4__ur0mbs','-5':'ui_flexGap_-5__ur0mbt','-6':'ui_flexGap_-6__ur0mbu'};
var flexVariants = {wrap:'ui_flexVariants_wrap__ur0mb8',start:'ui_flexVariants_start__ur0mb9',baseline:'ui_flexVariants_baseline__ur0mba',columnStart:'ui_flexVariants_columnStart__ur0mbb',column:'ui_flexVariants_column__ur0mbc',end:'ui_flexVariants_end__ur0mbd',stretch:'ui_flexVariants_stretch__ur0mbe',spaceBetween:'ui_flexVariants_spaceBetween__ur0mbf',center:'ui_flexVariants_center__ur0mbg',responsive:'ui_flexVariants_responsive__ur0mbh'};
var gutter = {'0':'ui_gutter_0__ur0mb25','1':'ui_gutter_1__ur0mb26','2':'ui_gutter_2__ur0mb27','3':'ui_gutter_3__ur0mb28','4':'ui_gutter_4__ur0mb29','5':'ui_gutter_5__ur0mb2a','6':'ui_gutter_6__ur0mb2b','-1':'ui_gutter_-1__ur0mb2c','-2':'ui_gutter_-2__ur0mb2d','-3':'ui_gutter_-3__ur0mb2e','-4':'ui_gutter_-4__ur0mb2f','-5':'ui_gutter_-5__ur0mb2g','-6':'ui_gutter_-6__ur0mb2h'};
var iconLink = 'ui_iconLink__ur0mb5o';
var icons = {small:'ui_icons_small__ur0mb5l',medium:'ui_icons_medium__ur0mb5m',large:'ui_icons_large__ur0mb5n'};
var interactiveIcon = 'ui_interactiveIcon__ur0mb5p';
var link = 'ui_link__ur0mb55';
var list = 'ui_list__ur0mb11';
var logos = {small:'ui_logos_small__ur0mb5j',medium:'ui_logos_medium__ur0mb5k'};
var margin = {'0':'ui_margin_0__ur0mb2r','1':'ui_margin_1__ur0mb2s','2':'ui_margin_2__ur0mb2t','3':'ui_margin_3__ur0mb2u','4':'ui_margin_4__ur0mb2v','5':'ui_margin_5__ur0mb2w','6':'ui_margin_6__ur0mb2x','-1':'ui_margin_-1__ur0mb2y','-2':'ui_margin_-2__ur0mb2z','-3':'ui_margin_-3__ur0mb30','-4':'ui_margin_-4__ur0mb31','-5':'ui_margin_-5__ur0mb32','-6':'ui_margin_-6__ur0mb33',auto:'ui_margin_auto__ur0mb34'};
var margin0 = 'ui_margin0__ur0mb4p';
var marginBottom = {'0':'ui_marginBottom_0__ur0mb4b','1':'ui_marginBottom_1__ur0mb4c','2':'ui_marginBottom_2__ur0mb4d','3':'ui_marginBottom_3__ur0mb4e','4':'ui_marginBottom_4__ur0mb4f','5':'ui_marginBottom_5__ur0mb4g','6':'ui_marginBottom_6__ur0mb4h','-1':'ui_marginBottom_-1__ur0mb4i','-2':'ui_marginBottom_-2__ur0mb4j','-3':'ui_marginBottom_-3__ur0mb4k','-4':'ui_marginBottom_-4__ur0mb4l','-5':'ui_marginBottom_-5__ur0mb4m','-6':'ui_marginBottom_-6__ur0mb4n',auto:'ui_marginBottom_auto__ur0mb4o'};
var marginLeft = {'0':'ui_marginLeft_0__ur0mb35','1':'ui_marginLeft_1__ur0mb36','2':'ui_marginLeft_2__ur0mb37','3':'ui_marginLeft_3__ur0mb38','4':'ui_marginLeft_4__ur0mb39','5':'ui_marginLeft_5__ur0mb3a','6':'ui_marginLeft_6__ur0mb3b','-1':'ui_marginLeft_-1__ur0mb3c','-2':'ui_marginLeft_-2__ur0mb3d','-3':'ui_marginLeft_-3__ur0mb3e','-4':'ui_marginLeft_-4__ur0mb3f','-5':'ui_marginLeft_-5__ur0mb3g','-6':'ui_marginLeft_-6__ur0mb3h',auto:'ui_marginLeft_auto__ur0mb3i'};
var marginRight = {'0':'ui_marginRight_0__ur0mb3j','1':'ui_marginRight_1__ur0mb3k','2':'ui_marginRight_2__ur0mb3l','3':'ui_marginRight_3__ur0mb3m','4':'ui_marginRight_4__ur0mb3n','5':'ui_marginRight_5__ur0mb3o','6':'ui_marginRight_6__ur0mb3p','-1':'ui_marginRight_-1__ur0mb3q','-2':'ui_marginRight_-2__ur0mb3r','-3':'ui_marginRight_-3__ur0mb3s','-4':'ui_marginRight_-4__ur0mb3t','-5':'ui_marginRight_-5__ur0mb3u','-6':'ui_marginRight_-6__ur0mb3v',auto:'ui_marginRight_auto__ur0mb3w'};
var marginTop = {'0':'ui_marginTop_0__ur0mb3x','1':'ui_marginTop_1__ur0mb3y','2':'ui_marginTop_2__ur0mb3z','3':'ui_marginTop_3__ur0mb40','4':'ui_marginTop_4__ur0mb41','5':'ui_marginTop_5__ur0mb42','6':'ui_marginTop_6__ur0mb43','-1':'ui_marginTop_-1__ur0mb44','-2':'ui_marginTop_-2__ur0mb45','-3':'ui_marginTop_-3__ur0mb46','-4':'ui_marginTop_-4__ur0mb47','-5':'ui_marginTop_-5__ur0mb48','-6':'ui_marginTop_-6__ur0mb49',auto:'ui_marginTop_auto__ur0mb4a'};
var marginY = {'0':'ui_marginY_0__ur0mb1s','1':'ui_marginY_1__ur0mb1t','2':'ui_marginY_2__ur0mb1u','3':'ui_marginY_3__ur0mb1v','4':'ui_marginY_4__ur0mb1w','5':'ui_marginY_5__ur0mb1x','6':'ui_marginY_6__ur0mb1y','-1':'ui_marginY_-1__ur0mb1z','-2':'ui_marginY_-2__ur0mb20','-3':'ui_marginY_-3__ur0mb21','-4':'ui_marginY_-4__ur0mb22','-5':'ui_marginY_-5__ur0mb23','-6':'ui_marginY_-6__ur0mb24'};
var media = {small:'screen and (min-width: 40em)',medium:'screen and (min-width: 52em)',large:'screen and (min-width: 64em)'};
var navButtonlink = 'ui_navButtonlink__ur0mb57';
var navlink = 'ui_navlink__ur0mb56';
var order = {'0':'ui_order_0__ur0mb2l','1':'ui_order_1__ur0mb2m','2':'ui_order_2__ur0mb2n','3':'ui_order_3__ur0mb2o'};
var padding = {'0':'ui_padding_0__ur0mb12','1':'ui_padding_1__ur0mb13','2':'ui_padding_2__ur0mb14','3':'ui_padding_3__ur0mb15','4':'ui_padding_4__ur0mb16','5':'ui_padding_5__ur0mb17','6':'ui_padding_6__ur0mb18','-1':'ui_padding_-1__ur0mb19','-2':'ui_padding_-2__ur0mb1a','-3':'ui_padding_-3__ur0mb1b','-4':'ui_padding_-4__ur0mb1c','-5':'ui_padding_-5__ur0mb1d','-6':'ui_padding_-6__ur0mb1e'};
var paddingY = {'0':'ui_paddingY_0__ur0mb1f','1':'ui_paddingY_1__ur0mb1g','2':'ui_paddingY_2__ur0mb1h','3':'ui_paddingY_3__ur0mb1i','4':'ui_paddingY_4__ur0mb1j','5':'ui_paddingY_5__ur0mb1k','6':'ui_paddingY_6__ur0mb1l','-1':'ui_paddingY_-1__ur0mb1m','-2':'ui_paddingY_-2__ur0mb1n','-3':'ui_paddingY_-3__ur0mb1o','-4':'ui_paddingY_-4__ur0mb1p','-5':'ui_paddingY_-5__ur0mb1q','-6':'ui_paddingY_-6__ur0mb1r'};
var radii = {button:'ui_radii_button__ur0mb2i',large:'ui_radii_large__ur0mb2j',circle:'ui_radii_circle__ur0mb2k'};
var section = 'ui_section__ur0mb2q';
var text = {body:'ui_text_body__ur0mb4q ui_margin0__ur0mb4p',lead:'ui_text_lead__ur0mb4r ui_margin0__ur0mb4p',superHeading:'ui_text_superHeading__ur0mb4s ui_margin0__ur0mb4p',heading:'ui_text_heading__ur0mb4t ui_margin0__ur0mb4p',subhead:'ui_text_subhead__ur0mb4u ui_margin0__ur0mb4p',subheadSmall:'ui_text_subheadSmall__ur0mb4v ui_margin0__ur0mb4p',kicker:'ui_text_kicker__ur0mb4w ui_margin0__ur0mb4p',caps:'ui_text_caps__ur0mb4x ui_margin0__ur0mb4p',stat:'ui_text_stat__ur0mb4y ui_margin0__ur0mb4p',statLabel:'ui_text_statLabel__ur0mb4z ui_margin0__ur0mb4p',small:'ui_text_small__ur0mb50 ui_margin0__ur0mb4p',medium:'ui_text_medium__ur0mb51 ui_margin0__ur0mb4p',mega:'ui_text_mega__ur0mb52 ui_margin0__ur0mb4p',center:'ui_text_center__ur0mb53',bold:'ui_text_bold__ur0mb54'};
var visuallyHidden = 'ui_visuallyHidden__ur0mb5q';
var widths = {full:'ui_widths_full__ur0mbv',half:'ui_widths_half__ur0mbw',quarter:'ui_widths_quarter__ur0mbx',third:'ui_widths_third__ur0mby',twothirds:'ui_widths_twothirds__ur0mbz',fitContent:'ui_widths_fitContent__ur0mb10'};

/***/ }),

/***/ "./src/components/ui.tsx":
/*!*******************************!*\
  !*** ./src/components/ui.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Avatar: () => (/* binding */ Avatar),
/* harmony export */   Base: () => (/* binding */ Base),
/* harmony export */   BlockLink: () => (/* binding */ BlockLink),
/* harmony export */   Blockquote: () => (/* binding */ Blockquote),
/* harmony export */   Box: () => (/* binding */ Box),
/* harmony export */   Button: () => (/* binding */ Button),
/* harmony export */   ButtonList: () => (/* binding */ ButtonList),
/* harmony export */   CTALink: () => (/* binding */ CTALink),
/* harmony export */   Container: () => (/* binding */ Container),
/* harmony export */   Flex: () => (/* binding */ Flex),
/* harmony export */   FlexList: () => (/* binding */ FlexList),
/* harmony export */   Heading: () => (/* binding */ Heading),
/* harmony export */   Icon: () => (/* binding */ Icon),
/* harmony export */   IconLink: () => (/* binding */ IconLink),
/* harmony export */   InteractiveIcon: () => (/* binding */ InteractiveIcon),
/* harmony export */   Kicker: () => (/* binding */ Kicker),
/* harmony export */   Link: () => (/* binding */ Link),
/* harmony export */   LinkList: () => (/* binding */ LinkList),
/* harmony export */   List: () => (/* binding */ List),
/* harmony export */   Logo: () => (/* binding */ Logo),
/* harmony export */   NavButtonLink: () => (/* binding */ NavButtonLink),
/* harmony export */   NavLink: () => (/* binding */ NavLink),
/* harmony export */   Nudge: () => (/* binding */ Nudge),
/* harmony export */   Section: () => (/* binding */ Section),
/* harmony export */   Space: () => (/* binding */ Space),
/* harmony export */   Subhead: () => (/* binding */ Subhead),
/* harmony export */   SuperHeading: () => (/* binding */ SuperHeading),
/* harmony export */   Text: () => (/* binding */ Text),
/* harmony export */   VisuallyHidden: () => (/* binding */ VisuallyHidden),
/* harmony export */   cx: () => (/* binding */ cx)
/* harmony export */ });
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-plugin-image */ "./node_modules/gatsby-plugin-image/dist/gatsby-image.module.js");
/* harmony import */ var is_absolute_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-absolute-url */ "./node_modules/is-absolute-url/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ui.css */ "./src/components/ui.css.ts");





const cx = (...args) => args.filter(Boolean).join(" ");
function Base({
  as: Component = "div",
  cx: _cx = [],
  className,
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Component, Object.assign({
    className: cx(..._cx, className)
  }, props));
}
function Container({
  width = "normal",
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.containers[width]]
  }, props));
}
function Flex({
  variant,
  gap = 3,
  gutter,
  wrap,
  responsive,
  marginY,
  alignItems,
  cx: _cx = [],
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.flex, variant && _ui_css__WEBPACK_IMPORTED_MODULE_3__.flexVariants[variant], responsive && _ui_css__WEBPACK_IMPORTED_MODULE_3__.flexVariants.responsive, wrap && _ui_css__WEBPACK_IMPORTED_MODULE_3__.flexVariants.wrap, gutter && _ui_css__WEBPACK_IMPORTED_MODULE_3__.gutter[gutter], gutter ? _ui_css__WEBPACK_IMPORTED_MODULE_3__.flexGap[0] : _ui_css__WEBPACK_IMPORTED_MODULE_3__.flexGap[gap], marginY && _ui_css__WEBPACK_IMPORTED_MODULE_3__.marginY[marginY], alignItems && _ui_css__WEBPACK_IMPORTED_MODULE_3__.flexVariants[alignItems], ..._cx]
  }, props));
}
function Box({
  width = "full",
  background,
  padding,
  paddingY,
  radius,
  center = false,
  order,
  cx: _cx = [],
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.widths[width], background && _ui_css__WEBPACK_IMPORTED_MODULE_3__.backgrounds[background], padding && _ui_css__WEBPACK_IMPORTED_MODULE_3__.padding[padding], paddingY && _ui_css__WEBPACK_IMPORTED_MODULE_3__.paddingY[paddingY], radius && _ui_css__WEBPACK_IMPORTED_MODULE_3__.radii[radius], center && _ui_css__WEBPACK_IMPORTED_MODULE_3__.box.center, order && _ui_css__WEBPACK_IMPORTED_MODULE_3__.order[order], ..._cx]
  }, props));
}
function FlexList(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Flex, Object.assign({
    as: "ul",
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.list]
  }, props));
}
function List(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    as: "ul",
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.list]
  }, props));
}
function Space({
  size = "auto",
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.margin[size]]
  }, props));
}
function Nudge({
  left,
  right,
  top,
  bottom,
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    cx: [left && _ui_css__WEBPACK_IMPORTED_MODULE_3__.marginLeft[-left], right && _ui_css__WEBPACK_IMPORTED_MODULE_3__.marginRight[-right], top && _ui_css__WEBPACK_IMPORTED_MODULE_3__.marginTop[-top], bottom && _ui_css__WEBPACK_IMPORTED_MODULE_3__.marginBottom[-bottom]]
  }, props));
}
function Section(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Box, Object.assign({
    as: "section",
    className: _ui_css__WEBPACK_IMPORTED_MODULE_3__.section
  }, props));
}
function Text({
  variant = "body",
  center = false,
  bold = false,
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.text[variant], center && _ui_css__WEBPACK_IMPORTED_MODULE_3__.text.center, bold && _ui_css__WEBPACK_IMPORTED_MODULE_3__.text.bold]
  }, props));
}
function SuperHeading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Text, Object.assign({
    as: "h1",
    variant: "superHeading"
  }, props));
}
function Heading(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Text, Object.assign({
    as: "h2",
    variant: "heading"
  }, props));
}
function Subhead(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Text, Object.assign({
    as: "h3",
    variant: "subhead"
  }, props));
}
function Kicker(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Text, Object.assign({
    variant: "kicker"
  }, props));
}
function Link({
  to,
  href,
  ...props
}) {
  const url = href || to || "";
  if ((0,is_absolute_url__WEBPACK_IMPORTED_MODULE_1__["default"])(url)) {
    return (/*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/anchor-has-content
      react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", Object.assign({
        href: url,
        className: _ui_css__WEBPACK_IMPORTED_MODULE_3__.link
      }, props))
    );
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__.Link, Object.assign({
    to: url,
    className: _ui_css__WEBPACK_IMPORTED_MODULE_3__.link
  }, props));
}
function NavLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    as: Link,
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.navlink]
  }, props));
}
function NavButtonLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    as: "button",
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.navButtonlink]
  }, props));
}
function Button({
  variant = "primary",
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    as: Link,
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.buttons[variant]]
  }, props));
}
function ButtonList({
  links = [],
  reversed = false,
  ...props
}) {
  const getVariant = i => {
    if (reversed) {
      return i === 0 ? "reversed" : "linkReversed";
    }
    return i === 0 ? "primary" : "link";
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(FlexList, Object.assign({
    marginY: 4
  }, props), links && links.map((link, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", {
    key: link.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Button, {
    href: link.href,
    variant: getVariant(i)
  }, link.text))));
}
function CTALink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    as: Link,
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.ctaLink]
  }, props));
}
function LinkList({
  links = [],
  ...props
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(FlexList, props, links && links.map((link, i) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", {
    key: link.id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(CTALink, {
    href: link.href
  }, link.text))));
}
function Blockquote(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    as: "blockquote",
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.blockquote]
  }, props));
}
function Avatar({
  alt,
  image
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    alt: alt,
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(image),
    className: _ui_css__WEBPACK_IMPORTED_MODULE_3__.avatar
  });
}
function Logo({
  alt,
  image,
  size = "small"
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    alt: alt,
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(image),
    className: _ui_css__WEBPACK_IMPORTED_MODULE_3__.logos[size]
  });
}
function Icon({
  alt,
  image,
  size = "medium"
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.GatsbyImage, {
    alt: alt,
    image: (0,gatsby_plugin_image__WEBPACK_IMPORTED_MODULE_4__.getImage)(image),
    className: _ui_css__WEBPACK_IMPORTED_MODULE_3__.icons[size]
  });
}
function IconLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(NavLink, Object.assign({
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.iconLink]
  }, props));
}
function InteractiveIcon(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    as: "button",
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.interactiveIcon]
  }, props));
}
function VisuallyHidden(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Base, Object.assign({
    as: "span",
    cx: [_ui_css__WEBPACK_IMPORTED_MODULE_3__.visuallyHidden]
  }, props));
}
function BlockLink(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(Link, Object.assign({
    className: _ui_css__WEBPACK_IMPORTED_MODULE_3__.blockLink
  }, props));
}

/***/ }),

/***/ "./src/pages/index.tsx?export=head":
/*!*****************************************!*\
  !*** ./src/pages/index.tsx?export=head ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Head: () => (/* binding */ Head),
/* harmony export */   "default": () => (/* binding */ Homepage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "./src/components/layout.tsx");
/* harmony import */ var _components_fallback__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/fallback */ "./src/components/fallback.tsx");
/* harmony import */ var _components_poem_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/poem-list */ "./src/components/poem-list.tsx");
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @contentful/rich-text-types */ "./node_modules/@contentful/rich-text-types/dist/index.js");
/* harmony import */ var _contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gatsby_source_contentful_rich_text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-source-contentful/rich-text */ "./node_modules/gatsby-source-contentful/rich-text.js");
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/head */ "./src/components/head.tsx");







const options = {
  renderMark: {
    [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.MARKS.BOLD]: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("b", {
      className: "font-bold"
    }, text),
    [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.MARKS.ITALIC]: text => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("em", {
      className: "font-italic"
    }, text)
  },
  renderNode: {
    [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.BLOCKS.PARAGRAPH]: (node, children) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "mb-4"
    }, children),
    [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.BLOCKS.HEADING_2]: (node, children) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h2", {
      className: "text-2xl mt-6 mb-2"
    }, children),
    [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.BLOCKS.EMBEDDED_ASSET]: node => {
      // Handle embedded images/assets here using Gatsby Image components if needed
      const {
        title,
        description,
        file
      } = node.data.target.fields;
      const url = file['en-US'].url; // Example for default locale
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
        src: url,
        alt: description || title,
        className: "my-4 mx-auto"
      });
    },
    [_contentful_rich_text_types__WEBPACK_IMPORTED_MODULE_4__.INLINES.ASSET_HYPERLINK]: (node, children) => {
      var _target$fields, _target$fields$file, _target$fields$file$e, _target$file;
      const target = node.data.target;
      const url = (target === null || target === void 0 ? void 0 : (_target$fields = target.fields) === null || _target$fields === void 0 ? void 0 : (_target$fields$file = _target$fields.file) === null || _target$fields$file === void 0 ? void 0 : (_target$fields$file$e = _target$fields$file['en-US']) === null || _target$fields$file$e === void 0 ? void 0 : _target$fields$file$e.url) || (target === null || target === void 0 ? void 0 : (_target$file = target.file) === null || _target$file === void 0 ? void 0 : _target$file.url);
      if (!url) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children);
      const href = url.startsWith('//') ? `https:${url}` : url;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
        href: href,
        target: "_blank",
        rel: "noopener noreferrer"
      }, children);
    }
  }
};
function Homepage(props) {
  var _images$;
  const {
    homepage
  } = props && props.data || {};
  if (!homepage) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "wrapper"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_fallback__WEBPACK_IMPORTED_MODULE_2__["default"], null)));
  }
  const {
    title,
    images,
    content,
    content2
  } = homepage;
  const imageUrl = (images === null || images === void 0 ? void 0 : (_images$ = images[0]) === null || _images$ === void 0 ? void 0 : _images$.url) || null;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "wrapper home"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Selwyn Pritchard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4", null, "4 August 1933 \u2013 30 June 2005"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "content"
  }, content && (0,gatsby_source_contentful_rich_text__WEBPACK_IMPORTED_MODULE_5__.renderRichText)(content, options), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "MenuImageContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "poemsMenuContainer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_poem_list__WEBPACK_IMPORTED_MODULE_3__["default"], {
    type: "home"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "portrait"
  }, imageUrl && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    src: imageUrl,
    alt: title
  })))), content2 && (0,gatsby_source_contentful_rich_text__WEBPACK_IMPORTED_MODULE_5__.renderRichText)(content2, options)));
}
const Head = props => {
  var _homepage$images, _homepage$images$;
  const {
    homepage
  } = props.data;
  const image = homepage !== null && homepage !== void 0 && (_homepage$images = homepage.images) !== null && _homepage$images !== void 0 && (_homepage$images$ = _homepage$images[0]) !== null && _homepage$images$ !== void 0 && _homepage$images$.url ? {
    url: homepage.images[0].url
  } : undefined;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_head__WEBPACK_IMPORTED_MODULE_6__["default"], {
    title: homepage === null || homepage === void 0 ? void 0 : homepage.title,
    description: homepage === null || homepage === void 0 ? void 0 : homepage.description,
    image: image
  });
};
const query = "1708715440";

/***/ }),

/***/ "./src/styles.css.ts":
/*!***************************!*\
  !*** ./src/styles.css.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var src_theme_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_theme_css_ts_vanilla_css_source_H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5_fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v_456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL_m1_wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR_UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0_3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY_sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU_GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF_DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp_Sp7yp_S9ePNv_9f_wiy9gcAAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/theme.css.ts.vanilla.css!=!../node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/theme.css.ts.vanilla.css","source":"#H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5-fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v-456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL-m1-wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR-UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0-3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY-sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU-GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF-DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp-Sp7yp_S9ePNv_9f-wiy9gcAAA"}!../node_modules/@vanilla-extract/webpack-plugin/extracted.js */ "src/theme.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/theme.css.ts.vanilla.css\",\"source\":\"#H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5-fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v-456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL-m1-wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR-UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0-3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY-sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU-GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF-DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp-Sp7yp_S9ePNv_9f-wiy9gcAAA\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js");
/* harmony import */ var src_theme_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_theme_css_ts_vanilla_css_source_H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5_fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v_456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL_m1_wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR_UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0_3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY_sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU_GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF_DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp_Sp7yp_S9ePNv_9f_wiy9gcAAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(src_theme_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_theme_css_ts_vanilla_css_source_H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5_fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v_456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL_m1_wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR_UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0_3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY_sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU_GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF_DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp_Sp7yp_S9ePNv_9f_wiy9gcAAA_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_styles_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_styles_css_ts_vanilla_css_source_QGtleWZyYW1lcyB6b29tSW5VcCB7CiAgMCUgewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDEwcHgpIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgICBvcGFjaXR5OiAwOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpLCB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOwogIH0KfQpAa2V5ZnJhbWVzIHpvb21PdXREb3duIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTsKICAgIG9wYWNpdHk6IDE7CiAgfQogIDEwMCUgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgxMHB4KSB0cmFuc2xhdGVYKC01MCUpOwogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogIH0KfQpAa2V5ZnJhbWVzIGZhZGVJbiB7CiAgMCUgewogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogICAgb3BhY2l0eTogMDsKICB9CiAgMTAwJSB7CiAgICBvcGFjaXR5OiAxOwogICAgdmlzaWJpbGl0eTogdmlzaWJsZTsKICB9Cn0KQGtleWZyYW1lcyBmYWRlT3V0IHsKICAwJSB7CiAgICBvcGFjaXR5OiAxOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDA7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgfQp9CmJvZHkgewogIG1hcmdpbjogMDsKICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtdGV4dF9fd3V3dTlwdyk7CiAgY29sb3I6IHZhcigtLWNvbG9ycy10ZXh0X193dXd1OXAxKTsKICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZF9fd3V3dTlwMCk7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKfQoqIHsKICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/styles.css.ts.vanilla.css!=!../node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles.css.ts.vanilla.css","source":"QGtleWZyYW1lcyB6b29tSW5VcCB7CiAgMCUgewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDEwcHgpIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgICBvcGFjaXR5OiAwOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpLCB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOwogIH0KfQpAa2V5ZnJhbWVzIHpvb21PdXREb3duIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTsKICAgIG9wYWNpdHk6IDE7CiAgfQogIDEwMCUgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgxMHB4KSB0cmFuc2xhdGVYKC01MCUpOwogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogIH0KfQpAa2V5ZnJhbWVzIGZhZGVJbiB7CiAgMCUgewogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogICAgb3BhY2l0eTogMDsKICB9CiAgMTAwJSB7CiAgICBvcGFjaXR5OiAxOwogICAgdmlzaWJpbGl0eTogdmlzaWJsZTsKICB9Cn0KQGtleWZyYW1lcyBmYWRlT3V0IHsKICAwJSB7CiAgICBvcGFjaXR5OiAxOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDA7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgfQp9CmJvZHkgewogIG1hcmdpbjogMDsKICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtdGV4dF9fd3V3dTlwdyk7CiAgY29sb3I6IHZhcigtLWNvbG9ycy10ZXh0X193dXd1OXAxKTsKICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZF9fd3V3dTlwMCk7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKfQoqIHsKICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9"}!../node_modules/@vanilla-extract/webpack-plugin/extracted.js */ "src/styles.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/styles.css.ts.vanilla.css\",\"source\":\"QGtleWZyYW1lcyB6b29tSW5VcCB7CiAgMCUgewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDEwcHgpIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgICBvcGFjaXR5OiAwOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpLCB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOwogIH0KfQpAa2V5ZnJhbWVzIHpvb21PdXREb3duIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTsKICAgIG9wYWNpdHk6IDE7CiAgfQogIDEwMCUgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgxMHB4KSB0cmFuc2xhdGVYKC01MCUpOwogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogIH0KfQpAa2V5ZnJhbWVzIGZhZGVJbiB7CiAgMCUgewogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogICAgb3BhY2l0eTogMDsKICB9CiAgMTAwJSB7CiAgICBvcGFjaXR5OiAxOwogICAgdmlzaWJpbGl0eTogdmlzaWJsZTsKICB9Cn0KQGtleWZyYW1lcyBmYWRlT3V0IHsKICAwJSB7CiAgICBvcGFjaXR5OiAxOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDA7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgfQp9CmJvZHkgewogIG1hcmdpbjogMDsKICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtdGV4dF9fd3V3dTlwdyk7CiAgY29sb3I6IHZhcigtLWNvbG9ycy10ZXh0X193dXd1OXAxKTsKICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZF9fd3V3dTlwMCk7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKfQoqIHsKICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js");
/* harmony import */ var src_styles_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_styles_css_ts_vanilla_css_source_QGtleWZyYW1lcyB6b29tSW5VcCB7CiAgMCUgewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDEwcHgpIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgICBvcGFjaXR5OiAwOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpLCB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOwogIH0KfQpAa2V5ZnJhbWVzIHpvb21PdXREb3duIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTsKICAgIG9wYWNpdHk6IDE7CiAgfQogIDEwMCUgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgxMHB4KSB0cmFuc2xhdGVYKC01MCUpOwogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogIH0KfQpAa2V5ZnJhbWVzIGZhZGVJbiB7CiAgMCUgewogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogICAgb3BhY2l0eTogMDsKICB9CiAgMTAwJSB7CiAgICBvcGFjaXR5OiAxOwogICAgdmlzaWJpbGl0eTogdmlzaWJsZTsKICB9Cn0KQGtleWZyYW1lcyBmYWRlT3V0IHsKICAwJSB7CiAgICBvcGFjaXR5OiAxOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDA7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgfQp9CmJvZHkgewogIG1hcmdpbjogMDsKICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtdGV4dF9fd3V3dTlwdyk7CiAgY29sb3I6IHZhcigtLWNvbG9ycy10ZXh0X193dXd1OXAxKTsKICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZF9fd3V3dTlwMCk7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKfQoqIHsKICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_styles_css_ts_vanilla_css_node_modules_vanilla_extract_webpack_plugin_virtualFileLoader_dist_vanilla_extract_webpack_plugin_virtualFileLoader_cjs_js_fileName_src_styles_css_ts_vanilla_css_source_QGtleWZyYW1lcyB6b29tSW5VcCB7CiAgMCUgewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDEwcHgpIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgICBvcGFjaXR5OiAwOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpLCB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOwogIH0KfQpAa2V5ZnJhbWVzIHpvb21PdXREb3duIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTsKICAgIG9wYWNpdHk6IDE7CiAgfQogIDEwMCUgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgxMHB4KSB0cmFuc2xhdGVYKC01MCUpOwogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogIH0KfQpAa2V5ZnJhbWVzIGZhZGVJbiB7CiAgMCUgewogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogICAgb3BhY2l0eTogMDsKICB9CiAgMTAwJSB7CiAgICBvcGFjaXR5OiAxOwogICAgdmlzaWJpbGl0eTogdmlzaWJsZTsKICB9Cn0KQGtleWZyYW1lcyBmYWRlT3V0IHsKICAwJSB7CiAgICBvcGFjaXR5OiAxOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDA7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgfQp9CmJvZHkgewogIG1hcmdpbjogMDsKICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtdGV4dF9fd3V3dTlwdyk7CiAgY29sb3I6IHZhcigtLWNvbG9ycy10ZXh0X193dXd1OXAxKTsKICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZF9fd3V3dTlwMCk7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKfQoqIHsKICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9_node_modules_vanilla_extract_webpack_plugin_extracted_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/styles/layout.scss":
/*!********************************!*\
  !*** ./src/styles/layout.scss ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "src/components/poem-list.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/components/poem-list.css.ts.vanilla.css\",\"source\":\"LnBvZW0tbGlzdF9wb2VtTWVudUxpbmtfXzF5OXN5dWowIHsKICBmb250LXNpemU6IDAuODc1cmVtOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBjb2xvcjogaW5oZXJpdDsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua19fMXk5c3l1ajA6aG92ZXIgLnBvZW0tbGlzdF9wb2VtTWVudVRleHRfXzF5OXN5dWoxIHsKICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua0FjdGl2ZV9fMXk5c3l1ajIgewogIGZvbnQtd2VpZ2h0OiBib2xkOwp9Ci5wb2VtLWxpc3RfcG9lbU1lbnVJdGVtX18xeTlzeXVqMyB7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Ci5wb2VtLWxpc3RfcG9lbUdyaWRfXzF5OXN5dWo0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAwOwogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7CiAgZ2FwOiAwLjI1cmVtIDFyZW07CiAgbWFyZ2luLXRvcDogMnJlbTsKfQpAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIH0KfQpAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOwogIH0KfQ\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** src/components/poem-list.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/poem-list.css.ts.vanilla.css","source":"LnBvZW0tbGlzdF9wb2VtTWVudUxpbmtfXzF5OXN5dWowIHsKICBmb250LXNpemU6IDAuODc1cmVtOwogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBjb2xvcjogaW5oZXJpdDsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua19fMXk5c3l1ajA6aG92ZXIgLnBvZW0tbGlzdF9wb2VtTWVudVRleHRfXzF5OXN5dWoxIHsKICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsKfQoucG9lbS1saXN0X3BvZW1NZW51TGlua0FjdGl2ZV9fMXk5c3l1ajIgewogIGZvbnQtd2VpZ2h0OiBib2xkOwp9Ci5wb2VtLWxpc3RfcG9lbU1lbnVJdGVtX18xeTlzeXVqMyB7CiAgbWFyZ2luLWJvdHRvbTogOHB4Owp9Ci5wb2VtLWxpc3RfcG9lbUdyaWRfXzF5OXN5dWo0IHsKICBsaXN0LXN0eWxlOiBub25lOwogIG1hcmdpbjogMDsKICBwYWRkaW5nOiAwOwogIGRpc3BsYXk6IGdyaWQ7CiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7CiAgZ2FwOiAwLjI1cmVtIDFyZW07CiAgbWFyZ2luLXRvcDogMnJlbTsKfQpAbWVkaWEgKG1pbi13aWR0aDogNDgwcHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpOwogIH0KfQpAbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHsKICAucG9lbS1saXN0X3BvZW1HcmlkX18xeTlzeXVqNCB7CiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpOwogIH0KfQ"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "src/components/ui.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/components/ui.css.ts.vanilla.css\",\"source\":\"#H4sIAAAAAAAAE9VcTY_bOBK9z6_QZYH0Ag4sWXa7ncsie9gskNNksQufGrIs2-qWJbc-2t1Z5L-vRLJKpMQiaY8n2EyAAVrme1Uq1it-iNLHJn2Mi7yO0jwpHx-bcnrcTL3__uZ5x-htck639WHlvUblh8mkSr8n1URqfG7OzcPJX9x9Ys3LfZpPsmRXr7yoqQvpYpnuD9LVU7TdpvletBXkpyhOJiGQRndyQ4EnW_747aN8G9Vj63cibmZmuhneTtzH8m7s3FTjxlRjMI_KsjgLk6HJJLQURu917tedIUE2N5GJhoLrQce1a7JskyXJVvAtGJ_TXfbX6uLk1FGboq6Lo7WndlnyJty5Z-5s0-qURe8rr_ulI4yydJ9P0jo5VisvTvI6KWXwv6MyjfK67egyOgmmJWPqfp10V1de938tqKqjEsL7wFCKOUbB2mjRm6hKsja2giAaE0ALLTwusuaYf5Nc2PSOb9Myieu0yNubZu1GsbA4x1GCODYSa9BJDlmyJcLStiBCWiZ1fBDoZIwWDfTgLk8-J_U5ScD1HWMQGe9Pp3_5pOtbz3tqqjrdvbOq1GZJa4fl3IaT6UPEsknY2V9rx5CTZVKdirxKXyFFDo798I82l6cCkzLMPhrobgpiWtwNkb5APumRPiDvR8hAIJ_1yACQyxFyJpCZHjkD5MMIGQrkUY8kikaHnAtkrkfOAbkZIRcCWeiRC0DGI-QEgnvSQ_vobsdYCO8LgcX4JmMsBLgksBjh3RgLIa4ILMZ4P8ZCkGsCi1E-jLEQ5obAYpxTxDIB8rFKgF_HwlSaHqJsJ5qeLU1fmrZaouLfLK3rQ1pCFXy3tT0XrHkl2n-3tN-l9d95AREAf0ohsrTCRj5r1F1pK_97lqy8vOhGFxx3xWjNZ1vSBEX8jEXFD-TB31pZAA7J789ouKa8ABzy3w9puKbGABwk4M9puKbQABxU4C9ouKbaAByE4N_TcE3JAThowV_ScE3dATjWHf-BxuuKDxJg8CMDgaYCIQGGf2Mg0JQhJMAOiA0EmlqEBNgFWwOBpiAhAXZCYiDQVCXRcN3rZ6dMnkezYkVD5lkxLbd1r7e92ZyiObM5Wp7rXp8HszlFo2ZztJzXvZ5TszlF02ZztPzXvf6fzOb-2IoGzWGyPpvNKTXDbI4uL-u-vmRmc0qNMZujy9FaqkdHsz21JpkNGurXWipgucWiUsQsFumCt5YqXmGxqFQ9i0W6Qq6lEnmyWFTKpMUiXVLXUk19sVhU6qrFIl2D11IRLi0WlUJssagp2nwSJNXsSmygsJ0oW8kWzRwrNthCVdRGW4N6bbClKddgC_XQGG0NirXBlqZWgy1UwqvR1qBSG2xpCjXYQg2cjbYGZdpgS1OlwRZm_5vR1qBGG2xpSjTYwrx_N9oaFGiDLU19Blt9ef5uNDaszgZruuKM5iAXg6nZ3KA0m8xpKjOag3QMfLO5QV02mdOUZTQHGRkEZnODomwyp6nJaA6SMpiZzQ0qssmcpiCjOcjLIDSbG5RjkzlNNd43dbf0hmIczGVjfPM5jrL4A1Fovb96E1-2KzanXTCKAyCMYOHggFR9nR3QYBQHUCr3Dg5IJdnZAQ1GcQDFs3RwQKrTzg5oMIoDKKcHBwek4u3sgAajOIACixwckCq6swMajOIASm7j4IBU5p0d0GAUB3B8CGIHD-TS7-yCDqT6gErYuvggjQfuPmhAqg8ohsTFB2mQcPdBA1J9QD3sXHyQRg53HzQg1QeUxN7FB2k4cfdBA1J9QFUcXHyQxhh3HzQg7kMZbdP0cdN6UsCTp4BvSxSvSbnLivPKO6TbbcIexG2KcpuUkw7UVDD2MYoJUIgnsbuBhax1EJ4GBU_XGBAMgn8_4I_TMs7QwPM1BoBCWOhnDJviTX1mFpz0z2wdn2DCkzPPq5O3esJ-Gz5PqzgHGLQsUv_Y1g1Pnn6KUkpp6LgC7KcXFQkml3T91KAmweQarR_WGxJMLrr6IfmVBNMBw9pxJsHksqgfCt9IMLnOkYaxdxJNr1ukEeg7DSfXIf3gMZvScHJd0df9mU_DyXVCX7JnAQ0n5_19tZ3NaDi5q_LYneABglAh4Gd75MZf2wqOqpppJv5O0mIs0N8zzezdSWOMBbp9ppmCO4mNsWDva-bRTqpjLJgEmsmwk_wYC-aCZkbrpEPGgimhmZY6CZKxoChnmrmlmzI5D3aTZn7oJlHOgx2lmeO5aZXzYFdp5mluouU82FmauZabejkPdpdmvuQmY8YjSzkdM431_Ds7a4aCfpIxmgN6pKI5D2bLs4WH1DTnwWzJLDykqjkPZsvRwkPqmvNgtuQWHlLZnAezpbDwkNrmPJgtJwsPqW7O08v7xUJE61swYZeVNiZS4YIJO62yMZEaF0zYbbWNiVS5YMKOa2xMpM4FE3bdq42JVDpnkqV-1nCNtf6voj-JNjNvkpM67zgwacyb36TGOw5MF_OeNqnvjgMSJTRvVJPa7jggRULz7jOp644DkiM0bymTmu44IC1C8z4xqeeOA9UcWnZ_SS0zFuiacG5mIXXMWLBzFmYWUsOMBbvn3sxC6pexYActzSykdhkLdtGDmYXUbcciqTaMRjxjzX5my12UbajM5i56oCmYMEdiGxOpX8GEebK1MZEqFkyYK4mNidSyYMJ82dmYSEULJsyZvY2J1LVgwrw52JhIdQumXuCpjYrWOHBh9z1ZuUilAxd24LOVi9Q7cGEXZlYuUvXAhZ14tHKR2gcu7MbcykVWAMElF4FCxzauA1gA5BmfdCi023V73BTbd2j3cpGUPG9X5DV7_wRadRe-sfdRsPuzvuU5kWcs3aX_sCvVJC_KY5QBpGSQ7r2JyUGBdJe-CAhzXgC-c0DSbSMzT6VDffzqN35xaMmf3SnByJIITvyG5e2CgS2Pv1IwquaUlF_aiHRHJ0VQzEdo3I9kDA45GGKHGiv6lrvomGbvctuqDY5wlLd-c4l0e5dltCmyLaBeXYI9sORP3QOuvqUVqvE-qKGur8m_yyLjHvFbx1ANhH-jCFbN5iApuLmdgn_5mHxrhQ5vVISvtwsMSj7_1QLznMbP-CQrPF80HzWo7VjkBTR9t0UPJ1zPLtE7Jtu0OQKk-lNDp7wPO7_Dh3Rt_-XVrh03Vl5zaseHOKoSJaxxdIKXYMK3a4J6i0hVyTGV06z-s24cfIaXcbrxVJVfHcHbOyHf-rhN5uAAevppmTO4q6_RJsGK8r2_NdoLuUeaCwvLFWOy7K9U_ebT3lenXLtskcrsQby5Qd9mUJkfKjT7CEiCIYm_nJ7eLixFlihWRZZiD_nBjQqtcmRgzveq6Af-YlGSwSg-D69JLc7V3tsz0PCNqbjIinLlpfkhKdNa22516M5LyK25OfZHNYnimr3Py231t5pHrzLNQmtO3Pg2iYsy4mcj4AU-Vl_S7trkVBZtganfVxw_-HXbAHT6MagGP9bpsTvwsGtycfQiacvUpM3eoqkpT6-_4c_srItMdk_ctpS3w6u6zJXXM2f5KId4v3ETxc_7smjybR9AfqJFCuj_RaQ1Ibo43m27pqy6hqcilbUS19FXiXlpCv6l2hlyX5klm6yIn2WiB_XIEPv90yVSEbzySa15pJKmOSt0cByJzIRbjleDDY8rKu3N338zfV-FaGh7zHnd0Tf-Q_V4KtN2MIXtpvmGzKZe38DGF9n99YkOhvwcE1gdkJLaQk3mN8W8K-KmugVzmbQuVvjVlnlMRk1z-1br-khbPLDUgit77-JASDH-iW7ItXxLVNyxCTZynKKynesYCd0z8tjUCd7ZzOymezY6sP4-6IfkVkEYEVvy7Jp8v-b-LHl2SzcQNaoou59XLCUnhJ_chf1PCUE3IXhpihoOMc_lR2CDr1Fd8tGqqW3s1Dzdi16jOsKli3iA1s7xxGc6pnjYuTqUbeaIK5rPcwGRGBr5_rg6PTA0vOawdlbsi0pd-PKHdsK75ZyvHsGJgK0mZay6iIWndPj1MT9Y9og07tSjWMtka0E4sCb-vuyxLbei-nWUzcwC1Qz8fY0Z-aT-PJetLAY3s7j6ZuSJcUGqS14N6V5zuNTQlVP5MY-5LpI83RKG__jPuJ_DE-8SkN_bIl8mkBeHyogzXiOO1lXYx-FS7eNQSvbXtGraRH__wt6mAP_5w1OwwApBnKVt4eleg_gw9dg_Rfc-N6F7PUNd7p4KvuhcedGmXTm0hZN5emhvnXd7d0fwgTKQZ-_vNtk08Fhpzvu9XaR2yxHWzGOLEa_N2Yg_Qf5bp7DIq-IySXIvyrfeB6noLcLkeMdI2DIRvi_4VZIL3_BSqsVyKnarflgNzAOtAeoDhhd8RdL9O5JyW9vb4Bd8s6O7fX5b9BO_S7Z9FbbxbqFCNVs490A4lXvA5ZN243d-yuIse0h912v0yb0BYPR1LwTMte11n_jqR6G5DjL-zlc_nsw-ztr_tCjtF79ckNS3vxDbNoByJ8NZZenfTsoESC44alN8OeaoNvXHTfFFmFxtGoyb4ntGhdp0JjfVvrb1MyRFH1ow6uoeKF8E5Y__ATdE5c8PVwAA\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** src/components/ui.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/components/ui.css.ts.vanilla.css","source":"#H4sIAAAAAAAAE9VcTY_bOBK9z6_QZYH0Ag4sWXa7ncsie9gskNNksQufGrIs2-qWJbc-2t1Z5L-vRLJKpMQiaY8n2EyAAVrme1Uq1it-iNLHJn2Mi7yO0jwpHx-bcnrcTL3__uZ5x-htck639WHlvUblh8mkSr8n1URqfG7OzcPJX9x9Ys3LfZpPsmRXr7yoqQvpYpnuD9LVU7TdpvletBXkpyhOJiGQRndyQ4EnW_747aN8G9Vj63cibmZmuhneTtzH8m7s3FTjxlRjMI_KsjgLk6HJJLQURu917tedIUE2N5GJhoLrQce1a7JskyXJVvAtGJ_TXfbX6uLk1FGboq6Lo7WndlnyJty5Z-5s0-qURe8rr_ulI4yydJ9P0jo5VisvTvI6KWXwv6MyjfK67egyOgmmJWPqfp10V1de938tqKqjEsL7wFCKOUbB2mjRm6hKsja2giAaE0ALLTwusuaYf5Nc2PSOb9Myieu0yNubZu1GsbA4x1GCODYSa9BJDlmyJcLStiBCWiZ1fBDoZIwWDfTgLk8-J_U5ScD1HWMQGe9Pp3_5pOtbz3tqqjrdvbOq1GZJa4fl3IaT6UPEsknY2V9rx5CTZVKdirxKXyFFDo798I82l6cCkzLMPhrobgpiWtwNkb5APumRPiDvR8hAIJ_1yACQyxFyJpCZHjkD5MMIGQrkUY8kikaHnAtkrkfOAbkZIRcCWeiRC0DGI-QEgnvSQ_vobsdYCO8LgcX4JmMsBLgksBjh3RgLIa4ILMZ4P8ZCkGsCi1E-jLEQ5obAYpxTxDIB8rFKgF_HwlSaHqJsJ5qeLU1fmrZaouLfLK3rQ1pCFXy3tT0XrHkl2n-3tN-l9d95AREAf0ohsrTCRj5r1F1pK_97lqy8vOhGFxx3xWjNZ1vSBEX8jEXFD-TB31pZAA7J789ouKa8ABzy3w9puKbGABwk4M9puKbQABxU4C9ouKbaAByE4N_TcE3JAThowV_ScE3dATjWHf-BxuuKDxJg8CMDgaYCIQGGf2Mg0JQhJMAOiA0EmlqEBNgFWwOBpiAhAXZCYiDQVCXRcN3rZ6dMnkezYkVD5lkxLbd1r7e92ZyiObM5Wp7rXp8HszlFo2ZztJzXvZ5TszlF02ZztPzXvf6fzOb-2IoGzWGyPpvNKTXDbI4uL-u-vmRmc0qNMZujy9FaqkdHsz21JpkNGurXWipgucWiUsQsFumCt5YqXmGxqFQ9i0W6Qq6lEnmyWFTKpMUiXVLXUk19sVhU6qrFIl2D11IRLi0WlUJssagp2nwSJNXsSmygsJ0oW8kWzRwrNthCVdRGW4N6bbClKddgC_XQGG0NirXBlqZWgy1UwqvR1qBSG2xpCjXYQg2cjbYGZdpgS1OlwRZm_5vR1qBGG2xpSjTYwrx_N9oaFGiDLU19Blt9ef5uNDaszgZruuKM5iAXg6nZ3KA0m8xpKjOag3QMfLO5QV02mdOUZTQHGRkEZnODomwyp6nJaA6SMpiZzQ0qssmcpiCjOcjLIDSbG5RjkzlNNd43dbf0hmIczGVjfPM5jrL4A1Fovb96E1-2KzanXTCKAyCMYOHggFR9nR3QYBQHUCr3Dg5IJdnZAQ1GcQDFs3RwQKrTzg5oMIoDKKcHBwek4u3sgAajOIACixwckCq6swMajOIASm7j4IBU5p0d0GAUB3B8CGIHD-TS7-yCDqT6gErYuvggjQfuPmhAqg8ohsTFB2mQcPdBA1J9QD3sXHyQRg53HzQg1QeUxN7FB2k4cfdBA1J9QFUcXHyQxhh3HzQg7kMZbdP0cdN6UsCTp4BvSxSvSbnLivPKO6TbbcIexG2KcpuUkw7UVDD2MYoJUIgnsbuBhax1EJ4GBU_XGBAMgn8_4I_TMs7QwPM1BoBCWOhnDJviTX1mFpz0z2wdn2DCkzPPq5O3esJ-Gz5PqzgHGLQsUv_Y1g1Pnn6KUkpp6LgC7KcXFQkml3T91KAmweQarR_WGxJMLrr6IfmVBNMBw9pxJsHksqgfCt9IMLnOkYaxdxJNr1ukEeg7DSfXIf3gMZvScHJd0df9mU_DyXVCX7JnAQ0n5_19tZ3NaDi5q_LYneABglAh4Gd75MZf2wqOqpppJv5O0mIs0N8zzezdSWOMBbp9ppmCO4mNsWDva-bRTqpjLJgEmsmwk_wYC-aCZkbrpEPGgimhmZY6CZKxoChnmrmlmzI5D3aTZn7oJlHOgx2lmeO5aZXzYFdp5mluouU82FmauZabejkPdpdmvuQmY8YjSzkdM431_Ds7a4aCfpIxmgN6pKI5D2bLs4WH1DTnwWzJLDykqjkPZsvRwkPqmvNgtuQWHlLZnAezpbDwkNrmPJgtJwsPqW7O08v7xUJE61swYZeVNiZS4YIJO62yMZEaF0zYbbWNiVS5YMKOa2xMpM4FE3bdq42JVDpnkqV-1nCNtf6voj-JNjNvkpM67zgwacyb36TGOw5MF_OeNqnvjgMSJTRvVJPa7jggRULz7jOp644DkiM0bymTmu44IC1C8z4xqeeOA9UcWnZ_SS0zFuiacG5mIXXMWLBzFmYWUsOMBbvn3sxC6pexYActzSykdhkLdtGDmYXUbcciqTaMRjxjzX5my12UbajM5i56oCmYMEdiGxOpX8GEebK1MZEqFkyYK4mNidSyYMJ82dmYSEULJsyZvY2J1LVgwrw52JhIdQumXuCpjYrWOHBh9z1ZuUilAxd24LOVi9Q7cGEXZlYuUvXAhZ14tHKR2gcu7MbcykVWAMElF4FCxzauA1gA5BmfdCi023V73BTbd2j3cpGUPG9X5DV7_wRadRe-sfdRsPuzvuU5kWcs3aX_sCvVJC_KY5QBpGSQ7r2JyUGBdJe-CAhzXgC-c0DSbSMzT6VDffzqN35xaMmf3SnByJIITvyG5e2CgS2Pv1IwquaUlF_aiHRHJ0VQzEdo3I9kDA45GGKHGiv6lrvomGbvctuqDY5wlLd-c4l0e5dltCmyLaBeXYI9sORP3QOuvqUVqvE-qKGur8m_yyLjHvFbx1ANhH-jCFbN5iApuLmdgn_5mHxrhQ5vVISvtwsMSj7_1QLznMbP-CQrPF80HzWo7VjkBTR9t0UPJ1zPLtE7Jtu0OQKk-lNDp7wPO7_Dh3Rt_-XVrh03Vl5zaseHOKoSJaxxdIKXYMK3a4J6i0hVyTGV06z-s24cfIaXcbrxVJVfHcHbOyHf-rhN5uAAevppmTO4q6_RJsGK8r2_NdoLuUeaCwvLFWOy7K9U_ebT3lenXLtskcrsQby5Qd9mUJkfKjT7CEiCIYm_nJ7eLixFlihWRZZiD_nBjQqtcmRgzveq6Af-YlGSwSg-D69JLc7V3tsz0PCNqbjIinLlpfkhKdNa22516M5LyK25OfZHNYnimr3Py231t5pHrzLNQmtO3Pg2iYsy4mcj4AU-Vl_S7trkVBZtganfVxw_-HXbAHT6MagGP9bpsTvwsGtycfQiacvUpM3eoqkpT6-_4c_srItMdk_ctpS3w6u6zJXXM2f5KId4v3ETxc_7smjybR9AfqJFCuj_RaQ1Ibo43m27pqy6hqcilbUS19FXiXlpCv6l2hlyX5klm6yIn2WiB_XIEPv90yVSEbzySa15pJKmOSt0cByJzIRbjleDDY8rKu3N338zfV-FaGh7zHnd0Tf-Q_V4KtN2MIXtpvmGzKZe38DGF9n99YkOhvwcE1gdkJLaQk3mN8W8K-KmugVzmbQuVvjVlnlMRk1z-1br-khbPLDUgit77-JASDH-iW7ItXxLVNyxCTZynKKynesYCd0z8tjUCd7ZzOymezY6sP4-6IfkVkEYEVvy7Jp8v-b-LHl2SzcQNaoou59XLCUnhJ_chf1PCUE3IXhpihoOMc_lR2CDr1Fd8tGqqW3s1Dzdi16jOsKli3iA1s7xxGc6pnjYuTqUbeaIK5rPcwGRGBr5_rg6PTA0vOawdlbsi0pd-PKHdsK75ZyvHsGJgK0mZay6iIWndPj1MT9Y9og07tSjWMtka0E4sCb-vuyxLbei-nWUzcwC1Qz8fY0Z-aT-PJetLAY3s7j6ZuSJcUGqS14N6V5zuNTQlVP5MY-5LpI83RKG__jPuJ_DE-8SkN_bIl8mkBeHyogzXiOO1lXYx-FS7eNQSvbXtGraRH__wt6mAP_5w1OwwApBnKVt4eleg_gw9dg_Rfc-N6F7PUNd7p4KvuhcedGmXTm0hZN5emhvnXd7d0fwgTKQZ-_vNtk08Fhpzvu9XaR2yxHWzGOLEa_N2Yg_Qf5bp7DIq-IySXIvyrfeB6noLcLkeMdI2DIRvi_4VZIL3_BSqsVyKnarflgNzAOtAeoDhhd8RdL9O5JyW9vb4Bd8s6O7fX5b9BO_S7Z9FbbxbqFCNVs490A4lXvA5ZN243d-yuIse0h912v0yb0BYPR1LwTMte11n_jqR6G5DjL-zlc_nsw-ztr_tCjtF79ckNS3vxDbNoByJ8NZZenfTsoESC44alN8OeaoNvXHTfFFmFxtGoyb4ntGhdp0JjfVvrb1MyRFH1ow6uoeKF8E5Y__ATdE5c8PVwAA"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "src/styles.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/styles.css.ts.vanilla.css\",\"source\":\"QGtleWZyYW1lcyB6b29tSW5VcCB7CiAgMCUgewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDEwcHgpIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgICBvcGFjaXR5OiAwOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpLCB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOwogIH0KfQpAa2V5ZnJhbWVzIHpvb21PdXREb3duIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTsKICAgIG9wYWNpdHk6IDE7CiAgfQogIDEwMCUgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgxMHB4KSB0cmFuc2xhdGVYKC01MCUpOwogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogIH0KfQpAa2V5ZnJhbWVzIGZhZGVJbiB7CiAgMCUgewogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogICAgb3BhY2l0eTogMDsKICB9CiAgMTAwJSB7CiAgICBvcGFjaXR5OiAxOwogICAgdmlzaWJpbGl0eTogdmlzaWJsZTsKICB9Cn0KQGtleWZyYW1lcyBmYWRlT3V0IHsKICAwJSB7CiAgICBvcGFjaXR5OiAxOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDA7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgfQp9CmJvZHkgewogIG1hcmdpbjogMDsKICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtdGV4dF9fd3V3dTlwdyk7CiAgY29sb3I6IHZhcigtLWNvbG9ycy10ZXh0X193dXd1OXAxKTsKICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZF9fd3V3dTlwMCk7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKfQoqIHsKICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** src/styles.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/styles.css.ts.vanilla.css","source":"QGtleWZyYW1lcyB6b29tSW5VcCB7CiAgMCUgewogICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KSB0cmFuc2xhdGVZKDEwcHgpIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgICBvcGFjaXR5OiAwOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDE7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpLCB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoLTUwJSk7CiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOwogIH0KfQpAa2V5ZnJhbWVzIHpvb21PdXREb3duIHsKICAwJSB7CiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgtNTAlKTsKICAgIG9wYWNpdHk6IDE7CiAgfQogIDEwMCUgewogICAgb3BhY2l0eTogMDsKICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSkgdHJhbnNsYXRlWSgxMHB4KSB0cmFuc2xhdGVYKC01MCUpOwogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogIH0KfQpAa2V5ZnJhbWVzIGZhZGVJbiB7CiAgMCUgewogICAgdmlzaWJpbGl0eTogaGlkZGVuOwogICAgb3BhY2l0eTogMDsKICB9CiAgMTAwJSB7CiAgICBvcGFjaXR5OiAxOwogICAgdmlzaWJpbGl0eTogdmlzaWJsZTsKICB9Cn0KQGtleWZyYW1lcyBmYWRlT3V0IHsKICAwJSB7CiAgICBvcGFjaXR5OiAxOwogIH0KICAxMDAlIHsKICAgIG9wYWNpdHk6IDA7CiAgICB2aXNpYmlsaXR5OiBoaWRkZW47CiAgfQp9CmJvZHkgewogIG1hcmdpbjogMDsKICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtdGV4dF9fd3V3dTlwdyk7CiAgY29sb3I6IHZhcigtLWNvbG9ycy10ZXh0X193dXd1OXAxKTsKICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvcnMtYmFja2dyb3VuZF9fd3V3dTlwMCk7CiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7CiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTsKfQoqIHsKICBib3gtc2l6aW5nOiBib3JkZXItYm94Owp9"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "src/theme.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{\"fileName\":\"src/theme.css.ts.vanilla.css\",\"source\":\"#H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5-fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v-456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL-m1-wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR-UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0-3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY-sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU-GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF-DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp-Sp7yp_S9ePNv_9f-wiy9gcAAA\"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** src/theme.css.ts.vanilla.css!=!./node_modules/@vanilla-extract/webpack-plugin/virtualFileLoader/dist/vanilla-extract-webpack-plugin-virtualFileLoader.cjs.js?{"fileName":"src/theme.css.ts.vanilla.css","source":"#H4sIAAAAAAAAE42VTXPaMBCG7_kVmuQaZ_wFGOXUTpu2B6YHDj1mZFuAGttyZRlIOv3vXZnoEx8CBzO8j3bflbRrLDiX6O8NQlFU8YaLISpJ9bIXfOzq5-fTeBrXfYzR3S5R30cXlPQsNZIAEqfq6yG9YC0Rr5pKFRUvyrL0qHaU1CTLVLJFVcWxx5BKsiPVUD4FytNi5UFlA941s5iY9yhDTyoaxVpbYhR5SqKVFUZ5f3alVEsFRoUvZVpaY5QsfS3XGsEoS31tobUSo2WQbqm1CmKmQULrs4YKgpXWKQUxXGm87kAMzVq3e1BDu9bvAdTQsHXMVGRrecc7uWVvdLD7_lvVdK2bql5Az691U1jj7rPVTW0t6DP5TXUdRulMfFMfd8_K6qbCHm7HTPyV1v-456n0X5TtD3KIOi5a0mhMQBh9M12qpTUbW00NGC3mqIG2rOSN6RgJSec4lxkxWs0x0MKCuOARLrkL-m1-wuj2Z087tCXdcHuPBniAH8F27ooDJTXr9nrR-UOLWt5xveIVoy8btIF_7tGGdg08lDzdt8uahnX0-3sNrsE3uAAPy8U1FHhKYgWmM6BUD4MlCkuuqYE3zOxZAnNNM1RKKrZgFJKFx57AbItnOT9prqbTQ5zSdhY-sdoMwgSmHKCFRofpPlawowTcCoMtp2ESm86dsI4IwU-GgdFXhIiXq1DdmQeEbx0GYWE75EKQI5HEWiFuD2kjx2_wxuk_8_OGdYaE6ZjFV54tSs4GraaOukJ_wE4YpvYGsYts4ZDsKVGVVnMCrg2LylFKJxKM0CQgGiL2dqf27py5ABUTVWMJmKRr9TF-DqTmpyGIAxMV8qg3knr1TL_v0q_pOsviT_dGUqlcLckvWuFp-Sp7yp_S9ePNv_9f-wiy9gcAAA"}!./node_modules/@vanilla-extract/webpack-plugin/extracted.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (() => {



/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-tsxhead.js.map