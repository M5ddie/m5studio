
const DownloadCV = () => {
  // This is a helper function that creates a hidden link element
  // and simulates a click event to download the PDF file
  const downloadFile = async (fileUrl) => {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'CV_MadelynPerez.pdf';
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <button onClick={() => downloadFile('https://raw.githubusercontent.com/M5ddie/m5studio/master/src/assets/pdf/CV_MadelynPerez.pdf')}>
      Download PDF
    </button>
  )
}

export default DownloadCV