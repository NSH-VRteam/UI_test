// Garden Gnome Software - Skin
// Pano2VR 7.1.8/20986
// Filename: NSH-UI.ggsk
// Generated 2025-07-19T10:26:48

function pano2vrSkin(player,base) {
	player.addVariable('Room_visibility_1F', 2, false, { ignoreInState: 0  });
	player.addVariable('Room_visibility_2F', 2, false, { ignoreInState: 0  });
	player.addVariable('Room_visibility_3F', 2, false, { ignoreInState: 0  });
	player.addVariable('map_T_Active', 2, false, { ignoreInState: 0  });
	player.addVariable('Map_Pin_Normal_E', 2, false, { ignoreInState: 0  });
	player.addVariable('Map_Pin_active_E', 2, false, { ignoreInState: 0  });
	player.addVariable('View_option', 2, true, { ignoreInState: 0  });
	player.addVariable('Floor_Visibility', 2, false, { ignoreInState: 0  });
	player.addVariable('SlideShow_QG', 1, 0, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._right_top_corner_panel=document.createElement('div');
		el.ggId="Right top corner panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_top_corner_panel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._right_top_corner_panel.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1)) || 
				((me.ggUserdata.tags.indexOf("2F") != -1)) || 
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("Exterior") != -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._right_top_corner_panel.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._right_top_corner_panel.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._right_top_corner_panel.style.transition='opacity 500ms ease 0ms';
				if (me._right_top_corner_panel.ggCurrentLogicStateAlpha == 0) {
					me._right_top_corner_panel.style.visibility=me._right_top_corner_panel.ggVisible?'inherit':'hidden';
					me._right_top_corner_panel.style.opacity=1;
				}
				else if (me._right_top_corner_panel.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._right_top_corner_panel.style.opacity == 0.0) { me._right_top_corner_panel.style.visibility="hidden"; } }, 505);
					me._right_top_corner_panel.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._right_top_corner_panel.style.opacity == 0.0) { me._right_top_corner_panel.style.visibility="hidden"; } }, 505);
					me._right_top_corner_panel.style.opacity=0;
				}
			}
		}
		me._right_top_corner_panel.logicBlock_alpha();
		me._right_top_corner_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap_bg=document.createElement('div');
		els=me._minimap_bg__img=document.createElement('img');
		els.className='ggskin ggskin_minimap_bg';
		hs=basePath + 'images/minimap_bg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Minimap_BG";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 220px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 250px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._minimap_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._mini_map=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FirstFloor';
		el.ggId="Mini Map";
		el.ggDx=15;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 230px;';
		hs+='left : calc(50% - ((230px + 0px) / 2) + 15px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((230px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 230px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mini_map.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mini_map.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._mini_map.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._mini_map.ggCalculateFloorplanSize(mapDetails);
				me._mini_map.ggShowSimpleFloorplan(mapDetails);
				me._mini_map.ggPlaceMarkersOnSimpleFloorplan();
			}
		}
		me._mini_map.ggUpdatePosition=function (useTransition) {
			me._mini_map.ggUpdateConditionResize();
		}
		me._minimap_bg.appendChild(me._mini_map);
		el=me._minimap_cb=document.createElement('div');
		els=me._minimap_cb__img=document.createElement('img');
		els.className='ggskin ggskin_minimap_cb';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgB7dtLEcJAEEXRBgWRggQkxAE4AAeJMyQgAQnBQTMpesEns5t+UHBf1Wy5c0i2MXfvy5nijJa80jhG61LOztSL8ONGS1r57c7fp0XHv+0KdAWsRccr5kL08A3oATRoaQ906kCDBq3ogU4daNCgFT3QqQMNGrSiBzp1oEGDVvRApw708zpLWKU3rU23lWm31LuaYvOrW3m6gyVM3ftoHKwQuwcLtkkPLNiEOFiwbXpgwSbEwYJt0wMLNiEOFmybHliwCXGwv4rt/wYbFzgr47782ZAGGxc4KeMLYB02LrDx+9dp80UOlrzS2Cp7r7sBSG0ElqnPeA'+
			'IAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Minimap_CB";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 1;';
		hs+='height : 15px;';
		hs+='position : absolute;';
		hs+='right : 224px;';
		hs+='top : 103px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._minimap_cb.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_cb.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._minimap_bg.style.transition='none';
			} else {
				me._minimap_bg.style.transition='all 500ms ease-out 0ms';
			}
			me._minimap_bg.ggParameter.rx=500;me._minimap_bg.ggParameter.ry=0;
			me._minimap_bg.style.transform=parameterToTransform(me._minimap_bg.ggParameter);
			me._minimap_b.style.transition='none';
			me._minimap_b.style.visibility=(Number(me._minimap_b.style.opacity)>0||!me._minimap_b.style.opacity)?'inherit':'hidden';
			me._minimap_b.ggVisible=true;
			if (player.transitionsDisabled) {
				me._room_name_p.style.transition='none';
			} else {
				me._room_name_p.style.transition='all 100ms ease-out 0ms';
			}
			me._room_name_p.ggParameter.rx=-5;me._room_name_p.ggParameter.ry=-225;
			me._room_name_p.style.transform=parameterToTransform(me._room_name_p.ggParameter);
			if (player.transitionsDisabled) {
				me._floors_b.style.transition='none';
			} else {
				me._floors_b.style.transition='all 100ms ease-out 0ms';
			}
			me._floors_b.ggParameter.rx=-10;me._floors_b.ggParameter.ry=-225;
			me._floors_b.style.transform=parameterToTransform(me._floors_b.ggParameter);
			me._floorplan_b.style.transition='none';
			me._floorplan_b.style.visibility='hidden';
			me._floorplan_b.ggVisible=false;
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
		}
		me._minimap_cb.onmouseenter=function (e) {
			me.elementMouseOver['minimap_cb']=true;
			me._minimap_ch.logicBlock_alpha();
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_alpha();
			me._minimap_ch.logicBlock_visible();
		}
		me._minimap_cb.onmousedown=function (e) {
			me.elementMouseDown['minimap_cb']=true;
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_visible();
		}
		me._minimap_cb.onmouseup=function (e) {
			me.elementMouseDown['minimap_cb']=false;
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_visible();
		}
		me._minimap_cb.onmouseleave=function (e) {
			me.elementMouseDown['minimap_cb']=false;
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_visible();
			me.elementMouseOver['minimap_cb']=false;
			me._minimap_ch.logicBlock_alpha();
			me._minimap_ch.logicBlock_visible();
			me._minimap_ch.logicBlock_alpha();
			me._minimap_ch.logicBlock_visible();
		}
		me._minimap_cb.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap_ch=document.createElement('div');
		els=me._minimap_ch__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Minimap_CH";
		el.ggDx=-50;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._minimap_ch.ggUpdateText=function() {
			var params = [];
			var hs = player._("Close\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._minimap_ch.ggUpdateText();
		el.appendChild(els);
		me._minimap_ch.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_ch.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['minimap_cb'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.elementMouseDown['minimap_cb'] == true))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minimap_ch.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minimap_ch.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minimap_ch.style.transition='opacity 500ms ease 0ms';
				if (me._minimap_ch.ggCurrentLogicStateVisible == 0) {
					me._minimap_ch.style.visibility=(Number(me._minimap_ch.style.opacity)>0||!me._minimap_ch.style.opacity)?'inherit':'hidden';
					me._minimap_ch.ggVisible=true;
				}
				else if (me._minimap_ch.ggCurrentLogicStateVisible == 1) {
					me._minimap_ch.style.visibility="hidden";
					me._minimap_ch.ggVisible=false;
				}
				else {
					me._minimap_ch.style.visibility=(Number(me._minimap_ch.style.opacity)>0||!me._minimap_ch.style.opacity)?'inherit':'hidden';
					me._minimap_ch.ggVisible=true;
				}
			}
		}
		me._minimap_ch.logicBlock_visible();
		me._minimap_ch.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['minimap_cb'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._minimap_ch.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._minimap_ch.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._minimap_ch.style.transition='opacity 500ms ease 0ms';
				if (me._minimap_ch.ggCurrentLogicStateAlpha == 0) {
					me._minimap_ch.style.visibility=me._minimap_ch.ggVisible?'inherit':'hidden';
					me._minimap_ch.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._minimap_ch.style.opacity == 0.0) { me._minimap_ch.style.visibility="hidden"; } }, 505);
					me._minimap_ch.style.opacity=0;
				}
			}
		}
		me._minimap_ch.logicBlock_alpha();
		me._minimap_ch.ggUpdatePosition=function (useTransition) {
		}
		me._minimap_cb.appendChild(me._minimap_ch);
		me._minimap_bg.appendChild(me._minimap_cb);
		me._right_top_corner_panel.appendChild(me._minimap_bg);
		el=me._room_name_p=document.createElement('div');
		els=me._room_name_p__img=document.createElement('img');
		els.className='ggskin ggskin_room_name_p';
		hs=basePath + 'images/room_name_p.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Room_name_P";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 45px;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_name_p.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_name_p.onclick=function (e) {
			player.setVariableValue('Room_visibility_1F', !player.getVariableValue('Room_visibility_1F'));
			player.setVariableValue('Room_visibility_2F', !player.getVariableValue('Room_visibility_2F'));
			player.setVariableValue('Room_visibility_3F', !player.getVariableValue('Room_visibility_3F'));
			player.setVariableValue('Floor_Visibility', false);
		}
		me._room_name_p.onmouseenter=function (e) {
			me.elementMouseOver['room_name_p']=true;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
		}
		me._room_name_p.onmousedown=function (e) {
			me.elementMouseDown['room_name_p']=true;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
		}
		me._room_name_p.onmouseup=function (e) {
			me.elementMouseDown['room_name_p']=false;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
		}
		me._room_name_p.onmouseleave=function (e) {
			me.elementMouseDown['room_name_p']=false;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
			me.elementMouseOver['room_name_p']=false;
			me._rooms_h.logicBlock_alpha();
			me._rooms_h.logicBlock_alpha();
		}
		me._room_name_p.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1f_rooms=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="1F_Rooms";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1f_rooms.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1f_rooms.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_1f=document.createElement('div');
		els=me._scrollarea_1f__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 349px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 147px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_1f.ggScrollByX = function(diffX) {
			if(!me._scrollarea_1f.ggHorScrollVisible || diffX == 0 || me._scrollarea_1f.ggHPercentVisible >= 1.0) return;
			me._scrollarea_1f.ggScrollPosX = (me._scrollarea_1f__horScrollFg.offsetLeft + diffX);
			me._scrollarea_1f.ggScrollPosX = Math.max(me._scrollarea_1f.ggScrollPosX, 0);
			me._scrollarea_1f.ggScrollPosX = Math.min(me._scrollarea_1f.ggScrollPosX, me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth);
			me._scrollarea_1f__horScrollFg.style.left = me._scrollarea_1f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1f.ggScrollPosX / (me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth);
			me._scrollarea_1f__content.style.left = -(Math.round((me._scrollarea_1f.ggContentWidth * (1.0 - me._scrollarea_1f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentLeftOffset + 'px';
			me._scrollarea_1f.ggScrollPosXPercent = (me._scrollarea_1f__horScrollFg.offsetLeft / me._scrollarea_1f__horScrollBg.offsetWidth);
		}
		me._scrollarea_1f.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_1f.ggHorScrollVisible || diffX == 0 || me._scrollarea_1f.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_1f.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_1f.ggScrollPosX >= me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth)) {
					me._scrollarea_1f.ggScrollPosX = Math.min(me._scrollarea_1f.ggScrollPosX, me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_1f.ggScrollPosX <= 0)) {
					me._scrollarea_1f.ggScrollPosX = Math.max(me._scrollarea_1f.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_1f__horScrollFg.style.left = me._scrollarea_1f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_1f.ggScrollPosX / (me._scrollarea_1f__horScrollBg.offsetWidth - me._scrollarea_1f__horScrollFg.offsetWidth);
			me._scrollarea_1f__content.style.left = -(Math.round((me._scrollarea_1f.ggContentWidth * (1.0 - me._scrollarea_1f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentLeftOffset + 'px';
			me._scrollarea_1f.ggScrollPosXPercent = (me._scrollarea_1f__horScrollFg.offsetLeft / me._scrollarea_1f__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_1f.ggScrollByY = function(diffY) {
			if(!me._scrollarea_1f.ggVertScrollVisible || diffY == 0 || me._scrollarea_1f.ggVPercentVisible >= 1.0) return;
			me._scrollarea_1f.ggScrollPosY = (me._scrollarea_1f__vertScrollFg.offsetTop + diffY);
			me._scrollarea_1f.ggScrollPosY = Math.max(me._scrollarea_1f.ggScrollPosY, 0);
			me._scrollarea_1f.ggScrollPosY = Math.min(me._scrollarea_1f.ggScrollPosY, me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
			me._scrollarea_1f__vertScrollFg.style.top = me._scrollarea_1f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1f.ggScrollPosY / (me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
			me._scrollarea_1f__content.style.top = -(Math.round((me._scrollarea_1f.ggContentHeight * (1.0 - me._scrollarea_1f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentTopOffset + 'px';
			me._scrollarea_1f.ggScrollPosYPercent = (me._scrollarea_1f__vertScrollFg.offsetTop / me._scrollarea_1f__vertScrollBg.offsetHeight);
		}
		me._scrollarea_1f.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_1f.ggVertScrollVisible || diffY == 0 || me._scrollarea_1f.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_1f.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_1f.ggScrollPosY >= me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight)) {
					me._scrollarea_1f.ggScrollPosY = Math.min(me._scrollarea_1f.ggScrollPosY, me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_1f.ggScrollPosY <= 0)) {
					me._scrollarea_1f.ggScrollPosY = Math.max(me._scrollarea_1f.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_1f__vertScrollFg.style.top = me._scrollarea_1f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_1f.ggScrollPosY / (me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
			me._scrollarea_1f__content.style.top = -(Math.round((me._scrollarea_1f.ggContentHeight * (1.0 - me._scrollarea_1f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentTopOffset + 'px';
			me._scrollarea_1f.ggScrollPosYPercent = (me._scrollarea_1f__vertScrollFg.offsetTop / me._scrollarea_1f__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_1f.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_1f.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_1f.ggHPercentVisible);
					me._scrollarea_1f.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_1f.clientWidth - (me._scrollarea_1f.ggVertScrollVisible ? 3 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_1f.clientWidth - (me._scrollarea_1f.ggVertScrollVisible ? 3 : 0))) * me._scrollarea_1f.ggHPercentVisible);
					me._scrollarea_1f.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_1f.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_1f.ggVPercentVisible);
					me._scrollarea_1f.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_1f.clientHeight - (me._scrollarea_1f.ggHorScrollVisible ? 3 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_1f.clientHeight - (me._scrollarea_1f.ggHorScrollVisible ? 3 : 0))) * me._scrollarea_1f.ggVPercentVisible);
					me._scrollarea_1f.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_1f__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_1f.ggDragInertiaX *= 0.96;
				me._scrollarea_1f.ggDragInertiaY *= 0.96;
				me._scrollarea_1f.ggScrollByX(me._scrollarea_1f.ggDragInertiaX);
				me._scrollarea_1f.ggScrollByY(me._scrollarea_1f.ggDragInertiaY);
				if (Math.abs(me._scrollarea_1f.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_1f.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_1f__content.onmouseup = null;
			me._scrollarea_1f__content.onmousemove = null;
			me._scrollarea_1f__content.ontouchend = null;
			me._scrollarea_1f__content.ontouchmove = null;
			me._scrollarea_1f__content.onpointerup = null;
			me._scrollarea_1f__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_1f.ggIsDragging = false; }, 100);
		}
		me._scrollarea_1f__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_1f.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_1f.ggDragStartY) > 10) me._scrollarea_1f.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_1f.ggDragLastX) * me._scrollarea_1f.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_1f.ggDragLastY) * me._scrollarea_1f.ggVPercentVisible;
			me._scrollarea_1f.ggDragInertiaX = -diffX;
			me._scrollarea_1f.ggDragInertiaY = -diffY;
			me._scrollarea_1f.ggDragLastX = eventX;
			me._scrollarea_1f.ggDragLastY = eventY;
			me._scrollarea_1f.ggScrollByX(-diffX);
			me._scrollarea_1f.ggScrollByY(-diffY);
		}
		me._scrollarea_1f__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_1f.ggDragLastX = me._scrollarea_1f.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_1f.ggDragLastY = me._scrollarea_1f.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_1f__content.onmouseup = me._scrollarea_1f__content.mousetouchend;
			me._scrollarea_1f__content.ontouchend = me._scrollarea_1f__content.mousetouchend;
			me._scrollarea_1f__content.onmousemove = me._scrollarea_1f__content.mousetouchmove;
			me._scrollarea_1f__content.ontouchmove = me._scrollarea_1f__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_1f__content.onpointerup = me._scrollarea_1f__content.ontouchend;
				me._scrollarea_1f__content.onpointermove = me._scrollarea_1f__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_1f__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_1f__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_1f__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_1f__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_1f__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(255,255,255,0.588235); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_1f.ggScrollPosY = 0;
		me._scrollarea_1f.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_1f.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1f.ggDragInertiaY *= 0.96;
					me._scrollarea_1f.ggScrollByY(me._scrollarea_1f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_1f.ggDragLastY;
				me._scrollarea_1f.ggDragInertiaY = diffY;
				me._scrollarea_1f.ggDragLastY = e.clientY;
				me._scrollarea_1f.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_1f.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_1f.ggDragInertiaY *= 0.96;
					me._scrollarea_1f.ggScrollByY(me._scrollarea_1f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_1f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_1f.ggDragLastY;
				me._scrollarea_1f.ggDragInertiaY = diffY;
				me._scrollarea_1f.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_1f.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_1f.ggScrollHeight;
			if (e.offsetY < me._scrollarea_1f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1f.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_1f__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_1f.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_1f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_1f.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_1f.ggScrollByYSmooth(30 * me._scrollarea_1f.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_1f__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 3px; height: 3px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 1F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='z-index: -5;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_1f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_1f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_1F') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_1f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_1f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_1f.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_1f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_1f.style.top='0px';
				}
				else if (me._scrollarea_1f.ggCurrentLogicStatePosition == 1) {
					me._scrollarea_1f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_1f.style.top='40px';
				}
				else {
					me._scrollarea_1f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._scrollarea_1f.style.top='0px';
				}
			}
		}
		me._scrollarea_1f.logicBlock_position();
		me._scrollarea_1f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_1f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_1f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_1f.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_1f.style.visibility=(Number(me._scrollarea_1f.style.opacity)>0||!me._scrollarea_1f.style.opacity)?'inherit':'hidden';
					me._scrollarea_1f.ggVisible=true;
				}
				else if (me._scrollarea_1f.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_1f.style.visibility="hidden";
					me._scrollarea_1f.ggVisible=false;
				}
				else {
					me._scrollarea_1f.style.visibility="hidden";
					me._scrollarea_1f.ggVisible=false;
				}
			}
		}
		me._scrollarea_1f.logicBlock_visible();
		me._scrollarea_1f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_1F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._scrollarea_1f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._scrollarea_1f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._scrollarea_1f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_1f.ggCurrentLogicStateAlpha == 0) {
					me._scrollarea_1f.style.visibility=me._scrollarea_1f.ggVisible?'inherit':'hidden';
					me._scrollarea_1f.style.opacity=1;
				}
				else if (me._scrollarea_1f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._scrollarea_1f.style.opacity == 0.0) { me._scrollarea_1f.style.visibility="hidden"; } }, 505);
					me._scrollarea_1f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._scrollarea_1f.style.opacity == 0.0) { me._scrollarea_1f.style.visibility="hidden"; } }, 505);
					me._scrollarea_1f.style.opacity=0;
				}
			}
		}
		me._scrollarea_1f.logicBlock_alpha();
		me._scrollarea_1f.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_1f.ggScrollPosY / me._scrollarea_1f.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_1f.ggHorScrollVisible && contentHeight > this.clientHeight - 3) || (!me._scrollarea_1f.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_1f__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_1f__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_1f.ggVertScrollVisible = true;
				} else {
					me._scrollarea_1f__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_1f__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_1f.ggVertScrollVisible = false;
				}
				if(me._scrollarea_1f.ggVertScrollVisible) {
					me._scrollarea_1f.ggAvailableWidth = me._scrollarea_1f.clientWidth - 3;
					if (me._scrollarea_1f.ggHorScrollVisible) {
						me._scrollarea_1f.ggAvailableHeight = me._scrollarea_1f.clientHeight - 3;
						me._scrollarea_1f.ggAvailableHeightWithScale = me._scrollarea_1f.getBoundingClientRect().height - me._scrollarea_1f__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_1f__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_1f.ggAvailableHeight = me._scrollarea_1f.clientHeight;
						me._scrollarea_1f.ggAvailableHeightWithScale = me._scrollarea_1f.getBoundingClientRect().height;
						me._scrollarea_1f__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_1f__vertScrollBg.style.height = me._scrollarea_1f.ggAvailableHeight + 'px';
					me._scrollarea_1f.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_1f.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_1f.ggVPercentVisible > 1.0) me._scrollarea_1f.ggVPercentVisible = 1.0;
					me._scrollarea_1f.ggScrollHeight =  Math.round(me._scrollarea_1f__vertScrollBg.offsetHeight * me._scrollarea_1f.ggVPercentVisible);
					me._scrollarea_1f__vertScrollFg.style.height = me._scrollarea_1f.ggScrollHeight + 'px';
					me._scrollarea_1f.ggScrollPosY = me._scrollarea_1f.ggScrollPosYPercent * me._scrollarea_1f.ggAvailableHeight;
					me._scrollarea_1f.ggScrollPosY = Math.min(me._scrollarea_1f.ggScrollPosY, me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
					me._scrollarea_1f__vertScrollFg.style.top = me._scrollarea_1f.ggScrollPosY + 'px';
					if (me._scrollarea_1f.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_1f.ggScrollPosY / (me._scrollarea_1f__vertScrollBg.offsetHeight - me._scrollarea_1f__vertScrollFg.offsetHeight);
						me._scrollarea_1f__content.style.top = -(Math.round((me._scrollarea_1f.ggContentHeight * (1.0 - me._scrollarea_1f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_1f.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_1f.ggAvailableWidth = me._scrollarea_1f.clientWidth;
					me._scrollarea_1f.ggScrollPosY = 0;
					me._scrollarea_1f.ggScrollPosYPercent = 0.0;
					me._scrollarea_1f__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_1f__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_1f.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_1f.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_1f);
					me._scrollarea_1f.ggUpdatePosition();
				}
			}
		}
		el=me._room_panel_1f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._room_panel_1f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._room_panel_1f__img=document.createElement('img');
		els.className='ggskin ggskin_room_panel_1f';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlAAAAK8CAYAAAAgZIG8AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB/ySURBVHgB7d1Pz1xXmSDw8vWNnSiJsNTAQCYSdiLSbNJKS4BG6lGYblasmt6B2DSfoGdWLNPeIFhN+hPADg2bHjYgNs0fkVUidcSKICCWAG9CByMLGUhc7joVn+vz795z6nW61eDfT3Kq6t63bt2qt67z+DnPec653aCvfOUrlx5++OFPnz9//hN37tx57ty5c5cPmy8d7i8/E+4ftu9OlR4jiMeI20ePufXz5b70XFv71o4zqvws1h73PrO1/fG5W89fe89n/T21zmvks2r9TOsc1s6r97vrHbc837O+963XHdk/euz4OBj9jHrPW/u59GdPPf/09z/6nN'+
			'65xOOm213/rv/0+a5/1//WcU79Dh3cODy+drh9dZ7n7968efMbn//852/sBnTP7Gtf+9rlwwv9w+HP3x9e5FI8idabbv2ldBat45/63LXbd0s85tpxy79c1j6v8nij1p7fer9nee/lc87yOfY+o7XXjc/tndPo65/ymvf7PRn5Xfee03v8n2n0/bj+2+dR3m/tT483yvU//vqnvKbrP/cAX/9fPfz81c9+9rPXNl9vbUfIOD3yyCP/GIKn/X4/9EXsfWFHv9Cjx2l9KGt/ecSfL9/L1r9Y4vN753GKOyf+i+mUY6Xbg/TLPE1T9t7LL3vrAhg5z96+nvS56e+t/Atk63mlkYuld/xTnPX9tz7vtf8xnuV8W7/X8nV7z21dM73nnHX/qcdx/bv+W1z/9XNd/2e+/l/8zGc+83/WzqV5lnezTt85HORy62RWD3au/6+u'+
			'1om2viC9C6A8Zu91147filC3/jJZ+yJvHa93zq3to5/71vttfTatx1s/s6Z8n6PfjbXPduTzG3mNeMzy53vn2fsce5/P1vf91O9mvMi3vnO966X3u137PFp/ubj+Xf9rr+v6337+2vmsPc/1/1/y+r92uPnrVjaqekdf//rXn7t9+/Y/H+5eLve9/fbbv//JT37yw5///OfX33zzzZtvvPHGzR0AwB+hRx999OKTTz75Z08//fSVJ5544srFixcfD9vTgO9w/9ohLvq7z33uc6+mz80CqJB5Otx85xBxXU4PcOvWrZs/+MEP/uW11167vgMA+BP08Y9//M+fffbZjz3yyCOPF5mra7siE7UEUHdn2f1rDJ6i119//Yff+973Xvntb3/7+x0AwJ+wkJV6/vnnP/rUU0/9Rbo9BFG/+93v/jLO0pvijgsXLvxjCJ5CxB'+
			'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'+
			'DbQjAlAwUA0FEVkVsLDwBg21I8fhixU0QOADAo7VowC5wAALalJU/BJIACABiTrYUniAIAWBeH7+J9GSgAgAGhgFwGCgBgULqUSzClGwRSAAC1su2TDBQAwIA0XhJAAQB0VGvhGboDANi2uphwaycAAO9Ik05TmJIXNwIAUFNEDgBwBulyLgIoAIAB6WLCoYj8RtgY25M/+uijj+8AADi6cOHCxdiF/G7S6Uaogbp2jKTu1kIJoAAA7rl06dKfhdtkLbxr0+HBq/EHQiB1+KEndgAAHL33ve+9ErNPd/+8GtJO3ws7Yx3U+973vr/YAQBw9J73vOdKuE0CqO9OFy9e/P/nz5+/EXcc7l/8wAc+IAsFADzwPvShD/35Qw89lJU33bp16xvT1atXQ/D01XRR4aeeeupvQsHUDgDgARVioSeffPJjxfDdV1988cUbx8rx'+
			't99++5/SQvIQaX34wx/+6A4A4AH1zDPPfGye5yz7dPv27avh9nz4z0svvXTj+eefv3S4+z9ihPXoo4/+t4cffvjcr371q+s7AIAHyEc+8pGPvf/97//LNPt0586dF7/0pS/9v7B/WQvvEGGFiOpafBx+8IMf/OBHn3322b8ynAcAPAhCzHOIff5niIHC4yR4unbr1q2r8eeyFuRf+MIXLp8/f/47h6G8y+n2t9566+b169df/tnPfvbaDgDgT9AhaHri6aef/puyaDz0ffrDH/7w11/+8pevLdvKJ7/wwgvP7ff7fz7cvXz3SbvD4+O+EEj95je/ef2NN954/c033/y3w8F+vwMA+CP0+MFjjz32+KVLl/77Ybju2UMC6WK6vN3dZVuu3b59+++++MUvvpo+t7kIXshEHVJY39ndDaLWhAPHwvP4eDnw3fVishdrbB'+
			'uVLuBXnsPoWn7v9jltvfb9vtezPHftMxp5rfs53+iU38Xaz/5H/T7id7X1+4/7t86jd17p/vR+PKe1717rte/XKb+H+30d17/rP3L9u/6jP7Hrv8o8Lc/fetYhG/V/Dwf/3+mJpifc+8KO7msds/fBpF/W5c00PozRD7j1cyPPbX345S977f3E7N7I+x09163PdvRYp24f/Z21jjHyOqPnsvacd/N7GrTef3TK9zrd1jruqef7bj537bN1/dfPK7n+x8/f9e/6/698/R+8ePPmzauhZUHred0jH4Koy4eL/IXDwf9+N2DtC9f6kq3tbx1vbf+7ZevLsfaX5FnPqffc+zl27zj387vovUb6GY5se7de4yzH3DpW63hr/3M6i61jr51P3L72+iOfx+h3e+tcR95beX6u/9Oe6/o/7TXOcsytY7WO5/off2/l+f0RXv83'+
			'DjHPVw/ZtX+6evXqtc3n7QYdAqlLh4N++nD3E4cDP3e4vXx4wUvpBxa1vgznzo3/q+g/wlkusK2/UHvnf5b3GJ7TSjOvHfvOne1/Na+dw6nvZesc1o7xbv2Oz3rs8jNqXYitz3vrs117jbVtrb801o6zdh498VzPcr7pX2BneZ3e98v17/q/X67/ba7/MZ3rP2SXrh1+5tXDn+8e4pxv3G0w3vXvDLox5WmXfjEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Room_panel 1f";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 350px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_panel_1f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_panel_1f.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_1f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_1f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 35;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._cloner_1f.ggCloneOffset + me._cloner_1f.ggNumRows <= me._cloner_1f.ggNumFilterPassed) {
				me._cloner_1f.ggCloneOffset += me._cloner_1f.ggNumRows;
				me._cloner_1f.ggCloneOffsetChanged = true;
				me._cloner_1f.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._cloner_1f.ggCloneOffset > 0) {
				me._cloner_1f.ggCloneOffset -= me._cloner_1f.ggNumRows;
				me._cloner_1f.ggCloneOffset = Math.max(me._cloner_1f.ggCloneOffset, 0);
				me._cloner_1f.ggCloneOffsetChanged = true;
				me._cloner_1f.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_1f.ggUpdating == true) return;
			me._cloner_1f.ggUpdating = true;
			var el=me._cloner_1f;
			var curNumRows = 0;
			var parentHeight = me._cloner_1f.parentNode.classList.contains('ggskin_subelement') ? (me._cloner_1f.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._cloner_1f.parentNode.parentNode.ggAvailableHeight : me._cloner_1f.parentNode.parentNode.clientHeight) : me._cloner_1f.parentNode.clientHeight;
			if (parentHeight == 0) parentHeight = me._cloner_1f.parentNode.parentNode.clientHeight;
			curNumRows = Math.floor(((parentHeight - me._cloner_1f.offsetTop) * me._cloner_1f.ggNumRepeat / 100.0) / me._cloner_1f.offsetHeight);
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && (!me._cloner_1f.ggCloneOffsetChanged)) {
				me._cloner_1f.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_1f.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_1f.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_1f.getFilteredNodes(tourNodes, filter);
			me._cloner_1f.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_1f.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_1f.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_1f.ggWidth) + 'px';
				parameter.width=me._cloner_1f.ggWidth + 'px';
				parameter.height=me._cloner_1f.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_1f_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					keepCloning = false;
				}
			}
			player.setVariableValue('cloner_1f_hasDown', me._cloner_1f.ggCloneOffset > 0);
			player.setVariableValue('cloner_1f_hasUp', me._cloner_1f.ggCloneOffset + me._cloner_1f.ggNumCols < me._cloner_1f.ggNumFilterPassed);
			me._cloner_1f.ggNodeCount = me._cloner_1f.ggNumFilterPassed;
			me._cloner_1f.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_1f.parentNode && me._cloner_1f.parentNode.classList.contains('ggskin_subelement') && me._cloner_1f.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_1f.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "1F_Rooms";
		el.ggId="Cloner 1F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_1f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_1f.ggUpdatePosition=function (useTransition) {
			me._cloner_1f.ggUpdate();
		}
		me._room_panel_1f.appendChild(me._cloner_1f);
		me._scrollarea_1f__content.appendChild(me._room_panel_1f);
		me.__1f_rooms.appendChild(me._scrollarea_1f);
		me._room_name_p.appendChild(me.__1f_rooms);
		el=me.__2f_rooms=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="2F_Rooms";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2f_rooms.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2f_rooms.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_2f=document.createElement('div');
		els=me._scrollarea_2f__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 244px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 147px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_2f.ggScrollByX = function(diffX) {
			if(!me._scrollarea_2f.ggHorScrollVisible || diffX == 0 || me._scrollarea_2f.ggHPercentVisible >= 1.0) return;
			me._scrollarea_2f.ggScrollPosX = (me._scrollarea_2f__horScrollFg.offsetLeft + diffX);
			me._scrollarea_2f.ggScrollPosX = Math.max(me._scrollarea_2f.ggScrollPosX, 0);
			me._scrollarea_2f.ggScrollPosX = Math.min(me._scrollarea_2f.ggScrollPosX, me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth);
			me._scrollarea_2f__horScrollFg.style.left = me._scrollarea_2f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_2f.ggScrollPosX / (me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth);
			me._scrollarea_2f__content.style.left = -(Math.round((me._scrollarea_2f.ggContentWidth * (1.0 - me._scrollarea_2f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentLeftOffset + 'px';
			me._scrollarea_2f.ggScrollPosXPercent = (me._scrollarea_2f__horScrollFg.offsetLeft / me._scrollarea_2f__horScrollBg.offsetWidth);
		}
		me._scrollarea_2f.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_2f.ggHorScrollVisible || diffX == 0 || me._scrollarea_2f.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_2f.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_2f.ggScrollPosX >= me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth)) {
					me._scrollarea_2f.ggScrollPosX = Math.min(me._scrollarea_2f.ggScrollPosX, me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_2f.ggScrollPosX <= 0)) {
					me._scrollarea_2f.ggScrollPosX = Math.max(me._scrollarea_2f.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_2f__horScrollFg.style.left = me._scrollarea_2f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_2f.ggScrollPosX / (me._scrollarea_2f__horScrollBg.offsetWidth - me._scrollarea_2f__horScrollFg.offsetWidth);
			me._scrollarea_2f__content.style.left = -(Math.round((me._scrollarea_2f.ggContentWidth * (1.0 - me._scrollarea_2f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentLeftOffset + 'px';
			me._scrollarea_2f.ggScrollPosXPercent = (me._scrollarea_2f__horScrollFg.offsetLeft / me._scrollarea_2f__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_2f.ggScrollByY = function(diffY) {
			if(!me._scrollarea_2f.ggVertScrollVisible || diffY == 0 || me._scrollarea_2f.ggVPercentVisible >= 1.0) return;
			me._scrollarea_2f.ggScrollPosY = (me._scrollarea_2f__vertScrollFg.offsetTop + diffY);
			me._scrollarea_2f.ggScrollPosY = Math.max(me._scrollarea_2f.ggScrollPosY, 0);
			me._scrollarea_2f.ggScrollPosY = Math.min(me._scrollarea_2f.ggScrollPosY, me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
			me._scrollarea_2f__vertScrollFg.style.top = me._scrollarea_2f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_2f.ggScrollPosY / (me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
			me._scrollarea_2f__content.style.top = -(Math.round((me._scrollarea_2f.ggContentHeight * (1.0 - me._scrollarea_2f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentTopOffset + 'px';
			me._scrollarea_2f.ggScrollPosYPercent = (me._scrollarea_2f__vertScrollFg.offsetTop / me._scrollarea_2f__vertScrollBg.offsetHeight);
		}
		me._scrollarea_2f.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_2f.ggVertScrollVisible || diffY == 0 || me._scrollarea_2f.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_2f.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_2f.ggScrollPosY >= me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight)) {
					me._scrollarea_2f.ggScrollPosY = Math.min(me._scrollarea_2f.ggScrollPosY, me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_2f.ggScrollPosY <= 0)) {
					me._scrollarea_2f.ggScrollPosY = Math.max(me._scrollarea_2f.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_2f__vertScrollFg.style.top = me._scrollarea_2f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_2f.ggScrollPosY / (me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
			me._scrollarea_2f__content.style.top = -(Math.round((me._scrollarea_2f.ggContentHeight * (1.0 - me._scrollarea_2f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentTopOffset + 'px';
			me._scrollarea_2f.ggScrollPosYPercent = (me._scrollarea_2f__vertScrollFg.offsetTop / me._scrollarea_2f__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_2f.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_2f.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_2f.ggHPercentVisible);
					me._scrollarea_2f.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_2f.clientWidth - (me._scrollarea_2f.ggVertScrollVisible ? 3 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_2f.clientWidth - (me._scrollarea_2f.ggVertScrollVisible ? 3 : 0))) * me._scrollarea_2f.ggHPercentVisible);
					me._scrollarea_2f.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_2f.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_2f.ggVPercentVisible);
					me._scrollarea_2f.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_2f.clientHeight - (me._scrollarea_2f.ggHorScrollVisible ? 3 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_2f.clientHeight - (me._scrollarea_2f.ggHorScrollVisible ? 3 : 0))) * me._scrollarea_2f.ggVPercentVisible);
					me._scrollarea_2f.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_2f__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_2f.ggDragInertiaX *= 0.96;
				me._scrollarea_2f.ggDragInertiaY *= 0.96;
				me._scrollarea_2f.ggScrollByX(me._scrollarea_2f.ggDragInertiaX);
				me._scrollarea_2f.ggScrollByY(me._scrollarea_2f.ggDragInertiaY);
				if (Math.abs(me._scrollarea_2f.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_2f.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_2f__content.onmouseup = null;
			me._scrollarea_2f__content.onmousemove = null;
			me._scrollarea_2f__content.ontouchend = null;
			me._scrollarea_2f__content.ontouchmove = null;
			me._scrollarea_2f__content.onpointerup = null;
			me._scrollarea_2f__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_2f.ggIsDragging = false; }, 100);
		}
		me._scrollarea_2f__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_2f.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_2f.ggDragStartY) > 10) me._scrollarea_2f.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_2f.ggDragLastX) * me._scrollarea_2f.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_2f.ggDragLastY) * me._scrollarea_2f.ggVPercentVisible;
			me._scrollarea_2f.ggDragInertiaX = -diffX;
			me._scrollarea_2f.ggDragInertiaY = -diffY;
			me._scrollarea_2f.ggDragLastX = eventX;
			me._scrollarea_2f.ggDragLastY = eventY;
			me._scrollarea_2f.ggScrollByX(-diffX);
			me._scrollarea_2f.ggScrollByY(-diffY);
		}
		me._scrollarea_2f__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_2f.ggDragLastX = me._scrollarea_2f.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_2f.ggDragLastY = me._scrollarea_2f.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_2f__content.onmouseup = me._scrollarea_2f__content.mousetouchend;
			me._scrollarea_2f__content.ontouchend = me._scrollarea_2f__content.mousetouchend;
			me._scrollarea_2f__content.onmousemove = me._scrollarea_2f__content.mousetouchmove;
			me._scrollarea_2f__content.ontouchmove = me._scrollarea_2f__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_2f__content.onpointerup = me._scrollarea_2f__content.ontouchend;
				me._scrollarea_2f__content.onpointermove = me._scrollarea_2f__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_2f__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_2f__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_2f__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_2f__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_2f__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(255,255,255,0.588235); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_2f.ggScrollPosY = 0;
		me._scrollarea_2f.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_2f.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2f.ggDragInertiaY *= 0.96;
					me._scrollarea_2f.ggScrollByY(me._scrollarea_2f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_2f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_2f.ggDragLastY;
				me._scrollarea_2f.ggDragInertiaY = diffY;
				me._scrollarea_2f.ggDragLastY = e.clientY;
				me._scrollarea_2f.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_2f.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_2f.ggDragInertiaY *= 0.96;
					me._scrollarea_2f.ggScrollByY(me._scrollarea_2f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_2f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_2f.ggDragLastY;
				me._scrollarea_2f.ggDragInertiaY = diffY;
				me._scrollarea_2f.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_2f.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_2f.ggScrollHeight;
			if (e.offsetY < me._scrollarea_2f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_2f.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_2f__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_2f.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_2f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_2f.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_2f.ggScrollByYSmooth(30 * me._scrollarea_2f.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_2f__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 3px; height: 3px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 2F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='z-index: -5;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_2f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_2f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_2F') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_2f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_2f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_2f.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_2f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_2f.style.top='40px';
				}
				else if (me._scrollarea_2f.ggCurrentLogicStatePosition == 1) {
					me._scrollarea_2f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_2f.style.top='0px';
				}
				else {
					me._scrollarea_2f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._scrollarea_2f.style.top='0px';
				}
			}
		}
		me._scrollarea_2f.logicBlock_position();
		me._scrollarea_2f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_2f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_2f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_2f.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_2f.style.visibility=(Number(me._scrollarea_2f.style.opacity)>0||!me._scrollarea_2f.style.opacity)?'inherit':'hidden';
					me._scrollarea_2f.ggVisible=true;
				}
				else if (me._scrollarea_2f.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_2f.style.visibility="hidden";
					me._scrollarea_2f.ggVisible=false;
				}
				else {
					me._scrollarea_2f.style.visibility="hidden";
					me._scrollarea_2f.ggVisible=false;
				}
			}
		}
		me._scrollarea_2f.logicBlock_visible();
		me._scrollarea_2f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_2F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_2F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._scrollarea_2f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._scrollarea_2f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._scrollarea_2f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_2f.ggCurrentLogicStateAlpha == 0) {
					me._scrollarea_2f.style.visibility=me._scrollarea_2f.ggVisible?'inherit':'hidden';
					me._scrollarea_2f.style.opacity=1;
				}
				else if (me._scrollarea_2f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._scrollarea_2f.style.opacity == 0.0) { me._scrollarea_2f.style.visibility="hidden"; } }, 505);
					me._scrollarea_2f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._scrollarea_2f.style.opacity == 0.0) { me._scrollarea_2f.style.visibility="hidden"; } }, 505);
					me._scrollarea_2f.style.opacity=0;
				}
			}
		}
		me._scrollarea_2f.logicBlock_alpha();
		me._scrollarea_2f.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_2f.ggScrollPosY / me._scrollarea_2f.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_2f.ggHorScrollVisible && contentHeight > this.clientHeight - 3) || (!me._scrollarea_2f.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_2f__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_2f__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_2f.ggVertScrollVisible = true;
				} else {
					me._scrollarea_2f__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_2f__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_2f.ggVertScrollVisible = false;
				}
				if(me._scrollarea_2f.ggVertScrollVisible) {
					me._scrollarea_2f.ggAvailableWidth = me._scrollarea_2f.clientWidth - 3;
					if (me._scrollarea_2f.ggHorScrollVisible) {
						me._scrollarea_2f.ggAvailableHeight = me._scrollarea_2f.clientHeight - 3;
						me._scrollarea_2f.ggAvailableHeightWithScale = me._scrollarea_2f.getBoundingClientRect().height - me._scrollarea_2f__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_2f__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_2f.ggAvailableHeight = me._scrollarea_2f.clientHeight;
						me._scrollarea_2f.ggAvailableHeightWithScale = me._scrollarea_2f.getBoundingClientRect().height;
						me._scrollarea_2f__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_2f__vertScrollBg.style.height = me._scrollarea_2f.ggAvailableHeight + 'px';
					me._scrollarea_2f.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_2f.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_2f.ggVPercentVisible > 1.0) me._scrollarea_2f.ggVPercentVisible = 1.0;
					me._scrollarea_2f.ggScrollHeight =  Math.round(me._scrollarea_2f__vertScrollBg.offsetHeight * me._scrollarea_2f.ggVPercentVisible);
					me._scrollarea_2f__vertScrollFg.style.height = me._scrollarea_2f.ggScrollHeight + 'px';
					me._scrollarea_2f.ggScrollPosY = me._scrollarea_2f.ggScrollPosYPercent * me._scrollarea_2f.ggAvailableHeight;
					me._scrollarea_2f.ggScrollPosY = Math.min(me._scrollarea_2f.ggScrollPosY, me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
					me._scrollarea_2f__vertScrollFg.style.top = me._scrollarea_2f.ggScrollPosY + 'px';
					if (me._scrollarea_2f.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_2f.ggScrollPosY / (me._scrollarea_2f__vertScrollBg.offsetHeight - me._scrollarea_2f__vertScrollFg.offsetHeight);
						me._scrollarea_2f__content.style.top = -(Math.round((me._scrollarea_2f.ggContentHeight * (1.0 - me._scrollarea_2f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_2f.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_2f.ggAvailableWidth = me._scrollarea_2f.clientWidth;
					me._scrollarea_2f.ggScrollPosY = 0;
					me._scrollarea_2f.ggScrollPosYPercent = 0.0;
					me._scrollarea_2f__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_2f__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_2f.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_2f.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_2f);
					me._scrollarea_2f.ggUpdatePosition();
				}
			}
		}
		el=me._room_panel_2f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._room_panel_2f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._room_panel_2f__img=document.createElement('img');
		els.className='ggskin ggskin_room_panel_2f';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlAAAAK8CAYAAAAgZIG8AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB/ySURBVHgB7d1Pz1xXmSDw8vWNnSiJsNTAQCYSdiLSbNJKS4BG6lGYblasmt6B2DSfoGdWLNPeIFhN+hPADg2bHjYgNs0fkVUidcSKICCWAG9CByMLGUhc7joVn+vz795z6nW61eDfT3Kq6t63bt2qt67z+DnPec653aCvfOUrlx5++OFPnz9//hN37tx57ty5c5cPmy8d7i8/E+4ftu9OlR4jiMeI20ePufXz5b70XFv71o4zqvws1h73PrO1/fG5W89fe89n/T21zmvks2r9TOsc1s6r97vrHbc837O+963XHdk/euz4OBj9jHrPW/u59GdPPf/09z/6nN'+
			'65xOOm213/rv/0+a5/1//WcU79Dh3cODy+drh9dZ7n7968efMbn//852/sBnTP7Gtf+9rlwwv9w+HP3x9e5FI8idabbv2ldBat45/63LXbd0s85tpxy79c1j6v8nij1p7fer9nee/lc87yOfY+o7XXjc/tndPo65/ymvf7PRn5Xfee03v8n2n0/bj+2+dR3m/tT483yvU//vqnvKbrP/cAX/9fPfz81c9+9rPXNl9vbUfIOD3yyCP/GIKn/X4/9EXsfWFHv9Cjx2l9KGt/ecSfL9/L1r9Y4vN753GKOyf+i+mUY6Xbg/TLPE1T9t7LL3vrAhg5z96+nvS56e+t/Atk63mlkYuld/xTnPX9tz7vtf8xnuV8W7/X8nV7z21dM73nnHX/qcdx/bv+W1z/9XNd/2e+/l/8zGc+83/WzqV5lnezTt85HORy62RWD3au/6+u'+
			'1om2viC9C6A8Zu91147filC3/jJZ+yJvHa93zq3to5/71vttfTatx1s/s6Z8n6PfjbXPduTzG3mNeMzy53vn2fsce5/P1vf91O9mvMi3vnO966X3u137PFp/ubj+Xf9rr+v6337+2vmsPc/1/1/y+r92uPnrVjaqekdf//rXn7t9+/Y/H+5eLve9/fbbv//JT37yw5///OfX33zzzZtvvPHGzR0AwB+hRx999OKTTz75Z08//fSVJ5544srFixcfD9vTgO9w/9ohLvq7z33uc6+mz80CqJB5Otx85xBxXU4PcOvWrZs/+MEP/uW11167vgMA+BP08Y9//M+fffbZjz3yyCOPF5mra7siE7UEUHdn2f1rDJ6i119//Yff+973Xvntb3/7+x0AwJ+wkJV6/vnnP/rUU0/9Rbo9BFG/+93v/jLO0pvijgsXLvxjCJ5CxB'+
			'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'+
			'DbQjAlAwUA0FEVkVsLDwBg21I8fhixU0QOADAo7VowC5wAALalJU/BJIACABiTrYUniAIAWBeH7+J9GSgAgAGhgFwGCgBgULqUSzClGwRSAAC1su2TDBQAwIA0XhJAAQB0VGvhGboDANi2uphwaycAAO9Ik05TmJIXNwIAUFNEDgBwBulyLgIoAIAB6WLCoYj8RtgY25M/+uijj+8AADi6cOHCxdiF/G7S6Uaogbp2jKTu1kIJoAAA7rl06dKfhdtkLbxr0+HBq/EHQiB1+KEndgAAHL33ve+9ErNPd/+8GtJO3ws7Yx3U+973vr/YAQBw9J73vOdKuE0CqO9OFy9e/P/nz5+/EXcc7l/8wAc+IAsFADzwPvShD/35Qw89lJU33bp16xvT1atXQ/D01XRR4aeeeupvQsHUDgDgARVioSeffPJjxfDdV1988cUbx8rx'+
			't99++5/SQvIQaX34wx/+6A4A4AH1zDPPfGye5yz7dPv27avh9nz4z0svvXTj+eefv3S4+z9ihPXoo4/+t4cffvjcr371q+s7AIAHyEc+8pGPvf/97//LNPt0586dF7/0pS/9v7B/WQvvEGGFiOpafBx+8IMf/OBHn3322b8ynAcAPAhCzHOIff5niIHC4yR4unbr1q2r8eeyFuRf+MIXLp8/f/47h6G8y+n2t9566+b169df/tnPfvbaDgDgT9AhaHri6aef/puyaDz0ffrDH/7w11/+8pevLdvKJ7/wwgvP7ff7fz7cvXz3SbvD4+O+EEj95je/ef2NN954/c033/y3w8F+vwMA+CP0+MFjjz32+KVLl/77Ybju2UMC6WK6vN3dZVuu3b59+++++MUvvpo+t7kIXshEHVJY39ndDaLWhAPHwvP4eDnw3fVishdrbB'+
			'uVLuBXnsPoWn7v9jltvfb9vtezPHftMxp5rfs53+iU38Xaz/5H/T7id7X1+4/7t86jd17p/vR+PKe1717rte/XKb+H+30d17/rP3L9u/6jP7Hrv8o8Lc/fetYhG/V/Dwf/3+mJpifc+8KO7msds/fBpF/W5c00PozRD7j1cyPPbX345S977f3E7N7I+x09163PdvRYp24f/Z21jjHyOqPnsvacd/N7GrTef3TK9zrd1jruqef7bj537bN1/dfPK7n+x8/f9e/6/698/R+8ePPmzauhZUHred0jH4Koy4eL/IXDwf9+N2DtC9f6kq3tbx1vbf+7ZevLsfaX5FnPqffc+zl27zj387vovUb6GY5se7de4yzH3DpW63hr/3M6i61jr51P3L72+iOfx+h3e+tcR95beX6u/9Oe6/o/7TXOcsytY7WO5/off2/l+f0RXv83'+
			'DjHPVw/ZtX+6evXqtc3n7QYdAqlLh4N++nD3E4cDP3e4vXx4wUvpBxa1vgznzo3/q+g/wlkusK2/UHvnf5b3GJ7TSjOvHfvOne1/Na+dw6nvZesc1o7xbv2Oz3rs8jNqXYitz3vrs117jbVtrb801o6zdh498VzPcr7pX2BneZ3e98v17/q/X67/ba7/MZ3rP2SXrh1+5tXDn+8e4pxv3G0w3vXvDLox5WmXfjEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Room_panel 2f";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 245px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_panel_2f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_panel_2f.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_2f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_2f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 35;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._cloner_2f.ggCloneOffset + me._cloner_2f.ggNumRows <= me._cloner_2f.ggNumFilterPassed) {
				me._cloner_2f.ggCloneOffset += me._cloner_2f.ggNumRows;
				me._cloner_2f.ggCloneOffsetChanged = true;
				me._cloner_2f.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._cloner_2f.ggCloneOffset > 0) {
				me._cloner_2f.ggCloneOffset -= me._cloner_2f.ggNumRows;
				me._cloner_2f.ggCloneOffset = Math.max(me._cloner_2f.ggCloneOffset, 0);
				me._cloner_2f.ggCloneOffsetChanged = true;
				me._cloner_2f.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_2f.ggUpdating == true) return;
			me._cloner_2f.ggUpdating = true;
			var el=me._cloner_2f;
			var curNumRows = 0;
			var parentHeight = me._cloner_2f.parentNode.classList.contains('ggskin_subelement') ? (me._cloner_2f.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._cloner_2f.parentNode.parentNode.ggAvailableHeight : me._cloner_2f.parentNode.parentNode.clientHeight) : me._cloner_2f.parentNode.clientHeight;
			if (parentHeight == 0) parentHeight = me._cloner_2f.parentNode.parentNode.clientHeight;
			curNumRows = Math.floor(((parentHeight - me._cloner_2f.offsetTop) * me._cloner_2f.ggNumRepeat / 100.0) / me._cloner_2f.offsetHeight);
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && (!me._cloner_2f.ggCloneOffsetChanged)) {
				me._cloner_2f.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_2f.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_2f.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_2f.getFilteredNodes(tourNodes, filter);
			me._cloner_2f.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_2f.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_2f.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_2f.ggWidth) + 'px';
				parameter.width=me._cloner_2f.ggWidth + 'px';
				parameter.height=me._cloner_2f.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_2f_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					keepCloning = false;
				}
			}
			player.setVariableValue('cloner_2f_hasDown', me._cloner_2f.ggCloneOffset > 0);
			player.setVariableValue('cloner_2f_hasUp', me._cloner_2f.ggCloneOffset + me._cloner_2f.ggNumCols < me._cloner_2f.ggNumFilterPassed);
			me._cloner_2f.ggNodeCount = me._cloner_2f.ggNumFilterPassed;
			me._cloner_2f.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_2f.parentNode && me._cloner_2f.parentNode.classList.contains('ggskin_subelement') && me._cloner_2f.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_2f.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "2F_Rooms";
		el.ggId="Cloner 2F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_2f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_2f.ggUpdatePosition=function (useTransition) {
			me._cloner_2f.ggUpdate();
		}
		me._room_panel_2f.appendChild(me._cloner_2f);
		me._scrollarea_2f__content.appendChild(me._room_panel_2f);
		me.__2f_rooms.appendChild(me._scrollarea_2f);
		me._room_name_p.appendChild(me.__2f_rooms);
		el=me.__3f_rooms=document.createElement('div');
		el.ggPermeable=false;
		el.ggId="3F_Rooms";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3f_rooms.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3f_rooms.ggUpdatePosition=function (useTransition) {
		}
		el=me._scrollarea_3f=document.createElement('div');
		els=me._scrollarea_3f__content=document.createElement('div');
		els.className='ggskin ggskin_subelement ggskin_scrollarea';
		el.ggContent=els;
		el.appendChild(els);
		el.ggHorScrollVisible = false;
		el.ggVertScrollVisible = false;
		el.ggContentLeftOffset = 0;
		el.ggContentTopOffset = 0;
		el.ggContentWidth = 0;
		el.ggContentHeight = 0;
		el.ggDragInertiaX = 0;
		el.ggDragInertiaY = 0;
		el.ggVPercentVisible = 1.0;
		el.ggHPercentVisible = 1.0;
		el.ggIsDragging = false;
		hs ='';
		hs+='height : 244px;';
		hs+='left : 0px;';
		hs+='overflow-x : visible;';
		hs+='overflow-y : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='width : 147px;';
		hs+="";
		els.setAttribute('style',hs);
		me._scrollarea_3f.ggScrollByX = function(diffX) {
			if(!me._scrollarea_3f.ggHorScrollVisible || diffX == 0 || me._scrollarea_3f.ggHPercentVisible >= 1.0) return;
			me._scrollarea_3f.ggScrollPosX = (me._scrollarea_3f__horScrollFg.offsetLeft + diffX);
			me._scrollarea_3f.ggScrollPosX = Math.max(me._scrollarea_3f.ggScrollPosX, 0);
			me._scrollarea_3f.ggScrollPosX = Math.min(me._scrollarea_3f.ggScrollPosX, me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth);
			me._scrollarea_3f__horScrollFg.style.left = me._scrollarea_3f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_3f.ggScrollPosX / (me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth);
			me._scrollarea_3f__content.style.left = -(Math.round((me._scrollarea_3f.ggContentWidth * (1.0 - me._scrollarea_3f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentLeftOffset + 'px';
			me._scrollarea_3f.ggScrollPosXPercent = (me._scrollarea_3f__horScrollFg.offsetLeft / me._scrollarea_3f__horScrollBg.offsetWidth);
		}
		me._scrollarea_3f.ggScrollByXSmooth = function(diffX) {
			if(!me._scrollarea_3f.ggHorScrollVisible || diffX == 0 || me._scrollarea_3f.ggHPercentVisible >= 1.0) return;
			var scrollPerInterval = diffX / 25;
			var scrollCurrX = 0;
			var id = setInterval(function() {
				scrollCurrX += scrollPerInterval;
				me._scrollarea_3f.ggScrollPosX += scrollPerInterval;
				if (diffX > 0 && (scrollCurrX >= diffX || me._scrollarea_3f.ggScrollPosX >= me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth)) {
					me._scrollarea_3f.ggScrollPosX = Math.min(me._scrollarea_3f.ggScrollPosX, me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth);
					clearInterval(id);
				}
				if (diffX < 0 && (scrollCurrX <= diffX || me._scrollarea_3f.ggScrollPosX <= 0)) {
					me._scrollarea_3f.ggScrollPosX = Math.max(me._scrollarea_3f.ggScrollPosX, 0);
					clearInterval(id);
				}
			me._scrollarea_3f__horScrollFg.style.left = me._scrollarea_3f.ggScrollPosX + 'px';
			let percentScrolled = me._scrollarea_3f.ggScrollPosX / (me._scrollarea_3f__horScrollBg.offsetWidth - me._scrollarea_3f__horScrollFg.offsetWidth);
			me._scrollarea_3f__content.style.left = -(Math.round((me._scrollarea_3f.ggContentWidth * (1.0 - me._scrollarea_3f.ggHPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentLeftOffset + 'px';
			me._scrollarea_3f.ggScrollPosXPercent = (me._scrollarea_3f__horScrollFg.offsetLeft / me._scrollarea_3f__horScrollBg.offsetWidth);
			}, 10);
		}
		me._scrollarea_3f.ggScrollByY = function(diffY) {
			if(!me._scrollarea_3f.ggVertScrollVisible || diffY == 0 || me._scrollarea_3f.ggVPercentVisible >= 1.0) return;
			me._scrollarea_3f.ggScrollPosY = (me._scrollarea_3f__vertScrollFg.offsetTop + diffY);
			me._scrollarea_3f.ggScrollPosY = Math.max(me._scrollarea_3f.ggScrollPosY, 0);
			me._scrollarea_3f.ggScrollPosY = Math.min(me._scrollarea_3f.ggScrollPosY, me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
			me._scrollarea_3f__vertScrollFg.style.top = me._scrollarea_3f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_3f.ggScrollPosY / (me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
			me._scrollarea_3f__content.style.top = -(Math.round((me._scrollarea_3f.ggContentHeight * (1.0 - me._scrollarea_3f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentTopOffset + 'px';
			me._scrollarea_3f.ggScrollPosYPercent = (me._scrollarea_3f__vertScrollFg.offsetTop / me._scrollarea_3f__vertScrollBg.offsetHeight);
		}
		me._scrollarea_3f.ggScrollByYSmooth = function(diffY) {
			if(!me._scrollarea_3f.ggVertScrollVisible || diffY == 0 || me._scrollarea_3f.ggVPercentVisible >= 1.0) return;
			var scrollPerInterval = diffY / 25;
			var scrollCurrY = 0;
			var id = setInterval(function() {
				scrollCurrY += scrollPerInterval;
				me._scrollarea_3f.ggScrollPosY += scrollPerInterval;
				if (diffY > 0 && (scrollCurrY >= diffY || me._scrollarea_3f.ggScrollPosY >= me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight)) {
					me._scrollarea_3f.ggScrollPosY = Math.min(me._scrollarea_3f.ggScrollPosY, me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
					clearInterval(id);
				}
				if (diffY < 0 && (scrollCurrY <= diffY || me._scrollarea_3f.ggScrollPosY <= 0)) {
					me._scrollarea_3f.ggScrollPosY = Math.max(me._scrollarea_3f.ggScrollPosY, 0);
					clearInterval(id);
				}
			me._scrollarea_3f__vertScrollFg.style.top = me._scrollarea_3f.ggScrollPosY + 'px';
			let percentScrolled = me._scrollarea_3f.ggScrollPosY / (me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
			me._scrollarea_3f__content.style.top = -(Math.round((me._scrollarea_3f.ggContentHeight * (1.0 - me._scrollarea_3f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentTopOffset + 'px';
			me._scrollarea_3f.ggScrollPosYPercent = (me._scrollarea_3f__vertScrollFg.offsetTop / me._scrollarea_3f__vertScrollBg.offsetHeight);
			}, 10);
		}
		me._scrollarea_3f.ggScrollIntoView = function(posX, posY, width, height) {
			if (me._scrollarea_3f.ggHorScrollVisible) {
				if (posX < 0) {
					var diffX = Math.floor(posX * me._scrollarea_3f.ggHPercentVisible);
					me._scrollarea_3f.ggScrollByXSmooth(diffX);
				} else if (posX + width > me._scrollarea_3f.clientWidth - (me._scrollarea_3f.ggVertScrollVisible ? 3 : 0)) {
					var diffX = Math.ceil(((posX + width) - (me._scrollarea_3f.clientWidth - (me._scrollarea_3f.ggVertScrollVisible ? 3 : 0))) * me._scrollarea_3f.ggHPercentVisible);
					me._scrollarea_3f.ggScrollByXSmooth(diffX);
				}
			}
			if (me._scrollarea_3f.ggVertScrollVisible) {
				if (posY < 0) {
					var diffY = Math.floor(posY * me._scrollarea_3f.ggVPercentVisible);
					me._scrollarea_3f.ggScrollByYSmooth(diffY);
				} else if (posY + height > me._scrollarea_3f.clientHeight - (me._scrollarea_3f.ggHorScrollVisible ? 3 : 0)) {
					var diffY = Math.ceil(((posY + height) - (me._scrollarea_3f.clientHeight - (me._scrollarea_3f.ggHorScrollVisible ? 3 : 0))) * me._scrollarea_3f.ggVPercentVisible);
					me._scrollarea_3f.ggScrollByYSmooth(diffY);
				}
			}
		}
		me._scrollarea_3f__content.mousetouchend = e => {
			let inertiaInterval = setInterval(function() {
				me._scrollarea_3f.ggDragInertiaX *= 0.96;
				me._scrollarea_3f.ggDragInertiaY *= 0.96;
				me._scrollarea_3f.ggScrollByX(me._scrollarea_3f.ggDragInertiaX);
				me._scrollarea_3f.ggScrollByY(me._scrollarea_3f.ggDragInertiaY);
				if (Math.abs(me._scrollarea_3f.ggDragInertiaX) < 1.0 && Math.abs(me._scrollarea_3f.ggDragInertiaY) < 1.0) {
					clearInterval(inertiaInterval);
				}
				}, 10);
			me._scrollarea_3f__content.onmouseup = null;
			me._scrollarea_3f__content.onmousemove = null;
			me._scrollarea_3f__content.ontouchend = null;
			me._scrollarea_3f__content.ontouchmove = null;
			me._scrollarea_3f__content.onpointerup = null;
			me._scrollarea_3f__content.onpointermove = null;
			setTimeout(function() { me._scrollarea_3f.ggIsDragging = false; }, 100);
		}
		me._scrollarea_3f__content.mousetouchmove = e => {
			e = e || window.event;
			e.preventDefault();
			var t = e.touches;
			var eventX = t ? t[0].clientX : e.clientX;
			var eventY = t ? t[0].clientY : e.clientY;
			if (Math.abs(eventX - me._scrollarea_3f.ggDragStartX) > 10 || Math.abs(eventY - me._scrollarea_3f.ggDragStartY) > 10) me._scrollarea_3f.ggIsDragging = true;
			var diffX = (eventX - me._scrollarea_3f.ggDragLastX) * me._scrollarea_3f.ggHPercentVisible;
			var diffY = (eventY - me._scrollarea_3f.ggDragLastY) * me._scrollarea_3f.ggVPercentVisible;
			me._scrollarea_3f.ggDragInertiaX = -diffX;
			me._scrollarea_3f.ggDragInertiaY = -diffY;
			me._scrollarea_3f.ggDragLastX = eventX;
			me._scrollarea_3f.ggDragLastY = eventY;
			me._scrollarea_3f.ggScrollByX(-diffX);
			me._scrollarea_3f.ggScrollByY(-diffY);
		}
		me._scrollarea_3f__content.mousetouchstart = e => {
			e = e || window.event;
			var t = e.touches;
			me._scrollarea_3f.ggDragLastX = me._scrollarea_3f.ggDragStartX = t ? t[0].clientX : e.clientX;
			me._scrollarea_3f.ggDragLastY = me._scrollarea_3f.ggDragStartY = t ? t[0].clientY : e.clientY;
			me._scrollarea_3f__content.onmouseup = me._scrollarea_3f__content.mousetouchend;
			me._scrollarea_3f__content.ontouchend = me._scrollarea_3f__content.mousetouchend;
			me._scrollarea_3f__content.onmousemove = me._scrollarea_3f__content.mousetouchmove;
			me._scrollarea_3f__content.ontouchmove = me._scrollarea_3f__content.mousetouchmove;
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				me._scrollarea_3f__content.onpointerup = me._scrollarea_3f__content.ontouchend;
				me._scrollarea_3f__content.onpointermove = me._scrollarea_3f__content.ontouchmove;
			}
		}
		els.onmousedown = me._scrollarea_3f__content.mousetouchstart;
		els.ontouchstart = me._scrollarea_3f__content.mousetouchstart;
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			els.onpointerdown = me._scrollarea_3f__content.mousetouchstart;
		}
		elVertScrollBg = me._scrollarea_3f__vertScrollBg = document.createElement('div');
		el.appendChild(elVertScrollBg);
		elVertScrollBg.setAttribute('style', 'position: absolute; right: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(128,128,128,0); pointer-events: auto;');
		elVertScrollBg.className='ggskin ggskin_scrollarea_vscrollbg';
		elVertScrollFg = me._scrollarea_3f__vertScrollFg = document.createElement('div');
		elVertScrollBg.appendChild(elVertScrollFg);
		elVertScrollFg.setAttribute('style', 'position: absolute; left: 0px; top: 0px; visibility: hidden; width: 3px; height: 175px; background-color: rgba(255,255,255,0.588235); pointer-events: auto;');
		elVertScrollFg.className='ggskin ggskin_scrollarea_vscrollfg';
		me._scrollarea_3f.ggScrollPosY = 0;
		me._scrollarea_3f.ggScrollPosYPercent = 0.0;
		elVertScrollFg.onmousedown = function(e) {
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) return;
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			me._scrollarea_3f.ggDragLastY = e.clientY;
			document.onmouseup = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_3f.ggDragInertiaY *= 0.96;
					me._scrollarea_3f.ggScrollByY(me._scrollarea_3f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_3f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.onmouseup = null;
				document.onmousemove = null;
			}
			document.onmousemove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var diffY = e.clientY - me._scrollarea_3f.ggDragLastY;
				me._scrollarea_3f.ggDragInertiaY = diffY;
				me._scrollarea_3f.ggDragLastY = e.clientY;
				me._scrollarea_3f.ggScrollByY(diffY);
			}
		}
		elVertScrollFg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			me._scrollarea_3f.ggDragLastY = t ? t[0].clientY : e.clientY;
			document.ontouchend = function() {
				let inertiaInterval = setInterval(function() {
					me._scrollarea_3f.ggDragInertiaY *= 0.96;
					me._scrollarea_3f.ggScrollByY(me._scrollarea_3f.ggDragInertiaY);
					if (Math.abs(me._scrollarea_3f.ggDragInertiaY) < 1.0) {
						clearInterval(inertiaInterval);
					}
					}, 10);
				document.ontouchend = null;
				document.ontouchmove = null;
				document.onpointerup = null;
				document.onpointermove = null;
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointerup = document.ontouchend;
			}
			document.ontouchmove = function(e) {
				e = e || window.event;
				e.preventDefault();
				var t = e.touches;
				var diffY = (t ? t[0].clientY : e.clientY) - me._scrollarea_3f.ggDragLastY;
				me._scrollarea_3f.ggDragInertiaY = diffY;
				me._scrollarea_3f.ggDragLastY = t ? t[0].clientY : e.clientY;
				me._scrollarea_3f.ggScrollByY(diffY);
			}
			if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
				document.onpointermove = document.ontouchmove;
			}
		}
		if (player.getOS() == 1 && navigator.maxTouchPoints > 0) {
			elVertScrollFg.onpointerdown = elVertScrollFg.ontouchstart;
		}
		elVertScrollBg.onmousedown = function(e) {
			e = e || window.event;
			e.preventDefault();
			var diffY = me._scrollarea_3f.ggScrollHeight;
			if (e.offsetY < me._scrollarea_3f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_3f.ggScrollByYSmooth(diffY);
		}
		elVertScrollBg.ontouchstart = function(e) {
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var t = e.touches;
			var rect = me._scrollarea_3f__vertScrollBg.getBoundingClientRect();
			var diffY = me._scrollarea_3f.ggScrollHeight;
			if ((t[0].clientY - rect.top) < me._scrollarea_3f.ggScrollPosY) {
				diffY = diffY * -1;
			}
			me._scrollarea_3f.ggScrollByYSmooth(diffY);
		}
		el.addEventListener('wheel', function(e) {
			e.preventDefault();
			var wheelDelta = Math.sign(e.deltaY);
			me._scrollarea_3f.ggScrollByYSmooth(30 * me._scrollarea_3f.ggVPercentVisible * wheelDelta);
		});
		elCornerBg = me._scrollarea_3f__cornerBg = document.createElement('div');
		el.appendChild(elCornerBg);
		elCornerBg.setAttribute('style', 'position: absolute; right: 0px; bottom: 0px; visibility: hidden; width: 3px; height: 3px; background-color: rgba(255,255,255,0);');
		elCornerBg.className='ggskin ggskin_scrollarea_scrollcorner';
		el.ggId="Scrollarea 3F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_scrollarea ";
		el.ggType='scrollarea';
		hs ='';
		hs+='z-index: -5;';
		hs+='background : rgba(255,255,255,0);';
		hs+='border : 0px solid #000000;';
		hs+='height : 175px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._scrollarea_3f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._scrollarea_3f.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._scrollarea_3f.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._scrollarea_3f.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._scrollarea_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_3f.ggCurrentLogicStatePosition == 0) {
					me._scrollarea_3f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_3f.style.top='40px';
				}
				else if (me._scrollarea_3f.ggCurrentLogicStatePosition == 1) {
					me._scrollarea_3f.style.left = 'calc(50% - (148px / 2))';
					me._scrollarea_3f.style.top='0px';
				}
				else {
					me._scrollarea_3f.style.left='calc(50% - ((148px + 0px) / 2) + 0px)';
					me._scrollarea_3f.style.top='0px';
				}
			}
		}
		me._scrollarea_3f.logicBlock_position();
		me._scrollarea_3f.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._scrollarea_3f.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._scrollarea_3f.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._scrollarea_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_3f.ggCurrentLogicStateVisible == 0) {
					me._scrollarea_3f.style.visibility=(Number(me._scrollarea_3f.style.opacity)>0||!me._scrollarea_3f.style.opacity)?'inherit':'hidden';
					me._scrollarea_3f.ggVisible=true;
				}
				else if (me._scrollarea_3f.ggCurrentLogicStateVisible == 1) {
					me._scrollarea_3f.style.visibility="hidden";
					me._scrollarea_3f.ggVisible=false;
				}
				else {
					me._scrollarea_3f.style.visibility="hidden";
					me._scrollarea_3f.ggVisible=false;
				}
			}
		}
		me._scrollarea_3f.logicBlock_visible();
		me._scrollarea_3f.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._scrollarea_3f.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._scrollarea_3f.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._scrollarea_3f.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._scrollarea_3f.ggCurrentLogicStateAlpha == 0) {
					me._scrollarea_3f.style.visibility=me._scrollarea_3f.ggVisible?'inherit':'hidden';
					me._scrollarea_3f.style.opacity=1;
				}
				else if (me._scrollarea_3f.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._scrollarea_3f.style.opacity == 0.0) { me._scrollarea_3f.style.visibility="hidden"; } }, 505);
					me._scrollarea_3f.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._scrollarea_3f.style.opacity == 0.0) { me._scrollarea_3f.style.visibility="hidden"; } }, 505);
					me._scrollarea_3f.style.opacity=0;
				}
			}
		}
		me._scrollarea_3f.logicBlock_alpha();
		me._scrollarea_3f.ggUpdatePosition=function (useTransition) {
			{
				var horScrollWasVisible = this.ggHorScrollVisible;
				var vertScrollWasVisible = this.ggVertScrollVisible;
				this.ggContent.style.left = '0px';
				this.ggContent.style.top = '0px';
				this.ggContentLeftOffset = 0;
				this.ggContentTopOffset = 0;
				var offsetWidthWithScale = this.getBoundingClientRect().width;
				var offsetHeightWithScale = this.getBoundingClientRect().height;
				var domRectContent = this.ggContent.getBoundingClientRect();
				var minX = 0;
				var minY = 0;
				var maxX = 0;
				var maxY = 0;
				var stack=[];
				stack.push(this.ggContent);
				while(stack.length>0) {
					var e=stack.pop();
					if (e!=this.ggContent && e.getBoundingClientRect && e.style['display']!='none' && (e.offsetWidth != 0 || e.offsetHeight != 0)) {
						var domRectChild = e.getBoundingClientRect();
						var diffX = domRectChild.left - domRectContent.left;
						minX = Math.min(minX, diffX);
						maxX = Math.max(maxX, diffX + domRectChild.width);
						var diffY = domRectChild.top - domRectContent.top;
						minY = Math.min(minY, diffY);
						maxY = Math.max(maxY, diffY + domRectChild.height);
					}
					if (e.hasChildNodes() && e.style['display']!='none' && e.style['overflow']!='hidden') {
						for(var i=0;i<e.childNodes.length;i++) {
							stack.push(e.childNodes[i]);
						}
					}
				}
				if (minX < 0) this.ggContentLeftOffset = -minX;
				if (minY < 0) this.ggContentTopOffset = -minY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.top = this.ggContentTopOffset + 'px';
				var contentWidth = maxX - minX;
				this.ggContent.style.width = contentWidth + 'px';
				var contentHeight = maxY - minY;
				this.ggContent.style.height = contentHeight + 'px';
			var scaleX = this.getBoundingClientRect().width / this.offsetWidth;
				this.ggContentWidth = contentWidth / scaleX;
			var scaleY = this.getBoundingClientRect().height / this.offsetHeight;
				this.ggContentHeight = contentHeight / scaleY;
				this.ggContent.style.left = this.ggContentLeftOffset + 'px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = -(Math.round(me._scrollarea_3f.ggScrollPosY / me._scrollarea_3f.ggVPercentVisible)) + this.ggContentTopOffset + 'px';
				this.ggContent.style.marginTop = '0px';
				if ((me._scrollarea_3f.ggHorScrollVisible && contentHeight > this.clientHeight - 3) || (!me._scrollarea_3f.ggHorScrollVisible && contentHeight > this.clientHeight)) {
					me._scrollarea_3f__vertScrollBg.style.visibility = 'inherit';
					me._scrollarea_3f__vertScrollFg.style.visibility = 'inherit';
					me._scrollarea_3f.ggVertScrollVisible = true;
				} else {
					me._scrollarea_3f__vertScrollBg.style.visibility = 'hidden';
					me._scrollarea_3f__vertScrollFg.style.visibility = 'hidden';
					me._scrollarea_3f.ggVertScrollVisible = false;
				}
				if(me._scrollarea_3f.ggVertScrollVisible) {
					me._scrollarea_3f.ggAvailableWidth = me._scrollarea_3f.clientWidth - 3;
					if (me._scrollarea_3f.ggHorScrollVisible) {
						me._scrollarea_3f.ggAvailableHeight = me._scrollarea_3f.clientHeight - 3;
						me._scrollarea_3f.ggAvailableHeightWithScale = me._scrollarea_3f.getBoundingClientRect().height - me._scrollarea_3f__vertScrollBg.getBoundingClientRect().width;
						me._scrollarea_3f__cornerBg.style.visibility = 'inherit';
					} else {
						me._scrollarea_3f.ggAvailableHeight = me._scrollarea_3f.clientHeight;
						me._scrollarea_3f.ggAvailableHeightWithScale = me._scrollarea_3f.getBoundingClientRect().height;
						me._scrollarea_3f__cornerBg.style.visibility = 'hidden';
					}
					me._scrollarea_3f__vertScrollBg.style.height = me._scrollarea_3f.ggAvailableHeight + 'px';
					me._scrollarea_3f.ggVPercentVisible = contentHeight != 0 ? me._scrollarea_3f.ggAvailableHeightWithScale / contentHeight : 0.0;
					if (me._scrollarea_3f.ggVPercentVisible > 1.0) me._scrollarea_3f.ggVPercentVisible = 1.0;
					me._scrollarea_3f.ggScrollHeight =  Math.round(me._scrollarea_3f__vertScrollBg.offsetHeight * me._scrollarea_3f.ggVPercentVisible);
					me._scrollarea_3f__vertScrollFg.style.height = me._scrollarea_3f.ggScrollHeight + 'px';
					me._scrollarea_3f.ggScrollPosY = me._scrollarea_3f.ggScrollPosYPercent * me._scrollarea_3f.ggAvailableHeight;
					me._scrollarea_3f.ggScrollPosY = Math.min(me._scrollarea_3f.ggScrollPosY, me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
					me._scrollarea_3f__vertScrollFg.style.top = me._scrollarea_3f.ggScrollPosY + 'px';
					if (me._scrollarea_3f.ggVPercentVisible < 1.0) {
						let percentScrolled = me._scrollarea_3f.ggScrollPosY / (me._scrollarea_3f__vertScrollBg.offsetHeight - me._scrollarea_3f__vertScrollFg.offsetHeight);
						me._scrollarea_3f__content.style.top = -(Math.round((me._scrollarea_3f.ggContentHeight * (1.0 - me._scrollarea_3f.ggVPercentVisible)) * percentScrolled)) + me._scrollarea_3f.ggContentTopOffset + 'px';
					}
				} else {
					me._scrollarea_3f.ggAvailableWidth = me._scrollarea_3f.clientWidth;
					me._scrollarea_3f.ggScrollPosY = 0;
					me._scrollarea_3f.ggScrollPosYPercent = 0.0;
					me._scrollarea_3f__content.style.top = this.ggContentTopOffset + 'px';
					me._scrollarea_3f__cornerBg.style.visibility = 'hidden';
				}
				if(horScrollWasVisible != me._scrollarea_3f.ggHorScrollVisible || vertScrollWasVisible != me._scrollarea_3f.ggVertScrollVisible) {
					skin.updateSize(me._scrollarea_3f);
					me._scrollarea_3f.ggUpdatePosition();
				}
			}
		}
		el=me._room_panel_3f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._room_panel_3f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me._room_panel_3f__img=document.createElement('img');
		els.className='ggskin ggskin_room_panel_3f';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlAAAAK8CAYAAAAgZIG8AAAACXBIWXMAACxLAAAsSwGlPZapAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAB/ySURBVHgB7d1Pz1xXmSDw8vWNnSiJsNTAQCYSdiLSbNJKS4BG6lGYblasmt6B2DSfoGdWLNPeIFhN+hPADg2bHjYgNs0fkVUidcSKICCWAG9CByMLGUhc7joVn+vz795z6nW61eDfT3Kq6t63bt2qt67z+DnPec653aCvfOUrlx5++OFPnz9//hN37tx57ty5c5cPmy8d7i8/E+4ftu9OlR4jiMeI20ePufXz5b70XFv71o4zqvws1h73PrO1/fG5W89fe89n/T21zmvks2r9TOsc1s6r97vrHbc837O+963XHdk/euz4OBj9jHrPW/u59GdPPf/09z/6nN'+
			'65xOOm213/rv/0+a5/1//WcU79Dh3cODy+drh9dZ7n7968efMbn//852/sBnTP7Gtf+9rlwwv9w+HP3x9e5FI8idabbv2ldBat45/63LXbd0s85tpxy79c1j6v8nij1p7fer9nee/lc87yOfY+o7XXjc/tndPo65/ymvf7PRn5Xfee03v8n2n0/bj+2+dR3m/tT483yvU//vqnvKbrP/cAX/9fPfz81c9+9rPXNl9vbUfIOD3yyCP/GIKn/X4/9EXsfWFHv9Cjx2l9KGt/ecSfL9/L1r9Y4vN753GKOyf+i+mUY6Xbg/TLPE1T9t7LL3vrAhg5z96+nvS56e+t/Atk63mlkYuld/xTnPX9tz7vtf8xnuV8W7/X8nV7z21dM73nnHX/qcdx/bv+W1z/9XNd/2e+/l/8zGc+83/WzqV5lnezTt85HORy62RWD3au/6+u'+
			'1om2viC9C6A8Zu91147filC3/jJZ+yJvHa93zq3to5/71vttfTatx1s/s6Z8n6PfjbXPduTzG3mNeMzy53vn2fsce5/P1vf91O9mvMi3vnO966X3u137PFp/ubj+Xf9rr+v6337+2vmsPc/1/1/y+r92uPnrVjaqekdf//rXn7t9+/Y/H+5eLve9/fbbv//JT37yw5///OfX33zzzZtvvPHGzR0AwB+hRx999OKTTz75Z08//fSVJ5544srFixcfD9vTgO9w/9ohLvq7z33uc6+mz80CqJB5Otx85xBxXU4PcOvWrZs/+MEP/uW11167vgMA+BP08Y9//M+fffbZjz3yyCOPF5mra7siE7UEUHdn2f1rDJ6i119//Yff+973Xvntb3/7+x0AwJ+wkJV6/vnnP/rUU0/9Rbo9BFG/+93v/jLO0pvijgsXLvxjCJ5CxB'+
			'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'+
			'DbQjAlAwUA0FEVkVsLDwBg21I8fhixU0QOADAo7VowC5wAALalJU/BJIACABiTrYUniAIAWBeH7+J9GSgAgAGhgFwGCgBgULqUSzClGwRSAAC1su2TDBQAwIA0XhJAAQB0VGvhGboDANi2uphwaycAAO9Ik05TmJIXNwIAUFNEDgBwBulyLgIoAIAB6WLCoYj8RtgY25M/+uijj+8AADi6cOHCxdiF/G7S6Uaogbp2jKTu1kIJoAAA7rl06dKfhdtkLbxr0+HBq/EHQiB1+KEndgAAHL33ve+9ErNPd/+8GtJO3ws7Yx3U+973vr/YAQBw9J73vOdKuE0CqO9OFy9e/P/nz5+/EXcc7l/8wAc+IAsFADzwPvShD/35Qw89lJU33bp16xvT1atXQ/D01XRR4aeeeupvQsHUDgDgARVioSeffPJjxfDdV1988cUbx8rx'+
			't99++5/SQvIQaX34wx/+6A4A4AH1zDPPfGye5yz7dPv27avh9nz4z0svvXTj+eefv3S4+z9ihPXoo4/+t4cffvjcr371q+s7AIAHyEc+8pGPvf/97//LNPt0586dF7/0pS/9v7B/WQvvEGGFiOpafBx+8IMf/OBHn3322b8ynAcAPAhCzHOIff5niIHC4yR4unbr1q2r8eeyFuRf+MIXLp8/f/47h6G8y+n2t9566+b169df/tnPfvbaDgDgT9AhaHri6aef/puyaDz0ffrDH/7w11/+8pevLdvKJ7/wwgvP7ff7fz7cvXz3SbvD4+O+EEj95je/ef2NN954/c033/y3w8F+vwMA+CP0+MFjjz32+KVLl/77Ybju2UMC6WK6vN3dZVuu3b59+++++MUvvpo+t7kIXshEHVJY39ndDaLWhAPHwvP4eDnw3fVishdrbB'+
			'uVLuBXnsPoWn7v9jltvfb9vtezPHftMxp5rfs53+iU38Xaz/5H/T7id7X1+4/7t86jd17p/vR+PKe1717rte/XKb+H+30d17/rP3L9u/6jP7Hrv8o8Lc/fetYhG/V/Dwf/3+mJpifc+8KO7msds/fBpF/W5c00PozRD7j1cyPPbX345S977f3E7N7I+x09163PdvRYp24f/Z21jjHyOqPnsvacd/N7GrTef3TK9zrd1jruqef7bj537bN1/dfPK7n+x8/f9e/6/698/R+8ePPmzauhZUHred0jH4Koy4eL/IXDwf9+N2DtC9f6kq3tbx1vbf+7ZevLsfaX5FnPqffc+zl27zj387vovUb6GY5se7de4yzH3DpW63hr/3M6i61jr51P3L72+iOfx+h3e+tcR95beX6u/9Oe6/o/7TXOcsytY7WO5/off2/l+f0RXv83'+
			'DjHPVw/ZtX+6evXqtc3n7QYdAqlLh4N++nD3E4cDP3e4vXx4wUvpBxa1vgznzo3/q+g/wlkusK2/UHvnf5b3GJ7TSjOvHfvOne1/Na+dw6nvZesc1o7xbv2Oz3rs8jNqXYitz3vrs117jbVtrb801o6zdh498VzPcr7pX2BneZ3e98v17/q/X67/ba7/MZ3rP2SXrh1+5tXDn+8e4pxv3G0w3vXvDLox5WmXfjEAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Room_panel 3f";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -5;';
		hs+='height : 245px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._room_panel_3f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_panel_3f.ggUpdatePosition=function (useTransition) {
		}
		el=me._cloner_3f=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me._cloner_3f;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		el.ggNumRepeat = 100;
		el.ggNumRows = 0;
		el.ggNumCols = 0;
		el.ggCloneOffset = 0;
		el.ggCloneOffsetChanged = false;
		el.ggWidth = 148;
		el.ggHeight = 35;
		el.ggUpdating = false;
		el.ggFilter = [];
		el.ggFilterHsSkinId = '';
		el.ggInstances = [];
		el.ggNumFilterPassed = 0;
		el.ggGoUp = function() {
			if (me._cloner_3f.ggCloneOffset + me._cloner_3f.ggNumRows <= me._cloner_3f.ggNumFilterPassed) {
				me._cloner_3f.ggCloneOffset += me._cloner_3f.ggNumRows;
				me._cloner_3f.ggCloneOffsetChanged = true;
				me._cloner_3f.ggUpdate();
			}
		}
		el.ggGoDown = function() {
			if (me._cloner_3f.ggCloneOffset > 0) {
				me._cloner_3f.ggCloneOffset -= me._cloner_3f.ggNumRows;
				me._cloner_3f.ggCloneOffset = Math.max(me._cloner_3f.ggCloneOffset, 0);
				me._cloner_3f.ggCloneOffsetChanged = true;
				me._cloner_3f.ggUpdate();
			}
		}
		el.getFilteredNodes = function(tourNodes, filter) {
			var filteredNodes = [];
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = true;
				var nodeData = player.getNodeUserdata(nodeId);
				if (filter.length > 0) {
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) == -1) passed = false;
					}
				}
				if (passed) {
					filteredNodes.push(nodeId);
				}
			}
			return filteredNodes;
		}
		el.ggUpdate = function(filter) {
			if(me._cloner_3f.ggUpdating == true) return;
			me._cloner_3f.ggUpdating = true;
			var el=me._cloner_3f;
			var curNumRows = 0;
			var parentHeight = me._cloner_3f.parentNode.classList.contains('ggskin_subelement') ? (me._cloner_3f.parentNode.parentNode.classList.contains('ggskin_scrollarea') ? me._cloner_3f.parentNode.parentNode.ggAvailableHeight : me._cloner_3f.parentNode.parentNode.clientHeight) : me._cloner_3f.parentNode.clientHeight;
			if (parentHeight == 0) parentHeight = me._cloner_3f.parentNode.parentNode.clientHeight;
			curNumRows = Math.floor(((parentHeight - me._cloner_3f.offsetTop) * me._cloner_3f.ggNumRepeat / 100.0) / me._cloner_3f.offsetHeight);
			if (curNumRows < 1) curNumRows = 1;
			if (typeof filter=='object') {
				el.ggFilter = filter;
			} else {
				filter = el.ggFilter;
			};
			if (me.ggTag) filter.push(me.ggTag);
			filter=filter.sort();
			if ((el.ggNumRows == curNumRows) && (el.ggInstances.length > 0) && (filter.length === el.ggCurrentFilter.length) && (filter.every(function(value, index) { return value === el.ggCurrentFilter[index] }) ) && (!me._cloner_3f.ggCloneOffsetChanged)) {
				me._cloner_3f.ggUpdating = false;
				return;
			} else {
				el.ggNumCols = 1;
				el.ggNumRows = curNumRows;
			var centerOffsetHor = 0;
			var centerOffsetVert = 0;
				me._cloner_3f.ggCloneOffsetChanged = false;
			}
			el.ggCurrentFilter = filter;
			el.ggInstances = [];
			if (el.hasChildNodes() == true) {
				while (el.firstChild) {
					el.removeChild(el.firstChild);
				}
			}
			var tourNodes = player.getNodeIds();
			if (tourNodes.length == 0) {
				me._cloner_3f.ggUpdating = false;
				return;
			}
			var row = 0;
			var column = 0;
			var currentIndex = 0;
			var keepCloning = true;
			tourNodes = me._cloner_3f.getFilteredNodes(tourNodes, filter);
			me._cloner_3f.ggNumFilterPassed = tourNodes.length;
			for (var i = 0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var nodeData = player.getNodeUserdata(nodeId);
				if (!keepCloning || i < me._cloner_3f.ggCloneOffset) continue;
				var parameter={};
				parameter.top = centerOffsetVert + (row * me._cloner_3f.ggHeight) + 'px';
				parameter.left = centerOffsetHor + (column * me._cloner_3f.ggWidth) + 'px';
				parameter.width=me._cloner_3f.ggWidth + 'px';
				parameter.height=me._cloner_3f.ggHeight + 'px';
				parameter.index=currentIndex;
				parameter.title=nodeData['title'];
				var inst = new SkinCloner_cloner_3f_Class(nodeId, me, el, parameter);
				currentIndex++;
				el.ggInstances.push(inst);
				el.appendChild(inst.__div);
				inst.__div.ggObj=inst;
				skin.updateSize(inst.__div);
				row++;
				if (row >= el.ggNumRows) {
					keepCloning = false;
				}
			}
			player.setVariableValue('cloner_3f_hasDown', me._cloner_3f.ggCloneOffset > 0);
			player.setVariableValue('cloner_3f_hasUp', me._cloner_3f.ggCloneOffset + me._cloner_3f.ggNumCols < me._cloner_3f.ggNumFilterPassed);
			me._cloner_3f.ggNodeCount = me._cloner_3f.ggNumFilterPassed;
			me._cloner_3f.ggUpdating = false;
			player.triggerEvent('clonerchanged');
			if (me._cloner_3f.parentNode && me._cloner_3f.parentNode.classList.contains('ggskin_subelement') && me._cloner_3f.parentNode.parentNode.classList.contains('ggskin_scrollarea')) me._cloner_3f.parentNode.parentNode.ggUpdatePosition();
		}
		el.ggFilter = [];
		el.ggFilter[0] = "3F_Rooms";
		el.ggId="Cloner 3F";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_cloner ";
		el.ggType='cloner';
		hs ='';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._cloner_3f.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._cloner_3f.ggUpdatePosition=function (useTransition) {
			me._cloner_3f.ggUpdate();
		}
		me._room_panel_3f.appendChild(me._cloner_3f);
		me._scrollarea_3f__content.appendChild(me._room_panel_3f);
		me.__3f_rooms.appendChild(me._scrollarea_3f);
		me._room_name_p.appendChild(me.__3f_rooms);
		el=me._room_names=document.createElement('div');
		els=me._room_names__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Room_Names";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._room_names.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._room_names.ggUpdateText();
		player.addListener('changenode', function() {
			me._room_names.ggUpdateText();
		});
		el.appendChild(els);
		me._room_names.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._room_names.ggUpdatePosition=function (useTransition) {
		}
		me._room_name_p.appendChild(me._room_names);
		el=me._rooms_h=document.createElement('div');
		els=me._rooms_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Rooms_H";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._rooms_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Rooms", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._rooms_h.ggUpdateText();
		el.appendChild(els);
		me._rooms_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._rooms_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Room_visibility_1F') == true)) || 
				((player.getVariableValue('Room_visibility_2F') == true)) || 
				((player.getVariableValue('Room_visibility_3F') == true)) || 
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Room_visibility_1F') == false)) || 
				((player.getVariableValue('Room_visibility_2F') == false)) || 
				((player.getVariableValue('Room_visibility_3F') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rooms_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rooms_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rooms_h.style.transition='opacity 500ms ease 0ms';
				if (me._rooms_h.ggCurrentLogicStateVisible == 0) {
					me._rooms_h.style.visibility="hidden";
					me._rooms_h.ggVisible=false;
				}
				else if (me._rooms_h.ggCurrentLogicStateVisible == 1) {
					me._rooms_h.style.visibility=(Number(me._rooms_h.style.opacity)>0||!me._rooms_h.style.opacity)?'inherit':'hidden';
					me._rooms_h.ggVisible=true;
				}
				else {
					me._rooms_h.style.visibility=(Number(me._rooms_h.style.opacity)>0||!me._rooms_h.style.opacity)?'inherit':'hidden';
					me._rooms_h.ggVisible=true;
				}
			}
		}
		me._rooms_h.logicBlock_visible();
		me._rooms_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['room_name_p'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.elementMouseDown['room_name_p'] == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rooms_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rooms_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rooms_h.style.transition='opacity 500ms ease 0ms';
				if (me._rooms_h.ggCurrentLogicStateAlpha == 0) {
					me._rooms_h.style.visibility=me._rooms_h.ggVisible?'inherit':'hidden';
					me._rooms_h.style.opacity=1;
				}
				else if (me._rooms_h.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._rooms_h.style.opacity == 0.0) { me._rooms_h.style.visibility="hidden"; } }, 505);
					me._rooms_h.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._rooms_h.style.opacity == 0.0) { me._rooms_h.style.visibility="hidden"; } }, 505);
					me._rooms_h.style.opacity=0;
				}
			}
		}
		me._rooms_h.logicBlock_alpha();
		me._rooms_h.ggUpdatePosition=function (useTransition) {
		}
		me._room_name_p.appendChild(me._rooms_h);
		me._right_top_corner_panel.appendChild(me._room_name_p);
		el=me._floorplan_b=document.createElement('div');
		els=me._floorplan_b__img=document.createElement('img');
		els.className='ggskin ggskin_floorplan_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FloorPlan_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_b.onclick=function (e) {
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility='hidden';
			me._right_top_corner_panel.ggVisible=false;
			me._floorplan.style.transition='none';
			me._floorplan.style.visibility=(Number(me._floorplan.style.opacity)>0||!me._floorplan.style.opacity)?'inherit':'hidden';
			me._floorplan.ggVisible=true;
			if (player.transitionsDisabled) {
				me._floorplan.style.transition='none';
			} else {
				me._floorplan.style.transition='all 500ms ease-out 0ms';
			}
			me._floorplan.style.opacity='1';
			me._floorplan.style.visibility=me._floorplan.ggVisible?'inherit':'hidden';
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility='hidden';
			me._right_bottom_corner_panel.ggVisible=false;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility='hidden';
			me._left_bottom_corner_panel.ggVisible=false;
			player.setVariableValue('Map_Pin_Normal_E', true);
			player.setVariableValue('Map_Pin_active_E', true);
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1))
				)
			) {
				me._floorplans.ggChangeMap("FirstFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("2F") != -1))
				)
			) {
				me._floorplans.ggChangeMap("SecondFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				me._floorplans.ggChangeMap("ThirdFloor");
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_01.style.transition='none';
				} else {
					me._floorswitch_01.style.transition='all 200ms step-end 0ms';
				}
				me._floorswitch_01.style.opacity='1';
				me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("2F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_02.style.transition='none';
				} else {
					me._floorswitch_02.style.transition='all 200ms ease 0ms';
				}
				me._floorswitch_02.style.opacity='1';
				me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_03.style.transition='none';
				} else {
					me._floorswitch_03.style.transition='all 200ms ease 0ms';
				}
				me._floorswitch_03.style.opacity='1';
				me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_01.style.transition='none';
				} else {
					me._floorswitch_01.style.transition='all 200ms linear 0ms';
				}
				me._floorswitch_01.ggParameter.sx=1.2;me._floorswitch_01.ggParameter.sy=1.2;
				me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
				setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("2F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_02.style.transition='none';
				} else {
					me._floorswitch_02.style.transition='all 0ms ease 0ms';
				}
				me._floorswitch_02.ggParameter.sx=1.2;me._floorswitch_02.ggParameter.sy=1.2;
				me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
				setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 50);
			}
			if (
				(
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._floorswitch_03.style.transition='none';
				} else {
					me._floorswitch_03.style.transition='all 0ms step-end 0ms';
				}
				me._floorswitch_03.ggParameter.sx=1.2;me._floorswitch_03.ggParameter.sy=1.2;
				me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
				setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 50);
			}
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
		}
		me._floorplan_b.onmouseenter=function (e) {
			me.elementMouseOver['floorplan_b']=true;
			me._floor_plans_.logicBlock_alpha();
		}
		me._floorplan_b.onmouseleave=function (e) {
			me.elementMouseOver['floorplan_b']=false;
			me._floor_plans_.logicBlock_alpha();
		}
		me._floorplan_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._floor_plans_=document.createElement('div');
		els=me._floor_plans___text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor_Plans ";
		el.ggDx=-25;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) - 25px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 40px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._floor_plans_.ggUpdateText=function() {
			var params = [];
			var hs = player._("", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_plans_.ggUpdateText();
		el.appendChild(els);
		me._floor_plans_.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_plans_.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['floorplan_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floor_plans_.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floor_plans_.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floor_plans_.style.transition='opacity 500ms ease 0ms';
				if (me._floor_plans_.ggCurrentLogicStateAlpha == 0) {
					me._floor_plans_.style.visibility=me._floor_plans_.ggVisible?'inherit':'hidden';
					me._floor_plans_.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floor_plans_.style.opacity == 0.0) { me._floor_plans_.style.visibility="hidden"; } }, 505);
					me._floor_plans_.style.opacity=0;
				}
			}
		}
		me._floor_plans_.logicBlock_alpha();
		me._floor_plans_.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_b.appendChild(me._floor_plans_);
		me._right_top_corner_panel.appendChild(me._floorplan_b);
		el=me._floors_b=document.createElement('div');
		els=me._floors_b__img=document.createElement('img');
		els.className='ggskin ggskin_floors_b';
		hs=basePath + 'images/floors_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Floors_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 194px;';
		hs+='top : 235px;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floors_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_b.onclick=function (e) {
			player.setVariableValue('Floor_Visibility', !player.getVariableValue('Floor_Visibility'));
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
		}
		me._floors_b.onmouseenter=function (e) {
			me.elementMouseOver['floors_b']=true;
			me._floors_h.logicBlock_alpha();
		}
		me._floors_b.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._floors_h.style.transition='none';
			} else {
				me._floors_h.style.transition='all 500ms ease-out 0ms';
			}
			me._floors_h.style.opacity='0';
			me._floors_h.style.visibility='hidden';
			me.elementMouseOver['floors_b']=false;
			me._floors_h.logicBlock_alpha();
		}
		me._floors_b.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['floors_b']) {
				if (player.transitionsDisabled) {
					me._floors_h.style.transition='none';
				} else {
					me._floors_h.style.transition='all 500ms ease-out 0ms';
				}
				me._floors_h.style.opacity='1';
				me._floors_h.style.visibility=me._floors_h.ggVisible?'inherit':'hidden';
			}
		}
		me._floors_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._floors_h=document.createElement('div');
		els=me._floors_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floors_H";
		el.ggDx=11;
		el.ggDy=41;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 11px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 41px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._floors_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Floors", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floors_h.ggUpdateText();
		el.appendChild(els);
		me._floors_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Floor_Visibility') == true)) || 
				((player.getVariableValue('Room_visibility_1F') == true)) || 
				((player.getVariableValue('Room_visibility_2F') == true)) || 
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._floors_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._floors_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._floors_h.style.transition='opacity 200ms ease 0ms';
				if (me._floors_h.ggCurrentLogicStateVisible == 0) {
					me._floors_h.style.visibility="hidden";
					me._floors_h.ggVisible=false;
				}
				else if (me._floors_h.ggCurrentLogicStateVisible == 1) {
					me._floors_h.style.visibility=(Number(me._floors_h.style.opacity)>0||!me._floors_h.style.opacity)?'inherit':'hidden';
					me._floors_h.ggVisible=true;
				}
				else {
					me._floors_h.style.visibility=(Number(me._floors_h.style.opacity)>0||!me._floors_h.style.opacity)?'inherit':'hidden';
					me._floors_h.ggVisible=true;
				}
			}
		}
		me._floors_h.logicBlock_visible();
		me._floors_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['floors_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floors_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floors_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floors_h.style.transition='opacity 200ms ease 0ms';
				if (me._floors_h.ggCurrentLogicStateAlpha == 0) {
					me._floors_h.style.visibility=me._floors_h.ggVisible?'inherit':'hidden';
					me._floors_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floors_h.style.opacity == 0.0) { me._floors_h.style.visibility="hidden"; } }, 205);
					me._floors_h.style.opacity=0;
				}
			}
		}
		me._floors_h.logicBlock_alpha();
		me._floors_h.ggUpdatePosition=function (useTransition) {
		}
		me._floors_b.appendChild(me._floors_h);
		el=me._floors_p=document.createElement('div');
		els=me._floors_p__img=document.createElement('img');
		els.className='ggskin ggskin_floors_p';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Floors_P";
		el.ggDx=42;
		el.ggDy=42;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 120px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 42px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((120px + 0px) / 2) + 42px);';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floors_p.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floors_p.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStatePosition = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStatePosition = 1;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._floors_p.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._floors_p.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._floors_p.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floors_p.ggCurrentLogicStatePosition == 0) {
					me._floors_p.style.left = 'calc(50% - (120px / 2) - (0px / 2) + 42px)';
					me._floors_p.style.top = 'calc(50% - (120px / 2) - (0px / 2) + 42px)';
				}
				else if (me._floors_p.ggCurrentLogicStatePosition == 1) {
					me._floors_p.style.left = 'calc(50% - (120px / 2) - (0px / 2) + 42px)';
					me._floors_p.style.top = 'calc(50% - (120px / 2) - (0px / 2) + 82px)';
				}
				else {
					me._floors_p.style.left='calc(50% - ((120px + 0px) / 2) + 42px)';
					me._floors_p.style.top='calc(50% - ((120px + 0px) / 2) + 42px)';
				}
			}
		}
		me._floors_p.logicBlock_position();
		me._floors_p.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('Floor_Visibility') == false))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((player.getVariableValue('Floor_Visibility') == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floors_p.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floors_p.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floors_p.style.transition='left 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._floors_p.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._floors_p.style.opacity == 0.0) { me._floors_p.style.visibility="hidden"; } }, 505);
					me._floors_p.style.opacity=0;
				}
				else if (me._floors_p.ggCurrentLogicStateAlpha == 1) {
					me._floors_p.style.visibility=me._floors_p.ggVisible?'inherit':'hidden';
					me._floors_p.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._floors_p.style.opacity == 0.0) { me._floors_p.style.visibility="hidden"; } }, 505);
					me._floors_p.style.opacity=0;
				}
			}
		}
		me._floors_p.logicBlock_alpha();
		me._floors_p.ggUpdatePosition=function (useTransition) {
		}
		el=me._floor_tx_03=document.createElement('div');
		els=me._floor_tx_03__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor_Tx_03";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 40px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_tx_03.ggUpdateText=function() {
			var params = [];
			var hs = player._("Third Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_tx_03.ggUpdateText();
		el.appendChild(els);
		me._floor_tx_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_tx_03.onclick=function (e) {
			player.openNext("{node46}","");
		}
		me._floor_tx_03.ggUpdatePosition=function (useTransition) {
		}
		me._floors_p.appendChild(me._floor_tx_03);
		el=me._floor_tx_02=document.createElement('div');
		els=me._floor_tx_02__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor_Tx_02";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_tx_02.ggUpdateText=function() {
			var params = [];
			var hs = player._("Second Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_tx_02.ggUpdateText();
		el.appendChild(els);
		me._floor_tx_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_tx_02.onclick=function (e) {
			player.openNext("{node23}","");
		}
		me._floor_tx_02.ggUpdatePosition=function (useTransition) {
		}
		me._floors_p.appendChild(me._floor_tx_02);
		el=me._floor_tx_01=document.createElement('div');
		els=me._floor_tx_01__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Floor_Tx_01";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 0px) / 2) - 40px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floor_tx_01.ggUpdateText=function() {
			var params = [];
			var hs = player._("First Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floor_tx_01.ggUpdateText();
		el.appendChild(els);
		me._floor_tx_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floor_tx_01.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me._floor_tx_01.ggUpdatePosition=function (useTransition) {
		}
		me._floors_p.appendChild(me._floor_tx_01);
		me._floors_b.appendChild(me._floors_p);
		me._right_top_corner_panel.appendChild(me._floors_b);
		el=me._minimap_b=document.createElement('div');
		els=me._minimap_b__img=document.createElement('img');
		els.className='ggskin ggskin_minimap_b';
		hs=basePath + 'images/minimap_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Minimap_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='top : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._minimap_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_b.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._minimap_bg.style.transition='none';
			} else {
				me._minimap_bg.style.transition='all 100ms ease-out 0ms';
			}
			me._minimap_bg.ggParameter.rx=0;me._minimap_bg.ggParameter.ry=0;
			me._minimap_bg.style.transform=parameterToTransform(me._minimap_bg.ggParameter);
			me._floorplan_b.style.transition='none';
			me._floorplan_b.style.visibility=(Number(me._floorplan_b.style.opacity)>0||!me._floorplan_b.style.opacity)?'inherit':'hidden';
			me._floorplan_b.ggVisible=true;
			if (player.transitionsDisabled) {
				me._room_name_p.style.transition='none';
			} else {
				me._room_name_p.style.transition='all 100ms ease-out 0ms';
			}
			me._room_name_p.ggParameter.rx=0;me._room_name_p.ggParameter.ry=0;
			me._room_name_p.style.transform=parameterToTransform(me._room_name_p.ggParameter);
			if (player.transitionsDisabled) {
				me._floors_b.style.transition='none';
			} else {
				me._floors_b.style.transition='all 100ms ease-out 0ms';
			}
			me._floors_b.ggParameter.rx=0;me._floors_b.ggParameter.ry=0;
			me._floors_b.style.transform=parameterToTransform(me._floors_b.ggParameter);
			me._minimap_b.style.transition='none';
			me._minimap_b.style.visibility='hidden';
			me._minimap_b.ggVisible=false;
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
		}
		me._minimap_b.onmouseenter=function (e) {
			me.elementMouseOver['minimap_b']=true;
			me._minimap_h.logicBlock_alpha();
		}
		me._minimap_b.onmouseleave=function (e) {
			me.elementMouseOver['minimap_b']=false;
			me._minimap_h.logicBlock_alpha();
		}
		me._minimap_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._minimap_h=document.createElement('div');
		els=me._minimap_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Minimap_H";
		el.ggDx=-60;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((150px + 0px) / 2) - 60px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 40px);';
		hs+='visibility : hidden;';
		hs+='width : 150px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 18px;';
		hs+='font-weight: 600;';
		hs+='text-align: right;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._minimap_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Floor Plan", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._minimap_h.ggUpdateText();
		el.appendChild(els);
		me._minimap_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._minimap_h.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('Room_visibility_1F') == true)) || 
				((player.getVariableValue('Room_visibility_2F') == true)) || 
				((player.getVariableValue('Room_visibility_3F') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._minimap_h.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._minimap_h.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._minimap_h.style.transition='opacity 500ms ease 0ms';
				if (me._minimap_h.ggCurrentLogicStateVisible == 0) {
					me._minimap_h.style.visibility="hidden";
					me._minimap_h.ggVisible=false;
				}
				else {
					me._minimap_h.style.visibility=(Number(me._minimap_h.style.opacity)>0||!me._minimap_h.style.opacity)?'inherit':'hidden';
					me._minimap_h.ggVisible=true;
				}
			}
		}
		me._minimap_h.logicBlock_visible();
		me._minimap_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['minimap_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._minimap_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._minimap_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._minimap_h.style.transition='opacity 500ms ease 0ms';
				if (me._minimap_h.ggCurrentLogicStateAlpha == 0) {
					me._minimap_h.style.visibility=me._minimap_h.ggVisible?'inherit':'hidden';
					me._minimap_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._minimap_h.style.opacity == 0.0) { me._minimap_h.style.visibility="hidden"; } }, 505);
					me._minimap_h.style.opacity=0;
				}
			}
		}
		me._minimap_h.logicBlock_alpha();
		me._minimap_h.ggUpdatePosition=function (useTransition) {
		}
		me._minimap_b.appendChild(me._minimap_h);
		me._right_top_corner_panel.appendChild(me._minimap_b);
		me.divSkin.appendChild(me._right_top_corner_panel);
		el=me._right_bottom_corner_panel=document.createElement('div');
		el.ggId="Right bottom corner panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_bottom_corner_panel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._right_bottom_corner_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._fullscreen_off_b=document.createElement('div');
		els=me._fullscreen_off_b__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen_off_b';
		hs=basePath + 'images/fullscreen_off_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Fullscreen off_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 1;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '1');
		el.style.transformOrigin='50% 50%';
		me._fullscreen_off_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_off_b.onclick=function (e) {
			me._fullscreen_off_b.style.transition='none';
			me._fullscreen_off_b.style.visibility='hidden';
			me._fullscreen_off_b.ggVisible=false;
			player.exitFullscreen();
			me._fullscreen_b.style.transition='none';
			me._fullscreen_b.style.visibility=(Number(me._fullscreen_b.style.opacity)>0||!me._fullscreen_b.style.opacity)?'inherit':'hidden';
			me._fullscreen_b.ggVisible=true;
		}
		me._fullscreen_off_b.onmouseenter=function (e) {
			me.elementMouseOver['fullscreen_off_b']=true;
			me._f_bg_1.logicBlock_alpha();
			me._exit_fullscreen_h.logicBlock_alpha();
		}
		me._fullscreen_off_b.onmouseleave=function (e) {
			me.elementMouseOver['fullscreen_off_b']=false;
			me._f_bg_1.logicBlock_alpha();
			me._exit_fullscreen_h.logicBlock_alpha();
		}
		me._fullscreen_off_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._f_bg_1=document.createElement('div');
		els=me._f_bg_1__img=document.createElement('img');
		els.className='ggskin ggskin_f_bg_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="F_BG_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f_bg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f_bg_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['fullscreen_off_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._f_bg_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._f_bg_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._f_bg_1.style.transition='opacity 500ms ease 0ms';
				if (me._f_bg_1.ggCurrentLogicStateAlpha == 0) {
					me._f_bg_1.style.visibility=me._f_bg_1.ggVisible?'inherit':'hidden';
					me._f_bg_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._f_bg_1.style.opacity == 0.0) { me._f_bg_1.style.visibility="hidden"; } }, 505);
					me._f_bg_1.style.opacity=0;
				}
			}
		}
		me._f_bg_1.logicBlock_alpha();
		me._f_bg_1.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_off_b.appendChild(me._f_bg_1);
		el=me._exit_fullscreen_h=document.createElement('div');
		els=me._exit_fullscreen_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Exit_fullscreen_H";
		el.ggDx=-50;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._exit_fullscreen_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Exit Fullscreen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._exit_fullscreen_h.ggUpdateText();
		el.appendChild(els);
		me._exit_fullscreen_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._exit_fullscreen_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['fullscreen_off_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._exit_fullscreen_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._exit_fullscreen_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._exit_fullscreen_h.style.transition='opacity 500ms ease 0ms';
				if (me._exit_fullscreen_h.ggCurrentLogicStateAlpha == 0) {
					me._exit_fullscreen_h.style.visibility=me._exit_fullscreen_h.ggVisible?'inherit':'hidden';
					me._exit_fullscreen_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._exit_fullscreen_h.style.opacity == 0.0) { me._exit_fullscreen_h.style.visibility="hidden"; } }, 505);
					me._exit_fullscreen_h.style.opacity=0;
				}
			}
		}
		me._exit_fullscreen_h.logicBlock_alpha();
		me._exit_fullscreen_h.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_off_b.appendChild(me._exit_fullscreen_h);
		me._right_bottom_corner_panel.appendChild(me._fullscreen_off_b);
		el=me._fullscreen_b=document.createElement('div');
		els=me._fullscreen_b__img=document.createElement('img');
		els.className='ggskin ggskin_fullscreen_b';
		hs=basePath + 'images/fullscreen_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Fullscreen_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 1;';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='position : absolute;';
		hs+='right : 10px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('tabindex', '1');
		el.style.transformOrigin='50% 50%';
		me._fullscreen_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_b.onclick=function (e) {
			player.enterFullscreen();
			me._fullscreen_b.style.transition='none';
			me._fullscreen_b.style.visibility='hidden';
			me._fullscreen_b.ggVisible=false;
			me._fullscreen_off_b.style.transition='none';
			me._fullscreen_off_b.style.visibility=(Number(me._fullscreen_off_b.style.opacity)>0||!me._fullscreen_off_b.style.opacity)?'inherit':'hidden';
			me._fullscreen_off_b.ggVisible=true;
		}
		me._fullscreen_b.onmouseenter=function (e) {
			me.elementMouseOver['fullscreen_b']=true;
			me._f_bg.logicBlock_alpha();
			me._fullscreen_h.logicBlock_alpha();
		}
		me._fullscreen_b.onmouseleave=function (e) {
			me.elementMouseOver['fullscreen_b']=false;
			me._f_bg.logicBlock_alpha();
			me._fullscreen_h.logicBlock_alpha();
		}
		me._fullscreen_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._f_bg=document.createElement('div');
		els=me._f_bg__img=document.createElement('img');
		els.className='ggskin ggskin_f_bg';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="F_BG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._f_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._f_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['fullscreen_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._f_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._f_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._f_bg.style.transition='opacity 500ms ease 0ms';
				if (me._f_bg.ggCurrentLogicStateAlpha == 0) {
					me._f_bg.style.visibility=me._f_bg.ggVisible?'inherit':'hidden';
					me._f_bg.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._f_bg.style.opacity == 0.0) { me._f_bg.style.visibility="hidden"; } }, 505);
					me._f_bg.style.opacity=0;
				}
			}
		}
		me._f_bg.logicBlock_alpha();
		me._f_bg.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_b.appendChild(me._f_bg);
		el=me._fullscreen_h=document.createElement('div');
		els=me._fullscreen_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="fullscreen_H";
		el.ggDx=-30;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) - 30px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._fullscreen_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Fullscreen", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._fullscreen_h.ggUpdateText();
		el.appendChild(els);
		me._fullscreen_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fullscreen_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['fullscreen_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._fullscreen_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._fullscreen_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._fullscreen_h.style.transition='opacity 500ms ease 0ms';
				if (me._fullscreen_h.ggCurrentLogicStateAlpha == 0) {
					me._fullscreen_h.style.visibility=me._fullscreen_h.ggVisible?'inherit':'hidden';
					me._fullscreen_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._fullscreen_h.style.opacity == 0.0) { me._fullscreen_h.style.visibility="hidden"; } }, 505);
					me._fullscreen_h.style.opacity=0;
				}
			}
		}
		me._fullscreen_h.logicBlock_alpha();
		me._fullscreen_h.ggUpdatePosition=function (useTransition) {
		}
		me._fullscreen_b.appendChild(me._fullscreen_h);
		me._right_bottom_corner_panel.appendChild(me._fullscreen_b);
		el=me._interior_b=document.createElement('div');
		els=me._interior_b__img=document.createElement('img');
		els.className='ggskin ggskin_interior_b';
		hs=basePath + 'images/interior_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Interior_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._interior_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interior_b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("Exterior") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._interior_b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._interior_b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._interior_b.style.transition='';
				if (me._interior_b.ggCurrentLogicStateVisible == 0) {
					me._interior_b.style.visibility=(Number(me._interior_b.style.opacity)>0||!me._interior_b.style.opacity)?'inherit':'hidden';
					me._interior_b.ggVisible=true;
				}
				else if (me._interior_b.ggCurrentLogicStateVisible == 1) {
					me._interior_b.style.visibility="hidden";
					me._interior_b.ggVisible=false;
				}
				else {
					me._interior_b.style.visibility="hidden";
					me._interior_b.ggVisible=false;
				}
			}
		}
		me._interior_b.logicBlock_visible();
		me._interior_b.onclick=function (e) {
			player.openNext("{node7}","");
			me._extrerior_b.style.transition='none';
			me._extrerior_b.style.visibility=(Number(me._extrerior_b.style.opacity)>0||!me._extrerior_b.style.opacity)?'inherit':'hidden';
			me._extrerior_b.ggVisible=true;
			me._interior_b.style.transition='none';
			me._interior_b.style.visibility='hidden';
			me._interior_b.ggVisible=false;
		}
		me._interior_b.onmouseenter=function (e) {
			me.elementMouseOver['interior_b']=true;
			me._interior_h.logicBlock_alpha();
		}
		me._interior_b.onmouseleave=function (e) {
			me.elementMouseOver['interior_b']=false;
			me._interior_h.logicBlock_alpha();
		}
		me._interior_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._interior_bt=document.createElement('div');
		els=me._interior_bt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Interior_BT";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._interior_bt.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u21aa Interior View", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._interior_bt.ggUpdateText();
		el.appendChild(els);
		me._interior_bt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interior_bt.ggUpdatePosition=function (useTransition) {
		}
		me._interior_b.appendChild(me._interior_bt);
		el=me._interior_h=document.createElement('div');
		els=me._interior_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Interior_H";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._interior_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Interior View\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._interior_h.ggUpdateText();
		el.appendChild(els);
		me._interior_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._interior_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['interior_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._interior_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._interior_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._interior_h.style.transition='opacity 500ms ease 0ms';
				if (me._interior_h.ggCurrentLogicStateAlpha == 0) {
					me._interior_h.style.visibility=me._interior_h.ggVisible?'inherit':'hidden';
					me._interior_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._interior_h.style.opacity == 0.0) { me._interior_h.style.visibility="hidden"; } }, 505);
					me._interior_h.style.opacity=0;
				}
			}
		}
		me._interior_h.logicBlock_alpha();
		me._interior_h.ggUpdatePosition=function (useTransition) {
		}
		me._interior_b.appendChild(me._interior_h);
		me._right_bottom_corner_panel.appendChild(me._interior_b);
		el=me._extrerior_b=document.createElement('div');
		els=me._extrerior_b__img=document.createElement('img');
		els.className='ggskin ggskin_extrerior_b';
		hs=basePath + 'images/extrerior_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Extrerior_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='bottom : 14px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='position : absolute;';
		hs+='right : 60px;';
		hs+='visibility : hidden;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._extrerior_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._extrerior_b.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1)) || 
				((me.ggUserdata.tags.indexOf("2F") != -1)) || 
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("Exterior") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._extrerior_b.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._extrerior_b.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._extrerior_b.style.transition='';
				if (me._extrerior_b.ggCurrentLogicStateVisible == 0) {
					me._extrerior_b.style.visibility=(Number(me._extrerior_b.style.opacity)>0||!me._extrerior_b.style.opacity)?'inherit':'hidden';
					me._extrerior_b.ggVisible=true;
				}
				else if (me._extrerior_b.ggCurrentLogicStateVisible == 1) {
					me._extrerior_b.style.visibility="hidden";
					me._extrerior_b.ggVisible=false;
				}
				else {
					me._extrerior_b.style.visibility="hidden";
					me._extrerior_b.ggVisible=false;
				}
			}
		}
		me._extrerior_b.logicBlock_visible();
		me._extrerior_b.onclick=function (e) {
			player.openNext("{node51}","");
			me._extrerior_b.style.transition='none';
			me._extrerior_b.style.visibility='hidden';
			me._extrerior_b.ggVisible=false;
			me._interior_b.style.transition='none';
			me._interior_b.style.visibility=(Number(me._interior_b.style.opacity)>0||!me._interior_b.style.opacity)?'inherit':'hidden';
			me._interior_b.ggVisible=true;
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
		}
		me._extrerior_b.onmouseenter=function (e) {
			me.elementMouseOver['extrerior_b']=true;
			me._exterior_h.logicBlock_alpha();
		}
		me._extrerior_b.onmouseleave=function (e) {
			me.elementMouseOver['extrerior_b']=false;
			me._exterior_h.logicBlock_alpha();
		}
		me._extrerior_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._exterior_bt=document.createElement('div');
		els=me._exterior_bt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Exterior_BT";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((120px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 120px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 400;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._exterior_bt.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u21aa Exterior View", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._exterior_bt.ggUpdateText();
		el.appendChild(els);
		me._exterior_bt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._exterior_bt.ggUpdatePosition=function (useTransition) {
		}
		me._extrerior_b.appendChild(me._exterior_bt);
		el=me._exterior_h=document.createElement('div');
		els=me._exterior_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Exterior_H";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 1;';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._exterior_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Exterior View\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._exterior_h.ggUpdateText();
		el.appendChild(els);
		me._exterior_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._exterior_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['extrerior_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._exterior_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._exterior_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._exterior_h.style.transition='opacity 500ms ease 0ms';
				if (me._exterior_h.ggCurrentLogicStateAlpha == 0) {
					me._exterior_h.style.visibility=me._exterior_h.ggVisible?'inherit':'hidden';
					me._exterior_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._exterior_h.style.opacity == 0.0) { me._exterior_h.style.visibility="hidden"; } }, 505);
					me._exterior_h.style.opacity=0;
				}
			}
		}
		me._exterior_h.logicBlock_alpha();
		me._exterior_h.ggUpdatePosition=function (useTransition) {
		}
		me._extrerior_b.appendChild(me._exterior_h);
		me._right_bottom_corner_panel.appendChild(me._extrerior_b);
		me.divSkin.appendChild(me._right_bottom_corner_panel);
		el=me._left_bottom_corner_panel=document.createElement('div');
		el.ggId="left bottom corner panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_bottom_corner_panel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._left_bottom_corner_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._guide_b=document.createElement('div');
		els=me._guide_b__img=document.createElement('img');
		els.className='ggskin ggskin_guide_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Guide_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 10px;';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._guide_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._guide_b.onclick=function (e) {
			me._quick_guide.style.transition='none';
			me._quick_guide.style.visibility=(Number(me._quick_guide.style.opacity)>0||!me._quick_guide.style.opacity)?'inherit':'hidden';
			me._quick_guide.ggVisible=true;
			if (player.transitionsDisabled) {
				me._quick_guide.style.transition='none';
			} else {
				me._quick_guide.style.transition='all 500ms ease-in-out 0ms';
			}
			me._quick_guide.style.opacity='1';
			me._quick_guide.style.visibility=me._quick_guide.ggVisible?'inherit':'hidden';
			player.setVariableValue('SlideShow_QG', Number("0.00"));
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility='hidden';
			me._right_top_corner_panel.ggVisible=false;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility='hidden';
			me._right_bottom_corner_panel.ggVisible=false;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility='hidden';
			me._left_bottom_corner_panel.ggVisible=false;
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
		}
		me._guide_b.onmouseenter=function (e) {
			me.elementMouseOver['guide_b']=true;
			me._g_bg.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
		}
		me._guide_b.onmousedown=function (e) {
			me.elementMouseDown['guide_b']=true;
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
		}
		me._guide_b.onmouseup=function (e) {
			me.elementMouseDown['guide_b']=false;
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
		}
		me._guide_b.onmouseleave=function (e) {
			me.elementMouseDown['guide_b']=false;
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
			me.elementMouseOver['guide_b']=false;
			me._g_bg.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
			me._guide_h.logicBlock_alpha();
		}
		me._guide_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._g_bg=document.createElement('div');
		els=me._g_bg__img=document.createElement('img');
		els.className='ggskin ggskin_g_bg';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="G_BG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._g_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._g_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['guide_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._g_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._g_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._g_bg.style.transition='opacity 500ms ease 0ms';
				if (me._g_bg.ggCurrentLogicStateAlpha == 0) {
					me._g_bg.style.visibility=me._g_bg.ggVisible?'inherit':'hidden';
					me._g_bg.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._g_bg.style.opacity == 0.0) { me._g_bg.style.visibility="hidden"; } }, 505);
					me._g_bg.style.opacity=0;
				}
			}
		}
		me._g_bg.logicBlock_alpha();
		me._g_bg.ggUpdatePosition=function (useTransition) {
		}
		me._guide_b.appendChild(me._g_bg);
		el=me._guide_h=document.createElement('div');
		els=me._guide_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Guide_H";
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(0px, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(0px, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._guide_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Guide", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._guide_h.ggUpdateText();
		el.appendChild(els);
		me._guide_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._guide_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['guide_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.elementMouseDown['guide_b'] == true))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._guide_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._guide_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._guide_h.style.transition='opacity 500ms ease 0ms';
				if (me._guide_h.ggCurrentLogicStateAlpha == 0) {
					me._guide_h.style.visibility=me._guide_h.ggVisible?'inherit':'hidden';
					me._guide_h.style.opacity=1;
				}
				else if (me._guide_h.ggCurrentLogicStateAlpha == 1) {
					setTimeout(function() { if (me._guide_h.style.opacity == 0.0) { me._guide_h.style.visibility="hidden"; } }, 505);
					me._guide_h.style.opacity=0;
				}
				else {
					setTimeout(function() { if (me._guide_h.style.opacity == 0.0) { me._guide_h.style.visibility="hidden"; } }, 505);
					me._guide_h.style.opacity=0;
				}
			}
		}
		me._guide_h.logicBlock_alpha();
		me._guide_h.ggUpdatePosition=function (useTransition) {
		}
		me._guide_b.appendChild(me._guide_h);
		me._left_bottom_corner_panel.appendChild(me._guide_b);
		el=me._hide_o_b=document.createElement('div');
		els=me._hide_o_b__img=document.createElement('img');
		els.className='ggskin ggskin_hide_o_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Hide O_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 75px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hide_o_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_o_b.onclick=function (e) {
			player.setVariableValue('View_option', true);
			me._left_bottom_view_icon_panel.style.transition='none';
			me._left_bottom_view_icon_panel.style.visibility=(Number(me._left_bottom_view_icon_panel.style.opacity)>0||!me._left_bottom_view_icon_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_view_icon_panel.ggVisible=true;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility='hidden';
			me._left_bottom_corner_panel.ggVisible=false;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility='hidden';
			me._right_bottom_corner_panel.ggVisible=false;
			if (player.transitionsDisabled) {
				me._right_top_corner_panel.style.transition='none';
			} else {
				me._right_top_corner_panel.style.transition='all 0ms linear 0ms';
			}
			me._right_top_corner_panel.style.opacity='0';
			me._right_top_corner_panel.style.visibility='hidden';
		}
		me._hide_o_b.onmouseenter=function (e) {
			me.elementMouseOver['hide_o_b']=true;
			me._h_bg_1.logicBlock_alpha();
			me._hide_o_h.logicBlock_alpha();
		}
		me._hide_o_b.onmouseleave=function (e) {
			me.elementMouseOver['hide_o_b']=false;
			me._h_bg_1.logicBlock_alpha();
			me._hide_o_h.logicBlock_alpha();
		}
		me._hide_o_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._h_bg_1=document.createElement('div');
		els=me._h_bg_1__img=document.createElement('img');
		els.className='ggskin ggskin_h_bg_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="H_BG_1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._h_bg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._h_bg_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hide_o_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._h_bg_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._h_bg_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._h_bg_1.style.transition='opacity 500ms ease 0ms';
				if (me._h_bg_1.ggCurrentLogicStateAlpha == 0) {
					me._h_bg_1.style.visibility=me._h_bg_1.ggVisible?'inherit':'hidden';
					me._h_bg_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._h_bg_1.style.opacity == 0.0) { me._h_bg_1.style.visibility="hidden"; } }, 505);
					me._h_bg_1.style.opacity=0;
				}
			}
		}
		me._h_bg_1.logicBlock_alpha();
		me._h_bg_1.ggUpdatePosition=function (useTransition) {
		}
		me._hide_o_b.appendChild(me._h_bg_1);
		el=me._hide_o_h=document.createElement('div');
		els=me._hide_o_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hide O_H";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hide_o_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Hide Options", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hide_o_h.ggUpdateText();
		el.appendChild(els);
		me._hide_o_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hide_o_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hide_o_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hide_o_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hide_o_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hide_o_h.style.transition='opacity 500ms ease 0ms';
				if (me._hide_o_h.ggCurrentLogicStateAlpha == 0) {
					me._hide_o_h.style.visibility=me._hide_o_h.ggVisible?'inherit':'hidden';
					me._hide_o_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._hide_o_h.style.opacity == 0.0) { me._hide_o_h.style.visibility="hidden"; } }, 505);
					me._hide_o_h.style.opacity=0;
				}
			}
		}
		me._hide_o_h.logicBlock_alpha();
		me._hide_o_h.ggUpdatePosition=function (useTransition) {
		}
		me._hide_o_b.appendChild(me._hide_o_h);
		me._left_bottom_corner_panel.appendChild(me._hide_o_b);
		el=me._showreel_b=document.createElement('div');
		els=me._showreel_b__img=document.createElement('img');
		els.className='ggskin ggskin_showreel_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Showreel_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 12px;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 35px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._showreel_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._showreel_b.onclick=function (e) {
			me._showreel_c_.style.transition='none';
			me._showreel_c_.style.visibility=(Number(me._showreel_c_.style.opacity)>0||!me._showreel_c_.style.opacity)?'inherit':'hidden';
			me._showreel_c_.ggVisible=true;
			if (player.transitionsDisabled) {
				me._showreel_c_.style.transition='none';
			} else {
				me._showreel_c_.style.transition='all 800ms ease 0ms';
			}
			me._showreel_c_.style.opacity='1';
			me._showreel_c_.style.visibility=me._showreel_c_.ggVisible?'inherit':'hidden';
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility='hidden';
			me._left_bottom_corner_panel.ggVisible=false;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility='hidden';
			me._right_top_corner_panel.ggVisible=false;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility='hidden';
			me._right_bottom_corner_panel.ggVisible=false;
			if (me._showreel.ggApiPlayer) {
				if (me._showreel.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._showreel.ggApiPlayer.playVideo();
					};
					if (me._showreel.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._showreel.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._showreel.ggApiPlayerType == 'vimeo') {
					me._showreel.ggApiPlayer.play();
				}
			} else {
				player.playSound("Showreel","1");
			}
		}
		me._showreel_b.onmouseenter=function (e) {
			me.elementMouseOver['showreel_b']=true;
			me._s_bg.logicBlock_alpha();
			me._showreel_h.logicBlock_alpha();
		}
		me._showreel_b.onmouseleave=function (e) {
			me.elementMouseOver['showreel_b']=false;
			me._s_bg.logicBlock_alpha();
			me._showreel_h.logicBlock_alpha();
		}
		me._showreel_b.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['showreel_b']) {
				if (player.transitionsDisabled) {
					me._sr_close_b.style.transition='none';
				} else {
					me._sr_close_b.style.transition='all 1000ms ease-out 2000ms';
				}
				me._sr_close_b.ggParameter.rx=0;me._sr_close_b.ggParameter.ry=100;
				me._sr_close_b.style.transform=parameterToTransform(me._sr_close_b.ggParameter);
			}
		}
		me._showreel_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._s_bg=document.createElement('div');
		els=me._s_bg__img=document.createElement('img');
		els.className='ggskin ggskin_s_bg';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="S_BG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._s_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._s_bg.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['showreel_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._s_bg.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._s_bg.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._s_bg.style.transition='opacity 500ms ease 0ms';
				if (me._s_bg.ggCurrentLogicStateAlpha == 0) {
					me._s_bg.style.visibility=me._s_bg.ggVisible?'inherit':'hidden';
					me._s_bg.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._s_bg.style.opacity == 0.0) { me._s_bg.style.visibility="hidden"; } }, 505);
					me._s_bg.style.opacity=0;
				}
			}
		}
		me._s_bg.logicBlock_alpha();
		me._s_bg.ggUpdatePosition=function (useTransition) {
		}
		me._showreel_b.appendChild(me._s_bg);
		el=me._showreel_h=document.createElement('div');
		els=me._showreel_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Showreel_H";
		el.ggDx=0;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 50px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._showreel_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("Showreel", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._showreel_h.ggUpdateText();
		el.appendChild(els);
		me._showreel_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._showreel_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['showreel_b'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._showreel_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._showreel_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._showreel_h.style.transition='opacity 500ms ease 0ms';
				if (me._showreel_h.ggCurrentLogicStateAlpha == 0) {
					me._showreel_h.style.visibility=me._showreel_h.ggVisible?'inherit':'hidden';
					me._showreel_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._showreel_h.style.opacity == 0.0) { me._showreel_h.style.visibility="hidden"; } }, 505);
					me._showreel_h.style.opacity=0;
				}
			}
		}
		me._showreel_h.logicBlock_alpha();
		me._showreel_h.ggUpdatePosition=function (useTransition) {
		}
		me._showreel_b.appendChild(me._showreel_h);
		me._left_bottom_corner_panel.appendChild(me._showreel_b);
		me.divSkin.appendChild(me._left_bottom_corner_panel);
		el=me._left_bottom_view_icon_panel=document.createElement('div');
		el.ggId="Left bottom view icon panel";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 20px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_bottom_view_icon_panel.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._left_bottom_view_icon_panel.onmouseenter=function (e) {
			me.elementMouseOver['left_bottom_view_icon_panel']=true;
			me._v_bg_1.logicBlock_alpha();
			me._view_o_h.logicBlock_alpha();
		}
		me._left_bottom_view_icon_panel.onmouseleave=function (e) {
			me.elementMouseOver['left_bottom_view_icon_panel']=false;
			me._v_bg_1.logicBlock_alpha();
			me._view_o_h.logicBlock_alpha();
		}
		me._left_bottom_view_icon_panel.ggUpdatePosition=function (useTransition) {
		}
		el=me._view_o_b=document.createElement('div');
		els=me._view_o_b__img=document.createElement('img');
		els.className='ggskin ggskin_view_o_b';
		hs=basePath + 'images/view_o_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="View O_B";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='bottom : 15px;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._view_o_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_o_b.onclick=function (e) {
			player.setVariableValue('View_option', false);
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._left_bottom_view_icon_panel.style.transition='none';
			me._left_bottom_view_icon_panel.style.visibility='hidden';
			me._left_bottom_view_icon_panel.ggVisible=false;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			if (
				(
					((me.ggUserdata.tags.indexOf("1F") != -1)) || 
					((me.ggUserdata.tags.indexOf("2F") != -1)) || 
					((me.ggUserdata.tags.indexOf("3F") != -1))
				)
			) {
				if (player.transitionsDisabled) {
					me._right_top_corner_panel.style.transition='none';
				} else {
					me._right_top_corner_panel.style.transition='all 0ms linear 0ms';
				}
				me._right_top_corner_panel.style.opacity='1';
				me._right_top_corner_panel.style.visibility=me._right_top_corner_panel.ggVisible?'inherit':'hidden';
			}
		}
		me._view_o_b.ggUpdatePosition=function (useTransition) {
		}
		me._left_bottom_view_icon_panel.appendChild(me._view_o_b);
		el=me._v_bg_1=document.createElement('div');
		els=me._v_bg_1__img=document.createElement('img');
		els.className='ggskin ggskin_v_bg_1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="V_BG_1";
		el.ggDx=-15;
		el.ggDy=-23;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : calc(50% - ((50px + 0px) / 2) - 15px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((50px + 0px) / 2) - 23px);';
		hs+='visibility : hidden;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._v_bg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._v_bg_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['left_bottom_view_icon_panel'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._v_bg_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._v_bg_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._v_bg_1.style.transition='opacity 500ms ease 0ms';
				if (me._v_bg_1.ggCurrentLogicStateAlpha == 0) {
					me._v_bg_1.style.visibility=me._v_bg_1.ggVisible?'inherit':'hidden';
					me._v_bg_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._v_bg_1.style.opacity == 0.0) { me._v_bg_1.style.visibility="hidden"; } }, 505);
					me._v_bg_1.style.opacity=0;
				}
			}
		}
		me._v_bg_1.logicBlock_alpha();
		me._v_bg_1.ggUpdatePosition=function (useTransition) {
		}
		me._left_bottom_view_icon_panel.appendChild(me._v_bg_1);
		el=me._view_o_h=document.createElement('div');
		els=me._view_o_h__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="View O_H";
		el.ggDx=30;
		el.ggDy=-73;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 30px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 73px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._view_o_h.ggUpdateText=function() {
			var params = [];
			var hs = player._("View Options", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._view_o_h.ggUpdateText();
		el.appendChild(els);
		me._view_o_h.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._view_o_h.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['left_bottom_view_icon_panel'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._view_o_h.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._view_o_h.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._view_o_h.style.transition='opacity 500ms ease 0ms';
				if (me._view_o_h.ggCurrentLogicStateAlpha == 0) {
					me._view_o_h.style.visibility=me._view_o_h.ggVisible?'inherit':'hidden';
					me._view_o_h.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._view_o_h.style.opacity == 0.0) { me._view_o_h.style.visibility="hidden"; } }, 505);
					me._view_o_h.style.opacity=0;
				}
			}
		}
		me._view_o_h.logicBlock_alpha();
		me._view_o_h.ggUpdatePosition=function (useTransition) {
		}
		me._left_bottom_view_icon_panel.appendChild(me._view_o_h);
		me.divSkin.appendChild(me._left_bottom_view_icon_panel);
		el=me._floorplan=document.createElement('div');
		el.ggId="FloorPlan";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 900px;';
		hs+='left : calc(50% - ((1200px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((900px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1200px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._floorplan.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplan_bg=document.createElement('div');
		els=me._floorplan_bg__img=document.createElement('img');
		els.className='ggskin ggskin_floorplan_bg';
		hs=basePath + 'images/floorplan_bg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FloorPlan_BG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 900px;';
		hs+='left : calc(50% - ((1200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((900px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplan_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplan_bg.ggUpdatePosition=function (useTransition) {
		}
		el=me._floorplans=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FirstFloor';
		el.ggId="Floorplans";
		el.ggDx=100;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 100px);';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 900px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._floorplans.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorplans.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._floorplans.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplans.ggCalculateFloorplanSize(mapDetails);
				me._floorplans.ggShowSimpleFloorplan(mapDetails);
				me._floorplans.ggPlaceMarkersOnSimpleFloorplan();
			}
		}
		me._floorplans.ggUpdatePosition=function (useTransition) {
			me._floorplans.ggUpdateConditionResize();
		}
		me._floorplan_bg.appendChild(me._floorplans);
		el=me._fp_close_b=document.createElement('div');
		els=me._fp_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_fp_close_b';
		hs=basePath + 'images/fp_close_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="FP_Cl;ose_B";
		el.ggDx=540;
		el.ggDy=-422;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 2;';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 540px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 422px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._fp_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._fp_close_b.onclick=function (e) {
			me._floorplan.style.transition='none';
			me._floorplan.style.visibility='hidden';
			me._floorplan.ggVisible=false;
			if (player.transitionsDisabled) {
				me._floorplan.style.transition='none';
			} else {
				me._floorplan.style.transition='all 500ms ease-out 0ms';
			}
			me._floorplan.style.opacity='0';
			me._floorplan.style.visibility='hidden';
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='0.5';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='0.5';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='0.5';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1;me._floorswitch_01.ggParameter.sy=1;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1;me._floorswitch_02.ggParameter.sy=1;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1;me._floorswitch_03.ggParameter.sy=1;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			player.setVariableValue('Map_Pin_Normal_E', false);
			player.setVariableValue('Map_Pin_active_E', false);
		}
		me._fp_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._fp_close_b);
		el=me._floorswitch_01=document.createElement('div');
		els=me._floorswitch_01__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorSwitch 01";
		el.ggDx=-420;
		el.ggDy=-50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) - 420px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 50px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floorswitch_01.ggUpdateText=function() {
			var params = [];
			var hs = player._("First Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floorswitch_01.ggUpdateText();
		el.appendChild(els);
		me._floorswitch_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorswitch_01.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) && 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorswitch_01.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorswitch_01.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorswitch_01.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_01.ggCurrentLogicStateScaling == 0) {
					me._floorswitch_01.ggParameter.sx = 1.2;
					me._floorswitch_01.ggParameter.sy = 1.2;
					me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
				}
				else if (me._floorswitch_01.ggCurrentLogicStateScaling == 1) {
					me._floorswitch_01.ggParameter.sx = 1;
					me._floorswitch_01.ggParameter.sy = 1;
					me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
				}
				else {
					me._floorswitch_01.ggParameter.sx = 1;
					me._floorswitch_01.ggParameter.sy = 1;
					me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
				}
			}
		}
		me._floorswitch_01.logicBlock_scaling();
		me._floorswitch_01.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) && 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorswitch_01.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorswitch_01.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorswitch_01.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_01.ggCurrentLogicStateAlpha == 0) {
					me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
					me._floorswitch_01.style.opacity=1;
				}
				else if (me._floorswitch_01.ggCurrentLogicStateAlpha == 1) {
					me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
					me._floorswitch_01.style.opacity=0.5;
				}
				else {
					me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
					me._floorswitch_01.style.opacity=0.5;
				}
			}
		}
		me._floorswitch_01.logicBlock_alpha();
		me._floorswitch_01.onclick=function (e) {
			me._floorplans.ggChangeMap("FirstFloor");
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='1';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1.2;me._floorswitch_01.ggParameter.sy=1.2;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='0.5';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1;me._floorswitch_02.ggParameter.sy=1;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='0.5';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1;me._floorswitch_03.ggParameter.sy=1;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			me.__1st_floornames.style.transition='none';
			me.__1st_floornames.style.visibility=(Number(me.__1st_floornames.style.opacity)>0||!me.__1st_floornames.style.opacity)?'inherit':'hidden';
			me.__1st_floornames.ggVisible=true;
			me.__2nd_floornames.style.transition='none';
			me.__2nd_floornames.style.visibility='hidden';
			me.__2nd_floornames.ggVisible=false;
			me.__3rd_floornames.style.transition='none';
			me.__3rd_floornames.style.visibility='hidden';
			me.__3rd_floornames.ggVisible=false;
		}
		me._floorswitch_01.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._floorswitch_01);
		el=me._floorswitch_02=document.createElement('div');
		els=me._floorswitch_02__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorSwitch 02";
		el.ggDx=-420;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) - 420px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floorswitch_02.ggUpdateText=function() {
			var params = [];
			var hs = player._("Second Floor\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floorswitch_02.ggUpdateText();
		el.appendChild(els);
		me._floorswitch_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorswitch_02.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) && 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorswitch_02.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorswitch_02.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorswitch_02.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_02.ggCurrentLogicStateScaling == 0) {
					me._floorswitch_02.ggParameter.sx = 1.2;
					me._floorswitch_02.ggParameter.sy = 1.2;
					me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
				}
				else if (me._floorswitch_02.ggCurrentLogicStateScaling == 1) {
					me._floorswitch_02.ggParameter.sx = 1;
					me._floorswitch_02.ggParameter.sy = 1;
					me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
				}
				else {
					me._floorswitch_02.ggParameter.sx = 1;
					me._floorswitch_02.ggParameter.sy = 1;
					me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
				}
			}
		}
		me._floorswitch_02.logicBlock_scaling();
		me._floorswitch_02.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorswitch_02.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorswitch_02.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorswitch_02.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_02.ggCurrentLogicStateAlpha == 0) {
					me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
					me._floorswitch_02.style.opacity=1;
				}
				else if (me._floorswitch_02.ggCurrentLogicStateAlpha == 1) {
					me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
					me._floorswitch_02.style.opacity=0.5;
				}
				else {
					me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
					me._floorswitch_02.style.opacity=0.5;
				}
			}
		}
		me._floorswitch_02.logicBlock_alpha();
		me._floorswitch_02.onclick=function (e) {
			me._floorplans.ggChangeMap("SecondFloor");
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='1';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1.2;me._floorswitch_02.ggParameter.sy=1.2;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='0.5';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms linear 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1;me._floorswitch_01.ggParameter.sy=1;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='0.5';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1;me._floorswitch_03.ggParameter.sy=1;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			me.__2nd_floornames.style.transition='none';
			me.__2nd_floornames.style.visibility=(Number(me.__2nd_floornames.style.opacity)>0||!me.__2nd_floornames.style.opacity)?'inherit':'hidden';
			me.__2nd_floornames.ggVisible=true;
			me.__1st_floornames.style.transition='none';
			me.__1st_floornames.style.visibility='hidden';
			me.__1st_floornames.ggVisible=false;
			me.__3rd_floornames.style.transition='none';
			me.__3rd_floornames.style.visibility='hidden';
			me.__3rd_floornames.ggVisible=false;
		}
		me._floorswitch_02.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._floorswitch_02);
		el=me._floorswitch_03=document.createElement('div');
		els=me._floorswitch_03__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="FloorSwitch 03";
		el.ggDx=-420;
		el.ggDy=50;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((200px + 0px) / 2) - 420px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) + 50px);';
		hs+='visibility : inherit;';
		hs+='width : 200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 20px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre-line;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._floorswitch_03.ggUpdateText=function() {
			var params = [];
			var hs = player._("Third Floor", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._floorswitch_03.ggUpdateText();
		el.appendChild(els);
		me._floorswitch_03.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._floorswitch_03.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._floorswitch_03.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._floorswitch_03.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._floorswitch_03.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_03.ggCurrentLogicStateScaling == 0) {
					me._floorswitch_03.ggParameter.sx = 1.2;
					me._floorswitch_03.ggParameter.sy = 1.2;
					me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
				}
				else if (me._floorswitch_03.ggCurrentLogicStateScaling == 1) {
					me._floorswitch_03.ggParameter.sx = 1;
					me._floorswitch_03.ggParameter.sy = 1;
					me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
				}
				else {
					me._floorswitch_03.ggParameter.sx = 1;
					me._floorswitch_03.ggParameter.sy = 1;
					me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
					setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
				}
			}
		}
		me._floorswitch_03.logicBlock_scaling();
		me._floorswitch_03.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateAlpha = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("2F") == -1))
			)
			{
				newLogicStateAlpha = 1;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._floorswitch_03.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._floorswitch_03.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._floorswitch_03.style.transition='transform 200ms ease 0ms, opacity 200ms ease 0ms';
				if (me._floorswitch_03.ggCurrentLogicStateAlpha == 0) {
					me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
					me._floorswitch_03.style.opacity=1;
				}
				else if (me._floorswitch_03.ggCurrentLogicStateAlpha == 1) {
					me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
					me._floorswitch_03.style.opacity=0.5;
				}
				else {
					me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
					me._floorswitch_03.style.opacity=0.5;
				}
			}
		}
		me._floorswitch_03.logicBlock_alpha();
		me._floorswitch_03.onclick=function (e) {
			me._floorplans.ggChangeMap("ThirdFloor");
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='1';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1.2;me._floorswitch_03.ggParameter.sy=1.2;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='0.5';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1;me._floorswitch_02.ggParameter.sy=1;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='0.5';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1;me._floorswitch_01.ggParameter.sy=1;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			me.__3rd_floornames.style.transition='none';
			me.__3rd_floornames.style.visibility=(Number(me.__3rd_floornames.style.opacity)>0||!me.__3rd_floornames.style.opacity)?'inherit':'hidden';
			me.__3rd_floornames.ggVisible=true;
			me.__2nd_floornames.style.transition='none';
			me.__2nd_floornames.style.visibility='hidden';
			me.__2nd_floornames.ggVisible=false;
			me.__1st_floornames.style.transition='none';
			me.__1st_floornames.style.visibility='hidden';
			me.__1st_floornames.ggVisible=false;
		}
		me._floorswitch_03.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._floorswitch_03);
		el=me.__1st_floornames=document.createElement('div');
		els=me.__1st_floornames__img=document.createElement('img');
		els.className='ggskin ggskin__1st_floornames';
		hs=basePath + 'images/_1st_floornames.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="1st_FloorNames";
		el.ggDx=105;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 3;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 105px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1st_floornames.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1st_floornames.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("1F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("2F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__1st_floornames.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__1st_floornames.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__1st_floornames.style.transition='';
				if (me.__1st_floornames.ggCurrentLogicStateVisible == 0) {
					me.__1st_floornames.style.visibility=(Number(me.__1st_floornames.style.opacity)>0||!me.__1st_floornames.style.opacity)?'inherit':'hidden';
					me.__1st_floornames.ggVisible=true;
				}
				else if (me.__1st_floornames.ggCurrentLogicStateVisible == 1) {
					me.__1st_floornames.style.visibility="hidden";
					me.__1st_floornames.ggVisible=false;
				}
				else {
					me.__1st_floornames.style.visibility="hidden";
					me.__1st_floornames.ggVisible=false;
				}
			}
		}
		me.__1st_floornames.logicBlock_visible();
		me.__1st_floornames.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me.__1st_floornames);
		el=me.__2nd_floornames=document.createElement('div');
		els=me.__2nd_floornames__img=document.createElement('img');
		els.className='ggskin ggskin__2nd_floornames';
		hs=basePath + 'images/_2nd_floornames.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="2nd_FloorNames";
		el.ggDx=105;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 3;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 105px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__2nd_floornames.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2nd_floornames.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("2F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) || 
				((me.ggUserdata.tags.indexOf("3F") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__2nd_floornames.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__2nd_floornames.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__2nd_floornames.style.transition='';
				if (me.__2nd_floornames.ggCurrentLogicStateVisible == 0) {
					me.__2nd_floornames.style.visibility=(Number(me.__2nd_floornames.style.opacity)>0||!me.__2nd_floornames.style.opacity)?'inherit':'hidden';
					me.__2nd_floornames.ggVisible=true;
				}
				else if (me.__2nd_floornames.ggCurrentLogicStateVisible == 1) {
					me.__2nd_floornames.style.visibility="hidden";
					me.__2nd_floornames.ggVisible=false;
				}
				else {
					me.__2nd_floornames.style.visibility="hidden";
					me.__2nd_floornames.ggVisible=false;
				}
			}
		}
		me.__2nd_floornames.logicBlock_visible();
		me.__2nd_floornames.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me.__2nd_floornames);
		el=me.__3rd_floornames=document.createElement('div');
		els=me.__3rd_floornames__img=document.createElement('img');
		els.className='ggskin ggskin__3rd_floornames';
		hs=basePath + 'images/_3rd_floornames.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="3rd_FloorNames";
		el.ggDx=100;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: 3;';
		hs+='height : 840px;';
		hs+='left : calc(50% - ((900px + 0px) / 2) + 100px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((840px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 900px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3rd_floornames.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3rd_floornames.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.ggUserdata.tags.indexOf("3F") != -1))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((me.ggUserdata.tags.indexOf("1F") == -1)) && 
				((me.ggUserdata.tags.indexOf("2F") == -1))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me.__3rd_floornames.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me.__3rd_floornames.ggCurrentLogicStateVisible = newLogicStateVisible;
				me.__3rd_floornames.style.transition='';
				if (me.__3rd_floornames.ggCurrentLogicStateVisible == 0) {
					me.__3rd_floornames.style.visibility=(Number(me.__3rd_floornames.style.opacity)>0||!me.__3rd_floornames.style.opacity)?'inherit':'hidden';
					me.__3rd_floornames.ggVisible=true;
				}
				else if (me.__3rd_floornames.ggCurrentLogicStateVisible == 1) {
					me.__3rd_floornames.style.visibility="hidden";
					me.__3rd_floornames.ggVisible=false;
				}
				else {
					me.__3rd_floornames.style.visibility="hidden";
					me.__3rd_floornames.ggVisible=false;
				}
			}
		}
		me.__3rd_floornames.logicBlock_visible();
		me.__3rd_floornames.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me.__3rd_floornames);
		el=me._outside_close_b=document.createElement('div');
		el.ggId="Outside_close_B";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1100px;';
		hs+='left : calc(50% - ((1940px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1940px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._outside_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._outside_close_b.onclick=function (e) {
			me._floorplan.style.transition='none';
			me._floorplan.style.visibility='hidden';
			me._floorplan.ggVisible=false;
			if (player.transitionsDisabled) {
				me._floorplan.style.transition='none';
			} else {
				me._floorplan.style.transition='all 500ms ease-out 0ms';
			}
			me._floorplan.style.opacity='0';
			me._floorplan.style.visibility='hidden';
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.style.opacity='0.5';
			me._floorswitch_01.style.visibility=me._floorswitch_01.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.style.opacity='0.5';
			me._floorswitch_02.style.visibility=me._floorswitch_02.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.style.opacity='0.5';
			me._floorswitch_03.style.visibility=me._floorswitch_03.ggVisible?'inherit':'hidden';
			if (player.transitionsDisabled) {
				me._floorswitch_01.style.transition='none';
			} else {
				me._floorswitch_01.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_01.ggParameter.sx=1;me._floorswitch_01.ggParameter.sy=1;
			me._floorswitch_01.style.transform=parameterToTransform(me._floorswitch_01.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_01);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_02.style.transition='none';
			} else {
				me._floorswitch_02.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_02.ggParameter.sx=1;me._floorswitch_02.ggParameter.sy=1;
			me._floorswitch_02.style.transform=parameterToTransform(me._floorswitch_02.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_02);}, 250);
			if (player.transitionsDisabled) {
				me._floorswitch_03.style.transition='none';
			} else {
				me._floorswitch_03.style.transition='all 200ms ease-out 0ms';
			}
			me._floorswitch_03.ggParameter.sx=1;me._floorswitch_03.ggParameter.sy=1;
			me._floorswitch_03.style.transform=parameterToTransform(me._floorswitch_03.ggParameter);
			setTimeout(function() {skin.updateSize(me._floorswitch_03);}, 250);
			player.setVariableValue('Map_Pin_Normal_E', false);
			player.setVariableValue('Map_Pin_active_E', false);
		}
		me._outside_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._floorplan_bg.appendChild(me._outside_close_b);
		me._floorplan.appendChild(me._floorplan_bg);
		me.divSkin.appendChild(me._floorplan);
		el=me._quick_guide=document.createElement('div');
		el.ggId="Quick_Guide";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._quick_guide.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._quick_guide.ggUpdatePosition=function (useTransition) {
		}
		el=me._mouse_qg=document.createElement('div');
		els=me._mouse_qg__img=document.createElement('img');
		els.className='ggskin ggskin_mouse_qg';
		hs=basePath + 'images/mouse_qg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mouse_QG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((1400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mouse_qg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mouse_qg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width != 0))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mouse_qg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mouse_qg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mouse_qg.style.transition='';
				if (me._mouse_qg.ggCurrentLogicStateVisible == 0) {
					me._mouse_qg.style.visibility=(Number(me._mouse_qg.style.opacity)>0||!me._mouse_qg.style.opacity)?'inherit':'hidden';
					me._mouse_qg.ggVisible=true;
				}
				else if (me._mouse_qg.ggCurrentLogicStateVisible == 1) {
					me._mouse_qg.style.visibility="hidden";
					me._mouse_qg.ggVisible=false;
				}
				else {
					me._mouse_qg.style.visibility=(Number(me._mouse_qg.style.opacity)>0||!me._mouse_qg.style.opacity)?'inherit':'hidden';
					me._mouse_qg.ggVisible=true;
				}
			}
		}
		me._mouse_qg.logicBlock_visible();
		me._mouse_qg.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._mouse_qg);
		el=me._laptop_qg=document.createElement('div');
		els=me._laptop_qg__img=document.createElement('img');
		els.className='ggskin ggskin_laptop_qg';
		hs=basePath + 'images/laptop_qg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Laptop_QG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((1400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._laptop_qg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._laptop_qg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("1")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') != Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._laptop_qg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._laptop_qg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._laptop_qg.style.transition='';
				if (me._laptop_qg.ggCurrentLogicStateVisible == 0) {
					me._laptop_qg.style.visibility=(Number(me._laptop_qg.style.opacity)>0||!me._laptop_qg.style.opacity)?'inherit':'hidden';
					me._laptop_qg.ggVisible=true;
				}
				else if (me._laptop_qg.ggCurrentLogicStateVisible == 1) {
					me._laptop_qg.style.visibility="hidden";
					me._laptop_qg.ggVisible=false;
				}
				else {
					me._laptop_qg.style.visibility="hidden";
					me._laptop_qg.ggVisible=false;
				}
			}
		}
		me._laptop_qg.logicBlock_visible();
		me._laptop_qg.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._laptop_qg);
		el=me._mobile_qg=document.createElement('div');
		els=me._mobile_qg__img=document.createElement('img');
		els.className='ggskin ggskin_mobile_qg';
		hs=basePath + 'images/mobile_qg.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Mobile_QG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 700px;';
		hs+='left : calc(50% - ((1400px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((700px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 1400px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._mobile_qg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._mobile_qg.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') != Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._mobile_qg.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._mobile_qg.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._mobile_qg.style.transition='';
				if (me._mobile_qg.ggCurrentLogicStateVisible == 0) {
					me._mobile_qg.style.visibility=(Number(me._mobile_qg.style.opacity)>0||!me._mobile_qg.style.opacity)?'inherit':'hidden';
					me._mobile_qg.ggVisible=true;
				}
				else if (me._mobile_qg.ggCurrentLogicStateVisible == 1) {
					me._mobile_qg.style.visibility="hidden";
					me._mobile_qg.ggVisible=false;
				}
				else {
					me._mobile_qg.style.visibility="hidden";
					me._mobile_qg.ggVisible=false;
				}
			}
		}
		me._mobile_qg.logicBlock_visible();
		me._mobile_qg.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._mobile_qg);
		el=me._qg_close_b=document.createElement('div');
		els=me._qg_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_qg_close_b';
		hs=basePath + 'images/qg_close_b.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="QG_Close_B";
		el.ggDx=640;
		el.ggDy=-320;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 640px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((35px + 0px) / 2) - 320px);';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._qg_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._qg_close_b.onclick=function (e) {
			me._quick_guide.style.transition='none';
			me._quick_guide.style.visibility='hidden';
			me._quick_guide.ggVisible=false;
			if (player.transitionsDisabled) {
				me._quick_guide.style.transition='none';
			} else {
				me._quick_guide.style.transition='all 500ms ease-out 0ms';
			}
			me._quick_guide.style.opacity='0';
			me._quick_guide.style.visibility='hidden';
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
		}
		me._qg_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._qg_close_b);
		el=me._left_02=document.createElement('div');
		els=me._left_02__img=document.createElement('img');
		els.className='ggskin ggskin_left_02';
		hs=basePath + 'images/left_02.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Left_02";
		el.ggDx=-630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) - 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_02.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') > Number("1")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._left_02.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._left_02.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._left_02.style.transition='';
				if (me._left_02.ggCurrentLogicStateVisible == 0) {
					me._left_02.style.visibility=(Number(me._left_02.style.opacity)>0||!me._left_02.style.opacity)?'inherit':'hidden';
					me._left_02.ggVisible=true;
				}
				else if (me._left_02.ggCurrentLogicStateVisible == 1) {
					me._left_02.style.visibility="hidden";
					me._left_02.ggVisible=false;
				}
				else {
					me._left_02.style.visibility=(Number(me._left_02.style.opacity)>0||!me._left_02.style.opacity)?'inherit':'hidden';
					me._left_02.ggVisible=true;
				}
			}
		}
		me._left_02.logicBlock_visible();
		me._left_02.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._left_02);
		el=me._left_01=document.createElement('div');
		els=me._left_01__img=document.createElement('img');
		els.className='ggskin ggskin_left_01';
		hs=basePath + 'images/left_01.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="left_01";
		el.ggDx=-630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) - 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._left_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._left_01.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') > Number("0")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') == Number("0")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._left_01.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._left_01.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._left_01.style.transition='';
				if (me._left_01.ggCurrentLogicStateVisible == 0) {
					me._left_01.style.visibility=(Number(me._left_01.style.opacity)>0||!me._left_01.style.opacity)?'inherit':'hidden';
					me._left_01.ggVisible=true;
				}
				else if (me._left_01.ggCurrentLogicStateVisible == 1) {
					me._left_01.style.visibility="hidden";
					me._left_01.ggVisible=false;
				}
				else {
					me._left_01.style.visibility=(Number(me._left_01.style.opacity)>0||!me._left_01.style.opacity)?'inherit':'hidden';
					me._left_01.ggVisible=true;
				}
			}
		}
		me._left_01.logicBlock_visible();
		me._left_01.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SlideShow_QG') >= Number("0")))
				)
			) {
				player.setVariableValue('SlideShow_QG', player.getVariableValue('SlideShow_QG') - Number("1.00"));
			}
		}
		me._left_01.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._left_01);
		el=me._right_02=document.createElement('div');
		els=me._right_02__img=document.createElement('img');
		els.className='ggskin ggskin_right_02';
		hs=basePath + 'images/right_02.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Right_02";
		el.ggDx=630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_02.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_02.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') >= Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('SlideShow_QG') < Number("2")))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right_02.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right_02.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right_02.style.transition='';
				if (me._right_02.ggCurrentLogicStateVisible == 0) {
					me._right_02.style.visibility=(Number(me._right_02.style.opacity)>0||!me._right_02.style.opacity)?'inherit':'hidden';
					me._right_02.ggVisible=true;
				}
				else if (me._right_02.ggCurrentLogicStateVisible == 1) {
					me._right_02.style.visibility="hidden";
					me._right_02.ggVisible=false;
				}
				else {
					me._right_02.style.visibility=(Number(me._right_02.style.opacity)>0||!me._right_02.style.opacity)?'inherit':'hidden';
					me._right_02.ggVisible=true;
				}
			}
		}
		me._right_02.logicBlock_visible();
		me._right_02.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._right_02);
		el=me._right_01=document.createElement('div');
		els=me._right_01__img=document.createElement('img');
		els.className='ggskin ggskin_right_01';
		hs=basePath + 'images/right_01.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Right_01";
		el.ggDx=630;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((40px + 0px) / 2) + 630px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._right_01.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._right_01.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('SlideShow_QG') < Number("2")))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getViewerSize(true).width >= 2))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._right_01.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._right_01.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._right_01.style.transition='';
				if (me._right_01.ggCurrentLogicStateVisible == 0) {
					me._right_01.style.visibility=(Number(me._right_01.style.opacity)>0||!me._right_01.style.opacity)?'inherit':'hidden';
					me._right_01.ggVisible=true;
				}
				else if (me._right_01.ggCurrentLogicStateVisible == 1) {
					me._right_01.style.visibility="hidden";
					me._right_01.ggVisible=false;
				}
				else {
					me._right_01.style.visibility=(Number(me._right_01.style.opacity)>0||!me._right_01.style.opacity)?'inherit':'hidden';
					me._right_01.ggVisible=true;
				}
			}
		}
		me._right_01.logicBlock_visible();
		me._right_01.onclick=function (e) {
			if (
				(
					((player.getVariableValue('SlideShow_QG') < Number("2")))
				)
			) {
				player.setVariableValue('SlideShow_QG', player.getVariableValue('SlideShow_QG') + Number("1.00"));
			}
		}
		me._right_01.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._right_01);
		el=me._qg_outside_close_b=document.createElement('div');
		el.ggId="QG_Outside_close_B";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1100px;';
		hs+='left : calc(50% - ((1940px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1100px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 1940px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._qg_outside_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._qg_outside_close_b.onclick=function (e) {
			me._quick_guide.style.transition='none';
			me._quick_guide.style.visibility='hidden';
			me._quick_guide.ggVisible=false;
			if (player.transitionsDisabled) {
				me._quick_guide.style.transition='none';
			} else {
				me._quick_guide.style.transition='all 500ms ease-out 0ms';
			}
			me._quick_guide.style.opacity='0';
			me._quick_guide.style.visibility='hidden';
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
		}
		me._qg_outside_close_b.ggUpdatePosition=function (useTransition) {
		}
		me._quick_guide.appendChild(me._qg_outside_close_b);
		me.divSkin.appendChild(me._quick_guide);
		el=me._showreel_c_=document.createElement('div');
		el.ggId="Showreel_c ";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 20px;';
		hs+='left : calc(50% - ((100px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((20px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._showreel_c_.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._showreel_c_.ggUpdatePosition=function (useTransition) {
		}
		el=me._sr_outside_close=document.createElement('div');
		el.ggId="SR_Outside_close";
		el.ggDx=0;
		el.ggDy=-3;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='z-index: -5;';
		hs+='border : 0px solid #000000;';
		hs+='height : 1100px;';
		hs+='left : calc(50% - ((1940px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((1100px + 0px) / 2) - 3px);';
		hs+='visibility : inherit;';
		hs+='width : 1940px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr_outside_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sr_outside_close.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._showreel_c_.style.transition='none';
			} else {
				me._showreel_c_.style.transition='all 500ms ease-out 0ms';
			}
			me._showreel_c_.style.opacity='0';
			me._showreel_c_.style.visibility='hidden';
			me._showreel_c_.style.transition='none';
			me._showreel_c_.style.visibility='hidden';
			me._showreel_c_.ggVisible=false;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			if (me._showreel.ggApiPlayer) {
				if (me._showreel.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._showreel.ggApiPlayer.pauseVideo();
						me._showreel.ggApiPlayer.seekTo(0);
					};
					if (me._showreel.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._showreel.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._showreel.ggApiPlayerType == 'vimeo') {
					me._showreel.ggApiPlayer.pause();
					me._showreel.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("Showreel");
			}
			if (player.transitionsDisabled) {
				me._sr_close_b.style.transition='none';
			} else {
				me._sr_close_b.style.transition='all 1000ms ease-out 0ms';
			}
			me._sr_close_b.ggParameter.rx=0;me._sr_close_b.ggParameter.ry=0;
			me._sr_close_b.style.transform=parameterToTransform(me._sr_close_b.ggParameter);
		}
		me._sr_outside_close.ggUpdatePosition=function (useTransition) {
		}
		me._showreel_c_.appendChild(me._sr_outside_close);
		el=me._showreel=document.createElement('div');
		me._showreel.seekbars = [];
			me._showreel.ggYoutubeApiReady = function() { skin.ggYoutubeApiLoaded = true;}
		me._showreel.ggInitMedia = function(media) {
			var notifySeekbars = function() {
				for (var i = 0; i < me._showreel.seekbars.length; i++) {
					var seekbar = me.findElements(me._showreel.seekbars[i]);
					if (seekbar.length > 0) seekbar[0].ggConnectToMediaEl();
				}
			}
			while (me._showreel.hasChildNodes()) {
				me._showreel.removeChild(me._showreel.lastChild);
			}
			if(media == '') {
				notifySeekbars();
				if (me._showreel.ggVideoNotLoaded == false && me._showreel.ggDeactivate && player.isPlaying('showreel')) { me._showreel.ggDeactivate(); }
				me._showreel.ggVideoNotLoaded = true;
				return;
			}
			me._showreel.ggVideoNotLoaded = false;
			me._showreel__vid=document.createElement('iframe');
			me._showreel__vid.className='ggskin ggskin_video';
			var ggYoutubeMedia = media;
			var ggTimeParam = '';
			if (ggYoutubeMedia.indexOf('&') != -1) {
				ggTimeParam = 'start' + media.slice(ggYoutubeMedia.indexOf('&') + 2) + '&amp;';
				ggYoutubeMedia = ggYoutubeMedia.slice(0, ggYoutubeMedia.indexOf('&'));
			}
			var ggVideoParams = '?' + ggTimeParam + 'autoplay=1&amp;controls=1&amp;loop=1&amp;enablejsapi=1&amp;rel=0';
			var ggVideoUrl = 'https://www.youtube.com/embed/' + ggYoutubeMedia + ggVideoParams;
			me._showreel__vid.setAttribute('src', ggVideoUrl);
			me._showreel__vid.setAttribute('width', '100%');
			me._showreel__vid.setAttribute('height', '100%');
			me._showreel__vid.setAttribute('allow', 'autoplay');
			me._showreel__vid.setAttribute('allowfullscreen', 'true');
			me._showreel__vid.setAttribute('style', 'border:none; ; ;');
			me._showreel.appendChild(me._showreel__vid);
			me._showreel__vid.id = 'youtube-video';
			me._showreel.ggYoutubeApiReady = function() {
				me._showreel.ggApiPlayerType = 'youtube';
				me._showreel.ggApiPlayerReady = false;
				me._showreel.ggApiPlayer = new YT.Player('youtube-video', {
					events: {
						'onReady': function(event) {
							me._showreel.ggApiPlayerReady = true;
							if (player.getPlayerMuted()) me._showreel.ggApiPlayer.mute();
						},
						'onStateChange': function(event) {
							if (event.data == 0 && me._showreel.ggMediaEnded) {
								me._showreel.ggMediaEnded();
							}
							if (event.data == 1 && me._showreel.ggActivate) {
								me._showreel.ggActivate();
							}
							if ((event.data == 0 || event.data == 2) && me._showreel.ggDeactivate) {
								me._showreel.ggDeactivate();
							}
						}
					}
				});
				player.addListener('elementmuted', function(args) {
					if (args.id == 'Showreel' || args.id == '_all' || args.id == '_main') {
						if (args.state == 0) skin._showreel.ggApiPlayer.unMute();
						if (args.state == 1) skin._showreel.ggApiPlayer.mute();
						if (args.state == -1) { if (skin._showreel.ggApiPlayer.isMuted()) skin._showreel.ggApiPlayer.unMute(); else skin._showreel.ggApiPlayer.mute(); }
					}
				});
				player.addListener('elementvolume', function(args) {
					if (args.id == 'Showreel' || args.id == '_main') {
						if (args.type == 'set') skin._showreel.ggApiPlayer.setVolume(args.volume * 100);
						if (args.type == 'change') skin._showreel.ggApiPlayer.setVolume(skin._showreel.ggApiPlayer.getVolume() + args.volume * 100);
					}
				});
			}
			me._showreel.ggVideoSource = media;
			if (skin.ggYoutubeApiLoaded && skin.ggYoutubeApiLoaded == true) {me._showreel.ggYoutubeApiReady();}
		}
		el.ggId="Showreel";
		el.ggDx=0;
		el.ggDy=-1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_video ";
		el.ggType='video';
		hs ='';
		hs+='height : 633px;';
		hs+='left : calc(50% - ((1200px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((633px + 0px) / 2) - 1px);';
		hs+='visibility : inherit;';
		hs+='width : 1200px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._showreel.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._showreel.ggUpdatePosition=function (useTransition) {
		}
		me._showreel_c_.appendChild(me._showreel);
		el=me._sr_close_b=document.createElement('div');
		els=me._sr_close_b__img=document.createElement('img');
		els.className='ggskin ggskin_sr_close_b';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SR_Close_B";
		el.ggDx=0;
		el.ggDy=250;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 250px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr_close_b.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sr_close_b.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._showreel_c_.style.transition='none';
			} else {
				me._showreel_c_.style.transition='all 500ms ease-out 0ms';
			}
			me._showreel_c_.style.opacity='0';
			me._showreel_c_.style.visibility='hidden';
			me._showreel_c_.style.transition='none';
			me._showreel_c_.style.visibility='hidden';
			me._showreel_c_.ggVisible=false;
			me._left_bottom_corner_panel.style.transition='none';
			me._left_bottom_corner_panel.style.visibility=(Number(me._left_bottom_corner_panel.style.opacity)>0||!me._left_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._left_bottom_corner_panel.ggVisible=true;
			me._right_bottom_corner_panel.style.transition='none';
			me._right_bottom_corner_panel.style.visibility=(Number(me._right_bottom_corner_panel.style.opacity)>0||!me._right_bottom_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_bottom_corner_panel.ggVisible=true;
			me._right_top_corner_panel.style.transition='none';
			me._right_top_corner_panel.style.visibility=(Number(me._right_top_corner_panel.style.opacity)>0||!me._right_top_corner_panel.style.opacity)?'inherit':'hidden';
			me._right_top_corner_panel.ggVisible=true;
			if (me._showreel.ggApiPlayer) {
				if (me._showreel.ggApiPlayerType == 'youtube') {
					let youtubeMediaFunction = function() {
						me._showreel.ggApiPlayer.pauseVideo();
						me._showreel.ggApiPlayer.seekTo(0);
					};
					if (me._showreel.ggApiPlayerReady) {
						youtubeMediaFunction();
					} else {
						let youtubeApiInterval = setInterval(function() {
							if (me._showreel.ggApiPlayerReady) {
								clearInterval(youtubeApiInterval);
								youtubeMediaFunction();
							}
						}, 100);
					}
				} else if (me._showreel.ggApiPlayerType == 'vimeo') {
					me._showreel.ggApiPlayer.pause();
					me._showreel.ggApiPlayer.setCurrentTime(0);
				}
			} else {
				player.stopSound("Showreel");
			}
			if (player.transitionsDisabled) {
				me._sr_close_b.style.transition='none';
			} else {
				me._sr_close_b.style.transition='all 1000ms ease-out 0ms';
			}
			me._sr_close_b.ggParameter.rx=0;me._sr_close_b.ggParameter.ry=0;
			me._sr_close_b.style.transform=parameterToTransform(me._sr_close_b.ggParameter);
		}
		me._sr_close_b.onmouseenter=function (e) {
			me.elementMouseOver['sr_close_b']=true;
		}
		me._sr_close_b.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._sr_close_bg.style.transition='none';
			} else {
				me._sr_close_bg.style.transition='all 500ms ease-out 0ms';
			}
			me._sr_close_bg.style.opacity='0';
			me._sr_close_bg.style.visibility='hidden';
			me.elementMouseOver['sr_close_b']=false;
		}
		me._sr_close_b.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['sr_close_b']) {
				if (player.transitionsDisabled) {
					me._sr_close_bg.style.transition='none';
				} else {
					me._sr_close_bg.style.transition='all 500ms ease-out 0ms';
				}
				me._sr_close_bg.style.opacity='1';
				me._sr_close_bg.style.visibility=me._sr_close_bg.ggVisible?'inherit':'hidden';
			}
		}
		me._sr_close_b.ggUpdatePosition=function (useTransition) {
		}
		el=me._sr_close_bg=document.createElement('div');
		els=me._sr_close_bg__img=document.createElement('img');
		els.className='ggskin ggskin_sr_close_bg';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="SR_Close_BG";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='z-index: -2;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 60px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._sr_close_bg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._sr_close_bg.ggUpdatePosition=function (useTransition) {
		}
		me._sr_close_b.appendChild(me._sr_close_bg);
		me._showreel_c_.appendChild(me._sr_close_b);
		me.divSkin.appendChild(me._showreel_c_);
		me._right_top_corner_panel.logicBlock_alpha();
		me._mini_map.ggMarkerInstances=[];
		me._mini_map.ggLastNodeId=null;
		me._mini_map.ggSimpleFloorplanMarkerArray=[];
		me._mini_map.ggFloorplanWidth=0;
		me._mini_map.ggFloorplanHeight=0;
		me._mini_map__mapdiv=document.createElement('div');
		me._mini_map__mapdiv.className='ggskin ggskin_map';
		me._mini_map.appendChild(me._mini_map__mapdiv);
		me._mini_map__img=document.createElement('img');
		me._mini_map__img.className='ggskin ggskin_map';
		me._mini_map__mapdiv.appendChild(me._mini_map__img);
		me._mini_map.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._mini_map.clientWidth;
			var mapHeight = me._mini_map.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._mini_map.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._mini_map__img.setAttribute('src', imageFilename);
			me._mini_map__img.setAttribute('loading', 'lazy');
		me._mini_map__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._mini_map.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._mini_map.ggFloorplanHeight / 2 + 'px;width:' + me._mini_map.ggFloorplanWidth + 'px;height:' + me._mini_map.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._mini_map__img.setAttribute('style','width:' + me._mini_map.ggFloorplanWidth + 'px;height:' + me._mini_map.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._mini_map.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._mini_map.clientWidth / me._mini_map.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._mini_map.ggFloorplanHeight = me._mini_map.clientHeight;
				me._mini_map.ggFloorplanWidth = me._mini_map.ggFloorplanHeight * floorplanAR;
			} else {
				me._mini_map.ggFloorplanWidth = me._mini_map.clientWidth;
				me._mini_map.ggFloorplanHeight = me._mini_map.ggFloorplanWidth / floorplanAR;
			}
		}
		me._mini_map.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._mini_map.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._mini_map.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._mini_map.ggPermeableMap = true;
			} else {
				me._mini_map.ggPermeableMap = false;
			}
			me._mini_map.ggCalculateFloorplanSize(mapDetails);
			me._mini_map.ggShowSimpleFloorplan(mapDetails);
			me._mini_map.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._mini_map.ggMapNotLoaded = false;
		}
		me._mini_map.ggClearMap=function() {
			me._mini_map.ggClearMapMarkers();
			me._mini_map.ggMapNotLoaded = true;
		}
		me._mini_map.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._mini_map.ggMapId = mapId;
			if (!me._mini_map.ggMapNotLoaded) {
				me._mini_map.ggClearMap();
				me._mini_map.ggInitMap();
				me._mini_map.ggInitMapMarkers();
			}
		}
		me._mini_map.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._mini_map.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._mini_map.ggMapId);
					var xPos = (me._mini_map.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._mini_map.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._mini_map.ggHMarkerAnchorOffset;
					yPos -= me._mini_map.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._mini_map.style['z-index'] + 2;
				}
			}
		}
		me._mini_map.ggInitMapMarkers=function() {
			me._mini_map.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._mini_map.ggFilteredIds = [];
			if (me._mini_map.ggFilter != '') {
				var filter = me._mini_map.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._mini_map.ggFilteredIds.push(nodeId);
					}
				}
				if (me._mini_map.ggFilteredIds.length > 0) ids = me._mini_map.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._mini_map.ggMapId);
				if (coords.length>=2) {
					me._mini_map.ggHMarkerAnchorOffset = 12;
					me._mini_map.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._mini_map.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._mini_map.ggSimpleFloorplanMarkerArray[id] = marker;
					me._mini_map__mapdiv.appendChild(marker);
				}
			}
			me._mini_map.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._mini_map);
		}
		me._mini_map.ggClearMapMarkers=function() {
			for (id in me._mini_map.ggSimpleFloorplanMarkerArray) {
				if (me._mini_map.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._mini_map__mapdiv.removeChild(me._mini_map.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._mini_map.ggMarkerInstances=[];
			me._mini_map.ggSimpleFloorplanMarkerArray=[];
		}
		me.elementMouseOver['minimap_cb']=false;
		me._minimap_ch.logicBlock_visible();
		me._minimap_ch.logicBlock_alpha();
		me.elementMouseOver['room_name_p']=false;
		me._scrollarea_1f.logicBlock_position();
		me._scrollarea_1f.logicBlock_visible();
		me._scrollarea_1f.logicBlock_alpha();
		me._scrollarea_2f.logicBlock_position();
		me._scrollarea_2f.logicBlock_visible();
		me._scrollarea_2f.logicBlock_alpha();
		me._scrollarea_3f.logicBlock_position();
		me._scrollarea_3f.logicBlock_visible();
		me._scrollarea_3f.logicBlock_alpha();
		me._rooms_h.logicBlock_visible();
		me._rooms_h.logicBlock_alpha();
		me.elementMouseOver['floorplan_b']=false;
		me._floor_plans_.logicBlock_alpha();
		me.elementMouseOver['floors_b']=false;
		me._floors_h.logicBlock_visible();
		me._floors_h.logicBlock_alpha();
		me._floors_p.logicBlock_position();
		me._floors_p.logicBlock_alpha();
		me.elementMouseOver['minimap_b']=false;
		me._minimap_h.logicBlock_visible();
		me._minimap_h.logicBlock_alpha();
		me.elementMouseOver['fullscreen_off_b']=false;
		me._f_bg_1.logicBlock_alpha();
		me._exit_fullscreen_h.logicBlock_alpha();
		me.elementMouseOver['fullscreen_b']=false;
		me._f_bg.logicBlock_alpha();
		me._fullscreen_h.logicBlock_alpha();
		me._interior_b.logicBlock_visible();
		me.elementMouseOver['interior_b']=false;
		me._interior_h.logicBlock_alpha();
		me._extrerior_b.logicBlock_visible();
		me.elementMouseOver['extrerior_b']=false;
		me._exterior_h.logicBlock_alpha();
		me.elementMouseOver['guide_b']=false;
		me._g_bg.logicBlock_alpha();
		me._guide_h.logicBlock_alpha();
		me.elementMouseOver['hide_o_b']=false;
		me._h_bg_1.logicBlock_alpha();
		me._hide_o_h.logicBlock_alpha();
		me.elementMouseOver['showreel_b']=false;
		me._s_bg.logicBlock_alpha();
		me._showreel_h.logicBlock_alpha();
		me.elementMouseOver['left_bottom_view_icon_panel']=false;
		me._v_bg_1.logicBlock_alpha();
		me._view_o_h.logicBlock_alpha();
		me._floorplans.ggMarkerInstances=[];
		me._floorplans.ggLastNodeId=null;
		me._floorplans.ggSimpleFloorplanMarkerArray=[];
		me._floorplans.ggFloorplanWidth=0;
		me._floorplans.ggFloorplanHeight=0;
		me._floorplans__mapdiv=document.createElement('div');
		me._floorplans__mapdiv.className='ggskin ggskin_map';
		me._floorplans.appendChild(me._floorplans__mapdiv);
		me._floorplans__img=document.createElement('img');
		me._floorplans__img.className='ggskin ggskin_map';
		me._floorplans__mapdiv.appendChild(me._floorplans__img);
		me._floorplans.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._floorplans.clientWidth;
			var mapHeight = me._floorplans.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._floorplans.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._floorplans__img.setAttribute('src', imageFilename);
			me._floorplans__img.setAttribute('loading', 'lazy');
		me._floorplans__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._floorplans.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._floorplans.ggFloorplanHeight / 2 + 'px;width:' + me._floorplans.ggFloorplanWidth + 'px;height:' + me._floorplans.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._floorplans__img.setAttribute('style','width:' + me._floorplans.ggFloorplanWidth + 'px;height:' + me._floorplans.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._floorplans.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._floorplans.clientWidth / me._floorplans.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._floorplans.ggFloorplanHeight = me._floorplans.clientHeight;
				me._floorplans.ggFloorplanWidth = me._floorplans.ggFloorplanHeight * floorplanAR;
			} else {
				me._floorplans.ggFloorplanWidth = me._floorplans.clientWidth;
				me._floorplans.ggFloorplanHeight = me._floorplans.ggFloorplanWidth / floorplanAR;
			}
		}
		me._floorplans.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._floorplans.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._floorplans.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._floorplans.ggPermeableMap = true;
			} else {
				me._floorplans.ggPermeableMap = false;
			}
			me._floorplans.ggCalculateFloorplanSize(mapDetails);
			me._floorplans.ggShowSimpleFloorplan(mapDetails);
			me._floorplans.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._floorplans.ggMapNotLoaded = false;
		}
		me._floorplans.ggClearMap=function() {
			me._floorplans.ggClearMapMarkers();
			me._floorplans.ggMapNotLoaded = true;
		}
		me._floorplans.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._floorplans.ggMapId = mapId;
			if (!me._floorplans.ggMapNotLoaded) {
				me._floorplans.ggClearMap();
				me._floorplans.ggInitMap();
				me._floorplans.ggInitMapMarkers();
			}
		}
		me._floorplans.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._floorplans.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._floorplans.ggMapId);
					var xPos = (me._floorplans.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._floorplans.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._floorplans.ggHMarkerAnchorOffset;
					yPos -= me._floorplans.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._floorplans.style['z-index'] + 2;
				}
			}
		}
		me._floorplans.ggInitMapMarkers=function() {
			me._floorplans.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._floorplans.ggFilteredIds = [];
			if (me._floorplans.ggFilter != '') {
				var filter = me._floorplans.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._floorplans.ggFilteredIds.push(nodeId);
					}
				}
				if (me._floorplans.ggFilteredIds.length > 0) ids = me._floorplans.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._floorplans.ggMapId);
				if (coords.length>=2) {
					me._floorplans.ggHMarkerAnchorOffset = 12;
					me._floorplans.ggVMarkerAnchorOffset = 20;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_map_pin_Class(me, markerParent);
					me._floorplans.ggMarkerInstances.push(markerClass);
					var marker = markerClass._map_pin;
					me._floorplans.ggSimpleFloorplanMarkerArray[id] = marker;
					me._floorplans__mapdiv.appendChild(marker);
				}
			}
			me._floorplans.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._floorplans);
		}
		me._floorplans.ggClearMapMarkers=function() {
			for (id in me._floorplans.ggSimpleFloorplanMarkerArray) {
				if (me._floorplans.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._floorplans__mapdiv.removeChild(me._floorplans.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._floorplans.ggMarkerInstances=[];
			me._floorplans.ggSimpleFloorplanMarkerArray=[];
		}
		me._floorswitch_01.logicBlock_scaling();
		me._floorswitch_01.logicBlock_alpha();
		me._floorswitch_02.logicBlock_scaling();
		me._floorswitch_02.logicBlock_alpha();
		me._floorswitch_03.logicBlock_scaling();
		me._floorswitch_03.logicBlock_alpha();
		me.__1st_floornames.logicBlock_visible();
		me.__2nd_floornames.logicBlock_visible();
		me.__3rd_floornames.logicBlock_visible();
		me._mouse_qg.logicBlock_visible();
		me._laptop_qg.logicBlock_visible();
		me._mobile_qg.logicBlock_visible();
		me._left_02.logicBlock_visible();
		me._left_01.logicBlock_visible();
		me._right_02.logicBlock_visible();
		me._right_01.logicBlock_visible();
		me._showreel.ggInitMedia('2VAEA3BOuN4&si=DFLYb_aYKYc-bsp0');
		me.elementMouseOver['sr_close_b']=false;
		player.addListener('changenode', function(event) {
			me._right_top_corner_panel.logicBlock_alpha();
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._mini_map.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._mini_map.ggCalculateFloorplanSize(mapDetails);
				me._mini_map.ggShowSimpleFloorplan(mapDetails);
				me._mini_map.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._mini_map.ggLastNodeId) {
				var lastActiveMarker = me._mini_map.ggSimpleFloorplanMarkerArray[me._mini_map.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._mini_map.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._mini_map.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._mini_map.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._mini_map.ggChangeMap(mapId);
					}
				}
			}
			me._mini_map.ggLastNodeId = id;
			me._scrollarea_1f.logicBlock_position();
			me._scrollarea_1f.logicBlock_visible();
			me._scrollarea_1f.logicBlock_alpha();
			me._scrollarea_2f.logicBlock_position();
			me._scrollarea_2f.logicBlock_visible();
			me._scrollarea_2f.logicBlock_alpha();
			me._scrollarea_3f.logicBlock_position();
			me._scrollarea_3f.logicBlock_visible();
			me._scrollarea_3f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._floors_p.logicBlock_position();
			me._floors_p.logicBlock_alpha();
			me._minimap_h.logicBlock_visible();
			me._interior_b.logicBlock_visible();
			me._extrerior_b.logicBlock_visible();
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_changenode();
			}
			var mapDetails = player.getMapDetails(me._floorplans.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._floorplans.ggCalculateFloorplanSize(mapDetails);
				me._floorplans.ggShowSimpleFloorplan(mapDetails);
				me._floorplans.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._floorplans.ggLastNodeId) {
				var lastActiveMarker = me._floorplans.ggSimpleFloorplanMarkerArray[me._floorplans.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._floorplans.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._floorplans.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._floorplans.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._floorplans.ggChangeMap(mapId);
					}
				}
			}
			me._floorplans.ggLastNodeId = id;
			me._floorswitch_01.logicBlock_scaling();
			me._floorswitch_01.logicBlock_alpha();
			me._floorswitch_02.logicBlock_scaling();
			me._floorswitch_02.logicBlock_alpha();
			me._floorswitch_03.logicBlock_scaling();
			me._floorswitch_03.logicBlock_alpha();
			me.__1st_floornames.logicBlock_visible();
			me.__2nd_floornames.logicBlock_visible();
			me.__3rd_floornames.logicBlock_visible();
			me._mouse_qg.logicBlock_visible();
			me._laptop_qg.logicBlock_visible();
			me._mobile_qg.logicBlock_visible();
			me._left_02.logicBlock_visible();
			me._left_01.logicBlock_visible();
			me._right_02.logicBlock_visible();
			me._right_01.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._mini_map.ggClearMap();
			me._mini_map.ggInitMap(false);
			me._mini_map.ggInitMapMarkers(true);
			me._scrollarea_1f.ggUpdatePosition();
			me._scrollarea_1f.logicBlock_position();
			me._scrollarea_1f.logicBlock_alpha();
			me._scrollarea_2f.ggUpdatePosition();
			me._scrollarea_2f.logicBlock_position();
			me._scrollarea_2f.logicBlock_alpha();
			me._scrollarea_3f.ggUpdatePosition();
			me._scrollarea_3f.logicBlock_position();
			me._scrollarea_3f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._floors_p.logicBlock_position();
			me._floors_p.logicBlock_alpha();
			me._minimap_h.logicBlock_visible();
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_configloaded();
			}
			me._floorplans.ggClearMap();
			me._floorplans.ggInitMap(false);
			me._floorplans.ggInitMapMarkers(true);
			me._mouse_qg.logicBlock_visible();
			me._laptop_qg.logicBlock_visible();
			me._mobile_qg.logicBlock_visible();
			me._left_02.logicBlock_visible();
			me._left_01.logicBlock_visible();
			me._right_02.logicBlock_visible();
			me._right_01.logicBlock_visible();
		});
		player.addListener('hastouch', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_hastouch();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_hastouch();
			}
		});
		player.addListener('positionchanged', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_positionchanged();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_positionchanged();
			}
		});
		player.addListener('sizechanged', function(event) {
			me._mouse_qg.logicBlock_visible();
			me._right_01.logicBlock_visible();
		});
		player.addListener('varchanged_Floor_Visibility', function(event) {
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._floors_p.logicBlock_position();
			me._floors_p.logicBlock_alpha();
		});
		player.addListener('varchanged_Map_Pin_Normal_E', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_Normal_E();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_Normal_E();
			}
		});
		player.addListener('varchanged_Map_Pin_active_E', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_active_E();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_varchanged_Map_Pin_active_E();
			}
		});
		player.addListener('varchanged_Room_visibility_1F', function(event) {
			me._scrollarea_1f.logicBlock_position();
			me._scrollarea_1f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._minimap_h.logicBlock_visible();
		});
		player.addListener('varchanged_Room_visibility_2F', function(event) {
			me._scrollarea_2f.logicBlock_position();
			me._scrollarea_2f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._minimap_h.logicBlock_visible();
		});
		player.addListener('varchanged_Room_visibility_3F', function(event) {
			me._scrollarea_3f.logicBlock_position();
			me._scrollarea_3f.logicBlock_alpha();
			me._rooms_h.logicBlock_visible();
			me._floors_h.logicBlock_visible();
			me._minimap_h.logicBlock_visible();
		});
		player.addListener('varchanged_SlideShow_QG', function(event) {
			me._mouse_qg.logicBlock_visible();
			me._laptop_qg.logicBlock_visible();
			me._mobile_qg.logicBlock_visible();
			me._left_02.logicBlock_visible();
			me._left_01.logicBlock_visible();
			me._right_02.logicBlock_visible();
			me._right_01.logicBlock_visible();
		});
		player.addListener('varchanged_map_T_Active', function(event) {
			for (var i=0; i < me._mini_map.ggMarkerInstances.length; i++) {
				me._mini_map.ggMarkerInstances[i].ggEvent_varchanged_map_T_Active();
			}
			for (var i=0; i < me._floorplans.ggMarkerInstances.length; i++) {
				me._floorplans.ggMarkerInstances[i].ggEvent_varchanged_map_T_Active();
			}
		});
		player.addListener('viewerinit', function(event) {
			me._cloner_1f.ggUpdate();
			me._cloner_2f.ggUpdate();
			me._cloner_3f.ggUpdate();
		});
	};
	function SkinCloner_cloner_3f_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__3f_roomlist=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__3f_roomlist;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__3f_roomlist__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="3F_Roomlist";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__3f_roomlist.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__3f_roomlist.ggUpdateText();
		el.appendChild(els);
		me.__3f_roomlist.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3f_roomlist.onclick=function (e) {
			if (me.__3f_roomlist.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__3f_roomlist.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__3f_roomlist);
	};
	function SkinCloner_cloner_2f_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__2f_roomlist=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__2f_roomlist;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__2f_roomlist__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="2F_Roomlist";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__2f_roomlist.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__2f_roomlist.ggUpdateText();
		el.appendChild(els);
		me.__2f_roomlist.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2f_roomlist.onclick=function (e) {
			if (me.__2f_roomlist.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__2f_roomlist.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__2f_roomlist);
	};
	function SkinCloner_cloner_1f_Class(nodeId, parentScope, ggParent, parameter) {
		var me=this;
		var hs='';
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		me.findElements=skin.findElements;
		me.ggIndex=parameter.index;
		me.ggNodeId=nodeId;
		me.ggTitle=parameter.title;
		me.ggUserdata=skin.player.getNodeUserdata(me.ggNodeId);
		me.ggUserdata.nodeid=me.ggNodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
			me.__div=document.createElement('div');
			me.__div.setAttribute('style','visibility: inherit; overflow: visible;');
			me.__div.style.position='absolute';
			me.__div.style.left=parameter.left;
			me.__div.style.top=parameter.top;
			me.__div.style.width='';
			me.__div.style.height='';
			me.__div.style.width=parameter.width;
			me.__div.style.height=parameter.height;
			me.__div.ggIsActive = function() {
				return player.getCurrentNode()==me.ggNodeId;
			}
			me.__div.ggElementNodeId=function() {
				return me.ggNodeId;
			}
		el=me.__1f_roomlist=document.createElement('div');
		el.isDragging = function() {
			let scrollerParent = me.__1f_roomlist;
			while ((scrollerParent = scrollerParent.parentNode) != null) {
				if (scrollerParent.hasOwnProperty('ggIsDragging') && scrollerParent.ggIsDragging == true) return true;
			}
			return false;
		}
		els=me.__1f_roomlist__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="1F_Roomlist";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='z-index: 0;';
		hs+='border : 0px solid #000000;';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : pointer;';
		hs+='height : 35px;';
		hs+='left : calc(50% - ((148px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 148px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='font-size: 14px;';
		hs+='font-weight: 600;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me.__1f_roomlist.ggUpdateText=function() {
			var params = [];
			params.push(player._(String(me.ggUserdata.title)));
			var hs = player._("%1\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me.__1f_roomlist.ggUpdateText();
		el.appendChild(els);
		me.__1f_roomlist.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1f_roomlist.onclick=function (e) {
			if (me.__1f_roomlist.isDragging()) return;
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me.__1f_roomlist.ggUpdatePosition=function (useTransition) {
		}
		me.__div.appendChild(me.__1f_roomlist);
	};
	function SkinElement_map_pin_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._map_pin=document.createElement('div');
		el.ggId="map_pin";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : calc(50% - ((24px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((41px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin.onclick=function (e) {
			if (
				(
					((me._map_pin.ggIsActive() == false))
				)
			) {
				player.openNext("{"+me.ggNodeId+"}","");
			}
		}
		me._map_pin.onmouseenter=function (e) {
			me.elementMouseOver['map_pin']=true;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.onmouseleave=function (e) {
			me.elementMouseOver['map_pin']=false;
			me._map_pin_tt.logicBlock_alpha();
		}
		me._map_pin.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_pin_active=document.createElement('div');
		els=me._map_pin_active__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_active';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_active";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: -1;';
		hs+='cursor : pointer;';
		hs+='height : 75px;';
		hs+='left : calc(50% - ((75px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((75px + 0px) / 2) + 0px);';
		hs+='visibility : hidden;';
		hs+='width : 75px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_active.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_active.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('Map_Pin_active_E') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('Map_Pin_active_E') == false))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_active.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateScaling == 0) {
					me._map_pin_active.ggParameter.sx = 2;
					me._map_pin_active.ggParameter.sy = 2;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
				else if (me._map_pin_active.ggCurrentLogicStateScaling == 1) {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
				else {
					me._map_pin_active.ggParameter.sx = 1;
					me._map_pin_active.ggParameter.sy = 1;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
					skin.updateSize(me._map_pin_active);
				}
			}
		}
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_angle = function() {
			var newLogicStateAngle;
			if (
				((player.getPanN() == 0))
			)
			{
				newLogicStateAngle = 0;
			}
			else {
				newLogicStateAngle = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAngle != newLogicStateAngle) {
				me._map_pin_active.ggCurrentLogicStateAngle = newLogicStateAngle;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAngle == 0) {
					me._map_pin_active.ggParameter.a = 0;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
				}
				else {
					me._map_pin_active.ggParameter.a = 0;
					me._map_pin_active.style.transform=parameterToTransform(me._map_pin_active.ggParameter);
				}
			}
		}
		me._map_pin_active.logicBlock_angle();
		me._map_pin_active.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_active.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_active.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_active.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_active.style.transition='transform 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_active.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_active.style.visibility=me._map_pin_active.ggVisible?'inherit':'hidden';
					me._map_pin_active.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_active.style.opacity == 0.0) { me._map_pin_active.style.visibility="hidden"; } }, 505);
					me._map_pin_active.style.opacity=0;
				}
			}
		}
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_active.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_active);
		el=me._map_pin_normal=document.createElement('div');
		els=me._map_pin_normal__img=document.createElement('img');
		els.className='ggskin ggskin_map_pin_normal';
		hs=basePath + 'images/map_pin_normal.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="map_pin_normal";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='z-index: 1;';
		hs+='cursor : pointer;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_pin_normal.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_normal.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((me.elementMouseOver['map_pin_normal'] == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('Map_Pin_Normal_E') == true))
			)
			{
				newLogicStateScaling = 1;
			}
			else if (
				((player.getVariableValue('Map_Pin_Normal_E') == false))
			)
			{
				newLogicStateScaling = 2;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_normal.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_normal.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateScaling == 0) {
					me._map_pin_normal.ggParameter.sx = 1.5;
					me._map_pin_normal.ggParameter.sy = 1.5;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateScaling == 1) {
					me._map_pin_normal.ggParameter.sx = 2;
					me._map_pin_normal.ggParameter.sy = 2;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					skin.updateSize(me._map_pin_normal);
				}
				else if (me._map_pin_normal.ggCurrentLogicStateScaling == 2) {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					skin.updateSize(me._map_pin_normal);
				}
				else {
					me._map_pin_normal.ggParameter.sx = 1;
					me._map_pin_normal.ggParameter.sy = 1;
					me._map_pin_normal.style.transform=parameterToTransform(me._map_pin_normal.ggParameter);
					skin.updateSize(me._map_pin_normal);
				}
			}
		}
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me._map_pin_normal.ggIsActive() == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_normal.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_normal.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_normal.style.transition='transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_normal.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._map_pin_normal.style.opacity == 0.0) { me._map_pin_normal.style.visibility="hidden"; } }, 505);
					me._map_pin_normal.style.opacity=0;
				}
				else {
					me._map_pin_normal.style.visibility=me._map_pin_normal.ggVisible?'inherit':'hidden';
					me._map_pin_normal.style.opacity=1;
				}
			}
		}
		me._map_pin_normal.logicBlock_alpha();
		me._map_pin_normal.onmouseenter=function (e) {
			me.elementMouseOver['map_pin_normal']=true;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.onmouseleave=function (e) {
			me.elementMouseOver['map_pin_normal']=false;
			me._map_pin_normal.logicBlock_scaling();
		}
		me._map_pin_normal.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_normal);
		el=me._map_pin_tt=document.createElement('div');
		els=me._map_pin_tt__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="map_pin_tt";
		el.ggDx=0;
		el.ggDy=38;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=false;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 38px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='pointer-events: none;';
		hs+='background : rgba(0,0,0,0.392157);';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 5px;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 4px 6px 4px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._map_pin_tt.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._map_pin_tt.ggUpdateText();
		player.addListener('changenode', function() {
			me._map_pin_tt.ggUpdateText();
		});
		el.appendChild(els);
		me._map_pin_tt.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._map_pin_tt.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._map_pin_tt.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStatePosition == 0) {
					me._map_pin_tt.style.left = 'calc(50% - (0px / 2))';
					me._map_pin_tt.style.top = 'calc(50% - (0px / 2) - (0px / 2) + -38px)';
				}
				else {
					me._map_pin_tt.style.left='calc(50% - ((0px + 0px) / 2) + 0px)';
					me._map_pin_tt.style.top='calc(50% - ((0px + 0px) / 2) + 38px)';
				}
			}
		}
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('map_T_Active') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else if (
				((player.getVariableValue('map_T_Active') == false))
			)
			{
				newLogicStateScaling = 1;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._map_pin_tt.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateScaling == 0) {
					me._map_pin_tt.ggParameter.sx = 1.5;
					me._map_pin_tt.ggParameter.sy = 1.5;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
				else if (me._map_pin_tt.ggCurrentLogicStateScaling == 1) {
					me._map_pin_tt.ggParameter.sx = 0;
					me._map_pin_tt.ggParameter.sy = 0;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
				else {
					me._map_pin_tt.ggParameter.sx = 1;
					me._map_pin_tt.ggParameter.sy = 1;
					me._map_pin_tt.style.transform=parameterToTransform(me._map_pin_tt.ggParameter);
					skin.updateSize(me._map_pin_tt);
				}
			}
		}
		me._map_pin_tt.logicBlock_scaling();
		me._map_pin_tt.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('map_T_Active') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else if (
				((player.getVariableValue('map_T_Active') == false))
			)
			{
				newLogicStateVisible = 1;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._map_pin_tt.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateVisible == 0) {
					me._map_pin_tt.style.visibility=(Number(me._map_pin_tt.style.opacity)>0||!me._map_pin_tt.style.opacity)?'inherit':'hidden';
					me._map_pin_tt.ggVisible=true;
				}
				else if (me._map_pin_tt.ggCurrentLogicStateVisible == 1) {
					me._map_pin_tt.style.visibility="hidden";
					me._map_pin_tt.ggVisible=false;
				}
				else {
					me._map_pin_tt.style.visibility="hidden";
					me._map_pin_tt.ggVisible=false;
				}
			}
		}
		me._map_pin_tt.logicBlock_visible();
		me._map_pin_tt.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['map_pin'] == true)) && 
				((player._(me.ggUserdata.title) != ""))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._map_pin_tt.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._map_pin_tt.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._map_pin_tt.style.transition='left 0s, top 0s, transform 0s, opacity 500ms ease 0ms';
				if (me._map_pin_tt.ggCurrentLogicStateAlpha == 0) {
					me._map_pin_tt.style.visibility=me._map_pin_tt.ggVisible?'inherit':'hidden';
					me._map_pin_tt.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._map_pin_tt.style.opacity == 0.0) { me._map_pin_tt.style.visibility="hidden"; } }, 505);
					me._map_pin_tt.style.opacity=0;
				}
			}
		}
		me._map_pin_tt.logicBlock_alpha();
		me._map_pin_tt.ggUpdatePosition=function (useTransition) {
		}
		me._map_pin.appendChild(me._map_pin_tt);
		me.elementMouseOver['map_pin']=false;
		me._map_pin_active.logicBlock_scaling();
		me._map_pin_active.logicBlock_angle();
		me._map_pin_active.logicBlock_alpha();
		me._map_pin_normal.logicBlock_scaling();
		me._map_pin_normal.logicBlock_alpha();
		me.elementMouseOver['map_pin_normal']=false;
		me._map_pin_tt.logicBlock_position();
		me._map_pin_tt.logicBlock_scaling();
		me._map_pin_tt.logicBlock_visible();
		me._map_pin_tt.logicBlock_alpha();
			me.ggEvent_activehotspotchanged=function() {
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_changenode=function() {
				me._map_pin_active.logicBlock_scaling();
				me._map_pin_active.logicBlock_alpha();
				me._map_pin_normal.logicBlock_scaling();
				me._map_pin_normal.logicBlock_alpha();
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_configloaded=function() {
				me._map_pin_active.logicBlock_scaling();
				me._map_pin_normal.logicBlock_scaling();
				me._map_pin_tt.logicBlock_position();
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
				me._map_pin_tt.logicBlock_alpha();
			};
			me.ggEvent_hastouch=function() {
				me._map_pin_tt.logicBlock_position();
			};
			me.ggEvent_positionchanged=function() {
				me._map_pin_active.logicBlock_angle();
			};
			me.ggEvent_varchanged_Map_Pin_Normal_E=function() {
				me._map_pin_normal.logicBlock_scaling();
			};
			me.ggEvent_varchanged_Map_Pin_active_E=function() {
				me._map_pin_active.logicBlock_scaling();
			};
			me.ggEvent_varchanged_map_T_Active=function() {
				me._map_pin_tt.logicBlock_scaling();
				me._map_pin_tt.logicBlock_visible();
			};
	player.addListener('timer', function() { var hs='';
if (me._map_pin_active.ggParameter) {
	hs+=parameterToTransform(me._map_pin_active.ggParameter) + ' ';
}
hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
me._map_pin_active.style.transform=hs; });
	};
	function SkinHotspotClass_ht_node_turn(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_turn=document.createElement('div');
		el.ggId="ht_node_Turn";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_turn.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_turn.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			if (
				(
					((me.ggUserdata.tags.indexOf("Turn") != -1))
				)
			) {
				player.moveToDefaultViewEx(1,0);
			}
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_turn.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_turn.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_turn']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_turn.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_turn']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_turn.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot.style.transition='opacity 0s';
				if (me._hotspot.ggCurrentLogicStateAlpha == 0) {
					me._hotspot.style.visibility=me._hotspot.ggVisible?'inherit':'hidden';
					me._hotspot.style.opacity=1;
				}
				else {
					me._hotspot.style.visibility=me._hotspot.ggVisible?'inherit':'hidden';
					me._hotspot.style.opacity=0.5;
				}
			}
		}
		me._hotspot.logicBlock_alpha();
		me._hotspot.onmouseenter=function (e) {
			me.elementMouseOver['hotspot']=true;
			me._hotspot.logicBlock_alpha();
		}
		me._hotspot.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name.style.transition='none';
			} else {
				me._hotspot_name.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name.style.opacity='0';
			me._hotspot_name.style.visibility='hidden';
			me.elementMouseOver['hotspot']=false;
			me._hotspot.logicBlock_alpha();
		}
		me._hotspot.ggCurrentLogicStateAlpha = -1;
		me._hotspot.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot']) {
				if (player.transitionsDisabled) {
					me._hotspot_name.style.transition='none';
				} else {
					me._hotspot_name.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name.style.opacity='1';
				me._hotspot_name.style.visibility=me._hotspot_name.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle.style.width='50px';
					me._hotspot_outcircle.style.height='50px';
					me._hotspot_outcircle.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle);}, 250);
				}
				else {
					me._hotspot_outcircle.style.width='40px';
					me._hotspot_outcircle.style.height='40px';
					me._hotspot_outcircle.style.left = 'calc(50% - (40px / 2) - (6px / 2))';
					me._hotspot_outcircle.style.top = 'calc(50% - (40px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle);}, 250);
				}
			}
		}
		me._hotspot_outcircle.logicBlock_size();
		me._hotspot_outcircle.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle.style.visibility=me._hotspot_outcircle.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle.style.opacity=1;
				}
				else {
					me._hotspot_outcircle.style.visibility=me._hotspot_outcircle.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle.logicBlock_alpha();
		me._hotspot_outcircle.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle']=true;
			me._hotspot_outcircle.logicBlock_size();
			me._hotspot_outcircle.logicBlock_alpha();
		}
		me._hotspot_outcircle.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle']=false;
			me._hotspot_outcircle.logicBlock_size();
			me._hotspot_outcircle.logicBlock_alpha();
		}
		me._hotspot_outcircle.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot.appendChild(me._hotspot_outcircle);
		me._ht_node_turn.appendChild(me._hotspot);
		el=me._hotspot_name=document.createElement('div');
		els=me._hotspot_name__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_turn.appendChild(me._hotspot_name);
		me.elementMouseOver['ht_node_turn']=false;
		me._hotspot.logicBlock_alpha();
		me.elementMouseOver['hotspot']=false;
		me._hotspot_outcircle.logicBlock_size();
		me._hotspot_outcircle.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle']=false;
		me.ggUse3d=true;
		me.gg3dDistance=1000;
			me.hotspotTimerEvent=function() {
				me._hotspot.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_turn;
	};
	function SkinHotspotClass_ht_node_270(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_270=document.createElement('div');
		el.ggId="ht_node_270";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_270.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_270.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.moveTo("270","0","100","1.0000");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_270.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_270.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_270']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_270.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_270']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_270.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot0=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot0.style.transition='opacity 0s';
				if (me._hotspot0.ggCurrentLogicStateAlpha == 0) {
					me._hotspot0.style.visibility=me._hotspot0.ggVisible?'inherit':'hidden';
					me._hotspot0.style.opacity=1;
				}
				else {
					me._hotspot0.style.visibility=me._hotspot0.ggVisible?'inherit':'hidden';
					me._hotspot0.style.opacity=0.5;
				}
			}
		}
		me._hotspot0.logicBlock_alpha();
		me._hotspot0.onmouseenter=function (e) {
			me.elementMouseOver['hotspot0']=true;
			me._hotspot0.logicBlock_alpha();
		}
		me._hotspot0.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name0.style.transition='none';
			} else {
				me._hotspot_name0.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name0.style.opacity='0';
			me._hotspot_name0.style.visibility='hidden';
			me.elementMouseOver['hotspot0']=false;
			me._hotspot0.logicBlock_alpha();
		}
		me._hotspot0.ggCurrentLogicStateAlpha = -1;
		me._hotspot0.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot0']) {
				if (player.transitionsDisabled) {
					me._hotspot_name0.style.transition='none';
				} else {
					me._hotspot_name0.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name0.style.opacity='1';
				me._hotspot_name0.style.visibility=me._hotspot_name0.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot0.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle0=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle0.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle0'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle0.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle0.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle0.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle0.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle0.style.width='50px';
					me._hotspot_outcircle0.style.height='50px';
					me._hotspot_outcircle0.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle0.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle0);}, 250);
				}
				else {
					me._hotspot_outcircle0.style.width='40px';
					me._hotspot_outcircle0.style.height='40px';
					me._hotspot_outcircle0.style.left = 'calc(50% - (40px / 2) - (6px / 2))';
					me._hotspot_outcircle0.style.top = 'calc(50% - (40px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle0);}, 250);
				}
			}
		}
		me._hotspot_outcircle0.logicBlock_size();
		me._hotspot_outcircle0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle0.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle0.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle0.style.visibility=me._hotspot_outcircle0.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle0.style.opacity=1;
				}
				else {
					me._hotspot_outcircle0.style.visibility=me._hotspot_outcircle0.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle0.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle0.logicBlock_alpha();
		me._hotspot_outcircle0.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle0']=true;
			me._hotspot_outcircle0.logicBlock_size();
			me._hotspot_outcircle0.logicBlock_alpha();
		}
		me._hotspot_outcircle0.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle0']=false;
			me._hotspot_outcircle0.logicBlock_size();
			me._hotspot_outcircle0.logicBlock_alpha();
		}
		me._hotspot_outcircle0.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot0.appendChild(me._hotspot_outcircle0);
		me._ht_node_270.appendChild(me._hotspot0);
		el=me._hotspot_name0=document.createElement('div');
		els=me._hotspot_name0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name0.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name0.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name0.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name0.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_270.appendChild(me._hotspot_name0);
		me.elementMouseOver['ht_node_270']=false;
		me._hotspot0.logicBlock_alpha();
		me.elementMouseOver['hotspot0']=false;
		me._hotspot_outcircle0.logicBlock_size();
		me._hotspot_outcircle0.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle0']=false;
		me.ggUse3d=true;
		me.gg3dDistance=1000;
			me.hotspotTimerEvent=function() {
				me._hotspot0.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_270;
	};
	function SkinHotspotClass_ht_node_180(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_180=document.createElement('div');
		el.ggId="ht_node_180";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_180.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_180.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.moveTo("180","0","100","1.0000");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_180.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_180.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_180']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_180.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_180']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_180.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot1=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot1.style.transition='opacity 0s';
				if (me._hotspot1.ggCurrentLogicStateAlpha == 0) {
					me._hotspot1.style.visibility=me._hotspot1.ggVisible?'inherit':'hidden';
					me._hotspot1.style.opacity=1;
				}
				else {
					me._hotspot1.style.visibility=me._hotspot1.ggVisible?'inherit':'hidden';
					me._hotspot1.style.opacity=0.5;
				}
			}
		}
		me._hotspot1.logicBlock_alpha();
		me._hotspot1.onmouseenter=function (e) {
			me.elementMouseOver['hotspot1']=true;
			me._hotspot1.logicBlock_alpha();
		}
		me._hotspot1.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name1.style.transition='none';
			} else {
				me._hotspot_name1.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name1.style.opacity='0';
			me._hotspot_name1.style.visibility='hidden';
			me.elementMouseOver['hotspot1']=false;
			me._hotspot1.logicBlock_alpha();
		}
		me._hotspot1.ggCurrentLogicStateAlpha = -1;
		me._hotspot1.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot1']) {
				if (player.transitionsDisabled) {
					me._hotspot_name1.style.transition='none';
				} else {
					me._hotspot_name1.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name1.style.opacity='1';
				me._hotspot_name1.style.visibility=me._hotspot_name1.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot1.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle1=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle1.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle1'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle1.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle1.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle1.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle1.style.width='50px';
					me._hotspot_outcircle1.style.height='50px';
					me._hotspot_outcircle1.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle1.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle1);}, 250);
				}
				else {
					me._hotspot_outcircle1.style.width='40px';
					me._hotspot_outcircle1.style.height='40px';
					me._hotspot_outcircle1.style.left = 'calc(50% - (40px / 2) - (6px / 2))';
					me._hotspot_outcircle1.style.top = 'calc(50% - (40px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle1);}, 250);
				}
			}
		}
		me._hotspot_outcircle1.logicBlock_size();
		me._hotspot_outcircle1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle1'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle1.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle1.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle1.style.visibility=me._hotspot_outcircle1.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle1.style.opacity=1;
				}
				else {
					me._hotspot_outcircle1.style.visibility=me._hotspot_outcircle1.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle1.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle1.logicBlock_alpha();
		me._hotspot_outcircle1.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle1']=true;
			me._hotspot_outcircle1.logicBlock_size();
			me._hotspot_outcircle1.logicBlock_alpha();
		}
		me._hotspot_outcircle1.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle1']=false;
			me._hotspot_outcircle1.logicBlock_size();
			me._hotspot_outcircle1.logicBlock_alpha();
		}
		me._hotspot_outcircle1.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot1.appendChild(me._hotspot_outcircle1);
		me._ht_node_180.appendChild(me._hotspot1);
		el=me._hotspot_name1=document.createElement('div');
		els=me._hotspot_name1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name1.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name1.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name1.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_180.appendChild(me._hotspot_name1);
		me.elementMouseOver['ht_node_180']=false;
		me._hotspot1.logicBlock_alpha();
		me.elementMouseOver['hotspot1']=false;
		me._hotspot_outcircle1.logicBlock_size();
		me._hotspot_outcircle1.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle1']=false;
		me.ggUse3d=true;
		me.gg3dDistance=1000;
			me.hotspotTimerEvent=function() {
				me._hotspot1.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_180;
	};
	function SkinHotspotClass_ht_node_90(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_90=document.createElement('div');
		el.ggId="ht_node_90";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_90.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_90.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.moveTo("90","0","100","1.0000");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_90.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_90.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_90']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_90.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_90']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_90.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot2=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot2.style.transition='opacity 0s';
				if (me._hotspot2.ggCurrentLogicStateAlpha == 0) {
					me._hotspot2.style.visibility=me._hotspot2.ggVisible?'inherit':'hidden';
					me._hotspot2.style.opacity=1;
				}
				else {
					me._hotspot2.style.visibility=me._hotspot2.ggVisible?'inherit':'hidden';
					me._hotspot2.style.opacity=0.5;
				}
			}
		}
		me._hotspot2.logicBlock_alpha();
		me._hotspot2.onmouseenter=function (e) {
			me.elementMouseOver['hotspot2']=true;
			me._hotspot2.logicBlock_alpha();
		}
		me._hotspot2.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name2.style.transition='none';
			} else {
				me._hotspot_name2.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name2.style.opacity='0';
			me._hotspot_name2.style.visibility='hidden';
			me.elementMouseOver['hotspot2']=false;
			me._hotspot2.logicBlock_alpha();
		}
		me._hotspot2.ggCurrentLogicStateAlpha = -1;
		me._hotspot2.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot2']) {
				if (player.transitionsDisabled) {
					me._hotspot_name2.style.transition='none';
				} else {
					me._hotspot_name2.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name2.style.opacity='1';
				me._hotspot_name2.style.visibility=me._hotspot_name2.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot2.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle2=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle2.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle2'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle2.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle2.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle2.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle2.style.width='50px';
					me._hotspot_outcircle2.style.height='50px';
					me._hotspot_outcircle2.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle2.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle2);}, 250);
				}
				else {
					me._hotspot_outcircle2.style.width='40px';
					me._hotspot_outcircle2.style.height='40px';
					me._hotspot_outcircle2.style.left = 'calc(50% - (40px / 2) - (6px / 2))';
					me._hotspot_outcircle2.style.top = 'calc(50% - (40px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle2);}, 250);
				}
			}
		}
		me._hotspot_outcircle2.logicBlock_size();
		me._hotspot_outcircle2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle2'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle2.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle2.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle2.style.visibility=me._hotspot_outcircle2.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle2.style.opacity=1;
				}
				else {
					me._hotspot_outcircle2.style.visibility=me._hotspot_outcircle2.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle2.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle2.logicBlock_alpha();
		me._hotspot_outcircle2.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle2']=true;
			me._hotspot_outcircle2.logicBlock_size();
			me._hotspot_outcircle2.logicBlock_alpha();
		}
		me._hotspot_outcircle2.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle2']=false;
			me._hotspot_outcircle2.logicBlock_size();
			me._hotspot_outcircle2.logicBlock_alpha();
		}
		me._hotspot_outcircle2.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot2.appendChild(me._hotspot_outcircle2);
		me._ht_node_90.appendChild(me._hotspot2);
		el=me._hotspot_name2=document.createElement('div');
		els=me._hotspot_name2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name2.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name2.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name2.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_90.appendChild(me._hotspot_name2);
		me.elementMouseOver['ht_node_90']=false;
		me._hotspot2.logicBlock_alpha();
		me.elementMouseOver['hotspot2']=false;
		me._hotspot_outcircle2.logicBlock_size();
		me._hotspot_outcircle2.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle2']=false;
		me.ggUse3d=true;
		me.gg3dDistance=1000;
			me.hotspotTimerEvent=function() {
				me._hotspot2.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_90;
	};
	function SkinHotspotClass_ht_node_0(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node_0=document.createElement('div');
		el.ggId="ht_node_0";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node_0.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node_0.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.moveTo("0","0","100","0.5000");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_0.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_0.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node_0']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_0.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node_0']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node_0.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot3=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot3.style.transition='opacity 0s';
				if (me._hotspot3.ggCurrentLogicStateAlpha == 0) {
					me._hotspot3.style.visibility=me._hotspot3.ggVisible?'inherit':'hidden';
					me._hotspot3.style.opacity=1;
				}
				else {
					me._hotspot3.style.visibility=me._hotspot3.ggVisible?'inherit':'hidden';
					me._hotspot3.style.opacity=0.5;
				}
			}
		}
		me._hotspot3.logicBlock_alpha();
		me._hotspot3.onmouseenter=function (e) {
			me.elementMouseOver['hotspot3']=true;
			me._hotspot3.logicBlock_alpha();
		}
		me._hotspot3.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name3.style.transition='none';
			} else {
				me._hotspot_name3.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name3.style.opacity='0';
			me._hotspot_name3.style.visibility='hidden';
			me.elementMouseOver['hotspot3']=false;
			me._hotspot3.logicBlock_alpha();
		}
		me._hotspot3.ggCurrentLogicStateAlpha = -1;
		me._hotspot3.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot3']) {
				if (player.transitionsDisabled) {
					me._hotspot_name3.style.transition='none';
				} else {
					me._hotspot_name3.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name3.style.opacity='1';
				me._hotspot_name3.style.visibility=me._hotspot_name3.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot3.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle3=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle3.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle3'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle3.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle3.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle3.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle3.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle3.style.width='50px';
					me._hotspot_outcircle3.style.height='50px';
					me._hotspot_outcircle3.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle3.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle3);}, 250);
				}
				else {
					me._hotspot_outcircle3.style.width='40px';
					me._hotspot_outcircle3.style.height='40px';
					me._hotspot_outcircle3.style.left = 'calc(50% - (40px / 2) - (6px / 2))';
					me._hotspot_outcircle3.style.top = 'calc(50% - (40px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle3);}, 250);
				}
			}
		}
		me._hotspot_outcircle3.logicBlock_size();
		me._hotspot_outcircle3.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle3'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle3.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle3.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle3.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle3.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle3.style.visibility=me._hotspot_outcircle3.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle3.style.opacity=1;
				}
				else {
					me._hotspot_outcircle3.style.visibility=me._hotspot_outcircle3.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle3.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle3.logicBlock_alpha();
		me._hotspot_outcircle3.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle3']=true;
			me._hotspot_outcircle3.logicBlock_size();
			me._hotspot_outcircle3.logicBlock_alpha();
		}
		me._hotspot_outcircle3.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle3']=false;
			me._hotspot_outcircle3.logicBlock_size();
			me._hotspot_outcircle3.logicBlock_alpha();
		}
		me._hotspot_outcircle3.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot3.appendChild(me._hotspot_outcircle3);
		me._ht_node_0.appendChild(me._hotspot3);
		el=me._hotspot_name3=document.createElement('div');
		els=me._hotspot_name3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name3.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name3.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name3.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name3.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node_0.appendChild(me._hotspot_name3);
		me.elementMouseOver['ht_node_0']=false;
		me._hotspot3.logicBlock_alpha();
		me.elementMouseOver['hotspot3']=false;
		me._hotspot_outcircle3.logicBlock_size();
		me._hotspot_outcircle3.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle3']=false;
		me.ggUse3d=true;
		me.gg3dDistance=1000;
			me.hotspotTimerEvent=function() {
				me._hotspot3.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node_0;
	};
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown={};
		me.elementMouseOver={};
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(player._(me.hotspot.url),"$(cur)");
			player.setVariableValue('Room_visibility_1F', false);
			player.setVariableValue('Room_visibility_2F', false);
			player.setVariableValue('Room_visibility_3F', false);
			player.setVariableValue('Floor_Visibility', false);
			player.triggerEvent('hsproxyclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ondblclick=function (e) {
			player.triggerEvent('hsproxydblclick', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseenter=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			player.triggerEvent('hsproxyover', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.onmouseleave=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			player.triggerEvent('hsproxyout', {'id': me.hotspot.id, 'url': me.hotspot.url});
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot4=document.createElement('div');
		el.ggId="Hotspot";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='border-radius : 999px;';
		hs+='height : 30px;';
		hs+='left : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((30px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot4'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot4.style.transition='opacity 0s';
				if (me._hotspot4.ggCurrentLogicStateAlpha == 0) {
					me._hotspot4.style.visibility=me._hotspot4.ggVisible?'inherit':'hidden';
					me._hotspot4.style.opacity=1;
				}
				else {
					me._hotspot4.style.visibility=me._hotspot4.ggVisible?'inherit':'hidden';
					me._hotspot4.style.opacity=0.5;
				}
			}
		}
		me._hotspot4.logicBlock_alpha();
		me._hotspot4.onmouseenter=function (e) {
			me.elementMouseOver['hotspot4']=true;
			me._hotspot4.logicBlock_alpha();
		}
		me._hotspot4.onmouseleave=function (e) {
			if (player.transitionsDisabled) {
				me._hotspot_name4.style.transition='none';
			} else {
				me._hotspot_name4.style.transition='all 200ms ease-out 0ms';
			}
			me._hotspot_name4.style.opacity='0';
			me._hotspot_name4.style.visibility='hidden';
			me.elementMouseOver['hotspot4']=false;
			me._hotspot4.logicBlock_alpha();
		}
		me._hotspot4.ggCurrentLogicStateAlpha = -1;
		me._hotspot4.ggUpdateConditionTimer=function () {
			if (me.elementMouseOver['hotspot4']) {
				if (player.transitionsDisabled) {
					me._hotspot_name4.style.transition='none';
				} else {
					me._hotspot_name4.style.transition='all 200ms ease-out 0ms';
				}
				me._hotspot_name4.style.opacity='1';
				me._hotspot_name4.style.visibility=me._hotspot_name4.ggVisible?'inherit':'hidden';
			}
		}
		me._hotspot4.ggUpdatePosition=function (useTransition) {
		}
		el=me._hotspot_outcircle4=document.createElement('div');
		el.ggId="Hotspot_outcircle";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='border : 3px solid #ffffff;';
		hs+='border-radius : 999px;';
		hs+='height : 40px;';
		hs+='left : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((40px + 6px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._hotspot_outcircle4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_outcircle4.logicBlock_size = function() {
			var newLogicStateSize;
			if (
				((me.elementMouseOver['hotspot_outcircle4'] == true))
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._hotspot_outcircle4.ggCurrentLogicStateSize != newLogicStateSize) {
				me._hotspot_outcircle4.ggCurrentLogicStateSize = newLogicStateSize;
				me._hotspot_outcircle4.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle4.ggCurrentLogicStateSize == 0) {
					me._hotspot_outcircle4.style.width='50px';
					me._hotspot_outcircle4.style.height='50px';
					me._hotspot_outcircle4.style.left = 'calc(50% - (50px / 2) - (6px / 2))';
					me._hotspot_outcircle4.style.top = 'calc(50% - (50px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle4);}, 250);
				}
				else {
					me._hotspot_outcircle4.style.width='40px';
					me._hotspot_outcircle4.style.height='40px';
					me._hotspot_outcircle4.style.left = 'calc(50% - (40px / 2) - (6px / 2))';
					me._hotspot_outcircle4.style.top = 'calc(50% - (40px / 2) - (6px / 2))';
					setTimeout(function() {skin.updateSize(me._hotspot_outcircle4);}, 250);
				}
			}
		}
		me._hotspot_outcircle4.logicBlock_size();
		me._hotspot_outcircle4.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hotspot_outcircle4'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hotspot_outcircle4.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hotspot_outcircle4.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hotspot_outcircle4.style.transition='width 200ms ease 0ms, height 200ms ease 0ms, left 200ms ease 0ms, top 200ms ease 0ms, opacity 1000ms ease 0ms';
				if (me._hotspot_outcircle4.ggCurrentLogicStateAlpha == 0) {
					me._hotspot_outcircle4.style.visibility=me._hotspot_outcircle4.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle4.style.opacity=1;
				}
				else {
					me._hotspot_outcircle4.style.visibility=me._hotspot_outcircle4.ggVisible?'inherit':'hidden';
					me._hotspot_outcircle4.style.opacity=0.5;
				}
			}
		}
		me._hotspot_outcircle4.logicBlock_alpha();
		me._hotspot_outcircle4.onmouseenter=function (e) {
			me.elementMouseOver['hotspot_outcircle4']=true;
			me._hotspot_outcircle4.logicBlock_size();
			me._hotspot_outcircle4.logicBlock_alpha();
		}
		me._hotspot_outcircle4.onmouseleave=function (e) {
			me.elementMouseOver['hotspot_outcircle4']=false;
			me._hotspot_outcircle4.logicBlock_size();
			me._hotspot_outcircle4.logicBlock_alpha();
		}
		me._hotspot_outcircle4.ggUpdatePosition=function (useTransition) {
		}
		me._hotspot4.appendChild(me._hotspot_outcircle4);
		me._ht_node.appendChild(me._hotspot4);
		el=me._hotspot_name4=document.createElement('div');
		els=me._hotspot_name4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Hotspot name";
		el.ggDx=0;
		el.ggDy=-40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'translate(-50%, -50%) ' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text tooltip";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='height : auto;';
		hs+='left : calc(50% - ((0px + 0px) / 2) + 0px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((0px + 0px) / 2) - 40px);';
		hs+='transform : translate(-50%, -50%);;';
		hs+='visibility : hidden;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._hotspot_name4.ggUpdateText=function() {
			var params = [];
			params.push(String(player._(me.ggUserdata.title)));
			var hs = player._("%1", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._hotspot_name4.ggUpdateText();
		player.addListener('changenode', function() {
			me._hotspot_name4.ggUpdateText();
		});
		el.appendChild(els);
		me._hotspot_name4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._hotspot_name4.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me._hotspot_name4);
		me.elementMouseOver['ht_node']=false;
		me._hotspot4.logicBlock_alpha();
		me.elementMouseOver['hotspot4']=false;
		me._hotspot_outcircle4.logicBlock_size();
		me._hotspot_outcircle4.logicBlock_alpha();
		me.elementMouseOver['hotspot_outcircle4']=false;
		me.ggUse3d=true;
		me.gg3dDistance=1000;
			me.hotspotTimerEvent=function() {
				me._hotspot4.ggUpdateConditionTimer();
			}
			me.hotspotTimerEvent();
			me.__div = me._ht_node;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
			if (hotspot.skinid=='ht_node') {
				hotspot.skinid = 'ht_node';
				hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_0') {
				hotspot.skinid = 'ht_node_0';
				hsinst = new SkinHotspotClass_ht_node_0(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_90') {
				hotspot.skinid = 'ht_node_90';
				hsinst = new SkinHotspotClass_ht_node_90(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_180') {
				hotspot.skinid = 'ht_node_180';
				hsinst = new SkinHotspotClass_ht_node_180(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
			if (hotspot.skinid=='ht_node_270') {
				hotspot.skinid = 'ht_node_270';
				hsinst = new SkinHotspotClass_ht_node_270(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		} else
		{
				hotspot.skinid = 'ht_node_Turn';
				hsinst = new SkinHotspotClass_ht_node_turn(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		hotspotTemplates = {};
	}
	player.addListener('hotspotsremoved',function() {
			me.removeSkinHotspots();
	});
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		me._floors_b.ggUpdateConditionTimer();
		me._showreel_b.ggUpdateConditionTimer();
		me._sr_close_b.ggUpdateConditionTimer();
		for (const id in hotspotTemplates) {
			const tmpl=hotspotTemplates[id];
			tmpl.forEach(function(hotspot) {
				if (hotspot.hotspotTimerEvent) {
					hotspot.hotspotTimerEvent();
				}
			});
		};
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal } .ggskin.tooltip { font-family: "Montserrat", sans-serif; font-size: 14px; }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};
function onYouTubeIframeAPIReady() {
	setTimeout(function(){
		var videoElements = document.querySelectorAll('.ggskin_video');
		for (var i=0; i<videoElements.length; i++) {
			if (videoElements[i].ggYoutubeApiReady) {
				videoElements[i].ggYoutubeApiReady();
			}
		}
	}, 1000);
}