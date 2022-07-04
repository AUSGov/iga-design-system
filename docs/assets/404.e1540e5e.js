import { _ as _export_sfc, f as defineComponent, u as useRouteLocale, g as useThemeLocaleData, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, t as toDisplayString, a as createVNode, w as withCtx, d as createTextVNode, h as unref } from "./app.67d63164.js";
const _hoisted_1 = { class: "theme-container" };
const _hoisted_2 = { class: "theme-default-content" };
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("h1", null, "404", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode();
const _hoisted_5 = /* @__PURE__ */ createTextVNode();
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "404",
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _cache) => {
      const _component_RouterLink = resolveComponent("RouterLink");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createBaseVNode("div", _hoisted_2, [
          _hoisted_3,
          _hoisted_4,
          createBaseVNode("blockquote", null, toDisplayString(getMsg()), 1),
          _hoisted_5,
          createVNode(_component_RouterLink, { to: unref(homeLink) }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(unref(homeText)), 1)
            ]),
            _: 1
          }, 8, ["to"])
        ])
      ]);
    };
  }
});
var _404 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "404.vue"]]);
export { _404 as default };