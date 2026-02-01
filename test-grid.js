// 简单的测试脚本，用于验证网格数据结构的功能

console.log('开始测试网格数据结构...');

// 直接复制grid.js中的函数用于测试
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

function initializeGrid() {
  return createGrid();
}

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

function setTileValue(grid, row, col, value) {
  if (row >= 0 && row < 4 && col >= 0 && col < 4) {
    grid[row][col] = value;
  }
}

function getTileValue(grid, row, col) {
  if (row >= 0 && row < 4 && col >= 0 && col < 4) {
    return grid[row][col];
  }
  return undefined;
}

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

function cloneGrid(grid) {
  return getGridCopy(grid);
}

// 测试1: 验证网格初始化为4x4且所有值为0
console.log('\n测试1: 验证网格初始化...');
const grid = initializeGrid();
let allZeros = true;
let totalCells = 0;
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 4; j++) {
    totalCells++;
    if (grid[i][j] !== 0) {
      allZeros = false;
    }
  }
}
console.log(`网格大小为4x4: ${totalCells === 16}`);
console.log(`所有值初始化为0: ${allZeros}`);

// 测试2: 验证设置和获取特定位置值的功能
console.log('\n测试2: 验证设置和获取特定位置值...');
setTileValue(grid, 1, 2, 8);
const valueAt1_2 = getTileValue(grid, 1, 2);
console.log(`设置(1,2)位置的值为8，获取到的值: ${valueAt1_2}`);
console.log(`设置和获取功能正常: ${valueAt1_2 === 8}`);

// 测试3: 验证网格副本与原网格独立
console.log('\n测试3: 验证网格副本与原网格独立...');
const gridCopy = getGridCopy(grid);
setTileValue(gridCopy, 0, 0, 16); // 修改副本
const originalValue = getTileValue(grid, 0, 0); // 检查原网格
const copyValue = getTileValue(gridCopy, 0, 0); // 检查副本
console.log(`原网格(0,0)位置值: ${originalValue}`);
console.log(`副本(0,0)位置值: ${copyValue}`);
console.log(`原网格和副本独立: ${originalValue !== copyValue && originalValue === 0 && copyValue === 16}`);

// 测试4: 验证空位置检查功能
console.log('\n测试4: 验证空位置检查功能...');
const hasEmpty = hasEmptyCell(grid);
console.log(`网格中存在空位置: ${hasEmpty}`);

// 添加一些值以测试空位置查找
setTileValue(grid, 0, 0, 2);
setTileValue(grid, 0, 1, 4);
const emptyCells = getEmptyCells(grid);
console.log(`空位置数量: ${emptyCells.length}`);
if (emptyCells.length > 0) {
  console.log(`第一个空位置: (${emptyCells[0].row}, ${emptyCells[0].col})`);
}

// 测试5: 验证网格克隆功能
console.log('\n测试5: 验证网格克隆功能...');
const clonedGrid = cloneGrid(grid);
setTileValue(clonedGrid, 1, 2, 32); // 修改克隆的网格
const originalAfterClone = getTileValue(grid, 1, 2); // 检查原网格
const clonedAfterChange = getTileValue(clonedGrid, 1, 2); // 检查克隆网格
console.log(`修改克隆网格前原网格(1,2)位置值: 8`);
console.log(`修改克隆网格后原网格(1,2)位置值: ${originalAfterClone}`);
console.log(`修改克隆网格后克隆网格(1,2)位置值: ${clonedAfterChange}`);
console.log(`克隆功能正确: ${originalAfterClone === 8 && clonedAfterChange === 32}`);

console.log('\n网格数据结构测试完成！');