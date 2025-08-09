import React, { useState, useRef,useEffect } from 'react';
import { QRCode } from 'react-qrcode-logo';
import Navbar from '../Navbar';
import DownloadButton from './DownloadButton';
import { Helmet } from 'react-helmet';

const Qrquick = () => {
  const [size, setSize] = useState(window.innerWidth <= 320 ? 250 : 300);

  const [dataType, setDataType] = useState('url');
  const [text, setText] = useState('https://example.com');
  const [emailData, setEmailData] = useState({ email: 'Enter the email', subject: 'write subject', body: 'write about your subject' });
  const [phone, setPhone] = useState('');
  const [wifiData, setWifiData] = useState({ ssid: 'Home wifi', password: '123', encryption: 'WPA' });
  const [vcardData, setVcardData] = useState({
    firstName: 'your first name',
    lastName: 'lastname',
    phone: 'eg:+12344590',
    email: 'example@gmail.com',
    organization: 'organization',
  });
  const [fgColor, setFgColor] = useState('#000000');
  const [logo, setLogo] = useState(null);
  const canvasRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => setLogo(reader.result);
    reader.readAsDataURL(file);
  };

  // Format QR code value with proper encoding
 // Format QR code value with better spacing and readability
const getQrValue = () => {
  switch (dataType) {
    case 'email': {
      const { email, subject, body } = emailData;
      if (!email) return '';
      let mailto = `mailto:${encodeURIComponent(email)}`;
      const params = [];
      if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
      if (body) params.push(`body=${encodeURIComponent(body)}`);
      if (params.length > 0) mailto += '?' + params.join('&');
      return mailto.trim();
    }
    case 'phone': {
      if (!phone) return '';
      return `tel:${phone.replace(/\s/g, '')}`;
    }
    case 'wifi': {
      const { ssid, password, encryption } = wifiData;
      if (!ssid) return '';
      // Use proper WIFI QR format with line breaks removed, proper order and nopass support
      return `WIFI:T:${encryption};S:${ssid};P:${password || ''};;`;
    }
    case 'vcard': {
      const { firstName, lastName, phone: vPhone, email: vEmail, organization } = vcardData;
      if (!firstName && !lastName && !vPhone && !vEmail && !organization) return '';
      return [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `N:${lastName || ''};${firstName || ''};;;`,
        `FN:${[firstName, lastName].filter(Boolean).join(' ')}`,
        organization ? `ORG:${organization}` : '',
        vPhone ? `TEL;TYPE=CELL:${vPhone.replace(/\s/g, '')}` : '',
        vEmail ? `EMAIL:${vEmail}` : '',
        'END:VCARD',
      ].filter(Boolean).join('\n');
    }
    case 'url':
    default:
      return text.trim() || 'https://example.com';
  }
};

useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth <= 320 ? 250 : 300);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div id="qrquick" className="min-h-screen ">
      <Navbar />
       <Helmet>
        <title>QrQuick – Free Custom QR Code Generator</title>
        <meta
          name="description"
          content="Create free custom QR codes instantly with QrCode Quick. Add colors, logos, and styles for links, Wi-Fi, contacts, emails, and more."
        />
      </Helmet>
      <div className="w-full text-center p-4 mb-4">
  <span className="text-sm"></span>
</div>
      <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 mt-20 md:grid-cols-2 gap-10">
        {/* Left panel: controls */}
        <div className="bg-white p-6 rounded shadow space-y-6">
          <h1 className="text-2xl font-bold mb-4">QrQuick – Free Custom QR Code Generator Online
</h1>

          <div>
            <label className="block font-semibold mb-1">Select Data Type</label>
            <select
              value={dataType}
              onChange={(e) => setDataType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="url">URL/Text</option>
              <option value="email">Email</option>
              <option value="phone">Phone Number</option>
              <option value="wifi">Wi-Fi</option>
              <option value="vcard">vCard (Contact)</option>
            </select>
          </div>

          {dataType === 'url' && (
            <div>
              <label className="block font-semibold mb-1">Enter Text or URL</label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter text or URL"
              />
            </div>
          )}

          {dataType === 'email' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Email Address <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  value={emailData.email}
                  onChange={(e) => setEmailData({ ...emailData, email: e.target.value })}
                  placeholder="Enter email address"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Subject (optional)</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={emailData.subject}
                  onChange={(e) => setEmailData({ ...emailData, subject: e.target.value })}
                  placeholder="Enter email subject"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Body (optional)</label>
                <textarea
                  className="w-full p-2 border rounded"
                  value={emailData.body}
                  onChange={(e) => setEmailData({ ...emailData, body: e.target.value })}
                  placeholder="Enter email body"
                />
              </div>
            </div>
          )}

          {dataType === 'phone' && (
            <div>
              <label className="block font-semibold mb-1">Phone Number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                className="w-full p-2 border rounded"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number (e.g., +1234567890)"
                required
              />
            </div>
          )}

          {dataType === 'wifi' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">Wi-Fi SSID <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={wifiData.ssid}
                  onChange={(e) => setWifiData({ ...wifiData, ssid: e.target.value })}
                  placeholder="Enter Wi-Fi SSID"
                  required
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Password</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={wifiData.password}
                  onChange={(e) => setWifiData({ ...wifiData, password: e.target.value })}
                  placeholder="Enter Wi-Fi password"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Encryption Type</label>
                <select
                  value={wifiData.encryption}
                  onChange={(e) => setWifiData({ ...wifiData, encryption: e.target.value })}
                  className="w-full p-2 border rounded"
                >
                  <option value="WPA">WPA/WPA2</option>
                  <option value="WEP">WEP</option>
                  <option value="nopass">No Password</option>
                </select>
              </div>
            </div>
          )}

          {dataType === 'vcard' && (
            <div className="space-y-4">
              <div>
                <label className="block font-semibold mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={vcardData.firstName}
                  onChange={(e) => setVcardData({ ...vcardData, firstName: e.target.value })}
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={vcardData.lastName}
                  onChange={(e) => setVcardData({ ...vcardData, lastName: e.target.value })}
                  placeholder="Enter last name"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full p-2 border rounded"
                  value={vcardData.phone}
                  onChange={(e) => setVcardData({ ...vcardData, phone: e.target.value })}
                  placeholder="Enter phone number"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border rounded"
                  value={vcardData.email}
                  onChange={(e) => setVcardData({ ...vcardData, email: e.target.value })}
                  placeholder="Enter email address"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Organization (optional)</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={vcardData.organization}
                  onChange={(e) => setVcardData({ ...vcardData, organization: e.target.value })}
                  placeholder="Enter organization"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block font-semibold mb-1">Choose QR Color</label>
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              className="w-16 h-10 p-0 border rounded"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Upload Logo (optional)</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {logo && (
              <div className="mt-2 flex items-center space-x-4">
                <img src={logo} alt="Logo Preview" className="h-12 w-12 object-contain border rounded" />
                <button
                  onClick={() => setLogo(null)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  type="button"
                >
                  Remove Logo
                </button>
              </div>
            )}
          </div>
{/* Ad Spot 2 */}
<div className="mt-6 p-4 rounded text-center">
</div>

      
        </div>

        {/* Right panel: QR code result */}
        <div className="bg-white p-6 rounded shadow flex flex-col items-center justify-center">
          <h2 className="text-xl font-semibold mb-4">Your QR Code</h2>
          {getQrValue() ? (
            <QRCode
              value={getQrValue()}
              fgColor={fgColor}
              logoImage={logo}
              logoWidth={50}
              logoHeight={50}
              quietZone={10}
             size={size}
              ecLevel="H" // High error correction
              ref={canvasRef}
            />
            
          ) : (
            <p className="text-red-500">Please enter required fields to generate QR code.</p>
          )}
         <DownloadButton
  canvasRef={canvasRef}
  resetText={() => setText('https://example.com')}
  resetEmailData={() => setEmailData({ email: 'Enter the email', subject: 'write subject', body: 'write about your subject' })}
  resetPhone={() => setPhone('')}
  resetWifiData={() => setWifiData({ ssid: 'Home wifi', password: '123', encryption: 'WPA' })}
  resetVcardData={() => setVcardData({
    firstName: 'your first name',
    lastName: 'lastname',
    phone: 'eg:+12344590',
    email: 'example@gmail.com',
    organization: 'organization',
  })}
  resetLogo={() => setLogo(null)}
/>  
{/* Ad Spot 3 */}
<div className="mt-6 p-4 text-center">
</div>


        </div>
        
      </div>
      {/* Ad Spot 4 */}
<div className="w-full py-6 text-center mt-10">
</div>

    </div>
  );
};

export default Qrquick;