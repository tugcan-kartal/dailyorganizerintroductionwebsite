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
        header: "Taskini Ekle", 
        seconder: "Görev Detaylarını Dikkatlice Belirt", 
        thirder: "Her görev için detaylı bilgi ekle. Yapay zeka, girdiğin bilgileri analiz ederek sana en iyi şekilde yardımcı olacak.", 
        fourthImg: TaskAddPage
    },
    {
        header: "Taskini düzenleme", 
        seconder: "Görevi Yeniden Düzenle veya Sırala", 
        thirder: "Silmek zorunda kalmadan görevlerini düzenleyebilir, sıralayabilir ve gerektiğinde `Tamamlandı` olarak işaretleyebilirsin.", 
        fourthImg: TaskEditPart
    },
    {
        header: "Tasklarini filtreleme ve siralama", 
        seconder: "Görevlerini önceliklerine göre kolayca organize et.", 
        thirder: "Görevlerini kategorilerine, önem derecelerine, tarihlerine veya tamamlanma durumlarına göre filtreleyip düzenleyebilirsin.", 
        fourthImg: TaskFilterPart
    },
    {
        header: "Taskini Yapay Zeka ile Danış", 
        seconder: "Görevlerin hakkında öneriler al ve sorularını kolayca sor.", 
        thirder: "Eklediğin görevler yapay zeka tarafından otomatik olarak taranır ve sana en uygun tavsiyeler sunulur. Görevlerinle ilgili sorularını her zaman danışabilirsin.", 
        fourthImg: GbtPage
    }
]

export const FeatureParagraph: React.FC<FeatureParagraphProps> = ({
  header,
  seconder,
  thirder,
  fourthImg,
  reverse,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } justify-center items-center gap-y-8 md:gap-x-[15%] my-[10%]`}
    >
      {/* Text Section */}
      <div className="flex flex-col gap-y-4 text-center md:text-start my-[5%] w-full md:w-[40%]">
        <div className="text-blue-400 font-semibold text-lg md:text-xl">
          {header}
        </div>
        <div className="text-gray-800 text-2xl md:text-3xl font-semibold">
          {seconder}
        </div>
        <div className="text-lg md:text-xl text-gray-400 leading-relaxed">
          {thirder}
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-[50%]">
        <Image
          src={fourthImg}
          alt="not found"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};


const Features = () => {
  return (
    <div className="my-[15%]">
      <div id="features">
        {features.map((feature, index) => (
          <FeatureParagraph
            key={index}
            header={feature.header}
            seconder={feature.seconder}
            thirder={feature.thirder}
            fourthImg={feature.fourthImg}
            reverse={index % 2 !== 0}
          />
        ))}
      </div>

      <div id="howitworks" className="flex flex-col md:flex-row items-center justify-center mt-10 space-y-5 md:space-y-0 md:space-x-10">
        <div className="flex flex-col items-start max-w-md space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-bold">Discover How It Works</h2>
          <p className="text-base text-gray-600">
            Watch the video to see how Taskly Adviser AI simplifies your task
            management and makes your daily workflow smarter.
          </p>
        </div>
        <iframe
          className="w-full md:w-[60%] h-[50vh] rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/fI-iTYAwL6c"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Features;
