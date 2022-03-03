"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8433],{48433:function(n,e,t){t.r(e),e.default="@uiw/react-amap-require-script\n===\n\n\u7528\u4e8e\u52a0\u8f7d\u9ad8\u5fb7\u5730\u56fe\u5176\u5b83 SDK \u4f9d\u8d56\uff0c\u5b98\u65b9\u793a\u4f8b\u4e2d\u7684 css, js\u52a0\u8f7d\u3002\n\n```jsx\nimport { APILoader } from '@uiw/react-amap';\n// \u6216\u8005\u5355\u72ec\u5b89\u88c5\u4f7f\u7528\nimport { APILoader } from '@uiw/react-amap-require-script';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--rehype:bgWhite=true&codeSandbox=true--\x3e\n```jsx\nimport ReactDOM from 'react-dom';\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, MassMarks } from '@uiw/react-amap';\n\nconst Example = (props) => {\n  const [show, setShow] = useState(true);\n  const [points, setPoints] = useState([]);\n  const map = useRef()\n  const marker = useRef()\n  useEffect(() => {\n    if(points.length === 0) {\n      requireScript('https://a.amap.com/jsapi_demos/static/citys.js', 'citys_id').then(() => {\n        if(citys && Array.isArray(citys)) {\n          setPoints(citys);\n        }\n      });\n    }\n  });\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '300px' }}>\n        <Map zoom={4}>\n          <MassMarks\n            visiable={show}\n            data={points}\n            onMouseMove={(evn) => {\n              if (!map.current) {\n                map.current = evn.target.getMap();\n                if (!marker.current) {\n                  marker.current = new AMap.Marker({ content: ' ', map: map.current });\n                }\n              }\n              if (marker.current) {\n                marker.current.setPosition(evn.data.lnglat);\n                marker.current.setLabel({content: evn.data.name})\n              }\n            }}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\n### API\n\n```typescript\n/**\n * load SDK by css tag\n */\nexport declare function requireCss(src: string): Promise<void>;\n/**\n * load SDK by script tag\n */\nexport declare function requireScript(src: string, id?: string): Promise<void>;\n```\n"}}]);
//# sourceMappingURL=8433.8dd63304.chunk.js.map