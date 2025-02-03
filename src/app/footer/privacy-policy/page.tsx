import Contact from "@/app/components/contact";
import Link from "next/link";
import React from "react";
import { IoMdHome } from "react-icons/io";

const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col gap-y-8 justify-center items-center pt-[5%] px-4 max-w-3xl mx-auto">
      <div className="text-4xl">
        <Link href={"/"}><IoMdHome /></Link>
      </div>
      <div className="w-full text-center md:text-start">
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-700">Gizlilik Politikası</h1>
      </div>
      <div className="w-full text-base md:text-lg text-gray-600 leading-relaxed">
        <p>
          Kullanıcılarımızın gizliliği bizim için önemlidir. Bu gizlilik politikası,
          web sitemizi kullanırken hangi bilgileri topladığımızı, nasıl kullandığımızı
          ve koruduğumuzu açıklar.
        </p>
        <h2 className="text-xl font-semibold mt-4 text-gray-700">Toplanan Bilgiler</h2>
        <p>
          Web sitemizi ziyaret ettiğinizde, IP adresiniz, tarayıcı bilgileriniz ve
          çerezler gibi bazı bilgileri otomatik olarak toplayabiliriz.
        </p>
        <h2 className="text-xl font-semibold mt-4 text-gray-700">Bilgilerin Kullanımı</h2>
        <p>
          Toplanan bilgiler, kullanıcı deneyimini iyileştirmek, analiz yapmak ve
          hizmetlerimizi geliştirmek amacıyla kullanılmaktadır.
        </p>
        <h2 className="text-xl font-semibold mt-4 text-gray-700">Bilgi Paylaşımı</h2>
        <p>
          Kişisel bilgileriniz üçüncü taraflarla paylaşılmamaktadır, ancak yasal
          gereklilikler doğrultusunda yetkili makamlarla paylaşılabilir.
        </p>
        <h2 className="text-xl font-semibold mt-4 text-gray-700">İletişim</h2>
        <p>
          Gizlilik politikamız hakkında sorularınız varsa, bizimle iletişime geçebilirsiniz.
        </p>
      </div>
      <Contact />
    </div>
  );
};

export default PrivacyPolicy;
