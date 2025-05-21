import React, { useState, useEffect } from "react";

function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    function handleOnline() {
      setIsOnline(true);
    }
    function handleOffline() {
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <>
      {!isOnline && (
        <div
          style={{
            backgroundColor: "#ff4d4f",
            color: "white",
            padding: "10px",
            textAlign: "center",
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000,
          }}
        >
          You are offline. Please check your internet connection.
        </div>
      )}
    </>
  );
}

export default NetworkStatus;
