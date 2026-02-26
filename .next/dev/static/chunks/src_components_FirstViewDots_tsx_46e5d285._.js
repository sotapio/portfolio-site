(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/FirstViewDots.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FirstViewDots
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const SPACING = 28;
const DOT_SIZE = 4;
const ATTRACT_RADIUS = 360;
const MAX_MOVE = 480;
function FirstViewDots() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: null,
        y: null
    });
    const rafRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FirstViewDots.useEffect": ()=>{
            const container = containerRef.current;
            const bg = container?.closest('.p-firstView__bg');
            if (!container || !bg) return;
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
            function createDots() {
                if (!container) return;
                const w = container.offsetWidth;
                const h = container.offsetHeight;
                const cols = Math.ceil(w / SPACING) + 1;
                const rows = Math.ceil(h / SPACING) + 1;
                container.innerHTML = '';
                dotsRef.current = [];
                for(let row = 0; row < rows; row++){
                    for(let col = 0; col < cols; col++){
                        const cx = col * SPACING + SPACING / 2;
                        const cy = row * SPACING + SPACING / 2;
                        const el = document.createElement('span');
                        el.className = 'p-firstView__dot';
                        el.style.left = `${cx - DOT_SIZE / 2}px`;
                        el.style.top = `${cy - DOT_SIZE / 2}px`;
                        container.appendChild(el);
                        dotsRef.current.push({
                            el,
                            cx,
                            cy
                        });
                    }
                }
                if (bg) bg.classList.add('has-dots');
            }
            function updateDots() {
                rafRef.current = null;
                const { x: mouseX, y: mouseY } = mouseRef.current;
                if (mouseX === null || mouseY === null) {
                    dotsRef.current.forEach({
                        "FirstViewDots.useEffect.updateDots": (d)=>{
                            d.el.style.transform = 'translate(0, 0)';
                        }
                    }["FirstViewDots.useEffect.updateDots"]);
                    return;
                }
                dotsRef.current.forEach({
                    "FirstViewDots.useEffect.updateDots": (d)=>{
                        const dx = mouseX - d.cx;
                        const dy = mouseY - d.cy;
                        const dist = Math.sqrt(dx * dx + dy * dy);
                        if (dist < ATTRACT_RADIUS && dist > 0) {
                            const t = 1 - dist / ATTRACT_RADIUS;
                            const move = MAX_MOVE * t * t;
                            const ox = dx / dist * move;
                            const oy = dy / dist * move;
                            d.el.style.transform = `translate(${ox}px, ${oy}px)`;
                        } else {
                            d.el.style.transform = 'translate(0, 0)';
                        }
                    }
                }["FirstViewDots.useEffect.updateDots"]);
            }
            function onMouseMove(e) {
                const me = e;
                const el = containerRef.current;
                if (!el) return;
                const rect = el.getBoundingClientRect();
                mouseRef.current = {
                    x: me.clientX - rect.left,
                    y: me.clientY - rect.top
                };
                if (rafRef.current === null) rafRef.current = requestAnimationFrame(updateDots);
            }
            function onMouseLeave() {
                mouseRef.current = {
                    x: null,
                    y: null
                };
                if (rafRef.current === null) rafRef.current = requestAnimationFrame(updateDots);
            }
            createDots();
            const firstView = container.closest('.p-firstView');
            if (firstView) {
                firstView.addEventListener('mousemove', onMouseMove, {
                    passive: true
                });
                firstView.addEventListener('mouseleave', onMouseLeave);
            }
            const onResize = {
                "FirstViewDots.useEffect.onResize": ()=>createDots()
            }["FirstViewDots.useEffect.onResize"];
            window.addEventListener('resize', onResize);
            return ({
                "FirstViewDots.useEffect": ()=>{
                    window.removeEventListener('resize', onResize);
                    if (firstView) {
                        firstView.removeEventListener('mousemove', onMouseMove);
                        firstView.removeEventListener('mouseleave', onMouseLeave);
                    }
                    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
                }
            })["FirstViewDots.useEffect"];
        }
    }["FirstViewDots.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "p-firstView__dots",
        id: "js-firstView-dots",
        "aria-hidden": "true"
    }, void 0, false, {
        fileName: "[project]/src/components/FirstViewDots.tsx",
        lineNumber: 106,
        columnNumber: 10
    }, this);
}
_s(FirstViewDots, "DVlDMICJtKhj7LGZYH69OQ7Y7Yw=");
_c = FirstViewDots;
var _c;
__turbopack_context__.k.register(_c, "FirstViewDots");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_components_FirstViewDots_tsx_46e5d285._.js.map