import React, { useState } from 'react';

const VerifyCertificate = () => {
  const [showIframe, setShowIframe] = useState(false);
  const [code, setCode] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the code input
    setShowIframe(true);
  };

  return (
    <div className="flex flex-col items-center">
      <header className="bg-blue-500 py-4 text-white text-center w-full">
        <h1 className="text-2xl font-bold">Verify Certificate</h1>
      </header>
      <div className="mt-8">
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="rounded-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
      {/* Show the embedded Google Drive PDF viewer iframe when showIframe is true */}
      {showIframe && (
        <div className="mt-8">
          <iframe
            src="https://drive.google.com/file/d/1K6teX8llxA_paLIlR-a1TJhq9Yx1hFrC/preview"
            width="640"
            height="480"
            title="Embedded PDF Viewer"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default VerifyCertificate;
