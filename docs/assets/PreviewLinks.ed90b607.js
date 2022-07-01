import { _ as _export_sfc, D as ref, j as computed, X as LinkExternal, V as LinkArrowRight, a5 as resolveDirective, o as openBlock, q as createBlock, w as withCtx, b as createBaseVNode, s as normalizeClass, h as unref, a4 as withModifiers, E as withDirectives, c as createElementBlock, m as createCommentVNode, d as createTextVNode } from "./app.7c3b1c07.js";
import CodePreview from "./Index.7f9355b4.js";
import "./hamburger-2.8adf8044.js";
import "./Radio.4be7ae83.js";
import "./Checkbox.c11667b2.js";
import "./Select.315e96f9.js";
import "./Highlighter.43a16181.js";
import "./prism-line-numbers.dc22a1e8.js";
const _hoisted_1 = /* @__PURE__ */ createTextVNode("\n");
const _hoisted_2 = /* @__PURE__ */ createTextVNode("\n  ");
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("span", null, "Link Text", -1);
const _hoisted_4 = /* @__PURE__ */ createTextVNode("\n  ");
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = /* @__PURE__ */ createTextVNode("\n");
const _hoisted_7 = /* @__PURE__ */ createTextVNode("\n\n");
const _sfc_main = {
  __name: "PreviewLinks",
  setup(__props) {
    const formConfig = ref([
      {
        label: "Variation",
        id: "variation",
        type: "select",
        options: [
          {
            key: "linkPrimary",
            label: "Primary",
            value: "link-icon"
          },
          {
            key: "linkSecondary",
            label: "Secondary",
            value: "link-icon link-secondary"
          }
        ]
      },
      {
        label: "Type Radio",
        id: "type",
        type: "radio",
        options: [
          {
            label: "Internal",
            value: "internal",
            checked: true
          },
          {
            label: "External",
            value: "external"
          }
        ]
      }
    ]);
    const formData = ref({});
    const linkClass = computed(() => {
      const classes = [];
      if (typeof formData.value.variation !== "undefined") {
        classes.push(formData.value.variation);
      }
      return classes.join(" ");
    });
    const linkType = computed(() => {
      switch (formData.value.type) {
        case "internal":
          return LinkArrowRight;
        case "external":
          return LinkExternal;
        default:
          return null;
      }
    });
    const formDataChanged = (formDataExternal) => {
      formData.value = formDataExternal;
    };
    return (_ctx, _cache) => {
      const _directive_inline_svg = resolveDirective("inline-svg");
      return openBlock(), createBlock(CodePreview, {
        formConfig: formConfig.value,
        onFormDataChanged: formDataChanged
      }, {
        default: withCtx((slotProps) => [
          createBaseVNode("pre", null, [
            _hoisted_1,
            createBaseVNode("a", {
              href: "#",
              class: normalizeClass(unref(linkClass)),
              onClick: _cache[0] || (_cache[0] = withModifiers(() => {
              }, ["prevent"]))
            }, [
              _hoisted_2,
              _hoisted_3,
              _hoisted_4,
              unref(linkType) !== null ? withDirectives((openBlock(), createElementBlock("svg", {
                key: 0,
                innerHTML: unref(linkType)
              }, null, 8, _hoisted_5)), [
                [_directive_inline_svg]
              ]) : createCommentVNode("", true),
              _hoisted_6
            ], 2),
            _hoisted_7
          ])
        ]),
        _: 1
      }, 8, ["formConfig"]);
    };
  }
};
var PreviewLinks = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "PreviewLinks.vue"]]);
export { PreviewLinks as default };
