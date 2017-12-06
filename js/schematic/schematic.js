//////////////////////////////////////////////////////////////////////////////////////////////////
//1.drawSchComponent()函数画出一个元器件、drawSchematic()画出所有已保存在schSchematic中的元器件。
//2.因为涉及到成员函数，在这里用函数的方法定义元器件结构体。
//3.drawComponent的返回值不是<g>对象，而是对应的元器件结构体。
//4.this.rotateTo(deg)/this.rotateBy(deg)为旋转器件函数。
//5.select为对象添加一个class属性，class内容见select.css
/////////////////////////////////////////////////////////////////////////////////////////////////


//用来存放电路图中所有元器件的数组
let schSchematic = [];

$.fn.extend({
  updateTransform: function () {
    let props = this.getProps('pose');
    return this.attr('transform', 'translate(' + props.x + ',' + props.y + ') rotate(' + props.degree % 360 + ')');
  },
  moveTo: function (toX, toY) {
    let props = this.getProps('pose');
    [props.x, props.y] = [toX, toY];
    return this.updateTransform();
  },
  moveBy: function (byX, byY) {
    let props = this.getProps('pose');
    props.x += byX; props.y += byY;
    return this.updateTransform();
  },
  rotateTo: function (deg) {
    let props = this.getProps('pose');
    props.degree = deg;
    return this.updateTransform();
  },
  rotateBy: function (deg) {
    let props = this.getProps('pose');
    props.degree += deg;
    return this.updateTransform();
  },
  removeIt: function () {
    schSchematic[this.getProps('pose').index] = undefined;
    return this.remove();
  },

  setSelected: function (isSelected) {
    let props = this.getProps('pose');
    if (isSelected === undefined) isSelected = true;
    props.isSelected = isSelected;
    if (props.isSelected) this.attr('class', 'component-selected');
    else this.attr('class', 'component-unselected');
    return this;
  },
  setUnselected: function () {
    let props = this.getProps('pose');
    props.isSelected = false;
    if (props.isSelected) this.attr('class', 'component-selected');
    else this.attr('class', 'component-unselected');
    return this;
  },
  isSelected: function () {
    return this.getProps('pose').isSelected;
  }
});

function createComponent(componentName, componentX, componentY) {
  let component = $s('g').appendComponent(componentName);
  let props = component.getProps('pose');
  [props.index, props.name] = [schSchematic.length, componentName];
  [props.x, props.y] = [componentX, componentY];
  props.degree = 0;
  return component.updateTransform().setSelected(false);
}

//在 #svgSch 画出对应的元器件并返回创建的jQuery对象
function drawComponent(componentName, componentX, componentY) {
  let component = createComponent(componentName, componentX, componentY);

  $('#svgSch').append(component);
  schSchematic.push(component);
  return component;
}

let schButtonIndex = 0;

//在 #svgButton 画出对应的元器件并返回创建的jQuery对象
function drawButton(componentName) {
  let component = createComponent(
    componentName,
    ((schButtonIndex % schConfig.svg.button.col) + 0.5) * schConfig.svg.button.size,
    (parseInt(schButtonIndex / schConfig.svg.button.col) + 0.5) * schConfig.svg.button.size
  );
  ++schButtonIndex;

  $('#svgButton').append(component);
  return component;
}

