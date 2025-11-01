"use client";
import { useEffect } from "react";

export default function DownloadPage() {
  useEffect(() => {
    // Automatically trigger download when the page loads
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // File in public folder
    link.download = "Shivansh_Resume.pdf"; // Filename
    window.open("/resume.pdf", "_blank");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        Downloading your resume...
      </h1>
      <p className="text-gray-500">
        If it doesn’t start automatically,
        <a href="/resume.pdf" download className="text-blue-600 underline">
          click here
        </a>
        .
      </p>
    </div>
  );
}
