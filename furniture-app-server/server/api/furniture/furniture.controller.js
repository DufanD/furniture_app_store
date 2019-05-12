var apiURI = "http://localhost:3000";

var furnitureList = [
  [
    { 
      it_id: "1",
      item_code: "row_ac001", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 850.90,
      description: "Banyak yang percaya harga adalah penentu kualitas. Namun, bila kita sedikit lebih peka, menemukan bunga yang cantik diantara semak belukar masih sangat mungkin. Seperti Taylor Armchair yang mampu menghadirkan kenyamanan sekaligus visual yang indah di balik kesederhanaan dan harganya yang terjangkau. Minimalis, dengan rancangan yang compact, Taylor Armchair pas untuk melengkapi sudut-sudut mungil rumah baru yang Anda miliki. Dengan bantalan yang terpisah, Anda bisa menyesuaikan posisi dan bantalan hingga menemukan kenyamanan paling pas. Tentu Anda cukup jeli untuk membawa pulang ‘bunga’ ini menghiasi ruang tamu Anda.",
      images: apiURI + "/img/row_ac001_0.jpg"
              + "," + apiURI + "/img/row_ac001_1.jpg"
              + "," + apiURI + "/img/row_ac001_2.jpg"
              + "," + apiURI + "/img/row_ac001_3.jpg"
              + "," + apiURI + "/img/row_ac001_4.jpg"
              + "," + apiURI + "/img/row_ac001_5.jpg"
    }, 
    {
      it_id: "2", 
      item_code: "row_ac002", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 950.90,
      description: "Furniture minimalis ini akan langsung mencuri perhatian siapapun yang melihatnya. Toril Armchair memang dirancang bagi orang-orang yang mengutamakan kenyamanan sekaligus gaya. Memiliki tampilan fisik yang terkesan gagah, Toril akan bersanding manis dengan Millard Side Table sebagai pendampingnya. Bermain game, melewatkan waktu dengan membaca novel bahkan tidak melakukan apapun, sah-sah saja. Hal yang wajar terjadi ketika Anda sudah mengenal dan merasakan langsung sensasi dari sebuah Toril Armchair. Dengan garansi 365 hari yang akan Anda dapatkan dengan pembeliannya, tidak perlu meragukan ketahanannya. Furniture ini juga adalah 100% karya anak Indonesia.",
      images: apiURI + "/img/row_ac002_0.jpg"
              + "," + apiURI + "/img/row_ac002_1.jpg"
              + "," + apiURI + "/img/row_ac002_2.jpg"
              + "," + apiURI + "/img/row_ac002_3.jpg"
    }, 
    {
      it_id: "3", 
      item_code: "row_ac003", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 1950.00,
      description: "Bagi Anda yang selalu memprioritaskan kenyamanan, Hem Sofa dipersembahkan khusus untuk memuaskan jiwa. Tampilan sofa berkelas yang dilengkapi dengan bantalan tebal menjadi alas duduk sempurna bagi Anda sekeluarga. Dengan ukuran yang lapang, ia bisa menampung beberapa orang dengan lega. Apalagi, bahannya yang adem membuat betah semua orang yang mendudukinya. Hem Sofa hadir dengan warna netral abu yang elegan, membawa kesan kalem dan modern pada seisi ruangan. Bayangkan pulang dari kantor dan menghempaskan diri pada sofa yang empuk dan lembut ini, bersenda gurau dengan pasangan dan anak-anak. Pasti hari Anda terasa sempurna!",
      images: apiURI + "/img/row_ac003_0.jpg"
              + "," + apiURI + "/img/row_ac003_1.jpg"
              + "," + apiURI + "/img/row_ac003_2.jpg"
              + "," + apiURI + "/img/row_ac003_3.jpg"
              + "," + apiURI + "/img/row_ac003_4.jpg"
              + "," + apiURI + "/img/row_ac003_5.jpg"
    },
    {
      it_id: "4", 
      item_code: "row_ac004", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 650.00,
      description: "Dibuat dari bahan PU Seat untuk dudukan yang empuk serta Solid Beech Wood Leg, kualitas Emma Accent Chair memang tidak perlu diragukan. Lengkungannya yang unik dan estetik memberikan kesan ruangan yang minimalis namun tetap menyuguhkan tampilan yang manis. Hari-harimu akan terasa lebih lengkap kala beraktivitas dengan ditemani Emma Accent Chair",
      images: apiURI + "/img/row_ac004_0.jpg"
              + "," + apiURI + "/img/row_ac004_1.jpg"
              + "," + apiURI + "/img/row_ac004_2.jpg"
    },
    {
      it_id: "5",
      item_code: "row_ac005", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 350.90,
      description: "Waktu bersantai makin lengkap dengan Eton Armchair. Kursi berkapasitas 1 orang dengan kerangka berbahan kayu solid mindi dilengkapi warna kayu alami akan membawa kehangatan kedalam ruangan. Kelebihan dari kayu mindi adalah bahannya yang tahan jamur dan tidak mudah rapuh. Dudukan dan sandarannya yang lapang diisi oleh busa dan dilapisi dengan bahan yang elegan. Sandaran yang melengkung dengan tingkat kemiringan yang sudah disesuaikan untuk keleluasaan anda, dilengkapi dengan tumpuan lengan di kedua sampingnya. Perpaduan warna yang serasi dari kursi ini cocok untuk melengkapi rumah dan kantor. Tersedia beberapa pilihan warna untuk bahan sandaran dan dudukan sesuai dengan keinginan Anda.",
      images: apiURI + "/img/row_ac005_0.jpg"
              + "," + apiURI + "/img/row_ac005_1.jpg"
              + "," + apiURI + "/img/row_ac005_2.jpg"
              + "," + apiURI + "/img/row_ac005_3.jpg"
    }
  ],
  [
    {
      it_id: "6", 
      item_code: "row_sf001", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 1850.90,
      description: "Kursi Santai Teman Minum Kopi Pagi Hari Waktu bersantai di pagi hari sambil minum kopi takkan terasa sempurna tanpa ada kenyamanan armchair atau kursi santai yang menemani. Untuk itu Kursi Hughes hadir untuk melengkapi momen tersebut di rumah. Didesain dengan konsep 1950-an, Hughes Armchair ini memiliki warna elegan untuk mencerahkan tampilan hunian. Bantalannya yang tebal dan empuk dijamin terasa nyaman meski telah diduduki berjam-jam. Kursi Santai Hughes juga pas apabila dipasangkan dengan meja samping yang bisa Anda gunakan untuk meletakkan kopi hangat dan camilan favorit.",
      images: apiURI + "/img/row_sf001_0.jpg"
              + "," + apiURI + "/img/row_sf001_1.jpg"
              + "," + apiURI + "/img/row_sf001_2.jpg"
    },
    {
      it_id: "7", 
      item_code: "row_sf002", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 1950.90,
      description: "Sepotong kue yang cantik tentu tidak akan sempurna jika tidak dilengkapi dengan rasa lezat dan manis. Hunian Anda pun demikian. Memiliki hunian yang cantik, tentu perlu dilengkapi dengan rasa nyaman yang akan menghidupkan setiap aktivitas di hunian tersebut. Lengkapi keindahan hunian Anda dengan kenyamanan Wina Sofa. Bantalan super sink in yang dimiliki sofa ini membuat berbagai kegiatan seperti makan kue sambil mengobrol dengan pasangan menjadi jauh lebih nyaman dan menyenangkan. Dengan kantong pelengkap di kedua sisi armrest, Anda bisa menyimpan berbagai barang favorit yang mampu menemani Anda saat bersantai di ruang keluarga dengan Wina Sofa.",
      images: apiURI + "/img/row_sf002_0.jpg"
              + "," + apiURI + "/img/row_sf002_1.jpg"
              + "," + apiURI + "/img/row_sf002_2.jpg"
              + "," + apiURI + "/img/row_sf002_3.jpg"
    },
    {
      it_id: "8", 
      item_code: "row_sf003", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 1950.00,
      description: "Bayangkan Anda memiliki sofa dengan berbagai pilihan posisi yang dapat Anda atur sesuka hati. Hal itulah yang akan Anda dapatkan dengan Dozu Futon Bed. Sofa yang tak biasa ini menawarkan fleksibilitas bentuk untuk menjamin kenyamanan optimal bagi Anda. Ketika menonton TV, Dozu bisa menjadi sofa empuk bagi dua orang. Jika hendak membaca buku, Anda dapat menurunkan sandaran untuk berbaring dengan santai. Jika lelah dan ingin rehat sejenak, Anda dapat merebahkan Dozu Futon Bed menjadi kasur dengan bantalan foam yang nyaman. Tak ada yang tak mungkin dengan kehadiran Dozu Futon Bed di dalam hunian.",
      images: apiURI + "/img/row_sf003_0.jpg"
              + "," + apiURI + "/img/row_sf003_1.jpg"
              + "," + apiURI + "/img/row_sf003_2.jpg"
    },
    {
      it_id: "9", 
      item_code: "row_sf004", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 1650.00,
      description: "Elis 2 seater sofa adalah sofa yang mengunggulkan sesuatu yang jauh melampaui kenyamanan: hubungan. Sofa dengan desain Skandinavia kontemporer ini dirancang khusus untuk mendekatkan 2 orang yang duduk di atasnya. Panjang dan lebar yang pas memungkinkan jarak optimal interaksi intim raga dan jiwa, cocok untuk membaca dongeng untuk si kecil, atau saling mencurahkan isi hati Anda dan pasangan. Elis 2 seater sofa mengingatkan kita bahwa terkadang yang sederhanalah yang paling sempurna.",
      images: apiURI + "/img/row_sf004_0.jpg"
              + "," + apiURI + "/img/row_sf004_1.jpg"
              + "," + apiURI + "/img/row_sf004_2.jpg"
    },
    {
      it_id: "10", 
      item_code: "row_sf005", 
      dimension: "H: 85 W: 67 D: 72", 
      price: 1350.90,
      description: "Sebagai centerpiece pada ruang keluarga, Anda membutuhkan Dabi Sofa Bed dengan desain elegan yang akan mengangkat suasana dalam ruangan. Lekukan ergonomis sofa ini membuatnya tampil elegan dan berkelas. Molek dipandang, nyaman digunakan. Bantalan dari foam dibalut dengan fabric terasa lembut di kulit. Keunggulan Dabi Sofa Bed yang utama terletak pada fungsinya yang dinamis. Di bagian tengah sofa terdapat sandaran yang dapat bertransformasi menjadi tempat minuman. Anda pun dapat menikmati acara favorit sambil menyesap minuman kesukaan. Tak hanya itu saja, Dabi Sofa Bed juga dapat disulap menjadi tempat tidur yang nyaman untuk beristirahat.",
      images: apiURI + "/img/row_sf005_0.jpg"
              + "," + apiURI + "/img/row_sf005_1.jpg"
              + "," + apiURI + "/img/row_sf005_2.jpg"
              + "," + apiURI + "/img/row_sf005_3.jpg"
    }
  ]
];
exports.list = function (req, resp) {
  var cat_id = req.params.cat_id;
  resp.status(200)
  resp.type("application/json");
  if (cat_id == "1")
    resp.json(furnitureList[0]);
  else
    resp.json(furnitureList[1]);
}