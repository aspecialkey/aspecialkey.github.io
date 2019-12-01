/**
 * siehe: http://blog.andreaskahler.com/2009/06/creating-icosphere-mesh-in-code.html
 */


var kugel = ( function() {

    function createVertexData() {
        let rekursionsTiefe = document.getElementById('rekursion').value;
        // Positions.
        let vertices = [];
        // Normals.
        let normals = [];
        // Index data.
        let indicesLines = [];
        let indicesTris = [];

        // create 12 vertices of a icosahedron
        let t = (1.0 + Math.sqrt(5.0)) / 2.0;

        addVertex({x: -1, y: t, z: 0});
        addVertex({x: 1, y: t, z: 0});
        addVertex({x: -1, y: -t, z: 0});
        addVertex({x: 1, y: -t, z: 0});

        addVertex({x: 0, y: -1, z: t});
        addVertex({x: 0, y: 1, z: t});
        addVertex({x: 0, y: -1, z: -t});
        addVertex({x: 0, y: 1, z: -t});

        addVertex({x: t, y: 0, z: -1});
        addVertex({x: t, y: 0, z: 1});
        addVertex({x: -t, y: 0, z: -1});
        addVertex({x: -t, y: 0, z: 1});

        // create 20 triangles of the icosahedron
        // 5 triangles around point 0
        addIndicesTris(indicesTris, indicesLines, {v1: 0, v2: 11, v3: 5});
        addIndicesTris(indicesTris, indicesLines, {v1: 0, v2: 5, v3: 1});
        addIndicesTris(indicesTris, indicesLines, {v1: 0, v2: 1, v3: 7});
        addIndicesTris(indicesTris, indicesLines, {v1: 0, v2: 7, v3: 10});
        addIndicesTris(indicesTris, indicesLines, {v1: 0, v2: 10, v3: 11});

        // 5 adjacent triangles
        addIndicesTris(indicesTris, indicesLines, {v1: 1, v2: 5, v3: 9});
        addIndicesTris(indicesTris, indicesLines, {v1: 5, v2: 11, v3: 4});
        addIndicesTris(indicesTris, indicesLines, {v1: 11, v2: 10, v3: 2});
        addIndicesTris(indicesTris, indicesLines, {v1: 10, v2: 7, v3: 6});
        addIndicesTris(indicesTris, indicesLines, {v1: 7, v2: 1, v3: 8});

        // 5 triangles around point 3
        addIndicesTris(indicesTris, indicesLines, {v1: 3, v2: 9, v3: 4});
        addIndicesTris(indicesTris, indicesLines, {v1: 3, v2: 4, v3: 2});
        addIndicesTris(indicesTris, indicesLines, {v1: 3, v2: 2, v3: 6});
        addIndicesTris(indicesTris, indicesLines, {v1: 3, v2: 6, v3: 8});
        addIndicesTris(indicesTris, indicesLines, {v1: 3, v2: 8, v3: 9});

        // 5 adjacent triangles
        addIndicesTris(indicesTris, indicesLines, {v1: 4, v2: 9, v3: 5});
        addIndicesTris(indicesTris, indicesLines, {v1: 2, v2: 4, v3: 11});
        addIndicesTris(indicesTris, indicesLines, {v1: 6, v2: 2, v3: 10});
        addIndicesTris(indicesTris, indicesLines, {v1: 8, v2: 6, v3: 7});
        addIndicesTris(indicesTris, indicesLines, {v1: 9, v2: 8, v3: 1});

        // refine triangles
        for (let i = 0; i < rekursionsTiefe; i++) {
            let newTris = [];
            let newLines = [];

            for (let j = 0; j < indicesTris.length; j += 3) {
                // replace triangle by 4 triangles
                let v1 = getMiddlePoint(indicesTris[j], indicesTris[j + 1]);
                let v2 = getMiddlePoint(indicesTris[j + 1], indicesTris[j + 2]);
                let v3 = getMiddlePoint(indicesTris[j + 2], indicesTris[j]);

                addIndicesTris(newTris, newLines, {v1: indicesTris[j], v2: v1, v3: v3});
                addIndicesTris(newTris, newLines, {v1: indicesTris[j + 1], v2: v2, v3: v1});
                addIndicesTris(newTris, newLines, {v1: indicesTris[j + 2], v2: v3, v3: v2});
                addIndicesTris(newTris, newLines, {v1: v1, v2: v2, v3: v3});
            }

            indicesTris = newTris;
            indicesLines = newLines;
        }

        this.vertices = Float32Array.from(vertices);
        this.normals = Float32Array.from(normals);
        this.indicesLines = Uint16Array.from(indicesLines);
        this.indicesTris = Uint16Array.from(indicesTris);

        function addVertex(vert) {
            let vertexLength = Math.sqrt(Math.pow(vert.x, 2) + Math.pow(vert.y, 2) + Math.pow(vert.z, 2));

            // Set vertex positions for x, y, z
            vertices.push(vert.x / vertexLength);
            vertices.push(vert.y / vertexLength);
            vertices.push(vert.z / vertexLength);

            // Set normals
            normals.push(vert.x / vertexLength);
            normals.push(vert.y / vertexLength);
            normals.push(vert.z / vertexLength);

            //return number of actual vertices
            return (vertices.length / 3) - 1;
        }

        function getMiddlePoint(p1, p2) {

            // Calculate coordinates of mid.
            let midX = (vertices[3 * p1] + vertices[3 * p2]) / 2.0;
            let midY = (vertices[3 * p1 + 1] + vertices[3 * p2 + 1]) / 2.0;
            let midZ = (vertices[3 * p1 + 2] + vertices[3 * p2 + 2]) / 2.0;

            // Return index if already saved.
            for (let i = 0; i < vertices.length; i += 3) {
                if ((vertices[i] === midX) && (vertices[i + 1] === midY) && (vertices[i + 2] === midZ)) {
                    return i / 3;
                }
            }

            return addVertex({x: midX, y: midY, z: midZ});
        }

        function addIndicesTris(triangle, lines, triangleVertices) {
            // Add index data.
            triangle.push(triangleVertices.v1);
            triangle.push(triangleVertices.v2);
            triangle.push(triangleVertices.v3);
            lines.push(triangleVertices.v1);
            lines.push(triangleVertices.v2);
            lines.push(triangleVertices.v2);
            lines.push(triangleVertices.v3);
            lines.push(triangleVertices.v3);
            lines.push(triangleVertices.v1);
        }
    }

    return {
        createVertexData : createVertexData
    }

}());
