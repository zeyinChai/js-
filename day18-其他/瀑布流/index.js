const containerEl = document.getElementById("container");
const imgWidth = 220; // 指定每张图片的宽度 图片的宽度被变小 高度也会相应变小

// 创建img标签 插入容器
function createImg() {
  for (let i = 1; i <= 13; i++) {
    const img = document.createElement("img");
    img.src = "img/" + i + ".webp";
    containerEl.appendChild(img);
    img.onload = setPosition
  }
}
createImg();

// 根据视口计算大小 分配几列数据
function calc() {
  const containerWidth = containerEl.clientWidth;
  // 列
  const col = Math.floor(containerWidth / imgWidth);
  // 间隙
  const spaceNum = col + 1;
  const space = (containerWidth - col * imgWidth) / spaceNum;
  // console.log(space,containerWidth,col);
  return {
    col,
    space,
    spaceNum,
  };
}

// 插入图片
function setPosition() {
  const { col, space, spaceNum } = calc();
  const arr = new Array(col); // 数组里记录每列的高度
  arr.fill(5);
  console.log(col, space, spaceNum, arr);
  for (let i = 0; i < containerEl.children.length; i++) {
    const img = containerEl.children[i];
    const { minTop, minIndex } = getMin(arr);
    img.style.top = minTop + "px";
    img.style.left = (minIndex + 1) * space + minIndex * imgWidth + "px";
    arr[minIndex] = arr[minIndex]+ containerEl.children[i].height+5;
  }
  containerEl.style.height = Math.max(...arr) + 'px'
}

// 取出数组最小项和最小项index
function getMin(arr) {
  const minTop = Math.min(...arr);
  const minIndex = arr.indexOf(minTop);
  return {
    minTop,
    minIndex,
  };
}
// window.onload = setPosition;
window.onresize = setPosition
