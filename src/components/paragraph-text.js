import React from "react";

function ParagraphText() {
  const text = `Join Julie, a new General Manager, as she takes on the challenge of transforming NZFS, a company plagued by the all-too-familiar issues that afflict large organisations. 

  Drawing upon a wealth of real-life case studies, this 
  captivating story follows Julie as she measures the company’s current state, identifies pain points, and enhances customer value. With each iteration, she brings her department closer to success, proving that change is indeed possible.
  
  Blending fiction with the author’s firsthand encounters, this compelling tale offers not only a gripping narrative but also the academic foundation that explains why these pain points arise and how they can be resolved. This unique combination of storytelling and practical insight will keep you hooked from the first page to the last.
  
  Will Julie’s pursuit of change usher in a new era for NZFS?
  `;

  const paragraphs = text
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return <div>{paragraphs}</div>;
}

export default ParagraphText;
