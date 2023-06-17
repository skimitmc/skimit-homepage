import{_ as e,V as l,W as i,a0 as t,X as d,$ as s,Z as a}from"./framework-dc4c2c51.js";const n={},o=d("h1",{id:"节点列表",tabindex:"-1"},[d("a",{class:"header-anchor",href:"#节点列表","aria-hidden":"true"},"#"),s(" 节点列表")],-1),c=a('<table id="normal"><tr><th rowspan="2">节点名</th><th rowspan="2">JE</th><!--&lt;th rowspan=&quot;2&quot;&gt;BE&lt;/th&gt;--><th colspan="2">ASN</th><th rowspan="2">国内线路</th><th rowspan="2">预计的更改或移除时间 (UTC+8)</th></tr><tr><th>IPv4</th><th>IPv6</th></tr><tr><td>临沂教育网</td><td>lyu.play.skimit.net</td><!--&lt;td id=&quot;ly-1-be&quot;&gt;&lt;code&gt;ly-1.skimit.net, &lt;code&gt;19132&lt;/td&gt;--><td>教育网 (AS4538)</td><td>-</td><td>教育网</td><td>未计划</td></tr><tr><td>义乌电信</td><td>ywp.play.skimit.net</td><!--&lt;td id=&quot;jh-1-be&quot;&gt;&lt;code&gt;jh-1.skimit.net, &lt;code&gt;19132&lt;/td&gt;--><td>中国电信 (AS4134)</td><td>-</td><td>中国电信</td><td>2023年8月</td></tr><tr><td>枣庄联通</td><td>zzn.skimit.net</td><!--&lt;td id=&quot;zz-1-be&quot;&gt;&lt;code&gt;zz-1.skimit.net, &lt;code&gt;59811&lt;/td&gt;--><td>中国联通 (AS4837)</td><td>-</td><td>中国联通</td><td>未计划</td></tr><tr><td>枣庄电信</td><td>zzm.play.skimit.net</td><!--&lt;td id=&quot;zz-1-be&quot;&gt;&lt;code&gt;zz-1.skimit.net, &lt;code&gt;59811&lt;/td&gt;--><td>山东电信 (AS137690)</td><td>-</td><td>中国电信</td><td>未计划</td></tr><tr><td>宿迁电信</td><td>sqq.skimit.net</td><!--&lt;td id=&quot;sq-1-be&quot;&gt;&lt;code&gt;sq-1.skimit.net, &lt;code&gt;10469&lt;/td&gt;--><td>中国电信 (AS4134)</td><td>-</td><td>中国电信</td><td>2023年8月27日12时18分36秒</td></tr><tr><td>上海BGP</td><td>shq.play.skimit.net</td><!--&lt;td id=&quot;sh-1-be&quot;&gt;&lt;code&gt;sh-1.skimit.net, &lt;code&gt;19132&lt;/td&gt;--><td colspan="2">青云 (AS59078)</td><td>中国电信/中国移动/中国联通</td><td>2024年5月29日19时58分09秒</td></tr><tr><td>香港CLD（建设中）</td><td>hkd.play.skimit.net</td><!--&lt;td id=&quot;hk-1-be&quot;&gt;&lt;code&gt;hk-1.skimit.net, &lt;code&gt;19132&lt;/td&gt;--><td>Cloudie (AS55933)</td><td><p>Cloudie (AS55933)</p><p>Huricane Electric (AS6939)</p></td><td></td><td>2025年5月2日</td></tr><tr><td>香港腾讯</td><td>hkt.play.skimit.net</td><!--&lt;td id=&quot;hk-1-be&quot;&gt;&lt;code&gt;hk-1.skimit.net, &lt;code&gt;19132&lt;/td&gt;--><td>腾讯云 (AS132203)</td><td>Huricane Electric (AS6939)</td><td></td><td>2023年9月3日15是35分40秒</td></tr><tr><td>洛杉矶Multacom</td><td>lam.play.skimit.net</td><!--&lt;td id=&quot;us-la-1-be&quot;&gt;&lt;code&gt;us-la-1.skimit.net, &lt;code&gt;19132&lt;/td&gt;--><td colspan="2">Multacom (AS35916)</td><td></td><td>未计划</td></tr></table><h1 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h1><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 基岩版域名</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 基于 WebSocket 或 HTTP 长连接的连接方式</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 国内移动节点</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 线路更好的洛杉矶/圣何塞/关岛转发节点</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 日/韩节点</label></li></ul>',3);function r(k,m){return l(),i("div",null,[o,t(`
::: tip
加入时若要指定 IPv4 或 IPv6 ， 可以在域名前加 \`4.\` 或 \`6.\`  
如指定临沂3节点 IPv6 则使用 \`6.ly-3.skimit.net\`
:::

## 原版直接连接
`),c,t(`
## 使用 RakNet 协议连接
::: tip
使用此类节点需要安装 [Raknetify](/模组仓库#raknetify) 模组
:::
<table>
    <tr>
        <th>节点名</th>
        <th>JE</th>
    </tr>
    <tr>
        <td>临沂1</td>
        <td>raknet;ly-1.skimit.net</td>
    </tr>
    <tr>
        <td>临沂3</td>
        <td>raknet;ly-3.skimit.net</td>
    </tr>
    <tr>
        <td>福州1</td>
        <td>raknet;fz-1.skimit.net</td>
    </tr>
    <tr>
        <td>青岛1</td>
        <td>raknet;qd-1.skimit.net</td>
    </tr>
</table>
`)])}const b=e(n,[["render",r],["__file","index.html.vue"]]);export{b as default};
