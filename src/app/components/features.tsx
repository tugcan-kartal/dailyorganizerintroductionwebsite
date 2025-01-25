import Image, { StaticImageData } from "next/image";
import React from "react";
import TaskAddPage from "@/../public/assets/taskAddPage.png";
import TaskEditPart from "@/../public/assets/taskEditPart.png";
import TaskFilterPart from "@/../public/assets/taskFilterPart.png";
import GbtPage from "@/../public/assets/gbtPage.png";

interface FeatureParagraphProps {
  header: string;
  seconder: string;
  thirder: string;
  fourthImg: StaticImageData;
  reverse?: boolean;
}

const features=[
    {
        header: "Taskini ekle", 
        seconder: "Yapman gerekenleri koyabilirsin", 
        thirder: "Taskinin detaylarini dikkatlice belirt yapay zeka tarafindan tarancak daha sonra", 
        fourthImg: TaskAddPage
    },
    {
        header: "Taskini düzenleme", 
        seconder: "Taskini sonradan düzenleme", 
        thirder: "Taskini düzenleyebilirsin sonradan edit yaparak silmene gerek kalmadan siralayabilirsin ve yapildi olarak işaretleme", 
        fourthImg: TaskEditPart
    },
    {
        header: "Tasklarini filtreleme ve siralama", 
        seconder: "Tasklarini önceliğine göre sirala", 
        thirder: "Tasklarini kategorilerine önemlilik derecelerine tarihlerine ve bitip bitmemelerine göre ayarlayabilirsin", 
        fourthImg: TaskFilterPart
    },
    {
        header: "Taskini ai ile daniş", 
        seconder: "Tasklarini ail ile sorgulatabilme", 
        thirder: "Taskini yapay zeka ile ilk olarak tavsiye isteyebilirsin veya taskinla alakali sorularini sorabilirsin sen eklediğinde zaten otomatik tariyor", 
        fourthImg: GbtPage
    }
]

export const FeatureParagraph: React.FC<FeatureParagraphProps> = ({ header, seconder, thirder, fourthImg,reverse }) => {
  return (
    <div className={`flex justify-center items-center gap-x-[15%] my-[10%] ${reverse ? "flex-row-reverse" : "flex-row"}`}>
        <div className="flex flex-col gap-y-[1vh] text-start my-[5%] w-[30%]">
        <div className="text-blue-400">{header}</div>
        <div className="text-gray-800 text-2xl">{seconder}</div>
        <div className="text-xl text-gray-400">
            {thirder}
        </div>
        </div>

        <div className="w-[60%]">
            <Image src={fourthImg} alt="not found"/>
        </div>
    </div>

  );
};

const Features = () => {
  return (
    <div className="my-[15%]">
      <div>
        {features.map((feature,index)=>(
            <FeatureParagraph key={index} header={feature.header} seconder={feature.seconder} thirder={feature.thirder} fourthImg={feature.fourthImg} reverse={index % 2 !== 0}/>
        ))}
      </div>

        <div className="flex flex-col items-center justify-center mt-10">
            <div className="text-xl pr-[55%] py-5">
                To see how works...
            </div>
          <iframe
            className="w-[70%] h-[70vh]"
            src="https://www.youtube.com/embed/fI-iTYAwL6c"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
    </div>
  );
};

export default Features;
