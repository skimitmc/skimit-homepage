---
author: Glucy2
---
# 节点列表

| 节点名         |              连接地址 | 隧道大致延迟（ms） | IPv4 | IPv6 | Raknetify |        基岩版（地址，端口）       | 备注                                                      |
|----------------|----------------------:|:------------------:|:----:|:----:|:---------:|:---------------------------------:|-----------------------------------------------------------|
| 自动选择       |     `play.skimit.net` |          -         |  ✅  |  ✅  |     ✅    |                 ❌                | 目前仅会选择中国大陆节点                                  |
| 山东济宁移动   | `jnm.play.skimit.net` |         12         |  ✅  |  ❌  |     ✅    | `jnm.be.play.skimit.net`, `19132` |                                                           |
| 江苏南京联通   | `nju.play.skimit.net` |         23         |  ✅  |  ✅  |     ✅    | `nju.be.play.skimit.net`, `19132` |                                                           |
| 山东临沂教育网 | `lye.play.skimit.net` |          -         |  ✅  |  ❌  |     ✅    | `lye.be.play.skimit.net`, `19132` |                                                           |
| 江苏宿迁多线   | `sqm.play.skimit.net` |         37         |  ✅  |  ❌  |     ✅    | `sqm.be.play.skimit.net`, `39132` |                                                           |
| 山东枣庄多线   | `zzs.play.skimit.net` |         47         |  ✅  |  ❌  |     ✅    |                 ❌                |                                                           |
| 香港腾讯云     | `hkt.play.skimit.net` |         70         |  ✅  |  ❌  |     ✅    | `hkt.be.play.skimit.net`, `19132` |                                                           |
| 香港CLD        | `hkd.play.skimit.net` |         70         |  ✅  |  ✅  |     ✅    | `hkd.be.play.skimit.net`, `19132` | 可能2025-05-02下线                                        |
| 东京多线       | `tyd.play.skimit.net` |         97         |  ✅  |  ❌  |     ✅    | `tyd.be.play.skimit.net`, `19132` | 可能2026-06-11下线                                        |
| 洛杉矶9929     | `lav.play.skimit.net` |         164        |  ✅  |  ❌  |     ✅    | `lav.be.play.skimit.net`, `19132` |                                                           |
| 台北多线       | `tpu.play.skimit.net` |         214        |  ✅  |  ❌  |     ✅    | `tpu.be.play.skimit.net`, `19132` | 线路拥堵延迟极高不建议使用；2024-07-01T00:13:56+08:00下线 |

<!--
| 广东中山电信   | `zst.play.skimit.net` |         53        |  ✅  |  ❌  |     ✅    | `zst.be.play.skimit.net`, `39132` |                                                   |
-->

使用 [Raknetify](https://modrinth.com/plugin/raknetify/versions) 连接

## TODO

- [ ] 基于 WebSocket 的连接方式
