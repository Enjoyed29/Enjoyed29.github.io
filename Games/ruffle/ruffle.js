(() => {
	'use strict';
	var e,
		t,
		n = {
			285: (e, t, n) => {
				e.exports = n.p + 'd58a3b72afde94950d32.wasm';
			},
			931: (e, t, n) => {
				e.exports = n.p + 'd6b2bf91725c8258f10f.wasm';
			}
		},
		i = {};
	function s(e) {
		var t = i[e];
		if (void 0 !== t) return t.exports;
		var r = (i[e] = { id: e, loaded: !1, exports: {} });
		return n[e](r, r.exports, s), (r.loaded = !0), r.exports;
	}
	(s.m = n),
		(s.d = (e, t) => {
			for (var n in t)
				s.o(t, n) && !s.o(e, n) && Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
		}),
		(s.f = {}),
		(s.e = (e) => Promise.all(Object.keys(s.f).reduce((t, n) => (s.f[n](e, t), t), []))),
		(s.u = (e) =>
			'core.ruffle.' + { 662: 'f6ddc5b37c1f42d63f0c', 966: 'da135b622b824b611fe9' }[e] + '.js'),
		(s.g = (function () {
			if ('object' == typeof globalThis) return globalThis;
			try {
				return this || new Function('return this')();
			} catch (e) {
				if ('object' == typeof window) return window;
			}
		})()),
		(s.hmd = (e) => (
			(e = Object.create(e)).children || (e.children = []),
			Object.defineProperty(e, 'exports', {
				enumerable: !0,
				set: () => {
					throw new Error(
						'ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' +
							e.id
					);
				}
			}),
			e
		)),
		(s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
		(e = {}),
		(t = 'ruffle-selfhosted:'),
		(s.l = (n, i, r, o) => {
			if (e[n]) e[n].push(i);
			else {
				var a, l;
				if (void 0 !== r)
					for (var c = document.getElementsByTagName('script'), u = 0; u < c.length; u++) {
						var d = c[u];
						if (d.getAttribute('src') == n || d.getAttribute('data-webpack') == t + r) {
							a = d;
							break;
						}
					}
				a ||
					((l = !0),
					((a = document.createElement('script')).charset = 'utf-8'),
					(a.timeout = 120),
					s.nc && a.setAttribute('nonce', s.nc),
					a.setAttribute('data-webpack', t + r),
					(a.src = n)),
					(e[n] = [i]);
				var h = (t, i) => {
						(a.onerror = a.onload = null), clearTimeout(f);
						var s = e[n];
						if (
							(delete e[n],
							a.parentNode && a.parentNode.removeChild(a),
							s && s.forEach((e) => e(i)),
							t)
						)
							return t(i);
					},
					f = setTimeout(h.bind(null, void 0, { type: 'timeout', target: a }), 12e4);
				(a.onerror = h.bind(null, a.onerror)),
					(a.onload = h.bind(null, a.onload)),
					l && document.head.appendChild(a);
			}
		}),
		(s.r = (e) => {
			'undefined' != typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
				Object.defineProperty(e, '__esModule', { value: !0 });
		}),
		(s.p = ''),
		(() => {
			s.b = document.baseURI || self.location.href;
			var e = { 179: 0 };
			s.f.j = (t, n) => {
				var i = s.o(e, t) ? e[t] : void 0;
				if (0 !== i)
					if (i) n.push(i[2]);
					else {
						var r = new Promise((n, s) => (i = e[t] = [n, s]));
						n.push((i[2] = r));
						var o = s.p + s.u(t),
							a = new Error();
						s.l(
							o,
							(n) => {
								if (s.o(e, t) && (0 !== (i = e[t]) && (e[t] = void 0), i)) {
									var r = n && ('load' === n.type ? 'missing' : n.type),
										o = n && n.target && n.target.src;
									(a.message = 'Loading chunk ' + t + ' failed.\n(' + r + ': ' + o + ')'),
										(a.name = 'ChunkLoadError'),
										(a.type = r),
										(a.request = o),
										i[1](a);
								}
							},
							'chunk-' + t,
							t
						);
					}
			};
			var t = (t, n) => {
					var i,
						r,
						[o, a, l] = n,
						c = 0;
					if (o.some((t) => 0 !== e[t])) {
						for (i in a) s.o(a, i) && (s.m[i] = a[i]);
						l && l(s);
					}
					for (t && t(n); c < o.length; c++) (r = o[c]), s.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
				},
				n = (self.webpackChunkruffle_selfhosted = self.webpackChunkruffle_selfhosted || []);
			n.forEach(t.bind(null, 0)), (n.push = t.bind(null, n.push.bind(n)));
		})(),
		(() => {
			const e = async () =>
					WebAssembly.validate(
						new Uint8Array([
							0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 5, 3, 1, 0, 1, 10, 14, 1,
							12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11
						])
					),
				t = async () =>
					WebAssembly.validate(
						new Uint8Array([
							0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 7, 1, 5, 0, 208, 112,
							26, 11
						])
					),
				n = async () =>
					WebAssembly.validate(
						new Uint8Array([
							0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 12, 1, 10, 0, 67, 0,
							0, 0, 0, 252, 0, 26, 11
						])
					),
				i = async () =>
					WebAssembly.validate(
						new Uint8Array([
							0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 8, 1, 6, 0, 65, 0,
							192, 26, 11
						])
					),
				r = async () =>
					WebAssembly.validate(
						new Uint8Array([
							0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65,
							0, 253, 15, 253, 98, 11
						])
					);
			function o(e) {
				const t =
					'function' == typeof Function.prototype.toString ? Function.prototype.toString() : null;
				return (
					'string' == typeof t &&
					t.indexOf('[native code]') >= 0 &&
					Function.prototype.toString.call(e).indexOf('[native code]') >= 0
				);
			}
			let a = '';
			try {
				if (
					void 0 !== document.currentScript &&
					null !== document.currentScript &&
					'src' in document.currentScript &&
					'' !== document.currentScript.src
				) {
					let e = document.currentScript.src;
					e.endsWith('.js') || e.endsWith('/') || (e += '/'), (a = new URL('.', e).href);
				}
			} catch (e) {
				console.warn('Unable to get currentScript URL');
			}
			function l(e) {
				let t = a;
				return (
					null !== e.publicPath && void 0 !== e.publicPath && (t = e.publicPath),
					'' === t || t.endsWith('/') || (t += '/'),
					t
				);
			}
			let c = null;
			function u(a, u) {
				return (
					null === c &&
						(c = (async function (a, c) {
							('function' == typeof Array.prototype.reduce && o(Array.prototype.reduce)) ||
								Object.defineProperty(Array.prototype, 'reduce', {
									value(...e) {
										if (
											0 === e.length &&
											window.Prototype &&
											window.Prototype.Version &&
											window.Prototype.Version < '1.6.1'
										)
											return this.length > 1 ? this : this[0];
										const t = e[0];
										if (null === this)
											throw new TypeError('Array.prototype.reduce called on null or undefined');
										if ('function' != typeof t) throw new TypeError(`${t} is not a function`);
										const n = Object(this),
											i = n.length >>> 0;
										let s,
											r = 0;
										if (e.length >= 2) s = e[1];
										else {
											for (; r < i && !(r in n); ) r++;
											if (r >= i)
												throw new TypeError('Reduce of empty array with no initial value');
											s = n[r++];
										}
										for (; r < i; ) r in n && (s = t(s, n[r], r, n)), r++;
										return s;
									}
								}),
								('function' == typeof Window && o(Window)) ||
									('function' == typeof window.constructor &&
										o(window.constructor) &&
										(window.Window = window.constructor)),
								(void 0 !== window.Reflect && null !== window.Reflect) || (window.Reflect = {}),
								'function' != typeof Reflect.get &&
									Object.defineProperty(Reflect, 'get', { value: (e, t) => e[t] }),
								'function' != typeof Reflect.set &&
									Object.defineProperty(Reflect, 'set', {
										value(e, t, n) {
											e[t] = n;
										}
									}),
								'function' != typeof Reflect.has &&
									Object.defineProperty(Reflect, 'has', { value: (e, t) => t in e }),
								'function' != typeof Reflect.ownKeys &&
									Object.defineProperty(Reflect, 'ownKeys', {
										value: (e) => [
											...Object.getOwnPropertyNames(e),
											...Object.getOwnPropertySymbols(e)
										]
									});
							const u = (await Promise.all([e(), r(), n(), i(), t()])).every(Boolean);
							u ||
								console.log(
									'Some WebAssembly extensions are NOT available, falling back to the vanilla WebAssembly module'
								),
								(s.p = l(a));
							const { default: d, Ruffle: h } = await (u
								? s.e(966).then(s.bind(s, 966))
								: s.e(662).then(s.bind(s, 662)));
							let f;
							const p = u ? new URL(s(285), s.b) : new URL(s(931), s.b),
								m = await fetch(p);
							if (c) {
								const e = m.headers.get('content-length') || '';
								let t = 0;
								const n = parseInt(e);
								f = new Response(
									new ReadableStream({
										async start(e) {
											var i;
											const s = null === (i = m.body) || void 0 === i ? void 0 : i.getReader();
											if (!s) throw 'Response had no body';
											for (c(t, n); ; ) {
												const { done: i, value: r } = await s.read();
												if (i) break;
												(null == r ? void 0 : r.byteLength) &&
													(t += null == r ? void 0 : r.byteLength),
													e.enqueue(r),
													c(t, n);
											}
											e.close();
										}
									}),
									m
								);
							} else f = m;
							return await d(f), h;
						})(a, u)),
					c
				);
			}
			const d = document.createElement('template');
			d.innerHTML =
				'\n    <style>\n        :host {\n            --ruffle-blue: #37528c;\n            --ruffle-orange: #ffad33;\n\n            display: inline-block;\n            position: relative;\n            /* Default width/height; this will get overridden by user styles/attributes. */\n            width: 550px;\n            height: 400px;\n            font-family: Arial, sans-serif;\n            letter-spacing: 0.4px;\n            touch-action: none;\n            user-select: none;\n            -webkit-user-select: none;\n            -webkit-tap-highlight-color: transparent;\n        }\n\n        /* Ruffle\'s width/height CSS interferes Safari fullscreen CSS. */\n        /* Ensure that Safari\'s fullscreen mode actually fills the screen. */\n        :host(:-webkit-full-screen) {\n            display: block;\n            width: 100% !important;\n            height: 100% !important;\n        }\n\n        .hidden {\n            display: none !important;\n        }\n\n        /* All of these use the dimensions specified by the embed. */\n        #container,\n        #play_button,\n        #unmute_overlay,\n        #unmute_overlay .background,\n        #panic,\n        #preloader,\n        #message_overlay {\n            position: absolute;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n        }\n\n        #container {\n            overflow: hidden;\n        }\n\n        #container canvas {\n            width: 100%;\n            height: 100%;\n        }\n\n        #play_button,\n        #unmute_overlay {\n            cursor: pointer;\n            display: none;\n        }\n\n        #unmute_overlay .background {\n            background: black;\n            opacity: 0.7;\n        }\n\n        #play_button .icon,\n        #unmute_overlay .icon {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 50%;\n            height: 50%;\n            max-width: 384px;\n            max-height: 384px;\n            transform: translate(-50%, -50%);\n            opacity: 0.8;\n        }\n\n        #play_button:hover .icon,\n        #unmute_overlay:hover .icon {\n            opacity: 1;\n        }\n\n        #panic {\n            font-size: 20px;\n            text-align: center;\n            /* Inverted colors from play button! */\n            background: linear-gradient(180deg, #fd3a40 0%, #fda138 100%);\n            color: white;\n            display: flex;\n            flex-flow: column;\n            justify-content: space-around;\n        }\n\n        #panic a {\n            color: var(--ruffle-blue);\n            font-weight: bold;\n        }\n\n        #panic-title {\n            font-size: xxx-large;\n            font-weight: bold;\n        }\n\n        #panic-body.details {\n            flex: 0.9;\n            margin: 0 10px;\n        }\n\n        #panic-body textarea {\n            width: 100%;\n            height: 100%;\n            resize: none;\n        }\n\n        #panic ul {\n            padding: 0;\n            display: flex;\n            list-style-type: none;\n            justify-content: space-evenly;\n        }\n\n        #message_overlay {\n            position: absolute;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            opacity: 1;\n            z-index: 2;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            overflow: auto;\n        }\n\n        #message_overlay .message {\n            text-align: center;\n            max-height: 100%;\n            max-width: 100%;\n            padding: 5%;\n            font-size: 20px;\n        }\n\n        #message_overlay p {\n            margin: 0.5em 0;\n        }\n\n        #message_overlay .message div {\n            display: flex;\n            justify-content: center;\n            flex-wrap: wrap;\n            column-gap: 1em;\n        }\n\n        #message_overlay a, #message_overlay button {\n            cursor: pointer;\n            background: var(--ruffle-blue);\n            color: var(--ruffle-orange);\n            border: 2px solid var(--ruffle-orange);\n            font-weight: bold;\n            font-size: 1.25em;\n            border-radius: 0.6em;\n            padding: 10px;\n            text-decoration: none;\n            margin: 2% 0;\n        }\n\n        #message_overlay a:hover, #message_overlay button:hover {\n            background: #ffffff4c;\n        }\n\n        #continue-btn {\n             cursor: pointer;\n             background: var(--ruffle-blue);\n             color: var(--ruffle-orange);\n             border: 2px solid var(--ruffle-orange);\n             font-weight: bold;\n             font-size: 20px;\n             border-radius: 20px;\n             padding: 10px;\n        }\n\n        #continue-btn:hover {\n            background: #ffffff4c;\n        }\n\n        #context-menu {\n            display: none;\n            color: black;\n            background: #fafafa;\n            border: 1px solid gray;\n            box-shadow: 0px 5px 10px -5px black;\n            position: absolute;\n            font-size: 14px;\n            text-align: left;\n            list-style: none;\n            padding: 0;\n            margin: 0;\n        }\n\n        #context-menu .menu_item {\n            padding: 5px 10px;\n            cursor: pointer;\n            color: black;\n        }\n\n        #context-menu .menu_item.disabled {\n            cursor: default;\n            color: gray;\n        }\n\n        #context-menu .menu_item:not(.disabled):hover {\n            background: lightgray;\n        }\n\n        #context-menu .menu_separator hr {\n            border: none;\n            border-bottom: 1px solid lightgray;\n            margin: 2px;\n        }\n\n        #preloader {\n            display: flex;\n            flex-direction: column;\n            background: var(--preloader-background, var(--ruffle-blue));\n            align-items: center;\n            justify-content: center;\n        }\n\n        .loadbar {\n            width: 100%;\n            max-width: 316px;\n            max-height: 10px;\n            height: 20%;\n            background: #253559;\n        }\n\n        .loadbarInner {\n            width: 0px;\n            max-width: 100%;\n            height: 100%;\n            background: var(--ruffle-orange);\n        }\n            \n        .logo {\n            display: var(--logo-display, block);\n            max-width: 380px;\n            max-height: 150px;\n        }\n\n        .loadingAnimation {\n            max-width: 28px;\n            max-height: 28px;\n            margin-bottom: 2%;\n            width: 10%;\n            aspect-ratio: 1;\n        }\n\n        .spinner {\n            stroke-dasharray: 180;\n            stroke-dashoffset: 135;\n            stroke: var(--ruffle-orange);\n            transform-origin: 50% 50%;\n            animation: rotate 1.5s linear infinite;\n        }\n\n        @keyframes rotate {\n            to {\n                transform: rotate(360deg);\n            }\n        }\n    </style>\n    <style id="dynamic_styles"></style>\n\n    <div id="container">\n        <div id="play_button"><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 250 250" width="100%" height="100%"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="125" y1="0" x2="125" y2="250" spreadMethod="pad"><stop offset="0%" stop-color="#FDA138"/><stop offset="100%" stop-color="#FD3A40"/></linearGradient><g id="b"><path fill="url(#a)" d="M250 125q0-52-37-88-36-37-88-37T37 37Q0 73 0 125t37 88q36 37 88 37t88-37q37-36 37-88M87 195V55l100 70-100 70z"/><path fill="#FFF" d="M87 55v140l100-70L87 55z"/></g></defs><use xlink:href="#b"/></svg></div></div>\n        <div id="unmute_overlay"><div class="background"></div><div class="icon"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 512 584"  width="100%" height="100%" scale="0.8"><path fill="#FFF" stroke="#FFF" d="m457.941 256 47.029-47.029c9.372-9.373 9.372-24.568 0-33.941-9.373-9.373-24.568-9.373-33.941 0l-47.029 47.029-47.029-47.029c-9.373-9.373-24.568-9.373-33.941 0-9.372 9.373-9.372 24.568 0 33.941l47.029 47.029-47.029 47.029c-9.372 9.373-9.372 24.568 0 33.941 4.686 4.687 10.827 7.03 16.97 7.03s12.284-2.343 16.971-7.029l47.029-47.03 47.029 47.029c4.687 4.687 10.828 7.03 16.971 7.03s12.284-2.343 16.971-7.029c9.372-9.373 9.372-24.568 0-33.941z"/><path fill="#FFF" stroke="#FFF" d="m99 160h-55c-24.301 0-44 19.699-44 44v104c0 24.301 19.699 44 44 44h55c2.761 0 5-2.239 5-5v-182c0-2.761-2.239-5-5-5z"/><path fill="#FFF" stroke="#FFF" d="m280 56h-24c-5.269 0-10.392 1.734-14.578 4.935l-103.459 79.116c-1.237.946-1.963 2.414-1.963 3.972v223.955c0 1.557.726 3.026 1.963 3.972l103.459 79.115c4.186 3.201 9.309 4.936 14.579 4.936h23.999c13.255 0 24-10.745 24-24v-352.001c0-13.255-10.745-24-24-24z"/><text x="256" y="560" text-anchor="middle" font-size="60px" fill="#FFF" stroke="#FFF">Click to unmute</text></svg></div></div>\n    </div>\n    <div class="hidden" id="preloader">\n        <svg class="logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" viewBox="0 0 380 150"><g><path fill="#966214" d="M58.75 85.6q.75-.1 1.5-.35.85-.25 1.65-.75.55-.35 1.05-.8.5-.45.95-1 .5-.5.75-1.2-.05.05-.15.1-.1.15-.25.25l-.1.2q-.15.05-.25.1-.4 0-.8.05-.5-.25-.9-.5-.3-.1-.55-.3l-.6-.6-4.25-6.45-1.5 11.25h3.45m83.15-.2h3.45q.75-.1 1.5-.35.25-.05.45-.15.35-.15.65-.3l.5-.3q.25-.15.5-.35.45-.35.9-.75.45-.35.75-.85l.1-.1q.1-.2.2-.35.2-.3.35-.6l-.3.4-.15.15q-.5.15-1.1.1-.25 0-.4-.05-.5-.15-.8-.4-.15-.1-.25-.25-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25m-21.15-3.95q-.3-.3-.55-.6l-.05-.05v-.05l-4.25-6.4-1.5 11.25h3.45q.75-.1 1.5-.35.85-.25 1.6-.75.75-.5 1.4-1.1.45-.35.75-.85.35-.5.65-1.05l-.45.55q-.5.15-1.1.1-.9 0-1.45-.7m59.15.3q-.75-.5-1.4-1-3.15-2.55-3.5-6.4l-1.5 11.25h21q-3.1-.25-5.7-.75-5.6-1.05-8.9-3.1m94.2 3.85h3.45q.6-.1 1.2-.3.4-.1.75-.2.35-.15.65-.3.7-.35 1.35-.8.75-.55 1.3-1.25.1-.15.25-.3-2.55-.25-3.25-1.8l-4.2-6.3-1.5 11.25m-45.3-4.85q-.5-.4-.9-.8-2.3-2.35-2.6-5.6l-1.5 11.25h21q-11.25-.95-16-4.85m97.7 4.85q-.3-.05-.6-.05-10.8-1-15.4-4.8-3.15-2.55-3.5-6.35l-1.5 11.2h21Z"/><path fill="var(--ruffle-orange)" d="M92.6 54.8q-1.95-1.4-4.5-1.4H60.35q-1.35 0-2.6.45-1.65.55-3.15 1.8-2.75 2.25-3.25 5.25l-1.65 12h.05v.3l5.85 1.15h-9.5q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-.95.7-.45.35-.85.8-.35.4-.65.85-.3.45-.5.9-.15.45-.3.95l-5.85 41.6H50.3l5-35.5 1.5-11.25 4.25 6.45.6.6q.25.2.55.3.4.25.9.5.4-.05.8-.05.1-.05.25-.1l.1-.2q.15-.1.25-.25.1-.05.15-.1l.3-1.05 1.75-12.3h11.15L75.8 82.6h16.5l2.3-16.25h-.05l.8-5.7q.4-2.45-1-4.2-.35-.4-.75-.8-.25-.25-.55-.5-.2-.2-.45-.35m16.2 18.1h.05l-.05.3 5.85 1.15H105.2q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45-.5.3-1 .65-.4.4-.8.85-.25.3-.55.65-.05.1-.15.2-.25.45-.4.9-.2.45-.3.95-.1.65-.2 1.25-.2 1.15-.4 2.25l-4.3 30.6q-.25 3 1.75 5.25 1.6 1.8 4 2.15.6.1 1.25.1h27.35q3.25 0 6-2.25.35-.35.7-.55l.3-.2q2-2 2.25-4.5l1.65-11.6q.05-.05.1-.05l1.65-11.35h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.1.15.25.25.3.25.8.4.15.05.4.05.6.05 1.1-.1l.15-.15.3-.4.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5h.05v.2l-.05.1h.05l5.8 1.15H132.7q-.5.05-1 .15-.5.15-1 .35-.15.05-.3.15-.3.1-.55.25-.05 0-.1.05-.5.3-1 .65-.4.35-.7.7-.55.7-.95 1.45-.35.65-.55 1.4-.15.7-.25 1.4v.05q-.15 1.05-.35 2.05l-1.2 8.75v.1l-2.1 14.7H111.4l2.25-15.55h.05l.7-5.2 1.5-11.25 4.25 6.4v.05l.05.05q.25.3.55.6.55.7 1.45.7.6.05 1.1-.1l.45-.55.3-1.05 1.3-9.05h-.05l.7-5.05h-.05l.15-1.25h-.05l1.65-11.7h-16.25l-2.65 19.5m106.5-41.75q-2.25-2.25-5.5-2.25h-27.75q-3 0-5.75 2.25-1.3.95-2.05 2.1-.45.6-.7 1.2-.2.5-.35 1-.1.45-.15.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-5.3 38.1h16.25l5-35.5 1.5-11.25q.35 3.85 3.5 6.4.65.5 1.4 1 3.3 2.05 8.9 3.1 2.6.5 5.7.75l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.1-.9.3-1.9.1-.75.2-1.6.85-5.9 2.15-14.9 0-.15.05-.25l.1-.9q.2-1.55.45-3.15h11.25l-3.1 20.8h16.5l4.1-28.05q.15-1.7-.4-3.15-.5-1.1-1.35-2.1m46.65 44.15q-.5.3-1 .65-.4.4-.8.85-.35.4-.7.85-.25.45-.45.9-.15.45-.3.95l-5.85 41.6h16.25l5-35.5 1.5-11.25 4.2 6.3q.7 1.55 3.25 1.8l.05-.1q.25-.4.35-.85l.3-1.05 1.8-14.05v-.05l5.35-37.45h-16.25l-6.15 44.3 5.85 1.15h-9.45q-.5.05-1 .15-.5.15-1 .35-.5.2-.95.45m5.4-38.9q.15-1.7-.4-3.15-.5-1.1-1.35-2.1-2.25-2.25-5.5-2.25h-27.75q-2.3 0-4.45 1.35-.65.35-1.3.9-1.3.95-2.05 2.1-.45.6-.7 1.2-.4.9-.5 1.95l-4.15 29.95h-.05l-.7 5.2h-.05l-.2 1.35h.05l-.05.3 5.85 1.15h-9.45q-2.1.05-3.95 1.6-1.9 1.55-2.25 3.55l-.5 3.5h-.05l-1.2 8.75v.1l-4.1 29.25h16.25l5-35.5 1.5-11.25q.3 3.25 2.6 5.6.4.4.9.8 4.75 3.9 16 4.85l1.75-11.25h-12.2l.4-2.95h-.05l.7-5.05h-.05q.15-.9.3-1.9.1-.75.25-1.6.15-1.25.35-2.65v-.05q.95-6.7 2.35-16.5h11.25l-3.1 20.8h16.5l4.1-28.05M345 66.35h-.05l1.15-8.2q.5-3-1.75-5.25-1.25-1.25-3-1.75-1-.5-2.25-.5h-27.95q-.65 0-1.3.1-2.5.35-4.7 2.15-2.75 2.25-3.25 5.25l-1.95 14.7v.05l-.05.3 5.85 1.15h-9.45q-1.9.05-3.6 1.35-.2.1-.35.25-1.9 1.55-2.25 3.55l-4.85 34.1q-.25 3 1.75 5.25 1.25 1.4 3 1.95 1.05.3 2.25.3H320q3.25 0 6-2.25 2.75-2 3.25-5l2.75-18.5h-16.5l-1.75 11H302.5l2.1-14.75h.05l.85-6 1.5-11.2q.35 3.8 3.5 6.35 4.6 3.8 15.4 4.8.3 0 .6.05h15.75L345 66.35m-16.4-.95-1.25 8.95h-11.3l.4-2.95h-.05l.7-5.05h-.1l.15-.95h11.45Z"/></g></svg>\n        <svg class="loadingAnimation" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66">\n            <circle class="spinner" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>\n        </svg>        \n        <div class="loadbar"><div class="loadbarInner"></div></div>\n    </div>\n\n    <ul id="context-menu"></ul>\n';
			const h = {};
			function f(e, t) {
				if (void 0 !== h[e]) {
					if (h[e].class !== t) throw new Error('Internal naming conflict on ' + e);
					return h[e].name;
				}
				let n = 0;
				if (void 0 !== window.customElements)
					for (; n < 999; ) {
						let i = e;
						if ((n > 0 && (i = i + '-' + n), void 0 === window.customElements.get(i)))
							return (
								window.customElements.define(i, t),
								(h[e] = { class: t, name: i, internalName: e }),
								i
							);
						n += 1;
					}
				throw new Error('Failed to assign custom element ' + e);
			}
			const p = {
					allowScriptAccess: !1,
					parameters: {},
					autoplay: 'auto',
					backgroundColor: null,
					letterbox: 'fullscreen',
					unmuteOverlay: 'visible',
					upgradeToHttps: !0,
					warnOnUnsupportedContent: !0,
					logLevel: 'error',
					showSwfDownload: !1,
					contextMenu: !0,
					preloader: !0,
					maxExecutionDuration: { secs: 15, nanos: 0 },
					base: null,
					menu: !0,
					salign: '',
					quality: 'high',
					scale: 'showAll',
					wmode: 'opaque',
					publicPath: null,
					polyfills: !0
				},
				m = 'application/x-shockwave-flash',
				g = 'application/futuresplash',
				v = 'application/x-shockwave-flash2-preview',
				w = 'application/vnd.adobe.flash.movie',
				y = 'https://ruffle.rs',
				b = /^\s*(\d+(\.\d+)?(%)?)/;
			let x = !1;
			function k(e) {
				if (null == e) return {};
				e instanceof URLSearchParams || (e = new URLSearchParams(e));
				const t = {};
				for (const [n, i] of e) t[n] = i.toString();
				return t;
			}
			class E extends HTMLElement {
				constructor() {
					return (
						super(),
						(this.contextMenuForceDisabled = !1),
						(this.isTouch = !1),
						(this.loadedConfig = p),
						(this.panicked = !1),
						(this.isExtension = !1),
						(this.config = {}),
						(this.shadow = this.attachShadow({ mode: 'open' })),
						this.shadow.appendChild(d.content.cloneNode(!0)),
						(this.dynamicStyles = this.shadow.getElementById('dynamic_styles')),
						(this.container = this.shadow.getElementById('container')),
						(this.playButton = this.shadow.getElementById('play_button')),
						this.playButton.addEventListener('click', () => this.play()),
						(this.unmuteOverlay = this.shadow.getElementById('unmute_overlay')),
						(this.preloader = this.shadow.getElementById('preloader')),
						(this.contextMenuElement = this.shadow.getElementById('context-menu')),
						this.addEventListener('contextmenu', this.showContextMenu.bind(this)),
						this.addEventListener('pointerdown', this.pointerDown.bind(this)),
						this.addEventListener('fullscreenchange', this.fullScreenChange.bind(this)),
						this.addEventListener('webkitfullscreenchange', this.fullScreenChange.bind(this)),
						window.addEventListener('click', this.hideContextMenu.bind(this)),
						(this.instance = null),
						(this.onFSCommand = null),
						(this._readyState = 0),
						(this._metadata = null),
						(this.lastActivePlayingState = !1),
						this.setupPauseOnTabHidden(),
						this
					);
				}
				get readyState() {
					return this._readyState;
				}
				get metadata() {
					return this._metadata;
				}
				setupPauseOnTabHidden() {
					document.addEventListener(
						'visibilitychange',
						() => {
							this.instance &&
								(document.hidden &&
									((this.lastActivePlayingState = this.instance.is_playing()),
									this.instance.pause()),
								document.hidden || !0 !== this.lastActivePlayingState || this.instance.play());
						},
						!1
					);
				}
				connectedCallback() {
					this.updateStyles();
				}
				static get observedAttributes() {
					return ['width', 'height'];
				}
				attributeChangedCallback(e, t, n) {
					('width' !== e && 'height' !== e) || this.updateStyles();
				}
				disconnectedCallback() {
					this.destroy();
				}
				updateStyles() {
					if (this.dynamicStyles.sheet) {
						if (this.dynamicStyles.sheet.rules)
							for (let e = 0; e < this.dynamicStyles.sheet.rules.length; e++)
								this.dynamicStyles.sheet.deleteRule(e);
						const e = this.attributes.getNamedItem('width');
						if (null != e) {
							const t = E.htmlDimensionToCssDimension(e.value);
							null !== t && this.dynamicStyles.sheet.insertRule(`:host { width: ${t}; }`);
						}
						const t = this.attributes.getNamedItem('height');
						if (null != t) {
							const e = E.htmlDimensionToCssDimension(t.value);
							null !== e && this.dynamicStyles.sheet.insertRule(`:host { height: ${e}; }`);
						}
					}
				}
				isUnusedFallbackObject() {
					const e = (function (e) {
						const t = h[e];
						return void 0 !== t ? { internalName: e, name: t.name, class: t.class } : null;
					})('ruffle-object');
					if (null !== e) {
						let t = this.parentNode;
						for (; t !== document && null !== t; ) {
							if (t.nodeName === e.name) return !0;
							t = t.parentNode;
						}
					}
					return !1;
				}
				async ensureFreshInstance() {
					var e;
					this.destroy(), !1 !== this.loadedConfig.preloader && this.showPreloader();
					const t = await u(this.loadedConfig, this.onRuffleDownloadProgress.bind(this)).catch(
						(e) => {
							if (
								(console.error(`Serious error loading Ruffle: ${e}`),
								'file:' === window.location.protocol)
							)
								e.ruffleIndexError = 2;
							else {
								e.ruffleIndexError = 9;
								const t = String(e.message).toLowerCase();
								t.includes('mime')
									? (e.ruffleIndexError = 8)
									: t.includes('networkerror') || t.includes('failed to fetch')
									? (e.ruffleIndexError = 6)
									: t.includes('disallowed by embedder')
									? (e.ruffleIndexError = 1)
									: 'CompileError' === e.name
									? (e.ruffleIndexError = 3)
									: t.includes('could not download wasm module') && 'TypeError' === e.name
									? (e.ruffleIndexError = 7)
									: 'TypeError' === e.name
									? (e.ruffleIndexError = 5)
									: navigator.userAgent.includes('Edg') &&
									  t.includes('webassembly is not defined') &&
									  (e.ruffleIndexError = 10);
							}
							throw (this.panic(e), e);
						}
					);
					if (
						((this.instance = await new t(this.container, this, this.loadedConfig)),
						console.log(
							'New Ruffle instance created (WebAssembly extensions: ' +
								(t.is_wasm_simd_used() ? 'ON' : 'OFF') +
								')'
						),
						'running' !== this.audioState() &&
							((this.container.style.visibility = 'hidden'),
							await new Promise((e) => {
								window.setTimeout(() => {
									e();
								}, 200);
							}),
							(this.container.style.visibility = '')),
						this.unmuteAudioContext(),
						'on' === this.loadedConfig.autoplay ||
							('off' !== this.loadedConfig.autoplay && 'running' === this.audioState()))
					) {
						if ((this.play(), 'running' !== this.audioState())) {
							'hidden' !== this.loadedConfig.unmuteOverlay &&
								(this.unmuteOverlay.style.display = 'block'),
								this.container.addEventListener('click', this.unmuteOverlayClicked.bind(this), {
									once: !0
								});
							const t = null === (e = this.instance) || void 0 === e ? void 0 : e.audio_context();
							t &&
								(t.onstatechange = () => {
									'running' === t.state && this.unmuteOverlayClicked(), (t.onstatechange = null);
								});
						}
					} else this.playButton.style.display = 'block';
				}
				onRuffleDownloadProgress(e, t) {
					const n = this.preloader.querySelector('.loadbarInner'),
						i = this.preloader.querySelector('.loadbar');
					Number.isNaN(t) ? i && (i.style.display = 'none') : (n.style.width = (e / t) * 100 + '%');
				}
				destroy() {
					this.instance &&
						(this.instance.destroy(),
						(this.instance = null),
						(this._metadata = null),
						(this._readyState = 0),
						console.log('Ruffle instance destroyed.'));
				}
				checkOptions(e) {
					if ('string' == typeof e) return { url: e };
					const t = (e, t) => {
						if (!e) {
							const e = new TypeError(t);
							throw ((e.ruffleIndexError = 4), this.panic(e), e);
						}
					};
					return (
						t(null !== e && 'object' == typeof e, 'Argument 0 must be a string or object'),
						t('url' in e || 'data' in e, 'Argument 0 must contain a `url` or `data` key'),
						t(!('url' in e) || 'string' == typeof e.url, '`url` must be a string'),
						e
					);
				}
				async load(e) {
					var t, n;
					if (((e = this.checkOptions(e)), this.isConnected && !this.isUnusedFallbackObject())) {
						if (!q(this))
							try {
								if (
									((this.loadedConfig = Object.assign(
										Object.assign(
											Object.assign(
												Object.assign({}, p),
												null !==
													(n =
														null === (t = window.RufflePlayer) || void 0 === t
															? void 0
															: t.config) && void 0 !== n
													? n
													: {}
											),
											this.config
										),
										e
									)),
									(this.loadedConfig.allowScriptAccess = !0 === e.allowScriptAccess),
									this.loadedConfig.backgroundColor &&
										'transparent' !== this.loadedConfig.wmode &&
										(this.container.style.backgroundColor = this.loadedConfig.backgroundColor),
									await this.ensureFreshInstance(),
									'url' in e)
								) {
									console.log(`Loading SWF file ${e.url}`),
										(this.swfUrl = new URL(e.url, document.baseURI));
									const t = Object.assign(
										Object.assign({}, k(e.url.substring(e.url.indexOf('?')))),
										k(e.parameters)
									);
									this.instance.stream_from(this.swfUrl.href, t);
								} else
									'data' in e &&
										(console.log('Loading SWF data'),
										this.instance.load_data(new Uint8Array(e.data), k(e.parameters)));
							} catch (e) {
								throw (console.error(`Serious error occurred loading SWF file: ${e}`), e);
							}
					} else
						console.warn('Ignoring attempt to play a disconnected or suspended Ruffle element');
				}
				play() {
					this.instance && (this.instance.play(), (this.playButton.style.display = 'none'));
				}
				get isPlaying() {
					return !!this.instance && this.instance.is_playing();
				}
				get volume() {
					return this.instance ? this.instance.volume() : 1;
				}
				set volume(e) {
					this.instance && this.instance.set_volume(e);
				}
				get fullscreenEnabled() {
					return !(!document.fullscreenEnabled && !document.webkitFullscreenEnabled);
				}
				get isFullscreen() {
					return (document.fullscreenElement || document.webkitFullscreenElement) === this;
				}
				setFullscreen(e) {
					this.fullscreenEnabled && (e ? this.enterFullscreen() : this.exitFullscreen());
				}
				enterFullscreen() {
					const e = { navigationUI: 'hide' };
					this.requestFullscreen
						? this.requestFullscreen(e)
						: this.webkitRequestFullscreen
						? this.webkitRequestFullscreen(e)
						: this.webkitRequestFullScreen && this.webkitRequestFullScreen(e);
				}
				exitFullscreen() {
					document.exitFullscreen
						? document.exitFullscreen()
						: document.webkitExitFullscreen
						? document.webkitExitFullscreen()
						: document.webkitCancelFullScreen && document.webkitCancelFullScreen();
				}
				fullScreenChange() {
					var e;
					null === (e = this.instance) || void 0 === e || e.set_fullscreen(this.isFullscreen);
				}
				pointerDown(e) {
					('touch' !== e.pointerType && 'pen' !== e.pointerType) || (this.isTouch = !0);
				}
				async downloadSwf() {
					try {
						if (this.swfUrl) {
							console.log('Downloading SWF: ' + this.swfUrl);
							const e = await fetch(this.swfUrl.href);
							if (!e.ok) return void console.error('SWF download failed');
							const t = await e.blob(),
								n = URL.createObjectURL(t),
								i = document.createElement('a');
							(i.style.display = 'none'),
								(i.href = n),
								(i.download = (function (e) {
									const t = e.pathname;
									return t.substring(t.lastIndexOf('/') + 1);
								})(this.swfUrl)),
								document.body.appendChild(i),
								i.click(),
								document.body.removeChild(i),
								URL.revokeObjectURL(n);
						} else console.error('SWF download failed');
					} catch (e) {
						console.error('SWF download failed');
					}
				}
				contextMenuItems() {
					const e = String.fromCharCode(10003),
						t = [];
					this.instance &&
						this.instance.prepare_context_menu().forEach((n, i) => {
							n.separatorBefore && t.push(null),
								t.push({
									text: n.caption + (n.checked ? ` (${e})` : ''),
									onClick: () => {
										var e;
										return null === (e = this.instance) || void 0 === e
											? void 0
											: e.run_context_menu_callback(i);
									},
									enabled: n.enabled
								});
						}),
						t.push(null),
						this.fullscreenEnabled &&
							(this.isFullscreen
								? t.push({
										text: 'Exit fullscreen',
										onClick: () => {
											var e;
											return null === (e = this.instance) || void 0 === e
												? void 0
												: e.set_fullscreen(!1);
										}
								  })
								: t.push({
										text: 'Enter fullscreen',
										onClick: () => {
											var e;
											return null === (e = this.instance) || void 0 === e
												? void 0
												: e.set_fullscreen(!0);
										}
								  })),
						this.instance &&
							this.swfUrl &&
							!0 === this.loadedConfig.showSwfDownload &&
							(t.push(null),
							t.push({ text: 'Download .swf', onClick: this.downloadSwf.bind(this) })),
						window.isSecureContext &&
							t.push({
								text: 'Copy debug info',
								onClick: () => navigator.clipboard.writeText(this.getPanicData())
							}),
						t.push(null);
					const n = this.isExtension ? 'extension' : '';
					return (
						t.push({
							text: `About Ruffle ${n} (nightly 2022-12-07)`,
							onClick() {
								window.open(y, '_blank');
							}
						}),
						this.isTouch &&
							(t.push(null),
							t.push({
								text: 'Hide this menu',
								onClick: () => (this.contextMenuForceDisabled = !0)
							})),
						t
					);
				}
				showContextMenu(e) {
					if (
						(e.preventDefault(),
						!1 === this.loadedConfig.contextMenu || this.contextMenuForceDisabled)
					)
						return;
					for (; this.contextMenuElement.firstChild; )
						this.contextMenuElement.removeChild(this.contextMenuElement.firstChild);
					for (const e of this.contextMenuItems())
						if (null === e) {
							if (!this.contextMenuElement.lastElementChild) continue;
							if (this.contextMenuElement.lastElementChild.classList.contains('menu_separator'))
								continue;
							const e = document.createElement('li');
							e.className = 'menu_separator';
							const t = document.createElement('hr');
							e.appendChild(t), this.contextMenuElement.appendChild(e);
						} else {
							const { text: t, onClick: n, enabled: i } = e,
								s = document.createElement('li');
							(s.className = 'menu_item'),
								(s.textContent = t),
								this.contextMenuElement.appendChild(s),
								!1 !== i ? s.addEventListener('click', n) : s.classList.add('disabled');
						}
					(this.contextMenuElement.style.left = '0'),
						(this.contextMenuElement.style.top = '0'),
						(this.contextMenuElement.style.display = 'block');
					const t = this.getBoundingClientRect(),
						n = e.clientX - t.x,
						i = e.clientY - t.y,
						s = t.width - this.contextMenuElement.clientWidth - 1,
						r = t.height - this.contextMenuElement.clientHeight - 1;
					(this.contextMenuElement.style.left = Math.floor(Math.min(n, s)) + 'px'),
						(this.contextMenuElement.style.top = Math.floor(Math.min(i, r)) + 'px');
				}
				hideContextMenu() {
					var e;
					null === (e = this.instance) || void 0 === e || e.clear_custom_menu_items(),
						(this.contextMenuElement.style.display = 'none');
				}
				pause() {
					this.instance && (this.instance.pause(), (this.playButton.style.display = 'block'));
				}
				audioState() {
					if (this.instance) {
						const e = this.instance.audio_context();
						return (e && e.state) || 'running';
					}
					return 'suspended';
				}
				unmuteOverlayClicked() {
					if (this.instance) {
						if ('running' !== this.audioState()) {
							const e = this.instance.audio_context();
							e && e.resume();
						}
						this.unmuteOverlay.style.display = 'none';
					}
				}
				unmuteAudioContext() {
					x ||
						(navigator.maxTouchPoints < 1
							? (x = !0)
							: this.container.addEventListener(
									'click',
									() => {
										var e;
										if (x) return;
										const t =
											null === (e = this.instance) || void 0 === e ? void 0 : e.audio_context();
										if (!t) return;
										const n = new Audio();
										(n.src = (() => {
											const e = new ArrayBuffer(10),
												n = new DataView(e),
												i = t.sampleRate;
											return (
												n.setUint32(0, i, !0),
												n.setUint32(4, i, !0),
												n.setUint16(8, 1, !0),
												`data:audio/wav;base64,UklGRisAAABXQVZFZm10IBAAAAABAAEA${window
													.btoa(String.fromCharCode(...new Uint8Array(e)))
													.slice(0, 13)}AgAZGF0YQcAAACAgICAgICAAAA=`
											);
										})()),
											n.load(),
											n
												.play()
												.then(() => {
													x = !0;
												})
												.catch((e) => {
													console.warn(`Failed to play dummy sound: ${e}`);
												});
									},
									{ once: !0 }
							  ));
				}
				copyElement(e) {
					if (e) {
						for (let t = 0; t < e.attributes.length; t++) {
							const n = e.attributes[t];
							if (n.specified) {
								if ('title' === n.name && 'Adobe Flash Player' === n.value) continue;
								try {
									this.setAttribute(n.name, n.value);
								} catch (e) {
									console.warn(`Unable to set attribute ${n.name} on Ruffle instance`);
								}
							}
						}
						for (const t of Array.from(e.children)) this.appendChild(t);
					}
				}
				static htmlDimensionToCssDimension(e) {
					if (e) {
						const t = e.match(b);
						if (t) {
							let e = t[1];
							return t[3] || (e += 'px'), e;
						}
					}
					return null;
				}
				onCallbackAvailable(e) {
					const t = this.instance;
					this[e] = (...n) => (null == t ? void 0 : t.call_exposed_callback(e, n));
				}
				set traceObserver(e) {
					var t;
					null === (t = this.instance) || void 0 === t || t.set_trace_observer(e);
				}
				getPanicData() {
					const e = [];
					if (
						(e.push('\n# Player Info\n'),
						e.push(this.debugPlayerInfo()),
						e.push('\n# Page Info\n'),
						e.push(`Page URL: ${document.location.href}\n`),
						this.swfUrl && e.push(`SWF URL: ${this.swfUrl}\n`),
						e.push('\n# Browser Info\n'),
						e.push(`User Agent: ${window.navigator.userAgent}\n`),
						e.push(`Platform: ${window.navigator.platform}\n`),
						e.push(`Has touch support: ${window.navigator.maxTouchPoints > 0}\n`),
						e.push('\n# Ruffle Info\n'),
						e.push('Version: 0.1.0\n'),
						e.push('Name: nightly 2022-12-07\n'),
						e.push('Channel: nightly\n'),
						e.push('Built: 2022-12-07T00:18:07.185Z\n'),
						e.push('Commit: 2bb4e2e549ab39d2f2cb7d8194ac21bb1ca2e682\n'),
						e.push(`Is extension: ${this.isExtension}\n`),
						e.push('\n# Metadata\n'),
						this.metadata)
					)
						for (const [t, n] of Object.entries(this.metadata)) e.push(`${t}: ${n}\n`);
					return e.join('');
				}
				panic(e) {
					var t;
					if (this.panicked) return;
					if (
						((this.panicked = !0),
						this.hidePreloader(),
						e instanceof Error && ('AbortError' === e.name || e.message.includes('AbortError')))
					)
						return;
					const n = null !== (t = null == e ? void 0 : e.ruffleIndexError) && void 0 !== t ? t : 0,
						i = Object.assign([], { stackIndex: -1, avmStackIndex: -1 });
					if ((i.push('# Error Info\n'), e instanceof Error)) {
						if (
							(i.push(`Error name: ${e.name}\n`), i.push(`Error message: ${e.message}\n`), e.stack)
						) {
							const t = i.push(`Error stack:\n\`\`\`\n${e.stack}\n\`\`\`\n`) - 1;
							if (e.avmStack) {
								const t =
									i.push(
										`AVM2 stack:\n\`\`\`\n    ${e.avmStack.trim().replace(/\t/g, '    ')}\n\`\`\`\n`
									) - 1;
								i.avmStackIndex = t;
							}
							i.stackIndex = t;
						}
					} else i.push(`Error: ${e}\n`);
					i.push(this.getPanicData());
					const s = i.join(''),
						r = new Date('2022-12-07T00:18:07.185Z'),
						o = new Date();
					o.setMonth(o.getMonth() - 6);
					const a = o > r;
					let l, c, u;
					if (a) l = `<a target="_top" href="${y}#downloads">Update Ruffle</a>`;
					else {
						const e = document.location.href.split(/[?#]/)[0];
						let t = `https://github.com/ruffle-rs/ruffle/issues/new?title=${encodeURIComponent(
								`Error on ${e}`
							)}&template=error_report.md&labels=error-report&body=`,
							n = encodeURIComponent(s);
						i.stackIndex > -1 &&
							String(t + n).length > 8195 &&
							((i[i.stackIndex] = null),
							i.avmStackIndex > -1 && (i[i.avmStackIndex] = null),
							(n = encodeURIComponent(i.join('')))),
							(t += n),
							(l = `<a target="_top" href="${t}">Report Bug</a>`);
					}
					switch (n) {
						case 2:
							(c =
								'\n                    <p>It appears you are running Ruffle on the "file:" protocol.</p>\n                    <p>This doesn\'t work as browsers block many features from working for security reasons.</p>\n                    <p>Instead, we invite you to setup a local server or either use the web demo or the desktop application.</p>\n                '),
								(u = `\n                    <li><a target="_top" href="${y}/demo">Web Demo</a></li>\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/tags">Desktop Application</a></li>\n                `);
							break;
						case 4:
							(c =
								'\n                    <p>Ruffle has encountered a major issue due to an incorrect JavaScript configuration.</p>\n                    <p>If you are the server administrator, we invite you to check the error details to find out which parameter is at fault.</p>\n                    <p>You can also consult the Ruffle wiki for help.</p>\n                '),
								(u =
									'\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#javascript-api">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						case 9:
							(c =
								'\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>If you are the server administrator, please ensure the file has correctly been uploaded.</p>\n                    <p>If the issue persists, you may need to use the "publicPath" setting: please consult the Ruffle wiki for help.</p>\n                '),
								(u =
									'\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configuration-options">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						case 8:
							(c =
								'\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server is not serving ".wasm" files with the correct MIME type.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
								(u =
									'\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-webassembly-mime-type">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						case 11:
							(c =
								'\n                    <p>Ruffle failed to load the Flash SWF file.</p>\n                    <p>The most likely reason is that the file no longer exists, so there is nothing for Ruffle to load.</p>\n                    <p>Try contacting the website administrator for help.</p>\n                '),
								(u =
									'\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						case 6:
							(c =
								'\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>Access to fetch has likely been blocked by CORS policy.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
								(u =
									'\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#web">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						case 3:
							(c =
								'\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page has missing or invalid files for running Ruffle.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
								(u =
									'\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#addressing-a-compileerror">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						case 7:
							(c =
								'\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This can often resolve itself, so you can try reloading the page.</p>\n                    <p>Otherwise, please contact the website administrator.</p>\n                '),
								(u =
									'\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						case 10:
							(c =
								'\n                    <p>Ruffle failed to load the required ".wasm" file component.</p>\n                    <p>To fix this, try opening your browser\'s settings, clicking "Privacy, search, and services", scrolling down, and turning off "Enhance your security on the web".</p>\n                    <p>This will allow your browser to load the required ".wasm" files.</p>\n                    <p>If the issue persists, you might have to use a different browser.</p>\n                '),
								(u =
									'\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users#edge-webassembly-error">More Information</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						case 5:
							(c =
								'\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>It seems like this page uses JavaScript code that conflicts with Ruffle.</p>\n                    <p>If you are the server administrator, we invite you to try loading the file on a blank page.</p>\n                '),
								a &&
									(c +=
										'<p>You can also try to upload a more recent version of Ruffle that may circumvent the issue (current build is outdated: 2022-12-07T00:18:07.185Z).</p>'),
								(u = `\n                    <li>${l}</li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `);
							break;
						case 1:
							(c =
								'\n                    <p>Ruffle has encountered a major issue whilst trying to initialize.</p>\n                    <p>This web server\'s Content Security Policy does not allow the required ".wasm" component to run.</p>\n                    <p>If you are the server administrator, please consult the Ruffle wiki for help.</p>\n                '),
								(u =
									'\n                    <li><a target="_top" href="https://github.com/ruffle-rs/ruffle/wiki/Using-Ruffle#configure-wasm-csp">View Ruffle Wiki</a></li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                ');
							break;
						default:
							(c =
								'<p>Ruffle has encountered a major issue whilst trying to display this Flash content.</p>'),
								(c += a
									? '<p>If you are the server administrator, please try to upload a more recent version of Ruffle (current build is outdated: 2022-12-07T00:18:07.185Z).</p>'
									: "<p>This isn't supposed to happen, so we'd really appreciate if you could file a bug!</p>"),
								(u = `\n                    <li>${l}</li>\n                    <li><a href="#" id="panic-view-details">View Error Details</a></li>\n                `);
					}
					this.container.innerHTML = `\n            <div id="panic">\n                <div id="panic-title">Something went wrong :(</div>\n                <div id="panic-body">${c}</div>\n                <div id="panic-footer">\n                    <ul>${u}</ul>\n                </div>\n            </div>\n        `;
					const d = this.container.querySelector('#panic-view-details');
					d &&
						(d.onclick = () => {
							const e = this.container.querySelector('#panic-body');
							return e.classList.add('details'), (e.innerHTML = `<textarea>${s}</textarea>`), !1;
						}),
						this.destroy();
				}
				displayRootMovieDownloadFailedMessage() {
					if (
						window.location.origin === this.swfUrl.origin ||
						!this.isExtension ||
						!window.location.protocol.includes('http')
					) {
						const e = new Error('Failed to fetch: ' + this.swfUrl);
						return (e.ruffleIndexError = 11), void this.panic(e);
					}
					this.hidePreloader();
					const e = document.createElement('div');
					(e.id = 'message_overlay'),
						(e.innerHTML = `<div class="message">\n            <p>Ruffle wasn't able to run the Flash embedded in this page.</p>\n            <p>You can try to open the file in a separate tab, to sidestep this issue.</p>\n            <div>\n                <a target="_blank" href="${this.swfUrl}">Open in a new tab</a>\n            </div>\n        </div>`),
						this.container.prepend(e);
				}
				displayUnsupportedMessage() {
					const e = document.createElement('div');
					(e.id = 'message_overlay'),
						(e.innerHTML =
							'<div class="message">\n            <p>The Ruffle emulator does not yet support ActionScript 3, required by this content.</p>\n            <p>If you choose to run it anyway, interactivity will be missing or limited.</p>\n            <div>\n                <a target="_blank" class="more-info-link" href="https://github.com/ruffle-rs/ruffle/wiki/Frequently-Asked-Questions-For-Users">More info</a>\n                <button id="run-anyway-btn">Run anyway</button>\n            </div>\n        </div>'),
						this.container.prepend(e),
						(e.querySelector('#run-anyway-btn').onclick = () => {
							e.parentNode.removeChild(e);
						});
				}
				displayMessage(e) {
					const t = document.createElement('div');
					(t.id = 'message_overlay'),
						(t.innerHTML = `<div class="message">\n            <p>${e}</p>\n            <div>\n                <button id="continue-btn">continue</button>\n            </div>\n        </div>`),
						this.container.prepend(t),
						(this.container.querySelector('#continue-btn').onclick = () => {
							t.parentNode.removeChild(t);
						});
				}
				debugPlayerInfo() {
					let e = `Allows script access: ${this.loadedConfig.allowScriptAccess}\n`;
					return this.instance && (e += `Renderer: ${this.instance.renderer_name()}\n`), e;
				}
				hidePreloader() {
					this.preloader.classList.add('hidden'), this.container.classList.remove('hidden');
				}
				showPreloader() {
					this.preloader.classList.remove('hidden'), this.container.classList.add('hidden');
				}
				setMetadata(e) {
					(this._metadata = e),
						(this._readyState = 2),
						this.hidePreloader(),
						this.dispatchEvent(new Event(E.LOADED_METADATA)),
						this.dispatchEvent(new Event(E.LOADED_DATA));
				}
				setIsExtension(e) {
					this.isExtension = e;
				}
			}
			function I(e, t) {
				switch ((e || (e = 'sameDomain'), e.toLowerCase())) {
					case 'always':
						return !0;
					case 'never':
						return !1;
					default:
						try {
							return (
								new URL(window.location.href).origin === new URL(t, window.location.href).origin
							);
						} catch (e) {
							return !1;
						}
				}
			}
			function S(e) {
				return null === e || 'true' === e.toLowerCase();
			}
			function _(e) {
				if (e) {
					let t = '',
						n = '';
					try {
						const i = new URL(e, y);
						(t = i.pathname), (n = i.hostname.replace('www.', ''));
					} catch (e) {}
					if (t.startsWith('/v/') && ('youtube.com' === n || 'youtube-nocookie.com' === n))
						return !0;
				}
				return !1;
			}
			function A(e, t) {
				var n, i;
				const s = e.getAttribute(t),
					r =
						null !== (i = null === (n = window.RufflePlayer) || void 0 === n ? void 0 : n.config) &&
						void 0 !== i
							? i
							: {};
				if (s)
					try {
						const n = new URL(s);
						'http:' === n.protocol &&
							'https:' === window.location.protocol &&
							!1 !== r.upgradeToHttps &&
							((n.protocol = 'https:'), e.setAttribute(t, n.toString()));
					} catch (e) {}
			}
			function C(e) {
				if (e) {
					let t = '';
					try {
						t = new URL(e, y).pathname;
					} catch (e) {}
					if (t && t.length >= 4) {
						const e = t.slice(-4).toLowerCase();
						if ('.swf' === e || '.spl' === e) return !0;
					}
				}
				return !1;
			}
			function R(e) {
				switch (e.toLowerCase()) {
					case m.toLowerCase():
					case g.toLowerCase():
					case v.toLowerCase():
					case w.toLowerCase():
						return !0;
					default:
						return !1;
				}
			}
			function q(e) {
				let t = e.parentElement;
				for (; null !== t; ) {
					switch (t.tagName) {
						case 'AUDIO':
						case 'VIDEO':
							return !0;
					}
					t = t.parentElement;
				}
				return !1;
			}
			(E.LOADED_METADATA = 'loadedmetadata'), (E.LOADED_DATA = 'loadeddata');
			class F {
				constructor(e) {
					if (((this.__mimetypes = []), (this.__named_mimetypes = {}), e))
						for (let t = 0; t < e.length; t++) this.install(e[t]);
				}
				install(e) {
					const t = this.__mimetypes.length;
					this.__mimetypes.push(e),
						(this.__named_mimetypes[e.type] = e),
						(this[e.type] = e),
						(this[t] = e);
				}
				item(e) {
					return this.__mimetypes[e];
				}
				namedItem(e) {
					return this.__named_mimetypes[e];
				}
				get length() {
					return this.__mimetypes.length;
				}
				[Symbol.iterator]() {
					return this.__mimetypes[Symbol.iterator]();
				}
			}
			class P extends F {
				constructor(e, t, n, i) {
					super(i), (this.name = e), (this.description = t), (this.filename = n);
				}
				install(e) {
					super.install(e);
				}
				[Symbol.iterator]() {
					return super[Symbol.iterator]();
				}
			}
			class j {
				constructor(e) {
					(this.__plugins = []), (this.__named_plugins = {});
					for (let t = 0; t < e.length; t++) this.install(e[t]);
				}
				install(e) {
					const t = this.__plugins.length;
					this.__plugins.push(e),
						(this.__named_plugins[e.name] = e),
						(this[e.name] = e),
						(this[t] = e);
				}
				item(e) {
					return this.__plugins[e];
				}
				namedItem(e) {
					return this.__named_plugins[e];
				}
				refresh() {}
				get length() {
					return this.__plugins.length;
				}
			}
			const O = new P('Shockwave Flash', 'Shockwave Flash 32.0 r0', 'ruffle.js', null);
			O.install({ type: g, description: 'Shockwave Flash', suffixes: 'spl', enabledPlugin: O }),
				O.install({ type: m, description: 'Shockwave Flash', suffixes: 'swf', enabledPlugin: O }),
				O.install({ type: v, description: 'Shockwave Flash', suffixes: 'swf', enabledPlugin: O }),
				O.install({ type: w, description: 'Shockwave Flash', suffixes: 'swf', enabledPlugin: O });
			class N extends E {
				constructor() {
					super();
				}
				connectedCallback() {
					var e, t, n, i, s, r, o, a, l, c, u, d, h, f, p;
					super.connectedCallback();
					const m = this.attributes.getNamedItem('src');
					if (m) {
						const g =
								null !==
									(t =
										null === (e = this.attributes.getNamedItem('allowScriptAccess')) || void 0 === e
											? void 0
											: e.value) && void 0 !== t
									? t
									: null,
							v =
								null !==
									(i =
										null === (n = this.attributes.getNamedItem('menu')) || void 0 === n
											? void 0
											: n.value) && void 0 !== i
									? i
									: null;
						this.load({
							url: m.value,
							allowScriptAccess: I(g, m.value),
							parameters:
								null === (s = this.attributes.getNamedItem('flashvars')) || void 0 === s
									? void 0
									: s.value,
							backgroundColor:
								null === (r = this.attributes.getNamedItem('bgcolor')) || void 0 === r
									? void 0
									: r.value,
							base:
								null === (o = this.attributes.getNamedItem('base')) || void 0 === o
									? void 0
									: o.value,
							menu: S(v),
							salign:
								null !==
									(l =
										null === (a = this.attributes.getNamedItem('salign')) || void 0 === a
											? void 0
											: a.value) && void 0 !== l
									? l
									: '',
							quality:
								null !==
									(u =
										null === (c = this.attributes.getNamedItem('quality')) || void 0 === c
											? void 0
											: c.value) && void 0 !== u
									? u
									: 'high',
							scale:
								null !==
									(h =
										null === (d = this.attributes.getNamedItem('scale')) || void 0 === d
											? void 0
											: d.value) && void 0 !== h
									? h
									: 'showAll',
							wmode:
								null !==
									(p =
										null === (f = this.attributes.getNamedItem('wmode')) || void 0 === f
											? void 0
											: f.value) && void 0 !== p
									? p
									: 'window'
						});
					}
				}
				get src() {
					var e;
					return null === (e = this.attributes.getNamedItem('src')) || void 0 === e
						? void 0
						: e.value;
				}
				set src(e) {
					if (e) {
						const t = document.createAttribute('src');
						(t.value = e), this.attributes.setNamedItem(t);
					} else this.attributes.removeNamedItem('src');
				}
				static get observedAttributes() {
					return ['src', 'width', 'height'];
				}
				attributeChangedCallback(e, t, n) {
					var i;
					if ((super.attributeChangedCallback(e, t, n), this.isConnected && 'src' === e)) {
						let e;
						const t = this.attributes.getNamedItem('flashvars');
						t && (e = t.value);
						const n = this.attributes.getNamedItem('src');
						n &&
							this.load({
								url: n.value,
								parameters: e,
								base:
									null === (i = this.attributes.getNamedItem('base')) || void 0 === i
										? void 0
										: i.value
							});
					}
				}
				static isInterdictable(e) {
					if (q(e)) return !1;
					if (!e.getAttribute('src')) return !1;
					if (_(e.getAttribute('src'))) return A(e, 'src'), !1;
					const t = e.getAttribute('type');
					return t ? R(t) : C(e.getAttribute('src'));
				}
				static fromNativeEmbedElement(e) {
					const t = f('ruffle-embed', N),
						n = document.createElement(t);
					return n.copyElement(e), n;
				}
			}
			function T(e, t, n) {
				t = t.toLowerCase();
				for (const n in e)
					if (Object.hasOwnProperty.call(e, n) && t === n.toLowerCase()) return e[n];
				return n;
			}
			function L(e) {
				var t, n;
				const i = {};
				for (const s of e.children)
					if (s instanceof HTMLParamElement) {
						const e =
								null === (t = s.attributes.getNamedItem('name')) || void 0 === t ? void 0 : t.value,
							r =
								null === (n = s.attributes.getNamedItem('value')) || void 0 === n
									? void 0
									: n.value;
						e && r && (i[e] = r);
					}
				return i;
			}
			class M extends E {
				constructor() {
					super(), (this.params = {});
				}
				connectedCallback() {
					var e;
					super.connectedCallback(), (this.params = L(this));
					let t = null;
					this.attributes.getNamedItem('data')
						? (t =
								null === (e = this.attributes.getNamedItem('data')) || void 0 === e
									? void 0
									: e.value)
						: this.params.movie && (t = this.params.movie);
					const n = T(this.params, 'allowScriptAccess', null),
						i = T(this.params, 'flashvars', this.getAttribute('flashvars')),
						s = T(this.params, 'bgcolor', this.getAttribute('bgcolor')),
						r = T(this.params, 'base', this.getAttribute('base')),
						o = T(this.params, 'menu', null),
						a = T(this.params, 'salign', ''),
						l = T(this.params, 'quality', 'high'),
						c = T(this.params, 'scale', 'showAll'),
						u = T(this.params, 'wmode', 'window');
					if (t) {
						const e = { url: t };
						(e.allowScriptAccess = I(n, t)),
							i && (e.parameters = i),
							s && (e.backgroundColor = s),
							r && (e.base = r),
							(e.menu = S(o)),
							a && (e.salign = a),
							l && (e.quality = l),
							c && (e.scale = c),
							u && (e.wmode = u),
							this.load(e);
					}
				}
				debugPlayerInfo() {
					var e;
					let t = super.debugPlayerInfo();
					t += 'Player type: Object\n';
					let n = null;
					return (
						this.attributes.getNamedItem('data')
							? (n =
									null === (e = this.attributes.getNamedItem('data')) || void 0 === e
										? void 0
										: e.value)
							: this.params.movie && (n = this.params.movie),
						(t += `SWF URL: ${n}\n`),
						Object.keys(this.params).forEach((e) => {
							t += `Param ${e}: ${this.params[e]}\n`;
						}),
						Object.keys(this.attributes).forEach((e) => {
							var n;
							t += `Attribute ${e}: ${
								null === (n = this.attributes.getNamedItem(e)) || void 0 === n ? void 0 : n.value
							}\n`;
						}),
						t
					);
				}
				get data() {
					return this.getAttribute('data');
				}
				set data(e) {
					if (e) {
						const t = document.createAttribute('data');
						(t.value = e), this.attributes.setNamedItem(t);
					} else this.attributes.removeNamedItem('data');
				}
				static isInterdictable(e) {
					var t, n;
					if (q(e)) return !1;
					if (
						e.getElementsByTagName('ruffle-object').length > 0 ||
						e.getElementsByTagName('ruffle-embed').length > 0
					)
						return !1;
					const i =
							null === (t = e.attributes.getNamedItem('data')) || void 0 === t
								? void 0
								: t.value.toLowerCase(),
						s = L(e);
					let r;
					if (i) {
						if (_(i)) return A(e, 'data'), !1;
						r = C(i);
					} else {
						if (!s || !s.movie) return !1;
						if (_(s.movie)) {
							const t = e.querySelector("param[name='movie']");
							if (t) {
								A(t, 'value');
								const n = t.getAttribute('value');
								n && e.setAttribute('data', n);
							}
							return !1;
						}
						r = C(s.movie);
					}
					const o =
						null === (n = e.attributes.getNamedItem('classid')) || void 0 === n
							? void 0
							: n.value.toLowerCase();
					if (o === 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000'.toLowerCase())
						return (
							!Array.from(e.getElementsByTagName('object')).some(M.isInterdictable) &&
							!Array.from(e.getElementsByTagName('embed')).some(N.isInterdictable)
						);
					if (o) return !1;
					const a = e.attributes.getNamedItem('type');
					return a ? R(a.value) : r;
				}
				static fromNativeObjectElement(e) {
					const t = f('ruffle-object', M),
						n = document.createElement(t);
					for (const t of Array.from(e.getElementsByTagName('embed')))
						N.isInterdictable(t) && t.remove();
					for (const t of Array.from(e.getElementsByTagName('object')))
						M.isInterdictable(t) && t.remove();
					return n.copyElement(e), n;
				}
			}
			var U, D;
			let $;
			const B =
					null !== (D = null === (U = window.RufflePlayer) || void 0 === U ? void 0 : U.config) &&
					void 0 !== D
						? D
						: {},
				W = l(B) + 'ruffle.js';
			let V, H, z, Z;
			function Y() {
				try {
					(V = null != V ? V : document.getElementsByTagName('object')),
						(H = null != H ? H : document.getElementsByTagName('embed'));
					for (const e of Array.from(V))
						if (M.isInterdictable(e)) {
							const t = M.fromNativeObjectElement(e);
							t.setIsExtension($), e.replaceWith(t);
						}
					for (const e of Array.from(H))
						if (N.isInterdictable(e)) {
							const t = N.fromNativeEmbedElement(e);
							t.setIsExtension($), e.replaceWith(t);
						}
				} catch (e) {
					console.error(`Serious error encountered when polyfilling native Flash elements: ${e}`);
				}
			}
			function Q() {
				(z = null != z ? z : document.getElementsByTagName('iframe')),
					(Z = null != Z ? Z : document.getElementsByTagName('frame')),
					[z, Z].forEach((e) => {
						for (let t = 0; t < e.length; t++) {
							const n = e[t];
							if (void 0 !== n.dataset.rufflePolyfilled) continue;
							n.dataset.rufflePolyfilled = '';
							const i = n.contentWindow,
								s = `Couldn't load Ruffle into ${n.tagName}[${n.src}]: `;
							try {
								'complete' === i.document.readyState && G(i, s);
							} catch (e) {
								$ || console.warn(s + e);
							}
							n.addEventListener(
								'load',
								() => {
									G(i, s);
								},
								!1
							);
						}
					});
			}
			async function G(e, t) {
				var n;
				let i;
				await new Promise((e) => {
					window.setTimeout(() => {
						e();
					}, 100);
				});
				try {
					if (((i = e.document), !i)) return;
				} catch (e) {
					return void ($ || console.warn(t + e));
				}
				if ($ || void 0 === i.documentElement.dataset.ruffleOptout)
					if ($)
						e.RufflePlayer || (e.RufflePlayer = {}),
							(e.RufflePlayer.config = Object.assign(
								Object.assign({}, B),
								null !== (n = e.RufflePlayer.config) && void 0 !== n ? n : {}
							));
					else if (!e.RufflePlayer) {
						const t = i.createElement('script');
						t.setAttribute('src', W),
							(t.onload = () => {
								(e.RufflePlayer = {}), (e.RufflePlayer.config = B);
							}),
							i.head.appendChild(t);
					}
			}
			class J {
				constructor(e, t, n, i, s) {
					(this.major = e),
						(this.minor = t),
						(this.patch = n),
						(this.prIdent = i),
						(this.buildIdent = s);
				}
				static fromSemver(e) {
					const t = e.split('+'),
						n = t[0].split('-'),
						i = n[0].split('.'),
						s = parseInt(i[0], 10);
					let r = 0,
						o = 0,
						a = null,
						l = null;
					return (
						void 0 !== i[1] && (r = parseInt(i[1], 10)),
						void 0 !== i[2] && (o = parseInt(i[2], 10)),
						void 0 !== n[1] && (a = n[1].split('.')),
						void 0 !== t[1] && (l = t[1].split('.')),
						new J(s, r, o, a, l)
					);
				}
				isCompatibleWith(e) {
					return (
						(0 !== this.major && this.major === e.major) ||
						(0 === this.major && 0 === e.major && 0 !== this.minor && this.minor === e.minor) ||
						(0 === this.major &&
							0 === e.major &&
							0 === this.minor &&
							0 === e.minor &&
							0 !== this.patch &&
							this.patch === e.patch)
					);
				}
				hasPrecedenceOver(e) {
					if (this.major > e.major) return !0;
					if (this.major < e.major) return !1;
					if (this.minor > e.minor) return !0;
					if (this.minor < e.minor) return !1;
					if (this.patch > e.patch) return !0;
					if (this.patch < e.patch) return !1;
					if (null === this.prIdent && null !== e.prIdent) return !0;
					if (null !== this.prIdent && null !== e.prIdent) {
						const t = /^[0-9]*$/;
						for (let n = 0; n < this.prIdent.length && n < e.prIdent.length; n += 1) {
							if (!t.test(this.prIdent[n]) && t.test(e.prIdent[n])) return !0;
							if (t.test(this.prIdent[n]) && t.test(e.prIdent[n])) {
								if (parseInt(this.prIdent[n], 10) > parseInt(e.prIdent[n], 10)) return !0;
								if (parseInt(this.prIdent[n], 10) < parseInt(e.prIdent[n], 10)) return !1;
							} else {
								if (t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) return !1;
								if (!t.test(this.prIdent[n]) && !t.test(e.prIdent[n])) {
									if (this.prIdent[n] > e.prIdent[n]) return !0;
									if (this.prIdent[n] < e.prIdent[n]) return !1;
								}
							}
						}
						return this.prIdent.length > e.prIdent.length;
					}
					return !1;
				}
				isEqual(e) {
					return this.major === e.major && this.minor === e.minor && this.patch === e.patch;
				}
				isStableOrCompatiblePrerelease(e) {
					return (
						null === e.prIdent ||
						(this.major === e.major && this.minor === e.minor && this.patch === e.patch)
					);
				}
			}
			class K {
				constructor(e) {
					this.requirements = e;
				}
				satisfiedBy(e) {
					for (let t = 0; t < this.requirements.length; t += 1) {
						let n = !0;
						for (let i = 0; i < this.requirements[t].length; i += 1) {
							const s = this.requirements[t][i].comparator,
								r = this.requirements[t][i].version;
							(n = n && r.isStableOrCompatiblePrerelease(e)),
								'' === s || '=' === s
									? (n = n && r.isEqual(e))
									: '>' === s
									? (n = n && e.hasPrecedenceOver(r))
									: '>=' === s
									? (n = n && (e.hasPrecedenceOver(r) || r.isEqual(e)))
									: '<' === s
									? (n = n && r.hasPrecedenceOver(e))
									: '<=' === s
									? (n = n && (r.hasPrecedenceOver(e) || r.isEqual(e)))
									: '^' === s && (n = n && r.isCompatibleWith(e));
						}
						if (n) return !0;
					}
					return !1;
				}
				static fromRequirementString(e) {
					const t = e.split(' ');
					let n = [];
					const i = [];
					for (let e = 0; e < t.length; e += 1)
						if ('||' === t[e]) n.length > 0 && (i.push(n), (n = []));
						else if (t[e].length > 0) {
							const i = /[0-9]/.exec(t[e]);
							if (i) {
								const s = t[e].slice(0, i.index).trim(),
									r = J.fromSemver(t[e].slice(i.index).trim());
								n.push({ comparator: s, version: r });
							}
						}
					return n.length > 0 && i.push(n), new K(i);
				}
			}
			const X = {
				version: '0.1.0',
				polyfill(e) {
					!(function (e) {
						($ = e),
							Y(),
							Q(),
							new MutationObserver(function (e) {
								e.some((e) => e.addedNodes.length > 0) && (Y(), Q());
							}).observe(document, { childList: !0, subtree: !0 });
					})(e);
				},
				pluginPolyfill() {
					!(function (e) {
						('install' in navigator.plugins && navigator.plugins.install) ||
							Object.defineProperty(navigator, 'plugins', {
								value: new j(navigator.plugins),
								writable: !1
							}),
							navigator.plugins.install(e),
							!(e.length > 0) ||
								('install' in navigator.mimeTypes && navigator.mimeTypes.install) ||
								Object.defineProperty(navigator, 'mimeTypes', {
									value: new F(navigator.mimeTypes),
									writable: !1
								});
						const t = navigator.mimeTypes;
						for (let n = 0; n < e.length; n += 1) t.install(e[n]);
					})(O);
				},
				createPlayer() {
					const e = f('ruffle-player', E);
					return document.createElement(e);
				}
			};
			class ee {
				constructor(e) {
					(this.sources = {}),
						(this.config = {}),
						(this.invoked = !1),
						(this.newestName = null),
						(this.conflict = null),
						null != e &&
							(e instanceof ee
								? ((this.sources = e.sources),
								  (this.config = e.config),
								  (this.invoked = e.invoked),
								  (this.conflict = e.conflict),
								  (this.newestName = e.newestName),
								  e.superseded())
								: e.constructor === Object && e.config instanceof Object
								? (this.config = e.config)
								: (this.conflict = e)),
						'loading' === document.readyState
							? document.addEventListener('readystatechange', this.init.bind(this))
							: window.setTimeout(this.init.bind(this), 0);
				}
				get version() {
					return '0.1.0';
				}
				registerSource(e) {
					this.sources[e] = X;
				}
				newestSourceName() {
					let e = null,
						t = J.fromSemver('0.0.0');
					for (const n in this.sources)
						if (Object.prototype.hasOwnProperty.call(this.sources, n)) {
							const i = J.fromSemver(this.sources[n].version);
							i.hasPrecedenceOver(t) && ((e = n), (t = i));
						}
					return e;
				}
				init() {
					if (!this.invoked) {
						if (
							((this.invoked = !0),
							(this.newestName = this.newestSourceName()),
							null === this.newestName)
						)
							throw new Error('No registered Ruffle source!');
						!1 !== this.config.polyfills &&
							this.sources[this.newestName].polyfill('extension' === this.newestName);
					}
				}
				newest() {
					const e = this.newestSourceName();
					return null !== e ? this.sources[e] : null;
				}
				satisfying(e) {
					const t = K.fromRequirementString(e);
					let n = null;
					for (const e in this.sources)
						if (Object.prototype.hasOwnProperty.call(this.sources, e)) {
							const i = J.fromSemver(this.sources[e].version);
							t.satisfiedBy(i) && (n = this.sources[e]);
						}
					return n;
				}
				localCompatible() {
					return void 0 !== this.sources.local
						? this.satisfying('^' + this.sources.local.version)
						: this.newest();
				}
				local() {
					return void 0 !== this.sources.local
						? this.satisfying('=' + this.sources.local.version)
						: this.newest();
				}
				superseded() {
					this.invoked = !0;
				}
				static negotiate(e, t) {
					let n;
					return (
						(n = e instanceof ee ? e : new ee(e)),
						void 0 !== t && (n.registerSource(t), !1 !== n.config.polyfills && X.pluginPolyfill()),
						n
					);
				}
			}
			window.RufflePlayer = ee.negotiate(window.RufflePlayer, 'local');
		})();
})();
//# sourceMappingURL=ruffle.js.map
