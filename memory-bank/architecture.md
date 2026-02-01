# 2048 游戏架构设计文档

## 项目结构

```
2048/
├── index.html          # 主页面入口
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── game.js         # 游戏主逻辑（全局状态管理、初始化、流程控制）
│   ├── grid.js         # 网格数据结构和操作（全局 window.Grid 挂载）
│   ├── ui.js           # 用户界面更新逻辑（全局 window.UI 挂载）
│   ├── input.js        # 输入控制模块
│   └── storage.js      # 数据持久化模块
├── assets/             # 资源文件目录
└── memory-bank/        # 项目文档和计划
    ├── architecture.md # 架构设计文档
    ├── dev-plan.md     # 开发计划
    ├── game-design-document.md # 游戏设计文档
    ├── progress.md     # 项目进度记录
    └── tech-stack.md   # 技术栈说明
```

## 文件说明

### index.html
主页面文件，包含游戏界面的基本结构，包括游戏网格、分数显示、控制按钮等元素。所有 JS 以 script 顺序加载，模块通过 window 全局对象通信。

### css/style.css
样式表文件，定义游戏界面的外观和布局，包括网格样式、方块颜色、按钮样式等。tile 渲染定位已补偿 tile-container 内边距，保证与网格精准对齐。

### js/game.js
游戏主逻辑文件，包含：
- 全局状态对象 gameState 的初始化与管理
- createInitialGameState 随机生成两个初始方块
- updateUI 自动同步界面
- 所有主要接口挂载到 window 便于其他模块调用
- 依赖 window.Grid、window.UI

### js/grid.js
网格数据结构文件，实现 4x4 网格的创建、操作、克隆等，所有方法挂载到 window.Grid，供 game.js 直接调用。

### js/ui.js
用户界面更新文件，负责将 gameState 渲染为视觉元素。tile 渲染采用绝对定位，补偿 tile-container 内边距，保证方块与网格精准对齐。所有接口挂载到 window.UI。

### js/input.js
输入控制文件，处理键盘和触摸输入事件，将用户操作转换为游戏动作。

### js/storage.js
数据持久化文件，处理游戏状态和分数的本地存储，实现游戏进度保存与恢复。

### assets/
资源文件目录，存放图片、音频等游戏资源文件。

### memory-bank/
项目文档目录，包含架构设计、开发计划、游戏设计等相关文档。
