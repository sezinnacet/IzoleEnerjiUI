export default function IsolationText() {
  return (
    <>
      <div className="baslik">Akıllı Tasarruf Hesaplayıcı</div>
      <div className="yazi">
        Bu hesaplayıcı ile mevcut bina durumunuzu ve yeni donanım seçeneklerini
        karşılaştırarak enerji tasarrufu ve fatura maliyetlerinizi hesaplayın.
        Verileri girin ve tasarruf potansiyelinizi keşfedin!
      </div>
      <div className="yazi2">
        <div className="yazi">
          1. Şu anki yakıt faturası bilgileri girilmesi
        </div>
        <ul>
          <li>
            Kullanıcı, mevcut fatura tutarını ve iç/dış mekan sıcaklıklarını
            girer.
          </li>
        </ul>
        <div className="yazi">2. Şu anki ev donanımının girilmesi</div>
        <ul>
          <li>
            Kullanıcı, mevcut çatı tipi, kapı tipi, pencere tipi ve yalıtım tipi
            gibi bilgileri girer.
          </li>
        </ul>

        <div className="yazi">
          3. Yeni ev donanımı ve enerji tasarrufu sonuçlarının hesaplanması
        </div>
        <ul>
          <li>
            Sistem, girilen mevcut durum bilgilerine göre potansiyel enerji
            tasarrufunu hesaplar.
          </li>
          <li>
            Yeni donanımlara göre oluşan yeni fatura tutarı ve tasarruf oranı
            kullanıcıya gösterilir.
          </li>
        </ul>
      </div>
    </>
  );
}
