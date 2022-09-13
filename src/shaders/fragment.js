
 const str = `
varying vec2 vertexUV;
varying vec3 vertexNormal;


uniform sampler2D earthTexture;

 void main(){
    float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmos = vec3(0.3, 0.6, 1.0) * intensity;

    gl_FragColor = vec4( atmos + texture2D(earthTexture, vertexUV).xyz, 1.0);
 }
 
 `
 export default str
 