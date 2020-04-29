var EditorWidgetTemplates = {
    SINGLE: 'single',
    XY: 'xy'
}

var WIDGETS = {
    skew: {
        name: 'skew',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: null,
        fieldNames: {
          x: 'skewX',
          y: 'skewY'
        }
    },
    rotation: {
        name: 'rotation',
        templateType: EditorWidgetTemplates.SINGLE,
        customIncrement: null,
        fieldNames: {
            x: 'rotation'
        }
    },
    offset: {
        name: 'offset',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: null,
        fieldNames: {
          x: 'offsetX',
          y: 'offsetY'
        }
    },
    align: {
        name: 'align',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: 0.01,
        fieldNames: {
          x: 'alignX',
          y: 'alignY'
        }
    },
    scale: {
        name: 'scale',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: null,
        fieldNames: {
          x: 'scaleX',
          y: 'scaleY'
        }
    },
    handle: {
        name: 'handle',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: 0.01,
        fieldNames: {
          x: 'handleX',
          y: 'handleY'
        }
    },
    pivot: {
        name: 'pivot',
        templateType: EditorWidgetTemplates.XY,
        customIncrement: 0.01,
        fieldNames: {
          x: 'pivotX',
          y: 'pivotY'
        }
    },
    
    
};

var EDITOR_CONFIG = {
      defaultIncrement : 0.1,
      widgetPayload: WIDGETS,
      widgetTemplates: EditorWidgetTemplates
    }

export default EDITOR_CONFIG;