// ---------------------------------------------------------------------------------------------------------------
//
// Debug Code
//
// ---------------------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------------------
// Debug Config
// ---------------------------------------------------------------------------------------------------------------


// Keyboard Input Config
// ---------------------------------------------------------------------------------------------------------------
var debugConfig = {
  debugKeyMap: {
    
  }
}

// ---------------------------------------------------------------------------------------------------------------
// Stage.js Node Properties Debugger
// ---------------------------------------------------------------------------------------------------------------

var DebugWidgetTemplates = {
  SINGLE: 'single',
  XY: 'xy'
}

var debugWidgetConfig = {
  defaultIncrement : 0.1,
  widgetPayload: [
    { 
      widgetInfo : {
        name: 'skew',
        templateType: DebugWidgetTemplates.XY,
        customIncrement: null,
        xyFieldNames: {
          x: 'skewX',
          y: 'skewY'
        }
      }
    }
  ]
}

var initializePropertiesDebugger = function(stage, debugTargetNode = null) {
  var target = (debugTargetNode == null) ? stage.first() : debugTargetNode;
  console.log(`Initializing Properties Debugger... \n Stage: ${stage} \n Target Node: ${target}`);

  var debugColumn = Stage.column().appendTo(stage).pin('align', 0.0150).spacing(1);
  createDebugWidgetsFrom(debugWidgetConfig, debugColumn, stage);
}

var createDebugWidgetsFrom = function(config = debugWidgetConfig, inColumn = null, forStage = activeStage) {
  var column = (inColumn == null) ? forStage : inColumn;

  let payload = config.widgetPayload;
  payload.forEach(function(widgetInstance) {
    let info = widgetInstance.widgetInfo;
    renderDebugWidgetFrom(info, column, payload.indexOf(widgetInstance));
  });
}

var renderDebugWidgetFrom = function(widgetInfo, withParent = null, id = 0) {
  // Root node of widget
  var background = Stage.box();

  // Add sub-components to background node
  console.log(`Widget name is: ${widgetInfo.name}`);
  createDigitStringWith(id).appendTo(background);
  createDigitStringWith(id+1).appendTo(background);
  // If supplied with parent append to it and return true else return the newly created widget node
  if(withParent != null) {
    background.appendTo(withParent);
    return true;
  } else {
    console.log(`No parent specified... \n Returning widget visuals for ${widgetInfo.name}`);
    return background;
  }
}

var createDigitStringWith = function(value = 'DIGIT_STRING', parent = null) {

  console.log(`Creating digit string with value ${value}`);
  var number = Stage.string('digit').value(value.toString()                                                                             ).pin('align', 0.5);
  return number;
}

var initializeKeyboardInput = function() {
  document.onkeydown = checkKey;

  function checkKey(e) {

    e = e || window.event;
    console.log(`Keycode is ${e.keyCode}`);
    // Skew Commands
     
    /**
     * REFACTOR THIS TO WORK WITH SOME VARIABLE PROPERTY INPUT.
     * KEYS 1,2,3...,9 WILL CHANGE EDITED PROPERTY 
     * {  1: SCALE, 2: SKEW 3: OFFSET  }
     */
    const arrowPans = true;
    var val = arrowPans ? 'offset' : 'skew';
    if (e.keyCode == '38') {
        // up arrow
        console.log('up arrow');
        let valX = `${val}X`;
        let valY = `${val}Y`;
        console.log(`valX: ${valX} \n valY: ${valY}`);
        let newSkewX = grid.pin(valX);
        let newSkewY = grid.pin(valY) + debugWidgetConfig.defaultIncrement*200000;
        console.log(`skewx: ${newSkewX} \n skewY: ${newSkewY}`);
        // grid.skew(newSkewX,newSkewY);
        grid.pin({
          valX: newSkewX,
          valY: newSkewY
        });
    }
    else if (e.keyCode == '40') {
        // down arrow
        console.log('down arrow');
        let newSkewX = grid.pin('skewX');
        let newSkewY = grid.pin('skewY') - debugWidgetConfig.defaultIncrement;
        grid.skew(newSkewX,newSkewY);
    }
    else if (e.keyCode == '37') {
      // left arrow
        console.log('left arrow');
        let newSkewX = grid.pin('skewX') - debugWidgetConfig.defaultIncrement;;
        let newSkewY = grid.pin('skewY');
        grid.skew(newSkewX,newSkewY);
    }
    else if (e.keyCode == '39') {
        // right arrow
        console.log('right arrow');
        let newSkewX = grid.pin('skewX') + debugWidgetConfig.defaultIncrement;;
        let newSkewY = grid.pin('skewY');
        grid.skew(newSkewX,newSkewY);
    }
    else if(e.keyCode ==  '49') {
      // 1
      var x = grid.pin('scaleX') + debugWidgetConfig.defaultIncrement;
      console.log(`X is : ${x}`);
      x = (x == undefined) ? 1 : x;
      console.log(`X is : ${x}`);
      grid.scale(x, grid.pin('scaleY'));
    }
    else if(e.keyCode ==  '81') {
      // Q
      var x = grid.pin('scaleX') - debugWidgetConfig.defaultIncrement;
      console.log(`X is : ${x}`);
      x = (x == undefined) ? 1 : x;
      console.log(`X is : ${x}`);
      grid.scale(x, grid.pin('scaleY'));
    }
    else if(e.keyCode ==  '50') {
      // 1
      var x = grid.pin('scaleY') + debugWidgetConfig.defaultIncrement;
      console.log(`X is : ${x}`);
      x = (x == undefined) ? 1 : x;
      console.log(`X is : ${x}`);
      grid.scale(grid.pin('scaleX'), x);
    }
    else if(e.keyCode ==  '87') {
      // Q
      var x = grid.pin('scaleY') - debugWidgetConfig.defaultIncrement;
      console.log(`X is : ${x}`);
      x = (x == undefined) ? 1 : x;
      console.log(`X is : ${x}`);
      grid.scale(grid.pin('scaleX'), x);
    }

  }
}
