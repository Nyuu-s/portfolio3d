
 const str = `
 varying vec2 vertexUV;
 varying vec3 vertexPos;
 varying vec3 vertexNormal;

 

 uniform sampler2D cloudTexture;
 
  void main(){
     float intensity = pow(.9 - dot(vertexNormal, vec3(0.0,0.0,1.0)), 2.0);
     gl_FragColor = vec4( 0.3, 0.6, 1.0, 1.0 ) * intensity;
  }
  
  `
  export default str
  