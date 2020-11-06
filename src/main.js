//document.createElement('div')
const div = dom.create("<div>newDiv</div>");
console.log(div);
dom.after(test, div);
const div3 = dom.create('<div id="parent"></div>');
dom.wrap(test, div3);

const nodes = dom.empty(window.empty);
console.log("删除------------");
console.log(nodes);

dom.attr(test, "title", "this is title"); //三个参数实现写
const title = dom.attr(test, "title"); //两个参数实现读
console.log(`title:${title}`);
dom.text(test, "这是新内容");
dom.text(test);
dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "border", "1px solid black");
dom.class.add(test, "red");
dom.class.add(test, "blue");
dom.class.remove(test, "blue");
console.log(dom.class.has(test, "blue"));
const fn = () => {
  console.log("点击了");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);
const testDiv = dom.find("#test")[0];
//只在 test1 找 red
console.log(testDiv);
const test2 = dom.find("#test2")[0];
console.log(dom.find(".red", test2)[0]);

console.log(dom.parent(test));
console.log(dom.siblings(dom.find("#s2")[0]));
console.log(dom.next(s2));
console.log(dom.previous(s2));

const t = dom.find("#travel")[0];
console.log("---------");
console.log(t);
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));
console.log(dom.index(s2));
