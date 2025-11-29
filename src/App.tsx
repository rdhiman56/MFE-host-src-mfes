import React, { Suspense } from "react";

const RemoteApp = React.lazy(() => import("mfeApp/App"));

const App = () => {
  return (
    <div>
      <h1>Hello, HOST</h1>
      <Suspense fallback={<div>Loading remote MFE...</div>}>
        <RemoteApp />
      </Suspense>
    </div>
  );
};

export default App;
