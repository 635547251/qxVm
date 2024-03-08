const fs = require('fs');
const QXVM_GENERATE = require('../../qxVm_sanbox/qxVm.sanbox');


function ReadCode(name, dir) {
    let file_path = dir === undefined ? `${__dirname}/${name}` : `${__dirname}/${dir}/${name}`;
    console.log(file_path)
    return fs.readFileSync(file_path) + "\r\n"
}


const js_code = ReadCode(`/match1.js`);
const user_config = {
    isTest: true,
    compress: false,
    runConfig: { proxy: true, logOpen: true },
    window_attribute: {},

    env: {
        location: {
            href: "https://match2023.yuanrenxue.cn/topic/1"
        },
    }
}

// 打印帮助信息
// QXVM_GENERATE.help()

let result = QXVM_GENERATE.sanbox(js_code, "get_dddd", user_config);
console.log(result.get_dddd())
