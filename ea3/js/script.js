// const MAP_WIDTH = window.innerWidth;
// const MAP_HEIGHT = window.innerHeight;

const MAP_WIDTH = 100;
const MAP_HEIGHT = 100;

const BERLIN_GPS = new Float32Array([
    13.088, 52.42,
    13.098, 52.423,
    13.098, 52.425,
    13.105, 52.424,
    13.113, 52.429,
    13.112, 52.432,
    13.123, 52.439,
    13.119, 52.442,
    13.119, 52.444,
    13.109, 52.451,
    13.111, 52.452,
    13.113, 52.457,
    13.113, 52.459,
    13.111, 52.46,
    13.111, 52.466,
    13.118, 52.474,
    13.118, 52.477,
    13.129, 52.48,
    13.15, 52.497,
    13.169, 52.509,
    13.154, 52.514,
    13.152, 52.516,
    13.146, 52.517,
    13.143, 52.52,
    13.117, 52.517,
    13.119, 52.523,
    13.119, 52.53,
    13.125, 52.54,
    13.125, 52.545,
    13.13, 52.556,
    13.134, 52.553,
    13.14, 52.552,
    13.146, 52.553,
    13.147, 52.564,
    13.154, 52.573,
    13.154, 52.578,
    13.151, 52.583,
    13.139, 52.58,
    13.138, 52.581,
    13.132, 52.58,
    13.131, 52.583,
    13.128, 52.583,
    13.129, 52.587,
    13.136, 52.587,
    13.138, 52.589,
    13.145, 52.59,
    13.157, 52.598,
    13.164, 52.599,
    13.171, 52.597,
    13.173, 52.595,
    13.18, 52.595,
    13.191, 52.59,
    13.197, 52.59,
    13.204, 52.587,
    13.217, 52.587,
    13.219, 52.592,
    13.202, 52.604,
    13.202, 52.607,
    13.206, 52.608,
    13.21, 52.612,
    13.22, 52.624,
    13.221, 52.628,
    13.264, 52.627,
    13.265, 52.636,
    13.262, 52.639,
    13.262, 52.641,
    13.284, 52.641,
    13.285, 52.653,
    13.282, 52.653,
    13.283, 52.661,
    13.293, 52.659,
    13.307, 52.66,
    13.31, 52.657,
    13.3, 52.654,
    13.309, 52.644,
    13.309, 52.641,
    13.306, 52.64,
    13.306, 52.636,
    13.309, 52.634,
    13.31, 52.629,
    13.305, 52.628,
    13.322, 52.627,
    13.335, 52.623,
    13.344, 52.624,
    13.359, 52.623,
    13.362, 52.625,
    13.373, 52.627,
    13.377, 52.629,
    13.376, 52.632,
    13.378, 52.634,
    13.39, 52.638,
    13.39, 52.642,
    13.395, 52.648,
    13.395, 52.647,
    13.398, 52.648,
    13.408, 52.643,
    13.414, 52.643,
    13.415, 52.642,
    13.414, 52.641,
    13.424, 52.635,
    13.428, 52.638,
    13.433, 52.637,
    13.434, 52.644,
    13.44, 52.645,
    13.44, 52.648,
    13.443, 52.65,
    13.452, 52.65,
    13.46, 52.648,
    13.463, 52.649,
    13.464, 52.651,
    13.47, 52.652,
    13.474, 52.654,
    13.474, 52.657,
    13.461, 52.658,
    13.451, 52.663,
    13.459, 52.669,
    13.466, 52.667,
    13.475, 52.675,
    13.477, 52.674,
    13.479, 52.676,
    13.48, 52.675,
    13.475, 52.67,
    13.475, 52.668,
    13.477, 52.667,
    13.488, 52.671,
    13.485, 52.659,
    13.489, 52.656,
    13.494, 52.653,
    13.505, 52.65,
    13.513, 52.645,
    13.517, 52.647,
    13.523, 52.645,
    13.523, 52.641,
    13.518, 52.63,
    13.506, 52.626,
    13.506, 52.621,
    13.503, 52.619,
    13.498, 52.611,
    13.497, 52.605,
    13.501, 52.603,
    13.508, 52.592,
    13.523, 52.593,
    13.544, 52.589,
    13.56, 52.582,
    13.568, 52.575,
    13.568, 52.573,
    13.575, 52.574,
    13.578, 52.571,
    13.582, 52.571,
    13.584, 52.56,
    13.588, 52.556,
    13.587, 52.549,
    13.617, 52.544,
    13.635, 52.543,
    13.638, 52.541,
    13.635, 52.538,
    13.628, 52.537,
    13.625, 52.538,
    13.626, 52.53,
    13.657, 52.53,
    13.658, 52.525,
    13.642, 52.519,
    13.636, 52.515,
    13.629, 52.507,
    13.627, 52.499,
    13.624, 52.494,
    13.63, 52.493,
    13.615, 52.481,
    13.614, 52.476,
    13.616, 52.474,
    13.612, 52.471,
    13.613, 52.47,
    13.621, 52.471,
    13.621, 52.468,
    13.623, 52.466,
    13.623, 52.469,
    13.625, 52.469,
    13.625, 52.474,
    13.637, 52.476,
    13.643, 52.479,
    13.649, 52.479,
    13.658, 52.475,
    13.671, 52.473,
    13.685, 52.465,
    13.696, 52.464,
    13.699, 52.457,
    13.698, 52.455,
    13.705, 52.455,
    13.706, 52.458,
    13.705, 52.46,
    13.703, 52.46,
    13.702, 52.465,
    13.7, 52.466,
    13.7, 52.468,
    13.702, 52.468,
    13.711, 52.463,
    13.716, 52.463,
    13.72, 52.457,
    13.729, 52.451,
    13.75, 52.449,
    13.756, 52.446,
    13.754, 52.443,
    13.757, 52.443,
    13.755, 52.438,
    13.756, 52.442,
    13.745, 52.439,
    13.743, 52.433,
    13.739, 52.433,
    13.739, 52.429,
    13.742, 52.428,
    13.741, 52.426,
    13.737, 52.427,
    13.731, 52.421,
    13.73, 52.415,
    13.739, 52.408,
    13.735, 52.406,
    13.732, 52.4,
    13.725, 52.4,
    13.723, 52.398,
    13.716, 52.4,
    13.711, 52.396,
    13.706, 52.395,
    13.7, 52.391,
    13.698, 52.392,
    13.697, 52.389,
    13.695, 52.389,
    13.691, 52.385,
    13.688, 52.386,
    13.686, 52.384,
    13.687, 52.383,
    13.691, 52.383,
    13.694, 52.381,
    13.699, 52.382,
    13.697, 52.377,
    13.699, 52.378,
    13.701, 52.377,
    13.699, 52.374,
    13.695, 52.37,
    13.693, 52.37,
    13.693, 52.368,
    13.687, 52.367,
    13.681, 52.37,
    13.675, 52.367,
    13.671, 52.367,
    13.666, 52.362,
    13.666, 52.358,
    13.664, 52.358,
    13.662, 52.354,
    13.657, 52.352,
    13.656, 52.347,
    13.653, 52.346,
    13.653, 52.344,
    13.651, 52.343,
    13.652, 52.339,
    13.649, 52.338,
    13.643, 52.34,
    13.636, 52.347,
    13.638, 52.348,
    13.639, 52.358,
    13.638, 52.36,
    13.647, 52.366,
    13.647, 52.37,
    13.642, 52.371,
    13.643, 52.377,
    13.633, 52.376,
    13.629, 52.381,
    13.627, 52.381,
    13.606, 52.374,
    13.607, 52.375,
    13.607, 52.377,
    13.605, 52.378,
    13.606, 52.38,
    13.602, 52.384,
    13.595, 52.387,
    13.593, 52.394,
    13.566, 52.388,
    13.554, 52.388,
    13.535, 52.389,
    13.535, 52.394,
    13.537, 52.397,
    13.536, 52.398,
    13.538, 52.4,
    13.53, 52.397,
    13.522, 52.401,
    13.515, 52.402,
    13.48, 52.396,
    13.478, 52.404,
    13.476, 52.405,
    13.468, 52.42,
    13.464, 52.421,
    13.455, 52.42,
    13.443, 52.415,
    13.422, 52.411,
    13.418, 52.409,
    13.427, 52.389,
    13.427, 52.385,
    13.421, 52.376,
    13.388, 52.378,
    13.387, 52.389,
    13.37, 52.388,
    13.372, 52.394,
    13.359, 52.398,
    13.35, 52.403,
    13.343, 52.408,
    13.343, 52.412,
    13.314, 52.401,
    13.312, 52.399,
    13.306, 52.406,
    13.296, 52.414,
    13.297, 52.416,
    13.273, 52.404,
    13.266, 52.404,
    13.261, 52.406,
    13.25, 52.405,
    13.249, 52.414,
    13.246, 52.421,
    13.224, 52.421,
    13.207, 52.416,
    13.199, 52.415,
    13.197, 52.416,
    13.159, 52.403,
    13.158, 52.396,
    13.17, 52.398,
    13.172, 52.396,
    13.169, 52.394,
    13.156, 52.394,
    13.146, 52.395,
    13.143, 52.397,
    13.136, 52.396,
    13.135, 52.399,
    13.124, 52.397,
    13.118, 52.402,
    13.108, 52.407,
    13.108, 52.409,
    13.112, 52.41,
    13.11, 52.411,
    13.11, 52.413,
    13.107, 52.413,
    13.107, 52.41,
    13.101, 52.411,
    13.101, 52.414,
    13.096, 52.413,
    13.099, 52.411,
    13.097, 52.409,
    13.091, 52.411,
    13.088, 52.42
]);

window.onload = function () {

    let vert = convertGPStoVertices(BERLIN_GPS);
    let points = convertVerticesToPoints(vert);
    let delaunay = Delaunator.from(points);

    // console.log("triangles: " + delaunay.triangles)
    console.dir(delaunay.triangles);


    let canvas = document.getElementById("canvas");
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;

    let gl = canvas.getContext('experimental-webgl');
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // gl.clear(gl.COLOR_BUFFER_BIT);

    // Pipeline setup.
// Backface culling.
//     gl.frontFace(gl.CCW);
//     gl.enable(gl.CULL_FACE);
//     // gl.cullFace(gl.BACK);
//     gl.cullFace(gl.FRONT);


    // Compile a vertex shader
    let vsSource = 'attribute vec3 pos;' +
        // 'void main(){gl_Position = vec4(pos * 0.3 -1.2, 0, 1); }';
        'void main(){gl_Position = vec4(pos * 0.3 -1.2 , 1.0); }';
    let vs = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vs, vsSource);
    gl.compileShader(vs);

    // Compile a fragment shader
    // let fsSouce = 'void main() { gl_FragColor = vec4(0,0,0,1); }';
    let fsSouce = 'void main() { gl_FragColor = vec4(1,1,1,1); }';
    let fs = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fs, fsSouce);
    gl.compileShader(fs);

    let prog = gl.createProgram();
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    // Load vertex data into a buffer
    let vertices = convertTrianglesToVertices(delaunay.triangles, points);
    // let vertices = (delaunay.coords);

    console.dir(vertices);

    let vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    // // Setup index buffer object.
    // let indices = delaunay.triangles;
    // let ibo = gl.createBuffer();
    // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    // gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);
    // ibo.numerOfEmements = indices.length;


    // Bind vertex buffer to attribute variable
    let posAttrib = gl.getAttribLocation(prog, 'pos');
    gl.vertexAttribPointer(posAttrib, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(posAttrib);


    // Clear framebuffer and render primitives
    gl.clear(gl.COLOR_BUFFER_BIT);
   // gl.drawArrays(gl.LINE_LOOP, 0, vertices.length/2);
   //  gl.drawElements(gl.TRIANGLES, ibo.numerOfEmements, gl.UNSIGNED_SHORT, 0);
    gl.drawArrays(gl.TRIANGLES,  0, vertices.length);
    // gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT,0);


};

function convertGPStoVertices(gpsDataArray) {

    let vertices = new Float32Array(gpsDataArray.length +2);
    gpsDataArray.forEach(function(item, index) {

        let string = (index % 2 === 0) ? convertLon(item).toString() : convertLat(item).toString();
        string = string.substr(3, 3);

        vertices[index] = (parseFloat(string) / 100);
        if (vertices[index] > 6) vertices[index] -= 5;

        // console.log(vertices[index]);
    });

    console.log(vertices.length);
    let center = getCenterCoordinate(vertices);

    console.dir(center);
    vertices[vertices.length-2] =  center[0];
    vertices[vertices.length-1] =  center[1];

    return vertices;
}


function convertVerticesToPoints(verticesArray) {

    let result =[];

    for (let i = 0; i < verticesArray.length; i+=2){
        result.push([verticesArray[i], verticesArray[i + 1]]);
    }

    return result;
}

function convertTrianglesToVertices(triangles, points) {

    let vertices = new Float32Array(triangles.length*2);

    console.dir(points);

    for (let i = 0; i < triangles.length; i ++) {
        vertices[i*2] =  points[triangles[i]][0];
        vertices[i*2+1] =  points[triangles[i]][1];
    }

    return vertices;
}

function getCenterCoordinate(dataArray) {

    let maxX = 0;
    let maxY = 0;
    let minX = Number.MAX_VALUE;
    let minY = Number.MAX_VALUE;

    for(let i = 0; i < dataArray.length; i += 2){
        if(dataArray[i] >  maxX)  maxX = dataArray[i];
    }

    for(let i = 0; i < dataArray.length; i += 2){
        if(dataArray[i] <  minX)  minX = dataArray[i];
    }

    for(let i = 1; i < dataArray.length; i += 2){
        if(dataArray[i] >  maxY)  maxY = dataArray[i];
    }

    for(let i = 1; i < dataArray.length; i += 2){
        if(dataArray[i] <  minY)  minY = dataArray[i];
    }


    return [(maxX + minX)/2, (maxY + minY)/2];
}


function convertLat(lat){
    return ((lat) + 90) * (MAP_HEIGHT / 180);
}

function convertLon(lon){
    return (lon + 180) * (MAP_WIDTH / 360);
}