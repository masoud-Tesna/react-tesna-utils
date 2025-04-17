"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClosestBody = void 0;
const react_1 = require("react");
const util_1 = require("./util");
function getClosestBody(el) {
    if (!el) {
        return null;
    }
    else if (el.tagName === 'BODY') {
        return el;
    }
    else if (el.tagName === 'IFRAME') {
        const document = el.contentDocument;
        return document ? document.body : null;
    }
    else if (!el.offsetParent) {
        return null;
    }
    return getClosestBody(el.offsetParent);
}
exports.getClosestBody = getClosestBody;
function preventDefault(rawEvent) {
    var _a;
    const e = rawEvent || window.event;
    // Do not prevent if the event has more than one touch (usually meaning this is a multi touch gesture like pinch to zoom).
    if (((_a = e === null || e === void 0 ? void 0 : e.touches) === null || _a === void 0 ? void 0 : _a.length) > 1)
        return true;
    if (e === null || e === void 0 ? void 0 : e.preventDefault)
        e === null || e === void 0 ? void 0 : e.preventDefault();
    return false;
}
const isIosDevice = util_1.isBrowser && window.navigator && window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform);
const bodies = new Map();
const doc = typeof document === 'object' ? document : undefined;
let documentListenerAdded = false;
exports.default = !doc
    ? function useLockBodyMock(_locked = true, _elementRef) { }
    : function useLockBody(locked = true, elementRef) {
        const bodyRef = (0, react_1.useRef)(doc.body);
        elementRef = elementRef || bodyRef;
        const lock = (body) => {
            const bodyInfo = bodies.get(body);
            if (!bodyInfo) {
                bodies.set(body, { counter: 1, initialOverflow: body.style.overflow });
                if (isIosDevice) {
                    if (!documentListenerAdded) {
                        (0, util_1.on)(document, 'touchmove', preventDefault, { passive: false });
                        documentListenerAdded = true;
                    }
                }
                else {
                    body.style.overflow = 'hidden';
                }
            }
            else {
                bodies.set(body, {
                    counter: bodyInfo.counter + 1,
                    initialOverflow: bodyInfo.initialOverflow,
                });
            }
        };
        const unlock = (body) => {
            const bodyInfo = bodies.get(body);
            if (bodyInfo) {
                if (bodyInfo.counter === 1) {
                    bodies.delete(body);
                    if (isIosDevice) {
                        body.ontouchmove = null;
                        if (documentListenerAdded) {
                            (0, util_1.off)(document, 'touchmove', preventDefault);
                            documentListenerAdded = false;
                        }
                    }
                    else {
                        body.style.overflow = bodyInfo.initialOverflow;
                    }
                }
                else {
                    bodies.set(body, {
                        counter: bodyInfo.counter - 1,
                        initialOverflow: bodyInfo.initialOverflow,
                    });
                }
            }
        };
        (0, react_1.useEffect)(() => {
            const body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            if (locked) {
                lock(body);
            }
            else {
                unlock(body);
            }
        }, [locked, elementRef.current]);
        // clean up, on un-mount
        (0, react_1.useEffect)(() => {
            const body = getClosestBody(elementRef.current);
            if (!body) {
                return;
            }
            return () => {
                unlock(body);
            };
        }, []);
    };
