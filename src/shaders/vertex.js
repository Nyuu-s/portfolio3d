
 const str = `
varying vec2 vertexUV;
varying vec3 vertexNormal;
varying vec3 curPos;

void main(){
    vertexUV = uv;
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    curPos = gl_Position.xyz;
}

`
export default str
