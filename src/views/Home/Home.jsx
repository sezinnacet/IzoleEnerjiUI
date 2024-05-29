import { ArrowForward } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useStoreProfile } from "../../store/store";
import "./style.css";
export default function Home() {
  const banner = require("../../images/textlogo.png");
  const banner2 = require("../../images/logo.png");
  const banner3 = require("../../images/GMZLOGO.png");
  const foto1 = require("../../images/house2.png");
  const foto2 = require("../../images/foto1.png");
  const foto3 = require("../../images/foto2.png");
  const profile = useStoreProfile((state) => state.profile);
  return (
    <div className="home">
      <div className="banner container-fluid" data-aid="banner-section">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
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
              margin: "auto",
            }}
            src={banner3}
          />
        </div>
        <div
          className="mt-50 bg-light p-3 rounded row d-flex align-items-center"
          style={{ marginLeft: "3%", marginRight: "3%" }}
          data-aid
        >
          <div
            className="col-md-9"
            style={{
              fontSize: "18px",
              fontWeight: 700,
              textAlign: "start",
            }}
          >
            <p
              style={{ fontSize: "18px", fontWeight: 700, textAlign: "start" }}
            >
              Akıllı hesaplayıcı ile mevcut bina durumunuzu ve yeni donanım
              seçeneklerini karşılaştırarak enerji tasarrufu ve fatura
              maliyetlerinizi hesaplayın. Verileri girin ve tasarruf
              potansiyelinizi keşfedin!
            </p>
          </div>
          <div className="col-md-3">
            <Button
              variant="outlined"
              component={Link}
              to={"/smart-calculator"}
              endIcon={<ArrowForward />}
              color="success"
              sx={{ width: { xs: "100%", sm: "100%" } }}
            >
              Hesaplayıcıya git
            </Button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-50" data-aid>
          <div className="col-md-4 mt-100" data-name>
            <div className="box" data-title={1}>
              <h6>Türkiye'nin Elektrik Tüketimi ve Üretiminde Son Durum</h6>
              <p>
                Türkiye'nin enerji tüketimi yıllar içinde artış göstermiş ve bu
                durum çevresel ve ekonomik zorluklara yol açmıştır. 2023 yılında
                Türkiye'nin elektrik tüketimi bir önceki yıla göre %0,2 azalarak
                330,3 TWh olarak gerçekleşmiştir. Elektrik üretimi ise %0,6
                azalarak 326,3 TWh olmuştur. Bu rakamlar enerji tüketimindeki
                büyümenin yavaşladığını gösterse de genel trend hala yüksek
                enerji talebi ve tüketimine işaret ediyor.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-100" data-title>
            <div className="box" data-title={2}>
              <h6>Fosil Yakıt Bağımlılığının Çevresel ve Ekonomik Etkileri</h6>
              <p>
                Türkiye'nin enerji tüketiminde özellikle fosil yakıtların rolü
                büyüktür ve bu durum hem çevresel hem de ekonomik anlamda ciddi
                sorunlar yaratmaktadır. Fosil yakıtlara olan bağımlılık, yüksek
                karbon emisyonlarına ve ekonomik maliyetlere yol açmaktadır. Bu
                nedenle, yenilenebilir enerji kaynaklarının kullanımının
                artırılması ve enerji verimliliği önlemlerinin alınması
                gerektiği vurgulanmaktadır.
              </p>
            </div>
          </div>
          <div className="col-md-4 mt-100" data-title>
            <div className="box" data-title={3}>
              <h6>
                Yenilenebilir Enerji ve Sürdürülebilir Kalkınma İçin Stratejik
                Yatırımlar
              </h6>
              <p>
                Son yıllarda yenilenebilir enerji yatırımları artmış olsa da,
                hala enerji tüketiminin büyük bir kısmı fosil yakıtlardan
                karşılanmaktadır. Yenilenebilir enerji kullanımının artırılması,
                enerji güvenliği ve sürdürülebilir kalkınma için kritik öneme
                sahiptir.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-50 row d-flex align-items-center" data-aid>
          <div className="col-md-7">
            <h3>Enerji Tasarrufu ve Ekonomik Kazançlar</h3>
            <p>
              İzolasyon, binaların enerji tüketimini azaltarak ısıtma ve soğutma
              maliyetlerinde büyük tasarruf sağlar. Örneğin, çatı izolasyonu ve
              tamiratı sayesinde enerji verimliliği artar, bu da hem ekonomik
              kazanç sağlar hem de çevresel etkiyi azaltır.
            </p>
            <Button
              variant="outlined"
              component="a"
              href={
                "https://www.pressturk.com/cati-izolasyonu-ve-tamirati-neden-gereklidir/47030/"
              }
              endIcon={<ArrowForward />}
              color="inherit"
              sx={{ width: "200px" }}
            >
              devamını Oku
            </Button>
          </div>
          <div className="col-md-5">
            <p>
              <img src={foto2} alt="" />
            </p>
          </div>
        </div>
        <div
          className="mt-50 row flex-row-reverse  align-items-center"
          data-aid
        >
          <div className="col-md-7">
            <h3>Çevresel Faydalar</h3>
            <p>
              İyi bir izolasyon, karbon emisyonlarını azaltarak çevre korumasına
              katkıda bulunur. Türkiye'de uygulanan enerji verimliliği
              projeleri, binalarda ve sanayide enerji verimliliğini artırmayı
              hedeflemektedir.
            </p>
            <Button
              variant="outlined"
              component="a"
              href={
                "https://shiftdelete.net/turkiye-enerji-verimliligi-stratejisi-eylem-plani"
              }
              endIcon={<ArrowForward />}
              color="inherit"
              sx={{ width: "200px" }}
            >
              devamını Oku
            </Button>
          </div>
          <div className="col-md-5 justify-content-center ">
            <p>
              <img src={foto3} alt="" />
            </p>
          </div>
        </div>
        <div className="mt-50 row align-items-center" data-aid>
          <div className="col-md-6">
            <h3>Yaşam Kalitesinin Artması</h3>
            <p>
              İzolasyon, iç mekan sıcaklıklarının stabil kalmasını sağlayarak
              konforu artırır. Ayrıca, ses yalıtımı gibi ek faydalarla gürültü
              kirliliğini azaltır ve sağlıklı bir yaşam ortamı sunar.
            </p>
            <Button
              variant="outlined"
              component="a"
              href={"https://enerji.gov.tr/enerji-verimliligi"}
              endIcon={<ArrowForward />}
              color="inherit"
              sx={{ width: "200px" }}
            >
              devamını Oku
            </Button>
          </div>
          <div className="col-md-6">
            <p className="mb-0">
              <img src={foto1} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
