/* 控制台输出 */
if(window.console) {
	var cons = console; 
	if(cons) { 
		cons.group("O(∩_∩)O哈喽！");
		cons.info("这位看代码的童鞋，不如留下你的友链来一起玩耍吧！"); 
		cons.log("%Azad-eng's Blog", "background-image: linear-gradient(#063053, #395873, #5c7c99);font-size: 2rem;");
		cons.info("==============================此乃分界线==============================");
		cons.log("  █████▒█    ██  ▄████▄   ██ ▄█▀       ██████╗ ██╗   ██╗ ██████╗\n▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒        ██╔══██╗██║   ██║██╔════╝\n▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░        ██████╔╝██║   ██║██║  ███╗\n░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄        ██╔══██╗██║   ██║██║   ██║\n░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄       ██████╔╝╚██████╔╝╚██████╔╝\n ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒       ╚═════╝  ╚═════╝  ╚═════╝\n ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░\n ░ ░    ░░░ ░ ░ ░        ░ ░░ ░\n          ░     ░ ░      ░  ░\n")
		cons.groupEnd();
	} 
}

/* 返回随机颜色 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 鼠标点击文字特效 */
var a_idx = 0;
var a_click = 1;
var a = new Array("！！下班打卡了吗？", "我去买几个橘子", "你就站在此地", "不要走动", "w(·Д·)w", "赵子龙一身是胆", "设计狗遍体皆肝",
 "什么？还没打卡！！？", "你还想拖到什么时候？", "现在", "立刻", "马上","放下你的鼠标！打卡！！！", "别点了", "求求你们别点了",
 "你还点", "你再点!", "有本事继续点!", "算你厉害┭┮﹏┭┮", "我投翔", "今天星期几？", "宫廷玉液酒", "一百八一杯", "他还只是个孩子", "请不要放过他",
 "天王盖地虎", "宝塔镇河妖", "惊不惊喜?", "意不意外?", "你的良心不会痛吗", "你心里就没点b数吗", "没有,我很膨胀","秀", "天秀", "陈独秀",
 "蒂花之秀", "造化钟神秀", "我可能读了假书", "贫穷限制了我的想象力", "打call!", "还没下班？", "(#`O′)", "（/TДT)/", "_(:3」∠)_", "你有freestyle吗");

jQuery(document).ready(function($) {
    $("body").click(function(e) {
		/* 点击频率，点击几次就换文字 */
		var frequency = 1;
		if (a_click % frequency === 0) {
			
			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
			y = e.pageY;
			$i.css({
				"z-index": 9999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": randomColor(),
				"-webkit-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});
			
		}
	a_click ++;
		
    });
});

/* 拉姆蕾姆回到顶部或底部按钮 */
$(function() {
	$("#lamu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:0},800);
		return false;
	});
	$("#leimu img").eq(0).click(function() {
		$("html,body").animate({scrollTop:$(document).height()},800);
		return false;
	});
});

function getCurrentDateString() {
	var now = new Date();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	return "" + now.getFullYear() + (month < 10 ? "0" + month : month) + (day < 10 ? "0" + day : day) + (hour < 10 ? "0" + hour : hour);
}

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/failure.ico");
      $('[rel="shortcut icon"]').attr('href', "/failure.ico");
      document.title = '呜呜~~(>_<)~~，走啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.png");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.png");
      document.title = '喔唷O(∩_∩)O，回了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}

/* 站点运行时间 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 请修改这里的起始时间 */
    let startTime = new Date('06/01/2022 02:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已运行<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}
runtime();

/* 轮播背景图片 */
//$(function () {
//	$.backstretch([
//		  "/images/background/01.png",
//		  "/images/background/02.png",
//	], { duration: 60000, fade: 1000 });
//});

// // 今日诗词
// var gushici = document.getElementById('gushici');
// var xhr = new XMLHttpRequest();
// xhr.open('get', 'https://api.eallion.com/jinrishici/one.json', true);
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         var result = JSON.parse(xhr.responseText);
//         var poem_info = document.getElementById('poem_info');
//         gushici.innerHTML = '「<a href="https://www.google.com/search?q=' + result.data.content + '" target="_blank" rel="noopener noreferrer">' + result.data.content + '</a>」';
//         poem_info.innerHTML = '<a href="https://www.google.com/search?q=' + result.data.origin.author + ' ' + result.data.origin.title + '" target="_blank" rel="noopener noreferrer">' + '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》' + '</a>';
//     }
// };

// if (!gushici) {
//     // console.log(error)
// } else {
//     xhr.send();
// }

// 首页嘀咕

// 相对时间插件 2.5.2 https://tokinx.github.io/lately/

(() => {
    window.Lately = new function () {
        this.lang = {
            second: "秒",
            minute: "分钟",
            hour: "小时",
            day: "天",
            month: "个月",
            year: "年",
            ago: "前",
            error: "NaN"
        };
        const format = (date) => {
            date = new Date(_val(date));
            const floor = (num, _lang) => Math.floor(num) + _lang,
                obj = new function () {
                    this.second = (Date.now() - date.getTime()) / 1000;
                    this.minute = this.second / 60;
                    this.hour = this.minute / 60;
                    this.day = this.hour / 24;
                    this.month = this.day / 30;
                    this.year = this.month / 12
                },
                key = Object.keys(obj).reverse().find(_ => obj[_] >= 1);
            return (key ? floor(obj[key], this.lang[key]) : this.lang.error) + this.lang.ago;
        },
            _val = (date) => {
                date = new Date(date && (typeof date === 'number' ? date : date.replace(/-/g, '/').replace('T', ' ')));
                return isNaN(date.getTime()) ? false : date.getTime();
            };
        return {
            init: ({ target = "time", lang } = {}) => {
                if (lang) this.lang = lang;
                for (let el of document.querySelectorAll(target)) {
                    const date = _val(el.dateTime) || _val(el.title) || _val(el.innerHTML) || 0;
                    if (!date) return;
                    el.title = new Date(date).toLocaleString();
                    el.innerHTML = format(date);
                }
            },
            format
        }
    }
})();

//let jsonUrl = "https://memos.itisn.cyou/memos/memos.json" + "?t=" + Date.parse(new Date());
let jsonUrl = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit;

fetch(jsonUrl).then(res => res.json()).then(resdata => {
    var result = '', resultAll = "", data = resdata.data
    for (var i = 0; i < data.length; i++) {
        var tickerTime = new Date(data[i].createdTs * 1000).toLocaleString()
        var tickerContent = data[i].content
        var newtickerContent = tickerContent
            .replace(/```([\s\S]*?)```[\s]*/g, ' <code>$1</code> ')  //全局匹配代码块
            .replace(/`([\s\S ]*?)`[\s]*/g, ' <code>$1</code> ')  //全局匹配内联代码块
            .replace(/\!\[[\s\S]*?\]\(([\s\S]*?)\)/g, "$1")  //全局匹配图片
            .replace(/\[[\s\S]*?\]\(([\s\S]*?)\)/g, "$1")  //全局匹配连接
            .replace(/<video [^>]*src=['"](.+?[^'"]\.(mp4|webm|ogv)+)[^>]*>/g, "$1")  //全局匹配连接
        result += `<li class="item"><span class="datetime">${tickerTime}</span>： <a href="https://memos.itisn.cyou/memos/">${newtickerContent}</a></li>`;
    }
    var tickerDom = document.querySelector('#ticker');
    var tickerBefore = `<i class='fab fa-twitter'></i><div class="ticker-wrap"><ul class="ticker-list">`
    var tickerAfter = `</ul></div>`
    resultAll = tickerBefore + result + tickerAfter
    tickerDom.innerHTML = resultAll;

    // 相对时间： https://tokinx.github.io/lately/
    window.Lately && Lately.init({ target: '.datetime' });

});

setInterval(function () {
    var tickerWrap = document.querySelector(".ticker-list");
    var tickerItem = tickerWrap.querySelectorAll(".item");
    for (i = 0; i < tickerItem.length; i++) {
        setTimeout(function () {
            tickerWrap.appendChild(tickerItem[0]);
        }, 2000);
    }
}, 2000);

