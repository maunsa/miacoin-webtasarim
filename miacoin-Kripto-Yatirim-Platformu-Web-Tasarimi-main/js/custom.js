// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();


// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


// Coin Anlık Grafik Başlangıç 
let coinValue = 5.01;  // Başlangıç değeri

function updateCoinValue() {
  coinValue += 0.01;
  updateDisplay('green');
}

function decreaseCoinValue() {
  coinValue -= 0.01;
  updateDisplay('red');
}

function updateDisplay(color) {
  let coinInfoElement = document.getElementById('coinInfo');
  
  coinInfoElement.style.color = color;
  coinInfoElement.innerText = `MiaCoin Anlık Değeri: $${coinValue.toFixed(2)}`;
}
// Coin Anlık Grafik Bitiş 
// Başlangıçta bir kere çağrılır, sonra belirli aralıklarla tekrar çağrılır
setInterval(updateCoinValue, 3000); // Her 3 saniyede bir
setInterval(decreaseCoinValue, 5000);

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

function goBack() {
  window.history.back();
}

function showMore1() {

    var content = document.getElementById("content1");
    content.innerHTML = " Uzman yönetim ekibimiz, finansal piyasalardaki gelişmeleri takip eder ve size en uygun ve güvenli yatırım fırsatlarını sunar. Finansal hedeflerinize ulaşmak için güvenilir bir ortak olarak, yatırımlarınızı güvende tutmanın ve büyütmenin stratejilerini sizinle paylaşıyoruz.";
    sMoreButton1.style.display = 'none';
  }

function showMore2() {

    var content = document.getElementById("content2");
    content.innerHTML = " Tek bir tıkla, istediğiniz an yatırımlarınızı yönetebilir ve piyasadaki değişimlere anında adapte olabilirsiniz. Hızlı ve kullanıcı dostu ticaret platformumuz, sizlere finansal piyasalardaki fırsatları kaçırmamanız için ideal bir ortam sunar.";
    sMoreButton2.style.display = 'none';
  }

  function showMore3() {
    var content = document.getElementById("content3");
    content.innerHTML = " Ayrıca, finansal okuryazarlık seviyenizi artırmak için çeşitli eğitim kaynaklarına erişim sağlarız. Web seminerleri, eğitim videoları ve bilgilendirici içeriklerle donatılmış platformumuz, size finansal piyasalarda daha bilinçli ve başarılı bir yatırımcı olma yolunda rehberlik eder.";
    sMoreButton3.style.display = 'none';
  }

  // Duyurular js  başlangıç

  let announcements = [];
  let visibleAnnouncements = 5; // Initial number of visible announcements

  function showPopup(title, content, imageLink, pdfLink, wordLink, announcementDate) {
      document.getElementById('popupTitle').innerText = title;
      document.getElementById('popupContent').innerText = content;
      document.getElementById('popupImage').src = imageLink;
      document.getElementById('popupPdf').href = pdfLink;
      document.getElementById('popupWord').href = wordLink;
      document.getElementById('popupDate').innerText = `Duyuru Tarihi: ${announcementDate}`;

      document.getElementById('popup').style.display = 'block';
      document.getElementById('popupOverlay').style.display = 'block';
  }

  function hidePopup() {
      document.getElementById('popup').style.display = 'none';
      document.getElementById('popupOverlay').style.display = 'none';
  }

  function sortAnnouncements() {
      announcements.sort((a, b) => new Date(b.date) - new Date(a.date));
      displayAnnouncements();
  }

  function showMoreAnnouncements() {
      visibleAnnouncements += 5;
      displayAnnouncements();
  }

  function displayAnnouncements() {
      const duyuruContainer = document.getElementById('duyuruContainer');
      duyuruContainer.innerHTML = '';

      announcements.slice(0, visibleAnnouncements).forEach(announcement => {
          const duyuruDiv = document.createElement('div');
          duyuruDiv.classList.add('duyuru');

          const titleElement = document.createElement('h2');
          titleElement.innerHTML = `<a href="#" onclick="showPopup('${announcement.title}', '${announcement.content}', '${announcement.imageLink}', '${announcement.pdfLink}', '${announcement.wordLink}', '${announcement.date.toISOString()}')">${announcement.title}</a>`;
          duyuruDiv.appendChild(titleElement);

          const contentElement = document.createElement('p');
          contentElement.innerText = announcement.content;
          duyuruDiv.appendChild(contentElement);

          duyuruContainer.appendChild(duyuruDiv);
      });

      // Display or hide the "Show More" button based on the number of visible announcements
      const showMoreButton = document.getElementById('showMoreButton');
      if (visibleAnnouncements < announcements.length) {
          showMoreButton.style.display = 'block';
      } else {
          showMoreButton.style.display = 'none';
      }
  }

    announcements.push({
      title: 'MiaCoin Airdrop Kampanyası Başladı!',
      content: 'Şimdi MiaCoin topluluğuna katılın ve hesabınızı doğrulayarak ücretsiz MiaCoin kazanın! Airdrop kampanyamıza katılarak avantajlı tekliflerden yararlanın.',
      imageLink: 'images/duyuru.png',
      pdfLink: 'Rapor/rapor.pdf',
      wordLink: 'Rapor/rapor.docx',
      date: new Date('2023-12-03')
  });

  announcements.push({
    title: 'Yeni Kullanıcılara Özel Hoş Geldin Bonusu!',
    content: 'MiaCoin ailesine katılan her yeni kullanıcıya özel hoş geldin bonusu! Hesabınıza ilk yatırımınızda ekstra MiaCoin kazanma fırsatını kaçırmayın.',
    imageLink: 'images/duyuru.png',
    pdfLink: 'Rapor/rapor.pdf',
    wordLink: 'Rapor/rapor.docx',
    date: new Date('2023-12-01')
});

announcements.push({
  title: 'MiaCoin Ticaret Yarışması Başlıyor!',
  content: 'Beceri ve stratejinizi test edin! MiaCoin ticaret yarışmamıza katılarak ödüller kazanın. En yüksek getiriyi sağlayan ticaretçiler arasında yerinizi alın.',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-11-22')
});

announcements.push({
  title: 'Referans Programı ile MiaCoin Kazanın!',
  content: 'Arkadaşlarınızı MiaCoine davet edin ve her başarılı referans için ödüller kazanın! Daha fazla kişiyi davet ederek ekstra MiaCoin elde edin.',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-11-01')
});

announcements.push({
  title: 'MiaCoin VIP Üyelik Programı',
  content: 'MiaCoin VIP üyelerine özel ayrıcalıklar ve avantajlar! Yüksek hacimli ticaret yapan kullanıcılar için özel VIP programımıza katılarak benzersiz fırsatları keşfedin.',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-11-09')
});

announcements.push({
  title: 'Yeni İşlem Çiftleri Eklendi!',
  content: 'MiaCoin ticaret platformumuzda yeni işlem çiftleri eklendi. Daha fazla çeşitlilik ve fırsat için güncel piyasa trendlerini takip edin!',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-11-15')
});


announcements.push({
  title: 'MiaCoin Mobil Uygulama Yayında!',
  content: 'MiaCoin mobil uygulamamız artık kullanıma hazır! Hızlı ve güvenli işlemler için mobil ticaret deneyimini keşfedin. Uygulamayı indirin ve avantajları kaçırmayın!',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-12-10')
});

announcements.push({
  title: 'MiaCoin Güvenlik Güncellemesi!',
  content: 'MiaCoin platformumuzdaki güvenliğinizi artırmak amacıyla yeni bir güncelleme yayımlandı. Hesap güvenliğiniz için lütfen şifrenizi düzenli aralıklarla güncelleyin.',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-12-05')
});

announcements.push({
  title: 'MiaCoin Topluluk Anketi!',
  content: 'Siz de MiaCoin topluluğu olarak gelecekteki geliştirmelerimize katkıda bulanmak ister misiniz? Katılımınızı beklediğimiz anketimize katılarak düşüncelerinizi paylaşın.',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-12-08')
});

announcements.push({
  title: 'MiaCoin Webinar Etkinliği!',
  content: 'Finansal konularda uzmanlarımızla buluşun! MiaCoin webinar etkinliğimize katılarak piyasa analizleri ve ticaret stratejileri hakkında bilgi edinin. Kayıt için hemen başvurun.',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-11-28')
});

announcements.push({
  title: 'MiaCoin Yatırım Eğitimleri Başlıyor!',
  content: 'Finansal okuryazarlığınızı artırmak ve yatırımlarınızdan daha fazla kazanç elde etmek ister misiniz? MiaCoin yatırım eğitimleri ile bilgi birikiminizi güçlendirin.',
  imageLink: 'images/duyuru.png',
  pdfLink: 'Rapor/rapor.pdf',
  wordLink: 'Rapor/rapor.docx',
  date: new Date('2023-11-18')
});


  // Add other announcements similarly

  // Initial display
  displayAnnouncements();
// Duyurular js  bitiş


