import React from "react";
import PdfViewer from "../../component/PdfViewer";
import pdfViewer from "../../component/PdfViewer";

export default () => {
  const pdfUrl = 'https://bajinsheng.github.io/assets/pdf/JinshengBa_CV.pdf'

  return <div>
    <div style={{fontSize: "2rem", margin: "2vh 2vw"}}>CV</div>
    <PdfViewer fileUrl={pdfUrl}/>
  </div>
}
