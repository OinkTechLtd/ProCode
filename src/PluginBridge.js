export class PluginBridge {
  constructor() {
    this.plugins = [];
  }

  loadVSCodeExtension(manifest) {
    // Mock loading mechanism for VSCode compatibility
    console.log(`Loading extension: ${manifest.name}`);
    this.plugins.push(manifest);
  }

  applyTheme(theme) {
    document.documentElement.style.setProperty('--main-bg', theme.background);
  }
}