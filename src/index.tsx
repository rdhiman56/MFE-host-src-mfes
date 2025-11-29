// Preload remote entry and initialize Module Federation
function loadRemoteEntry(url: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load ${url}`));
    document.head.appendChild(script);
  });
}

// Wait for remoteEntry to load, then wait a tick for Module Federation to initialize
async function initializeApp() {
  try {
    await loadRemoteEntry("http://localhost:3001/remoteEntry.js");

    // Give Module Federation a moment to initialize the shared scope
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Now import React and App (shared modules should be available)
    const React = await import("react");
    const ReactDOM = await import("react-dom/client");
    const { default: App } = await import("./App");

    const root = ReactDOM.createRoot(document.getElementById("root")!);
    root.render(React.createElement(App));
  } catch (err) {
    console.error("Failed to load app:", err);
  }
}

initializeApp();
