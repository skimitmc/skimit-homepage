import{_ as d,V as e,W as a,a0 as t,X as l,$ as i,Z as s}from"./framework-dc4c2c51.js";const n={},g=l("h1",{id:"节点列表",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#节点列表","aria-hidden":"true"},"#"),i(" 节点列表")],-1),r=s(`<table id="normal"><tr><th rowspan="2">节点名</th><th rowspan="2">JE</th><th colspan="2">ASN</th><th rowspan="2">国内线路</th><th rowspan="2">备注</th></tr><tr><th>IPv4</th><th>IPv6</th></tr><tr><td>义乌电信</td><td>ywp.play.skimit.net</td><td>中国电信 (AS4134)</td><td>-</td><td>中国电信</td><td>2023-08前下线</td></tr><tr><td>枣庄BGP</td><td>zzs.play.skimit.net</td><td>山东亿信通 (AS139180)</td><td>-</td><td>中国电信/中国移动/中国联通</td><td></td></tr><tr><td>济宁移动</td><td>jnm.play.skimit.net</td><td>山东移动 (AS24444)</td><td>-</td><td>中国移动</td><td>2024-06-19T02:05:00+08:00下线</td></tr><tr><td>洛杉矶Multacom</td><td>lam.play.skimit.net</td><td colspan="2">Multacom (AS35916)</td><td></td><td>2023-11-14前更换</td></tr><tr><td>临沂教育网（待恢复）</td><td>lye.play.skimit.net</td><td>教育网 (AS4538)</td><td>-</td><td>教育网</td><td>2023-08-16恢复</td></tr><!--
    还没上线的
    &lt;tr&gt;
        &lt;td&gt;枣庄电信&lt;/td&gt;
        &lt;td&gt;zzm.play.skimit.net&lt;/td&gt;
        &lt;td&gt;枣庄电信 (AS137690)&lt;/td&gt;
        &lt;td&gt;-&lt;/td&gt;
        &lt;td&gt;中国电信&lt;/td&gt;
        &lt;td&gt;未计划&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;宿迁电信&lt;/td&gt;
        &lt;td&gt;sqq.play.skimit.net&lt;/td&gt;
        &lt;td&gt;中国电信 (AS4134)&lt;/td&gt;
        &lt;td&gt;-&lt;/td&gt;
        &lt;td&gt;中国电信&lt;/td&gt;
        &lt;td&gt;2023-08-27T12:18:36+08:00&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;上海BGP&lt;/td&gt;
        &lt;td&gt;shq.play.skimit.net&lt;/td&gt;
        &lt;td colspan=&quot;2&quot;&gt;青云 (AS59078)&lt;/td&gt;
        &lt;td&gt;中国电信/中国移动/中国联通&lt;/td&gt;
        &lt;td&gt;2024-05-29T19:58:09+08:00&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;香港CLD&lt;/td&gt;
        &lt;td&gt;hkd.play.skimit.net&lt;/td&gt;
        &lt;td&gt;Cloudie (AS55933)&lt;/td&gt;
        &lt;td&gt;&lt;p&gt;Cloudie (AS55933)&lt;/p&gt;&lt;p&gt;Huricane Electric (AS6939)&lt;/p&gt;&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;2025-05-02&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;东京BGP&lt;/td&gt;
        &lt;td&gt;tyd.play.skimit.net&lt;/td&gt;
        &lt;td&gt;DigitalVirt (AS11161)&lt;/td&gt;
        &lt;td&gt;Huricane Electric (AS6939)&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;2025-05-02&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;香港腾讯云&lt;/td&gt;
        &lt;td&gt;hkt.play.skimit.net&lt;/td&gt;
        &lt;td&gt;腾讯云 (AS132203)&lt;/td&gt;
        &lt;td&gt;Huricane Electric (AS6939)&lt;/td&gt;
        &lt;td&gt;&lt;/td&gt;
        &lt;td&gt;2023-09-03T15:35:40+08:00&lt;/td&gt;
    &lt;/tr&gt;
--></table><h2 id="todo" tabindex="-1"><a class="header-anchor" href="#todo" aria-hidden="true">#</a> TODO</h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 基岩版域名</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 基于 WebSocket 或 HTTP 长连接的连接方式</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 国内移动节点</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 国内联通节点</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 线路更好的洛杉矶/圣何塞/关岛转发节点</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 日/韩节点</label></li></ul>`,3);function c(k,m){return e(),a("div",null,[g,t(`
::: tip
加入时若要指定 IPv4 或 IPv6 ， 可以在域名前加 \`4.\` 或 \`6.\`  
如指定临沂3节点 IPv6 则使用 \`6.ly-3.skimit.net\`
:::

## 原版直接连接
`),r,t(`
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
`)])}const b=d(n,[["render",c],["__file","index.html.vue"]]);export{b as default};
