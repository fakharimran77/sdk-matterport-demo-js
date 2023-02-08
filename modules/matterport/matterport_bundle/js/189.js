/*! For license information please see 189.js.LICENSE.txt */
(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[189],{41835:(t,e,i)=>{"use strict";i.d(e,{Z:()=>s});class s{}},22533:(t,e,i)=>{"use strict";var s;i.d(e,{S:()=>s}),function(t){t[t.Standard=0]="Standard",t[t.Depth=1]="Depth",t[t.Transparent=2]="Transparent",t[t.Wireframe=3]="Wireframe",t[t.UV=4]="UV"}(s||(s={}))},7402:(t,e,i)=>{"use strict";i.d(e,{g:()=>l});var s=i(84428),o=i(17878),n=i(56512),r=i(82814),a=i(12529),h=i(53203);class l extends r.S{constructor(t,e,i=o.o.ALL){super(),this._opacity=1,this._chunks=[],this.size=new s.Vector3,this.center=new s.Vector3,this.built=!1,this.layers.mask=i.mask,this.name=`RoomMesh:${t}-${e}`,this.meshGroup=t,this.meshSubgroup=e,this.renderOrder=a.z.default,this.onBeforeRender=(t,e,i,s,o,n)=>{this.updateUniforms(o,n)}}dispose(){this.reset()}reset(){this._chunks.length=0,this.geometry.dispose(),delete this.onBuild,delete this.onOpacityUpdate,this.built=!1}addChunk(t){-1===this._chunks.indexOf(t)&&this._chunks.push(t)}getChunk(t){return this._chunks[t]}build(){if(this.built)throw new Error("build() should only be called once");if(!this._chunks.length)return;const t=(0,n.qf)(this._chunks.map((t=>t.geometry)));t.clearGroups();let e=0;this.material=[],this._chunks.forEach(((i,s)=>{i.geometry&&i.geometry.index&&(t.addGroup(e,i.geometry.index.count,s),e+=i.geometry.index.count,i.geometry.dispose(),i.geometry=t,i.notifyOnMaterialUpdated((t=>{Array.isArray(this.material)&&(this.material[s]=t),this.onMaterialUpdate&&this.onMaterialUpdate()})),i.onOpacityUpdate=t=>{this.opacity=t})})),this.geometry=t,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.material=this._chunks.map((t=>t.material)),this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}buildWithTileChunk(t){if(this.built)return;const{meshGroup:e,meshSubgroup:i,lod:s}=t;this.name=`RoomMesh:${s}-${e}-${i}-${t.chunkIndex}`,this.meshGroup=e,this.meshSubgroup=i,this._chunks.push(t),t.notifyOnMaterialUpdated((t=>{this.material=t,this.onMaterialUpdate&&this.onMaterialUpdate()})),t.onOpacityUpdate=t=>{this.opacity=t},this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}updateUniforms(t,e){t instanceof s.RawShaderMaterial&&(e?this.chunks[e.materialIndex].onBeforeDraw(t):this.chunks.length&&this.chunks[0].onBeforeDraw(t))}get boundingBox(){return(0,n.A5)(this.geometry)}set opacity(t){t!==this.opacity&&(this._opacity=t,this.raycastEnabled=t>h.xx.FADE_CLICKABLE_THRESHOLD,this.renderOrder=t<h.xx.FADE_OPAQUE?a.z.ghostFloor:a.z.default,this.onOpacityUpdate&&this.onOpacityUpdate(t))}get opacity(){return this._opacity}get chunks(){return this._chunks}getSortKey(){return this.chunks.length?this._chunks[0].getSortKey():0}}},51411:(t,e,i)=>{"use strict";i.d(e,{n:()=>o});var s=i(19663);class o extends s.m{constructor(t,e,i){super(),this.id="MESH_PREVIEW_POSITION",this.payload={enabled:t,previewCirclePosition:e,size:i}}}},68191:(t,e,i)=>{"use strict";i.d(e,{U:()=>n});var s=i(19663),o=i(22533);class n extends s.m{constructor(t){super(),this.id="SET_CHUNK_RENDER_MODE",this.payload={mode:t}}}n.modes=o.S},38987:(t,e,i)=>{"use strict";i.d(e,{u:()=>o});var s=i(19663);class o extends s.m{constructor(t=null){super(),this.id="SET_MOUSE_CURSOR",this.payload={cursor:t}}}},34956:(t,e,i)=>{"use strict";var s;i.d(e,{C:()=>s}),function(t){t.NONE="none",t.DEFAULT="default",t.MOVE="move",t.MOVE_LF="col-resize",t.MOVE_UD="row-resize",t.XHAIR="crosshair",t.PLUS="cell",t.QUESTION="help",t.NOPE="not-allowed",t.FINGER="pointer",t.TEXT="text",t.TEXT_VERT="vertical-text",t.ZOOM_IN="zoom-in",t.ZOOM_OUT="zoom-in",t.GRAB="grab",t.GRABBING="grabbing",t.ARROW_R="e-resize",t.ARROW_L="w-resize",t.ARROW_U="n-resize",t.ARROW_D="s-resize",t.ARROW_UR="ne-resize",t.ARROW_UL="nw-resize",t.ARROW_DR="se-resize",t.ARROW_DL="sw-resize",t.ARROW_LR="ew-resize",t.ARROW_UD="ns-resize",t.ARROW_URDL="nesw-resize",t.ARROW_ULDR="nwse-resize"}(s||(s={}))},93642:(t,e,i)=>{"use strict";i.d(e,{SI:()=>o,uQ:()=>n,zf:()=>r,O8:()=>a,WI:()=>h});var s=i(69505);const o=1e3/60,n=(0,s.Id)(70),r=-n,a=.05,h=.1/60},49219:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>S,lookAccelerationKey:()=>M});var s=i(97542),o=i(84428),n=i(90304),r=i(93642),a=i(21646),h=i(49827),l=i(41835),c=i(46950);class d extends l.Z{constructor(t){super(),this.lookVelocity=new o.Vector2,this.lookAccel=new o.Vector2,this.tempAxis=new o.Vector3,this.tempOrientation=new o.Quaternion,this.currentOrientation=new o.Quaternion,this.tempEuler=new o.Euler,this.cameraModule=t,this.transition={active:!1,startTime:0,elapsed:0,duration:0,velocity:new o.Vector2,easeOut:!1}}setLookAcceleration(t,e=!1){this.transition.active||(e&&(t.x&&this.lookVelocity.x&&Math.sign(t.x)!==Math.sign(this.lookVelocity.x)&&(this.lookVelocity.x=0),t.y&&this.lookVelocity.y&&Math.sign(t.y)!==Math.sign(this.lookVelocity.y)&&(this.lookVelocity.y=0)),this.lookAccel.x=void 0!==t.x?t.x:this.lookAccel.x,this.lookAccel.y=void 0!==t.y?t.y:this.lookAccel.y)}startTransition(t,e,i){const s=new c.Q;return this.transition.active=!0,this.transition.duration=t,this.transition.elapsed=0,this.transition.startTime=Date.now(),this.transition.deferred=s,this.transition.velocity.copy(e),this.transition.easeOut=i,this.lookAccel.set(0,0),this.lookVelocity.copy(e),this.cameraModule.beginExternalTransition(),s.promise()}stopTransition(){this.transition.active&&(this.cameraModule.endExternalTransition(),this.transition.active=!1),this.transition.deferred&&(this.transition.deferred.resolve(),this.transition.deferred=void 0)}updateTransition(t){const e=t/r.SI;if(this.lookVelocity.copy(this.transition.velocity),this.transition.elapsed+=t,this.transition.elapsed>=this.transition.duration){const e=this.transition.duration-(this.transition.elapsed-t);this.lookVelocity.multiplyScalar(e/t)}else this.lookVelocity.multiplyScalar(e)}updateCameraParameters(){const t=this.cameraModule.getData(!1);this.tempEuler.setFromQuaternion(t.pose.rotation,"YXZ");const e=this.tempEuler.x,i=(0,h.uZ)(this.lookVelocity.y,r.zf-e,r.uQ-e);this.tempAxis.copy(n.f.RIGHT),this.tempOrientation.setFromAxisAngle(this.tempAxis.applyQuaternion(t.pose.rotation),i),this.currentOrientation.copy(t.pose.rotation).premultiply(this.tempOrientation),this.tempOrientation.setFromAxisAngle(n.f.UP,this.lookVelocity.x),this.currentOrientation.premultiply(this.tempOrientation),t.pose.rotation.equals(this.currentOrientation)||(this.tempOrientation.copy(this.currentOrientation).normalize(),this.cameraModule.updateCameraRotation(this.tempOrientation))}update(t){const e=this.cameraModule.getData(!1),i=t/r.SI;e.pose.rotation.equals(this.currentOrientation)||this.currentOrientation.copy(e.pose.rotation),this.transition.active?(this.updateTransition(t),this.updateCameraParameters(),this.transition.elapsed>=this.transition.duration&&(this.stop(this.transition.easeOut),this.transition.active=!1)):(this.lookAccel.length()>a.Z.epsilon||this.lookVelocity.length()>a.Z.epsilon)&&(this.lookVelocity.addScaledVector(this.lookAccel,i),this.updateCameraParameters(),this.lookVelocity.multiplyScalar(Math.pow(1-r.O8,i)))}stop(t=!1){this.stopTransition(),this.lookAccel.set(0,0),t||this.lookVelocity.set(0,0)}startRotateTransition(t,e,i){const s=this.cameraModule.getData(!1);return s.transition&&s.transition.activeInternal&&s.transition.to.rotation&&(s.transition.to.rotation=void 0),this.startTransition(t,e.clone().multiplyScalar(r.SI),i).nativePromise()}startTranslateTransition(t,e,i=!0){throw new Error("Panning isn't supported in Panorama Controls")}startZoomTransition(t,e,i){throw new Error("Zooming isn't supported in Panorama Controls")}}var u=i(23254),p=i(5135),m=i(95882),y=i(16782),g=i(32597),k=i(6667),R=i(5090),x=i(80592),O=i(89553),A=i(34029),_=i(57956);const M="Rotation speed";class S extends s.Y{constructor(){super(...arguments),this.name="panorama-controls",this.controlsEngaged=!1,this.lookAccelerationSpeed=r.WI,this.calcRotationAngle=(()=>{const t=new o.Matrix4,e=new o.Vector3,i=new o.Vector3;return(s,n,r)=>{const a=s.getData(!1);t.copy(a.pose.projection.asThreeMatrix4()),t.invert(),e.set(n.x-r.x,n.y-r.y,-1).applyMatrix4(t),i.set(n.x,n.y,-1).applyMatrix4(t);const h=Math.sqrt(e.x*e.x+e.z*e.z),l=Math.sqrt(i.x*i.x+i.z*i.z),c=Math.atan2(e.y,h),d=Math.atan2(i.y,l)-c;e.y=0,i.y=0,e.normalize(),i.normalize();const u=Math.acos(e.dot(i));let p=0;return isNaN(u)||(p=u,r.x>0&&(p*=-1)),new o.Vector2(-p,-d)}})()}async init(t,e){const i=await e.getModuleBySymbol(_.y.CAMERA);this.controls=new d(i);const s=await e.getModuleBySymbol(_.y.CONTROLS_COMMON);s.addControls(m.Ey.Panorama,this.controls),s.addControls(m.Ey.Mesh,this.controls),this.market=e.market,this.bindings.push(e.subscribe(R.Z,(t=>{this.controls.stop()}))),e.getModuleBySymbol(_.y.INPUT).then((t=>{t.registerHandler(x.E0,(t=>{this.validateViewmode()&&this.controls.stop()})),t.registerHandler(x._t,(t=>{this.validateViewmode()&&t.buttons&y.r.PRIMARY&&(this.controlsEngaged=!0,this.onDrag(i,t.position,t.delta),this.controls.update(r.SI),this.controls.stop())})),t.registerHandler(x._R,(t=>{this.validateViewmode()&&this.controlsEngaged&&(t.timeSinceLastMove<100&&!(t.buttons&y.r.PRIMARY)&&(this.onDrag(i,t.position,t.delta),this.controls.update(r.SI),this.controls.setLookAcceleration({x:0,y:0})),this.controlsEngaged=!1)})),t.registerHandler(O.e,(t=>{this.validateViewmode()&&this.onKey(t.key,t.state)}))}))}onUpdate(t){this.validateViewmode()&&this.controls.update(t)}onDrag(t,e,i){this.controls.setLookAcceleration(this.calcRotationAngle(t,e,i))}onKey(t,e){let i=null;const s=this.market.tryGetData(A.e);s&&(i=s.tryGetProperty(M,null)),this.lookAccelerationSpeed=i?i*(Math.PI/180)/60:this.lookAccelerationSpeed;const o=e===k.M.DOWN;switch(t){case g.R.LEFTARROW:case g.R.J:this.controls.setLookAcceleration({x:o?this.lookAccelerationSpeed:0},!0);break;case g.R.RIGHTARROW:case g.R.L:this.controls.setLookAcceleration({x:o?-this.lookAccelerationSpeed:0},!0);break;case g.R.K:this.controls.setLookAcceleration({y:o?-this.lookAccelerationSpeed:0},!0);break;case g.R.I:this.controls.setLookAcceleration({y:o?this.lookAccelerationSpeed:0},!0)}}validateViewmode(){const t=this.market.tryGetData(u.O),e=this.market.tryGetData(p.Z);return!t||!e||t.isInside()&&!e.isVR()}}},93377:(t,e,i)=>{"use strict";i.d(e,{b:()=>o});var s=i(84428);class o extends s.RawShaderMaterial{onBeforeCompile(t,e){super.onBeforeCompile(t,e),e.capabilities.isWebGL2&&this.glslVersion!==s.GLSL3&&(t.glslVersion=s.GLSL3,t.vertexShader=n+t.vertexShader,t.fragmentShader=r+t.fragmentShader)}}const n="\n#define attribute in\n#define varying out\n#define texture2D texture\n",r="\n#define varying in\nout highp vec4 pc_fragColor;\n#define gl_FragColor pc_fragColor\n#define gl_FragDepthEXT gl_FragDepth\n#define texture2D texture\n#define textureCube texture\n#define texture2DProj textureProj\n"},87928:(t,e,i)=>{"use strict";i.d(e,{E:()=>o});var s=i(84428);class o extends s.Mesh{constructor(t,e){super(t,e)}}},69984:(t,e,i)=>{"use strict";i.d(e,{G1:()=>a,rn:()=>h,D5:()=>l,Ex:()=>c});var s=i(84428),o=i(39880);const n=()=>Math.random(),r={},a=(t,e=n())=>(r[e]||(r[e]=new s.Vector4(n(),n(),n(),t)),r[e]),h=()=>new s.Color(n(),n(),n()),l=t=>"object"==typeof t&&"r"in t&&"g"in t&&"b"in t;function c(t){return`#${(0,o.Q_)(255*t.r,2,"0",16)}${(0,o.Q_)(255*t.g,2,"0",16)}${(0,o.Q_)(255*t.b,2,"0",16)}`}}}]);