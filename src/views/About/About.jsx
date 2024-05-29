import React from "react";
import "./styleAbout.css"; // CSS dosyasını import ediyoruz

export default function About() {
  const banner = require("../../images/textlogo.png");
  const banner2 = require("../../images/logo.png");
  const banner3 = require("../../images/GMZLOGO.png");
  const banner4 = require("../../images/estu_logo.png");
  return (
    <div className="about-container">
      <div className="about-content">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            opacity: "1",
            width: "100%",
          }}
        >
          <img
            alt="logoType"
            className="mx-auto img-fluid text-center"
            style={{
              objectFit: "contain",
              width: "100px",
            }}
            src={banner2}
          />
          <img
            alt="logoType"
            className="mx-auto img-fluid text-center"
            style={{
              objectFit: "contain",
              width: "300px",
              margin: "auto",
            }}
            src={banner}
          />
          <img
            alt="logoType"
            className="mx-auto img-fluid text-center"
            style={{
              objectFit: "contain",
              width: "100px",
            }}
            src={banner4}
          />
          <img
            alt="logoType"
            className="mx-auto img-fluid text-center"
            style={{
              objectFit: "contain",
              width: "100px",
              margin: "auto",
            }}
            src={banner3}
          />
        </div>
        <p>
          Projemiz, Eskişehir Teknik Üniversitesi'nin (ESTÜ) sağladığı modern
          eğitim olanakları ve araştırma altyapısı sayesinde hayat bulmuştur.
          ESTÜ'nün sunduğu geniş imkanlar, projelerimizi daha ileriye taşımamıza
          olanak sağlamış ve sağlamaya devam edecektir.
        </p>
        <p>
          GMZ Enerji ile gerçekleştirdiğimiz veri ortaklığı, enerji verimliliği
          konusundaki analizlerimizin doğruluğunu ve güncelliğini artırmamıza
          yardımcı olmaktadır. Bu iş birliği, projelerimizin güvenilirliğini ve
          etkinliğini büyük ölçüde artırmaktadır.
        </p>
        <p>
          Projemizin mimarları olarak bizler, Görkem Durmaz (Full Stack
          Developer), Sezin Acet (Front-End Developer) ve Ahmet Arif Akıncı
          (Back-End Developer), enerji verimliliği ve sürdürülebilirlik
          konularına büyük bir tutku ile yaklaşmaktayız. Akademik danışmanımız
          Lec. Emre Kaçmaz ve endüstri danışmanımız Doç. Dr. Gamze Karanfil
          Kaçmaz’ın rehberliğinde, projeyi en iyi şekilde hayata geçirdik.
        </p>
        <p>
          Projemiz, binaların yapısal kabuk bileşenlerini (duvarlar, pencereler,
          çatılar ve kapılar) analiz ederek enerji kayıplarını belirleyen ve
          kullanıcı dostu bir öneri sistemi geliştiren bir çalışmadır.
          Kullanıcıların teknik bilgi gerektirmeden enerji verimliliği konusunda
          bilinçlenmelerini sağlamak ve sürdürülebilir uygulamaları teşvik etmek
          ana hedeflerimizdendir.
        </p>
        <p>
          Bu projede, enerji tüketim alışkanlıklarını değiştirerek toplumsal
          farkındalığı artırmayı ve daha yaşanabilir bir dünya için katkı
          sağlamayı amaçladık. Yenilikçi yaklaşımlarımız sayesinde, hem ekonomik
          hem de çevresel faydalar sağlayarak geleceğe yönelik sürdürülebilir
          bir yol haritası sunduk.
        </p>
      </div>
    </div>
  );
}
