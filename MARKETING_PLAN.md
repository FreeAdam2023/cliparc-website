# ClipArc 推广计划

**App Store 链接**: https://apps.apple.com/ca/app/cliparc/id6758186311?mt=12
**官网**: https://cliparc.net
**Apple ID**: 6758186311

---

## 已完成 (技术层面)

- [x] cliparc.net 独立网站上线（Next.js 静态站，Vercel 部署）
- [x] 13 语言 i18n（en, zh-Hans, zh-Hant, ja, ko, es, fr, de, it, pt-BR, ru, ar, hi）
- [x] SEO 基础设施：sitemap.xml, robots.txt, JSON-LD, hreflang, canonical
- [x] Twitter Card + Open Graph + OG Image
- [x] apple-itunes-app Safari 智能横幅
- [x] Google Search Console 验证 + sitemap 提交
- [x] Bing Webmaster Tools 验证 + sitemap 提交
- [x] versegates.com ClipArc 页面 canonical 指向 cliparc.net
- [x] 地区化 App Store 链接（按语言跳转对应地区）

---

## 第一阶段：App Store 优化 (ASO) — 本周内

### 1. 关键词优化（App Store Connect）

在 App Store Connect → App Information → Keywords 中填满 100 字符。

**英文关键词建议**（用逗号分隔，不加空格）：
```
clipboard,manager,history,copy,paste,snippet,pasteboard,productivity,menubar,organize,search,text
```

**每种语言都要单独优化关键词**，不要直接翻译英文，要用当地用户实际搜索的词：

| 语言 | 关键词建议 |
|------|-----------|
| 简体中文 | 剪贴板,管理器,复制,粘贴,历史记录,剪切板,效率工具,文本管理,代码片段,菜单栏 |
| 日本語 | クリップボード,管理,コピー,ペースト,履歴,テキスト管理,生産性,メニューバー,スニペット |
| 한국어 | 클립보드,관리자,복사,붙여넣기,히스토리,생산성,메뉴바,텍스트,코드 |

### 2. 副标题优化

用满 30 字符的副标题字段：

| 语言 | 副标题 |
|------|--------|
| English | Clipboard History & Organizer |
| 简体中文 | 智能剪贴板历史记录管理 |
| 日本語 | クリップボード履歴マネージャー |

### 3. App Store 描述优化

描述的前 3 行最重要（折叠前可见）。结构建议：
1. **第一行**：核心价值主张（一句话说清楚 app 做什么）
2. **第二行**：最强差异化功能
3. **第三行**：免费 + 隐私优势

示例：
```
Never lose what you copy. ClipArc saves your clipboard history with smart content detection for 10+ types including text, code, URLs, images, and more.

⌘⇧V instant access anywhere. Fuzzy search finds anything in seconds. Three paste modes fit your workflow.

100% free. 100% private. All data stays on your Mac — no cloud, no accounts, no tracking.
```

### 4. 截图优化

- 准备 5 张截图，每张突出一个核心功能
- **第一张最重要** — 建议展示浮动面板全貌 + "Smart Clipboard Manager" 标题
- 截图顺序建议：
  1. 主界面全貌（浮动面板 + 多种内容类型）
  2. 快捷键唤起（展示 ⌘⇧V）
  3. 搜索功能（模糊搜索实际效果）
  4. 内容类型识别（代码、URL、颜色等）
  5. 设置/自定义选项
- 每种语言的截图也要本地化

### 5. App Store 页面本地化

你的网站已有 13 种语言翻译，App Store 也要同步：
- [ ] 标题本地化（每种语言）
- [ ] 副标题本地化（每种语言）
- [ ] 描述本地化（每种语言）
- [ ] 关键词本地化（每种语言，用当地搜索习惯）
- [ ] 截图本地化（至少中文、日文、韩文需要本地化截图）

---

## 第二阶段：免费推广渠道 — 2 周内

### 6. Product Hunt 发布

**准备**：
- 选择周二到周四发布（流量最大）
- 准备 tagline（60 字符内）：`Smart clipboard manager for macOS — free, private, multilingual`
- 准备 description（简短介绍 + 功能亮点 + 差异化）
- 准备 GIF/视频展示核心操作流程
- 找 5-10 个朋友提前准备好在发布当天 upvote + 评论
- 发布时间：太平洋时间 00:01（确保一整天的曝光）

**发布链接**：https://www.producthunt.com/posts/new

### 7. Reddit 发帖

**适合发的 subreddit**：

| Subreddit | 粉丝数 | 发帖建议 |
|-----------|--------|---------|
| r/macapps | ~200K | 最相关，标题用 `[App] ClipArc - Free clipboard manager...` |
| r/mac | ~1M | 标题用分享/推荐口吻，不要太广告 |
| r/productivity | ~2M | 侧重效率提升故事，不要直接推销 |
| r/apple | ~5M | 谨慎，先看版规，Self-promotion 可能被删 |
| r/macOS | ~300K | 分享开发故事 + 功能 |

**发帖模板**（r/macapps）：
```
Title: [App] ClipArc – Free clipboard manager with smart content detection (10+ types)

Body:
Hi r/macapps! I built ClipArc, a clipboard manager for macOS.

Key features:
- Detects 10+ content types (text, URLs, code, colors, JSON, etc.)
- ⌘⇧V global hotkey for instant access
- Fuzzy search across your history
- 100% local – no cloud, no accounts
- 13 languages supported

It's completely free right now.

Mac App Store: [link]
Website: https://cliparc.net

Happy to answer any questions or take feedback!
```

### 8. Hacker News — Show HN

**标题格式**：`Show HN: ClipArc – Free clipboard manager for macOS with smart content detection`

**正文**要点：
- 简述为什么做这个（解决什么问题）
- 技术栈亮点（Swift, SwiftUI, SwiftData）
- 隐私设计（全本地，无数据上传）
- 与 macOS Tahoe 内置剪贴板的差异
- 附上链接

**最佳发帖时间**：美东时间上午 8-10 点（周二到周四）

### 9. macOS 工具收录网站提交

逐个提交到以下网站：

| 网站 | 提交链接 | 说明 |
|------|---------|------|
| macmenubar.com | 首页有提交入口 | 专收 Menu Bar 应用 |
| macapps.link | 首页提交 | macOS 应用目录 |
| awesome-macos | GitHub 搜索 awesome-macos | PR 添加你的 app |
| alternativeto.com | https://alternativeto.net/how-to-add-software/ | 添加为 Paste/Maccy 的替代品 |
| slant.co | 搜索 clipboard manager 并添加 | 推荐类网站 |
| setapp.com | 联系入驻 | 订阅制应用商城 |

---

## 第三阶段：内容营销 — 1 个月内

### 10. 博客/SEO 长尾内容

在 cliparc.net 添加 `/blog` 路径，发布 SEO 优化文章：

**文章选题建议**（按搜索量优先级排）：

1. **"Best Clipboard Managers for macOS 2026"**
   - 对比 Paste, Maccy, CopyClip, Raycast, ClipArc
   - 长尾关键词：best clipboard manager mac, clipboard history mac
   - 客观对比，不要只夸自己

2. **"macOS Tahoe Clipboard History vs Third-Party Managers"**
   - 分析系统内置的局限性
   - 关键词：macos clipboard history, spotlight clipboard

3. **"How to Manage Clipboard History on Mac"**
   - 教程类，面向新手
   - 关键词：clipboard history mac, copy paste history mac

4. **"Best Free Clipboard Manager for Mac"**
   - 强调免费优势
   - 关键词：free clipboard manager mac

5. **"Clipboard Manager Privacy: What Apps Do With Your Data"**
   - 隐私角度差异化
   - 关键词：clipboard manager privacy, clipboard security

### 11. 社交媒体

- **Twitter/X**: 创建 @ClipArcApp 账号，发布功能演示 GIF
- **YouTube**: 录制 2-3 分钟产品演示视频
- **微信公众号/小红书**: 中文用户推广

---

## 第四阶段：持续优化 — 长期

### 12. 用户反馈循环

- App Store 评分：引导满意用户去评分（应用内适时提示）
- 收集功能需求：通过 support@versegates.com
- 关注竞品动态：Paste, Maccy 的更新

### 13. 版本迭代方向

根据产品分析文档的优先级：
- Pin/收藏功能（用户留存关键）
- 密码管理器排除规则
- 紧凑列表视图
- 快捷键自定义

### 14. Vercel Web Analytics

在 Vercel Dashboard → Analytics → Enable 开启免费流量分析，追踪：
- 哪些语言页面访问量最大（指导 ASO 优先级）
- 用户从哪里来（指导推广渠道投入）
- App Store 按钮点击率

---

## 关键指标追踪

| 指标 | 工具 | 目标（3个月） |
|------|------|-------------|
| Google 索引页数 | Google Search Console | 65 页全部索引 |
| 搜索展示次数 | Google Search Console | 1000+/月 |
| 网站访客 | Vercel Analytics | 500+/月 |
| App Store 展示 | App Store Connect Analytics | 5000+/月 |
| 下载量 | App Store Connect | 100+/月 |
| App Store 评分 | App Store | 4.5+ (10+ 评分) |

---

## 时间线总结

| 时间 | 动作 |
|------|------|
| 本周 | ASO 优化（关键词、副标题、描述、截图） |
| 第 2 周 | Product Hunt 发布 + Reddit 发帖 |
| 第 2-3 周 | Hacker News Show HN + 工具收录网站提交 |
| 第 4 周 | 开始写第一篇博客文章 |
| 持续 | 收集反馈、迭代产品、追踪指标 |
