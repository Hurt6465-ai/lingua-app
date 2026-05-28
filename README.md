# 886 Learning App

这是给 `886.best` 配套的轻量学习 App 前端，技术栈：

- Vite
- Preact
- TypeScript
- TailwindCSS
- Dexie / IndexedDB

目标部署域名建议：

```txt
learn.886.best
```

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

创建 Cloudflare Pages 项目时填写：

```txt
Framework preset: Vite
Build command: npm run build
Build output directory: dist
```

## 当前功能

- App 风格首页
- 背单词页面
- 中文发音按钮
- 中文 → 缅文卡片
- 收藏单词
- 本地学习进度
- 学习统计
- 主线闯关地图视觉骨架

## 下一步建议

1. 把真实词库导入 `src/data/words.ts`
2. 加拼音声母 / 韵母 / 声调模块
3. 加多邻国式选择题
4. 加音频文件
5. 最后再接登录和 VIP
