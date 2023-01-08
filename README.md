# nodejs-siparis-takip

Node.JS Siparis Takip App

# Urunler

|   Route   |   HTTP Verb   |   POST body   |   Description |
|   --- |   --- |   --- |   --- |
|   /api/urunler/sayfa/:sayfa |   `GET` |   Empty |   Tüm ürünleri listele |
|   /api/urunler/:urun_id |   `GET` |   Empty |   Bir kategorideki ürünleri göster |
|   /api/urunler/kategori/:kategori_id |   `GET` |   Empty |   Bir ürünü göster |
|   /api/urunler/ekle |   `POST` |   {'ad': 'silikon', 'stok': 123, 'fiyat': 10.99, 'kategori_id': '63b4873bcdf06ac796553f19', 'aciklama': 'aciklama metni', 'durum': true} |   Ürüm ekle |
|   /api/urunler/:urun_id |   `PUT` |   {'ad': 'silikon', 'stok': 123, 'fiyat': 10.99, 'kategori_id': '63b4873bcdf06ac796553f19', 'aciklama': 'aciklama metni', 'durum': true} |   Ürüm güncelleme |
|   /api/urunler/:urun_id |   `DELETE` |   Empty |   Bir ürünü sil |

# Siparisler

|   Route   |   HTTP Verb   |   POST body   |   Description |
|   --- |   --- |   --- |   --- |
|   /api/siparisler/ |   `GET` |   Empty |   Tüm siparisleri listele |
|   /api/siparisler/:siparis_id |   `GET` |   Empty |   Bir siparisi goster |
|   /api/siparisler/ekle |   `POST` |   {'musteri_id': '63b4873bcdf06ac796553f19', 'urunler': {'urun_id':'63b4873bcdf06ac796553f19', 'fiyat': 10.99, 'adet': 12}, 'durum': true, 'aciklama': 'aciklama metni'} |   Sipariş ekle |
|   /api/siparisler/:siparis_id |   `PUT` |   {'musteri_id': '63b4873bcdf06ac796553f19', 'urunler': {'urun_id':'63b4873bcdf06ac796553f19', 'fiyat': 10.99, 'adet': 12}, 'durum': true, 'aciklama': 'aciklama metni'} |   Sipariş güncelleme    |
|   /api/siparisler/:urun_id |   `DELETE` |   Empty |   Bir sipariş sil |

# Musteriler

|   Route   |   HTTP Verb   |   POST body   |   Description |
|   --- |   --- |   --- |   --- |
|   /api/musteriler/ |   `GET` |   Empty |   Tüm müşterileri listele |
|   /api/musteriler/:musteri_id |   `GET` |   Empty |   Bir müşteri goster |
|   /api/musteriler/ekle |   `POST` |   {'ad': 'Ahmet Yilmaz', 'firma_ad': 'Yilmaz Yapi', 'telefon': '5325323232', 'email': 'yilmaz@test.com', 'adres': 'Yilmaz mahallesi', 'sifre': 'gizliP4ssw0rd'} |   Müşteri ekle |
|   /api/musteriler/:musteri_id |   `PUT` |   {'ad': 'Ahmet Yilmaz', 'firma_ad': 'Yilmaz Yapi', 'telefon': '5325323232', 'email': 'yilmaz@test.com', 'adres': 'Yilmaz mahallesi', 'sifre': 'gizliP4ssw0rd'} |   Müşteri güncelleme |
|   /api/musteriler/:urun_id |   `DELETE` |   Empty |   Bir müşteri sil |