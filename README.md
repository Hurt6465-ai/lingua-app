# 886 Learning Framework

这是给 `886.best` 配套重做的轻量学习 App 基础框架。

## 技术栈

- Vite
- Preact
- TypeScript
- TailwindCSS
- Dexie / IndexedDB
- pinyin-pro 拼音库
- hanzi-writer 笔顺库
- @use-gesture/vanilla 手势库

## 当前目标

这不是正式内容站，也不是 NotionNext。  
这是单独部署到 `learn.886.best` 的手机端学习 App 框架。

## 当前已经包含

- 手机优先首页
- 浅渐变背景
- 底部导航
- 课程入口卡片
- 拼音学习模块
- 笔顺练习模块
- 单词学习框架
- 手势滑动学习卡片
- 选择题组件
- 填空题组件
- IndexedDB 本地进度表
- 配置化入口，方便后续接真实数据

## 本地运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## Cloudflare Pages

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
```

## 下一步

1. 按真实需求调整首页卡片。
2. 接入真实拼音课程 JSON。
3. 接入真实汉字笔顺练习列表。
4. 接入单词、填空题、选择题数据。
5. 再考虑账号同步和 VIP 权限。
