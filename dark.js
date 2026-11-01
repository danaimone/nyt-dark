const root = document.documentElement;

const followSystemTheme = () => {
  root.classList.replace("tpl-always-light", "tpl-user-default");
};

followSystemTheme();
new MutationObserver(followSystemTheme).observe(root, {
  attributes: true,
  attributeFilter: ["class"],
});
