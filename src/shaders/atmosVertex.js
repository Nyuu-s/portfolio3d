
 const str = `
 varying vec2 vertexUV;
 varying vec3 vertexPos;
 varying vec3 vertexPosTransformed;
 varying vec3 vertexNormal;
 
 
 void main(){
     vertexUV = uv;
     vertexPos = position;
     vertexNormal = normalize(normalMatrix * normal);
     gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
 }
 
 `
 export default str
 