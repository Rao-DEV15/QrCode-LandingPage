import React, { useState, useEffect } from 'react';

const DownloadButton = ({
  canvasRef,
  resetText,
  resetEmailData,
  resetPhone,
  resetWifiData,
  resetVcardData,
  resetLogo,
}) => {
  const [countdown, setCountdown] = useState(null);

  const handleDownload = () => {
    let canvas = canvasRef.current;

    if (!canvas || typeof canvas.toDataURL !== 'function') {
      canvas = document.querySelector('canvas');
    }

    if (canvas && typeof canvas.toDataURL === 'function') {
      try {
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png');
        link.download = 'qrcode.png';
        link.click();

        // After download, reset inputs:
        resetText();
        resetEmailData();
        resetPhone();
        resetWifiData();
        resetVcardData();
        resetLogo();

      } catch (error) {
        console.error('Error generating download:', error);
      }
    } else {
      console.error('Canvas element not available or toDataURL is not a function');
    }
  };

  const startCountdown = () => {
    setCountdown(5);
  };

  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      handleDownload();
      setCountdown(null);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown(countdown - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div>
      <button
        onClick={startCountdown}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        disabled={countdown !== null}
      >
        {countdown !== null ? `Downloading in ${countdown}...` : 'Download QR Code'}
      </button>
    </div>
  );
};

export default DownloadButton;
