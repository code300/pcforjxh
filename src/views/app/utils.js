// 检查是否是ios
export function checkIsIOS() {
  return /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
}
// 设置滚动元素（兼容性问题）
export function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}
// 设置滚动位置
export function setScrollTop(el, value) {
  if ("scrollTop" in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}
// 获取滚动位置
export function getRootScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}
