(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[586],{1209:function(n,o,t){"use strict";t.r(o),o.default="ControlBarControl \u7ec4\u5408\u4e86\u65cb\u8f6c\u3001\u503e\u659c\u3001\u590d\u4f4d\u5728\u5185\u7684\u5730\u56fe\u63a7\u4ef6\n===\n\n\u7ec4\u5408\u4e86\u65cb\u8f6c\u3001\u503e\u659c\u3001\u590d\u4f4d\u5728\u5185\u7684\u5730\u56fe\u63a7\u4ef6\u3002 [\u76f8\u5173\u793a\u4f8b](https://lbs.amap.com/api/jsapi-v2/example/map-componets/map-with-function-control/)\n\n```jsx\nimport { ControlBarControl } from '@uiw/react-amap';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, ControlBarControl } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u5173\u95ed' : '\u5f00\u542f'}\n      </button>\n      <Map>\n        <ControlBarControl\n          visiable={show}\n          offset={new AMap.Pixel(30, 10)}\n          position=\"RT\"\n        />\n        {show && (\n          <ControlBarControl\n            visiable={show}\n            offset={new AMap.Pixel(10, 10)}\n            position=\"LT\"\n          />\n        )}\n      </Map>\n    </>\n  );\n}\n\nReactDOM.render((\n  <div style={{ width: '100%', height: '300px' }}>\n    <APILoader akay=\"GTrnXa5hwXGwgQnTBG28SHBubErMKm3f\">\n      <Example />\n    </APILoader>\n  </div>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n| ----- | ----- | ----- | ----- |\n| visiable | \u8986\u76d6\u7269\u662f\u5426\u53ef\u89c1\u3002 | `boolean` | - |\n| position | \u63a7\u4ef6\u505c\u9760\u4f4d\u7f6e `{ top: 5; left: 5; right: 5; bottom: 5 }` \u6216\u8005 'LT': \u5de6\u4e0a\u89d2, 'RT': \u53f3\u4e0a\u89d2, 'LB': \u5de6\u4e0b\u89d2, 'RB': \u53f3\u4e0b\u89d2\u3002 | `string| object` | - |\n| offset | \u76f8\u5bf9\u4e8e\u5730\u56fe\u5bb9\u5668\u5de6\u4e0a\u89d2\u7684\u504f\u79fb\u91cf\uff0c\u6b63\u6570\u4ee3\u8868\u5411\u53f3\u4e0b\u504f\u79fb\u3002\u9ed8\u8ba4\u4e3a `AMap.Pixel(10,10)` | `[number, number]` | - |\n"}}]);
//# sourceMappingURL=586.4e8b972d.chunk.js.map