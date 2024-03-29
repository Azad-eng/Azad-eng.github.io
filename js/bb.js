//获取 Memos 总条数
function getTotal() {
    var totalUrl = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit;
    fetch(totalUrl)
        .then((res) => res.json())
        .then((resdata) => {
            if (resdata.data) {
                var allnums = resdata.data.length;
                var memosCount = document.getElementById("memosCount");
                memosCount.innerHTML = allnums;
            }
        })
        .catch((err) => {
            // Do something for an error here
        });
}
//window.onload = getTotal();

// Memos API
var bbMemo = {
    memos: 'https://demo.usememos.com/',
    limit: '',
    creatorId: '101',
    domId: '#memos',
}
if (typeof (bbMemos) !== "undefined") {
    for (var key in bbMemos) {
        if (bbMemos[key]) {
            bbMemo[key] = bbMemos[key];
        }
    }
}
var limit = bbMemo.limit;
var memos = bbMemo.memos;
//var localUrl = "https://memos.itisn.cyou/memos/memos.json";
//var remoteUrl = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL";
var page = 1,
    offset = 10,
    nextLength = 0,
    nextDom = "";
var memoDom = document.querySelector(bbMemo.domId);
//var load = '<button class="load-btn button-load">努力加载中……</button>';
if (memoDom) {
//    memoDom.insertAdjacentHTML("afterend", load);
    //首次加载数据
    getFirstList();
    //加载总数
    getTotal();
//    var btn = document.querySelector("button.button-load");
//    btn.addEventListener("click", function() {
//        btn.textContent = '努力加载中……';
//        updateHTMl(nextDom);
//        if (nextLength < limit) {
//            //返回数据条数小于限制条数，隐藏
//            document.querySelector("button.button-load").remove()
//            return;
//        }
//        getNextList();
//    });
}
// 渲染第一页（前 10 条）
function getFirstList() {
    var bbUrl = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit;
    fetch(bbUrl)
        .then((res) => res.json())
        .then((resdata) => {
            updateHTMl(resdata.data)
        var nowLength = resdata.data.length;
        if (nowLength < limit) {
            //返回数据条数小于 limit 则直接移除“加载更多”按钮，中断预加载
            document.querySelector("button.button-load").remove();
            return;
        }
        page++;
        offset = limit * (page - 1);
        getNextList();
    });
}
//预加载下一页数据
function getNextList() {
    var bbUrl = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit + "&offset=" + offset;
    fetch(bbUrl)
        .then((res) => res.json())
        .then((resdata) => {
            nextDom = resdata.data;
            nextLength = nextDom.length;
            page++;
            offset = limit * (page - 1);
            if (nextLength < 1) {
                //返回数据条数为 0 ，隐藏
                document.querySelector("button.button-load").remove();
                return;
            }
        });
}

// 插入 html
function updateHTMl(data) {
    var memoResult = "",
        resultAll = "";

    const TAG_REG = /#([^\s#]+?) /g;

    const NETEASE_MUSIC_REG =
        /<a\shref="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g;
    const QQMUSIC_REG =
        /<a\shref="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g;
    const SPOTIFY_REG =
        /<a\shref="https:\/\/open\.spotify\.com\/(track|album)\/([\s\S]+)".*?>.*<\/a>/g;
    // const BILIBILI_REG = /<a\shref="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g;
    // const QQVIDEO_REG = /<a\shref="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g;
    // const YOUKU_REG = /<a\shref="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g;
    // const YOUTUBE_REG = /<a\shref="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;

    // Marked Options
    marked.setOptions({
        breaks: true,
        smartypants: true,
        langPrefix: "language-",
        highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight.toString(code, { language }).value;
        },
    });

    // Marked Renderer Open links in New Tab
    const renderer = new marked.Renderer();
    const linkRenderer = renderer.link;
    renderer.link = (href, title, text) => {
        const localLink = href.startsWith(
            `${location.protocol}//${location.hostname}`
        );
        const html = linkRenderer.call(renderer, href, title, text);
        return localLink
            ? html
            : html.replace(
                  /^<a /,
                  `<a target="_blank" rel="noreferrer noopener nofollow" `
              );
    };
    marked.use({ renderer });

    // Memos Content

    for (var i = 0; i < data.length; i++) {
        var memoContREG = data[i].content.replace(
            TAG_REG,
            "<span class='tag-span'><a>$1</a></span> "
        );
        memoContREG = marked
            .parse(memoContREG)
            // New way to spacing at the end of this file
            //.parse(pangu.spacing(memoContREG))
            .replace(
                NETEASE_MUSIC_REG,
                "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>"
            )
            .replace(
                QQMUSIC_REG,
                "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>"
            )
            .replace(
                SPOTIFY_REG,
                "<div class='spotify-wrapper'><iframe style='border-radius:12px' src='https://open.spotify.com/embed/$1/$2?utm_source=generator&theme=0' width='100%' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe></div>"
            );
        //.replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//www.bilibili.com/blackboard/html5mobileplayer.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true' autoplay='false'></iframe></div>")
        //.replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
        //.replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
        //.replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")

        //解析内置资源文件
        if (data[i].resourceList && data[i].resourceList.length > 0) {
            var resourceList = data[i].resourceList;
            var imgUrl = "",
                resUrl = "",
                resImgLength = 0;
            for (var j = 0; j < resourceList.length; j++) {
                var resType = resourceList[j].type.slice(0, 5)
                var resexlink = resourceList[j].externalLink
                var resLink = ''
                  , fileId = ''
                if (resexlink) {
                    resLink = resexlink
                } else {
                    fileId = resourceList[j].publicId || resourceList[j].filename
                    resLink = memos + 'o/r/' + resourceList[j].id + '/' + fileId
                }
                if (resType == "image") {
                    imgUrl +=
                        '<img loading="lazy" src="' +
                        resLink +
                        '"/>';
                    resImgLength = resImgLength + 1;
                }
                if (resType !== "image") {
                    resUrl +=
                        '<a target="_blank" rel="noreferrer" href="' +
                        resLink +
                        '">' +
                        resourceList[j].filename +
                        "</a>";
                }
            }
            if (imgUrl) {
                var resImgGrid = "";
                if (resImgLength !== 1) {
                    var resImgGrid = "grid grid-" + resImgLength;
                }
                memoContREG +=
                    '<div class="resimg ' +
                    resImgGrid +
                    '">' +
                    imgUrl +
                    "</div>";
            }
            if (resUrl) {
                memoContREG += '<p class="datasource">' + resUrl + "</p>";
            }
        }
        memoResult +=
            '<li id="' +
            data[i].id +
            '" class="timeline"><div class="talks__content"><div class="talks__text"><div class="talks__userinfo"><div>Charles Chin</div><div><svg viewBox="0 0 24 24" aria-label="认证账号" class="talks__verify"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></div><div class="talks__id">@eallion · </div><small class="talks__date"><a href="https://memos.eallion.com/m/' +
            data[i].id +
            '" target="_blank">' +
            moment(data[i].createdTs * 1000).twitterLong() +
            "</a></small></div><p>" +
            memoContREG +
            "</p></div></div></li>";
    }

    var memoBefore = '<ul class="talks">';
    var memoAfter = "</ul>";
    resultAll = memoBefore + memoResult + memoAfter;
    memoDom.insertAdjacentHTML("beforeend", resultAll);
    fetchDB();
    hljs.initHighlighting.called = false;
    hljs.configure({
        ignoreUnescapedHTML: true,
    });
    hljs.highlightAll();
    lightGallery(document.getElementById("lightgallery"));
    document.querySelector("button.button-load").textContent = "加载更多";
}

//文章内显示豆瓣条目 https://immmmm.com/post-show-douban-item/
function fetchDB() {
    var dbAPI = "https://api.eallion.com/douban/";
    var dbA =
        document.querySelectorAll(
            ".timeline a[href*='douban.com/subject/']:not([rel='noreferrer'])"
        ) || "";
    if (dbA) {
        for (var i = 0; i < dbA.length; i++) {
            _this = dbA[i];
            var dbHref = _this.href;
            var db_reg =
                /^https\:\/\/(movie|book)\.douban\.com\/subject\/([0-9]+)\/?/;
            var db_type = dbHref.replace(db_reg, "$1");
            var db_id = dbHref.replace(db_reg, "$2").toString();
            if (db_type == "movie") {
                var this_item = "movie" + db_id;
                var url = dbAPI + "movies/" + db_id;
                if (
                    localStorage.getItem(this_item) == null ||
                    localStorage.getItem(this_item) == "undefined"
                ) {
                    fetch(url)
                        .then((res) => res.json())
                        .then((data) => {
                            let fetch_item = "movies" + data.sid;
                            let fetch_href =
                                "https://movie.douban.com/subject/" +
                                data.sid +
                                "/";
                            localStorage.setItem(
                                fetch_item,
                                JSON.stringify(data)
                            );
                            movieShow(fetch_href, fetch_item);
                        });
                } else {
                    movieShow(dbHref, this_item);
                }
            } else if (db_type == "book") {
                var this_item = "book" + db_id;
                var url = dbAPI + "v2/book/id/" + db_id;
                if (
                    localStorage.getItem(this_item) == null ||
                    localStorage.getItem(this_item) == "undefined"
                ) {
                    fetch(url)
                        .then((res) => res.json())
                        .then((data) => {
                            let fetch_item = "book" + data.id;
                            let fetch_href =
                                "https://book.douban.com/subject/" +
                                data.id +
                                "/";
                            localStorage.setItem(
                                fetch_item,
                                JSON.stringify(data)
                            );
                            bookShow(fetch_href, fetch_item);
                        });
                } else {
                    bookShow(dbHref, this_item);
                }
            }
        } // for end
    }
}
function movieShow(fetch_href, fetch_item) {
    var storage = localStorage.getItem(fetch_item);
    var data = JSON.parse(storage);
    var db_star = Math.ceil(data.rating);
    var db_html =
        "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" +
        fetch_href +
        "'>《" +
        data.name +
        "》</a></h4><div class='rating'><div class='rating-star allstar" +
        db_star +
        "'></div><div class='rating-average'>" +
        data.rating +
        "</div></div><time class='post-preview--date'>导演：" +
        data.director +
        " / 类型：" +
        data.genre +
        " / " +
        data.year +
        "</time><section class='post-preview--excerpt'>" +
        data.intro.replace(/\s*/g, "") +
        "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" +
        data.img +
        "></div>";
    var db_div = document.createElement("div");
    var qs_href = ".timeline a[href='" + fetch_href + "']";
    var qs_dom = document.querySelector(qs_href);
    qs_dom.parentNode.replaceChild(db_div, qs_dom);
    db_div.innerHTML = db_html;
}
function bookShow(fetch_href, fetch_item) {
    var storage = localStorage.getItem(fetch_item);
    var data = JSON.parse(storage);
    var db_star = Math.ceil(data.rating.average);
    var db_html =
        "<div class='post-preview'><div class='post-preview--meta'><div class='post-preview--middle'><h4 class='post-preview--title'><a target='_blank' rel='noreferrer' href='" +
        fetch_href +
        "'>《" +
        data.title +
        "》</a></h4><div class='rating'><div class='rating-star allstar" +
        db_star +
        "'></div><div class='rating-average'>" +
        data.rating.average +
        "</div></div><time class='post-preview--date'>作者：" +
        data.author +
        " </time><section class='post-preview--excerpt'>" +
        data.summary.replace(/\s*/g, "") +
        "</section></div></div><img referrer-policy='no-referrer' loading='lazy' class='post-preview--image' src=" +
        data.images.medium +
        "></div>";
    var db_div = document.createElement("div");
    var qs_href = ".timeline a[href='" + fetch_href + "']";
    var qs_dom = document.querySelector(qs_href);
    qs_dom.parentNode.replaceChild(db_div, qs_dom);
    db_div.innerHTML = db_html;
}

document.addEventListener("DOMContentLoaded", () => {
    let albumLimit = 6;
    var galleryUrl = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&tag=相册" + "&limit=" + albumLimit;
//    var galleryUrl =
//        memos + "api/memo/all?rowStatus=NORMAL&tag=相册&limit=" + albumLimit;
    let nowNum = 0;
    fetch(galleryUrl)
        .then((res) => res.json())
        .then((resdata) => {
            var result = "",
                resultAll = "",
                data = resdata.data;
            for (var i = 0; i < data.length; i++) {
                var galleryTitle = data[i].content.replace("#相册 ", "");
                var id = data[i].id;
                var imgs = galleryTitle.match(/\!\[(.*?)\s*(.*?)\]\((.*?)\)/g);
                //解析 content 内 md 格式图片
                if (imgs) {
                    imgs.forEach((item) => {
                        if (nowNum < albumLimit) {
                            nowNum++;
                            let img = item.replace(/!\[.*?\]\((.*?)\)/g, "$1"),
                                time,
                                title,
                                tmp = item.replace(/!\[(.*?)\]\(.*?\)/g, "$1");
                            if (tmp.indexOf(" ") != -1) {
                                time = tmp.split(" ")[0];
                                title = tmp.split(" ")[1];
                            } else title = tmp;
                            result += `<div class="memos-photo"><img class="photo-img" loading='lazy' decoding="async" src="${img}"></a>`;
                            title
                                ? (result += `<a href="https://memos.itisn.cyou/m/${id}" target="_blank" rel="noreferrer noopener nofollow"><span class="photo-title">${title}</span></a>`)
                                : "";
                            time
                                ? (result += `<span class="photo-time">${time}</span>`)
                                : "";
                            result += `</div>`;
                        }
                    });
                }
            }

            //解析内置资源文件

            // // 自用 Memos 取消解析内置资源文件，图片一律使用图床，以保证数据库的整洁。
            // if (data[i].resourceList && data[i].resourceList.length > 0) {
            //     var resourceList = data[i].resourceList;
            //     for (var j = 0; j < resourceList.length; j++) {
            //         var galleryTime = new Date(
            //             resourceList[j].createdTs * 1000
            //         ).toLocaleString();
            //         var restype = resourceList[j].type.slice(0, 5);
            //         var resexlink = resourceList[j].externalLink;
            //         var resLink = "";
            //         if (resexlink) {
            //             resLink = resexlink;
            //         } else {
            //             resLink =
            //                 memoUrl +
            //                 "o/r/" +
            //                 resourceList[j].id +
            //                 "/" +
            //                 resourceList[j].filename;
            //         }
            //         if (restype == "image" && nowNum <= albumLimit) {
            //             nowNum++;
            //             result +=
            //                 '<div class="memos-photo"><img class="photo-img" loading="lazy" decoding="async" src="' +
            //                 resLink +
            //                 '"/><span class="photo-title">' +
            //                 galleryTitle +
            //                 '</span><span class="photo-time">' +
            //                 galleryTime +
            //                 "</span></div>";
            //         }
            //     }
            // }

            var galleryDom = document.querySelector("#album");
            var galleryBefore = `<div class="memos-photo-wrapper">`;
            var galleryAfter = `</div>`;
            resultAll = galleryBefore + result + galleryAfter;
            galleryDom.innerHTML = resultAll;

            // 相对时间
            window.Lately && Lately.init({ target: ".photo-time" });
        });
});

document.addEventListener("DOMContentLoaded", () => {
    // listen to any DOM change and automatically perform spacing via MutationObserver()
    pangu.autoSpacingPage();
});
