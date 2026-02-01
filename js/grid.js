// 网格数据结构和相关操作
// 包含4x4网格的创建、初始化、操作等功能

// 创建一个新的4x4网格，所有值初始化为0
function createGrid() {
  const grid = [];
  for (let i = 0; i < 4; i++) {
    grid[i] = [];
    for (let j = 0; j < 4; j++) {
      grid[i][j] = 0;
    }
  }
  return grid;
}

// 初始化网格，将所有值设为0
function initializeGrid() {
  return createGrid();
}

// 获取网格副本，避免直接引用
function getGridCopy(grid) {
  const copy = [];
  for (let i = 0; i < 4; i++) {
    copy[i] = [];
    for (let j = 0; j < 4; j++) {
      copy[i][j] = grid[i][j];
    }
  }
  return copy;
}

// 设置特定位置的值
function setTileValue(grid, row, col, value) {
  if (row >= 0 && row < 4 && col >= 0 && col < 4) {
    grid[row][col] = value;
  }
}

// 获取特定位置的值
function getTileValue(grid, row, col) {
  if (row >= 0 && row < 4 && col >= 0 && col < 4) {
    return grid[row][col];
  }
  return undefined;
}

// 检查网格中是否存在空位置（值为0的位置）
function hasEmptyCell(grid) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        return true;
      }
    }
  }
  return false;
}

// 查找所有空位置
function getEmptyCells(grid) {
  const emptyCells = [];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (grid[i][j] === 0) {
        emptyCells.push({ row: i, col: j });
      }
    }
  }
  return emptyCells;
}

// 克隆网格，用于备份当前状态
function cloneGrid(grid) {
  return getGridCopy(grid);
}

// 导出相关函数
const Grid = {
  createGrid,
  initializeGrid,
  getGridCopy,
  setTileValue,
  getTileValue,
  hasEmptyCell,
  getEmptyCells,
  cloneGrid
};
// 挂载到全局，供其他脚本直接访问
window.Grid = Grid;

// 如果在Node环境中运行（用于测试），则导出模块
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Grid;
}

// ESM 导出，供浏览器端使用
// export { Grid }; // 移除 ESM 导出，避免浏览器报错