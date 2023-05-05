/*
Last Modified time : 20230326 13:00 by https://immmmm.com
*/
var bbMemo = {
    memos: 'https://demo.usememos.com/',
    limit: '10',
    creatorId: '101',
    domId: '#bber',
}
if (typeof (bbMemos) !== "undefined") {
    for (var key in bbMemos) {
        if (bbMemos[key]) {
            bbMemo[key] = bbMemos[key];
        }
    }
}
//function loadCssCode(code) {
//    var style = document.createElement('style');
//    style.type = 'text/css';
//    style.rel = 'stylesheet';
//    style.appendChild(document.createTextNode(code));
//    var head = document.getElementsByTagName('head')[0];
//    head.appendChild(style);
//}
//var allCSS = "#bber{margin-top:2em;width:auto !important;}.bb-timeline pre{color:#aaa;}.bb-timeline ul{margin:0;padding:0;}.bb-timeline ul li{list-style-type:none;margin-bottom:3rem;}.bb-timeline ul li .datacont ul li{margin-bottom:0;}.bb-timeline ul li .bb-div{padding:.6rem 1rem;border:1px solid #666;}.bb-load button{font-size:.8rem;font-style:italic;background:none;border-radius:0;border:1px solid #666;padding:10px 30px;width:100%;letter-spacing:0.8rem;}.bb-timeline ul li .datatime{display:flex;width:16px;line-height:18px;font-size:14px;text-align:center;border-right:1px solid rgba(0,0,0,0.35);padding:0 22px 8px 0;float:left;margin-right:1rem;overflow:hidden;max-height:100px;}.bb-timeline ul li .datacont{margin:0 0 0 3.2rem;min-height:88px;}.bb-timeline ul li .datacont img[src*='emotion']{display:inline-block;width:auto;}.bb-timeline ul li .datafrom{color:#aaa;font-size:0.75em !important;font-style:italic;}.bb-timeline ul li p{margin:0;font-size:16px;letter-spacing:1px;color:#3b3d42;line-height:28px;min-height:18px;margin:0;}.bb-timeline pre p{display:inline-block;}.bb-timeline pre p:empty{display:none;}.dark .bb-timeline ul li .datatime{border-color:#666;}.dark .bb-timeline ul li .bb-div p,.dark .bb-timeline .bb-load button{color:#fafafa;}.dark .bb-timeline ul li .bb-div p svg{fill:#fafafa;}.dark .bb-timeline ul li .datafrom{color:#aaa;}.datacont p{magin:0;}.datacont blockquote{font-family: KaiTi,STKaiti,STFangsong !important;margin:0 0 0 1rem;padding:.25rem 2rem;position: relative;border-left:0 none;}.datacont blockquote::before{line-height: 2rem;content: '“';font-family: Georgia, serif;font-size: 28px;font-weight: bold;position: absolute;left: 10px;top:5px;}.datacont .tag-span{color:#42b983;}.datasource a{color:#fafafa;background:#3b3d42;padding:2px 8px;margin:0 6px 0 0;border-radius:5px;font-size:.9rem;font-weight:400;}.datacont .img{cursor:pointer;border-radius:4px;}.datacont .img.square{height:180px;width:180px;object-fit:cover;}.resimg.grid{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;gap:4px;width:calc(100%* 2 / 3);box-sizing:border-box;margin:4px 0 0;}.resimg.grid-2{grid-template-columns:repeat(2,1fr);width:80%;}.resimg.grid-4{grid-template-columns:repeat(2,1fr);width:calc(80% * 2 / 3);}.resimg.grid figure.gallery-thumbnail{position:relative;width:100%;height:0;padding-top:100%;cursor:zoom-in;}.resimg figure{text-align:left;max-height:50%;}.resimg figure img{max-height:50vh;}.resimg.grid figure,figcaption{margin:0 !important;}.resimg.grid figure.gallery-thumbnail > img.thumbnail-image{position:absolute;left:0;top:0;display:block;width:100%;height:100%;object-fit:cover;object-position:50% 50%;}#bb-footer{margin:5rem auto 1rem;text-align:center;}#bb-footer p{margin:0 0 0.6rem;}.bb-allnums{letter-spacing:2px;}.bb-allpub{text-decoration:none;font-style:italic;}.bb-timeline ul li::before{content:none;}.post-preview{max-width:680px;height:210px;margin:1em auto;position:relative;display:flex;background:#fff;border-radius:4px;box-shadow:0 1px 2px rgba(0,0,0,.25),0 0 1px rgba(0,0,0,.25);}.post-preview--meta{width:75%;padding:25px;overflow:hidden;}.post-preview--middle {line-height:28px;}.post-preview--title {font-size:18px;margin:0!important;}.post-preview--title a{text-decoration:none;}.post-preview--date{font-size:14px;color:#999;}.post-preview--excerpt{font-size:14px;line-height:1.825;}.post-preview--excerpt p{display: inline;margin: 0;}.post-preview--image {object-fit:cover;height:auto;width:25%;float:right;border-top-right-radius: 2px!important;border-bottom-right-radius:2px!important;border-top-left-radius:0!important;border-bottom-left-radius:0!important;}@media (max-width:550px) {.post-preview {width:95%;height:120px;}.post-preview--meta{padding:15px;}.post-preview--image{height:120px!important;}.post-preview--excerpt{display:none;}.post-preview--middle {line-height:19px;}}.rating{display:block;line-height:15px;}.rating-star{display:inline-block;width:75px;height:15px;background-repeat:no-repeat;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAClCAYAAAAUAAAYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNrs3T9rFEEcxvG7qEQIglaCICKkin9AUEtBKxU7wS61VlYivgWj70TtNFj5BqzE7qxEWwsxKIoYn4UtluFmbm8nczvzm+/BjxyuDwNzu3uXD0+46f7LC5PA45Hm+WTYw1x2LRDc0jzTXB+wqMlsaLPutz8fDFjYZHYauAz3NBvt83XNnyUWNpn1nVm3OsHmsb3EomazzZnVXKMPNcc0xzUnNKc0Rzv/77fms+Z7O3vt9b1eU7bZrNN68l5zcolX4ofmsuZXTdnmMvyi2dR86Bmcac62P6vKrnVubpc0bxYE32nOab45N8YqsvPeDfcD4SOav4HjprPuu+H5BTt9LXDMfNbdLPfT678Fx6vKupt1o/O8+R3pkOaJ5/iktqx7z/qp+aq5q/nY+fczmheaK03Gs7D5rLtZdzSvA6/Ebc2u55j57HQB0TzW7AzkjiKzny6+2hlKNE8juMNcFqKBaIZndRlCNBBNgmx7ZkE0fbLtZkE0EA1EM17WuQwhGogGooFoss6296y52cNO+J6HLJoPaFdbsvA9zGerIxrPh85eWYgGooFoDiQbuAxp0UA0EVmdWbRo+ma1WbRoIBqIZtzsnHdDWjQQDUQD0WSbde5ZS2UhmtqJJtSEiVkXooFoIJre2VATJmZdiKZ2ogk1YSb8oVMvDeUPnSAaiCaPJkzMuhANRAPRQDQpsqEmTMy6EI11oolpwkA0EA1EcyDZmCYMRAPR+LMxTZjqiCamCQPRQDQQzehNGIgGooFoIJpVZ2OaMBBN7USTqgkD0UA0EE3vbKomDERTO9GkasKYJJpUTRiIBqKBaEZvwkA0EA1EA9GkyKZqwkA01olmrCYMRAPRQDR9LkO+0QmiKbAJUyTRjNWEgWggGohm9CYMRAPRQDQQzZDsWE0YiMYC0eTYhIFoIJrKiCbHJgxEY4FocmzCZEs0OTZhIBqIpjKiybEJA9FANBANROPL5tiEgWhKIJoSmzAQDURjjGhKbMJANCUQTYlNmNGIpsQmDEQD0RgjmhKbMBANRAPR1Es0JTZhIJpciMZaEwaigWgKJBprTRiIJheisdaESUo01powEA1EUyDRWGvCQDQQDURjm2isNWEgmlURzWw2q4pZIBqIJkOiCVyGJpkFolkV0ejMMvel28mIRptl7ku3IRqIpjCimfNuaJpZIBqIBqIpm2ice5Z5ZonJupvVkMRu4JW4qXnrOWY++1+AAQBw9BJSCTeN9wAAAABJRU5ErkJggg==);overflow:hidden;}.allstar10{background-position:0px 0px;}.allstar9{background-position:0px -15px;}.allstar8{background-position:0px -30px;}.allstar7{background-position:0px -45px;}.allstar6{background-position:0px -60px;}.allstar5{background-position:0px -75px;}.allstar4{background-position:0px -90px;}.allstar3{background-position:0px -105px;}.allstar2{background-position:0px -120px;}.allstar1{background-position:0px -135px;}.allstar0{background-position:0px -150px;}.rating-average{color:#777;display:inline-block;font-size:13px;margin-left:10px;}.dark .post-preview{background: #3b3d42;}.video-wrapper{position:relative;padding-bottom:55%;width:100%;height:0}.video-wrapper iframe{position:absolute;height:100%;width:100%;}"
//var allCSS = ".aplayer{background:#fff;font-family:Arial,Helvetica,sans-serif;margin:5px;box-shadow:0 2px 2px 0 rgba(0,0,0,.07),0 1px 5px 0 rgba(0,0,0,.1);border-radius:2px;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:normal;position:relative}.aplayer *{box-sizing:content-box}.aplayer svg{width:100%;height:100%}.aplayer svg circle,.aplayer svg path{fill:#fff}.aplayer.aplayer-withlist .aplayer-info{border-bottom:1px solid #e9e9e9}.aplayer.aplayer-withlist .aplayer-list{display:block}.aplayer.aplayer-withlist .aplayer-icon-order,.aplayer.aplayer-withlist .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-menu{display:inline}.aplayer.aplayer-withlrc .aplayer-pic{height:90px;width:90px}.aplayer.aplayer-withlrc .aplayer-info{margin-left:90px;height:90px;padding:10px 7px 0}.aplayer.aplayer-withlrc .aplayer-lrc{display:block}.aplayer.aplayer-narrow{width:66px}.aplayer.aplayer-narrow .aplayer-info,.aplayer.aplayer-narrow .aplayer-list{display:none}.aplayer.aplayer-narrow .aplayer-body,.aplayer.aplayer-narrow .aplayer-pic{height:66px;width:66px}.aplayer.aplayer-fixed{position:fixed;bottom:0;left:0;right:0;margin:0;z-index:99;overflow:visible;max-width:400px;box-shadow:none}.aplayer.aplayer-fixed .aplayer-list{margin-bottom:65px;border:1px solid #eee;border-bottom:none}.aplayer.aplayer-fixed .aplayer-body{position:fixed;bottom:0;left:0;right:0;margin:0;z-index:99;background:#fff;padding-right:18px;transition:all .3s ease;max-width:400px}.aplayer.aplayer-fixed .aplayer-lrc{display:block;position:fixed;bottom:10px;left:0;right:0;margin:0;z-index:98;pointer-events:none;text-shadow:-1px -1px 0 #fff}.aplayer.aplayer-fixed .aplayer-lrc:after,.aplayer.aplayer-fixed .aplayer-lrc:before{display:none}.aplayer.aplayer-fixed .aplayer-info{-webkit-transform:scaleX(1);transform:scaleX(1);-webkit-transform-origin:0 0;transform-origin:0 0;transition:all .3s ease;border-bottom:none;border-top:1px solid #e9e9e9}.aplayer.aplayer-fixed .aplayer-info .aplayer-music{width:calc(100% - 105px)}.aplayer.aplayer-fixed .aplayer-miniswitcher{display:block}.aplayer.aplayer-fixed.aplayer-narrow .aplayer-info{display:block;-webkit-transform:scaleX(0);transform:scaleX(0)}.aplayer.aplayer-fixed.aplayer-narrow .aplayer-body{width:66px!important}.aplayer.aplayer-fixed.aplayer-narrow .aplayer-miniswitcher .aplayer-icon{-webkit-transform:rotateY(0);transform:rotateY(0)}.aplayer.aplayer-fixed .aplayer-icon-back,.aplayer.aplayer-fixed .aplayer-icon-forward,.aplayer.aplayer-fixed .aplayer-icon-lrc,.aplayer.aplayer-fixed .aplayer-icon-play{display:inline-block}.aplayer.aplayer-fixed .aplayer-icon-back,.aplayer.aplayer-fixed .aplayer-icon-forward,.aplayer.aplayer-fixed .aplayer-icon-menu,.aplayer.aplayer-fixed .aplayer-icon-play{position:absolute;bottom:27px;width:20px;height:20px}.aplayer.aplayer-fixed .aplayer-icon-back{right:75px}.aplayer.aplayer-fixed .aplayer-icon-play{right:50px}.aplayer.aplayer-fixed .aplayer-icon-forward{right:25px}.aplayer.aplayer-fixed .aplayer-icon-menu{right:0}.aplayer.aplayer-arrow .aplayer-icon-loop,.aplayer.aplayer-arrow .aplayer-icon-order,.aplayer.aplayer-mobile .aplayer-icon-volume-down{display:none}.aplayer.aplayer-loading .aplayer-info .aplayer-controller .aplayer-loading-icon{display:block}.aplayer.aplayer-loading .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}.aplayer .aplayer-body{position:relative}.aplayer .aplayer-icon{width:15px;height:15px;border:none;background-color:transparent;outline:none;cursor:pointer;opacity:.8;vertical-align:middle;padding:0;font-size:12px;margin:0;display:inline-block}.aplayer .aplayer-icon path{transition:all .2s ease-in-out}.aplayer .aplayer-icon-back,.aplayer .aplayer-icon-forward,.aplayer .aplayer-icon-lrc,.aplayer .aplayer-icon-order,.aplayer .aplayer-icon-play{display:none}.aplayer .aplayer-icon-lrc-inactivity svg{opacity:.4}.aplayer .aplayer-icon-forward{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.aplayer .aplayer-lrc-content{display:none}.aplayer .aplayer-pic{position:relative;float:left;height:66px;width:66px;background-size:cover;background-position:50%;transition:all .3s ease;cursor:pointer}.aplayer .aplayer-pic:hover .aplayer-button{opacity:1}.aplayer .aplayer-pic .aplayer-button{position:absolute;border-radius:50%;opacity:.8;text-shadow:0 1px 1px rgba(0,0,0,.2);box-shadow:0 1px 1px rgba(0,0,0,.2);background:rgba(0,0,0,.2);transition:all .1s ease}.aplayer .aplayer-pic .aplayer-button path{fill:#fff}.aplayer .aplayer-pic .aplayer-hide{display:none}.aplayer .aplayer-pic .aplayer-play{width:26px;height:26px;border:2px solid #fff;bottom:50%;right:50%;margin:0 -15px -15px 0}.aplayer .aplayer-pic .aplayer-play svg{position:absolute;top:3px;left:4px;height:20px;width:20px}.aplayer .aplayer-pic .aplayer-pause{width:16px;height:16px;border:2px solid #fff;bottom:4px;right:4px}.aplayer .aplayer-pic .aplayer-pause svg{position:absolute;top:2px;left:2px;height:12px;width:12px}.aplayer .aplayer-info{margin-left:66px;padding:14px 7px 0 10px;height:66px;box-sizing:border-box}.aplayer .aplayer-info .aplayer-music{overflow:hidden;white-space:nowrap;text-overflow:ellipsis;margin:0 0 13px 5px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:default;padding-bottom:2px;height:20px}.aplayer .aplayer-info .aplayer-music .aplayer-title{font-size:14px}.aplayer .aplayer-info .aplayer-music .aplayer-author{font-size:12px;color:#666}.aplayer .aplayer-info .aplayer-controller{position:relative;display:flex}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap{margin:0 0 0 5px;padding:4px 0;cursor:pointer!important;flex:1}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap:hover .aplayer-bar .aplayer-played .aplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar{position:relative;height:2px;width:100%;background:#cdcdcd}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-loaded{position:absolute;left:0;top:0;bottom:0;background:#aaa;height:2px;transition:all .5s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played{position:absolute;left:0;top:0;bottom:0;height:2px}.aplayer .aplayer-info .aplayer-controller .aplayer-bar-wrap .aplayer-bar .aplayer-played .aplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:10px;width:10px;border-radius:50%;cursor:pointer;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.aplayer .aplayer-info .aplayer-controller .aplayer-time{position:relative;right:0;bottom:4px;height:17px;color:#999;font-size:11px;padding-left:7px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-time-inner{vertical-align:middle}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon{cursor:pointer;transition:all .2s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon path{fill:#666}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-loop{margin-right:2px}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon:hover path{fill:#000}.aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon.aplayer-icon-menu,.aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-menu,.aplayer .aplayer-info .aplayer-controller .aplayer-time.aplayer-time-narrow .aplayer-icon-mode{display:none}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap{position:relative;display:inline-block;margin-left:3px;cursor:pointer!important}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap:hover .aplayer-volume-bar-wrap{height:40px}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap{position:absolute;bottom:15px;right:-3px;width:25px;height:0;z-index:99;overflow:hidden;transition:all .2s ease-in-out}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap.aplayer-volume-bar-wrap-active{height:40px}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar{position:absolute;bottom:0;right:10px;width:5px;height:35px;background:#aaa;border-radius:2.5px;overflow:hidden}.aplayer .aplayer-info .aplayer-controller .aplayer-volume-wrap .aplayer-volume-bar-wrap .aplayer-volume-bar .aplayer-volume{position:absolute;bottom:0;right:0;width:5px;transition:all .1s ease}.aplayer .aplayer-info .aplayer-controller .aplayer-loading-icon{display:none}.aplayer .aplayer-info .aplayer-controller .aplayer-loading-icon svg{position:absolute;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite}.aplayer .aplayer-lrc{display:none;position:relative;height:30px;text-align:center;overflow:hidden;margin:-10px 0 7px}.aplayer .aplayer-lrc:before{top:0;height:10%;background:linear-gradient(180deg,#fff 0,hsla(0,0%,100%,0));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#00ffffff",GradientType=0)}.aplayer .aplayer-lrc:after,.aplayer .aplayer-lrc:before{position:absolute;z-index:1;display:block;overflow:hidden;width:100%;content:" "}.aplayer .aplayer-lrc:after{bottom:0;height:33%;background:linear-gradient(180deg,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,.8));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#00ffffff",endColorstr="#ccffffff",GradientType=0)}.aplayer .aplayer-lrc p{font-size:12px;color:#666;line-height:16px!important;height:16px!important;padding:0!important;margin:0!important;transition:all .5s ease-out;opacity:.4;overflow:hidden}.aplayer .aplayer-lrc p.aplayer-lrc-current{opacity:1;overflow:visible;height:auto!important;min-height:16px}.aplayer .aplayer-lrc.aplayer-lrc-hide{display:none}.aplayer .aplayer-lrc .aplayer-lrc-contents{width:100%;transition:all .5s ease-out;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text;cursor:default}.aplayer .aplayer-list{overflow:auto;transition:all .5s ease;will-change:height;display:none;overflow:hidden}.aplayer .aplayer-list.aplayer-list-hide{max-height:0!important}.aplayer .aplayer-list ol{list-style-type:none;margin:0;padding:0;overflow-y:auto}.aplayer .aplayer-list ol::-webkit-scrollbar{width:5px}.aplayer .aplayer-list ol::-webkit-scrollbar-thumb{border-radius:3px;background-color:#eee}.aplayer .aplayer-list ol::-webkit-scrollbar-thumb:hover{background-color:#ccc}.aplayer .aplayer-list ol li{position:relative;height:32px;line-height:32px;padding:0 15px;font-size:12px;border-top:1px solid #e9e9e9;cursor:pointer;transition:all .2s ease;overflow:hidden;margin:0}.aplayer .aplayer-list ol li:first-child{border-top:none}.aplayer .aplayer-list ol li:hover{background:#efefef}.aplayer .aplayer-list ol li.aplayer-list-light{background:#e9e9e9}.aplayer .aplayer-list ol li.aplayer-list-light .aplayer-list-cur{display:inline-block}.aplayer .aplayer-list ol li .aplayer-list-cur{display:none;width:3px;height:22px;position:absolute;left:0;top:5px;cursor:pointer}.aplayer .aplayer-list ol li .aplayer-list-index{color:#666;margin-right:12px;cursor:pointer}.aplayer .aplayer-list ol li .aplayer-list-author{color:#666;float:right;cursor:pointer}.aplayer .aplayer-notice{opacity:0;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);font-size:12px;border-radius:4px;padding:5px 10px;transition:all .3s ease-in-out;overflow:hidden;color:#fff;pointer-events:none;background-color:#f4f4f5;color:#909399}.aplayer .aplayer-miniswitcher{display:none;position:absolute;top:0;right:0;bottom:0;height:100%;background:#e6e6e6;width:18px;border-radius:0 2px 2px 0}.aplayer .aplayer-miniswitcher .aplayer-icon{height:100%;width:100%;-webkit-transform:rotateY(180deg);transform:rotateY(180deg);transition:all .3s ease}.aplayer .aplayer-miniswitcher .aplayer-icon path{fill:#666}.aplayer .aplayer-miniswitcher .aplayer-icon:hover path{fill:#000}@-webkit-keyframes aplayer-roll{0%{left:0}to{left:-100%}}@keyframes aplayer-roll{0%{left:0}to{left:-100%}}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.dark .aplayer{background:#212121}.dark .aplayer.aplayer-withlist .aplayer-info{border-bottom-color:#5c5c5c}.dark .aplayer.aplayer-fixed .aplayer-list{border-color:#5c5c5c}.dark .aplayer .aplayer-body{background-color:#212121}.dark .aplayer .aplayer-info{border-top-color:#212121}.dark .aplayer .aplayer-info .aplayer-music .aplayer-title{color:#fff}.dark .aplayer .aplayer-info .aplayer-music .aplayer-author{color:#fff}.dark .aplayer .aplayer-info .aplayer-controller .aplayer-time{color:#eee}.dark .aplayer .aplayer-info .aplayer-controller .aplayer-time .aplayer-icon path{fill:#eee}.dark .aplayer .aplayer-list{background-color:#212121}.dark .aplayer .aplayer-list::-webkit-scrollbar-thumb{background-color:#999}.dark .aplayer .aplayer-list::-webkit-scrollbar-thumb:hover{background-color:#bbb}.dark .aplayer .aplayer-list li{color:#fff;border-top-color:#666}.dark .aplayer .aplayer-list li:hover{background:#4e4e4e}.dark .aplayer .aplayer-list li.aplayer-list-light{background:#6c6c6c}.dark .aplayer .aplayer-list li .aplayer-list-index{color:#ddd}.dark .aplayer .aplayer-list li .aplayer-list-author{color:#ddd}.dark .aplayer .aplayer-lrc{text-shadow:-1px -1px 0 #666}.dark .aplayer .aplayer-lrc:before{background:-moz-linear-gradient(top, #212121 0%, rgba(33,33,33,0) 100%);background:-webkit-linear-gradient(top, #212121 0%, rgba(33,33,33,0) 100%);background:linear-gradient(to bottom, #212121 0%, rgba(33,33,33,0) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#212121', endColorstr='#00212121',GradientType=0 )}.dark .aplayer .aplayer-lrc:after{background:-moz-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.8) 100%);background:-webkit-linear-gradient(top, rgba(33,33,33,0) 0%, rgba(33,33,33,0.8) 100%);background:linear-gradient(to bottom, rgba(33,33,33,0) 0%, rgba(33,33,33,0.8) 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00212121', endColorstr='#cc212121',GradientType=0 )}.dark .aplayer .aplayer-lrc p{color:#fff}.dark .aplayer .aplayer-miniswitcher{background:#484848}.dark .aplayer .aplayer-miniswitcher .aplayer-icon path{fill:#eee}"

//loadCssCode(allCSS);

var limit = bbMemo.limit
var memos = bbMemo.memos
var page = 1
  , offset = 0
  , nextLength = 0
  , nextDom = '';
var bbDom = document.querySelector(bbMemo.domId);
var load = '<div class="bb-load"><button class="load-btn button-load">加载中……</button></div>'
if (bbDom) {
    //首次加载数据
    getFirstList()
    //加载总数
    getTotal()
    //meNums()
    var btn = document.querySelector("button.button-load");
    btn.addEventListener("click", function() {
        btn.textContent = '努力加载中……';
        updateHTMl(nextDom)
        if (nextLength < limit) {
            //返回数据条数小于限制条数，隐藏
            document.querySelector("button.button-load").remove()
            return
        }
        getNextList()
    });
}
// 渲染第一页（前 10 条）
function getFirstList() {
    bbDom.insertAdjacentHTML('afterend', load);
    var bbUrl = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit;
    fetch(bbUrl).then(res=>res.json()).then(resdata=>{
        updateHTMl(resdata.data)
        var nowLength = resdata.data.length
        if (nowLength < limit) {
            //返回数据条数小于 limit 则直接移除“加载更多”按钮，中断预加载
            document.querySelector("button.button-load").remove()
            return
        }
        page++
        offset = limit * (page - 1)
        getNextList()
    }
    );
}
//预加载下一页数据
function getNextList() {
    var bbUrl = memos + "api/memo?creatorId=" + bbMemo.creatorId + "&rowStatus=NORMAL&limit=" + limit + "&offset=" + offset;
    fetch(bbUrl).then(res=>res.json()).then(resdata=>{
        nextDom = resdata.data
        nextLength = nextDom.length
        page++
        offset = limit * (page - 1)
        if (nextLength < 1) {
            //返回数据条数为 0 ，隐藏
            document.querySelector("button.button-load").remove()
            return
        }
    }
    )
}
//加载总 Memos 数
//function meNums() {
//    var bbLoad = document.querySelector('.bb-load')
//    var bbUrl = memos + "api/memo/stats?creatorId=" + bbMemo.creatorId
//    fetch(bbUrl).then(res=>res.json()).then(resdata=>{
//        if (resdata.data) {
//            var allnums = '<div id="bb-footer"><p class="bb-allnums">共 ' + resdata.data.length + ' 条 </p><p class="bb-allpub"><a href="https://immmmm.com/bbs/" target="_blank">Memos Public</a></p></div>'
//            bbLoad.insertAdjacentHTML('afterend', allnums);
//        }
//    }
//    )
//}
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
// 插入 html
function updateHTMl(data) {
    var result = ""
      , resultAll = "";
    const TAG_REG = /#([^\s#]+?) /g;
    const BILIBILI_REG = /<a\shref="https:\/\/www\.bilibili\.com\/video\/((av[\d]{1,10})|(BV([\w]{10})))\/?".*?>.*<\/a>/g;
    const NETEASE_MUSIC_REG = /<a\shref="https:\/\/music\.163\.com\/.*id=([0-9]+)".*?>.*<\/a>/g;
    const QQMUSIC_REG = /<a\shref="https\:\/\/y\.qq\.com\/.*(\/[0-9a-zA-Z]+)(\.html)?".*?>.*?<\/a>/g;
    const QQVIDEO_REG = /<a\shref="https:\/\/v\.qq\.com\/.*\/([a-z|A-Z|0-9]+)\.html".*?>.*<\/a>/g;
    const SPOTIFY_REG = /<a\shref="https:\/\/open\.spotify\.com\/(track|album)\/([\s\S]+)".*?>.*<\/a>/g;
    const YOUKU_REG = /<a\shref="https:\/\/v\.youku\.com\/.*\/id_([a-z|A-Z|0-9|==]+)\.html".*?>.*<\/a>/g;
    const YOUTUBE_REG = /<a\shref="https:\/\/www\.youtube\.com\/watch\?v\=([a-z|A-Z|0-9]{11})\".*?>.*<\/a>/g;
    // Marked Options
    marked.setOptions({
        breaks: !0,
        smartypants: !0,
        langPrefix: 'language-'
//        highlight: function (code, lang) {
//            const language = hljs.getLanguage(lang) ? lang : "plaintext";
//            return hljs.highlight.toString(code, { language }).value;
//        },
    });
     const renderer = {
            image(href, title, text) {
                return `
                    <div id="lightgallery">
                        <a href="${href}"><img loading="lazy" class="img" src="${href}" alt="${text}"></a>
                    </div>`;
                }, // 图片加灯箱效果
            link(href, title, text) {
                return `<a href='${href}' target='_blank' rel='noopener noreferrer'>${text}</a>`;
            } // 链接新窗口
        };
        // marked.use({ renderer });

        // Memos Content
    for (var i = 0; i < data.length; i++) {
        var bbContREG = data[i].content.replace(TAG_REG, "<span class='tag-span'>#$1</span> ")
//        bbContREG = marked.parse(bbContREG).replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//player.bilibili.com/player.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>").replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>").replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>").replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>").replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>").replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
        bbContREG = marked.parse(pangu.spacing(bbContREG))
            .replace(BILIBILI_REG, "<div class='video-wrapper'><iframe src='//player.bilibili.com/player.html?bvid=$1&as_wide=1&high_quality=1&danmaku=0' scrolling='no' border='0' frameborder='no' framespacing='0' allowfullscreen='true'></iframe></div>")
            .replace(NETEASE_MUSIC_REG, "<meting-js auto='https://music.163.com/#/song?id=$1'></meting-js>")
            .replace(QQMUSIC_REG, "<meting-js auto='https://y.qq.com/n/yqq/song$1.html'></meting-js>")
            .replace(QQVIDEO_REG, "<div class='video-wrapper'><iframe src='//v.qq.com/iframe/player.html?vid=$1' allowFullScreen='true' frameborder='no'></iframe></div>")
            .replace(SPOTIFY_REG, "<div class='spotify-wrapper'><iframe style='border-radius:12px' src='https://open.spotify.com/embed/$1/$2?utm_source=generator&theme=0' width='100%' frameBorder='0' allowfullscreen='' allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture' loading='lazy'></iframe></div>")
            .replace(YOUKU_REG, "<div class='video-wrapper'><iframe src='https://player.youku.com/embed/$1' frameborder=0 'allowfullscreen'></iframe></div>")
            .replace(YOUTUBE_REG, "<div class='video-wrapper'><iframe src='https://www.youtube.com/embed/$1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen title='YouTube Video'></iframe></div>")
        //解析内置资源文件
        if (data[i].resourceList && data[i].resourceList.length > 0) {
            var resourceList = data[i].resourceList;
            var imgUrl = ''
              , resUrl = ''
              , resImgLength = 0;
            for (var j = 0; j < resourceList.length; j++) {
                var restype = resourceList[j].type.slice(0, 5)
                var resexlink = resourceList[j].externalLink
                var resLink = ''
                  , fileId = ''
                if (resexlink) {
                    resLink = resexlink
                } else {
                    fileId = resourceList[j].publicId || resourceList[j].filename
                    resLink = memos + 'o/r/' + resourceList[j].id + '/' + fileId
                }
                if (restype == 'image') {
                    imgUrl += '<figure class="gallery-thumbnail"><img class="img thumbnail-image" src="' + resLink + '"/></figure>'
                    resImgLength = resImgLength + 1
                }
                if (restype !== 'image') {
                    resUrl += '<a target="_blank" rel="noreferrer" href="' + resLink + '">' + resourceList[j].filename + '</a>'
                }
            }
            if (imgUrl) {
                var resImgGrid = ""
                if (resImgLength !== 1) {
                    var resImgGrid = "grid grid-" + resImgLength
                }
                bbContREG += '<div class="resimg ' + resImgGrid + '">' + imgUrl + '</div></div>'
            }
            if (resUrl) {
                bbContREG += '<p class="datasource">' + resUrl + '</p>'
            }
        }
        result += '<li id="' + data[i].id + '" class="timeline"><div class="talks__content"><div class="talks__text"><div class="talks__userinfo"><div>Yuli Rao</div><div><svg viewBox="0 0 24 24" aria-label="认证账号" class="talks__verify"><g><path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z"></path></g></svg></div><div class="talks__id">@azad · </div><small class="talks__date"><a href="https://memos.itisn.cyou/m/' + data[i].id + '" target="_blank">' + moment(data[i].createdTs * 1000).twitterLong() + '</a></small></div><p>' + bbContREG + '</p></div></div></li>'
    }
    // end for
    var bbBefore = "<section class='bb-timeline'><ul class='bb-list-ul'>"
    var bbAfter = "</ul></section>"
    resultAll = bbBefore + result + bbAfter
    bbDom.insertAdjacentHTML('beforeend', resultAll);
//    hljs.initHighlighting.called = false;
//    hljs.configure({
//        ignoreUnescapedHTML: true,
//    });
//    hljs.highlightAll();
//    lightGallery(document.getElementById("lightgallery"));
    document.querySelector('button.button-load').textContent = '加载更多';
    //图片灯箱
    window.ViewImage && ViewImage.init('.datacont img')
    //相对时间
    window.Lately && Lately.init({
        target: '.datatime'
    });
}