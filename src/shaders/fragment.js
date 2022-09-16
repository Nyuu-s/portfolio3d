
 const str = `
varying vec2 vertexUV;
varying vec3 vertexNormal;
varying vec3 curPos;


uniform sampler2D earthTexture;
uniform sampler2D earthNightTexture;
uniform vec3 cam_pos;

 void main(){
    float intensity = 1.05 - dot(vertexNormal, vec3(0.0, 0.0, 1.0));
    vec3 atmos = vec3(0.3, 0.6, 1.0) * intensity;
    vec3 dir = normalize(curPos - (cam_pos));
    if(dot(vertexNormal, dir) < 0.0){
        gl_FragColor = vec4( atmos + texture2D(earthTexture, vertexUV).xyz, 1.0);
    }
    else{
        gl_FragColor = vec4( atmos + texture2D(earthNightTexture, vertexUV).xyz, 1.0);
    }
 }
 
 `
 export default str
 