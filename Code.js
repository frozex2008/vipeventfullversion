// ==UserScript==
// @name         Auto-Duolingo
// @version      2.0.7
// @author       DevX
// @namespace    http://tampermonkey.net/
// @description  Automation tool for Duolingo, automatically solving exercises, stories, earning XP points, and supporting Duolingo rankings!
// @match        https://*.duolingo.com/*
// @grant        none
// @license      MIT
// @icon         https://api.autoduolingo.click/assets/favicon.ico
// @downloadURL https://update.greasyfork.org/scripts/487867/Auto-Duolingo.user.js
// @updateURL https://update.greasyfork.org/scripts/487867/Auto-Duolingo.meta.js
// ==/UserScript==

// If you see this command without any accompanying install button, 
// it's likely you haven't installed the 'Tampermonkey' extension
// or you're opening the link in an unsupported browser. Try installing
// the 'Tampermonkey' extension or switch to a different browser to
// attempt the installation again!
// ==================================>
// Sau khi update, hãy quay lại trang web Duolingo và làm mới trang để
// hệ thống tự động cập nhật lại phiên bản mới cho bạn!
// ==================================>
// After updating, return to the Duolingo website and refresh the page 
// to automatically update the new version for you!
 
function _0x2fb0() {
    const _0x2d723d = ['Không\x20tìm\x20thấy\x20đáp\x20án\x20thích\x20hợp!', '_blank', 'currentChallenge', 'correctTokens', 'input[value=\x22\x22]', '</b>', 'padStart', 'autoduoSkipBtn', 'xpGoalSessionProgress', 'contains', 'Set\x20XP\x20Farm\x20Location', 'goLessonChallenge', 'GỠ\x20KEY', 'getTime', 'superBubble', 'forEach', '\x20close-setting-btn-listening', 'Authentication\x20failed\x20because\x20the\x20key\x20has\x20reached\x20the\x20maximum\x20allowed\x20number\x20of\x20IP!\x0aNote:\x20For\x20the\x2024-hour\x20key,\x20only\x20one\x20IP\x20address\x20is\x20supported\x20per\x20key.\x20Therefore,\x20if\x20your\x20IP\x20address\x20changes\x20during\x20usage\x20(due\x20to\x20network\x20changes,\x20VPN\x20usage,\x20or\x20network\x20resets,\x20etc.),\x20reactivation\x20will\x20not\x20be\x20possible\x20even\x20if\x20the\x20key\x20is\x20still\x20valid.\x0a-\x20If\x20your\x20IP\x20address\x20frequently\x20changes,\x20consider\x20using\x20a\x20long-term\x20Key\x20Vip\x20service\x20for\x20more\x20stable\x20and\x20long-lasting\x20usage!', 'There\x20was\x20an\x20error\x20while\x20loading\x20challenge\x20data!', 'lessonWrapper', 'isAutoGetX2', 'text67', 'listenMatchHandlerGeneral', 'text33', 'totalTime', 'There\x20is\x20an\x20error\x20when\x20finding\x20the\x20react\x20props', '[class=\x22zlazS\x22]', 'generalData', '/practice-hub', 'keyExpiredElm', 'btnLoading', 'Bằng\x20việc\x20đặt\x20số\x20kinh\x20nghiệm\x20mục\x20tiêu,\x20hệ\x20thống\x20sẽ\x20tự\x20động\x20dừng\x20auto\x20khi\x20tổng\x20số\x20kinh\x20nghiệm\x20thu\x20được\x20bằng\x20hoặc\x20vượt\x20qua\x20số\x20kinh\x20nghiệm\x20mục\x20tiêu\x20đã\x20đặt.\x0a#\x20Lưu\x20ý:\x20Số\x20KN\x20mục\x20tiêu\x20phải\x20lớn\x20hơn\x20số\x20KN\x20đã\x20thu\x20được\x20hiện\x20tại!\x0a\x0aNhập\x20vào\x20số\x20kinh\x20nghiệm\x20mục\x20tiêu\x20bạn\x20muốn:', 'Invalid\x20data\x20error!', 'location', 'isDarkMode', 'challenge-characterMatch', 'version', 'bind', '__reactProps', 'autoduoDisableFeatures', 'replace', 'I\x27m\x20sorry,\x20this\x20feature\x20is\x20only\x20available\x20for\x20VIP\x20Key\x20users.\x20Please\x20contact\x20the\x20ADMIN\x20for\x20more\x20details!', 'NHẬP\x20KEY', 'autoduoDecode', 'handleSkipChallenge', 'handlePassMode', 'https://[a-z]+.duolingo.com/.*', 'switch-info-listening', 'removeItem', 'isPassMode', 'text78', 'handleAutoGetX2Off', 'handleGetX2Failed', 'handlePassModeOff', 'assign', 'best_solution', 'text27', '[data-test=\x22legendary-start-button\x22]', '[data-test*=\x22challenge-listenMatch\x22]', 'submit', 'text10', 'radioListenMatch', 'HTMLTextAreaElement', '\x20setting-btn-listening', 'setLanguage', 'handleFarmingLocationOn', 'passModeWrapper', 'createSetting', 'The\x20automatic\x202x\x20XP\x20has\x20been\x20turned\x20off\x20because\x20no\x20new\x20lessons\x20were\x20found!', 'text7', 'LINK\x20LẤY\x20KEY', 'Auto-Duolingo\x20is\x20automatically\x20collecting\x202x\x20XP...', 'isGettingX2', 'removeChild', 'Auto\x20Collect\x202x\x20XP', 'Tự\x20động\x20lấy\x20x2\x20KN', '_1WVl5', 'display', 'Do\x20you\x20want\x20to\x20automatically\x20pass\x20combined\x20legendary\x20exercises?\x0a\x0aNOTE:\x0a+\x20The\x20auto\x20pass\x20for\x20legendary\x20exercises\x20only\x20works\x20with\x20accounts\x20that\x20have\x20unlimited\x20hearts!\x20DO\x20NOT\x20enable\x20this\x20option\x20for\x20accounts\x20without\x20unlimited\x20hearts\x20as\x20it\x20may\x20lead\x20to\x20getting\x20stuck\x20during\x20auto\x20pass.\x0a+\x20The\x20system\x20will\x20only\x20pass\x20previously\x20combined\x20legendary\x20exercises\x20within\x20a\x20close\x20scope\x20to\x20the\x20current\x20lesson;\x20it\x20will\x20automatically\x20skip\x20further\x20ones!', 'text20', 'practicePath', '48CmxgPF', 'openBoxReward', 'split', 'targetModeLabel', 'displayTableTokens', 'targetModeValue', 'targetModeWrapper', 'Số\x20KN\x20mục\x20tiêu\x20phải\x20lớn\x20hơn\x20số\x20KN\x20đã\x20auto\x20hiện\x20tại\x20(%v),\x20vui\x20lòng\x20thử\x20lại!', 'Turbo\x20Mode', 'json', 'slice', 'text3', 'isKeyTimeOut', 'data-duo-theme', 'Vị\x20trí\x20không\x20thích\x20hợp:\x20chỉ\x20bật\x20auto\x20khi\x20đang\x20ở\x20trang\x20chủ\x20hoặc\x20trang\x20luyện\x20tập\x20dành\x20riêng\x20cho\x20Duolingo\x20Super\x20(có\x20hình\x20quả\x20tạ)!\x0a-\x20Nếu\x20bạn\x20muốn\x20Farm\x20KN\x20tại\x20bài\x20học\x20cụ\x20thể,\x20hãy\x20bật\x20tính\x20năng\x20\x22Đặt\x20vị\x20trí\x20Farm\x20KN\x22\x20trong\x20cài\x20đặt\x20của\x20công\x20cụ!\x0a-\x20Bật\x20Farm\x20KN\x20tại\x20trang\x20chủ\x20sẽ\x20tự\x20động\x20farm\x20bài\x20luyện\x20tập\x20(10\x20KN)\x0a-\x20Bật\x20Farm\x20KN\x20tại\x20trang\x20luyện\x20tập\x20của\x20Duolingo\x20Super\x20sẽ\x20tự\x20động\x20farm\x20bài\x20luyện\x20nghe\x20(20\x20KN).\x0a-\x20Nếu\x20bạn\x20muốn\x20auto\x20làm\x20các\x20bài\x20tập\x20huyền\x20thoại\x20hoặc\x20mở\x20khóa\x20các\x20bài\x20tập\x20khác,\x20vui\x20lòng\x20bật\x20chế\x20độ\x20vượt\x20(Lesson\x20Pass\x20Mode).', 'BUY\x20LONG-TERM\x20VIP\x20KEY', 'text38', 'doChallengeStory', 'keyBtn', 'farmingLocationContainer', 'time-listening', '[data-test=\x22story-start\x22]', 'passModeValue', 'key-container-listening', 'form', 'isAutoFarmXP', 'text32', 'challenge-listen', 'overlayContainer', 'setting-overlay-listening', '[Auto\x20Pass\x20Mode]\x20Đã\x20hoàn\x20thành\x20%v\x20bài\x20học\x20mới.\x0aAuto\x20đã\x20tự\x20động\x20dừng\x20lại!!', 'bubbleContainer', 'isFreeKey', 'Vô\x20thời\x20hạn', 'img[src=\x22https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/6a4aeae39e2054b3d9a33cc8e5a05816.svg\x22]', 'handleReload', 'autoduoStopAllAuto', 'running', 'handleLocation', 'text46', 'Nhập\x20Key\x20Vào\x20Đây...', 'KN\x20mục\x20tiêu:\x20', '?auth=dxling', '[data-test=\x22player-next\x22][aria-disabled=\x22false\x22]', 'text48', 'props', 'handleRadioListenMatchChallenge', 'devx', 'Không\x20tìm\x20thấy\x20đáp\x20án!', 'lessonPath', 'PHẢN\x20HỒI', 'setAutoduoSwitch', 'challenge-characterSelect', 'stopPropagation', 'skipCharacterGate', 'apiUrl', 'createStatistics', '-\x20CHẾ\x20ĐỘ\x20KINH\x20NGHIỆM\x20MỤC\x20TIÊU:\x0aBằng\x20việc\x20đặt\x20số\x20kinh\x20nghiệm\x20mục\x20tiêu,\x20hệ\x20thống\x20sẽ\x20tự\x20động\x20dừng\x20auto\x20khi\x20tổng\x20số\x20kinh\x20nghiệm\x20thu\x20được\x20bằng\x20hoặc\x20vượt\x20qua\x20số\x20kinh\x20nghiệm\x20mục\x20tiêu\x20đã\x20đặt.\x0aĐiều\x20này\x20giúp\x20bạn\x20kiểm\x20soát\x20auto\x20tốt\x20hơn,\x20tránh\x20việc\x20quên\x20tắt\x20auto\x20dẫn\x20đến\x20lượng\x20kinh\x20nghiệm\x20thu\x20được\x20không\x20mong\x20muốn!\x0a\x0a-\x20Lưu\x20ý:\x20số\x20kinh\x20nghiệm\x20mục\x20tiêu\x20phải\x20lớn\x20hơn\x20lượng\x20kinh\x20nghiệm\x20đã\x20auto\x20hiện\x20tại!', 'Đóng', 'text35', '_owner', 'challenge-gapFill', 'text23', 'children', 'text73', 'text24', 'stateNode', 'handleTurboModeOn', 'BẮT\x20ĐẦU\x20FARM\x20KN', '-\x20AUTO\x20PASS\x20MODE:\x0aBy\x20setting\x20the\x20number\x20of\x20lessons\x20you\x20wish\x20to\x20pass,\x20the\x20system\x20will\x20automatically\x20pass\x20the\x20corresponding\x20number\x20of\x20new\x20lessons\x20as\x20per\x20the\x20value\x20you\x27ve\x20set!\x0a\x0a-\x20Note:\x20the\x20lesson\x20value\x20should\x20be\x20within\x20the\x20range\x20of\x201\x20-\x201000\x20(Enter\x200\x20for\x20unlimited\x20auto)!', '-\x20TURBO\x20MODE:\x0a[Please\x20disable\x20this\x20mode\x20if\x20you\x20encounter\x20errors\x20with\x20it]\x0aWhen\x20enabled,\x20the\x20system\x20will\x20significantly\x20boost\x20the\x20auto\x20speed.\x20It\x20will\x20utilize\x20higher\x20performance\x20and\x20is\x20not\x20recommended\x20for\x20use\x20on\x20low-performance\x20devices.\x0aTurn\x20it\x20off\x20and\x20refresh\x20the\x20page\x20if\x20you\x20encounter\x20issues\x20while\x20activating\x20this\x20mode!\x0a\x0aNote:\x20This\x20is\x20an\x20experimental\x20feature\x20and\x20requires\x20a\x20VIP\x20Key\x20to\x20use.\x20Only\x20enable\x20it\x20when\x20you\x20truly\x20require\x20speed\x20and\x20understand\x20its\x20implications!!', 'isSafeMode', '[data-test=\x22legendary-session-end-continue\x22]', 'toLowerCase', 'handleAutoGetX2On', 'challenge-match', 'Inappropriate\x20location:\x20Only\x20enable\x20auto\x20when\x20on\x20the\x20home\x20page\x20or\x20practice\x20page\x20(with\x20the\x20dumbbell\x20icon)\x20of\x20Duolingo\x20Super!\x0a-\x20If\x20you\x20want\x20to\x20Farm\x20XP\x20at\x20a\x20specific\x20lesson,\x20please\x20enable\x20the\x20\x27Set\x20XP\x20Farm\x20Location\x27\x20feature\x20in\x20the\x20tool\x27s\x20settings!\x0a-\x20Enabling\x20\x22Farm\x20XP\x22\x20on\x20the\x20homepage\x20will\x20automatically\x20farm\x20practice\x20questions\x20(10\x20XP).\x0a-\x20Enabling\x20\x22Farm\x20XP\x22\x20on\x20the\x20practice\x20page\x20of\x20Duolingo\x20Super\x20will\x20automatically\x20farm\x20listening\x20exercises\x20(20\x20XP).\x0a-\x20If\x20you\x20wish\x20to\x20auto\x20complete\x20legendary\x20exercises\x20or\x20unlock\x20other\x20exercises,\x20please\x20enable\x20the\x20Lesson\x20Pass\x20Mode.', 'none', 'handleChallengeMatch', 'innerHTML', 'Key\x20hiện\x20tại\x20đã\x20hết\x20hạn\x20sử\x20dụng,\x20vui\x20lòng\x20lấy\x20Key\x20mới\x20để\x20tiếp\x20tục\x20auto!', '\x20btn-blue\x20guide-getlink-btn-listening', '\x20<label>(', 'No\x20suitable\x20option\x20found.', 'auto-x2-wrapper', 'off', 'splice', '188548guALuc', '[data-test=\x22challenge-choice\x22]', 'createBtns', 'handleAnimationOff', 'createContainers', 'challenge-readComprehension', 'autoContainer', 'icon', '\x22><i\x20class=\x22autoduo-language-icon\x22\x20style=\x22--data-icon:\x20url(\x27', 'Basic\x20key', 'handleStoryArrange', 'head', 'dataStateNode', 'The\x20target\x20XP\x20must\x20be\x20greater\x20than\x20the\x20current\x20auto\x20XP\x20(%v),\x20please\x20try\x20again!', 'settingFunction', 'Farm\x20theo\x20vị\x20trí', 'challenge-name', 'reloadTime', 'statistic-wrapper-listening', 'getOwnPropertyDescriptor', '\x0a\x09\x09\x09:root{\x0a\x09\x09\x09\x09--autoduo-bg:\x20255,255,255;\x0a\x09\x09\x09\x09--autoduo-color:\x2075,75,75;\x0a\x09\x09\x09\x09--autoduo-h-color:\x20170,0,176;\x0a\x09\x09\x09}\x0a\x09\x09\x09:root[data-duo-theme=\x22dark\x22]{\x0a\x09\x09\x09\x09--autoduo-bg:\x2019,31,36;\x0a\x09\x09\x09\x09--autoduo-color:\x20241,247,251;\x0a\x09\x09\x09\x09--autoduo-h-color:\x20241,247,251;\x0a\x09\x09\x09}\x0a\x09\x09\x09.control-container-listening{\x0a\x09\x09\x09\x09position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x209999999;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20left:\x2020px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20bottom:\x2075px;\x0a\x09\x09\x09\x09padding:\x2012px\x2010px;\x0a\x09\x09\x09\x09border:\x202px\x20dotted\x20#FF00FF;\x0a\x09\x09\x09\x09border-radius:\x2020px;\x0a\x09\x09\x09\x09box-shadow:\x20rgba(14,\x2030,\x2037,\x200.12)\x200px\x202px\x204px\x200px,\x20rgba(14,\x2030,\x2037,\x200.32)\x200px\x202px\x2016px\x200px;\x0a\x09\x09\x09\x09background-color:\x20rgba(var(--autoduo-bg),\x200.4);\x0a\x09\x09\x09\x09backdrop-filter:\x20blur(4px);\x0a\x09\x09\x09\x09font-size:\x2017px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-animate{\x0a\x09\x09\x09\x09animation:\x20autoduo-control-eff\x20.15s;\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-animate::after{\x0a\x09\x09\x09\x09animation:\x20autoduo-control-border-eff\x20.35s\x20.12s\x20backwards;\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20autoduo-control-eff\x20{\x0a\x09\x09\x09\x09from\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(.8);\x0a\x09\x09\x09\x09\x09opacity:\x20.5;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09to\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(1);\x0a\x09\x09\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20autoduo-control-border-eff\x20{\x0a\x09\x09\x09\x09from\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(1);\x0a\x09\x09\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09to\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(1.15);\x0a\x09\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09.control-container-listening::after{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09z-index:\x20-1;\x0a\x09\x09\x09\x09inset:\x200;\x0a\x09\x09\x09\x09border-radius:\x20inherit;\x0a\x09\x09\x09\x09background-color:\x20transparent;\x0a\x09\x09\x09\x09box-shadow:\x20rgb(199\x20138\x20217\x20/\x2050%)\x200px\x200px\x200px\x205px;\x0a\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09}\x0a\x09\x09\x09.control-container-listening.event{border-color:\x20#FF00FF}\x0a\x09\x09\x09.control-container-listening.event::after{box-shadow:\x20rgb(217\x20138\x20138\x20/\x2050%)\x200px\x200px\x200px\x205px;}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.auto-container-listening{\x0a\x09\x09\x09\x09width:\x20250px\x20!important;\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/streak2.svg\x27);\x0a\x09\x09\x09\x09background-size:\x2012px;\x0a\x09\x09\x09\x09background-position:\x20right\x20top;\x0a\x09\x09\x09\x09background-repeat:\x20no-repeat;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x09\x09\x09.setting-overlay-listening\x20{\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09inset:\x200;\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09flex-direction:\x20column;\x0a\x09\x09\x09\x09padding:\x20inherit;\x0a\x09\x09\x09\x09padding-bottom:\x2020px;\x0a\x09\x09\x09\x09border-radius:\x20inherit;\x0a\x09\x09\x09\x09backdrop-filter:\x20inherit;\x0a\x09\x09\x09\x09background-color:\x20rgba(var(--autoduo-bg),\x200.8);\x0a\x09\x09\x09\x09animation:\x20setting-overlay-eff\x200.4s;\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20setting-overlay-eff\x20{\x0a\x09\x09\x09\x09from\x20{\x0a\x09\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09\x09\x09transform:\x20perspective(450px)\x20rotateY(-90deg);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09to\x20{\x0a\x09\x09\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09\x09\x09transform:\x20perspective(450px)\x20rotateY(0deg);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09.setting-overlay-listening\x20h3\x20{\x0a\x09\x09\x09\x09padding:\x208px\x200\x2012px\x200;\x0a\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09\x09text-transform:\x20uppercase;\x0a\x09\x09\x09}\x0a\x09\x09\x09.setting-function-listening{\x0a\x09\x09\x09\x09flex-grow:\x201;\x0a\x09\x09\x09}\x0a\x09\x09\x09.setting-function-listening\x20.switch-wrapper-listening\x20{\x0a\x09\x09\x09\x09margin-bottom:\x2011px;\x0a\x09\x09\x09\x09font-weight:\x20bold;\x0a\x09\x09\x09\x09color:\x20#ff4e00;\x0a\x09\x09\x09}\x0a\x09\x09\x09.close-setting-btn-listening\x20{\x0a\x09\x09\x09\x09width:\x2080%;\x0a\x09\x09\x09\x09margin:\x200\x20auto;\x0a\x09\x09\x09}\x0a\x09\x09\x09.\x20{\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09justify-content:\x20center;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09\x09height:\x2046px;\x0a\x09\x09\x09\x09margin-bottom:\x204px;\x0a\x09\x09\x09\x09background-color:\x20transparent;\x0a\x09\x09\x09\x09color:\x20rgb(var(--autoduo-bg));\x0a\x09\x09\x09\x09border:\x20none;\x0a\x09\x09\x09\x09border-radius:\x2016px;\x0a\x09\x09\x09\x09text-transform:\x20uppercase;\x0a\x09\x09\x09\x09letter-spacing:\x201px;\x0a\x09\x09\x09\x09font-weight:\x20bold;\x0a\x09\x09\x09\x09font-size:\x2014px;\x0a\x09\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09}\x0a\x09\x09\x09.::before\x20{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09inset:\x200;\x0a\x09\x09\x09\x09z-index:\x20-1;\x0a\x09\x09\x09\x09background-color:\x20#1cb0f6;\x0a\x09\x09\x09\x09color:\x20rgb(15,\x20131,\x20186);\x0a\x09\x09\x09\x09border-radius:\x20inherit;\x0a\x09\x09\x09\x09box-shadow:\x200\x204px\x200;\x0a\x09\x09\x09}\x0a\x09\x09\x09.:hover\x20{\x0a\x09\x09\x09\x09filter:\x20brightness(1.1);\x0a\x09\x09\x09}\x0a\x09\x09\x09.:active\x20{\x0a\x09\x09\x09\x09transform:\x20translateY(4px);\x0a\x09\x09\x09}\x0a\x09\x09\x09.:active::before\x20{\x0a\x09\x09\x09\x09box-shadow:\x20none;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09.btn-green::before{\x0a\x09\x09\x09\x09background-color:\x20#58CC02;\x0a\x09\x09\x09\x09color:\x20rgb(80,\x20151,\x200);\x0a\x09\x09\x09}\x0a\x09\x09\x09.btn-red::before\x20{\x0a\x09\x09\x09\x09background-color:\x20#FF4B4B;\x0a\x09\x09\x09\x09color:\x20rgb(234,43,43);\x0a\x09\x09\x09}\x0a\x09\x09\x09.btn-blue::before\x20{\x0a\x09\x09\x09\x09background-color:\x20rgb(\x2060,77,255\x20);\x0a\x09\x09\x09\x09color:\x20rgb(\x2063,34,236\x20);\x0a\x09\x09\x09}\x0a\x09\x09\x09.btn-white\x20{\x0a\x09\x09\x09\x09color:\x20#1cb0f6;\x0a\x09\x09\x09}\x0a\x09\x09\x09.btn-white:hover\x20{\x0a\x09\x09\x09\x09filter:\x20brightness(0.85);\x0a\x09\x09\x09}\x0a\x09\x09\x09.btn-white::before\x20{\x0a\x09\x09\x09\x09background-color:\x20white;\x0a\x09\x09\x09\x09color:\x20rgb(85\x20200\x20255);\x0a\x09\x09\x09\x09border:\x202px\x20solid\x20#8fdbff;\x0a\x09\x09\x09\x09box-shadow:\x200\x202px\x200;\x0a\x09\x09\x09}\x0a\x09\x09\x09.btn-orange::before\x20{\x0a\x09\x09\x09\x09color:\x20#ac8700;\x0a\x09\x09\x09\x09background-color:\x20#fb9f00;\x0a\x09\x09\x09}\x0a\x09\x09\x09.btn-purple::before\x20{\x0a\x09\x09\x09\x09background-color:\x20#e800ff;\x0a\x09\x09\x09\x09color:\x20pink;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.setting-btn-listening\x20{\x0a\x09\x09\x09\x09width:\x20100%\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.setting-btn-listening::before\x20{\x0a\x09\x09\x09\x09background-image:\x20url(https://autoduolingo.click/assets/client/setting.svg);\x0a\x09\x09\x09\x09background-repeat:\x20no-repeat;\x0a\x09\x09\x09\x09background-size:\x2022px;\x0a\x09\x09\x09\x09background-position:\x2018px;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening{\x0a\x09\x09\x09\x09flex-direction:\x20column;\x0a\x09\x09\x09\x09width:\x20100%\x20!important;\x0a\x09\x09\x09\x09margin-top:\x208px;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening::before\x20{\x0a\x09\x09\x09\x09background-image:\x20url(https://autoduolingo.click/assets/client/xp.svg);\x0a\x09\x09\x09\x09background-repeat:\x20no-repeat;\x0a\x09\x09\x09\x09background-size:\x2032px;\x0a\x09\x09\x09\x09background-position:\x2012px;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening.auto-x2::before\x20{\x0a\x09\x09\x09\x09background-image:\x20none;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening.auto-x2::after\x20{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09z-index:\x20-1;\x0a\x09\x09\x09\x09left:\x2016px;\x0a\x09\x09\x09\x09width:\x2025px;\x0a\x09\x09\x09\x09height:\x2030px;\x0a\x09\x09\x09\x09background-image:\x20url(https://autoduolingo.click/assets/client/exp.svg);\x0a\x09\x09\x09\x09background-size:\x20contain;\x0a\x20\x20\x20\x20\x09\x09\x09filter:\x20drop-shadow(0px\x200px\x206px\x20white);\x0a\x0a\x09\x09\x09\x09--scale-min:\x200.8;\x0a\x09\x09\x09\x09--scale-max:\x201.05;\x0a\x09\x09\x09\x09animation:\x20autoduo-scale-eff\x201.1s\x20infinite;\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20autoduo-scale-eff\x20{\x0a\x09\x09\x09\x090%,\x20100%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(var(--scale-min));\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x0950%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(var(--scale-max));\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening\x20label\x20{\x0a\x09\x09\x09\x09display:\x20none;\x0a\x09\x09\x09\x09font-size:\x209px;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening.farming-location\x20label{\x0a\x09\x09\x09\x09display:\x20block;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening.autoduo-disabled\x20{\x0a\x09\x09\x09\x09opacity:\x200.8\x20!important;\x0a\x09\x09\x09\x09user-select:\x20none\x20!important;\x0a\x09\x09\x09\x09-ms-user-select:\x20none\x20!important;\x0a\x09\x09\x09\x09-moz-user-select:\x20none\x20!important;\x0a\x09\x09\x09\x09-webkit-user-select:\x20none\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening.autoduo-disabled::before{\x0a\x09\x09\x09\x09background-color:\x20#9c9c9c\x20!important;\x0a\x20\x20\x20\x20\x09\x09\x09color:\x20#686868\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09\x09button.auto-farm-btn-listening.turbo.running::before{\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/thunder.ndx\x27);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09\x09background-position:\x20right;\x0a\x09\x09\x09}\x0a\x09\x09\x09.feedback-btn-listening,\x20.dropkey-btn-listening{\x0a\x09\x09\x09\x09display:\x20inline-flex;\x0a\x09\x09\x09\x09margin-top:\x204px;\x0a\x09\x09\x09\x09width:\x20calc(45%\x20-\x202px);\x0a\x09\x09\x09}\x0a\x09\x09\x09.feedback-btn-listening{\x0a\x09\x09\x09\x09margin-right:\x204px;\x09\x0a\x09\x09\x09\x09width:\x20calc(55%\x20-\x202px);\x0a\x09\x09\x09}\x0a\x09\x09\x09.feedback-btn-listening::before{\x0a\x09\x09\x09\x09background-image:\x20url(https://autoduolingo.click/assets/client/streak2.svg),\x20url(https://autoduolingo.click/assets/client/streak2.svg),url(https://autoduolingo.click/assets/client/streak-ground.svg);\x0a\x09\x09\x09\x09background-size:\x2012%,\x2014%,\x20cover;\x0a\x09\x09\x09\x09background-position:\x206px\x2027px,\x20111px\x202px,\x20center;\x0a\x09\x09\x09\x09background-repeat:\x20no-repeat;\x0a\x09\x09\x09}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.statistic-listening\x20{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20color:\x20rgb(var(--autoduo-color));\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20font-weight:\x20bold;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x09\x09\x09.statistic-listening\x20p{\x0a\x09\x09\x09\x09margin-bottom:\x208px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.statistic-listening\x20>\x20p::before{\x0a\x09\x09\x09\x09display:\x20inline-block;\x0a\x09\x09\x09\x09min-width:\x2056px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.statistic-wrapper-listening{\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09justify-content:\x20space-between;\x0a\x09\x09\x09\x09margin:\x2014px\x200;\x0a\x09\x09\x09}\x0a\x09\x09\x09.time-listening,\x20.total-exp-listening{\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09\x09margin-bottom:\x200\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09\x09.time-listening::before,\x0a\x09\x09\x09.total-exp-listening::before{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09width:\x2021px;\x0a\x09\x09\x09\x09height:\x2021px;\x0a\x09\x09\x09\x09margin-right:\x204px;\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/clock.svg\x27);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09}\x0a\x09\x09\x09.total-exp-listening::before{\x0a\x09\x09\x09\x09width:\x2016px;\x0a\x09\x09\x09\x09height:\x2021px;\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/exp.svg\x27);\x0a\x09\x09\x09}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.total-exp-listening::after{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20content:\x20\x27XP\x27;\x0a\x09\x09\x09\x09margin-left:\x204px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x09\x09\x09.key-container-listening{\x0a\x09\x09\x09\x09width:\x20250px;\x0a\x09\x09\x09\x09text-align:center;\x0a\x09\x09\x09}\x0a\x09\x09\x09.key-container-listening\x20>\x20*\x20{\x0a\x09\x09\x09\x09font-size:\x2015px\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09\x09.key-input-listening{\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border:\x202px\x20solid\x20#aaa;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20padding:\x2012px\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20border-radius:\x208px;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20background-color:\x20#eee;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20.key-btn-listening\x20{\x0a\x09\x09\x09\x09position:\x20relative;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20width:\x20100%;\x0a\x09\x09\x09\x09margin:\x206px\x200;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20}\x0a\x09\x09\x09.loading-btn-listening{\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09inset:\x200;\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09justify-content:\x20center;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09\x09background-color:\x20#58CC02;\x0a\x20\x20\x20\x20\x09\x09\x09border-radius:\x20inherit;\x0a\x09\x09\x09}\x0a\x09\x09\x09.loading-btn-dot\x20{\x0a\x09\x09\x09\x09--size:\x203.25px;\x0a\x09\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09\x09\x09border:\x20var(--size)\x20solid\x20rgb(var(--autoduo-bg));\x0a\x09\x09\x09\x09margin:\x20calc(var(--size)\x20*\x201.5);\x0a\x09\x09\x09}\x0a\x09\x09\x09.loading-btn-dot:nth-child(1)\x20{\x0a\x09\x09\x09\x09animation:\x20loading-btn-eff\x20.5s\x20ease-in-out\x20alternate\x20infinite;\x0a\x09\x09\x09}\x0a\x09\x09\x09.loading-btn-dot:nth-child(2)\x20{\x0a\x09\x09\x09\x09animation:\x20loading-btn-eff\x20.5s\x20ease-in-out\x20alternate\x20.2s\x20infinite;\x0a\x09\x09\x09}\x0a\x09\x09\x09.loading-btn-dot:nth-child(3)\x20{\x0a\x09\x09\x09\x09animation:\x20loading-btn-eff\x20.5s\x20ease-in-out\x20alternate\x20.4s\x20infinite;\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20loading-btn-eff\x20{\x0a\x09\x09\x09\x09100%\x20{\x20transform:\x20scale(1.5);\x20}\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09.guide-btn-listening,\x20.getlink-btn-listening{\x0a\x09\x09\x09\x09display:\x20inline-flex;\x0a\x09\x09\x09\x09width:\x20calc(50%\x20-\x203px);\x0a\x09\x09\x09\x09min-width:\x200;\x0a\x09\x09\x09\x09margin-top:\x204px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.getlink-btn-listening{\x0a\x09\x09\x09\x09margin-left:\x206px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.getlink-btn-listening::before\x20{\x0a\x09\x09\x09\x09background-image:\x20url(https://autoduolingo.click/assets/client/key.svg);\x0a\x09\x09\x09\x09background-repeat:\x20no-repeat;\x0a\x09\x09\x09\x09background-position:\x20center\x2021px;\x0a\x20\x20\x20\x20\x09\x09\x09background-size:\x2025px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.guide-getlink-btn-listening,\x20.key-vip-btn-listening{\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09justify-content:\x20center;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09\x09width:\x20100%;\x0a\x09\x09\x09\x09min-width:\x200;\x0a\x09\x09\x09\x09margin-top:\x208px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.key-vip-btn-listening{\x0a\x09\x09\x09\x09color:\x20yellow;\x0a\x09\x09\x09}\x0a\x09\x09\x09.key-vip-btn-listening::before{\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/twinkle.ndx\x27);\x0a\x20\x20\x20\x20\x09\x09\x09background-size:\x2085px\x20auto;\x0a\x09\x09\x09}\x0a\x09\x09\x09.key-vip-btn-listening::after\x20{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09display:\x20inline-block;\x0a\x09\x09\x09\x09margin-left:\x204px;\x0a\x09\x09\x09\x09width:\x2032px;\x0a\x09\x09\x09\x09height:\x2022px;\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/crown.ndx\x27);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09}\x0a\x09\x09\x09.signature-listening{\x0a\x09\x09\x09\x09position:\x20fixed;\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20z-index:\x2099999999;\x0a\x09\x09\x09\x09top:\x204px;\x0a\x09\x09\x09\x09left:\x2050%;\x0a\x09\x09\x09\x09transform:\x20translateX(-50%);\x0a\x09\x09\x09\x09color:\x20rgb(var(--autoduo-h-color));\x0a\x09\x09\x09\x09background-color:\x20rgba(255,\x20255,\x20255,\x20.5);\x0a\x09\x09\x09\x09font-style:\x20italic;\x0a\x09\x09\x09\x09font-size:\x2015px;\x0a\x09\x09\x09\x09font-weight:\x20700;\x0a\x09\x09\x09\x09padding:\x202px\x208px;\x0a\x09\x09\x09\x09border-radius:\x208px;\x0a\x09\x09\x09\x09width:\x20max-content;\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09}\x0a\x09\x09\x09.signature-listening::before{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09width:\x2050px;\x0a\x09\x09\x09\x09height:\x2050px;\x0a\x09\x09\x09\x09background-image:\x20url(https://autoduolingo.click/assets/client/autoduosuperThumb.ndx);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09\x09margin:\x20-4px\x200;\x0a\x09\x09\x09\x09margin-right:\x204px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-wrapper{\x0a\x09\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09\x09font-size:\x2013px;\x0a\x09\x09\x09\x09font-style:\x20normal;\x0a\x09\x09\x09\x09font-weight:\x20normal;\x0a\x09\x09\x09\x09color:\x20rgb(var(--autoduo-color));\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-wrapper::before{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09right:\x208px;\x0a\x09\x09\x09\x09top:\x208px;\x0a\x09\x09\x09\x09width:\x208px;\x0a\x09\x09\x09\x09height:\x208px;\x0a\x09\x09\x09\x09border:\x201.5px\x20solid\x20currentColor;\x0a\x09\x09\x09\x09border-top:\x20none;\x0a\x09\x09\x09\x09border-left:\x20none;\x0a\x09\x09\x09\x09transform:\x20rotate(45deg)\x20skew(-8deg,\x20-8deg);\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-selection{\x0a\x09\x09\x09\x09display:\x20none;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09left:\x200;\x0a\x09\x09\x09\x09right:\x200;\x0a\x09\x09\x09\x09top:\x200;\x0a\x09\x09\x09\x09padding:\x204px\x200;\x0a\x0a\x09\x09\x09\x09background:\x20#848484;\x0a\x09\x09\x09\x09color:\x20white;\x0a\x09\x09\x09\x09border-radius:\x202px;\x0a\x09\x09\x09\x09box-shadow:\x20rgb(104\x20149\x20199\x20/\x2050%)\x200px\x200px\x200px\x203px;\x0a\x09\x09\x09\x09animation:\x20language-selection-eff\x20.25s;\x0a\x09\x09\x09}\x0a\x09\x09\x09.signature-listening.event\x20.autoduo-language-selection{\x0a\x09\x09\x09\x09box-shadow:\x20rgb(255\x20111\x20111\x20/\x2050%)\x200px\x200px\x200px\x203px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-selection.show{\x0a\x09\x09\x09\x09display:\x20block;\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20language-selection-eff\x20{\x0a\x09\x09\x09\x09from\x20{\x0a\x09\x09\x09\x09\x09transform:\x20translateY(12px);\x0a\x09\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09to\x20{\x0a\x09\x09\x09\x09\x09transform:\x20translateY(0);\x0a\x09\x09\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-option,\x0a\x09\x09\x09.autoduo-language-selected{\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09\x09padding:\x204px\x208px;\x0a\x09\x09\x09\x09transition:\x20all\x20.15s;\x0a\x09\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-option:hover{\x0a\x09\x09\x09\x09background-color:\x20#595959;\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-selected{\x0a\x09\x09\x09\x09margin:\x200;\x0a\x09\x09\x09\x09margin-top:\x202px;\x0a\x09\x09\x09\x09border:\x201px\x20solid\x20#d6d6d6;\x0a\x09\x09\x09\x09border-radius:\x206px;\x0a\x09\x09\x09\x09padding:\x203px\x208px;\x0a\x09\x09\x09\x09box-shadow:\x20rgba(0,\x200,\x200,\x200.1)\x200px\x201px\x203px\x200px,\x20rgba(0,\x200,\x200,\x200.06)\x200px\x201px\x202px\x200px;\x0a\x09\x09\x09\x09background-color:\x20rgba(var(--autoduo-bg),0.5);\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-selected:hover{\x0a\x09\x09\x09\x09filter:\x20brightness(0.9);\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-language-icon{\x0a\x09\x09\x09\x09width:\x2024px;\x0a\x09\x09\x09\x09height:\x2015px;\x0a\x09\x09\x09\x09margin-right:\x206px;\x0a\x09\x09\x09\x09border-radius:\x202px;\x0a\x09\x09\x09\x09background-image:\x20var(--data-icon);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09.key-type-listening::before,\x0a\x09\x09\x09.key-expired-listening::before\x20{\x0a\x09\x09\x09\x09content:\x20var(--data-name);\x0a\x09\x09\x09}\x0a\x09\x09\x09.key-expired-listening\x20{\x0a\x09\x09\x09\x09margin-right:\x20-8px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.vip-type-listening{\x0a\x09\x09\x09\x09display:\x20inline-flex;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09\x09padding:\x202px\x208px;\x0a\x09\x09\x09\x09color:\x20#FF00FF;\x0a\x09\x09\x09\x09background-color:\x20#ffe0fd;\x0a\x09\x09\x09\x09border-radius:\x204px;\x0a\x09\x09\x09\x09border:\x202px\x20solid\x20#FF00FF;\x0a\x09\x09\x09}\x0a\x09\x09\x09.vip-type-listening.event\x20{\x0a\x09\x09\x09\x09color:\x20red;\x0a\x09\x09\x09\x09background-color:\x20#ffedf0;\x0a\x09\x09\x09\x09border-color:\x20red;\x0a\x09\x09\x09}\x0a\x09\x09\x09.vip-type-listening::before{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09display:\x20inline-block;\x0a\x09\x09\x09\x09margin-right:\x204px;\x0a\x09\x09\x09\x09width:\x2032px;\x0a\x09\x09\x09\x09height:\x2022px;\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/crown.ndx\x27);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09}\x0a\x09\x09\x09.vip-expired-listening{\x0a\x09\x09\x09\x09color:\x20#FF00FF;\x0a\x09\x09\x09\x09letter-spacing:\x20-1px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.vip-expired-listening.event{\x0a\x09\x09\x09\x09color:\x20#FF00FF;\x0a\x09\x09\x09}\x0a\x09\x09\x09.vip-expired-listening\x20span\x20{\x0a\x09\x09\x09\x09font-size:\x2014px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.show-hide-listening{\x0a\x09\x09\x09\x09position:\x20fixed;\x0a\x09\x09\x09\x09right:\x208px;\x0a\x09\x09\x09\x09top:\x2050%;\x0a\x09\x09\x09\x09transform:\x20translateY(-50%);\x0a\x09\x09\x09\x09z-index:\x20999999999;\x0a\x09\x09\x09\x09width:\x2050px;\x0a\x09\x09\x09\x09height:\x2050px;\x0a\x09\x09\x09\x09padding:\x200;\x0a\x09\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09\x09\x09color:\x20rgb(var(--autoduo-h-color));\x0a\x09\x09\x09\x09background-color:\x20#00DBDE;\x0a\x09\x09\x09\x09background-image:\x20linear-gradient(90deg,\x20#00DBDE\x200%,\x20#FC00FF\x20100%);\x0a\x09\x09\x09\x09border-color:\x20#b800c8;\x0a\x09\x09\x09\x09\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09justify-content:\x20center;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09\x09font-size:\x2032px;\x0a\x09\x09\x09\x09padding-top:\x202px;\x0a\x09\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09}\x0a\x09\x09\x09.show-hide-listening::before{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09inset:\x200;\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/vipCircle.ndx\x27);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09\x09transform:\x20scale(1.2);\x0a\x09\x09\x09}\x0a\x09\x09\x09.show-hide-listening::after{\x0a\x09\x09\x09\x09content:\x20var(--data-version);\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09left:\x2050%;\x0a\x09\x09\x09\x09bottom:\x20-2px;\x0a\x09\x09\x09\x09transform:\x20translate(-50%,\x20130%);\x0a\x09\x09\x09\x09font-size:\x2015px;\x0a\x09\x09\x09\x09font-weight:\x20bold;\x0a\x09\x09\x09}\x0a\x09\x09\x09.show-hide-listening.older::after{\x0a\x09\x09\x09\x09text-decoration:\x20line-through;\x0a\x09\x09\x09}\x0a\x09\x09\x09.show-hide-listening\x20i\x20{\x0a\x09\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09\x09flex-shrink:\x200;\x0a\x09\x09\x09\x09width:\x2035px;\x0a\x09\x09\x09\x09height:\x2035px;\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/little-eye.svg\x27);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09}\x0a\x09\x09\x09.show-hide-listening.hide\x20i::after{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09top:\x2050%;\x0a\x09\x09\x09\x09left:\x200;\x0a\x09\x09\x09\x09width:\x20110%;\x0a\x09\x09\x09\x09height:\x205px;\x0a\x09\x09\x09\x09transform:\x20rotate(45deg)\x20translateX(-3px);\x0a\x09\x09\x09\x09background-image:\x20linear-gradient(90deg,\x20#fea0ff\x200%,\x20#00DBDE\x20100%);\x0a\x09\x09\x09\x09border-radius:\x207px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.notify-bubble-listening::before\x20{\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/notify-icon.png\x27);\x0a\x09\x09\x09}\x0a\x09\x09\x09.super-bubble-listening::before\x20{\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/superfree-icon.png\x27);\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-container-listening\x20{\x0a\x09\x09\x09\x09position:\x20fixed;\x0a\x09\x09\x09\x09z-index:\x2099999;\x0a\x09\x09\x09\x09right:\x208px;\x0a\x09\x09\x09\x09bottom:\x2069px;\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09flex-direction:\x20column;\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening\x20+\x20.bubble-item-listening\x20{\x0a\x09\x09\x09\x09margin-top:\x2016px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening\x20{\x0a\x09\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09\x09width:\x2048px;\x0a\x09\x09\x09\x09height:\x2048px;\x0a\x09\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09\x09\x09border:\x201px\x20solid\x20#ccc;\x0a\x09\x09\x09\x09background-color:\x20#ffffff40;\x0a\x09\x09\x09\x09backdrop-filter:\x20blur(4px);\x0a\x09\x09\x09\x09box-shadow:\x20rgba(0,\x200,\x200,\x200.25)\x200px\x200.0625em\x200.0625em,\x20rgba(0,\x200,\x200,\x200.25)\x200px\x200.125em\x200.5em,\x20rgba(255,\x20255,\x20255,\x200.1)\x200px\x200px\x200px\x201px\x20inset;\x0a\x09\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening:hover\x20{\x0a\x09\x09\x09\x09filter:\x20brightness(0.9);\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening::before,\x0a\x09\x09\x09.bubble-item-listening::after\x20{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09inset:\x200;\x0a\x09\x09\x09\x09border-radius:\x20inherit;\x0a\x09\x09\x09\x09pointer-events:\x20none;\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening::before\x20{\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening::after\x20{\x0a\x09\x09\x09\x09display:\x20none;\x0a\x09\x09\x09\x09border:\x201px\x20solid\x20#FF00FFa3;\x0a\x09\x09\x09\x09box-shadow:\x202px\x202px\x205px\x20#ccc,\x20-2px\x20-2px\x205px\x20#ccc;\x0a\x09\x09\x09\x09animation:\x20notify-border-eff\x202s\x20infinite;\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening.new\x20{\x0a\x09\x09\x09\x09animation:\x20notify-eff\x202s\x20infinite;\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening.new::before\x20{\x0a\x09\x09\x09\x09animation:\x20notify-bell-eff\x202s\x20infinite;\x0a\x09\x09\x09}\x0a\x09\x09\x09.bubble-item-listening.new::after\x20{\x0a\x09\x09\x09\x09display:\x20block;\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20notify-border-eff\x20{\x0a\x09\x09\x09\x0970%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(1.6);\x0a\x09\x09\x09\x09\x09opacity:\x200.1;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09100%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(1.6);\x0a\x09\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20notify-eff\x20{\x0a\x09\x09\x09\x090%,\x2075%,\x20100%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(1);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x0910%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20scale(1.1);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20notify-bell-eff\x20{\x0a\x09\x09\x09\x095%,\x2015%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20rotate(25deg);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x0910%,\x2020%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20rotate(-25deg);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x0925%,\x20100%\x20{\x0a\x09\x09\x09\x09\x09transform:\x20rotate(0deg);\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09.overlay-listening,\x20\x0a\x09\x09\x09.countdown-overlay-listening{\x0a\x09\x09\x09\x09position:\x20fixed;\x0a\x09\x09\x09\x09inset:\x200;\x0a\x09\x09\x09\x09z-index:\x209999;\x0a\x09\x09\x09\x09cursor:\x20not-allowed;\x0a\x09\x09\x09}\x0a\x09\x09\x09.countdown-overlay-listening{\x0a\x09\x09\x09\x09z-index:\x20999999999;\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09flex-direction:\x20column;\x0a\x09\x09\x09\x09justify-content:\x20center;\x0a\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09\x09padding:\x2012px;\x0a\x0a\x09\x09\x09\x09background-color:\x20rgba(0,0,0,0.5);\x0a\x09\x09\x09\x09color:\x20white;\x0a\x09\x09\x09\x09font-size:\x2028px;\x0a\x09\x09\x09\x09font-weight:\x20bold;\x0a\x09\x09\x09}\x0a\x09\x09\x09.countdown-overlay-listening::before{\x0a\x09\x09\x09\x09content:\x20var(--data-prefix);\x0a\x09\x09\x09\x09margin-bottom:\x2016px;\x0a\x09\x09\x09\x09font-size:\x2022px;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09.switch-wrapper-listening{\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09\x09margin-bottom:\x208px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-wrapper-listening::before{\x0a\x09\x09\x09\x09content:\x20var(--data-name);\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-disabled{\x0a\x09\x09\x09\x09opacity:\x20.4;\x0a\x09\x09\x09\x09user-select:\x20none\x20!important;\x0a\x09\x09\x09\x09-ms-user-select:\x20none\x20!important;\x0a\x09\x09\x09\x09-moz-user-select:\x20none\x20!important;\x0a\x09\x09\x09\x09-webkit-user-select:\x20none\x20!important;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-wrapper-listening.unavailable{\x0a\x09\x09\x09\x09color:\x20#808080;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-wrapper-listening.unavailable\x20label{\x0a\x09\x09\x09\x09opacity:\x20.6;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-container-listening{\x0a\x09\x09\x09\x09flex-grow:\x201;\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09justify-content:\x20space-between;\x0a\x09\x09\x09\x09align-items:\x20center;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-info-listening{\x0a\x09\x09\x09\x09width:\x2018px;\x0a\x09\x09\x09\x09height:\x2018px;\x0a\x09\x09\x09\x09margin-left:\x204px;\x0a\x09\x09\x09\x09margin-right:\x208px;\x0a\x09\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09\x09\x09background-image:\x20url(\x27https://autoduolingo.click/assets/client/infomation-icon.ndx\x27);\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09\x09cursor:\x20pointer;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-info-listening:hover{\x0a\x09\x09\x09\x09filter:\x20brightness(0.8);\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09.switch-wrapper-listening\x20label{\x0a\x09\x09\x09\x09position:\x20relative;\x0a\x09\x09\x09\x09width:\x2046px;\x0a\x09\x09\x09\x09height:\x2024px;\x0a\x09\x09\x09\x09background-color:\x20#bbb;\x0a\x09\x09\x09\x09box-shadow:\x20rgb(195\x20109\x20221\x20/\x2062%)\x200px\x200px\x200px\x203px;\x0a\x09\x09\x09\x09border-radius:\x2020px;\x0a\x09\x09\x09\x09transition:\x20.2s;\x0a\x09\x09\x09}\x0a\x09\x09\x09.control-container-listening.event\x20.switch-wrapper-listening\x20label{\x0a\x09\x09\x09\x09box-shadow:\x20rgb(255\x2085\x2085\x20/\x2062%)\x200px\x200px\x200px\x203px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-wrapper-listening\x20label::after{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09left:\x202px;\x0a\x09\x09\x09\x09top:\x202px;\x0a\x09\x09\x09\x09width:\x2020px;\x0a\x09\x09\x09\x09height:\x2020px;\x0a\x09\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09\x09\x09background-color:\x20white;\x0a\x09\x09\x09\x09transition:\x20.2s;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-wrapper-listening\x20input:checked\x20+\x20label{\x0a\x09\x09\x09\x09background-color:\x20#1FC2FF;\x0a\x09\x09\x09}\x0a\x09\x09\x09.switch-wrapper-listening\x20input:checked\x20+\x20label::after\x20{\x0a\x09\x09\x09\x09left:\x2024px;\x0a\x09\x09\x09}\x0a\x09\x09\x09\x0a\x09\x09\x09.function-wrapper-listening{\x0a\x09\x09\x09\x09padding-bottom:\x202px;\x0a\x09\x09\x09\x09font-weight:\x20bold;\x0a\x09\x09\x09\x09color:\x20#ff4e00;\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-label{\x0a\x09\x09\x09\x09position:\x20fixed;\x0a\x09\x09\x09\x09z-index:\x2099999;\x0a\x09\x09\x09\x09bottom:\x206px;\x0a\x09\x09\x09\x09left:\x2050%;\x0a\x09\x09\x09\x09max-width:\x20calc(100%\x20-\x2016px);\x0a\x09\x09\x09\x09transform:\x20translateX(-50%);\x0a\x09\x09\x09\x09text-align:\x20center;\x0a\x09\x09\x09}\x0a\x09\x09\x09.autoduo-label\x20p\x20+\x20p{\x0a\x09\x09\x09\x09margin-top:\x202px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.local-label-listening{\x0a\x09\x09\x09\x09margin:\x20-16px\x20-4px\x208px\x20-4px;\x0a\x20\x20\x20\x09\x09\x09\x09padding:\x2012px\x2016px\x200\x204px;\x0a\x09\x09\x09\x09font-size:\x2012px;\x0a\x09\x09\x09\x09font-weight:\x20400;\x0a\x09\x09\x09\x09word-wrap:\x20break-word;\x0a\x09\x09\x09\x09overflow-wrap:\x20break-word;\x0a\x09\x09\x09\x09line-height:\x2016px;\x0a\x09\x09\x09\x09max-height:\x2046px;\x0a\x09\x09\x09\x09overflow:\x20hidden;\x0a\x09\x09\x09\x09color:\x20#ff65e1;\x0a\x09\x09\x09\x09border:\x201px\x20solid\x20#ff4e00;\x0a\x09\x09\x09\x09border-radius:\x208px;\x0a\x09\x09\x09\x09border-top:\x20none;\x0a\x09\x09\x09\x09border-top-left-radius:\x200;\x0a\x09\x09\x09\x09border-top-right-radius:\x200;\x0a\x09\x09\x09\x09animation:\x20local-label-eff\x200.5s;\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20local-label-eff\x20{\x0a\x09\x09\x09\x09from\x20{\x0a\x09\x09\x09\x09\x09transform:\x20translateY(-70%);\x0a\x09\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09to\x20{\x0a\x09\x09\x09\x09\x09transform:\x20translateY(0);\x0a\x09\x09\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09.label-listening{\x0a\x09\x09\x09\x09width:\x20max-content;\x0a\x09\x09\x09\x09max-width:\x20100%;\x0a\x09\x09\x09\x09line-height:\x2016px;\x0a\x09\x09\x09\x09margin:\x200\x20auto;\x0a\x09\x09\x09\x09padding:\x202px\x208px;\x0a\x09\x09\x09\x09font-weight:\x20bold;\x0a\x09\x09\x09\x09font-size:\x2015px;\x0a\x09\x09\x09\x09color:\x20#df0d0d;\x0a\x09\x09\x09\x09background-color:\x20rgba(255,\x20255,\x20255,\x20.5);\x0a\x09\x09\x09\x09border-radius:\x2040px;\x0a\x09\x09\x09\x09box-shadow:\x20rgba(60,\x2064,\x2067,\x200.3)\x200px\x201px\x202px\x200px,\x20rgba(60,\x2064,\x2067,\x200.15)\x200px\x202px\x206px\x202px;\x0a\x09\x09\x09}\x0a\x09\x09\x09.targetmode-label-listening::before{\x0a\x09\x09\x09\x09content:\x20var(--data-frefix);\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09.contact-wrapper-listening{\x0a\x09\x09\x09\x09display:\x20flex;\x0a\x09\x09\x09\x09justify-content:\x20center;\x0a\x09\x09\x09\x09flex-wrap:\x20wrap;\x0a\x09\x09\x09\x09margin:\x208px\x200\x20-4px\x200;\x0a\x09\x09\x09}\x0a\x09\x09\x09dth:\x2034px;\x0a\x09\x09\x09\x09height:\x2034px;\x0a\x09\x09\x09\x09margin:\x202px\x204px;\x0a\x09\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09\x09\x09background-image:\x20var(--data-img);\x0a\x09\x09\x09\x09color:\x20rgb(var(--autoduo-color));\x0a\x09\x09\x09\x09background-size:\x20cover;\x0a\x09\x09\x09\x09transition:\x20.12s;\x0a\x09\x09\x09}\x0a\x09\x09\x09.contact-item-listening:hover{\x0a\x09\x09\x09\x09box-shadow:\x20rgb(199\x20138\x20217\x20/\x2050%)\x200px\x200px\x200px\x203px;\x0a\x09\x09\x09\x09transform:\x20scale(1.11);\x0a\x09\x09\x09}\x0a\x09\x09\x09.contact-item-listening:hover\x20.popup\x20{\x0a\x09\x09\x09\x09display:\x20block;\x0a\x09\x09\x09}\x0a\x09\x09\x09.contact-item-listening\x20.popup\x20{\x0a\x09\x09\x09\x09display:\x20none;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09bottom:\x20100%;\x0a\x09\x09\x09\x09left:\x2050%;\x0a\x09\x09\x09\x09transform:\x20translateX(-50%);\x0a\x09\x09\x09\x09margin-bottom:\x2012px;\x0a\x09\x09\x09\x09padding:\x202px\x206px;\x0a\x09\x09\x09\x09width:\x20max-content;\x0a\x09\x09\x09\x09font-size:\x2012px;\x0a\x09\x09\x09\x09font-weight:\x20bold;\x0a\x09\x09\x09\x09border:\x201px\x20solid\x20#ccc;\x0a\x09\x09\x09\x09border-radius:\x206px;\x0a\x09\x09\x09\x09background-color:\x20rgb(var(--autoduo-bg));\x0a\x09\x09\x09\x09box-shadow:\x20rgba(60,\x2064,\x2067,\x200.3)\x200px\x201px\x202px\x200px,\x20rgba(60,\x2064,\x2067,\x200.15)\x200px\x202px\x206px\x202px;\x0a\x09\x09\x09\x09animation:\x20contact-popup-eff\x200.2s;\x0a\x09\x09\x09}\x0a\x09\x09\x09@keyframes\x20contact-popup-eff\x20{\x0a\x09\x09\x09\x09from\x20{\x0a\x09\x09\x09\x09\x09opacity:\x200;\x0a\x09\x09\x09\x09\x09bottom:\x2050%;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09to\x20{\x0a\x09\x09\x09\x09\x09opacity:\x201;\x0a\x09\x09\x09\x09\x09bottom:\x20100%;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09\x09.contact-item-listening\x20.popup::before{\x0a\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09top:\x20calc(100%\x20-\x202px);\x0a\x09\x09\x09\x09left:\x2050%;\x0a\x09\x09\x09\x09transform:\x20translateX(-50%);\x0a\x09\x09\x09\x09border:\x2010px\x20solid\x20transparent;\x0a\x09\x09\x09\x09border-top-color:\x20rgb(var(--autoduo-bg));\x0a\x0a\x09\x09\x09}\x0a\x09\x09\x09.control-container-listening.event\x20.contact-item-listening:hover{\x0a\x09\x09\x09\x09box-shadow:\x20rgb(255\x20103\x20103\x20/\x2050%)\x200px\x200px\x200px\x203px;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09@media\x20(max-height:\x20550px)\x20{\x0a\x09\x09\x09\x09.control-container-listening\x20{\x0a\x09\x09\x09\x09\x09bottom:\x204px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x20\x20\x20\x20\x20\x20\x20\x20', 'textarea[data-test=\x22challenge-translate-input\x22]:not([disabled])', 'getDataStateNode', 'createElement', 'push', '[data-test=\x22player-next\x22]', 'body', 'text2', 'disabled', 'nativeTextareaValueSetter', 'challenge-partialListen', '#root', 'startLegend', 'createBubbles', 'challenge-characterIntro', 'sleep', 'AUTO\x20COLLECT\x202x\x20XP:\x0a-\x20This\x20is\x20a\x20supplementary\x20feature\x20for\x20\x22Auto\x20Farm\x20XP\x22,\x20helping\x20to\x20maintain\x20the\x202x\x20XP\x20status\x20during\x20farming.\x20When\x20enabled,\x20it\x20will\x20check\x20and\x20automatically\x20do\x20new\x20lessons\x20to\x20get\x202x\x20XP\x20rewards\x20if\x20it\x20detects\x20the\x20current\x20state\x20doesn\x27t\x20have\x202x.\x20This\x20will\x20help\x20you\x20farm\x20more\x20XP\x20points\x20than\x20usual.\x20\x0a\x0a-\x20NOTE:\x20This\x20feature\x20will\x20do\x20new\x20lessons\x20to\x20maintain\x20the\x202x\x20status,\x20so\x20consider\x20before\x20enabling\x20it\x20if\x20you\x20have\x20constraints\x20with\x20these\x20lessons.', 'setGeneral', 'createFunctions', 'challenge-extendedListenMatch', 'Bài\x20tập\x20này\x20hiện\x20chưa\x20được\x20hỗ\x20trợ,\x20vui\x20lòng\x20báo\x20lỗi\x20cho\x20Admin\x20hoặc\x20khắc\x20phục\x20tạm\x20thời\x20bằng\x20cách\x20làm\x20thủ\x20công\x20bài\x20tập\x20này,\x20sau\x20đó\x20bật\x20lại\x20auto!\x20[%v]', 'isAnimationOff', 'appLanguage', 'EXP:\x20', 'text49', 'text84', 'autoduo-animate', 'isTargetMode', 'isNaN', 'auto-container-listening', 'label-listening', 'isAuto', 'Có\x20lỗi\x20xảy\x20ra\x20khi\x20xác\x20thực,\x20vui\x20lòng\x20thử\x20lại\x20sau!', 'text37', 'keyContainer', 'handleLegend', 'text68', '\x20XP', 'dispatchEvent', 'div', 'renderTime', 'getHours', '[class=\x22zlazS\x22]:first-child', 'autoduoShowNewFeature', 'HƯỚNG\x20DẪN\x20LẤY\x20KEY', 'radioSelect', 'No\x20answer\x20found!', 'text36', 'text83', 'isLegendMode', 'text75', 'autoduoCreateSwitch', 'Ẩn\x20hoạt\x20ảnh', 'freeKeyTime', 'parts', 'challenge-definition', '._2SxJv._30qMV._2N_A5._36Vd3._16r-S', '[data-test=\x22practice-hub-ad-no-thanks-button\x22]', '4221820cBZeHU', '[Auto\x20Pass\x20Mode]\x20Bạn\x20đã\x20hoàn\x20thành\x20tất\x20cả\x20các\x20bài\x20tập\x20trong\x20khóa\x20học\x20này!!', 'appendChild', 'buyKeyBtn', '-\x20LESSON\x20PASS\x20MODE:\x0aWhen\x20activated,\x20the\x20system\x20won\x27t\x20repeat\x20exercises\x20as\x20in\x20the\x20regular\x20mode\x20but\x20will\x20engage\x20in\x20exercises\x20actively\x20selected\x20by\x20the\x20user.\x20This\x20mode\x20is\x20used\x20for\x20legendary\x20exercises,\x20story\x20exercises,\x20and\x20most\x20other\x20similar\x20exercises.\x20You\x20need\x20to\x20enter\x20the\x20lesson\x20you\x20want\x20to\x20pass\x20in,\x20and\x20then\x20the\x20system\x20will\x20automatically\x20complete\x20that\x20lesson\x20for\x20you!\x0aWhen\x20this\x20mode\x20is\x20activated,\x20the\x20basic\x20auto\x20button\x20will\x20be\x20temporarily\x20disabled.', 'rmNotifyContent', 'text60', 'contactWrapper', 'replaceAll', 'handleGotX2', 'type', '[data-test=\x22stories-choice\x22]', 'SET\x20XP\x20FARM\x20LOCATION\x0a-\x20By\x20default,\x20the\x20system\x20can\x20only\x20Farm\x20XP\x20in\x20practice\x20exercises\x20or\x20listening\x20practices.\x20However,\x20with\x20this\x20feature,\x20you\x20can\x20Farm\x20XP\x20in\x20any\x20lesson\x20you\x20want,\x20even\x20in\x20story\x20lessons!\x0a-\x20Usage:\x20Activate\x20the\x20feature\x20and\x20enter\x20the\x20URL\x20of\x20the\x20lesson\x20you\x20want,\x20then\x20enable\x20the\x20XP\x20Farm\x20mode\x20to\x20start\x20farming.\x0a-\x20NOTE:\x20The\x20URL\x20to\x20the\x20lesson\x20must\x20be\x20accurate\x20and\x20the\x20lesson\x20must\x20be\x20repeatable.\x20Entering\x20an\x20inaccurate\x20URL\x20may\x20lead\x20to\x20errors\x20or\x20even\x20pose\x20risks\x20to\x20your\x20account!', 'dictionary', 'btn-red', 'goPracticeHubChallenge', 'safeModeWrapper', 'getItem', 'NEITHER', 'By\x20setting\x20an\x20experience\x20point\x20target,\x20the\x20system\x20will\x20automatically\x20stop\x20auto\x20mode\x20when\x20the\x20total\x20experience\x20points\x20obtained\x20equal\x20or\x20exceed\x20the\x20specified\x20target.\x0a#\x20Note:\x20The\x20target\x20XP\x20must\x20be\x20greater\x20than\x20the\x20current\x20obtained\x20XP!\x0a\x0aEnter\x20the\x20target\x20experience\x20points\x20you\x20wish\x20for:', '-\x20CHẾ\x20ĐỘ\x20TĂNG\x20TỐC:\x0a[Hãy\x20tắt\x20chế\x20độ\x20này\x20nếu\x20bạn\x20gặp\x20lỗi\x20với\x20nó]\x0aKhi\x20bật,\x20hệ\x20thống\x20sẽ\x20tăng\x20tốc\x20độ\x20auto\x20một\x20cách\x20vượt\x20trội.\x20Hiệu\x20năng\x20cũng\x20sẽ\x20sử\x20dụng\x20nhiều\x20hơn\x20và\x20không\x20khuyến\x20khích\x20sử\x20dụng\x20trên\x20các\x20thiết\x20bị\x20có\x20hiệu\x20năng\x20thấp.\x20\x0aTắt\x20và\x20làm\x20mới\x20trang\x20nếu\x20bạn\x20gặp\x20sự\x20cố\x20khi\x20kích\x20hoạt\x20chế\x20độ\x20này.\x0a\x0a\x20-\x20Lưu\x20ý:\x20Đây\x20là\x20tính\x20năng\x20thử\x20nghiệm\x20và\x20cần\x20có\x20Key\x20Vip\x20để\x20sử\x20dụng.\x20Chỉ\x20bật\x20khi\x20bạn\x20thực\x20sự\x20cần\x20tốc\x20độ\x20và\x20hiểu\x20rõ\x20về\x20nó!!!', '[WARNING]\x20Tính\x20năng\x20tự\x20động\x20lấy\x20x2\x20KN\x20đang\x20làm\x20việc,\x20nếu\x20tắt\x20auto\x20bây\x20giờ\x20đồng\x20nghĩa\x20với\x20việc\x20bạn\x20sẽ\x20hủy\x20toàn\x20bộ\x20quá\x20trình\x20này!\x20Bạn\x20có\x20chắc\x20chắn\x20chứ?', 'turbo', 'English', 'from', 'getLinkBtn', 'By\x20setting\x20the\x20number\x20of\x20lessons\x20you\x20wish\x20to\x20pass,\x20the\x20system\x20will\x20automatically\x20pass\x20the\x20corresponding\x20number\x20of\x20new\x20lessons\x20as\x20per\x20the\x20value\x20you\x27ve\x20set!\x20(Enter\x200\x20for\x20unlimited\x20auto)\x0a\x0aEnter\x20the\x20number\x20of\x20lessons\x20you\x20wish\x20to\x20pass\x20(1\x20-\x201000):', 'isTurboMode', '</p>\x0a\x09\x09\x09\x09\x09\x09\x09<ul\x20class=\x22autoduo-language-selection\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09', 'setItem', '.wqSzE', 'ERROR:\x20', 'doRadioChallenge', 'aria-disabled', 'challenge-selectPronunciation', 'show-hide-listening', 'An\x20error\x20occurred\x20during\x20authentication,\x20please\x20try\x20again\x20later!', 'from:', 'Lesson\x20Pass\x20Mode', '\x20Nếu\x20bạn\x20đang\x20bật\x20hiển\x20thị\x20phiên\x20âm,\x20vui\x20lòng\x20tắt\x20nó\x20trước\x20sau\x20đó\x20reload\x20trang\x20rồi\x20bật\x20lại\x20auto!', '[data-test*=\x22challenge-extendedListenMatch\x22]', 'loading-btn-listening', 'getMinutes', 'createKeyComponent', 'getXpState', 'autoDuolingoStorage', 'label', 'localFarmingLocationLabel', 'point-to-phrase', 'text79', 'radioListenRecognize', '[data-test=\x22notification-button\x22]', 'wasGetExp', 'then', 'darkModeWrapper', 'listeningPacticePath', 'user', 'length', 'text41', 'challenge-syllableListenTap', 'challenge-tapCompleteTable', '\x0a(Auto\x20Pass\x20Mode\x20-\x20%v/%v\x20new\x20lessons!)', '\x27)\x22></i>', '\x20btn-white\x20getlink-btn-listening', '\x20guide-btn-listening', 'key', 'text17', 'GUIDE', 'Bạn\x20có\x20muốn\x20auto\x20kết\x20hợp\x20vượt\x20các\x20bài\x20tập\x20huyền\x20thoại\x20không?\x0a\x0aLƯU\x20Ý:\x0a+\x20Auto\x20vượt\x20huyền\x20thoại\x20chỉ\x20có\x20tác\x20dụng\x20với\x20các\x20tài\x20khoản\x20có\x20trái\x20tim\x20vô\x20hạn!\x20KHÔNG\x20NÊN\x20bật\x20tùy\x20chọn\x20này\x20với\x20các\x20tài\x20khoản\x20không\x20có\x20trái\x20tim\x20vô\x20hạn\x20vì\x20nó\x20có\x20thể\x20dẫn\x20đến\x20việc\x20bị\x20mắc\x20kẹt\x20khi\x20auto.\x0a+\x20Hệ\x20thống\x20sẽ\x20chỉ\x20vượt\x20các\x20bài\x20huyền\x20thoại\x20trước\x20đó\x20có\x20phạm\x20vi\x20gần\x20với\x20bài\x20học\x20hiện\x20tại,\x20nếu\x20phạm\x20vi\x20xa\x20hơn\x20sẽ\x20tự\x20động\x20bỏ\x20qua!', 'stopLegend', 'nextTimeTemp', 'console', 'legendModeWrapper', 'test', 'View\x20information', 'innerText', 'dataset', 'challenge-dialogue', '[aria-hidden=\x22true\x22]', 'disconnect', 'remove', 'LEFT', 'Đặt\x20vị\x20trí\x20Farm\x20KN', 'text42', 'handleKeyTimeOut', 'notify/?c7f54a73e6340a16176=91bf0d18b83', 'damagePosition', 'text61', 'text65', 'confirm', '/practice-hub/listening-practice', 'autoGetX2FailedLabel', 'textContent', 'freeKey', 'GET\x20KEY\x20LINK', 'Farming\x20at\x20the\x20location', 'handleStoryMatch', 'expElm', 'farmingLocationWrapper', 'true', 'handleFreeKey', 'duo.lastLogin', 'Xem\x20thông\x20tin', 'randomSafeDelayTime', 'img[src=\x22https://d35aaqx5ub95lt.cloudfront.net/images/practiceHub/2ebe830fd55a7f2754d371bcd79faf32.svg\x22]', 'text', 'handleFarmXPOn', 'handleShowHideUI', 'handleChallengeTextInput', 'autoduoEnableFeatures', 'RIGHT', 'statistic-listening', 'CHẾ\x20ĐỘ\x20TỐI\x0a-\x20Bật\x20/\x20tắt\x20chế\x20độ\x20tối\x20của\x20trang\x20web\x20nhanh\x20hơn!', 'set', 'autoGetX2Label', 'call', 'add', 'phraseOrder', 'addEventListener', 'challenge-assist', 'challenge-sameDifferent', 'isGetX2Failed', '[WARNING]\x20The\x20auto\x20collect\x202x\x20XP\x20feature\x20is\x20working.\x20Turning\x20off\x20auto\x20now\x20will\x20cancel\x20this\x20process.\x20Are\x20you\x20sure?', 'select-phrases', 'goPracticeChallenge', 'text34', 'isArray', 'Need\x20to\x20refresh\x20the\x20page\x20to\x20update\x20the\x20language,\x20refresh\x20now?', 'text77', 'keyForm', 'light', 'find', 'bubble-item-listening\x20notify-bubble-listening', 'handleRadioBinaryChallenge', 'pathname', 'text70', 'isShowUI', 'DỪNG\x20FARM\x20KN', 'handlePracticeChallenge', 'challenge-form', 'text59', 'notifyVersion', '[data-test=\x22challenge-text-input\x22][value=\x22\x22]', 'dateElm', 'text18', '/lesson', 'onclick', 'autoduoLabelWrapper', 'text50', '/lesson/unit/1/level/1', 'HƯỚNG\x20DẪN', 'Đường\x20dẫn\x20đã\x20nhập\x20không\x20hợp\x20lệ,\x20vui\x20lòng\x20thử\x20lại!', 'farmingLocationErrorCount', 'email', 'text76', 'className', '.autoduo-language-selection', 'text11', 'match', '<b\x20class=\x27vip-type-listening\x27>VIP\x20KEY</b>', 'handleTargetModeOff', 'prevFarmXPLocation', '[data-test*=\x22skill-path-state-passed\x22]\x20+\x20button', 'handleSafeModeOff', 'startFarmXP', 'preventDefault', '-\x20SAFE\x20MODE:\x0aWhen\x20this\x20mode\x20is\x20enabled,\x20the\x20system\x20will\x20simulate\x20user\x20actions\x20when\x20using\x20auto.\x20The\x20speed\x20will\x20be\x20more\x20relaxed,\x20in\x20exchange\x20for\x20the\x20completion\x20time\x20of\x20lessons\x20and\x20the\x20amount\x20of\x20experience\x20will\x20be\x20the\x20most\x20natural,\x20minimizing\x20the\x20risks\x20of\x20REPORT\x20and\x20account\x20BAN!', 'controlContainer', 'text8', 'Close', 'Loại:\x20', 'https://autoduolingo.click/assets/client/america-flag.ndx', 'statistic', 'span[contenteditable=\x22true\x22]', 'challenge-extendedMatch', 'keyInput', 'pairs', 'doChallenge', 'continueStory', 'reload', 'Không\x20tìm\x20thấy\x20dữ\x20liệu\x20bài\x20học.', 'setSafeMode', 'challenge-partialReverseTranslate', 'There\x20was\x20an\x20error\x20while\x20getting\x20the\x20data!', 'finally', 'countdown-overlay-listening', '--data-name:\x20\x22', 'now', '\x20/\x20', '.autoduo-language-selected', 'control-container-listening', 'isFarmingLocation', 'nextTime', 'Cần\x20làm\x20mới\x20trang\x20để\x20cập\x20nhật\x20ngôn\x20ngữ,\x20làm\x20mới\x20ngay?', '[Auto\x20Pass\x20Mode]\x20You\x20have\x20completed\x20all\x20exercises\x20in\x20this\x20course!!', 'autoduoError', 'text47', 'keyTimeOut', 'text52', 'passModeLabel', '[Target\x20Mode]\x20Đã\x20đạt\x20mức\x20kinh\x20nghiệm\x20mục\x20tiêu\x20(%v\x20/\x20%v\x20KN).\x0aAuto\x20đã\x20tự\x20động\x20được\x20tắt!!', 'Other\x20settings', 'handleChallengeExtendedListenMatch', 'FEEDBACK', 'MUA\x20KEY\x20VIP\x20DÀI\x20HẠN', 'homePath', 'correctIndices', 'showKeyBtnLoading', 'handleFarmXPOff', 'stopFarmXP', 'handleChallengeTapComplete', '[src=\x22https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/7aa61c3f60bd961a60a46fb36e76c72f.svg\x22]', 'text28', 'setSolving', 'cloneNode', 'fetchNotify', 'setup', 'handleFarmingLocationChallenge', 'checked', 'show', '579309UOSsSX', 'TỰ\x20ĐỘNG\x20LẤY\x20X2\x20KN:\x0a-\x20Đây\x20là\x20tính\x20năng\x20bổ\x20trợ\x20cho\x20\x22Auto\x20Farm\x20KN\x22,\x20giúp\x20duy\x20trì\x20trạng\x20thái\x20x2\x20KN\x20trong\x20quá\x20trình\x20Farm.\x20Khi\x20được\x20bật,\x20nó\x20sẽ\x20kiểm\x20tra\x20và\x20tự\x20động\x20làm\x20các\x20bài\x20học\x20mới\x20để\x20lấy\x20phần\x20thưởng\x20x2\x20KN\x20nếu\x20phát\x20hiện\x20trạng\x20thái\x20hiện\x20tại\x20không\x20có\x20x2.\x20Điều\x20này\x20sẽ\x20giúp\x20bạn\x20Farm\x20được\x20nhiều\x20điểm\x20KN\x20hơn\x20so\x20với\x20thông\x20thường.\x20\x0a\x0a-\x20LƯU\x20Ý:\x20\x20Tính\x20năng\x20này\x20sẽ\x20làm\x20các\x20bài\x20học\x20mới\x20để\x20duy\x20trì\x20trạng\x20thái\x20x2,\x20vì\x20vậy\x20hãy\x20cân\x20nhắc\x20trước\x20khi\x20bật\x20nó\x20nếu\x20bạn\x20có\x20ràng\x20buộc\x20với\x20những\x20bài\x20học\x20này!', 'showGuide', '[data-test=\x22stories-player-done\x22]', '369688vpezBw', 'Undefined\x20challenge!!', 'correctAnswerIndex', 'Auto\x20đã\x20tự\x20động\x20dừng\x20lại\x20do\x20không\x20thể\x20Farm\x20KN\x20tại\x20vị\x20trí\x20đã\x20chỉ\x20định!', 'reduce', 'handlePassModeOn', '+++++\x20GUIDE\x20+++++\x0a\x0a-\x20An\x20activation\x20key\x20is\x20required\x20for\x20auto\x20functionality!\x20This\x20key\x20is\x20the\x20sole\x20method\x20to\x20maintain\x20and\x20develop\x20AutoDuolingo,\x20so\x20I\x20hope\x20for\x20your\x20understanding\x20and\x20support.\x20Thank\x20you\x20very\x20much!\x0a___________________________\x0a-\x20Currently,\x20there\x20are\x20two\x20methods\x20to\x20obtain\x20the\x20key\x20as\x20follows:\x0a+\x20Obtain\x20the\x2024-hour\x20key\x20by\x20surpassing\x20a\x20few\x20links\x20containing\x20advertisements\x20(Vietnamese\x20support\x20only).\x0a+\x20Buy\x20a\x20long-term\x20and\x20more\x20stable\x20VIP\x20Key.\x20(To\x20buy\x20a\x20Key,\x20please\x20directly\x20contact\x20the\x20Admin\x20through\x20the\x20contact\x20methods\x20at\x20the\x20end\x20of\x20the\x20tool).\x0a___________________________\x0a-\x20Join\x20the\x20AutoDuo\x20Zalo\x20or\x20AutoDuo\x20Telegram\x20community\x20for\x20support\x20and\x20updates\x20on\x20the\x20latest\x20information!\x0a\x0aAuto-Duolingo\x20By\x20DevX!', 'autoduo-label', 'GUIDE\x20TO\x20GET\x20KEY', 'autoduoLessonError', 'passValue', 'fetchGeneral', '1jnwToG', 'nextQuestion', 'challenge-translate', '<i></i>', 'handleChallengeListenMatch', '._2neC7', 'No\x20suitable\x20answer\x20found!', 'startTime', 'settingBtn', 'findReactProps', 'challenge-completeReverseTranslation', '\x0a\x09\x09\x09\x09\x09<h3>', 'floor', 'handleGetX2', 'keyTypeElm', 'handleChallengeTranslate', 'isFetching', 'dropKeyBtn', 'setting-function-listening', 'Tiếng\x20Việt', '\x20btn-green\x20key-btn-listening', 'animationStyle', 'data', '2021-01-10\x2023:59:59', 'fetchAuthen', 'getData', 'text57', 'skipLegendarySuggestionBtn', 'Không\x20tìm\x20thấy\x20từ\x20phù\x20hợp!', 'Auto-Duolingo\x20đang\x20tự\x20động\x20lấy\x20x2\x20KN...', '-\x20HIDE\x20ANIMATION\x20MODE:\x0aWhen\x20this\x20mode\x20is\x20enabled,\x20images\x20and\x20animations\x20on\x20the\x20website\x20will\x20be\x20hidden\x20to\x20optimize\x20performance.\x0a\x0aSuggestion:\x20To\x20achieve\x20the\x20best\x20performance,\x20you\x20should\x20find\x20and\x20disable\x20items\x20related\x20to\x20effects\x20in\x20Duolingo\x27s\x20settings!', 'button', 'functionWrapper', '._2VEsk', 'classList', 'practiceHubPath', 'safeDelayTime', 'goFarmingLocationChallenge', 'Are\x20you\x20sure\x20you\x20want\x20to\x20cancel\x20the\x20current\x20target?', 'lessGenealogy', 'autoGetX2Wrapper', 'The\x20entered\x20URL\x20is\x20invalid,\x20please\x20try\x20again!', 'input', 'https://api.autoduolingo.click/super/data/', 'handleStoryMultipleChoice', 'text69', 'Dark\x20Mode', 'hide', 'observe', 'handleCountDown', 'BOTH', 'code', 'Không\x20tìm\x20thấy\x20lựa\x20chọn\x20phù\x20hợp.', 'challenge-typeClozeTable', 'Type:\x20', 'correctSolutions', 'text51', 'P3baP', 'prompt', 'You\x20can\x27t\x20access\x20this\x20feature\x20while\x20\x22%v\x22\x20is\x20enabled.To\x20use\x20this,\x20please\x20turn\x20off\x20the\x20\x22%v\x22\x20feature\x20first!', 'isPassLegend', 'expiredAt', '\x0a(Auto\x20Pass\x20Mode\x20-\x20%v/%v\x20bài\x20học\x20mới!)', '?0a27c1ee63dd220647e8410a002=1713324949121', '\x20<span>(GMT+7)</span>', 'goLegendChallenge', 'https://autoduolingo.click/assets/client/vietnam-flag.ndx', 'DevX\x20Said:\x20Key\x20không\x20đúng\x20hoặc\x20đã\x20hết\x20hạn,\x20vui\x20lòng\x20thử\x20lại!', 'handleUpdateSpeed', 'story', 'isEnterKey', 'post', '[aria-valuenow^=\x221\x22]', 'notifyBubble', 'random', '[data-test*=\x22challenge\x20challenge\x22]', 'By\x20entering\x20the\x20URL\x20of\x20the\x20lesson\x20you\x20want,\x20the\x20system\x20will\x20help\x20you\x20Farm\x20XP\x20in\x20that\x20lesson!\x20Please\x20note\x20that\x20the\x20URL\x20to\x20the\x20lesson\x20must\x20be\x20accurate\x20to\x20avoid\x20errors\x20or\x20potential\x20risks\x20to\x20your\x20account!\x0a\x0aEnter\x20the\x20URL\x20of\x20the\x20lesson\x20you\x20want:\x0a(Example:\x20https://www.duolingo.com/practice)', 'turboModeWrapper', 'handleRadioListenRecognizeChallenge', 'isSolving', '[data-test*=\x22skill-path-level\x22]\x20img:is(', '[data-test=\x22word-bank\x22]\x20[data-test=\x22challenge-tap-token-text\x22]', '[data-test=\x22challenge-tap-token-text\x22]', 'text54', 'getFullYear', 'startPassMode', 'handleChallengePartialReverseTranslate', 'parse', 'button[data-test*=\x22challenge-tap-token\x22]', '54aaGduy', 'Bạn\x20có\x20chắc\x20chắn\x20muốn\x20dừng\x20auto\x20lại\x20không?', 'Auto\x20sẽ\x20tiếp\x20tục\x20sau:', 'findIndex', 'Invalid\x20value,\x20please\x20try\x20again!', '[class=\x22_1KW2f\x22]', 'switch-wrapper-listening', 'style', 'farming-location', 'farmingLocationUrl', '<b\x20class=\x27vip-expired-listening\x20event\x27>', 'rmNotifyVersion', 'decoder', 'replaceChild', 'handleRadioChallenge', 'handleFarmingLocationOff', 'event', 'challenge-listenTap', 'Chế\x20độ\x20vượt', 'handleStoryPointToPhrase', 'showHideBtn', 'handleSafeModeOn', 'stopPassMode', 'Không\x20tìm\x20thấy\x20kết\x20quả\x20tương\x20ứng!', 'contact-wrapper-listening', 'removeEventListener', 'querySelectorAll', 'text53', 'alert', 'Safe\x20Mode', 'The\x20automation\x20has\x20stopped\x20because\x20it\x20couldn\x27t\x20Farm\x20XP\x20at\x20the\x20designated\x20location!', 'challenge-writeComprehension', 'Hide\x20Animation', 'createSignature', 'local-label-listening', 'challenge-typeCompleteTable', '<b\x20class=\x27vip-expired-listening\x27>', 'isNewNotify', 'key-expired-listening', 'challenge-listenMatch', 'dark', 'append', 'new', 'label\x20span:last-child', '1122247RbSCzs', 'button[data-test=\x22notification-drawer-no-thanks-button\x22]', 'getAttribute', 'settingOverlay', 'function-wrapper-listening', 'handleChallengeChoice', 'handleTurboModeOff', '-\x20CHẾ\x20ĐỘ\x20VƯỢT\x20BÀI\x20HỌC:\x0aKhi\x20được\x20bật,\x20hệ\x20thống\x20không\x20làm\x20lặp\x20lại\x20các\x20bài\x20luyện\x20tập\x20như\x20chế\x20độ\x20thông\x20thường\x20mà\x20sẽ\x20làm\x20các\x20bài\x20mà\x20người\x20dùng\x20chủ\x20động\x20lựa\x20chọn.\x20Chế\x20độ\x20này\x20được\x20sử\x20dụng\x20để\x20làm\x20các\x20bài\x20tập\x20huyền\x20thoại,\x20bài\x20tập\x20truyện\x20và\x20hầu\x20hết\x20các\x20bài\x20tập\x20tương\x20tự\x20khác.\x20Bạn\x20cần\x20vào\x20bài\x20học\x20muốn\x20vượt\x20trước,\x20sau\x20đó\x20hệ\x20thống\x20sẽ\x20tự\x20động\x20vượt\x20bài\x20đó\x20cho\x20bạn!\x0aNút\x20auto\x20cơ\x20bản\x20sẽ\x20tạm\x20thời\x20bị\x20tắt\x20khi\x20chế\x20độ\x20này\x20bật!', 'Có\x20lỗi\x20xảy\x20ra\x20trong\x20quá\x20trình\x20đọc\x20truyện!', '<a\x20class=\x22contact-item-listening\x22\x20href=\x22https://t.me/imdevx\x22\x20target=\x22_blank\x22\x20style=\x22--data-img:\x20url(\x27https://autoduolingo.click/assets/client/tele-icon.ndx\x27)\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<p\x20class=\x22popup\x22>Chat\x20with\x20DevX</p>\x0a\x09\x09\x09\x09\x09\x09\x09</a>\x0a\x09\x09\x09\x09\x09\x09\x09<a\x20class=\x22contact-item-listening\x22\x20href=\x22https://t.me/autoduofamily\x22\x20target=\x22_blank\x22\x20style=\x22--data-img:\x20url(\x27https://autoduolingo.click/assets/client/tele-gr-icon.ndx\x27)\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<p\x20class=\x22popup\x22>Telegram\x20Community</p>\x0a\x09\x09\x09\x09\x09\x09\x09</a>\x0a\x09\x09\x09\x09\x09\x09\x09<a\x20class=\x22contact-item-listening\x22\x20href=\x22https://zalo.me/g/lmhfps187\x22\x20target=\x22_blank\x22\x20style=\x22--data-img:\x20url(\x27https://autoduolingo.click/assets/client/zalo-icon.ndx\x27)\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<p\x20class=\x22popup\x22>Zalo\x20Community</p>\x0a\x09\x09\x09\x09\x09\x09\x09</a>\x0a\x09\x09\x09\x09\x09\x09\x09<a\x20class=\x22contact-item-listening\x22\x20href=\x22https://www.youtube.com/@autoduofamily\x22\x20target=\x22_blank\x22\x20style=\x22--data-img:\x20url(\x27https://autoduolingo.click/assets/client/youtube-icon.ndx\x27)\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<p\x20class=\x22popup\x22>Youtube\x20Channel</p>\x0a\x09\x09\x09\x09\x09\x09\x09</a>\x0a\x09\x09\x09\x09\x09\x09\x09<a\x20class=\x22contact-item-listening\x22\x20href=\x22https://greasyfork.org/en/scripts/487867-auto-duolingo\x22\x20target=\x22_blank\x22\x20style=\x22--data-img:\x20url(\x27https://autoduolingo.click/assets/client/greasyfork-icon.ndx\x27)\x22>\x0a\x09\x09\x09\x09\x09\x09\x09\x09<p\x20class=\x22popup\x22>Greasy\x20Fork</p>\x0a\x09\x09\x09\x09\x09\x09\x09</a>', 'handleChallengeExtendedMatch', 'https://t.me/duolingosuperfree', 'createContacts', 'XP\x20Target:\x20', 'Xảy\x20ra\x20lỗi\x20trong\x20quá\x20trình\x20tải\x20dữ\x20liệu\x20thử\x20thách!', 'handleRadioChoiceChallenge', 'adLessonLoadingObserver', 'isDisabled', ')</label>', 'href', 'map', 'text31', 'Auto\x20Farm\x20XP', 'storyWrapper', 'guideGetLinkBtn', '[Auto\x20Pass\x20Mode]\x20%v\x20new\x20lessons\x20have\x20been\x20completed.\x0aAuto\x20has\x20automatically\x20stopped!', 'text25', 'challenge-listenComprehension', 'Enter\x20Key\x20Here...', 'documentElement', 'signature-listening', 'false', 'shift', 'Chế\x20độ\x20KN\x20mục\x20tiêu', 'key-type-listening', 'Tự\x20động\x20vượt\x20bài\x20tập\x20mới:\x20%v\x20/\x20%v\x20bài\x20học!', '[data-test=\x22session-complete-slide\x22]', 'getXpStory', 'nativeInputValueSetter', 'stringify', 'reactProps', 'handleAutoFarmChallengeGeneral', 'getDate', 'safeDelayTimeTemp', 'challenge-listenComplete', '[data-test*=\x22challenge\x20\x22]', '\x0a\x09\x09\x09\x09button.setting-btn-listening::after,\x0a\x09\x09\x09\x09.auto-x2-wrapper\x20label::before{\x0a\x09\x09\x09\x09\x09content:\x20\x27\x27;\x0a\x09\x09\x09\x09\x09position:\x20absolute;\x0a\x09\x09\x09\x09\x09top:\x206px;\x0a\x09\x09\x09\x09\x09right:\x2010px;\x0a\x09\x09\x09\x09\x09width:\x2010px;\x0a\x09\x09\x09\x09\x09height:\x2010px;\x0a\x09\x09\x09\x09\x09border-radius:\x2050%;\x0a\x09\x09\x09\x09\x09background-color:\x20red;\x0a\x0a\x09\x09\x09\x09\x09--scale-min:\x200.7;\x0a\x09\x09\x09\x09\x09--scale-max:\x201.05;\x0a\x09\x09\x09\x09\x09animation:\x20autoduo-scale-eff\x200.8s\x20infinite;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09.auto-x2-wrapper\x20label::before\x20{\x0a\x09\x09\x09\x09\x09right:\x20calc(100%\x20+\x206px);\x0a\x09\x09\x09\x09\x09top:\x202px;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09', '[data-test=\x22stories-player-continue\x22]', 'text72', '\x20btn-purple\x20key-vip-btn-listening', 'text29', '</li>', 'text74', 'exp', 'goChallengeTime', 'challenge-tapClozeTable', 'Bằng\x20việc\x20nhập\x20vào\x20đường\x20dẫn\x20tới\x20bài\x20học\x20bạn\x20muốn,\x20hệ\x20thống\x20sẽ\x20giúp\x20bạn\x20có\x20thể\x20Farm\x20XP\x20tại\x20bài\x20học\x20đó!\x20Lưu\x20ý,\x20đường\x20dẫn\x20tới\x20bài\x20học\x20phải\x20thật\x20chính\x20xác\x20nếu\x20không\x20có\x20thể\x20gây\x20ra\x20lỗi\x20hay\x20thậm\x20chí\x20gây\x20rủi\x20ro\x20cho\x20tài\x20khoản\x20của\x20bạn!\x0a\x0aNhập\x20vào\x20đường\x20dẫn\x20tới\x20bài\x20học\x20bạn\x20muốn:\x0a(VD:\x20https://www.duolingo.com/practice)', 'closeSettingBtn', 'targetmode-label-listening\x20label-listening', 'Chế\x20độ\x20an\x20toàn', 'authenData', 'setAuthen', 'featureVersion', 'total-exp-listening', 'click', 'Lỗi\x20dữ\x20liệu\x20bất\x20hợp\x20pháp!', 'getDataStory', 'Lỗi\x20tìm\x20kiếm\x20react\x20props', 'guideBtn', '<span\x20class=\x22loading-btn-dot\x22></span>\x0a\x09\x09\x09\x09\x09\x20<span\x20class=\x22loading-btn-dot\x22></span>\x0a\x09\x09\x09\x09\x09\x20<span\x20class=\x22loading-btn-dot\x22></span>', 'button[data-test*=\x22challenge-\x22]', 'challenge-typeCloze', 'handleChallengeCompleteReverseTranslation', 'After\x20enabling,\x20the\x20auto\x20speed\x20will\x20be\x20faster;\x20however,\x20it\x20will\x20consume\x20more\x20device\x20performance\x20(not\x20recommended\x20for\x20low-performance\x20devices).\x20Are\x20you\x20sure\x20you\x20want\x20to\x20activate\x20this\x20mode?', 'autoduoFeatureDisabled', '2.0.7', 'querySelector', 'text45', '-\x20CHẾ\x20ĐỘ\x20TỰ\x20ĐỘNG\x20VƯỢT\x20BÀI\x20HỌC\x20MỚI:\x0aBằng\x20việc\x20đặt\x20số\x20bài\x20học\x20mà\x20bạn\x20muốn\x20vượt,\x20hệ\x20thống\x20sẽ\x20tự\x20động\x20vượt\x20số\x20bài\x20học\x20mới\x20tương\x20ứng\x20với\x20giá\x20trị\x20mà\x20bạn\x20đã\x20đặt!\x0aNút\x20auto\x20cơ\x20bản\x20sẽ\x20tạm\x20thời\x20bị\x20tắt\x20khi\x20chế\x20độ\x20này\x20bật!\x0a\x0a-\x20Lưu\x20ý:\x20giá\x20trị\x20của\x20bài\x20học\x20nằm\x20trong\x20phạm\x20vi\x201\x20-\x201000\x20(Nhập\x200\x20để\x20auto\x20vô\x20hạn)!', 'getMonth', 'overlay-listening', 'lesson', 'handleChallengeChoiceGeneral', '133470WKyVUn', 'challenge-syllableTap', 'challenge-selectTranscription', 'Thử\x20thách\x20không\x20xác\x20định!!', 'Auto\x20will\x20continue\x20in:', 'animationOffWrapper', 'Không\x20thể\x20xác\x20thực\x20do\x20key\x20đã\x20nhận\x20đủ\x20số\x20IP\x20cho\x20phép!\x0aLưu\x20ý:\x20đối\x20với\x20key\x2024h\x20sẽ\x20chỉ\x20hỗ\x20trợ\x201\x20ip\x20/\x20key,\x20vì\x20vậy\x20nếu\x20địa\x20chỉ\x20ip\x20của\x20bạn\x20bị\x20thay\x20đổi\x20trong\x20quá\x20trình\x20sử\x20dụng\x20(do\x20thay\x20đổi\x20mạng,\x20sử\x20dụng\x20VPN\x20hoặc\x20reset\x20mạng,...)\x20sẽ\x20không\x20thể\x20kích\x20hoạt\x20lại\x20ngay\x20cả\x20khi\x20key\x20còn\x20thời\x20hạn.\x0a-\x20Nếu\x20ip\x20của\x20bạn\x20thường\x20xuyên\x20bị\x20thay\x20đổi,\x20hãy\x20xem\x20xét\x20sử\x20dụng\x20dịch\x20vụ\x20Key\x20Vip\x20dài\x20hạn\x20để\x20có\x20thể\x20sử\x20dụng\x20lâu\x20dài\x20và\x20ổn\x20định\x20hơn!', '.autoduo-language-option', 'text16', 'ENTER\x20KEY', 'autoFarmBtn', 'feedbackBtn', 'bubble-container-listening', 'key-input-listening', 'auto-x2', 'value', 'startsWith', 'text30', 'Indefinitely', '\x0a\x09\x09\x09\x09\x09\x09\x09</ul>\x0a\x09\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09\x09</div>\x0a\x09\x09\x09\x09', 'Bạn\x20có\x20thực\x20sự\x20muốn\x20gỡ\x20Key\x20hiện\x20tại\x20không?\x20(Sau\x20khi\x20gỡ\x20sẽ\x20tự\x20động\x20làm\x20mới\x20trang\x20để\x20cập\x20nhật)', 'log', 'button\x20img[src=\x22https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/f67d6256f5ccdb54af08633d69e27ef8.svg\x22]', 'Lesson\x20data\x20not\x20found.', 'text39', 'parentNode', 'handleTargetModeOn', 'autoduo-disabled', '352744KlTqrd', 'signatureElm', '\x0a\x09\x09\x09\x09\x09<div>\x0a\x09\x09\x09\x09\x09\x09Auto-Duolingo\x20DevX\x0a\x09\x09\x09\x09\x09\x09<div\x20class=\x22autoduo-language-wrapper\x22>\x0a\x09\x09\x09\x09\x09\x09\x09<p\x20class=\x22autoduo-language-selected\x22><i\x20class=\x22autoduo-language-icon\x22\x20style=\x22--data-icon:\x20url(\x27', 'setNotify', 'autoduoStyle', 'XP\x20Target\x20Mode', 'Không\x20thể\x20truy\x20cập\x20tính\x20năng\x20này\x20khi\x20\x22%v\x22\x20đang\x20bật.\x20Để\x20sử\x20dụng,\x20hãy\x20tắt\x20tính\x20năng\x20\x22%v\x22\x20trước!', 'HTMLInputElement', 'START\x20FARM\x20XP', 'prototype', 'handlePracticeHubChallenge'];
    _0x2fb0 = function() {
        return _0x2d723d;
    }
    ;
    return _0x2fb0();
}
function _0x50cf(_0x44210b, _0x299304) {
    const _0x2fb0a7 = _0x2fb0();
    return _0x50cf = function(_0x50cf6e, _0x1b29ed) {
        _0x50cf6e = _0x50cf6e - 0xdd;
        let _0x49e968 = _0x2fb0a7[_0x50cf6e];
        return _0x49e968;
    }
    ,
    _0x50cf(_0x44210b, _0x299304);
}
(function(_0x1970e6, _0x427eeb) {
    const _0x4cbc05 = _0x50cf
      , _0x109e29 = _0x1970e6();
    while (!![]) {
        try {
            const _0x3faf29 = -parseInt(_0x4cbc05(0x1ba)) / 0x1 * (-parseInt(_0x4cbc05(0x361)) / 0x2) + parseInt(_0x4cbc05(0x1aa)) / 0x3 + parseInt(_0x4cbc05(0x2ae)) / 0x4 + parseInt(_0x4cbc05(0x292)) / 0x5 * (parseInt(_0x4cbc05(0x30a)) / 0x6) + -parseInt(_0x4cbc05(0x23f)) / 0x7 + -parseInt(_0x4cbc05(0x1ae)) / 0x8 * (-parseInt(_0x4cbc05(0x213)) / 0x9) + -parseInt(_0x4cbc05(0x3af)) / 0xa;
            if (_0x3faf29 === _0x427eeb)
                break;
            else
                _0x109e29['push'](_0x109e29['shift']());
        } catch (_0xaeb1c4) {
            _0x109e29['push'](_0x109e29['shift']());
        }
    }
}(_0x2fb0, 0x454e6),
((()=>{
    const _0x285988 = _0x50cf;
    let _0x56dce9 = _0x285988(0xfb)
      , {isSafeMode: _0x185024, isTurboMode: _0x596ed4, isShowUI: _0x39d606, isAnimationOff: _0x1e63c3, isTargetMode: _0x1b298c, targetModeValue: _0xe5e662, isPassMode: _0x58e243, isPassLegend: _0x7f5ca9, passModeValue: _0x26068b, passValue: _0x4b5283, isAutoFarmXP: _0x3bd2d5, isFarmingLocation: _0x539522, farmingLocationUrl: _0x5f299c, farmingLocationErrorCount: _0x38b4ca, isAutoGetX2: _0x289a22, isGettingX2: _0xe23a90, isGetX2Failed: _0x13a297, prevFarmXPLocation: _0x1a31e4, exp: _0xe068b6, time: _0x53ab57, generalData: _0x5f42b6, authenData: _0x5441ac, isKeyTimeOut: _0x4b22a6, isNewNotify: _0x45aa12, rmNotifyVersion: _0x257f18, rmNotifyContent: _0x125827} = _0x569038()
      , {appLanguage: _0x47af8d, featureVersion: _0x2da9c5, notifyVersion: _0x539c23} = _0x5d9e1d(_0x56dce9);
    class _0x1e0e5a {
        [_0x285988(0x2dd)] = _0x285988(0x28a);
        [_0x285988(0x394)] = !0x1;
        [_0x285988(0x209)] = !0x1;
        [_0x285988(0x1ca)] = !0x1;
        [_0x285988(0x38b)] = _0x47af8d || 'en';
        [_0x285988(0x32a)] = !0x0;
        ['freeKey'] = _0x285988(0x339);
        ['freeKeyTime'] = _0x285988(0x1d1);
        [_0x285988(0x351)] = !!_0x185024;
        [_0x285988(0xe9)] = !!_0x596ed4;
        ['isLegendMode'] = !0x1;
        [_0x285988(0x38a)] = !!_0x1e63c3;
        [_0x285988(0x390)] = !!_0x1b298c;
        [_0x285988(0x30f)] = _0xe5e662 || 0x0;
        [_0x285988(0x2ea)] = !0x1;
        [_0x285988(0x1f6)] = void 0x0 !== _0x7f5ca9 && _0x7f5ca9;
        [_0x285988(0x320)] = _0x26068b || 0x0;
        [_0x285988(0x1b8)] = _0x4b5283 || 0x0;
        [_0x285988(0x323)] = _0x3bd2d5;
        [_0x285988(0x18d)] = !!_0x539522;
        ['farmingLocationUrl'] = _0x5f299c || '';
        [_0x285988(0x166)] = _0x38b4ca || 0x0;
        [_0x285988(0x2cd)] = !!_0x289a22;
        [_0x285988(0x301)] = !!_0xe23a90;
        [_0x285988(0x147)] = !!_0x13a297;
        ['prevFarmXPLocation'] = _0x1a31e4;
        ['isDarkMode'] = 'dark' === document[_0x285988(0x25c)][_0x285988(0x241)](_0x285988(0x317));
        [_0x285988(0x18e)] = 0xc8;
        [_0x285988(0x114)] = 0x118;
        [_0x285988(0x275)] = 0x1f4;
        [_0x285988(0x372)] = 0x1b7740;
        ['totalReloadTime'] = 0x0;
        [_0x285988(0x1de)] = 0x0;
        [_0x285988(0x26a)] = 0x352;
        ['lessGenealogy'] = null;
        [_0x285988(0x200)] = !0x1;
        [_0x285988(0x316)] = !!_0x4b22a6;
        [_0x285988(0x193)] = 0x0;
        [_0x285988(0x1c1)] = null;
        [_0x285988(0x156)] = void 0x0 === _0x39d606 || _0x39d606;
        [_0x285988(0x274)] = _0xe068b6 || 0x0;
        [_0x285988(0x2d1)] = _0x53ab57 || 0x0;
        [_0x285988(0x2d4)] = _0x5f42b6;
        [_0x285988(0x27b)] = _0x5441ac;
        [_0x285988(0x15b)] = +_0x539c23 || 0x0;
        [_0x285988(0x238)] = _0x45aa12;
        [_0x285988(0x21e)] = _0x257f18;
        ['rmNotifyContent'] = _0x125827;
        ['apiUrl'] = _0x285988(0x1e5);
        [_0x285988(0x19b)] = '/learn';
        [_0x285988(0x309)] = _0x285988(0x163);
        [_0x285988(0x1dd)] = _0x285988(0x2d5);
        ['listeningPacticePath'] = _0x285988(0x128);
        [_0x285988(0x33b)] = _0x285988(0x15f);
        [_0x285988(0x2cc)] = _0x285988(0xec);
        [_0x285988(0x256)] = _0x285988(0x1bf);
        [_0x285988(0x267)] = null;
        ['dataStateNode'] = null;
        [_0x285988(0x37e)] = Object[_0x285988(0x374)](window[_0x285988(0x2f7)]['prototype'], _0x285988(0x2a1))[_0x285988(0x13f)];
        [_0x285988(0x265)] = Object[_0x285988(0x374)](window[_0x285988(0x2b5)][_0x285988(0x2b7)], 'value')[_0x285988(0x13f)];
        [_0x285988(0x1d5)] = '[class=\x22_2CLME\x22]\x20button';
        [_0x285988(0x1a6)] = function() {
            const _0x28006c = _0x285988;
            _0x5cfe7f[_0x28006c(0x2f9)](this['appLanguage']),
            this['createStyle'](),
            this['createSignature'](),
            this[_0x28006c(0x24b)](),
            this['createBtns'](),
            this[_0x28006c(0x382)](),
            this['createKeyComponent'](),
            this[_0x28006c(0x342)](),
            this[_0x28006c(0x387)](),
            this[_0x28006c(0x2fc)](),
            this[_0x28006c(0x365)](),
            this[_0x28006c(0x3a0)](),
            _0x39d606 || this[_0x28006c(0x139)](),
            _0x1e63c3 && this[_0x28006c(0x364)](),
            _0x1b298c && this[_0x28006c(0x2ac)](),
            _0x539522 && this[_0x28006c(0x2fa)](),
            this[_0x28006c(0x39d)](),
            this[_0x28006c(0x27b)] ? this[_0x28006c(0x27c)](this[_0x28006c(0x27b)]) : this[_0x28006c(0x1d2)](),
            this[_0x28006c(0x2d4)] ? this[_0x28006c(0x386)](this['generalData']) : this[_0x28006c(0x1b9)](),
            this[_0x28006c(0x21e)] ? this[_0x28006c(0x2b1)]() : this[_0x28006c(0x1a5)](),
            _0x58e243 && this['handlePassModeOn'](),
            this[_0x28006c(0x323)] && this[_0x28006c(0x172)]();
        }
        ;
        [_0x285988(0x234)] = function() {
            const _0x55c7c9 = _0x285988;
            let _0x520282 = [{
                'code': 'en',
                'text': _0x55c7c9(0xe5),
                'icon': _0x55c7c9(0x179)
            }, {
                'code': 'vi',
                'text': _0x55c7c9(0x1cd),
                'icon': _0x55c7c9(0x1fc)
            }]
              , _0x2dc069 = _0x520282['find'](_0x576524=>_0x576524[_0x55c7c9(0x1ed)] === this[_0x55c7c9(0x38b)]) || _0x520282[0x0];
            this[_0x55c7c9(0x2af)] = document[_0x55c7c9(0x378)](_0x55c7c9(0x39c)),
            Object[_0x55c7c9(0x2ef)](this[_0x55c7c9(0x2af)], {
                'className': _0x55c7c9(0x25d),
                'innerHTML': _0x55c7c9(0x2b0) + _0x2dc069[_0x55c7c9(0x368)] + _0x55c7c9(0x10c) + _0x2dc069[_0x55c7c9(0x137)] + _0x55c7c9(0xea) + _0x520282[_0x55c7c9(0x253)](_0x4dab97=>'<li\x20class=\x22autoduo-language-option\x22\x20data-code=\x22' + _0x4dab97[_0x55c7c9(0x1ed)] + _0x55c7c9(0x369) + _0x4dab97['icon'] + _0x55c7c9(0x10c) + _0x4dab97[_0x55c7c9(0x137)] + _0x55c7c9(0x272))['join']('') + _0x55c7c9(0x2a5)
            }),
            document['body'][_0x55c7c9(0x3b1)](this[_0x55c7c9(0x2af)]);
            let _0x3f503a = _0x6f44f2(_0x55c7c9(0x18b))
              , _0x428ede = _0x6f44f2(_0x55c7c9(0x16a))
              , _0x6a9445 = _0x19b6ea(_0x428ede[_0x55c7c9(0x22d)](_0x55c7c9(0x299)));
            _0x3f503a[_0x55c7c9(0x144)](_0x55c7c9(0x27f), _0x27fd81=>{
                const _0x2e4ae6 = _0x55c7c9;
                _0x27fd81[_0x2e4ae6(0x33f)](),
                _0x428ede[_0x2e4ae6(0x1dc)][_0x2e4ae6(0x142)](_0x2e4ae6(0x1a9));
                let _0x1f9eeb = ()=>{
                    const _0x4c0e4f = _0x2e4ae6;
                    _0x428ede[_0x4c0e4f(0x1dc)][_0x4c0e4f(0x11e)](_0x4c0e4f(0x1a9)),
                    window[_0x4c0e4f(0x22c)](_0x4c0e4f(0x27f), _0x1f9eeb);
                }
                ;
                window[_0x2e4ae6(0x144)]('click', _0x1f9eeb);
            }
            ),
            _0x6a9445[_0x55c7c9(0x2c8)](_0x3b616c=>{
                const _0x4cf4c3 = _0x55c7c9;
                _0x3b616c[_0x4cf4c3(0x144)](_0x4cf4c3(0x27f), ()=>{
                    const _0x5d1afa = _0x4cf4c3;
                    let _0x1cb7c8 = _0x3b616c[_0x5d1afa(0x11a)]['code'];
                    if (_0x1cb7c8 === this[_0x5d1afa(0x38b)])
                        return;
                    let _0x214704 = window['confirm'](_0x4e8381('text62'));
                    _0x214704 && (_0x2979c9(_0x5d1afa(0x38b), _0x1cb7c8),
                    window[_0x5d1afa(0x2da)][_0x5d1afa(0x181)]());
                }
                );
            }
            );
        }
        ;
        ['createContacts'] = function() {
            const _0x2348b4 = _0x285988;
            this[_0x2348b4(0x3b6)] = document[_0x2348b4(0x378)](_0x2348b4(0x39c)),
            Object['assign'](this[_0x2348b4(0x3b6)], {
                'className': _0x2348b4(0x22b),
                'innerHTML': _0x2348b4(0x248)
            });
        }
        ;
        [_0x285988(0x363)] = function() {
            const _0x2761ee = _0x285988;
            this[_0x2761ee(0x29c)] = document[_0x2761ee(0x378)](_0x2761ee(0x1d9)),
            Object[_0x2761ee(0x2ef)](this[_0x2761ee(0x29c)], {
                'className': '\x20btn-green\x20auto-farm-btn-listening',
                'innerHTML': _0x4e8381(_0x2761ee(0x3a4)) + _0x2761ee(0x35c) + _0x4e8381(_0x2761ee(0x34a)) + ')</label>'
            }),
            this['autoFarmBtn'][_0x2761ee(0x144)]('click', ()=>{
                const _0x558e7f = _0x2761ee;
                if (this[_0x558e7f(0x29c)][_0x558e7f(0x250)]) {
                    this['autoduoFeatureDisabled']();
                    return;
                }
                if (this[_0x558e7f(0x323)]) {
                    if (this['isGettingX2']) {
                        let _0x258125 = window[_0x558e7f(0x127)](_0x4e8381('text82'));
                        if (!_0x258125)
                            return;
                    }
                    this['handleFarmXPOff']();
                } else
                    this[_0x558e7f(0x138)]();
            }
            ),
            this[_0x2761ee(0x1cb)] = document['createElement']('button'),
            Object[_0x2761ee(0x2ef)](this[_0x2761ee(0x1cb)], {
                'className': '\x20dropkey-btn-listening',
                'innerText': _0x4e8381(_0x2761ee(0x31a))
            }),
            this[_0x2761ee(0x1cb)][_0x2761ee(0x144)](_0x2761ee(0x27f), ()=>{
                const _0xce7e11 = _0x2761ee;
                let _0x2b59d1 = window[_0xce7e11(0x127)](_0x4e8381(_0xce7e11(0x2aa)));
                _0x2b59d1 && (_0x2979c9(_0xce7e11(0x10f), null),
                _0x4f1096(),
                this[_0xce7e11(0x32d)]());
            }
            ),
            this[_0x2761ee(0x29d)] = document[_0x2761ee(0x378)]('a'),
            Object[_0x2761ee(0x2ef)](this[_0x2761ee(0x29d)], {
                'className': '\x20btn-orange\x20feedback-btn-listening',
                'innerText': _0x4e8381('text64'),
                'target': _0x2761ee(0x2ba)
            }),
            this[_0x2761ee(0x227)] = document[_0x2761ee(0x378)]('button'),
            Object[_0x2761ee(0x2ef)](this['showHideBtn'], {
                'className': _0x2761ee(0xf1),
                'style': '--data-version:\x20\x27V' + this[_0x2761ee(0x2dd)] + '\x27',
                'innerHTML': _0x2761ee(0x1bd)
            }),
            this[_0x2761ee(0x227)]['addEventListener'](_0x2761ee(0x27f), ()=>{
                const _0x1ca4ef = _0x2761ee;
                this['isShowUI'] = !this['isShowUI'],
                this[_0x1ca4ef(0x139)](!0x0);
            }
            ),
            document[_0x2761ee(0x37b)]['append'](this[_0x2761ee(0x227)]);
        }
        ;
        ['createBubbles'] = function() {
            const _0x5d45c1 = _0x285988;
            this[_0x5d45c1(0x203)] = document[_0x5d45c1(0x378)](_0x5d45c1(0x1d9)),
            Object[_0x5d45c1(0x2ef)](this[_0x5d45c1(0x203)], {
                'className': _0x5d45c1(0x152),
                'title': 'Notification'
            }),
            this[_0x5d45c1(0x2c7)] = document[_0x5d45c1(0x378)]('a'),
            Object['assign'](this[_0x5d45c1(0x2c7)], {
                'className': 'bubble-item-listening\x20super-bubble-listening',
                'title': 'Duolingo\x20Super\x20Free',
                'href': _0x5d45c1(0x24a),
                'target': _0x5d45c1(0x2ba)
            });
        }
        ;
        [_0x285988(0x342)] = function() {
            const _0x308e8b = _0x285988;
            this['statistic'] = document[_0x308e8b(0x378)](_0x308e8b(0x39c)),
            this[_0x308e8b(0x1c8)] = document[_0x308e8b(0x378)]('p'),
            this[_0x308e8b(0x2d6)] = document[_0x308e8b(0x378)]('p'),
            this[_0x308e8b(0x12f)] = document[_0x308e8b(0x378)]('p'),
            this[_0x308e8b(0x15d)] = document['createElement']('p');
            let _0xcb7562 = document[_0x308e8b(0x378)](_0x308e8b(0x39c));
            Object['assign'](this[_0x308e8b(0x1c8)], {
                'className': _0x308e8b(0x261),
                'style': '--data-name:\x20\x22' + _0x4e8381('text13') + '\x22'
            }),
            Object[_0x308e8b(0x2ef)](this[_0x308e8b(0x2d6)], {
                'className': _0x308e8b(0x239),
                'style': '--data-name:\x20\x22' + _0x4e8381('text14') + '\x22'
            }),
            this['expElm']['className'] = _0x308e8b(0x27e),
            this['expElm'][_0x308e8b(0x119)] = this[_0x308e8b(0x274)],
            this['statistic'][_0x308e8b(0x169)] = _0x308e8b(0x13d),
            this[_0x308e8b(0x15d)]['className'] = _0x308e8b(0x31e),
            _0xcb7562[_0x308e8b(0x169)] = _0x308e8b(0x373),
            _0xcb7562[_0x308e8b(0x23c)](this[_0x308e8b(0x12f)], this[_0x308e8b(0x15d)]),
            this[_0x308e8b(0x17a)]['append'](this[_0x308e8b(0x1c8)], this[_0x308e8b(0x2d6)], _0xcb7562);
        }
        ;
        [_0x285988(0x387)] = function() {
            const _0x42a3ef = _0x285988;
            this['animationOffWrapper'] = document[_0x42a3ef(0x378)](_0x42a3ef(0x39c)),
            this[_0x42a3ef(0x297)]['style'] = '--data-name:\x20\x22' + _0x4e8381(_0x42a3ef(0x29a)) + '\x22';
            let _0x5bf139 = _0x4e8381(_0x42a3ef(0x110));
            this[_0x42a3ef(0x3a8)](_0x5bf139, this[_0x42a3ef(0x297)], this[_0x42a3ef(0x38a)], _0x303219=>{
                const _0x2644af = _0x42a3ef;
                this[_0x2644af(0x38a)] = !this[_0x2644af(0x38a)],
                this['handleAnimationOff'](!0x0),
                _0x303219(this[_0x2644af(0x38a)]);
            }
            ),
            this[_0x42a3ef(0xde)] = document[_0x42a3ef(0x378)](_0x42a3ef(0x39c)),
            this['safeModeWrapper'][_0x42a3ef(0x21a)] = _0x42a3ef(0x188) + _0x4e8381(_0x42a3ef(0x15e)) + '\x22';
            let _0x3a1d1a = _0x4e8381('text19');
            this['autoduoCreateSwitch'](_0x3a1d1a, this[_0x42a3ef(0xde)], this[_0x42a3ef(0x351)], ()=>{
                const _0x3a6b11 = _0x42a3ef;
                this[_0x3a6b11(0x351)] ? this['handleSafeModeOff']() : this[_0x3a6b11(0x228)]();
            }
            ),
            this[_0x42a3ef(0x207)] = document[_0x42a3ef(0x378)](_0x42a3ef(0x39c)),
            this[_0x42a3ef(0x207)][_0x42a3ef(0x21a)] = _0x42a3ef(0x188) + _0x4e8381(_0x42a3ef(0x308)) + '\x22';
            let _0x44c927 = _0x4e8381('text21');
            this[_0x42a3ef(0x3a8)](_0x44c927, this[_0x42a3ef(0x207)], this[_0x42a3ef(0xe9)], ()=>{
                const _0x4b0836 = _0x42a3ef;
                this[_0x4b0836(0xe9)] ? this['handleTurboModeOff']() : this[_0x4b0836(0x34d)](!0x0);
            }
            ),
            this[_0x42a3ef(0x116)] = document[_0x42a3ef(0x378)]('div'),
            this[_0x42a3ef(0x116)][_0x42a3ef(0x21a)] = _0x42a3ef(0x188) + _0x4e8381('text23') + '\x22';
            let _0x30d04b = _0x4e8381(_0x42a3ef(0x34b));
            this[_0x42a3ef(0x3a8)](_0x30d04b, this[_0x42a3ef(0x116)], this[_0x42a3ef(0x3a6)], ()=>{
                const _0x28fb53 = _0x42a3ef;
                if (this[_0x28fb53(0x116)][_0x28fb53(0x250)]) {
                    this[_0x28fb53(0x289)]();
                    return;
                }
                (!this[_0x28fb53(0x394)] || this[_0x28fb53(0x3a6)]) && (this['isLegendMode'] ? this['stopLegend']() : this[_0x28fb53(0x381)]());
            }
            ),
            this[_0x42a3ef(0x310)] = document[_0x42a3ef(0x378)]('div'),
            this['targetModeWrapper'][_0x42a3ef(0x21a)] = _0x42a3ef(0x188) + _0x4e8381(_0x42a3ef(0x259)) + '\x22';
            let _0x4da54b = _0x4e8381('text26');
            this[_0x42a3ef(0x3a8)](_0x4da54b, this[_0x42a3ef(0x310)], this[_0x42a3ef(0x390)], ()=>{
                const _0x479ce1 = _0x42a3ef;
                if (this[_0x479ce1(0x390)]) {
                    let _0x32ef48 = window[_0x479ce1(0x127)](_0x4e8381(_0x479ce1(0x2f1)));
                    _0x32ef48 && this[_0x479ce1(0x16e)]();
                    return;
                }
                let _0x38f3e;
                for (; ; ) {
                    let _0x31a448 = window[_0x479ce1(0x1f4)](_0x4e8381(_0x479ce1(0x1a2)));
                    if (null === _0x31a448)
                        return;
                    if (Number[_0x479ce1(0x391)](_0x38f3e = parseInt(_0x31a448))) {
                        alert(_0x4e8381(_0x479ce1(0x271)));
                        continue;
                    }
                    if (_0x38f3e <= this[_0x479ce1(0x274)]) {
                        alert(_0x4e8381(_0x479ce1(0x2a3), this['exp']));
                        continue;
                    }
                    if (_0x38f3e > 0xf4240) {
                        alert(_0x4e8381(_0x479ce1(0x254)));
                        continue;
                    }
                    break;
                }
                this[_0x479ce1(0x30f)] = _0x38f3e,
                this['handleTargetModeOn'](!0x0);
            }
            ),
            this[_0x42a3ef(0x30d)] = document[_0x42a3ef(0x378)]('p'),
            Object['assign'](this['targetModeLabel'], {
                'className': _0x42a3ef(0x279),
                'style': '--data-frefix:\x20\x22' + _0x4e8381('text63') + '\x22'
            }),
            this[_0x42a3ef(0x2fb)] = document[_0x42a3ef(0x378)](_0x42a3ef(0x39c)),
            this[_0x42a3ef(0x2fb)]['style'] = '--data-name:\x20\x22' + _0x4e8381('text32') + '\x22';
            let _0x1db82f = _0x4e8381(_0x42a3ef(0x2d0));
            this[_0x42a3ef(0x3a8)](_0x1db82f, this[_0x42a3ef(0x2fb)], this[_0x42a3ef(0x2ea)], ()=>{
                const _0x4d0c09 = _0x42a3ef;
                if (this[_0x4d0c09(0x2fb)][_0x4d0c09(0x1dc)][_0x4d0c09(0x250)]) {
                    this['autoduoFeatureDisabled']();
                    return;
                }
                if (this[_0x4d0c09(0x394)] && !this[_0x4d0c09(0x2ea)])
                    return;
                if (this[_0x4d0c09(0x2ea)]) {
                    let _0x9dfe55 = window[_0x4d0c09(0x127)](_0x4e8381(_0x4d0c09(0x14b)));
                    _0x9dfe55 && this[_0x4d0c09(0x2ee)]();
                    return;
                }
                let _0x271937;
                for (; ; ) {
                    let _0x40979a = window[_0x4d0c09(0x1f4)](_0x4e8381(_0x4d0c09(0x345)));
                    if (null === _0x40979a)
                        return;
                    if (Number[_0x4d0c09(0x391)](_0x271937 = parseInt(_0x40979a)) || _0x271937 < 0x0) {
                        alert(_0x4e8381(_0x4d0c09(0x271)));
                        continue;
                    }
                    if (_0x271937 > 0x3e8) {
                        alert(_0x4e8381(_0x4d0c09(0x254)));
                        continue;
                    }
                    0x0 === _0x271937 && (_0x271937 = 0xf423f);
                    break;
                }
                this[_0x4d0c09(0x320)] = _0x271937,
                this[_0x4d0c09(0x1b8)] = 0x0,
                this['isPassLegend'] = window['confirm'](_0x4e8381('text66')),
                _0x1a57c9(_0x4d0c09(0x1f6), this[_0x4d0c09(0x1f6)]),
                this['handlePassModeOn'](!0x0);
            }
            ),
            this['passModeLabel'] = document[_0x42a3ef(0x378)]('p'),
            this[_0x42a3ef(0x195)]['className'] = _0x42a3ef(0x393),
            this[_0x42a3ef(0x31d)] = document[_0x42a3ef(0x378)](_0x42a3ef(0x39c)),
            this[_0x42a3ef(0x130)] = document['createElement'](_0x42a3ef(0x39c)),
            this[_0x42a3ef(0x130)][_0x42a3ef(0x21a)] = _0x42a3ef(0x188) + _0x4e8381(_0x42a3ef(0x399)) + '\x22';
            let _0x4cc79d = _0x4e8381(_0x42a3ef(0x1e7));
            this[_0x42a3ef(0x3a8)](_0x4cc79d, this[_0x42a3ef(0x130)], this[_0x42a3ef(0x18d)], _0x5aa125=>{
                const _0x33969a = _0x42a3ef;
                if (this[_0x33969a(0x31d)][_0x33969a(0x250)]) {
                    this[_0x33969a(0x289)]();
                    return;
                }
                if (this['isAutoFarmXP'])
                    return;
                if (!0x0 === this['isFarmingLocation']) {
                    this['handleFarmingLocationOff'](),
                    _0x5aa125(!0x1);
                    return;
                }
                let _0x88ce51 = window[_0x33969a(0x2da)][_0x33969a(0x252)]
                  , _0x51709c = window[_0x33969a(0x127)](_0x4e8381(_0x33969a(0x38e)));
                if (!_0x51709c) {
                    let _0x21e5ae = RegExp(_0x33969a(0x2e7));
                    for (; ; ) {
                        if (null === (_0x88ce51 = window[_0x33969a(0x1f4)](_0x4e8381(_0x33969a(0x155)))))
                            return;
                        if (!_0x21e5ae[_0x33969a(0x117)](_0x88ce51)) {
                            window[_0x33969a(0x22f)](_0x4e8381('text71'));
                            continue;
                        }
                        break;
                    }
                }
                this[_0x33969a(0x21c)] = _0x88ce51,
                this[_0x33969a(0x2fa)](!0x0),
                _0x5aa125(!0x0);
            }
            ),
            this[_0x42a3ef(0xfd)] = document[_0x42a3ef(0x378)]('p'),
            this[_0x42a3ef(0xfd)][_0x42a3ef(0x169)] = _0x42a3ef(0x235),
            this['farmingLocationContainer']['appendChild'](this['farmingLocationWrapper']),
            this[_0x42a3ef(0x104)] = document['createElement']('div'),
            this[_0x42a3ef(0x104)][_0x42a3ef(0x21a)] = _0x42a3ef(0x188) + _0x4e8381(_0x42a3ef(0x168)) + '\x22';
            let _0x2554dc = _0x4e8381(_0x42a3ef(0x14e));
            this['autoduoCreateSwitch'](_0x2554dc, this[_0x42a3ef(0x104)], this[_0x42a3ef(0x2db)], _0x4be9a7=>{
                const _0x4ce962 = _0x42a3ef;
                this['isDarkMode'] = !this['isDarkMode'];
                let[_0x30c5c6,_0x428239,_0x8175cd] = this[_0x4ce962(0x2db)] ? [_0x4ce962(0x23b), 'on', '--app-offset:\x200px;\x20--color-snow:\x2019,\x2031,\x2036;\x20--color-snow-always-light:\x20255,\x20255,\x20255;\x20--color-snow-always-dark:\x2019,\x2031,\x2036;\x20--color-polar:\x2032,\x2047,\x2054;\x20--color-swan:\x2055,\x2070,\x2079;\x20--color-swan-always-light:\x20229,\x20229,\x20229;\x20--color-swan-always-dark:\x2055,\x2070,\x2079;\x20--color-hare:\x2082,\x20101,\x20109;\x20--color-hare-always-light:\x20175,\x20175,\x20175;\x20--color-wolf:\x20220,\x20230,\x20236;\x20--color-eel:\x20241,\x20247,\x20251;\x20--color-squid:\x20235,\x20227,\x20227;\x20--color-walking-fish:\x2032,\x2047,\x2054;\x20--color-flamingo:\x20148,\x2081,\x2081;\x20--color-pig:\x20245,\x20164,\x20164;\x20--color-crab:\x20255,\x20120,\x20120;\x20--color-cardinal:\x20238,\x2085,\x2085;\x20--color-fire-ant:\x20216,\x2072,\x2072;\x20--color-canary:\x2032,\x2047,\x2054;\x20--color-duck:\x20251,\x20229,\x20109;\x20--color-bee:\x20255,\x20199,\x200;\x20--color-bee-always-dark:\x20255,\x20199,\x200;\x20--color-lion:\x20255,\x20177,\x200;\x20--color-fox:\x20255,\x20171,\x2051;\x20--color-cheetah:\x2032,\x2047,\x2054;\x20--color-monkey:\x20229,\x20162,\x2089;\x20--color-camel:\x20231,\x20166,\x201;\x20--color-guinea-pig:\x20215,\x20148,\x2051;\x20--color-grizzly:\x20187,\x20113,\x2073;\x20--color-sea-sponge:\x2032,\x2047,\x2054;\x20--color-turtle:\x2095,\x20132,\x2040;\x20--color-owl:\x20147,\x20211,\x2051;\x20--color-tree-frog:\x20121,\x20185,\x2051;\x20--color-peacock:\x200,\x20205,\x20156;\x20--color-iguana:\x2032,\x2047,\x2054;\x20--color-anchovy:\x20210,\x20228,\x20232;\x20--color-beluga:\x20187,\x20242,\x20255;\x20--color-moon-jelly:\x20122,\x20240,\x20242;\x20--color-blue-jay:\x2063,\x20133,\x20167;\x20--color-macaw:\x2073,\x20192,\x20248;\x20--color-whale:\x2024,\x20153,\x20214;\x20--color-humpback:\x2043,\x20112,\x20201;\x20--color-narwhal:\x2020,\x2083,\x20163;\x20--color-manta-ray:\x204,\x2044,\x2096;\x20--color-starfish:\x20255,\x20134,\x20208;\x20--color-beetle:\x20206,\x20130,\x20255;\x20--color-betta:\x20144,\x20105,\x20205;\x20--color-butterfly:\x20111,\x2078,\x20161;\x20--color-dragon:\x20204,\x2052,\x20141;\x20--color-starling:\x2092,\x20108,\x20252;\x20--color-martin:\x2071,\x2085,\x20223;\x20--color-grackle:\x20167,\x20160,\x20255;\x20--color-honeycreeper:\x20193,\x20187,\x20255;\x20--color-deep-starling:\x2034,\x2033,\x2081;\x20--color-deep-martin:\x2016,\x2015,\x2062;\x20--color-legendary-foreground:\x20140,\x2065,\x203;\x20--color-stardust:\x20199,\x20255,\x20254;\x20--color-cosmos:\x2060,\x2077,\x20255;\x20--color-nebula:\x2063,\x2034,\x20236;\x20--color-nova:\x20207,\x2023,\x20200;\x20--color-gamma:\x2038,\x20246,\x2099;\x20--color-starlight:\x2038,\x20138,\x20255;\x20--color-quasar:\x20252,\x2085,\x20255;\x20--color-celestia:\x20255,\x20255,\x20255;\x20--color-eclipse:\x200,\x204,\x2055;\x20--color-black:\x200,\x200,\x200;\x20--color-aqua:\x2043,\x20164,\x20176;\x20--color-aqua-always-light:\x2056,\x20238,\x20255;\x20--color-ocean:\x2056,\x20238,\x20255;\x20--color-seafoam:\x2030,\x2089,\x2097;\x20--color-ice:\x2023,\x2052,\x2058;\x20--color-max-shadow:\x2020,\x20208,\x20225;\x20--color-black-white:\x20255,\x20255,\x20255;\x20--color-diamond-stat:\x2086,\x20219,\x20226;\x20--color-mask-green:\x20144,\x20220,\x2072;\x20--color-pearl-stat:\x20255,\x20170,\x20222;\x20--color-snow-dark-swan:\x2055,\x2070,\x2079;\x20--color-black-text:\x20241,\x20247,\x20251;\x20--color-blue-space:\x2011,\x2062,\x20113;\x20--color-juicy-blue-space:\x2010,\x2074,\x20130;\x20--color-juicy-blue-space-light:\x2035,\x2083,\x20144;\x20--color-gold:\x20250,\x20169,\x2025;\x20--color-gray-text:\x20220,\x20230,\x20236;\x20--color-orange:\x20255,\x20157,\x200;\x20--color-diamond-highlight:\x20231,\x20251,\x20251;\x20--color-diamond:\x2056,\x20208,\x20208;\x20--color-banana:\x20255,\x20176,\x2032;\x20--color-cloud:\x20207,\x20207,\x20207;\x20--color-cloud-light:\x20221,\x20221,\x20221;\x20--color-cloud-lightest:\x20240,\x20240,\x20240;\x20--color-kiwi:\x20122,\x20199,\x2012;\x20--color-kiwi-dark:\x2093,\x20151,\x209;\x20--color-kiwi-light:\x20142,\x20224,\x200;\x20--color-facebook:\x2059,\x2089,\x20152;\x20--color-facebook-dark:\x2045,\x2067,\x20115;\x20--color-google:\x2066,\x20133,\x20244;\x20--color-twitter:\x2029,\x20161,\x20242;\x20--color-hv-light-peach:\x20241,\x20218,\x20179;\x20--color-hv-peach:\x20219,\x20186,\x20131;\x20--color-hv-light-orange:\x20255,\x20177,\x2064;\x20--color-hv-orange:\x20204,\x20121,\x200;\x20--color-hv-brown:\x20140,\x2090,\x2017;\x20--color-streak-panel-extended-background:\x20205,\x20121,\x200;\x20--color-streak-panel-frozen-background:\x2043,\x20112,\x20201;\x20--color-streak-panel-frozen-flair-background:\x2073,\x20192,\x20248;\x20--color-streak-panel-frozen-subtitle:\x20255,\x20255,\x20255;\x20--color-streak-panel-frozen-text:\x20255,\x20255,\x20255;\x20--color-streak-panel-frozen-topbar-text:\x20255,\x20255,\x20255;\x20--color-streak-panel-streak-society-background:\x20215,\x20148,\x2051;\x20--color-streak-panel-streak-society-text:\x20255,\x20255,\x20255;\x20--color-streak-panel-unextended-heading-text:\x2082,\x20101,\x20109;\x20--color-streak-panel-unextended-heading-background:\x2032,\x2047,\x2054;\x20--color-streak-panel-unextended-topbar-text:\x20255,\x20255,\x20255;\x20--color-streak-panel-milestone-gradient-start:\x20255,\x20147,\x2058;\x20--color-streak-panel-milestone-gradient-end:\x20255,\x20200,\x200;\x20--color-streak-society-dark-orange:\x20255,\x20151,\x201;\x20--color-streak-society-light-orange:\x20255,\x20179,\x201;\x20--color-friends-quest-own-incomplete:\x20111,\x20139,\x20157;\x20--color-friends-quest-friend-incomplete:\x2079,\x20100,\x20113;\x20--color-black-text-always-light:\x2060,\x2060,\x2060;\x20--color-cardinal-always-light:\x20255,\x2075,\x2075;\x20--color-cowbird:\x20174,\x20104,\x202;\x20--color-eel-always-light:\x2075,\x2075,\x2075;\x20--color-fox-always-light:\x20255,\x20150,\x200;\x20--color-fire-ant-always-light:\x20234,\x2043,\x2043;\x20--color-grizzly-lite:\x20220,\x20143,\x2071;\x20--color-guinea-pig-always-light:\x20205,\x20121,\x200;\x20--color-iguana-always-light:\x20221,\x20244,\x20255;\x20--color-macaw-always-light:\x2028,\x20176,\x20246;\x20--color-owl-always-light:\x2088,\x20204,\x202;\x20--color-polar-always-light:\x20247,\x20247,\x20247;\x20--color-sea-sponge-always-light:\x20215,\x20255,\x20184;\x20--color-tree-frog-always-light:\x2088,\x20167,\x200;\x20--color-turtle-always-light:\x20165,\x20237,\x20110;\x20--color-walking-fish-always-light:\x20255,\x20223,\x20224;\x20--color-wolf-always-light:\x20119,\x20119,\x20119;\x20--color-cardinal-always-dark:\x20238,\x2085,\x2085;\x20--color-eel-always-dark:\x20241,\x20247,\x20251;\x20--color-hare-always-dark:\x2082,\x20101,\x20109;\x20--color-macaw-always-dark:\x2073,\x20192,\x20248;\x20--color-owl-always-dark:\x20147,\x20211,\x2051;\x20--color-polar-always-dark:\x2032,\x2047,\x2054;\x20--color-wolf-always-dark:\x20220,\x20230,\x20236;\x20--color-rookie:\x200,\x20175,\x20133;\x20--color-explorer:\x20255,\x20100,\x20191;\x20--color-traveler:\x20255,\x20145,\x2083;\x20--color-trailblazer:\x20154,\x20143,\x20232;\x20--color-adventurer:\x2096,\x2012,\x20199;\x20--color-discoverer:\x20111,\x2044,\x2057;\x20--color-daredevil:\x2046,\x2083,\x20138;\x20--color-navigator:\x209,\x2047,\x20119;\x20--color-champion:\x20255,\x20110,\x2053;\x20--color-daily_refresh:\x200,\x20148,\x20255;\x20--color-dark-mode-locked-path-section-text-color:\x2082,\x20101,\x20109;\x20--color-rookie-progress-bar:\x200,\x20198,\x20150;\x20--color-explorer-progress-bar:\x20255,\x20138,\x20207;\x20--color-traveler-progress-bar:\x20255,\x20167,\x20106;\x20--color-trailblazer-progress-bar:\x20169,\x20157,\x20254;\x20--color-adventurer-progress-bar:\x20122,\x2013,\x20199;\x20--color-discoverer-progress-bar:\x20131,\x2050,\x2065;\x20--color-daredevil-progress-bar:\x2054,\x2098,\x20165;\x20--color-navigator-progress-bar:\x2012,\x2057,\x20141;\x20--color-champion-progress-bar:\x20255,\x20129,\x2080;\x20--color-daily_refresh-progress-bar:\x2028,\x20160,\x20255;\x20--color-course-complete-cta:\x20120,\x20219,\x20224;\x20--color-course-complete-cta-border:\x2094,\x20201,\x20204;\x20--color-bea-secondary:\x2024,\x20153,\x20214;\x20--color-eddy-secondary:\x20234,\x2043,\x2043;\x20--color-gilded-secondary:\x20231,\x20166,\x201;\x20--color-lily-secondary:\x20165,\x20104,\x20204;\x20--color-vikram-secondary:\x20163,\x2042,\x20113;\x20--color-zari-secondary:\x20204,\x20107,\x20166;\x20--color-oscar-secondary:\x200,\x20164,\x20125;\x20--color-falstaff-secondary:\x20150,\x2090,\x2058;\x20--color-bea-radio:\x2020,\x20123,\x20172;\x20--color-duo-radio:\x2062,\x20143,\x201;\x20--color-eddy-radio:\x20179,\x2053,\x2053;\x20--color-falstaff-radio:\x20131,\x2079,\x2051;\x20--color-lin-lucy-radio:\x20179,\x20105,\x200;\x20--color-lily-radio:\x20144,\x2091,\x20179;\x20--color-vikram-radio:\x20143,\x2036,\x2099;\x20--color-zari-radio:\x20179,\x2094,\x20146;\x20--color-oscar-radio:\x200,\x20144,\x20109;\x20--color-bea-junior-shine:\x2067,\x20190,\x20248;\x20--color-duo-shine:\x20114,\x20214,\x2039;\x20--color-eddy-shine:\x20255,\x20105,\x20105;\x20--color-falstaff-shine:\x20227,\x20165,\x20108;\x20--color-lily-shine:\x20214,\x20150,\x20255;\x20--color-lin-lucy-shine:\x20255,\x20168,\x2044;\x20--color-oscar-shine:\x2063,\x20217,\x20181;\x20--color-vikram-shine:\x20214,\x2090,\x20162;\x20--color-zari-shine:\x20255,\x20158,\x20217;\x20--color-super-background-secondary:\x2026,\x2030,\x2076;\x20--color-super-gradient-background:\x2012,\x2047,\x20113;\x20--color-super-gradient-top-halo:\x2012,\x2076,\x2070;\x20--color-super-gradient-bottom-halo:\x2076,\x2029,\x20115;\x20--color-gold-shine:\x20255,\x20231,\x200;\x20--color-legendary-dark-background:\x2024,\x2024,\x2024;\x20--color-roseate:\x20223,\x2075,\x20162;\x20--color-rosefinch:\x20180,\x2028,\x20117;\x20--color-bluebird:\x203,\x20144,\x20211;\x20--color-cotinga:\x20121,\x2058,\x20227;\x20--color-sabrewing:\x20165,\x20112,\x20255;\x20--color-blueberry:\x2017,\x2082,\x20167;\x20--color-ether:\x2060,\x2089,\x20141;\x20--color-diamond-tournament-purple:\x20161,\x20161,\x20238;\x20--color-diamond-tournament-reaction:\x20118,\x20163,\x20231;\x20--color-yir-page0:\x20221,\x20244,\x20255;\x20--color-yir-page1:\x20227,\x20255,\x20235;\x20--color-yir-page1-shadow:\x2019,\x2031,\x2036;\x20--color-yir-page3-shadow:\x20187,\x20172,\x20252;\x20--color-yir-page4-shadow:\x20143,\x20219,\x20255;\x20--color-yir-page5-shadow:\x20255,\x20183,\x2080;\x20--color-super-gradient-green-variant1:\x2038,\x20255,\x2085;\x20--color-super-gradient-blue-variant1:\x2038,\x20139,\x20255;\x20--color-super-gradient-pink-variant1:\x20252,\x2085,\x20255;\x20--color-super-gradient-purple-variant1:\x2017,\x2034,\x20181;\x20--color-unknown-001e2d:\x200,\x2030,\x2045;\x20--color-unknown-0047a4:\x200,\x2071,\x20164;\x20--color-unknown-0087d0:\x200,\x20135,\x20208;\x20--color-unknown-00aff9:\x200,\x20175,\x20249;\x20--color-unknown-013047:\x201,\x2048,\x2071;\x20--color-unknown-048fd1:\x204,\x20143,\x20209;\x20--color-unknown-0e0f10:\x2014,\x2015,\x2016;\x20--color-unknown-0e3d79:\x2014,\x2061,\x20121;\x20--color-unknown-172071:\x2023,\x2032,\x20113;\x20--color-unknown-280378:\x2040,\x203,\x20120;\x20--color-unknown-3ebbf6:\x2062,\x20187,\x20246;\x20--color-unknown-655ebb:\x20101,\x2094,\x20187;\x20--color-unknown-696cee:\x20105,\x20108,\x20238;\x20--color-unknown-7c0000:\x20124,\x200,\x200;\x20--color-unknown-89e219:\x20137,\x20226,\x2025;\x20--color-unknown-935051:\x20147,\x2080,\x2081;\x20--color-unknown-959595:\x20149,\x20149,\x20149;\x20--color-unknown-a2a2a2:\x20162,\x20162,\x20162;\x20--color-unknown-a3dbeb:\x20163,\x20219,\x20235;\x20--color-unknown-a4dffb:\x20164,\x20223,\x20251;\x20--color-unknown-aaa:\x20170,\x20170,\x20170;\x20--color-unknown-d087ff:\x20208,\x20135,\x20255;\x20--color-unknown-d9d9d9:\x20217,\x20217,\x20217;\x20--color-unknown-ddd:\x20221,\x20221,\x20221;\x20--color-unknown-de8029:\x20222,\x20128,\x2041;\x20--color-unknown-e3e3e3:\x20227,\x20227,\x20227;\x20--color-unknown-e4ffff:\x20228,\x20255,\x20255;\x20--color-unknown-ed8c01:\x20237,\x20140,\x201;\x20--color-unknown-f3484e:\x20243,\x2072,\x2078;\x20--color-unknown-f4fafe:\x20244,\x20250,\x20254;\x20--color-unknown-fbdec5:\x20251,\x20222,\x20197;\x20--color-unknown-ffc700:\x20255,\x20199,\x200;\x20--color-unknown-fff2aa:\x20255,\x20242,\x20170;\x20--color-unknown-fffbef:\x20255,\x20251,\x20239;'] : [_0x4ce962(0x150), _0x4ce962(0x35f), '--app-offset:\x200px;\x20--color-snow:\x20255,\x20255,\x20255;\x20--color-snow-always-light:\x20255,\x20255,\x20255;\x20--color-snow-always-dark:\x2019,\x2031,\x2036;\x20--color-polar:\x20247,\x20247,\x20247;\x20--color-swan:\x20229,\x20229,\x20229;\x20--color-swan-always-light:\x20229,\x20229,\x20229;\x20--color-swan-always-dark:\x2055,\x2070,\x2079;\x20--color-hare:\x20175,\x20175,\x20175;\x20--color-hare-always-light:\x20175,\x20175,\x20175;\x20--color-wolf:\x20119,\x20119,\x20119;\x20--color-eel:\x2075,\x2075,\x2075;\x20--color-squid:\x20235,\x20227,\x20227;\x20--color-walking-fish:\x20255,\x20223,\x20224;\x20--color-flamingo:\x20255,\x20178,\x20178;\x20--color-pig:\x20245,\x20164,\x20164;\x20--color-crab:\x20255,\x20120,\x20120;\x20--color-cardinal:\x20255,\x2075,\x2075;\x20--color-fire-ant:\x20234,\x2043,\x2043;\x20--color-canary:\x20255,\x20245,\x20211;\x20--color-duck:\x20251,\x20229,\x20109;\x20--color-bee:\x20255,\x20200,\x200;\x20--color-bee-always-dark:\x20255,\x20199,\x200;\x20--color-lion:\x20255,\x20177,\x200;\x20--color-fox:\x20255,\x20150,\x200;\x20--color-cheetah:\x20255,\x20206,\x20142;\x20--color-monkey:\x20229,\x20162,\x2089;\x20--color-camel:\x20231,\x20166,\x201;\x20--color-guinea-pig:\x20205,\x20121,\x200;\x20--color-grizzly:\x20187,\x20113,\x2073;\x20--color-sea-sponge:\x20215,\x20255,\x20184;\x20--color-turtle:\x20165,\x20237,\x20110;\x20--color-owl:\x2088,\x20204,\x202;\x20--color-tree-frog:\x2088,\x20167,\x200;\x20--color-peacock:\x200,\x20205,\x20156;\x20--color-iguana:\x20221,\x20244,\x20255;\x20--color-anchovy:\x20210,\x20228,\x20232;\x20--color-beluga:\x20187,\x20242,\x20255;\x20--color-moon-jelly:\x20122,\x20240,\x20242;\x20--color-blue-jay:\x20132,\x20216,\x20255;\x20--color-macaw:\x2028,\x20176,\x20246;\x20--color-whale:\x2024,\x20153,\x20214;\x20--color-humpback:\x2043,\x20112,\x20201;\x20--color-narwhal:\x2020,\x2083,\x20163;\x20--color-manta-ray:\x204,\x2044,\x2096;\x20--color-starfish:\x20255,\x20134,\x20208;\x20--color-beetle:\x20206,\x20130,\x20255;\x20--color-betta:\x20144,\x20105,\x20205;\x20--color-butterfly:\x20111,\x2078,\x20161;\x20--color-dragon:\x20204,\x2052,\x20141;\x20--color-starling:\x2092,\x20108,\x20252;\x20--color-martin:\x2071,\x2085,\x20223;\x20--color-grackle:\x20167,\x20160,\x20255;\x20--color-honeycreeper:\x20193,\x20187,\x20255;\x20--color-deep-starling:\x2034,\x2033,\x2081;\x20--color-deep-martin:\x2016,\x2015,\x2062;\x20--color-legendary-foreground:\x20140,\x2065,\x203;\x20--color-stardust:\x20199,\x20255,\x20254;\x20--color-cosmos:\x2060,\x2077,\x20255;\x20--color-nebula:\x2063,\x2034,\x20236;\x20--color-nova:\x20207,\x2023,\x20200;\x20--color-gamma:\x2038,\x20246,\x2099;\x20--color-starlight:\x2038,\x20138,\x20255;\x20--color-quasar:\x20252,\x2085,\x20255;\x20--color-celestia:\x20255,\x20255,\x20255;\x20--color-eclipse:\x200,\x204,\x2055;\x20--color-black:\x200,\x200,\x200;\x20--color-aqua:\x2056,\x20238,\x20255;\x20--color-aqua-always-light:\x2056,\x20238,\x20255;\x20--color-ocean:\x200,\x20124,\x20143;\x20--color-seafoam:\x20158,\x20224,\x20233;\x20--color-ice:\x20225,\x20253,\x20255;\x20--color-max-shadow:\x2020,\x20208,\x20225;\x20--color-black-white:\x200,\x200,\x200;\x20--color-diamond-stat:\x2086,\x20219,\x20226;\x20--color-mask-green:\x20137,\x20226,\x2025;\x20--color-pearl-stat:\x20255,\x20170,\x20222;\x20--color-snow-dark-swan:\x20255,\x20255,\x20255;\x20--color-black-text:\x2060,\x2060,\x2060;\x20--color-blue-space:\x2011,\x2062,\x20113;\x20--color-juicy-blue-space:\x2010,\x2074,\x20130;\x20--color-juicy-blue-space-light:\x2035,\x2083,\x20144;\x20--color-gold:\x20250,\x20169,\x2025;\x20--color-gray-text:\x20153,\x20153,\x20153;\x20--color-orange:\x20255,\x20157,\x200;\x20--color-diamond-highlight:\x20231,\x20251,\x20251;\x20--color-diamond:\x2056,\x20208,\x20208;\x20--color-banana:\x20255,\x20176,\x2032;\x20--color-cloud:\x20207,\x20207,\x20207;\x20--color-cloud-light:\x20221,\x20221,\x20221;\x20--color-cloud-lightest:\x20240,\x20240,\x20240;\x20--color-kiwi:\x20122,\x20199,\x2012;\x20--color-kiwi-dark:\x2093,\x20151,\x209;\x20--color-kiwi-light:\x20142,\x20224,\x200;\x20--color-facebook:\x2059,\x2089,\x20152;\x20--color-facebook-dark:\x2045,\x2067,\x20115;\x20--color-google:\x2066,\x20133,\x20244;\x20--color-twitter:\x2029,\x20161,\x20242;\x20--color-hv-light-peach:\x20241,\x20218,\x20179;\x20--color-hv-peach:\x20219,\x20186,\x20131;\x20--color-hv-light-orange:\x20255,\x20177,\x2064;\x20--color-hv-orange:\x20204,\x20121,\x200;\x20--color-hv-brown:\x20140,\x2090,\x2017;\x20--color-streak-panel-extended-background:\x20255,\x20150,\x200;\x20--color-streak-panel-frozen-background:\x20221,\x20244,\x20255;\x20--color-streak-panel-frozen-flair-background:\x20132,\x20216,\x20255;\x20--color-streak-panel-frozen-subtitle:\x2028,\x20176,\x20246;\x20--color-streak-panel-frozen-text:\x20132,\x20216,\x20255;\x20--color-streak-panel-frozen-topbar-text:\x2024,\x20153,\x20214;\x20--color-streak-panel-streak-society-background:\x20255,\x20200,\x200;\x20--color-streak-panel-streak-society-text:\x20205,\x20121,\x200;\x20--color-streak-panel-unextended-heading-text:\x20235,\x20195,\x20127;\x20--color-streak-panel-unextended-heading-background:\x20255,\x20245,\x20211;\x20--color-streak-panel-unextended-topbar-text:\x20235,\x20195,\x20127;\x20--color-streak-panel-milestone-gradient-start:\x20255,\x20147,\x2058;\x20--color-streak-panel-milestone-gradient-end:\x20255,\x20200,\x200;\x20--color-streak-society-dark-orange:\x20255,\x20151,\x201;\x20--color-streak-society-light-orange:\x20255,\x20179,\x201;\x20--color-friends-quest-own-incomplete:\x20175,\x20175,\x20175;\x20--color-friends-quest-friend-incomplete:\x20145,\x20145,\x20145;\x20--color-black-text-always-light:\x2060,\x2060,\x2060;\x20--color-cardinal-always-light:\x20255,\x2075,\x2075;\x20--color-cowbird:\x20174,\x20104,\x202;\x20--color-eel-always-light:\x2075,\x2075,\x2075;\x20--color-fox-always-light:\x20255,\x20150,\x200;\x20--color-fire-ant-always-light:\x20234,\x2043,\x2043;\x20--color-grizzly-lite:\x20220,\x20143,\x2071;\x20--color-guinea-pig-always-light:\x20205,\x20121,\x200;\x20--color-iguana-always-light:\x20221,\x20244,\x20255;\x20--color-macaw-always-light:\x2028,\x20176,\x20246;\x20--color-owl-always-light:\x2088,\x20204,\x202;\x20--color-polar-always-light:\x20247,\x20247,\x20247;\x20--color-sea-sponge-always-light:\x20215,\x20255,\x20184;\x20--color-tree-frog-always-light:\x2088,\x20167,\x200;\x20--color-turtle-always-light:\x20165,\x20237,\x20110;\x20--color-walking-fish-always-light:\x20255,\x20223,\x20224;\x20--color-wolf-always-light:\x20119,\x20119,\x20119;\x20--color-cardinal-always-dark:\x20238,\x2085,\x2085;\x20--color-eel-always-dark:\x20241,\x20247,\x20251;\x20--color-hare-always-dark:\x2082,\x20101,\x20109;\x20--color-macaw-always-dark:\x2073,\x20192,\x20248;\x20--color-owl-always-dark:\x20147,\x20211,\x2051;\x20--color-polar-always-dark:\x2032,\x2047,\x2054;\x20--color-wolf-always-dark:\x20220,\x20230,\x20236;\x20--color-rookie:\x200,\x20175,\x20133;\x20--color-explorer:\x20255,\x20100,\x20191;\x20--color-traveler:\x20255,\x20145,\x2083;\x20--color-trailblazer:\x20154,\x20143,\x20232;\x20--color-adventurer:\x2096,\x2012,\x20199;\x20--color-discoverer:\x20111,\x2044,\x2057;\x20--color-daredevil:\x2046,\x2083,\x20138;\x20--color-navigator:\x209,\x2047,\x20119;\x20--color-champion:\x20255,\x20110,\x2053;\x20--color-daily_refresh:\x200,\x20148,\x20255;\x20--color-dark-mode-locked-path-section-text-color:\x2082,\x20101,\x20109;\x20--color-rookie-progress-bar:\x200,\x20198,\x20150;\x20--color-explorer-progress-bar:\x20255,\x20138,\x20207;\x20--color-traveler-progress-bar:\x20255,\x20167,\x20106;\x20--color-trailblazer-progress-bar:\x20169,\x20157,\x20254;\x20--color-adventurer-progress-bar:\x20122,\x2013,\x20199;\x20--color-discoverer-progress-bar:\x20131,\x2050,\x2065;\x20--color-daredevil-progress-bar:\x2054,\x2098,\x20165;\x20--color-navigator-progress-bar:\x2012,\x2057,\x20141;\x20--color-champion-progress-bar:\x20255,\x20129,\x2080;\x20--color-daily_refresh-progress-bar:\x2028,\x20160,\x20255;\x20--color-course-complete-cta:\x20120,\x20219,\x20224;\x20--color-course-complete-cta-border:\x2094,\x20201,\x20204;\x20--color-bea-secondary:\x2024,\x20153,\x20214;\x20--color-eddy-secondary:\x20234,\x2043,\x2043;\x20--color-gilded-secondary:\x20231,\x20166,\x201;\x20--color-lily-secondary:\x20165,\x20104,\x20204;\x20--color-vikram-secondary:\x20163,\x2042,\x20113;\x20--color-zari-secondary:\x20204,\x20107,\x20166;\x20--color-oscar-secondary:\x200,\x20164,\x20125;\x20--color-falstaff-secondary:\x20150,\x2090,\x2058;\x20--color-bea-radio:\x2020,\x20123,\x20172;\x20--color-duo-radio:\x2062,\x20143,\x201;\x20--color-eddy-radio:\x20179,\x2053,\x2053;\x20--color-falstaff-radio:\x20131,\x2079,\x2051;\x20--color-lin-lucy-radio:\x20179,\x20105,\x200;\x20--color-lily-radio:\x20144,\x2091,\x20179;\x20--color-vikram-radio:\x20143,\x2036,\x2099;\x20--color-zari-radio:\x20179,\x2094,\x20146;\x20--color-oscar-radio:\x200,\x20144,\x20109;\x20--color-bea-junior-shine:\x2067,\x20190,\x20248;\x20--color-duo-shine:\x20114,\x20214,\x2039;\x20--color-eddy-shine:\x20255,\x20105,\x20105;\x20--color-falstaff-shine:\x20227,\x20165,\x20108;\x20--color-lily-shine:\x20214,\x20150,\x20255;\x20--color-lin-lucy-shine:\x20255,\x20168,\x2044;\x20--color-oscar-shine:\x2063,\x20217,\x20181;\x20--color-vikram-shine:\x20214,\x2090,\x20162;\x20--color-zari-shine:\x20255,\x20158,\x20217;\x20--color-super-background-secondary:\x2026,\x2030,\x2076;\x20--color-super-gradient-background:\x2012,\x2047,\x20113;\x20--color-super-gradient-top-halo:\x2012,\x2076,\x2070;\x20--color-super-gradient-bottom-halo:\x2076,\x2029,\x20115;\x20--color-gold-shine:\x20255,\x20231,\x200;\x20--color-legendary-dark-background:\x2024,\x2024,\x2024;\x20--color-roseate:\x20223,\x2075,\x20162;\x20--color-rosefinch:\x20180,\x2028,\x20117;\x20--color-bluebird:\x203,\x20144,\x20211;\x20--color-cotinga:\x20121,\x2058,\x20227;\x20--color-sabrewing:\x20165,\x20112,\x20255;\x20--color-blueberry:\x2017,\x2082,\x20167;\x20--color-ether:\x2060,\x2089,\x20141;\x20--color-diamond-tournament-purple:\x20161,\x20161,\x20238;\x20--color-diamond-tournament-reaction:\x20118,\x20163,\x20231;\x20--color-yir-page0:\x20221,\x20244,\x20255;\x20--color-yir-page1:\x20227,\x20255,\x20235;\x20--color-yir-page1-shadow:\x2019,\x2031,\x2036;\x20--color-yir-page3-shadow:\x20187,\x20172,\x20252;\x20--color-yir-page4-shadow:\x20143,\x20219,\x20255;\x20--color-yir-page5-shadow:\x20255,\x20183,\x2080;\x20--color-super-gradient-green-variant1:\x2038,\x20255,\x2085;\x20--color-super-gradient-blue-variant1:\x2038,\x20139,\x20255;\x20--color-super-gradient-pink-variant1:\x20252,\x2085,\x20255;\x20--color-super-gradient-purple-variant1:\x2017,\x2034,\x20181;\x20--color-unknown-001e2d:\x200,\x2030,\x2045;\x20--color-unknown-0047a4:\x200,\x2071,\x20164;\x20--color-unknown-0087d0:\x200,\x20135,\x20208;\x20--color-unknown-00aff9:\x200,\x20175,\x20249;\x20--color-unknown-013047:\x201,\x2048,\x2071;\x20--color-unknown-048fd1:\x204,\x20143,\x20209;\x20--color-unknown-0e0f10:\x2014,\x2015,\x2016;\x20--color-unknown-0e3d79:\x2014,\x2061,\x20121;\x20--color-unknown-172071:\x2023,\x2032,\x20113;\x20--color-unknown-280378:\x2040,\x203,\x20120;\x20--color-unknown-3ebbf6:\x2062,\x20187,\x20246;\x20--color-unknown-655ebb:\x20101,\x2094,\x20187;\x20--color-unknown-696cee:\x20105,\x20108,\x20238;\x20--color-unknown-7c0000:\x20124,\x200,\x200;\x20--color-unknown-89e219:\x20137,\x20226,\x2025;\x20--color-unknown-935051:\x20147,\x2080,\x2081;\x20--color-unknown-959595:\x20149,\x20149,\x20149;\x20--color-unknown-a2a2a2:\x20162,\x20162,\x20162;\x20--color-unknown-a3dbeb:\x20163,\x20219,\x20235;\x20--color-unknown-a4dffb:\x20164,\x20223,\x20251;\x20--color-unknown-aaa:\x20170,\x20170,\x20170;\x20--color-unknown-d087ff:\x20208,\x20135,\x20255;\x20--color-unknown-d9d9d9:\x20217,\x20217,\x20217;\x20--color-unknown-ddd:\x20221,\x20221,\x20221;\x20--color-unknown-de8029:\x20222,\x20128,\x2041;\x20--color-unknown-e3e3e3:\x20227,\x20227,\x20227;\x20--color-unknown-e4ffff:\x20228,\x20255,\x20255;\x20--color-unknown-ed8c01:\x20237,\x20140,\x201;\x20--color-unknown-f3484e:\x20243,\x2072,\x2078;\x20--color-unknown-f4fafe:\x20244,\x20250,\x20254;\x20--color-unknown-fbdec5:\x20251,\x20222,\x20197;\x20--color-unknown-ffc700:\x20255,\x20199,\x200;\x20--color-unknown-fff2aa:\x20255,\x20242,\x20170;\x20--color-unknown-fffbef:\x20255,\x20251,\x20239;'];
                document[_0x4ce962(0x25c)]['setAttribute'](_0x4ce962(0x317), _0x30c5c6),
                document[_0x4ce962(0x25c)]['setAttribute'](_0x4ce962(0x21a), _0x8175cd);
                let _0x1b80e2 = _0x5d9e1d('duo.darkMode');
                for (let _0xcf26f9 in _0x1b80e2)
                    _0x1b80e2[_0xcf26f9] = _0x428239;
                localStorage[_0x4ce962(0xeb)]('duo.darkMode', JSON[_0x4ce962(0x266)](_0x1b80e2)),
                _0x4be9a7(this['isDarkMode']);
            }
            ),
            this['autoGetX2Wrapper'] = document[_0x42a3ef(0x378)]('div'),
            this[_0x42a3ef(0x1e2)]['className'] = _0x42a3ef(0x35e),
            this[_0x42a3ef(0x1e2)][_0x42a3ef(0x21a)] = _0x42a3ef(0x188) + _0x4e8381(_0x42a3ef(0x2eb)) + '\x22';
            let _0x6633c6 = _0x4e8381(_0x42a3ef(0xff));
            this['autoduoCreateSwitch'](_0x6633c6, this['autoGetX2Wrapper'], this['isAutoGetX2'], _0xe3d369=>{
                const _0x1bc77a = _0x42a3ef;
                if (this[_0x1bc77a(0x1e2)][_0x1bc77a(0x250)]) {
                    this[_0x1bc77a(0x289)]();
                    return;
                }
                !this[_0x1bc77a(0x323)] && (this[_0x1bc77a(0x2cd)] = !this[_0x1bc77a(0x2cd)],
                this[_0x1bc77a(0x2cd)] ? this[_0x1bc77a(0x354)]() : this[_0x1bc77a(0x2ec)]());
            }
            ),
            this[_0x42a3ef(0x140)] = document[_0x42a3ef(0x378)]('p'),
            Object[_0x42a3ef(0x2ef)](this[_0x42a3ef(0x140)], {
                'className': _0x42a3ef(0x393),
                'innerText': _0x4e8381('text80')
            }),
            this[_0x42a3ef(0x129)] = this[_0x42a3ef(0x140)][_0x42a3ef(0x1a4)](),
            this[_0x42a3ef(0x129)]['innerText'] = _0x4e8381(_0x42a3ef(0x3a5)),
            this['isAutoGetX2'] && this[_0x42a3ef(0x29c)][_0x42a3ef(0x1dc)][_0x42a3ef(0x142)](_0x42a3ef(0x2a0)),
            this[_0x42a3ef(0x1da)] = document['createElement'](_0x42a3ef(0x39c)),
            this[_0x42a3ef(0x1da)]['className'] = _0x42a3ef(0x243),
            this[_0x42a3ef(0x1da)][_0x42a3ef(0x23c)](this[_0x42a3ef(0xde)], this[_0x42a3ef(0x207)], this[_0x42a3ef(0x116)], this[_0x42a3ef(0x2fb)]);
        }
        ;
        [_0x285988(0x2fc)] = function() {
            const _0x3accba = _0x285988;
            this[_0x3accba(0x1c2)] = document[_0x3accba(0x378)]('button'),
            Object[_0x3accba(0x2ef)](this[_0x3accba(0x1c2)], {
                'className': _0x3accba(0x2f8),
                'innerText': _0x4e8381(_0x3accba(0x273))
            }),
            this[_0x3accba(0x1c2)][_0x3accba(0x144)](_0x3accba(0x27f), ()=>{
                const _0x3a8a47 = _0x3accba;
                this[_0x3a8a47(0x175)]['contains'](this[_0x3a8a47(0x242)]) || this[_0x3a8a47(0x175)]['appendChild'](this[_0x3a8a47(0x242)]);
            }
            ),
            this[_0x3accba(0x278)] = document[_0x3accba(0x378)](_0x3accba(0x1d9)),
            Object[_0x3accba(0x2ef)](this['closeSettingBtn'], {
                'className': _0x3accba(0x2c9),
                'innerText': _0x4e8381(_0x3accba(0x3a7))
            }),
            this[_0x3accba(0x278)][_0x3accba(0x144)](_0x3accba(0x27f), ()=>{
                const _0x23cf07 = _0x3accba;
                this[_0x23cf07(0x175)][_0x23cf07(0x2c2)](this[_0x23cf07(0x242)]) && this[_0x23cf07(0x175)][_0x23cf07(0x302)](this['settingOverlay']);
            }
            ),
            this[_0x3accba(0x242)] = document['createElement'](_0x3accba(0x39c)),
            Object['assign'](this[_0x3accba(0x242)], {
                'className': _0x3accba(0x327),
                'innerHTML': _0x3accba(0x1c5) + _0x4e8381(_0x3accba(0x273)) + '</h3>\x0a\x09\x09\x09\x09'
            }),
            this[_0x3accba(0x36f)] = document[_0x3accba(0x378)](_0x3accba(0x39c)),
            this[_0x3accba(0x36f)][_0x3accba(0x169)] = _0x3accba(0x1cc),
            this[_0x3accba(0x36f)]['append'](this[_0x3accba(0x104)], this['animationOffWrapper'], this[_0x3accba(0x310)], this[_0x3accba(0x31d)], this[_0x3accba(0x1e2)]),
            this['settingOverlay']['append'](this[_0x3accba(0x36f)], this[_0x3accba(0x278)]);
        }
        ;
        [_0x285988(0x365)] = function() {
            const _0x2977f5 = _0x285988;
            this['keyContainer'] = document['createElement'](_0x2977f5(0x39c)),
            this[_0x2977f5(0x397)]['className'] = _0x2977f5(0x321),
            this['keyContainer'][_0x2977f5(0x23c)](this['keyForm'], this[_0x2977f5(0x283)], this[_0x2977f5(0xe7)], this[_0x2977f5(0x257)], this['buyKeyBtn']),
            this[_0x2977f5(0x367)] = document[_0x2977f5(0x378)](_0x2977f5(0x39c)),
            this[_0x2977f5(0x367)][_0x2977f5(0x169)] = _0x2977f5(0x392),
            this[_0x2977f5(0x367)]['append'](this[_0x2977f5(0x17a)], this[_0x2977f5(0x1da)], this['settingBtn'], this[_0x2977f5(0x29c)], this[_0x2977f5(0x29d)], this[_0x2977f5(0x1cb)]),
            this[_0x2977f5(0x326)] = document[_0x2977f5(0x378)]('div'),
            this['overlayContainer'][_0x2977f5(0x169)] = _0x2977f5(0x28f),
            this['controlContainer'] = document['createElement'](_0x2977f5(0x39c)),
            this[_0x2977f5(0x175)][_0x2977f5(0x169)] = _0x2977f5(0x18c),
            this[_0x2977f5(0x175)]['append'](this[_0x2977f5(0x397)], this[_0x2977f5(0x3b6)]),
            this[_0x2977f5(0x161)] = document['createElement'](_0x2977f5(0x39c)),
            this[_0x2977f5(0x161)][_0x2977f5(0x169)] = _0x2977f5(0x1b5),
            this['bubbleContainer'] = document['createElement'](_0x2977f5(0x39c)),
            this[_0x2977f5(0x329)][_0x2977f5(0x169)] = _0x2977f5(0x29e),
            this['bubbleContainer'][_0x2977f5(0x23c)](this[_0x2977f5(0x2c7)], this[_0x2977f5(0x203)]),
            document['body']['append'](this[_0x2977f5(0x175)], this['autoduoLabelWrapper'], this['bubbleContainer']);
        }
        ;
        [_0x285988(0xf9)] = function() {
            const _0x22f564 = _0x285988;
            this['keyForm'] = document[_0x22f564(0x378)](_0x22f564(0x322)),
            this['keyBtn'] = document[_0x22f564(0x378)]('button'),
            Object[_0x22f564(0x2ef)](this['keyBtn'], {
                'className': _0x22f564(0x1ce),
                'innerText': _0x4e8381(_0x22f564(0x37c))
            }),
            this[_0x22f564(0x17d)] = document[_0x22f564(0x378)]('input'),
            Object['assign'](this['keyInput'], {
                'className': _0x22f564(0x29f),
                'placeholder': _0x4e8381('text1'),
                'autocomplete': _0x22f564(0x35f)
            }),
            this['keyForm']['append'](this[_0x22f564(0x17d)], this[_0x22f564(0x31c)]),
            this[_0x22f564(0x2d7)] = document['createElement']('div'),
            Object[_0x22f564(0x2ef)](this[_0x22f564(0x2d7)], {
                'className': _0x22f564(0xf7),
                'innerHTML': _0x22f564(0x284)
            }),
            this[_0x22f564(0x283)] = document[_0x22f564(0x378)]('div'),
            Object[_0x22f564(0x2ef)](this[_0x22f564(0x283)], {
                'className': _0x22f564(0x10e),
                'innerText': _0x4e8381(_0x22f564(0x315))
            }),
            this['getLinkBtn'] = document[_0x22f564(0x378)]('a'),
            Object['assign'](this[_0x22f564(0xe7)], {
                'className': _0x22f564(0x10d),
                'innerText': _0x4e8381('text4'),
                'target': '_blank'
            }),
            this['guideGetLinkBtn'] = document[_0x22f564(0x378)]('a'),
            Object[_0x22f564(0x2ef)](this['guideGetLinkBtn'], {
                'className': _0x22f564(0x35b),
                'innerText': _0x4e8381('text5'),
                'target': _0x22f564(0x2ba)
            }),
            this[_0x22f564(0x3b2)] = document['createElement']('a'),
            Object[_0x22f564(0x2ef)](this[_0x22f564(0x3b2)], {
                'className': _0x22f564(0x270),
                'innerText': _0x4e8381('text6'),
                'target': '_blank'
            }),
            this[_0x22f564(0x17d)]['onkeydown'] = _0x480c75=>_0x480c75[_0x22f564(0x33f)](),
            this[_0x22f564(0x2d7)][_0x22f564(0x160)] = _0x1c1a32=>_0x1c1a32[_0x22f564(0x33f)](),
            this[_0x22f564(0x14f)][_0x22f564(0x144)](_0x22f564(0x2f4), _0x364a73=>{
                const _0x530a98 = _0x22f564;
                if (_0x364a73[_0x530a98(0x173)](),
                this['isFetching'])
                    return;
                let _0x596037 = this[_0x530a98(0x17d)][_0x530a98(0x2a1)]['trim']();
                _0x596037 && this[_0x530a98(0x1d2)](_0x596037, !0x0, 0x3e8);
            }
            ),
            this['guideBtn'][_0x22f564(0x144)](_0x22f564(0x27f), this[_0x22f564(0x1ac)]);
        }
        ;
        [_0x285988(0x1d2)] = function(_0x70aaf9, _0xb0e081=!0x1, _0x4dc0aa=0x0) {
            const _0x381771 = _0x285988;
            if (!_0x70aaf9 && !(_0x70aaf9 = _0x44393a(_0x381771(0x10f)))) {
                this[_0x381771(0x132)]();
                return;
            }
            this[_0x381771(0x19d)](!0x0);
            let _0x49a57a = new FormData();
            _0x49a57a['append'](_0x381771(0x10f), _0x70aaf9);
            try {
                let _0x4218fa = JSON[_0x381771(0x211)](localStorage[_0x381771(0xdf)](_0x381771(0x133)));
                _0x4218fa && _0x49a57a['append'](_0x381771(0x106), btoa(_0x4218fa[_0x381771(0x167)]));
            } catch (_0x5eb6ce) {}
            setTimeout(()=>{
                const _0x16b204 = _0x381771;
                fetch(this[_0x16b204(0x341)] + _0x16b204(0x1f9), {
                    'method': _0x16b204(0x201),
                    'body': _0x49a57a
                })['then'](_0x1c9636=>_0x1c9636?.[_0x16b204(0x313)]())[_0x16b204(0x103)](_0x1a39bf=>{
                    const _0x4954b4 = _0x16b204;
                    switch (_0x1a39bf?.[_0x4954b4(0x1ed)]) {
                    case 0xc8:
                        let _0x1a0e95 = _0x1a39bf['data'];
                        this[_0x4954b4(0x27c)](_0x1a0e95),
                        _0x1a57c9('authenData', _0x1a0e95),
                        _0xb0e081 && _0x2979c9(_0x4954b4(0x10f), _0x70aaf9);
                        break;
                    case 0x190:
                        if (_0xb0e081)
                            alert(_0x4e8381(_0x4954b4(0x2fe)));
                        else {
                            if (_0x2979c9(_0x4954b4(0x10f), null),
                            this[_0x4954b4(0x132)]())
                                return;
                            this[_0x4954b4(0x316)] && (_0x1a57c9(_0x4954b4(0x316), !0x1),
                            setTimeout(()=>{
                                const _0x598889 = _0x4954b4;
                                alert(_0x4e8381(_0x598889(0x176)));
                            }
                            , 0x7d0));
                        }
                        break;
                    case 0x191:
                        alert(_0x4e8381(_0x4954b4(0x2ce)));
                        break;
                    default:
                        alert(_0x4e8381('text9'));
                    }
                }
                )[_0x16b204(0x186)](()=>{
                    this['showKeyBtnLoading'](!0x1);
                }
                );
            }
            , _0x4dc0aa);
        }
        ;
        [_0x285988(0x27c)] = function(_0x4cebf6) {
            const _0xfadecf = _0x285988;
            let _0x4173e2 = this[_0xfadecf(0x2e4)](_0x4cebf6);
            if (null === _0x4173e2)
                return _0x1a57c9(_0xfadecf(0x27b), null),
                this[_0xfadecf(0x191)](_0x4e8381('text10'));
            let {keyData: _0x1fc9e6, lessGenealogy: _0x555905} = _0x4173e2
              , _0x119fac = new Date(_0x1fc9e6[_0xfadecf(0x1f7)])
              , _0x369b37 = _0x119fac[_0xfadecf(0x2c6)]();
            if (_0x369b37 <= Date[_0xfadecf(0x189)]()) {
                this[_0xfadecf(0x122)]();
                return;
            }
            this['keyTimeOut'] = _0x369b37,
            _0x1fc9e6[_0xfadecf(0x1f7)] = _0x480aa7(_0x119fac),
            this['handleReadyAuto'](_0x555905, _0x1fc9e6);
        }
        ;
        ['fetchGeneral'] = function() {
            const _0x2ba3cd = _0x285988;
            fetch(this[_0x2ba3cd(0x341)] + _0x2ba3cd(0x334))[_0x2ba3cd(0x103)](_0x264a71=>_0x264a71?.[_0x2ba3cd(0x313)]())['then'](_0x36f486=>{
                const _0x4523e7 = _0x2ba3cd;
                if (_0x36f486?.[_0x4523e7(0x1ed)] === 0xc8) {
                    let _0x1089a6 = _0x36f486[_0x4523e7(0x1d0)];
                    _0x1a57c9('generalData', _0x1089a6),
                    this[_0x4523e7(0x386)](_0x1089a6);
                }
            }
            );
        }
        ;
        ['setGeneral'] = function(_0xeb941) {
            const _0x29278f = _0x285988;
            let _0x22f51a = this['autoduoDecode'](_0xeb941);
            if (null === _0x22f51a)
                return _0x1a57c9(_0x29278f(0x2d4), null),
                this['autoduoError'](_0x4e8381(_0x29278f(0x2f5)));
            let {getKeyUrl: _0x408343, buyKeyUrl: _0x1ac1e3, guideGetKeyUrl: _0x56801e, feedbackUrl: _0x2ded4f, sd: _0x1af75d} = _0x22f51a;
            this[_0x29278f(0xe7)][_0x29278f(0x252)] = _0x408343,
            this[_0x29278f(0x257)][_0x29278f(0x252)] = _0x56801e,
            this[_0x29278f(0x3b2)][_0x29278f(0x252)] = _0x1ac1e3,
            this['feedbackBtn'][_0x29278f(0x252)] = _0x2ded4f,
            this[_0x29278f(0x1fe)](_0x1af75d);
        }
        ;
        [_0x285988(0x1fe)] = function(_0xaa13f6) {
            const _0xdce397 = _0x285988;
            [this[_0xdce397(0x18e)],this['goChallengeTime'],this[_0xdce397(0x26a)]] = _0xaa13f6,
            this['isSafeMode'] && (this[_0xdce397(0x1de)] = this[_0xdce397(0x26a)]),
            this[_0xdce397(0xe9)] && this['handleTurboModeOn']();
        }
        ;
        [_0x285988(0x1a5)] = function() {
            const _0x52b314 = _0x285988;
            fetch(this['apiUrl'] + _0x52b314(0x123))[_0x52b314(0x103)](_0x1654b9=>_0x1654b9?.[_0x52b314(0x313)]())['then'](_0x529804=>{
                const _0x2cc992 = _0x52b314;
                if (_0x529804?.[_0x2cc992(0x1ed)] === 0xc8) {
                    let {notifyVersion: _0x1f8b81, notifyContent: _0x14ea16} = _0x529804[_0x2cc992(0x1d0)][0x0];
                    _0x1a57c9({
                        'isNewNotify': this[_0x2cc992(0x238)] = +_0x1f8b81 > this['notifyVersion'],
                        'rmNotifyVersion': this[_0x2cc992(0x21e)] = +_0x1f8b81,
                        'rmNotifyContent': this[_0x2cc992(0x3b4)] = _0x14ea16[_0x2cc992(0x3b7)]('\x5cn', '\x0a')
                    }),
                    this[_0x2cc992(0x2b1)]();
                }
            }
            );
        }
        ;
        [_0x285988(0x2b1)] = function() {
            const _0x37c8f9 = _0x285988;
            this[_0x37c8f9(0x21e)] && (this[_0x37c8f9(0x238)] && this['notifyBubble'][_0x37c8f9(0x1dc)][_0x37c8f9(0x142)](_0x37c8f9(0x23d)),
            this['notifyBubble'][_0x37c8f9(0x144)]('click', ()=>{
                const _0x1a3d5a = _0x37c8f9;
                this[_0x1a3d5a(0x238)] && (this['notifyBubble'][_0x1a3d5a(0x1dc)]['remove']('new'),
                _0x1a57c9(_0x1a3d5a(0x238), this[_0x1a3d5a(0x238)] = !0x1),
                _0x2979c9(_0x1a3d5a(0x15b), this[_0x1a3d5a(0x21e)])),
                window[_0x1a3d5a(0x22f)](this['rmNotifyContent']);
            }
            ));
        }
        ;
        ['handleKeyMarkup'] = function(_0x4912f8, _0x5b00fb) {
            const _0x1102ac = _0x285988;
            let _0x5eaa81, _0x4d4442;
            'event' === _0x4912f8 ? (_0x5eaa81 = '<b\x20class=\x27vip-type-listening\x20event\x27>ADMIN\x20PANEL</b>',
            _0x4d4442 = _0x1102ac(0x21d) + _0x5b00fb + '</b>',
            this[_0x1102ac(0x227)]['classList'][_0x1102ac(0x142)](_0x1102ac(0x223)),
            this[_0x1102ac(0x175)]['classList'][_0x1102ac(0x142)](_0x1102ac(0x223)),
            this[_0x1102ac(0x2af)][_0x1102ac(0x1dc)][_0x1102ac(0x142)](_0x1102ac(0x223))) : (_0x5eaa81 = _0x1102ac(0x16d),
            _0x4d4442 = _0x1102ac(0x237) + _0x5b00fb + _0x1102ac(0x2be)),
            this[_0x1102ac(0x1c8)][_0x1102ac(0x359)] = _0x5eaa81,
            this[_0x1102ac(0x2d6)][_0x1102ac(0x359)] = _0x4d4442;
        }
        ;
        ['handleReadyAuto'] = function(_0x356091, _0x4df4e8) {
            const _0x54d640 = _0x285988;
            let {type: _0x4d21fe, expiredAt: _0x4df8d9} = _0x4df4e8;
            this['handleKeyMarkup'](_0x4d21fe, _0x4df8d9),
            this['lessGenealogy'] = _0x356091,
            this[_0x54d640(0x200)] = !0x0,
            this[_0x54d640(0x175)][_0x54d640(0x220)](this['autoContainer'], this[_0x54d640(0x397)]);
        }
        ;
        [_0x285988(0x122)] = function() {
            const _0x440edf = _0x285988;
            _0x1a57c9({
                'authenData': null,
                'isKeyTimeOut': !0x0
            }),
            this[_0x440edf(0x32e)](),
            this['handleReload']();
        }
        ;
        [_0x285988(0x132)] = function() {
            const _0x400370 = _0x285988;
            if (!this[_0x400370(0x32a)] || !this[_0x400370(0x3aa)] || !this[_0x400370(0x12b)])
                return !0x1;
            let _0x145e68 = new Date(this['freeKeyTime'])[_0x400370(0x2c6)]();
            return !(_0x145e68 <= Date['now']()) && (this[_0x400370(0x32a)] = !0x1,
            this[_0x400370(0x1d2)](this[_0x400370(0x12b)]),
            !0x0);
        }
        ;
        [_0x285988(0x139)] = function(_0x17ab7f=!0x1) {
            const _0x3833cb = _0x285988;
            this[_0x3833cb(0x156)] ? (this[_0x3833cb(0x227)][_0x3833cb(0x1dc)][_0x3833cb(0x11e)](_0x3833cb(0x1e9)),
            document[_0x3833cb(0x37b)][_0x3833cb(0x23c)](this[_0x3833cb(0x175)], this[_0x3833cb(0x2af)], this['bubbleContainer'])) : (this[_0x3833cb(0x227)]['classList'][_0x3833cb(0x142)](_0x3833cb(0x1e9)),
            this[_0x3833cb(0x175)][_0x3833cb(0x11e)](),
            this[_0x3833cb(0x2af)][_0x3833cb(0x11e)](),
            this[_0x3833cb(0x329)][_0x3833cb(0x11e)](),
            this['controlContainer'][_0x3833cb(0x2c2)](this[_0x3833cb(0x242)]) && this[_0x3833cb(0x175)]['removeChild'](this[_0x3833cb(0x242)])),
            _0x17ab7f && (_0x1a57c9(_0x3833cb(0x156), this[_0x3833cb(0x156)]),
            this[_0x3833cb(0x175)]['classList'][_0x3833cb(0x2c2)](_0x3833cb(0x38f)) || this[_0x3833cb(0x175)][_0x3833cb(0x1dc)]['add'](_0x3833cb(0x38f)));
        }
        ;
        ['handleAnimationOff'] = function(_0x49c191=!0x1) {
            const _0x11a1be = _0x285988;
            this[_0x11a1be(0x38a)] ? document[_0x11a1be(0x36c)]['appendChild'](this[_0x11a1be(0x1cf)]) : document[_0x11a1be(0x36c)][_0x11a1be(0x302)](this[_0x11a1be(0x1cf)]),
            _0x49c191 && _0x1a57c9(_0x11a1be(0x38a), this[_0x11a1be(0x38a)]);
        }
        ;
        [_0x285988(0x228)] = function() {
            const _0x4d8d9a = _0x285988;
            this['isTurboMode'] && this[_0x4d8d9a(0x245)](),
            this[_0x4d8d9a(0xde)][_0x4d8d9a(0x33d)](this[_0x4d8d9a(0x183)](!0x0));
        }
        ;
        [_0x285988(0x171)] = function() {
            const _0x3c8add = _0x285988;
            this['safeModeWrapper']['setAutoduoSwitch'](this[_0x3c8add(0x183)](!0x1));
        }
        ;
        [_0x285988(0x34d)] = function(_0x31b9f6=!0x1) {
            const _0x22cffe = _0x285988;
            if (_0x31b9f6) {
                let _0x4b1e1e = window[_0x22cffe(0x127)](_0x4e8381('text40'));
                if (!_0x4b1e1e)
                    return;
            }
            this['isSafeMode'] && this[_0x22cffe(0x171)](),
            this[_0x22cffe(0x114)] = this[_0x22cffe(0x18e)],
            this[_0x22cffe(0x18e)] = 0x0,
            _0x1a57c9(_0x22cffe(0xe9), !0x0),
            this[_0x22cffe(0x29c)][_0x22cffe(0x1dc)][_0x22cffe(0x142)](_0x22cffe(0xe4)),
            this[_0x22cffe(0x207)]['setAutoduoSwitch'](this[_0x22cffe(0xe9)] = !0x0);
        }
        ;
        [_0x285988(0x245)] = function() {
            const _0x3cf95b = _0x285988;
            this[_0x3cf95b(0x18e)] = this[_0x3cf95b(0x114)],
            _0x1a57c9(_0x3cf95b(0xe9), !0x1),
            this[_0x3cf95b(0x29c)]['classList'][_0x3cf95b(0x11e)](_0x3cf95b(0xe4)),
            this[_0x3cf95b(0x207)]['setAutoduoSwitch'](this[_0x3cf95b(0xe9)] = !0x1);
        }
        ;
        [_0x285988(0x2ac)] = function(_0x4db92b=!0x1) {
            const _0x4f4076 = _0x285988;
            this['isTargetMode'] = !0x0,
            this['targetModeLabel'][_0x4f4076(0x119)] = this['exp'] + _0x4f4076(0x18a) + this[_0x4f4076(0x30f)] + _0x4f4076(0x39a),
            this[_0x4f4076(0x161)][_0x4f4076(0x3b1)](this[_0x4f4076(0x30d)]),
            this['targetModeWrapper'][_0x4f4076(0x33d)](!0x0),
            _0x4db92b && _0x1a57c9({
                'isTargetMode': !0x0,
                'targetModeValue': this['targetModeValue']
            });
        }
        ;
        [_0x285988(0x16e)] = function(_0x2cc9f1=!0x1) {
            const _0x4e1d4b = _0x285988;
            this[_0x4e1d4b(0x390)] = !0x1,
            this[_0x4e1d4b(0x161)]['removeChild'](this['targetModeLabel']),
            this['targetModeWrapper'][_0x4e1d4b(0x33d)](!0x1),
            _0x2cc9f1 && this[_0x4e1d4b(0x32e)](),
            _0x1a57c9('isTargetMode', !0x1);
        }
        ;
        [_0x285988(0x1b3)] = function(_0x38ac7=!0x1) {
            const _0x432a75 = _0x285988;
            !this[_0x432a75(0x394)] && !this['isSolving'] && (this[_0x432a75(0x161)][_0x432a75(0x3b1)](this[_0x432a75(0x195)]),
            this[_0x432a75(0x2fb)][_0x432a75(0x33d)](!0x0),
            this['updatePassModeState'](),
            _0x38ac7 && _0x1a57c9({
                'isPassMode': !0x0,
                'passModeValue': this[_0x432a75(0x320)]
            }),
            this['startPassMode']());
        }
        ;
        [_0x285988(0x2ee)] = function() {
            const _0xcf36d4 = _0x285988;
            this[_0xcf36d4(0x2ea)] && (this[_0xcf36d4(0x1f6)] && _0x1a57c9('isPassLegend', this[_0xcf36d4(0x1f6)] = !0x1),
            this[_0xcf36d4(0x161)][_0xcf36d4(0x302)](this['passModeLabel']),
            this['passModeWrapper']['setAutoduoSwitch'](!0x1),
            this['stopPassMode']());
        }
        ;
        [_0x285988(0x138)] = function() {
            const _0xb19038 = _0x285988;
            !this[_0xb19038(0x394)] && !this[_0xb19038(0x209)] && (this[_0xb19038(0x323)] = !0x0,
            _0x1a57c9(_0xb19038(0x323), this['isAutoFarmXP']),
            this['startFarmXP']());
        }
        ;
        [_0x285988(0x19e)] = function() {
            const _0x271d56 = _0x285988;
            this['isAutoFarmXP'] && (this[_0x271d56(0x323)] = !0x1,
            _0x1a57c9(_0x271d56(0x323), this[_0x271d56(0x323)]),
            this[_0x271d56(0x19f)]());
        }
        ;
        ['handleFarmingLocationOn'] = function(_0x2281fb=!0x1) {
            const _0x1f2e45 = _0x285988;
            this[_0x1f2e45(0x18d)] = !0x0,
            this['localFarmingLocationLabel'][_0x1f2e45(0x119)] = this[_0x1f2e45(0x21c)],
            this[_0x1f2e45(0x31d)][_0x1f2e45(0x3b1)](this['localFarmingLocationLabel']),
            this[_0x1f2e45(0x29c)][_0x1f2e45(0x1dc)][_0x1f2e45(0x142)](_0x1f2e45(0x21b)),
            _0x2281fb && (this[_0x1f2e45(0x166)] = 0x0,
            _0x1a57c9({
                'isFarmingLocation': !0x0,
                'farmingLocationUrl': this[_0x1f2e45(0x21c)],
                'farmingLocationErrorCount': 0x0
            }));
        }
        ;
        [_0x285988(0x222)] = function() {
            const _0x1e3a4f = _0x285988;
            this['isFarmingLocation'] = !0x1,
            this[_0x1e3a4f(0x31d)][_0x1e3a4f(0x302)](this[_0x1e3a4f(0xfd)]),
            this[_0x1e3a4f(0x29c)][_0x1e3a4f(0x1dc)][_0x1e3a4f(0x11e)]('farming-location'),
            _0x1a57c9(_0x1e3a4f(0x18d), !0x1);
        }
        ;
        [_0x285988(0x354)] = function() {
            const _0x1b13bd = _0x285988;
            this['isAutoGetX2'] = !0x0,
            _0x1a57c9(_0x1b13bd(0x2cd), !0x0),
            this[_0x1b13bd(0x29c)]['classList'][_0x1b13bd(0x142)](_0x1b13bd(0x2a0)),
            this[_0x1b13bd(0x1e2)]['setAutoduoSwitch'](!0x0);
        }
        ;
        [_0x285988(0x2ec)] = function() {
            const _0x1aa987 = _0x285988;
            this['isAutoGetX2'] = this[_0x1aa987(0x301)] = !0x1,
            _0x1a57c9({
                'isAutoGetX2': !0x1,
                'isGettingX2': !0x1
            }),
            this[_0x1aa987(0x29c)][_0x1aa987(0x1dc)][_0x1aa987(0x11e)]('auto-x2'),
            this[_0x1aa987(0x1e2)][_0x1aa987(0x33d)](!0x1);
        }
        ;
        ['handleGetX2'] = function(_0xb3b9b=!0x1) {
            const _0x2c24fe = _0x285988;
            _0xb3b9b && (this[_0x2c24fe(0x16f)] = window[_0x2c24fe(0x2da)][_0x2c24fe(0x154)],
            this[_0x2c24fe(0x301)] = !0x0,
            _0x1a57c9({
                'prevFarmXPLocation': this[_0x2c24fe(0x16f)],
                'isGettingX2': this['isGettingX2']
            })),
            this[_0x2c24fe(0x161)][_0x2c24fe(0x3b1)](this[_0x2c24fe(0x140)]),
            this[_0x2c24fe(0x2e6)]();
        }
        ;
        [_0x285988(0x3b8)] = function() {
            const _0xdb6155 = _0x285988;
            _0x1a57c9(_0xdb6155(0x301), this[_0xdb6155(0x301)] = !0x1),
            window[_0xdb6155(0x2da)][_0xdb6155(0x154)] = this[_0xdb6155(0x16f)];
        }
        ;
        [_0x285988(0x2ed)] = function(_0x48c17a, _0x32c050=!0x1) {
            const _0x21e845 = _0x285988;
            _0x48c17a ? this[_0x21e845(0x161)][_0x21e845(0x3b1)](this['autoGetX2FailedLabel']) : this[_0x21e845(0x129)]['remove'](),
            _0x32c050 && _0x1a57c9('isGetX2Failed', this['isGetX2Failed'] = _0x48c17a);
        }
        ;
        [_0x285988(0x32d)] = function() {
            const _0x3f0258 = _0x285988;
            this[_0x3f0258(0x32e)]();
            let _0x495d4d = window[_0x3f0258(0x2da)]['pathname'];
            switch (_0x495d4d) {
            case this[_0x3f0258(0x105)]:
                let _0x2fe7e3 = document['querySelector']('[data-test=\x22quit-button\x22]');
                _0x2fe7e3 && _0x2fe7e3[_0x3f0258(0x27f)](),
                setTimeout(()=>{
                    const _0x3fabe0 = _0x3f0258;
                    let _0x3f7e16 = document[_0x3fabe0(0x28b)](_0x3fabe0(0x101));
                    _0x3f7e16 && _0x3f7e16['click']();
                }
                , this[_0x3f0258(0x18e)] + 0x1f4);
            case this['practiceHubPath']:
                setTimeout(()=>{
                    const _0x2c192f = _0x3f0258;
                    window['location'][_0x2c192f(0x181)]();
                }
                , this[_0x3f0258(0x18e)] + 0x5dc);
                break;
            default:
                window['location']['reload']();
            }
        }
        ;
        [_0x285988(0x172)] = function() {
            const _0x1b716a = _0x285988;
            if (this['autoduoDisableFeatures'](this[_0x1b716a(0x116)], this['passModeWrapper'], this[_0x1b716a(0x31d)], this[_0x1b716a(0x1e2)]),
            document['body'][_0x1b716a(0x3b1)](this[_0x1b716a(0x326)]),
            this[_0x1b716a(0x394)] = !0x0,
            this[_0x1b716a(0x29c)][_0x1b716a(0x1dc)][_0x1b716a(0x142)](_0x1b716a(0x3bd), 'running'),
            this['autoFarmBtn'][_0x1b716a(0x359)] = _0x4e8381(_0x1b716a(0x396)) + _0x1b716a(0x35c) + _0x4e8381(_0x1b716a(0x34a)) + _0x1b716a(0x251),
            this[_0x1b716a(0x301)]) {
                this[_0x1b716a(0x1c7)]();
                return;
            }
            this['isGetX2Failed'] && this['handleGetX2Failed'](!0x0),
            this[_0x1b716a(0x1c1)] = Date[_0x1b716a(0x189)](),
            this[_0x1b716a(0x330)]();
        }
        ;
        ['stopFarmXP'] = function() {
            const _0x539f7a = _0x285988;
            this[_0x539f7a(0x13b)](this[_0x539f7a(0x116)], this[_0x539f7a(0x2fb)], this[_0x539f7a(0x31d)], this['autoGetX2Wrapper']),
            document[_0x539f7a(0x37b)]['contains'](this[_0x539f7a(0x326)]) && document[_0x539f7a(0x37b)][_0x539f7a(0x302)](this['overlayContainer']),
            this[_0x539f7a(0x301)] && (_0x1a57c9(_0x539f7a(0x301), this['isGettingX2'] = !0x1),
            this[_0x539f7a(0x140)]['remove']()),
            this[_0x539f7a(0x147)] && this[_0x539f7a(0x2ed)](!0x1, !0x0),
            this[_0x539f7a(0x394)] = !0x1,
            this[_0x539f7a(0x29c)][_0x539f7a(0x1dc)]['remove']('btn-red', _0x539f7a(0x32f)),
            this[_0x539f7a(0x29c)]['innerHTML'] = _0x4e8381(_0x539f7a(0x3a4)) + '\x20<label>(' + _0x4e8381(_0x539f7a(0x34a)) + ')</label>';
        }
        ;
        [_0x285988(0x381)] = function() {
            const _0x1f3044 = _0x285988;
            !this[_0x1f3044(0x3a6)] && !this[_0x1f3044(0x209)] && !this[_0x1f3044(0x394)] && (this['autoduoDisableFeatures'](this['passModeWrapper'], this[_0x1f3044(0x29c)]),
            this[_0x1f3044(0x394)] = !0x0,
            this[_0x1f3044(0x3a6)] = !0x0,
            this[_0x1f3044(0x116)][_0x1f3044(0x33d)](!0x0),
            this[_0x1f3044(0x398)]());
        }
        ;
        [_0x285988(0x113)] = function() {
            const _0x4ec771 = _0x285988;
            this['isLegendMode'] && (this[_0x4ec771(0x13b)](this[_0x4ec771(0x2fb)], this['autoFarmBtn']),
            document[_0x4ec771(0x37b)][_0x4ec771(0x2c2)](this['overlayContainer']) && document['body'][_0x4ec771(0x302)](this['overlayContainer']),
            this[_0x4ec771(0x394)] = !0x1,
            this['isLegendMode'] = !0x1,
            this[_0x4ec771(0x116)][_0x4ec771(0x33d)](!0x1));
        }
        ;
        [_0x285988(0x20f)] = function() {
            const _0x240267 = _0x285988;
            !this[_0x240267(0x394)] && !this[_0x240267(0x209)] && !this[_0x240267(0x2ea)] && (this[_0x240267(0x2e0)](this[_0x240267(0x116)], this[_0x240267(0x29c)]),
            this[_0x240267(0x394)] = !0x0,
            this['isPassMode'] = !0x0,
            this[_0x240267(0x2e6)]());
        }
        ;
        [_0x285988(0x229)] = function() {
            const _0x41ba78 = _0x285988;
            this[_0x41ba78(0x2ea)] && (this[_0x41ba78(0x13b)](this[_0x41ba78(0x116)], this[_0x41ba78(0x29c)]),
            document[_0x41ba78(0x37b)][_0x41ba78(0x2c2)](this[_0x41ba78(0x326)]) && document['body']['removeChild'](this[_0x41ba78(0x326)]),
            this['isAuto'] = !0x1,
            this[_0x41ba78(0x2ea)] = !0x1,
            _0x1a57c9(_0x41ba78(0x2ea), !0x1));
        }
        ;
        [_0x285988(0x1eb)] = function(_0x54649a, _0x144794) {
            const _0x92fb6f = _0x285988;
            let _0x4fea6c = document[_0x92fb6f(0x378)](_0x92fb6f(0x39c));
            Object[_0x92fb6f(0x2ef)](_0x4fea6c, {
                'className': _0x92fb6f(0x187),
                'style': '--data-prefix:\x20\x22' + _0x4e8381(_0x92fb6f(0x125)) + '\x22'
            }),
            document['body']['appendChild'](_0x4fea6c);
            let _0x271eac = _0x5cc718=>{
                const _0x3930d2 = _0x92fb6f;
                if (_0x4fea6c[_0x3930d2(0x119)] = _0x5cc718 + 's',
                _0x5cc718 < 0x0) {
                    document[_0x3930d2(0x37b)][_0x3930d2(0x302)](_0x4fea6c),
                    _0x144794();
                    return;
                }
                setTimeout(()=>_0x271eac(_0x5cc718 - 0x1), 0x3e8);
            }
            ;
            _0x271eac(_0x54649a);
        }
        ;
        [_0x285988(0x2e6)] = function() {
            const _0x43a4f8 = _0x285988;
            if (!this[_0x43a4f8(0x2ea)] && this['isAutoFarmXP'] && !this[_0x43a4f8(0x2cd)] && !this['isGettingX2'])
                return;
            if (this[_0x43a4f8(0x2ea)] && this[_0x43a4f8(0x1b8)] >= this['passModeValue']) {
                setTimeout(()=>{
                    const _0x401785 = _0x43a4f8;
                    alert(_0x4e8381(_0x401785(0x108), this[_0x401785(0x320)]));
                }
                , 0x3e8),
                this[_0x43a4f8(0x2ee)]();
                return;
            }
            if (this[_0x43a4f8(0x2cd)] && this[_0x43a4f8(0x301)] && _0x6f44f2(this[_0x43a4f8(0x1d5)])) {
                this['handleGotX2']();
                return;
            }
            let _0xd5189a = window[_0x43a4f8(0x2da)][_0x43a4f8(0x154)];
            switch (_0xd5189a) {
            case this[_0x43a4f8(0x33b)]:
                this['handleLegend']();
                break;
            case this[_0x43a4f8(0x19b)]:
                if (this['openBoxReward']() || this['skipCharacterGate']())
                    return;
            default:
                if (this[_0x43a4f8(0x1f6)]) {
                    let _0x313eec = {
                        'lesson': '[src=\x22https://d35aaqx5ub95lt.cloudfront.net/images/path/icons/bfa591f6854b4de08e1656b3e8ca084f.svg\x22]',
                        'story': _0x43a4f8(0x1a1)
                    }
                      , _0x40fd05 = _0x6f44f2(_0x43a4f8(0x20a) + _0x313eec[_0x43a4f8(0x290)] + ',\x20' + _0x313eec[_0x43a4f8(0x1ff)] + ')');
                    if (_0x40fd05) {
                        this[_0x43a4f8(0x1eb)](0x3, this[_0x43a4f8(0x1fb)][_0x43a4f8(0x2de)](this, _0x40fd05));
                        break;
                    }
                }
                this[_0x43a4f8(0x1eb)](0x3, this[_0x43a4f8(0x2c4)][_0x43a4f8(0x2de)](this));
            }
        }
        ;
        [_0x285988(0x398)] = function() {
            const _0x2e150a = _0x285988;
            if (!this['isAuto'] || this['isAutoFarmXP'] && !this['isAutoGetX2'] && !this[_0x2e150a(0x301)])
                return;
            let _0x42fbc7 = _0x6f44f2(this[_0x2e150a(0x2cc)])
              , _0x33d5d9 = _0x6f44f2(this['storyWrapper']);
            if (_0x42fbc7 || _0x33d5d9) {
                document[_0x2e150a(0x37b)][_0x2e150a(0x2c2)](this[_0x2e150a(0x326)]) || document[_0x2e150a(0x37b)]['appendChild'](this[_0x2e150a(0x326)]),
                this[_0x2e150a(0x1c1)] = Date[_0x2e150a(0x189)](),
                this[_0x2e150a(0x377)](_0x42fbc7 || _0x33d5d9);
                let _0x53fcee = _0x6f44f2('img[class=\x22CenF1\x22]');
                if (_0x53fcee) {
                    setTimeout(this[_0x2e150a(0x221)][_0x2e150a(0x2de)](this), 0x3e8);
                    return;
                }
                _0x42fbc7 ? this[_0x2e150a(0x1bb)]() : this[_0x2e150a(0x180)]();
                return;
            }
            let _0xc5bc0a = _0x6f44f2(_0x2e150a(0x3ad)) || _0x6f44f2(_0x2e150a(0x37a));
            if (_0xc5bc0a) {
                if (_0xc5bc0a[_0x2e150a(0x27f)](),
                this[_0x2e150a(0x2ea)] || this[_0x2e150a(0x323)] && this[_0x2e150a(0x2cd)] && this[_0x2e150a(0x301)]) {
                    setTimeout(this[_0x2e150a(0x2e6)][_0x2e150a(0x2de)](this), 0x3e8);
                    return;
                }
                setTimeout(this[_0x2e150a(0x398)]['bind'](this), 0x3e8);
                return;
            }
            let _0x166421 = _0x6f44f2('[data-test=\x22story-start\x22]');
            if (_0x166421) {
                _0x166421[_0x2e150a(0x27f)](),
                setTimeout(this[_0x2e150a(0x398)][_0x2e150a(0x2de)](this), 0x3e8);
                return;
            }
            if (this[_0x2e150a(0x2ea)] || this[_0x2e150a(0x323)] && this[_0x2e150a(0x2cd)] && this[_0x2e150a(0x301)]) {
                if (this[_0x2e150a(0x1f6)]) {
                    let _0xecb86a = _0x6f44f2(_0x2e150a(0x2f2));
                    if (_0xecb86a) {
                        _0xecb86a['click'](),
                        setTimeout(this[_0x2e150a(0x398)][_0x2e150a(0x2de)](this), 0x7d0);
                        return;
                    }
                }
                if (this[_0x2e150a(0x2c0)]()) {
                    setTimeout(this['handlePassMode'][_0x2e150a(0x2de)](this), 0x3e8);
                    return;
                }
                if (window['location'][_0x2e150a(0x154)] === this[_0x2e150a(0x19b)]) {
                    setTimeout(this[_0x2e150a(0x2e6)][_0x2e150a(0x2de)](this), 0x7d0);
                    return;
                }
            }
            setTimeout(this['handleLegend'][_0x2e150a(0x2de)](this), 0x7d0);
        }
        ;
        ['handleLocation'] = function() {
            const _0x5a24b5 = _0x285988;
            if (!this['isAuto'])
                return;
            if (this[_0x5a24b5(0x18d)]) {
                this['handleFarmingLocationChallenge']();
                return;
            }
            let _0x1ea1b8 = window[_0x5a24b5(0x2da)]['pathname'];
            switch (_0x1ea1b8) {
            case this['practiceHubPath']:
                this['goPracticeHubChallenge']();
                break;
            case this[_0x5a24b5(0x105)]:
                this[_0x5a24b5(0x2b8)]();
                break;
            case this[_0x5a24b5(0x19b)]:
                this[_0x5a24b5(0x14a)]();
                break;
            case this[_0x5a24b5(0x309)]:
                this[_0x5a24b5(0x158)]();
                break;
            default:
                this[_0x5a24b5(0x191)](_0x4e8381(_0x5a24b5(0x121)));
            }
        }
        ;
        [_0x285988(0xdd)] = function() {
            const _0xbda52a = _0x285988;
            if (!0x1 === this[_0xbda52a(0x394)])
                return;
            let _0x441d50 = _0x6f44f2(_0xbda52a(0x136));
            if (!_0x441d50) {
                setTimeout(this[_0xbda52a(0xdd)][_0xbda52a(0x2de)](this), 0x3e8);
                return;
            }
            _0x441d50[_0xbda52a(0x27f)](),
            setTimeout(this[_0xbda52a(0x2b8)][_0xbda52a(0x2de)](this), 0x3e8);
        }
        ;
        [_0x285988(0x14a)] = function() {
            const _0x15bb5d = _0x285988;
            window[_0x15bb5d(0x2da)][_0x15bb5d(0x154)] = this[_0x15bb5d(0x309)];
        }
        ;
        [_0x285988(0x1df)] = function() {
            const _0x113274 = _0x285988;
            window[_0x113274(0x2da)]['href'] = this[_0x113274(0x21c)];
        }
        ;
        [_0x285988(0x2c4)] = function() {
            const _0x111d41 = _0x285988;
            if (window['location']['pathname'] === this[_0x111d41(0x19b)]) {
                if (this[_0x111d41(0x30b)]() || this[_0x111d41(0x340)]())
                    return;
                let _0x1a1d46 = _0x6f44f2(_0x111d41(0x11c));
                if (!_0x1a1d46) {
                    let _0x4651e2 = _0x6f44f2(_0x111d41(0x32c));
                    if (_0x4651e2) {
                        _0x4651e2[_0x111d41(0x27f)](),
                        setTimeout(this[_0x111d41(0x2c4)]['bind'](this), 0x3e8);
                        return;
                    }
                    this[_0x111d41(0x2ea)] && (this['handlePassModeOff'](),
                    setTimeout(()=>{
                        alert(_0x4e8381('text44'));
                    }
                    , 0x1f4)),
                    this['isAutoFarmXP'] && this[_0x111d41(0x2cd)] && this[_0x111d41(0x301)] && (this['handleGetX2Failed'](!0x0, !0x0),
                    this[_0x111d41(0x2ec)](),
                    this['handleGotX2']());
                    return;
                }
            }
            window[_0x111d41(0x2da)][_0x111d41(0x154)] = this[_0x111d41(0x33b)];
        }
        ;
        ['goLegendChallenge'] = function(_0x44146e) {
            const _0x518b9d = _0x285988;
            _0x44146e[_0x518b9d(0x27f)](),
            setTimeout(()=>{
                const _0x5e7a25 = _0x518b9d;
                let _0x4cf050 = _0x6f44f2(_0x5e7a25(0x170));
                _0x4cf050 ? (_0x4cf050['click'](),
                setTimeout(this[_0x5e7a25(0x398)][_0x5e7a25(0x2de)](this), 0x320)) : (_0x44146e['click'](),
                setTimeout(this[_0x5e7a25(0x2c4)][_0x5e7a25(0x2de)](this), 0x320));
            }
            , 0x320);
        }
        ;
        [_0x285988(0x2b8)] = function() {
            const _0x89b1de = _0x285988;
            if (window[_0x89b1de(0x2da)][_0x89b1de(0x154)] === this[_0x89b1de(0x1dd)]) {
                this[_0x89b1de(0xdd)]();
                return;
            }
            this[_0x89b1de(0x268)](this['handlePracticeHubChallenge'][_0x89b1de(0x2de)](this));
        }
        ;
        [_0x285988(0x158)] = function() {
            const _0x7da399 = _0x285988;
            if (window['location'][_0x7da399(0x154)] === this[_0x7da399(0x19b)]) {
                setTimeout(this['goPracticeChallenge']['bind'](this), 0x3e8);
                return;
            }
            this[_0x7da399(0x268)](this['handlePracticeChallenge'][_0x7da399(0x2de)](this));
        }
        ;
        [_0x285988(0x1a7)] = function() {
            const _0x1cc62d = _0x285988;
            if (this[_0x1cc62d(0x166)] >= 0x4) {
                this[_0x1cc62d(0x19e)](),
                setTimeout(()=>{
                    const _0x30ea16 = _0x1cc62d;
                    window[_0x30ea16(0x22f)](_0x4e8381(_0x30ea16(0x26f)));
                }
                , 0x1f4);
                return;
            }
            if (window[_0x1cc62d(0x2da)][_0x1cc62d(0x252)] !== this[_0x1cc62d(0x21c)]) {
                _0x1a57c9(_0x1cc62d(0x166), ++this[_0x1cc62d(0x166)]),
                this['goFarmingLocationChallenge']();
                return;
            }
            if (_0x6f44f2(this[_0x1cc62d(0x1d5)])) {
                this[_0x1cc62d(0x1df)]();
                return;
            }
            let _0x47d912 = _0x6f44f2(_0x1cc62d(0x31f)) || _0x6f44f2(this[_0x1cc62d(0x256)]);
            if (_0x47d912) {
                _0x47d912['click'](),
                setTimeout(()=>{
                    const _0x5c136c = _0x1cc62d;
                    this['handleAutoFarmChallengeGeneral'](this[_0x5c136c(0x1a7)][_0x5c136c(0x2de)](this), _0x5c136c(0x1ff));
                }
                , 0x320);
                return;
            }
            this[_0x1cc62d(0x268)](this[_0x1cc62d(0x1a7)]['bind'](this));
        }
        ;
        [_0x285988(0x268)] = function(_0x14c1e7=()=>{}
        , _0x52b323='lesson') {
            const _0x7d2572 = _0x285988;
            if (!this[_0x7d2572(0x394)])
                return;
            let _0x2ab23a = _0x7d2572(0x290) === _0x52b323 ? _0x6f44f2(this[_0x7d2572(0x2cc)]) : _0x6f44f2(this[_0x7d2572(0x256)]);
            if (_0x2ab23a) {
                this['isFarmingLocation'] && (this[_0x7d2572(0x166)] = 0x0),
                this[_0x7d2572(0x377)](_0x2ab23a),
                'lesson' === _0x52b323 ? this['nextQuestion']() : this['continueStory']();
                return;
            }
            let _0x2f366e = _0x52b323 = _0x6f44f2(_0x7d2572(0x335));
            if (_0x2f366e) {
                this[_0x7d2572(0x1bb)]();
                return;
            }
            this[_0x7d2572(0x2c0)](),
            setTimeout(_0x14c1e7, 0x3e8);
        }
        ;
        [_0x285988(0x17f)] = async function() {
            const _0x36967f = _0x285988;
            if (this[_0x36967f(0x351)] && await this[_0x36967f(0x384)](this['safeDelayTimeTemp']),
            !this['isAuto'] || this[_0x36967f(0x209)])
                return;
            let _0x1373f9 = _0x6f44f2(_0x36967f(0x205));
            if (!_0x1373f9)
                return this[_0x36967f(0x191)](_0x4e8381(_0x36967f(0x28c)));
            let _0xd6a7c5 = _0x1373f9[_0x36967f(0x11a)][_0x36967f(0x117)]?.[_0x36967f(0x314)](0xa);
            switch (this[_0x36967f(0x1a3)](!0x0),
            _0xd6a7c5) {
            case _0x36967f(0x1bc):
            case _0x36967f(0x224):
            case _0x36967f(0x325):
            case _0x36967f(0x232):
            case _0x36967f(0x293):
            case _0x36967f(0x109):
                this[_0x36967f(0x1c9)](_0xd6a7c5);
                break;
            case _0x36967f(0x347):
            case 'challenge-listenIsolation':
            case _0x36967f(0x145):
            case _0x36967f(0x294):
            case _0x36967f(0x383):
            case _0x36967f(0x33e):
            case _0x36967f(0xf0):
            case _0x36967f(0x11b):
            case _0x36967f(0x366):
            case _0x36967f(0x25a):
            case 'challenge-select':
            case _0x36967f(0x159):
            case _0x36967f(0x3ac):
            case _0x36967f(0x146):
                this['handleChallengeChoice']();
                break;
            case _0x36967f(0x2dc):
            case _0x36967f(0x355):
                this[_0x36967f(0xe9)] ? setTimeout(this[_0x36967f(0x358)]['bind'](this, _0xd6a7c5), 0x15e) : this[_0x36967f(0x358)](_0xd6a7c5);
                break;
            case _0x36967f(0x26b):
            case _0x36967f(0x37f):
            case _0x36967f(0x371):
            case _0x36967f(0x236):
            case _0x36967f(0x286):
            case 'challenge-typeClozeTable':
                this[_0x36967f(0x13a)](_0xd6a7c5);
                break;
            case _0x36967f(0x23a):
                this['handleChallengeListenMatch']();
                break;
            case _0x36967f(0x388):
                this['handleChallengeExtendedListenMatch']();
                break;
            case _0x36967f(0x17c):
                this[_0x36967f(0x249)]();
                break;
            case _0x36967f(0x1c4):
                this[_0x36967f(0x287)](_0xd6a7c5);
                break;
            case _0x36967f(0x184):
                this[_0x36967f(0x210)]();
                break;
            case 'challenge-tapComplete':
            case _0x36967f(0x10a):
            case 'challenge-tapCloze':
            case _0x36967f(0x276):
                this[_0x36967f(0x1a0)](_0xd6a7c5);
                break;
            case 'challenge-speak':
            case 'challenge-listenSpeak':
                this[_0x36967f(0x2e5)]();
                break;
            default:
                this[_0x36967f(0x191)](_0x4e8381(_0x36967f(0x331), _0xd6a7c5));
            }
        }
        ;
        [_0x285988(0x1c9)] = function(_0x2e6f24) {
            const _0x99c0c2 = _0x285988;
            if (!0x1 === this[_0x99c0c2(0x394)]) {
                this[_0x99c0c2(0x1a3)](!0x1);
                return;
            }
            let _0x43b39f = null;
            switch (_0x2e6f24) {
            case _0x99c0c2(0x224):
            case _0x99c0c2(0x1bc):
                (_0x43b39f = this[_0x99c0c2(0x1d3)](_0x99c0c2(0x2bc)))?.[_0x99c0c2(0x107)] || (_0x43b39f = this[_0x99c0c2(0x1d3)](['challengeResponseTrackingProperties', _0x99c0c2(0x2f0)])?.['split']('\x20'));
                break;
            case 'challenge-listen':
                _0x43b39f = this[_0x99c0c2(0x1d3)](_0x99c0c2(0x1f4))?.[_0x99c0c2(0x30c)]('\x20');
                break;
            case _0x99c0c2(0x1c4):
            case _0x99c0c2(0x232):
                _0x43b39f = this[_0x99c0c2(0x1d3)](['challengeResponseTrackingProperties', 'best_solution'])?.[_0x99c0c2(0x30c)]('\x20');
                break;
            case _0x99c0c2(0x293):
            case _0x99c0c2(0x109):
                let _0x34f09c = this[_0x99c0c2(0x1d3)]('choices');
                _0x43b39f = this['getData'](_0x99c0c2(0x19c))[_0x99c0c2(0x253)](_0x2665be=>{
                    let {text: _0x568334, damagePosition: _0xfca2a4} = _0x34f09c[_0x2665be];
                    return {
                        'text': _0x568334,
                        'damagePosition': _0xfca2a4['toUpperCase']()
                    };
                }
                );
            }
            if (!_0x43b39f)
                return this[_0x99c0c2(0x191)](_0x4e8381(_0x99c0c2(0x192)));
            let _0x5ab136 = _0x6f44f2(_0x99c0c2(0x376));
            if (_0x5ab136) {
                let _0x17495d = _0x6f44f2('[data-test=\x22player-toggle-keyboard\x22]');
                if (_0x17495d)
                    return _0x17495d[_0x99c0c2(0x27f)](),
                    setTimeout(this[_0x99c0c2(0x1c9)][_0x99c0c2(0x2de)](this, _0x2e6f24), 0x1f4);
                let _0x3eabdb = new Event(_0x99c0c2(0x1e4),{
                    'bubbles': !0x0
                })
                  , _0x3ef2cf = '';
                if (!this[_0x99c0c2(0x351)]) {
                    _0x3ef2cf = _0x43b39f['join']('\x20'),
                    this[_0x99c0c2(0x37e)][_0x99c0c2(0x141)](_0x5ab136, _0x3ef2cf),
                    _0x5ab136[_0x99c0c2(0x39b)](_0x3eabdb),
                    this['setSolving'](!0x1),
                    this[_0x99c0c2(0x1bb)](!0x0);
                    return;
                }
                let _0x46774f = ()=>{
                    const _0xa41db6 = _0x99c0c2;
                    setTimeout(()=>{
                        const _0x3db109 = _0x50cf;
                        if (0x0 === _0x43b39f[_0x3db109(0x107)]) {
                            this[_0x3db109(0x1a3)](!0x1),
                            this[_0x3db109(0x1bb)](!0x0);
                            return;
                        }
                        _0x3ef2cf += '\x20' + _0x43b39f[_0x3db109(0x25f)](),
                        this[_0x3db109(0x37e)][_0x3db109(0x141)](_0x5ab136, _0x3ef2cf),
                        _0x5ab136['dispatchEvent'](_0x3eabdb),
                        _0x46774f();
                    }
                    , this[_0xa41db6(0x135)]());
                }
                ;
                return void _0x46774f();
            }
            let _0x1863da = _0x19b6ea(_0x4af75b(_0x99c0c2(0x212)));
            if (0x0 === _0x1863da[_0x99c0c2(0x107)])
                return setTimeout(this[_0x99c0c2(0x1c9)]['bind'](this, _0x2e6f24), 0x1f4);
            let _0x5c4485 = _0x32b688=>{
                const _0x31c917 = _0x99c0c2;
                let _0x1d4873 = _0x1863da[_0x31c917(0x216)](_0x5323f=>_0x32b688?.[_0x31c917(0x124)] ? (_0x5323f[_0x31c917(0x1dc)][_0x31c917(0x2c2)](_0x31c917(0x1f3)) ? _0x31c917(0x13c) : _0x5323f['classList']['contains']('bfI-N') ? _0x31c917(0x11f) : _0x5323f['classList'][_0x31c917(0x2c2)](_0x31c917(0x305)) ? _0x31c917(0x1ec) : _0x31c917(0xe0)) === _0x32b688[_0x31c917(0x124)] && _0x5323f[_0x31c917(0x12a)] === _0x32b688[_0x31c917(0x137)] : _0x5323f[_0x31c917(0x12a)] === _0x32b688);
                return _0x1d4873;
            }
            ;
            if (this['isTurboMode']) {
                for (let _0xbbc3ca of _0x43b39f) {
                    let _0x2086ec = _0x5c4485(_0xbbc3ca);
                    if (-0x1 === _0x2086ec)
                        return this[_0x99c0c2(0x1b7)](_0x4e8381('text48'));
                    _0x1863da[_0x2086ec][_0x99c0c2(0x27f)](),
                    _0x1863da['splice'](_0x2086ec, 0x1);
                }
                this[_0x99c0c2(0x1a3)](!0x1),
                this[_0x99c0c2(0x1bb)](!0x0);
                return;
            }
            let _0x47ccea = ()=>{
                const _0x1bc28b = _0x99c0c2;
                setTimeout(()=>{
                    const _0x10136e = _0x50cf;
                    if (0x0 === _0x43b39f[_0x10136e(0x107)]) {
                        this[_0x10136e(0x1a3)](!0x1),
                        this[_0x10136e(0x1bb)](!0x0);
                        return;
                    }
                    let _0x26b6b5 = _0x43b39f[_0x10136e(0x25f)]()
                      , _0x17252a = _0x5c4485(_0x26b6b5);
                    if (-0x1 === _0x17252a)
                        return this[_0x10136e(0x1b7)](_0x4e8381(_0x10136e(0x336)));
                    _0x1863da[_0x17252a]['click'](),
                    _0x1863da[_0x10136e(0x360)](_0x17252a, 0x1),
                    _0x47ccea();
                }
                , this[_0x1bc28b(0x135)]());
            }
            ;
            _0x47ccea();
        }
        ;
        [_0x285988(0x1be)] = function() {
            const _0xb86a99 = _0x285988;
            if (!this[_0xb86a99(0x394)])
                return;
            let _0x46eeb3 = _0x6f44f2(_0xb86a99(0x2f3))
              , _0x49e916 = _0x19b6ea(_0x46eeb3['querySelectorAll'](_0xb86a99(0x285)))
              , _0x52abc3 = _0x49e916['splice'](_0x49e916[_0xb86a99(0x107)] / 0x2);
            this[_0xb86a99(0x2cf)](_0x49e916, _0x52abc3, ()=>{
                const _0x5654f2 = _0xb86a99;
                this[_0x5654f2(0x1a3)](!0x1),
                this['nextQuestion'](!0x0);
            }
            );
        }
        ;
        ['listenMatchHandlerGeneral'] = function(_0x392ff5, _0x31966c, _0x4fd17c=()=>{}
        ) {
            const _0x57d52d = _0x285988;
            let _0x2b0a8e = null;
            if (this[_0x57d52d(0xe9)]) {
                for (let _0x47a3c5 of _0x392ff5) {
                    _0x2b0a8e = _0x47a3c5[_0x57d52d(0x11a)][_0x57d52d(0x117)],
                    _0x47a3c5['click']();
                    let _0x351fa7 = _0x31966c[_0x57d52d(0x216)](_0x1af5f2=>_0x1af5f2[_0x57d52d(0x11a)][_0x57d52d(0x117)] === _0x2b0a8e);
                    if (-0x1 === _0x351fa7)
                        return this[_0x57d52d(0x1b7)](_0x4e8381('text49'));
                    _0x31966c[_0x351fa7][_0x57d52d(0x27f)](),
                    _0x31966c[_0x57d52d(0x360)](_0x351fa7, 0x1);
                }
                _0x4fd17c();
                return;
            }
            let _0x41d5b6 = ()=>{
                const _0x4168b4 = _0x57d52d;
                setTimeout(()=>{
                    const _0x1f17aa = _0x50cf;
                    if (0x0 === _0x31966c['length']) {
                        _0x4fd17c();
                        return;
                    }
                    if (null === _0x2b0a8e) {
                        let _0x14ec18 = _0x392ff5[_0x1f17aa(0x25f)]();
                        _0x2b0a8e = _0x14ec18[_0x1f17aa(0x11a)][_0x1f17aa(0x117)],
                        _0x14ec18['click']();
                    } else {
                        let _0x10e478 = _0x31966c[_0x1f17aa(0x216)](_0x211bb5=>_0x211bb5[_0x1f17aa(0x11a)][_0x1f17aa(0x117)] === _0x2b0a8e);
                        if (-0x1 === _0x10e478)
                            return this[_0x1f17aa(0x1b7)](_0x4e8381(_0x1f17aa(0x38d)));
                        _0x31966c[_0x10e478][_0x1f17aa(0x27f)](),
                        _0x31966c['splice'](_0x10e478, 0x1),
                        _0x2b0a8e = null;
                    }
                    _0x41d5b6();
                }
                , this[_0x4168b4(0x135)]());
            }
            ;
            _0x41d5b6();
        }
        ;
        [_0x285988(0x198)] = function() {
            const _0x54d8e7 = _0x285988;
            if (!this[_0x54d8e7(0x394)])
                return;
            let _0x170248 = _0x6f44f2(_0x54d8e7(0xf6))
              , _0x57746b = _0x19b6ea(_0x170248['querySelectorAll'](_0x54d8e7(0x212)))
              , _0x406d89 = _0x57746b[_0x54d8e7(0x107)] / 0x2
              , _0xbec04 = _0x57746b[_0x54d8e7(0x360)](_0x406d89)
              , _0x5040f2 = _0x6f44f2(_0x54d8e7(0x37a))
              , _0x2e7a12 = 0x0
              , _0x385455 = null
              , _0x382b63 = ()=>{
                _0x385455 = null,
                ++_0x2e7a12 >= _0x406d89 && (_0x2e7a12 = 0x0);
            }
              , _0x433581 = ()=>{
                setTimeout(()=>{
                    const _0x5958a6 = _0x50cf;
                    if (_0x5958a6(0x25e) === _0x5040f2[_0x5958a6(0x241)](_0x5958a6(0xef))) {
                        this[_0x5958a6(0x1a3)](!0x1),
                        this['nextQuestion']();
                        return;
                    }
                    if (null === _0x385455) {
                        let _0x14bfb3 = _0x57746b[_0x2e7a12];
                        _0x385455 = _0x14bfb3[_0x5958a6(0x11a)]['test'],
                        _0x14bfb3[_0x5958a6(0x27f)]();
                    } else {
                        let _0x1dc0e7 = _0xbec04['findIndex'](_0x1145ee=>_0x1145ee[_0x5958a6(0x11a)][_0x5958a6(0x117)] === _0x385455);
                        if (-0x1 === _0x1dc0e7) {
                            _0x382b63(),
                            _0x433581();
                            return;
                        }
                        _0xbec04[_0x1dc0e7]['click'](),
                        _0x382b63();
                    }
                    _0x433581();
                }
                , this['randomSafeDelayTime']() + 0x96);
            }
            ;
            _0x433581();
        }
        ;
        [_0x285988(0x358)] = function(_0x1cb6af) {
            const _0x19eb77 = _0x285988;
            if (!this[_0x19eb77(0x394)])
                return;
            let _0x2b475c = _0x6f44f2('[data-test*=\x22challenge\x20\x22]')
              , _0x34d7ac = _0x19b6ea(_0x2b475c[_0x19eb77(0x22d)]('[data-test=\x22challenge-tap-token-text\x22]'))
              , _0x29c2b1 = _0x34d7ac[_0x19eb77(0x360)](_0x34d7ac[_0x19eb77(0x107)] / 0x2)
              , _0x2f1091 = null;
            switch (_0x1cb6af) {
            case _0x19eb77(0x2dc):
                _0x2f1091 = this['getData'](_0x19eb77(0x17e))?.['reduce']((_0x4ff658,_0x3b159e)=>{
                    let {transliteration: _0x28d335, character: _0x3c0947} = _0x3b159e;
                    return _0x4ff658[_0x28d335] = _0x3c0947,
                    _0x4ff658;
                }
                , {});
                break;
            case _0x19eb77(0x355):
                _0x2f1091 = this[_0x19eb77(0x1d3)]('pairs')?.[_0x19eb77(0x1b2)]((_0x3f1733,_0x44a50a)=>{
                    let {fromToken: _0x345fc8, learningToken: _0x3420d5} = _0x44a50a;
                    return _0x3f1733[_0x345fc8] = _0x3420d5,
                    _0x3f1733;
                }
                , {});
            }
            if (!_0x2f1091)
                return this['autoduoError'](_0x4e8381(_0x19eb77(0x192)));
            let _0x1d9f15 = null
              , _0x174acc = ()=>{
                const _0x578f4f = _0x19eb77;
                setTimeout(()=>{
                    const _0x14af50 = _0x50cf;
                    if (0x0 === _0x29c2b1[_0x14af50(0x107)]) {
                        this[_0x14af50(0x1a3)](!0x1),
                        this[_0x14af50(0x1bb)](!0x0);
                        return;
                    }
                    if (null === _0x1d9f15) {
                        let _0x4da545 = _0x34d7ac[_0x14af50(0x25f)]();
                        _0x4da545[_0x14af50(0x27f)](),
                        _0x1d9f15 = _0x2f1091[_0x4da545[_0x14af50(0x119)]];
                    } else {
                        let _0x1d2b92 = _0x29c2b1[_0x14af50(0x216)](_0x41a2d4=>_0x41a2d4['innerText'] === _0x1d9f15);
                        if (-0x1 === _0x1d2b92)
                            return this[_0x14af50(0x1b7)](_0x4e8381(_0x14af50(0x162)));
                        _0x29c2b1[_0x1d2b92][_0x14af50(0x27f)](),
                        _0x29c2b1[_0x14af50(0x360)](_0x1d2b92, 0x1),
                        _0x1d9f15 = null;
                    }
                    _0x174acc();
                }
                , this[_0x578f4f(0x135)]());
            }
            ;
            _0x174acc();
        }
        ;
        [_0x285988(0x249)] = function() {
            const _0x2e5624 = _0x285988;
            if (!this[_0x2e5624(0x394)])
                return;
            let _0x19c2d0 = _0x6f44f2(_0x2e5624(0x26c))
              , _0xe077d9 = _0x19b6ea(_0x19c2d0[_0x2e5624(0x22d)](_0x2e5624(0x20c)))
              , _0x2995b1 = _0xe077d9[_0x2e5624(0x107)] / 0x2
              , _0x5a15e5 = _0xe077d9['splice'](_0x2995b1)
              , _0x103652 = this[_0x2e5624(0x1d3)](_0x2e5624(0x17e))?.['reduce']((_0x57cc6d,_0x3de1c4)=>{
                let {fromToken: _0x57cd63, learningToken: _0x2edd6b} = _0x3de1c4;
                return _0x57cc6d[_0x57cd63] = _0x2edd6b,
                _0x57cc6d;
            }
            , {});
            if (!_0x103652)
                return this[_0x2e5624(0x191)](_0x4e8381(_0x2e5624(0x192)));
            let _0x2f603e = _0x6f44f2(_0x2e5624(0x37a))
              , _0x135410 = 0x0
              , _0x1e6f46 = null
              , _0xeca468 = ()=>{
                _0x1e6f46 = null,
                ++_0x135410 >= _0x2995b1 && (_0x135410 = 0x0);
            }
              , _0xde4c92 = ()=>{
                setTimeout(()=>{
                    const _0x54eb2e = _0x50cf;
                    if (_0x54eb2e(0x25e) === _0x2f603e[_0x54eb2e(0x241)](_0x54eb2e(0xef))) {
                        this['setSolving'](!0x1),
                        this[_0x54eb2e(0x1bb)](!0x0);
                        return;
                    }
                    if (null === _0x1e6f46) {
                        let _0x5963b9 = _0xe077d9[_0x135410];
                        _0x1e6f46 = _0x103652[_0x5963b9[_0x54eb2e(0x12a)]],
                        _0x5963b9['click']();
                    } else {
                        let _0x2c52e4 = _0x5a15e5['findIndex'](_0x49204d=>_0x49204d[_0x54eb2e(0x12a)] === _0x1e6f46);
                        if (-0x1 === _0x2c52e4) {
                            _0xeca468(),
                            _0xde4c92();
                            return;
                        }
                        _0x5a15e5[_0x2c52e4]['click'](),
                        _0xeca468();
                    }
                    _0xde4c92();
                }
                , this['randomSafeDelayTime']() + 0x96);
            }
            ;
            _0xde4c92();
        }
        ;
        [_0x285988(0x244)] = function() {
            this['handleChallengeChoiceGeneral'](()=>{
                const _0x501b93 = _0x50cf;
                this['setSolving'](!0x1),
                this[_0x501b93(0x1bb)](!0x0);
            }
            );
        }
        ;
        [_0x285988(0x291)] = function(_0x461d07=()=>{}
        ) {
            const _0x2af799 = _0x285988;
            if (!this[_0x2af799(0x394)])
                return;
            let _0x24a8be = _0x4af75b(_0x2af799(0x362))
              , _0x4e6007 = this['getData']('correctIndex');
            if (null === _0x4e6007)
                return this[_0x2af799(0x191)](_0x4e8381('text47'));
            if (this[_0x2af799(0xe9)]) {
                _0x24a8be[_0x4e6007][_0x2af799(0x27f)](),
                _0x461d07();
                return;
            }
            setTimeout(()=>{
                const _0x5bcdbe = _0x2af799;
                _0x24a8be[_0x4e6007][_0x5bcdbe(0x27f)](),
                setTimeout(_0x461d07, this['randomSafeDelayTime']());
            }
            , this[_0x2af799(0x135)]());
        }
        ;
        [_0x285988(0x13a)] = function(_0x4dff95) {
            const _0x5aa9d7 = _0x285988;
            if (!this[_0x5aa9d7(0x394)])
                return;
            let _0x1da963 = null, _0x25f1e5;
            switch (_0x4dff95) {
            case _0x5aa9d7(0x26b):
            case _0x5aa9d7(0x37f):
            case _0x5aa9d7(0x1c4):
            case _0x5aa9d7(0x286):
                _0x25f1e5 = _0x4af75b(_0x5aa9d7(0x2d3)),
                _0x1da963 = _0x19b6ea(_0x25f1e5)[_0x5aa9d7(0x1b2)]((_0x3fef1a,_0x485e68)=>{
                    const _0xad3834 = _0x5aa9d7;
                    let _0x31cfcc = _0x485e68?.[_0xad3834(0x12a)]?.['replaceAll']('_', '');
                    return _0x31cfcc ? [..._0x3fef1a, _0x31cfcc] : _0x3fef1a;
                }
                , []);
                break;
            case _0x5aa9d7(0x236):
            case _0x5aa9d7(0x1ef):
                _0x25f1e5 = _0x4af75b(_0x5aa9d7(0x39f)),
                _0x1da963 = _0x19b6ea(_0x25f1e5)[_0x5aa9d7(0x253)](_0x2a333b=>_0x2a333b?.['textContent']?.[_0x5aa9d7(0x3b7)]('_', ''));
                break;
            case _0x5aa9d7(0x371):
                _0x1da963 = this[_0x5aa9d7(0x1d3)](_0x5aa9d7(0x1f1));
            }
            if (!_0x1da963?.['length'])
                return this[_0x5aa9d7(0x191)](_0x4e8381('text47'));
            let _0x39b5fe = _0x4af75b(_0x5aa9d7(0x15c));
            _0x39b5fe[_0x5aa9d7(0x107)] || (_0x39b5fe = _0x4af75b(_0x5aa9d7(0x2bd)));
            let _0x255987 = new Event(_0x5aa9d7(0x1e4),{
                'bubbles': !0x0
            })
              , _0x2027aa = ()=>{
                const _0xded60d = _0x5aa9d7;
                let _0x2e742a = _0x19b6ea(_0x4af75b('[data-test=\x22challenge-choice\x22]\x20[data-test=\x22challenge-judge-text\x22]'));
                _0x19b6ea(_0x39b5fe)[_0xded60d(0x2c8)]((_0x5dd902,_0x288ddd)=>{
                    const _0x1224fb = _0xded60d;
                    if (_0x2e742a[_0x1224fb(0x107)] > 0x0) {
                        let _0x53a56e = _0x2e742a['find'](_0x37e352=>_0x1da963[_0x288ddd][_0x1224fb(0x353)]()['startsWith'](_0x37e352[_0x1224fb(0x12a)][_0x1224fb(0x353)]()));
                        _0x53a56e?.[_0x1224fb(0x27f)](),
                        _0x1da963[_0x288ddd] = _0x1da963[_0x288ddd]['toLowerCase']()[_0x1224fb(0x2e1)](_0x53a56e?.[_0x1224fb(0x12a)]?.[_0x1224fb(0x353)](), '');
                    }
                    this[_0x1224fb(0x265)][_0x1224fb(0x141)](_0x5dd902, _0x1da963[_0x288ddd]),
                    _0x5dd902[_0x1224fb(0x39b)](_0x255987);
                }
                );
            }
            ;
            if (this[_0x5aa9d7(0xe9)]) {
                _0x2027aa(),
                this[_0x5aa9d7(0x1a3)](!0x1),
                this[_0x5aa9d7(0x1bb)](!0x0);
                return;
            }
            setTimeout(()=>{
                _0x2027aa(),
                setTimeout(()=>{
                    const _0x3108c6 = _0x50cf;
                    this[_0x3108c6(0x1a3)](!0x1),
                    this[_0x3108c6(0x1bb)](!0x0);
                }
                , this['randomSafeDelayTime']());
            }
            , this[_0x5aa9d7(0x135)]());
        }
        ;
        [_0x285988(0x210)] = function() {
            const _0x5aa196 = _0x285988;
            if (!this[_0x5aa196(0x394)])
                return;
            let _0x1f7833 = _0x6f44f2(_0x5aa196(0x23e))?.['textContent']
              , _0x43df28 = _0x6f44f2(_0x5aa196(0x17b))
              , _0x182ee6 = new Event(_0x5aa196(0x1e4),{
                'bubbles': !0x0
            });
            if (this[_0x5aa196(0xe9)]) {
                _0x43df28['innerText'] = _0x1f7833,
                _0x43df28[_0x5aa196(0x39b)](_0x182ee6),
                this[_0x5aa196(0x1a3)](!0x1),
                this['nextQuestion'](!0x0);
                return;
            }
            setTimeout(()=>{
                const _0x3968eb = _0x5aa196;
                _0x43df28[_0x3968eb(0x119)] = _0x1f7833,
                _0x43df28['dispatchEvent'](_0x182ee6),
                setTimeout(()=>{
                    const _0x1548c1 = _0x3968eb;
                    this['setSolving'](!0x1),
                    this[_0x1548c1(0x1bb)](!0x0);
                }
                , this[_0x3968eb(0x135)]());
            }
            , this[_0x5aa196(0x135)]());
        }
        ;
        ['handleChallengeCompleteReverseTranslation'] = function(_0x1fed7e) {
            const _0x2263fb = _0x285988;
            let _0x4378fa = _0x6f44f2(_0x2263fb(0x376));
            if (_0x4378fa) {
                this[_0x2263fb(0x1c9)](_0x1fed7e);
                return;
            }
            this[_0x2263fb(0x13a)](_0x1fed7e);
        }
        ;
        [_0x285988(0x1a0)] = function(_0x188f7d) {
            const _0x205b94 = _0x285988;
            if (!this['isAuto'])
                return;
            let _0x2f4fb3 = _0x19b6ea(_0x4af75b(_0x205b94(0x20b)))
              , _0x33a555 = null;
            switch (_0x188f7d) {
            case 'challenge-tapCompleteTable':
                _0x33a555 = (_0x305186=>{
                    const _0x31fcf9 = _0x205b94;
                    let _0x23d45b = _0x305186[_0x31fcf9(0x1b2)]((_0x209f4d,_0xed0455)=>(_0xed0455['forEach'](_0x34c8d1=>{
                        const _0x5f10c3 = _0x31fcf9;
                        let {text: _0x58ee2e, isBlank: _0x51026c} = _0x34c8d1[0x0];
                        if (_0x51026c) {
                            let _0x41df0a = _0x2f4fb3[_0x5f10c3(0x216)](_0x57a333=>_0x57a333['textContent'] === _0x58ee2e);
                            _0x209f4d[_0x5f10c3(0x379)](_0x41df0a);
                        }
                    }
                    ),
                    _0x209f4d), []);
                    return _0x23d45b;
                }
                )(this[_0x205b94(0x1d3)]('displayTableTokens'));
                break;
            case _0x205b94(0x276):
                _0x33a555 = (_0x3ab54f=>{
                    const _0x253daa = _0x205b94;
                    let _0x511076 = _0x3ab54f[_0x253daa(0x1b2)]((_0x55d7c,_0x175720)=>(_0x175720[_0x253daa(0x2c8)](_0x4a43f6=>{
                        const _0x1c103b = _0x253daa;
                        let {text: _0x57161f, damageStart: _0x336251} = _0x4a43f6[0x0];
                        if (_0x336251) {
                            let _0x3f4618 = _0x57161f[_0x1c103b(0x314)](_0x336251)
                              , _0x3add27 = _0x2f4fb3['findIndex'](_0xc0f97f=>_0xc0f97f[_0x1c103b(0x12a)] === _0x3f4618);
                            _0x55d7c[_0x1c103b(0x379)](_0x3add27);
                        }
                    }
                    ),
                    _0x55d7c), []);
                    return _0x511076;
                }
                )(this[_0x205b94(0x1d3)](_0x205b94(0x30e)));
                break;
            default:
                _0x33a555 = this[_0x205b94(0x1d3)](_0x205b94(0x19c));
            }
            if (!_0x33a555)
                return this[_0x205b94(0x191)](_0x4e8381(_0x205b94(0x192)));
            if (this[_0x205b94(0xe9)]) {
                for (let _0x509bf5 of _0x33a555)
                    _0x2f4fb3[_0x509bf5]['click']();
                this[_0x205b94(0x1a3)](!0x1),
                this['nextQuestion'](!0x0);
                return;
            }
            let _0x478349 = ()=>{
                const _0x3dfe7c = _0x205b94;
                setTimeout(()=>{
                    const _0xc23f7d = _0x50cf;
                    if (0x0 === _0x33a555[_0xc23f7d(0x107)]) {
                        this[_0xc23f7d(0x1a3)](!0x1),
                        this[_0xc23f7d(0x1bb)](!0x0);
                        return;
                    }
                    let _0x2cd9af = _0x33a555[_0xc23f7d(0x25f)]();
                    _0x2f4fb3[_0x2cd9af][_0xc23f7d(0x27f)](),
                    _0x478349();
                }
                , this[_0x3dfe7c(0x135)]());
            }
            ;
            _0x478349();
        }
        ;
        [_0x285988(0x2e5)] = function() {
            const _0x41887f = _0x285988;
            setTimeout(()=>{
                const _0x4db7a9 = _0x50cf;
                let _0x3be6f5 = _0x6f44f2('[data-test=\x22player-skip\x22]');
                if (!_0x3be6f5) {
                    setTimeout(this[_0x4db7a9(0x2e5)][_0x4db7a9(0x2de)](this), 0x190);
                    return;
                }
                _0x3be6f5[_0x4db7a9(0x27f)](),
                setTimeout(()=>{
                    const _0x12508a = _0x4db7a9;
                    this[_0x12508a(0x1a3)](!0x1),
                    this[_0x12508a(0x1bb)]();
                }
                , this[_0x4db7a9(0x135)]());
            }
            , this[_0x41887f(0x135)]());
        }
        ;
        ['nextQuestion'] = function(_0x562673=!0x1) {
            const _0x31476b = _0x285988;
            if (!this[_0x31476b(0x394)])
                return;
            if (this['isTurboMode'] && _0x562673) {
                let _0x23e78b = _0x6f44f2('[data-test=\x22player-next\x22]');
                if (_0x31476b(0x25e) === _0x23e78b[_0x31476b(0x241)](_0x31476b(0xef))) {
                    this[_0x31476b(0x1bb)]();
                    return;
                }
                let _0x47e2b4 = (_0x3ca725,_0x32dae2)=>{
                    const _0x59e314 = _0x31476b;
                    _0x59e314(0x25e) === _0x23e78b['getAttribute'](_0x59e314(0xef)) && (_0x32dae2[_0x59e314(0x11d)](),
                    this[_0x59e314(0x1bb)]());
                }
                ;
                new MutationObserver(_0x47e2b4)[_0x31476b(0x1ea)](_0x23e78b, {
                    'attributeFilter': ['aria-disabled']
                });
                return;
            }
            let _0x29307b = _0x6f44f2(_0x31476b(0x263));
            if (_0x29307b) {
                let _0x6d1844 = this[_0x31476b(0xfa)](_0x29307b);
                if (void 0x0 !== _0x6d1844) {
                    let {totalXpThisSession: _0x327cf6, hasXpBoost: _0x2a2cfb} = _0x6d1844;
                    this[_0x31476b(0x274)] += _0x327cf6,
                    this[_0x31476b(0x12f)][_0x31476b(0x119)] = this[_0x31476b(0x274)];
                    let _0x502eec = Date[_0x31476b(0x189)]()
                      , _0x14ee99 = _0x502eec - this[_0x31476b(0x1c1)];
                    if (this[_0x31476b(0x2d1)] += _0x14ee99,
                    this[_0x31476b(0x1c1)] = _0x502eec,
                    this[_0x31476b(0x39d)](),
                    _0x1a57c9({
                        'exp': this['exp'],
                        'time': this[_0x31476b(0x2d1)]
                    }),
                    this[_0x31476b(0x2ea)] && (this[_0x31476b(0x1b8)]++,
                    this['updatePassModeState']()),
                    this[_0x31476b(0x193)] <= _0x502eec) {
                        this[_0x31476b(0x122)]();
                        return;
                    }
                    if (this[_0x31476b(0x390)]) {
                        if (this[_0x31476b(0x274)] >= this[_0x31476b(0x30f)]) {
                            let _0x118c09 = this[_0x31476b(0x2ea)] ? _0x4e8381('text51', this[_0x31476b(0x1b8)], this[_0x31476b(0x320)]) : '';
                            setTimeout(()=>{
                                const _0x4fa0e7 = _0x31476b;
                                alert(_0x4e8381(_0x4fa0e7(0x194), this[_0x4fa0e7(0x274)], this['targetModeValue']) + _0x118c09);
                            }
                            , 0x7d0),
                            this['handleTargetModeOff'](!0x0);
                            let _0x20864d = _0x6f44f2('[data-test=\x22player-next\x22]');
                            _0x20864d && _0x20864d[_0x31476b(0x27f)]();
                            return;
                        }
                        this[_0x31476b(0x30d)]['innerText'] = this['exp'] + _0x31476b(0x18a) + this[_0x31476b(0x30f)] + _0x31476b(0x39a);
                    }
                    if (this[_0x31476b(0x2cd)] && this[_0x31476b(0x323)]) {
                        if (!_0x2a2cfb) {
                            this['handleGetX2'](!this[_0x31476b(0x301)]);
                            return;
                        }
                        if (this[_0x31476b(0x301)] && _0x2a2cfb) {
                            this[_0x31476b(0x3b8)]();
                            return;
                        }
                    }
                    if (this['isLegendMode']) {
                        this[_0x31476b(0x326)][_0x31476b(0x11e)](),
                        setTimeout(this[_0x31476b(0x398)][_0x31476b(0x2de)](this), 0x7d0);
                        return;
                    }
                    let _0x2a4b7c = window[_0x31476b(0x2da)][_0x31476b(0x154)];
                    if ((_0x2a4b7c === this['practicePath'] || _0x2a4b7c === this[_0x31476b(0x105)]) && (this['totalReloadTime'] += _0x14ee99) >= this[_0x31476b(0x372)]) {
                        window[_0x31476b(0x2da)][_0x31476b(0x181)]();
                        return;
                    }
                }
            }
            let _0x10c92f = _0x6f44f2('[data-test=\x22player-next\x22]');
            if (!_0x10c92f) {
                let _0x7aff64 = _0x6f44f2(_0x31476b(0x352));
                if (_0x7aff64) {
                    _0x7aff64[_0x31476b(0x27f)](),
                    setTimeout(this[_0x31476b(0x1bb)][_0x31476b(0x2de)](this), 0x1f4);
                    return;
                }
                if (this[_0x31476b(0x2ea)] || this[_0x31476b(0x301)]) {
                    setTimeout(this[_0x31476b(0x2e6)][_0x31476b(0x2de)](this), 0x3e8);
                    return;
                }
                if (this[_0x31476b(0x3a6)]) {
                    this['overlayContainer'][_0x31476b(0x11e)](),
                    setTimeout(this[_0x31476b(0x398)][_0x31476b(0x2de)](this), 0x7d0);
                    return;
                }
                setTimeout(this[_0x31476b(0x330)][_0x31476b(0x2de)](this), this[_0x31476b(0x275)]);
                return;
            }
            let _0x218c0a = _0x31476b(0x131) === _0x10c92f[_0x31476b(0x241)](_0x31476b(0xef))
              , _0x519650 = !!_0x6f44f2(_0x31476b(0x202));
            if (_0x218c0a && !_0x519650) {
                setTimeout(this[_0x31476b(0x17f)]['bind'](this), this[_0x31476b(0x18e)]);
                return;
            }
            if (_0x218c0a && _0x519650) {
                if (window[_0x31476b(0x24f)])
                    return;
                window[_0x31476b(0x24f)] = new MutationObserver((_0x1ea5af,_0x3f268b)=>{
                    const _0x3f52e = _0x31476b;
                    let _0x279057 = _0x3f52e(0x25e) === _0x10c92f[_0x3f52e(0x241)](_0x3f52e(0xef));
                    (_0x279057 || !document[_0x3f52e(0x37b)]['contains'](_0x10c92f)) && (_0x3f268b['disconnect'](),
                    window[_0x3f52e(0x24f)] = null,
                    this[_0x3f52e(0x1bb)]());
                }
                ),
                window[_0x31476b(0x24f)][_0x31476b(0x1ea)](_0x6f44f2(_0x31476b(0x380)), {
                    'childList': !0x0,
                    'subtree': !0x0
                });
                return;
            }
            _0x218c0a || _0x10c92f[_0x31476b(0x27f)](),
            setTimeout(this[_0x31476b(0x1bb)][_0x31476b(0x2de)](this), this[_0x31476b(0x18e)]);
        }
        ;
        ['continueStory'] = function() {
            const _0xe42ff6 = _0x285988;
            if (!this[_0xe42ff6(0x394)])
                return;
            let _0x172fb9 = _0x6f44f2(_0xe42ff6(0x263));
            if (_0x172fb9 && !0x0 !== _0x172fb9['wasGetExp']) {
                let _0x3887d1 = this[_0xe42ff6(0x264)](_0x172fb9);
                if (_0x3887d1) {
                    let {sessionXp: _0x1003e2, hasXpBoost: _0x4508c3} = _0x3887d1;
                    this[_0xe42ff6(0x274)] += _0x1003e2,
                    this[_0xe42ff6(0x12f)]['innerText'] = this[_0xe42ff6(0x274)];
                    let _0x391658 = Date[_0xe42ff6(0x189)]();
                    if (this[_0xe42ff6(0x2d1)] += _0x391658 - this[_0xe42ff6(0x1c1)],
                    this['renderTime'](),
                    _0x1a57c9({
                        'exp': this[_0xe42ff6(0x274)],
                        'time': this[_0xe42ff6(0x2d1)]
                    }),
                    _0x172fb9[_0xe42ff6(0x102)] = !0x0,
                    this[_0xe42ff6(0x2ea)] && (this[_0xe42ff6(0x1b8)]++,
                    this['updatePassModeState']()),
                    this[_0xe42ff6(0x193)] <= _0x391658) {
                        this[_0xe42ff6(0x122)]();
                        return;
                    }
                    if (this[_0xe42ff6(0x390)] && (this[_0xe42ff6(0x274)] >= this[_0xe42ff6(0x30f)] ? setTimeout(()=>{
                        const _0x38e653 = _0xe42ff6;
                        let _0x290eac = this[_0x38e653(0x2ea)] ? _0x4e8381(_0x38e653(0x1f2), this['passValue'], this[_0x38e653(0x320)]) : '';
                        setTimeout(()=>{
                            const _0x35b38d = _0x38e653;
                            alert(_0x4e8381('text52', this[_0x35b38d(0x274)], this[_0x35b38d(0x30f)]) + _0x290eac);
                        }
                        , 0x3e8),
                        this[_0x38e653(0x16e)](!0x0);
                    }
                    , 0x7d0) : this[_0xe42ff6(0x30d)][_0xe42ff6(0x119)] = this[_0xe42ff6(0x274)] + '\x20/\x20' + this[_0xe42ff6(0x30f)] + _0xe42ff6(0x39a)),
                    this['isAutoGetX2'] && this['isAutoFarmXP']) {
                        if (!_0x4508c3) {
                            this[_0xe42ff6(0x1c7)](!this[_0xe42ff6(0x301)]);
                            return;
                        }
                        if (this[_0xe42ff6(0x301)] && _0x4508c3) {
                            this[_0xe42ff6(0x3b8)]();
                            return;
                        }
                    }
                }
            }
            let _0x41ff2d = _0x6f44f2(_0xe42ff6(0x26e));
            if (!_0x41ff2d) {
                let _0x56944e = _0x6f44f2(_0xe42ff6(0x1ad));
                if (_0x56944e) {
                    if (_0x56944e[_0xe42ff6(0x27f)](),
                    this[_0xe42ff6(0x3a6)]) {
                        document[_0xe42ff6(0x37b)][_0xe42ff6(0x302)](this[_0xe42ff6(0x326)]),
                        setTimeout(this[_0xe42ff6(0x398)][_0xe42ff6(0x2de)](this), 0x7d0);
                        return;
                    }
                    if (this[_0xe42ff6(0x2ea)]) {
                        setTimeout(this[_0xe42ff6(0x2e6)][_0xe42ff6(0x2de)](this), 0x3e8);
                        return;
                    }
                    let _0x353a3b = ()=>{
                        setTimeout(()=>{
                            const _0x4789de = _0x50cf;
                            if (document[_0x4789de(0x37b)][_0x4789de(0x2c2)](_0x56944e)) {
                                _0x56944e[_0x4789de(0x27f)](),
                                _0x353a3b();
                                return;
                            }
                            if (this[_0x4789de(0x301)]) {
                                this[_0x4789de(0x1c7)](!0x1);
                                return;
                            }
                            setTimeout(this['handleLocation'][_0x4789de(0x2de)](this), this[_0x4789de(0x275)]);
                        }
                        , 0x320);
                    }
                    ;
                    _0x353a3b();
                    return;
                }
                return this[_0xe42ff6(0x191)](_0x4e8381(_0xe42ff6(0x22e)));
            }
            let _0x1f4294 = _0x41ff2d[_0xe42ff6(0x37d)];
            if (_0x1f4294) {
                let _0x333a32 = !!_0x6f44f2(_0xe42ff6(0x202));
                if (_0x333a32) {
                    setTimeout(this[_0xe42ff6(0x180)][_0xe42ff6(0x2de)](this), 0x7d0);
                    return;
                }
                let _0x55198b = this[_0xe42ff6(0x281)]();
                if (_0x55198b) {
                    this[_0xe42ff6(0x31b)](_0x55198b);
                    return;
                }
                setTimeout(this[_0xe42ff6(0x180)][_0xe42ff6(0x2de)](this), 0x3e8);
                return;
            }
            _0x41ff2d[_0xe42ff6(0x27f)](),
            setTimeout(this[_0xe42ff6(0x180)]['bind'](this), 0x2bc);
        }
        ;
        ['doChallengeStory'] = function(_0x3a7e09) {
            const _0x11760d = _0x285988;
            if (this[_0x11760d(0x394)])
                switch (this[_0x11760d(0x1a3)](!0x0),
                _0x3a7e09['type']) {
                case 'multiple-choice':
                case _0x11760d(0x149):
                    this[_0x11760d(0x1e6)](_0x3a7e09['correctAnswerIndex']);
                    break;
                case _0x11760d(0xfe):
                    this[_0x11760d(0x226)](_0x3a7e09[_0x11760d(0x3ab)][_0x3a7e09[_0x11760d(0x1b0)]][_0x11760d(0x137)]);
                    break;
                case _0x11760d(0x16c):
                    this[_0x11760d(0x12e)](_0x3a7e09[_0x11760d(0x3bc)]);
                    break;
                case 'arrange':
                    this[_0x11760d(0x36b)]([..._0x3a7e09[_0x11760d(0x143)]]);
                    break;
                default:
                    return this[_0x11760d(0x191)](_0x4e8381(_0x11760d(0x331), _0x3a7e09[_0x11760d(0x3b9)]));
                }
        }
        ;
        ['handleStoryMultipleChoice'] = function(_0x510489) {
            const _0x3db763 = _0x285988;
            if (!this['isAuto'])
                return;
            let _0x4efc3f = _0x4af75b(_0x3db763(0x3ba));
            setTimeout(()=>{
                const _0x5cdfb5 = _0x3db763;
                _0x4efc3f[_0x510489]['click'](),
                this[_0x5cdfb5(0x1a3)](!0x1),
                this[_0x5cdfb5(0x180)]();
            }
            , this[_0x3db763(0x135)]());
        }
        ;
        [_0x285988(0x226)] = function(_0x4da29e) {
            const _0x4a6f67 = _0x285988;
            if (!this[_0x4a6f67(0x394)])
                return;
            let _0x2714ab = _0x19b6ea(_0x4af75b(_0x4a6f67(0x20c)))
              , _0x85d31 = _0x2714ab[_0x4a6f67(0x151)](_0x4fc7fd=>_0x4fc7fd['innerText'] === _0x4da29e);
            if (!_0x85d31)
                return this[_0x4a6f67(0x191)](_0x4e8381(_0x4a6f67(0x20d)));
            setTimeout(()=>{
                const _0x1c79cf = _0x4a6f67;
                _0x85d31[_0x1c79cf(0x27f)](),
                this[_0x1c79cf(0x1a3)](!0x1),
                this[_0x1c79cf(0x180)]();
            }
            , this[_0x4a6f67(0x135)]());
        }
        ;
        ['handleStoryMatch'] = function(_0x9d73ab) {
            const _0x4fc878 = _0x285988;
            if (!this[_0x4fc878(0x394)])
                return;
            let _0x2765d4 = _0x19b6ea(_0x4af75b(_0x4fc878(0x20c)))
              , _0x3a59c8 = _0x2765d4[_0x4fc878(0x360)](_0x2765d4['length'] / 0x2)
              , _0xccff16 = null
              , _0x701545 = ()=>{
                const _0x3543c9 = _0x4fc878;
                setTimeout(()=>{
                    const _0x2a83e7 = _0x50cf;
                    if (0x0 === _0x3a59c8[_0x2a83e7(0x107)]) {
                        this['setSolving'](!0x1),
                        this[_0x2a83e7(0x180)]();
                        return;
                    }
                    if (null === _0xccff16) {
                        let _0x3ba4aa = _0x2765d4['shift']();
                        _0x3ba4aa[_0x2a83e7(0x27f)](),
                        _0xccff16 = _0x9d73ab[_0x2a83e7(0xf3) + _0x3ba4aa[_0x2a83e7(0x119)]] || _0x9d73ab[_0x2a83e7(0xf3) + _0x3ba4aa[_0x2a83e7(0x119)] + '\x20'];
                    } else {
                        let _0x333020 = _0x3a59c8[_0x2a83e7(0x216)](_0x3bc3b4=>_0x3bc3b4[_0x2a83e7(0x119)] === _0xccff16);
                        if (-0x1 === _0x333020)
                            return this['autoduoError'](_0x4e8381('text55'));
                        _0x3a59c8[_0x333020][_0x2a83e7(0x27f)](),
                        _0x3a59c8[_0x2a83e7(0x360)](_0x333020, 0x1),
                        _0xccff16 = null;
                    }
                    _0x701545();
                }
                , this[_0x3543c9(0x135)]());
            }
            ;
            _0x701545();
        }
        ;
        [_0x285988(0x36b)] = function(_0x37e56a) {
            const _0x532ce4 = _0x285988;
            if (!this[_0x532ce4(0x394)])
                return;
            let _0x484ad2 = _0x4af75b(_0x532ce4(0x20c))
              , _0x48813a = ()=>{
                setTimeout(()=>{
                    const _0x563ff9 = _0x50cf;
                    if (0x0 === _0x37e56a[_0x563ff9(0x107)]) {
                        this['setSolving'](!0x1),
                        this['continueStory']();
                        return;
                    }
                    let _0x56757e = _0x37e56a[_0x563ff9(0x25f)]();
                    _0x484ad2[_0x56757e][_0x563ff9(0x27f)](),
                    _0x48813a();
                }
                , this['randomSafeDelayTime']());
            }
            ;
            _0x48813a();
        }
        ;
        ['getDataStory'] = function() {
            const _0x5c3fe5 = _0x285988;
            let _0x328814 = this[_0x5c3fe5(0x36d)]?.['props']?.['currentChallengeSession'];
            return _0x328814;
        }
        ;
        [_0x285988(0x264)] = function(_0x2df288) {
            const _0x2dd985 = _0x285988;
            let _0x488494 = _0x2df288?.[_0x2dd985(0x2ab)]?.['parentNode'];
            if (_0x488494)
                return this[_0x2dd985(0x267)] || this[_0x2dd985(0x1c3)](_0x488494),
                _0x488494?.[this[_0x2dd985(0x267)]]?.[_0x2dd985(0x349)]?.[_0x2dd985(0x337)];
        }
        ;
        [_0x285988(0x221)] = function() {
            const _0x18c4a1 = _0x285988;
            if (!this[_0x18c4a1(0x394)])
                return;
            let _0x44c051 = _0x6f44f2(_0x18c4a1(0x218));
            if (_0x44c051) {
                this[_0x18c4a1(0xee)]();
                return;
            }
            let _0x228ffe = _0x6f44f2('[data-test=\x22player-next\x22]');
            if (_0x228ffe) {
                this[_0x18c4a1(0x1bb)]();
                return;
            }
            setTimeout(this['handleRadioChallenge'][_0x18c4a1(0x2de)](this), 0x5dc);
        }
        ;
        [_0x285988(0xee)] = function() {
            const _0x4ed9a2 = _0x285988;
            this[_0x4ed9a2(0x1a3)](!0x0);
            let _0x1e24d6 = this[_0x4ed9a2(0x1d3)]('type');
            switch (_0x1e24d6) {
            case _0x4ed9a2(0x2f6):
                this[_0x4ed9a2(0x338)]();
                break;
            case 'radioBinary':
                this[_0x4ed9a2(0x153)]();
                break;
            case _0x4ed9a2(0x100):
                this['handleRadioListenRecognizeChallenge']();
                break;
            case _0x4ed9a2(0x3a2):
            case 'radioImageSelect':
                this[_0x4ed9a2(0x24e)]();
                break;
            default:
                return this[_0x4ed9a2(0x191)](_0x4e8381('text46', _0x1e24d6));
            }
        }
        ;
        [_0x285988(0x338)] = function() {
            const _0x3322c1 = _0x285988;
            if (!this[_0x3322c1(0x394)])
                return;
            let _0x16cd3b = _0x19b6ea(_0x4af75b('button[data-test*=\x22challenge-tap-token\x22]'))
              , _0x194ab3 = _0x16cd3b[_0x3322c1(0x360)](_0x16cd3b['length'] / 0x2);
            this[_0x3322c1(0x2cf)](_0x16cd3b, _0x194ab3, ()=>{
                const _0xe545d6 = _0x3322c1;
                this[_0xe545d6(0x1a3)](!0x1),
                setTimeout(this[_0xe545d6(0x221)][_0xe545d6(0x2de)](this), 0x1388);
            }
            );
        }
        ;
        [_0x285988(0x153)] = function() {
            const _0x47ba36 = _0x285988;
            if (!this['isAuto'])
                return;
            let _0xc98d9f = _0x4af75b(_0x47ba36(0x362));
            _0xc98d9f[_0x47ba36(0x107)] < 0x1 && this[_0x47ba36(0x191)](_0x4e8381(_0x47ba36(0x20d))),
            _0xc98d9f[_0x47ba36(0x2c8)](_0x52f781=>_0x52f781[_0x47ba36(0x27f)]()),
            this[_0x47ba36(0x1a3)](!0x1),
            setTimeout(this[_0x47ba36(0x221)]['bind'](this), 0x1388);
        }
        ;
        [_0x285988(0x208)] = function() {
            const _0x165be4 = _0x285988;
            if (!this[_0x165be4(0x394)])
                return;
            let _0x552a1b = _0x4af75b(_0x165be4(0x362))
              , _0x41c4c5 = this[_0x165be4(0x1d3)](_0x165be4(0x19c))
              , _0x52bc65 = ()=>{
                const _0x162aa0 = _0x165be4;
                if (_0x41c4c5[_0x162aa0(0x107)] <= 0x0) {
                    this[_0x162aa0(0x1a3)](!0x1),
                    setTimeout(this[_0x162aa0(0x221)][_0x162aa0(0x2de)](this), 0x1388);
                    return;
                }
                let _0x54d6ae = _0x41c4c5[_0x162aa0(0x25f)]();
                _0x552a1b[_0x54d6ae][_0x162aa0(0x27f)](),
                setTimeout(_0x52bc65, this[_0x162aa0(0x135)]());
            }
            ;
            _0x52bc65();
        }
        ;
        [_0x285988(0x24e)] = function() {
            const _0x20197f = _0x285988;
            this[_0x20197f(0x394)] && this['handleChallengeChoiceGeneral'](()=>{
                const _0x4af86f = _0x20197f;
                this[_0x4af86f(0x1a3)](!0x1),
                setTimeout(this[_0x4af86f(0x221)][_0x4af86f(0x2de)](this), 0x1388);
            }
            );
        }
        ;
        [_0x285988(0x1c3)] = function(_0xe7ce36) {
            const _0xe38497 = _0x285988;
            if (this['reactProps'] = Object['keys'](_0xe7ce36)[_0xe38497(0x151)](_0x4c99d2=>_0x4c99d2[_0xe38497(0x2a2)](_0xe38497(0x2df))),
            !this[_0xe38497(0x267)])
                return this[_0xe38497(0x191)](_0x4e8381('text56'));
        }
        ;
        ['getDataStateNode'] = function(_0x56cd40) {
            const _0x5286c3 = _0x285988;
            this[_0x5286c3(0x267)] || this[_0x5286c3(0x1c3)](_0x56cd40);
            let _0x2aa825 = _0x56cd40?.[this[_0x5286c3(0x267)]]?.[this[_0x5286c3(0x1e1)]];
            Array[_0x5286c3(0x14c)](_0x2aa825) ? this[_0x5286c3(0x36d)] = _0x2aa825?.[0x0]?.[_0x5286c3(0x346)]?.[_0x5286c3(0x34c)] : this['dataStateNode'] = _0x2aa825?.['_owner']?.['stateNode'];
        }
        ;
        ['getData'] = function(_0x57878c) {
            const _0x4bba15 = _0x285988;
            let _0x16a5a5 = this[_0x4bba15(0x36d)]?.[_0x4bba15(0x337)]?.[_0x4bba15(0x2bb)];
            if (!_0x16a5a5)
                return this[_0x4bba15(0x191)](_0x4e8381(_0x4bba15(0x1d4)));
            if (Array['isArray'](_0x57878c)) {
                let _0x1e2e1e = _0x57878c[_0x4bba15(0x1b2)]((_0x12e825,_0x345de0)=>{
                    if (null === _0x12e825)
                        return null;
                    let _0x3277d2 = _0x12e825[_0x345de0];
                    return _0x3277d2 || null;
                }
                , _0x16a5a5);
                return Array[_0x4bba15(0x14c)](_0x1e2e1e) ? [..._0x1e2e1e] : _0x1e2e1e;
            }
            {
                let _0x535d77 = _0x16a5a5[_0x57878c];
                return Array[_0x4bba15(0x14c)](_0x535d77) ? [..._0x535d77] : _0x535d77;
            }
        }
        ;
        ['getXpState'] = function(_0x4cc5db) {
            const _0x18bce5 = _0x285988;
            let _0x18e0f4 = _0x4cc5db?.[_0x18bce5(0x2ab)]?.['parentNode'];
            if (!_0x18e0f4)
                return;
            this[_0x18bce5(0x267)] || this[_0x18bce5(0x1c3)](_0x18e0f4);
            let _0x1b2b90 = _0x18e0f4?.[this[_0x18bce5(0x267)]]?.[_0x18bce5(0x349)]?.[_0x18bce5(0x337)]?.['slide']?.[_0x18bce5(0x2c1)];
            return _0x1b2b90;
        }
        ;
        [_0x285988(0x39d)] = function() {
            const _0xa294d3 = _0x285988;
            let _0x2dab02 = _0x4637e0(this[_0xa294d3(0x2d1)]);
            this[_0xa294d3(0x15d)]['innerText'] = _0x2dab02;
        }
        ;
        [_0x285988(0x19d)] = function(_0xcde3c2) {
            const _0xd00ab = _0x285988;
            _0xcde3c2 ? this['keyBtn'][_0xd00ab(0x3b1)](this[_0xd00ab(0x2d7)]) : this[_0xd00ab(0x31c)][_0xd00ab(0x302)](this[_0xd00ab(0x2d7)]),
            this[_0xd00ab(0x1ca)] = _0xcde3c2;
        }
        ;
        [_0x285988(0x1a3)] = function(_0x264794) {
            const _0x82d9a4 = _0x285988;
            this[_0x82d9a4(0x209)] = _0x264794;
        }
        ;
        ['setSafeMode'] = function(_0x3fc97a) {
            const _0x391ce5 = _0x285988;
            return this[_0x391ce5(0x351)] = _0x3fc97a,
            this[_0x391ce5(0x1de)] = _0x3fc97a ? this['safeDelayTimeTemp'] : 0x0,
            _0x1a57c9(_0x391ce5(0x351), _0x3fc97a),
            _0x3fc97a;
        }
        ;
        ['randomSafeDelayTime'] = function() {
            const _0x3604ed = _0x285988;
            return this[_0x3604ed(0x351)] ? Math[_0x3604ed(0x1c6)](Math[_0x3604ed(0x204)]() * (this[_0x3604ed(0x1de)] - 0x64) + 0x64) : 0x0;
        }
        ;
        [_0x285988(0x384)] = async function(_0x385a22) {
            await new Promise(_0x1101fa=>setTimeout(_0x1101fa, _0x385a22));
        }
        ;
        ['updatePassModeState'] = function() {
            const _0x3a3aad = _0x285988;
            this[_0x3a3aad(0x195)][_0x3a3aad(0x119)] = _0x4e8381(_0x3a3aad(0x15a), this[_0x3a3aad(0x1b8)], 0xf423f === this[_0x3a3aad(0x320)] ? '∞' : this[_0x3a3aad(0x320)]),
            _0x1a57c9(_0x3a3aad(0x1b8), this[_0x3a3aad(0x1b8)]);
        }
        ;
        [_0x285988(0x30b)] = function() {
            const _0x273ffb = _0x285988;
            let _0x25709b = _0x6f44f2('button\x20img[src=\x22https://d35aaqx5ub95lt.cloudfront.net/images/path/09f977a3e299d1418fde0fd053de0beb.svg\x22]');
            return !!_0x25709b && (_0x25709b['click'](),
            setTimeout(this[_0x273ffb(0x2e6)][_0x273ffb(0x2de)](this), 0x3e8),
            !0x0);
        }
        ;
        ['skipCharacterGate'] = function() {
            const _0x3e1af4 = _0x285988;
            let _0x2add65 = _0x6f44f2(_0x3e1af4(0x2a8));
            if (_0x2add65)
                return _0x2add65[_0x3e1af4(0x27f)](),
                setTimeout(()=>{
                    const _0x347243 = _0x3e1af4;
                    let _0x2124e3 = _0x6f44f2('a[data-test*=\x22skill-path-state-active\x22]\x20+\x20button');
                    _0x2124e3?.[_0x347243(0x27f)]();
                }
                , 0x320),
                setTimeout(()=>{
                    const _0x360ff0 = _0x3e1af4;
                    let _0x5b729b = _0x6f44f2(_0x360ff0(0x240));
                    _0x5b729b?.[_0x360ff0(0x27f)]();
                }
                , 0x640),
                setTimeout(this['handlePassMode'][_0x3e1af4(0x2de)](this), 0xe10),
                !0x0;
        }
        ;
        [_0x285988(0x2e4)] = function(_0x1b01ed) {
            const _0x394300 = _0x285988;
            try {
                let _0x51d26f = this[_0x394300(0x21f)](_0x1b01ed);
                _0x51d26f = atob(_0x51d26f);
                let _0xe9e285 = _0x51d26f['length'] / 0x2
                  , _0x162899 = _0x51d26f[_0x394300(0x314)](0x0, _0xe9e285)
                  , _0x22aa04 = _0x51d26f[_0x394300(0x314)](_0xe9e285);
                _0x162899 = this[_0x394300(0x21f)](_0x162899),
                _0x22aa04 = this[_0x394300(0x21f)](_0x22aa04);
                let _0x9dc0b1 = _0x162899 + _0x22aa04
                  , _0x1ef2c9 = JSON[_0x394300(0x211)](atob(_0x9dc0b1));
                return _0x1ef2c9;
            } catch (_0x171b94) {
                return null;
            }
        }
        ;
        [_0x285988(0x21f)] = function(_0x2c7eed) {
            const _0x4abb87 = _0x285988;
            try {
                let _0x3575bf = _0x2c7eed[_0x4abb87(0x107)] - 0x5
                  , _0x13b0c7 = +_0x2c7eed[_0x3575bf]
                  , _0x479e6b = _0x2c7eed[_0x4abb87(0x314)](0x0, _0x13b0c7) + _0x2c7eed[_0x4abb87(0x314)](_0x13b0c7 + 0x2, _0x3575bf) + _0x2c7eed['slice'](_0x3575bf + 0x2);
                return _0x479e6b;
            } catch (_0x3d2ed7) {
                return null;
            }
        }
        ;
        [_0x285988(0x289)] = function() {
            const _0x55781b = _0x285988;
            let _0x11f4e8 = this[_0x55781b(0x323)] ? _0x55781b(0x255) : this[_0x55781b(0x3a6)] ? _0x4e8381(_0x55781b(0x348)) : this[_0x55781b(0x2ea)] ? _0x4e8381(_0x55781b(0x324)) : '';
            _0x11f4e8 && window[_0x55781b(0x22f)](_0x4e8381('text81', _0x11f4e8, _0x11f4e8));
        }
        ;
        [_0x285988(0x32e)] = function() {
            const _0x26fe44 = _0x285988;
            this[_0x26fe44(0x209)] && this[_0x26fe44(0x1a3)](!0x1),
            this['isLegendMode'] && this[_0x26fe44(0x113)](),
            this['isAutoFarmXP'] && this[_0x26fe44(0x19e)](),
            this['isPassMode'] && this[_0x26fe44(0x2ee)]();
        }
        ;
        [_0x285988(0x2e0)] = function(..._0xf476b2) {
            const _0x2c4534 = _0x285988;
            _0xf476b2[_0x2c4534(0x2c8)](_0x49d9f1=>{
                const _0x5e6e62 = _0x2c4534;
                _0x49d9f1[_0x5e6e62(0x1dc)]['add'](_0x5e6e62(0x2ad)),
                _0x49d9f1[_0x5e6e62(0x250)] = !0x0;
            }
            );
        }
        ;
        [_0x285988(0x13b)] = function(..._0x43e3bf) {
            const _0x1c7f38 = _0x285988;
            _0x43e3bf[_0x1c7f38(0x2c8)](_0x3d0d62=>{
                const _0x174f55 = _0x1c7f38;
                _0x3d0d62[_0x174f55(0x1dc)][_0x174f55(0x11e)](_0x174f55(0x2ad)),
                _0x3d0d62[_0x174f55(0x250)] = !0x1;
            }
            );
        }
        ;
        [_0x285988(0x2c0)] = function() {
            const _0x27e5c6 = _0x285988;
            let _0x414d05 = _0x6f44f2(this[_0x27e5c6(0x1d5)]) || _0x6f44f2(_0x27e5c6(0x3ae)) || _0x6f44f2('[data-test=\x22plus-no-thanks\x22]') || _0x6f44f2(_0x27e5c6(0x31f));
            if (_0x414d05)
                return _0x414d05[_0x27e5c6(0x27f)](),
                !0x0;
        }
        ;
        [_0x285988(0x3a0)] = function() {
            const _0x1b5d70 = _0x285988;
            if ((+_0x2da9c5 || 0x0) >= 0x1)
                return;
            let _0xc11a01 = _0x1b5d70(0x26d);
            this[_0x1b5d70(0x2b2)]['innerHTML'] += _0xc11a01;
            let _0x516e77 = ()=>{
                const _0x3d80e1 = _0x1b5d70;
                _0x2979c9(_0x3d80e1(0x27d), 0x1),
                this['autoGetX2Wrapper'][_0x3d80e1(0x22c)](_0x3d80e1(0x27f), _0x516e77);
            }
            ;
            this[_0x1b5d70(0x1e2)][_0x1b5d70(0x144)](_0x1b5d70(0x27f), _0x516e77);
        }
        ;
        [_0x285988(0x191)] = function(_0x10aae2) {
            const _0x55d3be = _0x285988;
            this[_0x55d3be(0x32e)](),
            alert(_0x55d3be(0xed) + _0x10aae2);
        }
        ;
        [_0x285988(0x1b7)] = function(_0x6b9aed) {
            const _0x45f545 = _0x285988;
            let _0x294d30 = _0x6f44f2(_0x45f545(0x1db));
            return _0x294d30 ? (_0x294d30['click'](),
            setTimeout(()=>{
                const _0x5f45a8 = _0x45f545;
                this[_0x5f45a8(0x191)](_0x6b9aed + _0x4e8381(_0x5f45a8(0x126)));
            }
            , 0x320)) : this['autoduoError'](_0x6b9aed);
        }
        ;
        [_0x285988(0x3a8)] = function(_0x436081='', _0x3e8328, _0x485163, _0x811ddf) {
            const _0xa5ffce = _0x285988;
            let _0x12e039 = document[_0xa5ffce(0x378)]('i');
            Object['assign'](_0x12e039, {
                'className': _0xa5ffce(0x2e8),
                'title': _0x4e8381('text15'),
                'onclick'() {
                    alert(_0x436081);
                }
            });
            let _0x39833b = document[_0xa5ffce(0x378)](_0xa5ffce(0x1e4));
            Object[_0xa5ffce(0x2ef)](_0x39833b, {
                'type': 'checkbox',
                'hidden': !0x0,
                'checked': _0x485163
            });
            let _0x241103 = _0x3d25c4=>{
                const _0x34d166 = _0xa5ffce;
                _0x39833b[_0x34d166(0x1a8)] = _0x3d25c4;
            }
              , _0x5c01d8 = document[_0xa5ffce(0x378)](_0xa5ffce(0xfc));
            _0x5c01d8['addEventListener'](_0xa5ffce(0x27f), ()=>{
                _0x811ddf(_0x241103);
            }
            );
            let _0x6c8b54 = document['createElement'](_0xa5ffce(0x39c));
            _0x6c8b54[_0xa5ffce(0x169)] = 'switch-container-listening',
            _0x6c8b54[_0xa5ffce(0x23c)](_0x12e039, _0x39833b, _0x5c01d8),
            _0x3e8328['classList'][_0xa5ffce(0x142)](_0xa5ffce(0x219)),
            _0x3e8328[_0xa5ffce(0x23c)](_0x6c8b54),
            _0x3e8328['setAutoduoSwitch'] = _0x241103;
        }
        ;
        [_0x285988(0x1ac)] = function() {
            const _0x5d00cc = _0x285988;
            alert(_0x4e8381(_0x5d00cc(0x3b5)));
        }
        ;
        ['createStyle'] = function() {
            const _0x4ed1f7 = _0x285988;
            this['animationStyle'] = document[_0x4ed1f7(0x378)](_0x4ed1f7(0x21a)),
            this['animationStyle'][_0x4ed1f7(0x359)] = '\x0a\x09\x09\x09\x09img,\x20svg,\x20canvas\x20{\x0a\x09\x09\x09\x09\x09visibility:\x20hidden\x20!important;\x0a\x09\x09\x09\x09}\x20\x0a\x09\x09\x09\x09div:not(.autoduo-animate):not(.setting-overlay-listening)\x20{\x0a\x09\x09\x09\x09\x09transition:\x20none\x20!important;\x0a\x09\x09\x09\x09\x09animation-duration:\x200s\x20!important;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09.fSJFz\x20{\x0a\x09\x09\x09\x09\x09display:\x20none\x20!important;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09',
            this[_0x4ed1f7(0x2b2)] = document[_0x4ed1f7(0x378)](_0x4ed1f7(0x21a)),
            this[_0x4ed1f7(0x2b2)][_0x4ed1f7(0x359)] = _0x4ed1f7(0x375),
            document[_0x4ed1f7(0x36c)][_0x4ed1f7(0x3b1)](this[_0x4ed1f7(0x2b2)]);
        }
        ;
    }
    let _0x1e07f6 = {
        'text1': _0x285988(0x332),
        'text2': _0x285988(0x2e3),
        'text3': _0x285988(0x164),
        'text4': _0x285988(0x2ff),
        'text5': _0x285988(0x3a1),
        'text6': _0x285988(0x19a),
        'text7': _0x285988(0x1fd),
        'text8': _0x285988(0x35a),
        'text9': _0x285988(0x395),
        'text10': _0x285988(0x280),
        'text11': _0x285988(0x32b),
        'text12': 'Key\x20cơ\x20bản',
        'text13': _0x285988(0x178),
        'text14': 'HSD:\x20',
        'text15': _0x285988(0x134),
        'text16': _0x285988(0x3a9),
        'text17': '-\x20CHẾ\x20ĐỘ\x20ẨN\x20HOẠT\x20ẢNH:\x0aKhi\x20bật\x20chế\x20độ\x20này,\x20các\x20hình\x20ảnh\x20và\x20hoạt\x20ảnh\x20động\x20trong\x20trang\x20web\x20sẽ\x20được\x20ẩn\x20để\x20tối\x20ưu\x20hiệu\x20suất.\x0a\x0aGợi\x20ý:\x20Để\x20đạt\x20được\x20hiệu\x20suất\x20tốt\x20nhất,\x20bạn\x20nên\x20tìm\x20và\x20tắt\x20các\x20mục\x20liên\x20quan\x20đến\x20hiệu\x20ứng\x20trong\x20phần\x20cài\x20đặt\x20của\x20Duolingo!',
        'text18': _0x285988(0x27a),
        'text19': '-\x20CHẾ\x20ĐỘ\x20AN\x20TOÀN:\x0aKhi\x20bật\x20chế\x20độ\x20này,\x20hệ\x20thống\x20sẽ\x20mô\x20phỏng\x20thao\x20tác\x20của\x20người\x20dùng\x20khi\x20auto.\x20Tốc\x20độ\x20sẽ\x20thư\x20thái\x20hơn,\x20bù\x20lại\x20thời\x20gian\x20hoàn\x20thành\x20bài\x20học\x20và\x20lượng\x20kinh\x20nghiệm\x20sẽ\x20được\x20tự\x20nhiên\x20nhất,\x20giảm\x20thiểu\x20các\x20rủi\x20ro\x20về\x20REPORT\x20và\x20BAN\x20tài\x20khoản!',
        'text20': 'Chế\x20độ\x20tăng\x20tốc',
        'text21': _0x285988(0xe2),
        'text22': 'Xin\x20lỗi,\x20tính\x20năng\x20này\x20chỉ\x20dành\x20cho\x20Key\x20VIP,\x20liên\x20hệ\x20ADMIN\x20để\x20biết\x20thêm\x20chi\x20tiết!!',
        'text23': _0x285988(0x225),
        'text24': _0x285988(0x246),
        'text25': _0x285988(0x260),
        'text26': _0x285988(0x343),
        'text27': 'Bạn\x20có\x20chắc\x20chắn\x20muốn\x20hủy\x20bỏ\x20mục\x20tiêu\x20hiện\x20tại\x20không?',
        'text28': _0x285988(0x2d8),
        'text29': 'Giá\x20trị\x20không\x20hợp\x20lệ,\x20vui\x20lòng\x20thử\x20lại!',
        'text30': _0x285988(0x311),
        'text31': 'Giá\x20trị\x20quá\x20lớn,\x20vui\x20lòng\x20thử\x20lại!',
        'text32': 'Chế\x20độ\x20auto\x20vượt',
        'text33': _0x285988(0x28d),
        'text34': _0x285988(0x214),
        'text35': 'Bằng\x20việc\x20đặt\x20số\x20bài\x20học\x20mà\x20bạn\x20muốn\x20vượt,\x20hệ\x20thống\x20sẽ\x20tự\x20động\x20vượt\x20số\x20bài\x20học\x20mới\x20tương\x20ứng\x20với\x20giá\x20trị\x20mà\x20bạn\x20đã\x20đặt!\x0a(Nhập\x200\x20để\x20auto\x20vô\x20hạn)\x0a\x0aNhập\x20vào\x20số\x20bài\x20học\x20mà\x20bạn\x20muốn\x20vượt\x20(1\x20-\x201000):',
        'text36': _0x285988(0x34e),
        'text37': _0x285988(0x157),
        'text38': _0x285988(0x2c5),
        'text39': _0x285988(0x2a6),
        'text40': 'Sau\x20khi\x20bật,\x20tốc\x20độ\x20auto\x20sẽ\x20nhanh\x20hơn,\x20tuy\x20nhiên\x20nó\x20sẽ\x20tiêu\x20tốn\x20nhiều\x20hơn\x20hiệu\x20năng\x20của\x20thiết\x20bị\x20(không\x20khuyến\x20khích\x20trên\x20các\x20thiết\x20bị\x20có\x20hiệu\x20năng\x20thấp).\x20Bạn\x20có\x20chắc\x20muốn\x20mở\x20chế\x20độ\x20này\x20không?',
        'text41': _0x285988(0x328),
        'text42': _0x285988(0x318),
        'text43': '',
        'text44': _0x285988(0x3b0),
        'text45': _0x285988(0x295),
        'text46': _0x285988(0x389),
        'text47': _0x285988(0x182),
        'text48': _0x285988(0x1ee),
        'text49': _0x285988(0x22a),
        'text50': _0x285988(0x2b9),
        'text51': _0x285988(0x1f8),
        'text52': _0x285988(0x196),
        'text53': _0x285988(0x247),
        'text54': _0x285988(0x33a),
        'text55': _0x285988(0x1d6),
        'text56': _0x285988(0x282),
        'text57': _0x285988(0x24d),
        'text58': 'Xảy\x20ra\x20lỗi\x20trong\x20quá\x20trình\x20get\x20dữ\x20liệu!',
        'text59': _0x285988(0x262),
        'text60': '+++++\x20HƯỚNG\x20DẪN\x20+++++\x0a\x0a-\x20Cần\x20có\x20key\x20kích\x20hoạt\x20auto.\x20Key\x20là\x20phương\x20thức\x20duy\x20nhất\x20giúp\x20mình\x20duy\x20trì\x20và\x20phát\x20triển\x20Auto-Duolingo,\x20nên\x20mong\x20các\x20bạn\x20thông\x20cảm\x20và\x20ủng\x20hộ\x20mình,\x20mình\x20xin\x20cảm\x20ơn\x20rất\x20nhiều!\x0a___________________________\x0a-\x20Hiện\x20tại\x20có\x202\x20cách\x20để\x20lấy\x20key\x20như\x20sau:\x0a+\x20Lấy\x20Key\x2024h\x20bằng\x20cách\x20vượt\x20một\x20vài\x20liên\x20kết\x20có\x20chứa\x20quảng\x20cáo\x20(Chỉ\x20hỗ\x20trợ\x20Tiếng\x20Việt).\x0a+\x20Mua\x20Key\x20VIP\x20với\x20thời\x20hạn\x20lâu\x20dài\x20và\x20ổn\x20định\x20hơn\x20(Để\x20mua\x20Key,\x20vui\x20lòng\x20liên\x20hệ\x20trực\x20tiếp\x20với\x20Admin\x20thông\x20qua\x20các\x20phương\x20thức\x20liên\x20lạc\x20phía\x20cuối\x20công\x20cụ).\x0a___________________________\x0a-\x20Tham\x20gia\x20cộng\x20đồng\x20AutoDuo\x20Zalo\x20hoặc\x20AutoDuo\x20Telegram\x20để\x20được\x20hỗ\x20trợ\x20và\x20cập\x20nhật\x20những\x20thông\x20tin\x20mới\x20nhất!\x0a\x0aAuto-Duolingo\x20By\x20DevX!',
        'text61': _0x285988(0x215),
        'text62': _0x285988(0x18f),
        'text63': _0x285988(0x333),
        'text64': _0x285988(0x33c),
        'text65': _0x285988(0xf5),
        'text66': _0x285988(0x112),
        'text67': _0x285988(0x298),
        'text68': _0x285988(0x120),
        'text69': 'ĐẶT\x20VỊ\x20TRÍ\x20FARM\x20KN\x0a-\x20Mặc\x20định,\x20hệ\x20thống\x20chỉ\x20có\x20thể\x20Farm\x20KN\x20tại\x20bài\x20luyện\x20tập\x20hoặc\x20luyện\x20nghe.\x20Tuy\x20nhiên\x20với\x20tính\x20năng\x20này,\x20bạn\x20có\x20thể\x20Farm\x20KN\x20tại\x20bất\x20cứ\x20bài\x20học\x20nào\x20bạn\x20muốn,\x20thậm\x20chí\x20có\x20thể\x20Farm\x20KN\x20tại\x20cả\x20các\x20bài\x20học\x20câu\x20chuyện!\x0a-\x20Cách\x20sử\x20dụng:\x20Kích\x20hoạt\x20tính\x20năng\x20và\x20nhập\x20vào\x20đường\x20dẫn\x20tới\x20bài\x20học\x20bạn\x20muốn\x20sau\x20đó\x20bật\x20chế\x20độ\x20Farm\x20KN\x20để\x20bắt\x20đầu\x20farm.\x0a-\x20LƯU\x20Ý:\x20Đường\x20dẫn\x20tới\x20bài\x20học\x20phải\x20thật\x20chính\x20xác\x20và\x20bài\x20học\x20phải\x20có\x20thể\x20làm\x20được\x20lặp\x20lại.\x20Nếu\x20nhập\x20đường\x20dẫn\x20không\x20chính\x20xác\x20có\x20thể\x20dẫn\x20đến\x20lỗi\x20hay\x20thậm\x20chí\x20gây\x20rủi\x20ro\x20cho\x20tài\x20khoản\x20của\x20bạn!',
        'text70': _0x285988(0x277),
        'text71': _0x285988(0x165),
        'text72': _0x285988(0x1b1),
        'text73': _0x285988(0x370),
        'text74': 'Cài\x20đặt\x20khác',
        'text75': _0x285988(0x344),
        'text76': 'Chế\x20độ\x20tối',
        'text77': _0x285988(0x13e),
        'text78': _0x285988(0x304),
        'text79': _0x285988(0x1ab),
        'text80': _0x285988(0x1d7),
        'text81': _0x285988(0x2b4),
        'text82': _0x285988(0xe3),
        'text83': 'Tự\x20động\x20lấy\x20x2\x20đã\x20tắt\x20do\x20không\x20tìm\x20thấy\x20bài\x20học\x20mới\x20nào!',
        'text84': 'Bạn\x20có\x20muốn\x20đặt\x20vị\x20trí\x20hiện\x20tại\x20làm\x20vị\x20trí\x20Farm\x20KN\x20không?\x0aLƯU\x20Ý:\x20Vị\x20trí\x20hiện\x20tại\x20phải\x20là\x20bài\x20học\x20và\x20phải\x20có\x20thể\x20được\x20làm\x20lặp\x20lại\x20nhiều\x20lần,\x20nếu\x20không\x20nó\x20sẽ\x20không\x20hoạt\x20động\x20hay\x20thậm\x20chí\x20gây\x20ra\x20lỗi!\x0a\x0a\x20Bạn\x20chắc\x20chắn\x20chứ?\x20(chọn\x20\x22Hủy\x22\x20để\x20tự\x20nhập\x20vị\x20trí\x20Farm\x20của\x20bạn)'
    }
      , _0x195a00 = {
        'text1': _0x285988(0x25b),
        'text2': _0x285988(0x29b),
        'text3': _0x285988(0x111),
        'text4': _0x285988(0x12c),
        'text5': _0x285988(0x1b6),
        'text6': _0x285988(0x319),
        'text7': 'DevX\x20Said:\x20Invalid\x20or\x20expired\x20key,\x20please\x20try\x20again!',
        'text8': 'The\x20current\x20key\x20has\x20expired,\x20please\x20obtain\x20a\x20new\x20key\x20to\x20continue\x20using\x20the\x20auto\x20feature!',
        'text9': _0x285988(0xf2),
        'text10': _0x285988(0x2d9),
        'text11': _0x285988(0x2a4),
        'text12': _0x285988(0x36a),
        'text13': _0x285988(0x1f0),
        'text14': _0x285988(0x38c),
        'text15': _0x285988(0x118),
        'text16': _0x285988(0x233),
        'text17': _0x285988(0x1d8),
        'text18': _0x285988(0x230),
        'text19': _0x285988(0x174),
        'text20': _0x285988(0x312),
        'text21': _0x285988(0x350),
        'text22': _0x285988(0x2e2),
        'text23': _0x285988(0xf4),
        'text24': _0x285988(0x3b3),
        'text25': _0x285988(0x2b3),
        'text26': '-\x20EXPERIENCE\x20POINT\x20TARGET\x20MODE:\x0aBy\x20setting\x20an\x20experience\x20point\x20target,\x20the\x20system\x20will\x20automatically\x20stop\x20auto\x20mode\x20when\x20the\x20total\x20experience\x20points\x20obtained\x20equal\x20or\x20exceed\x20the\x20specified\x20target.\x0aThis\x20helps\x20you\x20better\x20control\x20the\x20auto\x20function,\x20preventing\x20unintentional\x20accumulation\x20of\x20excess\x20experience\x20points\x20due\x20to\x20forgetting\x20to\x20turn\x20off\x20auto\x20mode!\x0a\x0a-\x20Note:\x20The\x20experience\x20point\x20target\x20must\x20be\x20greater\x20than\x20the\x20current\x20amount\x20of\x20experience\x20points\x20obtained\x20through\x20auto\x20mode!',
        'text27': _0x285988(0x1e0),
        'text28': _0x285988(0xe1),
        'text29': _0x285988(0x217),
        'text30': _0x285988(0x36e),
        'text31': 'The\x20value\x20is\x20too\x20large,\x20please\x20try\x20again!',
        'text32': 'Auto\x20Pass\x20Mode',
        'text33': _0x285988(0x34f),
        'text34': 'Are\x20you\x20sure\x20you\x20want\x20to\x20stop\x20the\x20auto?',
        'text35': _0x285988(0xe8),
        'text36': _0x285988(0x2b6),
        'text37': 'STOP\x20FARM\x20XP',
        'text38': 'DROP\x20KEY',
        'text39': 'Are\x20you\x20sure\x20you\x20want\x20to\x20remove\x20the\x20current\x20Key?\x20(After\x20removal,\x20the\x20page\x20will\x20automatically\x20refresh\x20to\x20update)',
        'text40': _0x285988(0x288),
        'text41': _0x285988(0x258),
        'text42': _0x285988(0x356),
        'text43': '',
        'text44': _0x285988(0x190),
        'text45': _0x285988(0x1af),
        'text46': 'This\x20exercise\x20is\x20currently\x20not\x20supported.\x20Please\x20report\x20this\x20issue\x20to\x20the\x20Admin\x20or\x20temporarily\x20work\x20on\x20this\x20exercise\x20manually\x20before\x20re-enabling\x20auto!\x20[%v]',
        'text47': _0x285988(0x2a9),
        'text48': _0x285988(0x35d),
        'text49': 'No\x20corresponding\x20result\x20found!',
        'text50': _0x285988(0x1c0),
        'text51': _0x285988(0x10b),
        'text52': '[Target\x20Mode]\x20Achieved\x20target\x20experience\x20level\x20(%v\x20/\x20%v\x20XP).\x0aAuto\x20has\x20been\x20automatically\x20turned\x20off!',
        'text53': 'An\x20error\x20occurred\x20while\x20reading\x20the\x20story!',
        'text54': _0x285988(0x3a3),
        'text55': 'No\x20matching\x20word\x20found!',
        'text56': _0x285988(0x2d2),
        'text57': _0x285988(0x2cb),
        'text58': _0x285988(0x185),
        'text59': 'Auto\x20pass\x20new\x20exercises:\x20%v\x20/\x20%v\x20lessons!',
        'text60': _0x285988(0x1b4),
        'text61': _0x285988(0x296),
        'text62': _0x285988(0x14d),
        'text63': _0x285988(0x24c),
        'text64': _0x285988(0x199),
        'text65': '\x20If\x20you\x20are\x20currently\x20displaying\x20the\x20pronunciation\x20guide,\x20please\x20turn\x20it\x20off\x20first,\x20then\x20reload\x20the\x20page,\x20and\x20finally\x20turn\x20on\x20auto\x20again!',
        'text66': _0x285988(0x307),
        'text67': _0x285988(0x2ca),
        'text68': _0x285988(0x2c3),
        'text69': _0x285988(0x3bb),
        'text70': _0x285988(0x206),
        'text71': _0x285988(0x1e3),
        'text72': _0x285988(0x231),
        'text73': _0x285988(0x12d),
        'text74': _0x285988(0x197),
        'text75': _0x285988(0x177),
        'text76': _0x285988(0x1e8),
        'text77': 'DARK\x20MODE\x0a-\x20Enable/disable\x20website\x20dark\x20mode\x20faster!',
        'text78': _0x285988(0x303),
        'text79': _0x285988(0x385),
        'text80': _0x285988(0x300),
        'text81': _0x285988(0x1f5),
        'text82': _0x285988(0x148),
        'text83': _0x285988(0x2fd),
        'text84': 'Do\x20you\x20want\x20to\x20set\x20your\x20current\x20location\x20as\x20the\x20XP\x20Farm\x20location?\x0aNOTE:\x20The\x20current\x20location\x20must\x20be\x20a\x20lesson\x20and\x20must\x20be\x20repeatable,\x20otherwise\x20it\x20won\x27t\x20work\x20or\x20may\x20even\x20cause\x20errors!\x0a\x0aAre\x20you\x20sure?\x20(Select\x20\x22Cancel\x22\x20to\x20manually\x20input\x20your\x20Farm\x20location)'
    }
      , _0x5cfe7f = {
        ..._0x195a00,
        'setLanguage': function(_0x32b3ca) {
            const _0xc23058 = _0x285988;
            let _0x3f60f7;
            'vi' === _0x32b3ca && (_0x3f60f7 = _0x1e07f6,
            Object[_0xc23058(0x2ef)](_0x5cfe7f, _0x3f60f7));
        }
    };
    function _0x4e8381(_0x16c5a7, ..._0x1165c1) {
        if (0x0 === _0x1165c1['length'])
            return _0x5cfe7f[_0x16c5a7];
        let _0x4168ea = _0x5cfe7f[_0x16c5a7]['replace'](/%v/g, ()=>_0x1165c1['shift']());
        return _0x4168ea;
    }
    function _0x4637e0(_0x9eff9e) {
        const _0x1fd7e6 = _0x285988;
        let _0x39f761 = String(parseInt(_0x9eff9e / 0x3e8 / 0x3c / 0x3c))
          , _0x3b7698 = String(parseInt(_0x9eff9e / 0x3e8 / 0x3c % 0x3c));
        return _0x39f761[_0x1fd7e6(0x2bf)](0x2, '0') + 'h:' + _0x3b7698[_0x1fd7e6(0x2bf)](0x2, '0') + 'm';
    }
    function _0x480aa7(_0x2eb1f5) {
        const _0x439b5b = _0x285988;
        if (_0x2eb1f5[_0x439b5b(0x2c6)]() >= 0x1b8dac5b400)
            return _0x4e8381(_0x439b5b(0x16b));
        let _0x660ab0 = String(_0x2eb1f5[_0x439b5b(0x269)]())[_0x439b5b(0x2bf)](0x2, '0')
          , _0x3bb1d1 = String(_0x2eb1f5[_0x439b5b(0x28e)]() + 0x1)[_0x439b5b(0x2bf)](0x2, '0')
          , _0x2b89f6 = _0x2eb1f5[_0x439b5b(0x20e)]()
          , _0x571fcc = String(_0x2eb1f5[_0x439b5b(0x39e)]())['padStart'](0x2, '0')
          , _0x2f0b63 = String(_0x2eb1f5[_0x439b5b(0xf8)]())['padStart'](0x2, '0');
        return _0x660ab0 + '/' + _0x3bb1d1 + '/' + _0x2b89f6 + '\x20-\x20' + _0x571fcc + ':' + _0x2f0b63 + _0x439b5b(0x1fa);
    }
    let _0x6f44f2 = document[_0x285988(0x28b)][_0x285988(0x2de)](document)
      , _0x4af75b = document[_0x285988(0x22d)][_0x285988(0x2de)](document)
      , _0x348e70 = document['createElement']('iframe');
    _0x348e70[_0x285988(0x21a)][_0x285988(0x306)] = _0x285988(0x357),
    document['body'][_0x285988(0x3b1)](_0x348e70);
    let _0x38a9d1 = _0x348e70['contentWindow'][_0x285988(0x115)][_0x285988(0x2a7)];
    window[_0x285988(0x2a7)] = _0x38a9d1;
    let _0x19b6ea = _0x33a9ea=>Array[_0x285988(0xe6)](_0x33a9ea);
    function _0x569038() {
        const _0x1f5306 = _0x285988;
        let _0x427f97 = sessionStorage[_0x1f5306(0xdf)](_0x56dce9) || '{}';
        try {
            return JSON[_0x1f5306(0x211)](_0x427f97);
        } catch (_0x1733cb) {
            return {};
        }
    }
    function _0x1a57c9(_0x581bdb, _0x1483fd) {
        const _0x205cfa = _0x285988;
        let _0x522f82 = _0x569038();
        _0x581bdb instanceof Object ? Object[_0x205cfa(0x2ef)](_0x522f82, _0x581bdb) : _0x522f82[_0x581bdb] = _0x1483fd,
        sessionStorage['setItem'](_0x56dce9, JSON['stringify'](_0x522f82));
    }
    function _0x47e7a3(_0x12c529) {
        let _0x4b92d1 = _0x569038();
        return _0x4b92d1[_0x12c529];
    }
    function _0x4f1096() {
        const _0x535cdd = _0x285988;
        sessionStorage[_0x535cdd(0x2e9)](_0x56dce9);
    }
    function _0x5d9e1d(_0x51ce4b) {
        const _0x584e49 = _0x285988;
        let _0x5da21b = localStorage[_0x584e49(0xdf)](_0x51ce4b) || '{}';
        try {
            return JSON[_0x584e49(0x211)](_0x5da21b);
        } catch (_0x431099) {
            return {};
        }
    }
    function _0x2979c9(_0x39ceb0, _0x10c0aa) {
        const _0x356253 = _0x285988;
        let _0x5d9d1e = _0x5d9e1d(_0x56dce9);
        _0x5d9d1e[_0x39ceb0] = _0x10c0aa,
        localStorage['setItem'](_0x56dce9, JSON[_0x356253(0x266)](_0x5d9d1e));
    }
    function _0x44393a(_0x4f9277) {
        let _0x6abffd = _0x5d9e1d(_0x56dce9);
        return _0x6abffd[_0x4f9277];
    }
    let _0xad571d = new _0x1e0e5a();
    _0xad571d[_0x285988(0x1a6)]();
}
)()));
