import React from "react";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack5";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { FcPrint } from "react-icons/fc";
pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.worker.js`;
const Cv = () => {
  return (
    <div className="w-min mx-auto">
      <a
        href="./files/sabitalizade.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed h-20 w-20 bottom-3 right-5 text-4xl z-50 bg-[#25dac1] rounded-full flex justify-center items-center"
      >
        <FcPrint />
      </a>
      <Document file="./files/sabitalizade.pdf">
        <Page
          className="h-full w-full"
          pageNumber={1}
          scale={1.3}
          loading={
            <div className="w-full h-full flex justify-center items-center text-3xl text-white">
              Loading...
            </div>
          }
        />
      </Document>
    </div>
  );
};

export default Cv;
