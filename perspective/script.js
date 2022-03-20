
//We'll use this to change the CSS Variable values from JS
const style = document.documentElement.style;

/* control elements */
var ranges = {
    perspective: document.getElementById('perspective'),
    
    prism__rotateX: document.getElementById('prism__rotateX'),
    prism__rotateZ: document.getElementById('prism__rotateZ'),
    
    lf__translateZ: document.getElementById('lf__translateZ'),
    lf__rotateY: document.getElementById('lf__rotateY'),
    
    rt__translateZ: document.getElementById('rt__translateZ'),
    rt__rotateY: document.getElementById('rt__rotateY'),
    
    bt__translateZ: document.getElementById('bt__translateZ'),
    bt__rotateY: document.getElementById('bt__rotateY'),

    scale: document.getElementById('scale'),
    deg: document.getElementById('deg')
};

//Change the CSS Variable value here
function valueChange(id, value) {
    style.setProperty('--' + id, value);
}
  
// prism__rotateX  
ranges.prism__rotateX.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');
});

// prism__rotateZ  
ranges.prism__rotateZ.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');
});

// Perspective  
ranges.perspective.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'px');
});

// Left Side
ranges.lf__translateZ.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'px');
});

ranges.lf__rotateY.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');
});

// Right Side
ranges.rt__translateZ.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'px');
});

ranges.rt__rotateY.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');
});


// Bottom Side
ranges.bt__translateZ.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'px');
});

ranges.bt__rotateY.addEventListener('input', function(e) { 
    valueChange(e.currentTarget.id, e.currentTarget.value + 'deg');
});

  