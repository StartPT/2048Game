// 用户界面更新逻辑
// 负责将游戏状态转换为视觉元素

// 兼容浏览器直接 script 引入方式
// 通过 window.gameState 访问 game.js 导出的对象

/**
* 渲染整个游戏界面
* @param {Object} state - 当前游戏状态
*/
function render(state) {
renderGrid(state.grid);
renderScore(state.score);
// 可扩展：渲染游戏结束/胜利提示等
}

/**
* 渲染网格方块
* @param {number[][]} grid
*/
function renderGrid(grid) {
  console.log('渲染时的 grid 数据:', JSON.stringify(grid));
  const tileContainer = document.querySelector('.tile-container');
  tileContainer.innerHTML = '';
  const tileSize = 107; // px
  const tileGap = 10; // px
  // tile-container 有 top/left 10px 的内边距，需补偿
  const offset = 10;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const value = grid[i][j];
      if (value !== 0) {
        const tile = document.createElement('div');
        tile.className = `tile tile-${value}`;
        tile.textContent = value;
        tile.style.left = (j * (tileSize + tileGap) + offset) + 'px';
        tile.style.top = (i * (tileSize + tileGap) + offset) + 'px';
        tileContainer.appendChild(tile);
      }
    }
  }
}

/**
 * 渲染分数
 * @param {number} score
 */
function renderScore(score) {
  const scoreElem = document.querySelector('.score');
  if (scoreElem) scoreElem.textContent = score;
}

// 提供给 game.js 调用
window.UI = { render };

// 页面加载后自动渲染初始状态
window.addEventListener('DOMContentLoaded', function() {
  if (window.gameState) {
    render(window.gameState);
  }
});
