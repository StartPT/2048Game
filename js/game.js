// 游戏逻辑主文件
// 包含游戏状态管理和主要游戏流程控制

// 注意：本文件为 JavaScript，不能使用 TypeScript 类型语法
// 兼容浏览器直接 script 引入方式
// 通过 window.Grid 访问 grid.js 导出的对象

// 获取全局 Grid
// 直接使用 window.Grid，避免重复声明
var _Grid = window.Grid;

// 游戏状态对象结构（JSDoc 注释说明）
/**
 * @typedef {Object} GameState
 * @property {number[][]} grid - 4x4 网格
 * @property {number} score - 当前分数
 * @property {boolean} isGameOver - 游戏是否结束
 * @property {boolean} isWin - 是否获胜
 */

/**
 * 创建初始游戏状态
 * @returns {GameState}
 */
function createInitialGameState() {
  const grid = _Grid.createGrid();
  // 随机添加两个初始方块
  addRandomTile(grid);
  addRandomTile(grid);
  console.log('初始化后 grid:', JSON.stringify(grid));
  return {
    grid: grid,
    score: 0,
    isGameOver: false,
    isWin: false
  };
}

/**
 * 向网格中随机添加一个新方块（2的概率90%，4的概率10%）
 * @param {number[][]} grid
 */
function addRandomTile(grid) {
  const emptyCells = _Grid.getEmptyCells(grid);
  if (emptyCells.length === 0) return;
  const idx = Math.floor(Math.random() * emptyCells.length);
  const { row, col } = emptyCells[idx];
  const value = Math.random() < 0.9 ? 2 : 4;
  _Grid.setTileValue(grid, row, col, value);
}

// 初始化游戏（重置状态）
let gameState = createInitialGameState();
updateUI();

function resetGame() {
  gameState = createInitialGameState();
  updateUI();
}

// UI 同步（需由 ui.js 提供实现）
function updateUI() {
  if (window.UI && typeof window.UI.render === 'function') {
    window.UI.render(gameState);
  }
}

// 从本地存储加载游戏状态（需由 storage.js 提供实现）
function loadGameStateFromStorage() {
  // 这里应调用 Storage 层的加载方法
  // 例如：gameState = Storage.loadGameState() || createInitialGameState();
  // updateUI();
}

// 导出主要接口（CommonJS/ESM 兼容）
window.gameState = gameState;
window.resetGame = resetGame;
window.addRandomTile = addRandomTile;
window.updateUI = updateUI;
window.loadGameStateFromStorage = loadGameStateFromStorage;
