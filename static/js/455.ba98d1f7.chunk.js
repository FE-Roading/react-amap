(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[455],{505:function(t,n){!function(t){var n=/[*&][^\s[\]{},]+/,e=/!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,a="(?:"+e.source+"(?:[ \t]+"+n.source+")?|"+n.source+"(?:[ \t]+"+e.source+")?)";function r(t,n){n=(n||"").replace(/m/g,"")+"m";var e="([:\\-,[{]\\s*(?:\\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|\\s*#))".replace(/<<prop>>/g,(function(){return a})).replace(/<<value>>/g,(function(){return t}));return RegExp(e,n)}t.languages.yaml={scalar:{pattern:RegExp("([\\-:]\\s*(?:\\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\\2[^\r\n]+)*)".replace(/<<prop>>/g,(function(){return a}))),lookbehind:!0,alias:"string"},comment:/#.*/,key:{pattern:RegExp("((?:^|[:\\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)[^\r\n{[\\]},#\\s]+?(?=\\s*:\\s)".replace(/<<prop>>/g,(function(){return a}))),lookbehind:!0,alias:"atrule"},directive:{pattern:/(^[ \t]*)%.+/m,lookbehind:!0,alias:"important"},datetime:{pattern:r("\\d{4}-\\d\\d?-\\d\\d?(?:[tT]|[ \t]+)\\d\\d?:\\d{2}:\\d{2}(?:\\.\\d*)?[ \t]*(?:Z|[-+]\\d\\d?(?::\\d{2})?)?|\\d{4}-\\d{2}-\\d{2}|\\d\\d?:\\d{2}(?::\\d{2}(?:\\.\\d*)?)?"),lookbehind:!0,alias:"number"},boolean:{pattern:r("true|false","i"),lookbehind:!0,alias:"important"},null:{pattern:r("null|~","i"),lookbehind:!0,alias:"important"},string:{pattern:r("(\"|')(?:(?!\\2)[^\\\\\r\n]|\\\\.)*\\2"),lookbehind:!0,greedy:!0},number:{pattern:r("[+-]?(?:0x[\\da-f]+|0o[0-7]+|(?:\\d+\\.?\\d*|\\.?\\d+)(?:e[+-]?\\d+)?|\\.inf|\\.nan)","i"),lookbehind:!0},tag:e,important:n,punctuation:/---|[:[\]{}\-,|>?]|\.\.\./},t.languages.yml=t.languages.yaml}(Prism)}}]);
//# sourceMappingURL=455.ba98d1f7.chunk.js.map