# nodejs-siparis-takip

Node.JS Siparis Takip App

# Urunler

|   Route   |   HTTP Verb   |   POST body   |   Description |
|   --- |   --- |   --- |   --- |
|   /api/urunler/ekle |   `POST` |   {'ad': 'silikon', 'stok': 123, 'fiyat': 10.99, 'kategori_id': '63b4873bcdf06ac796553f19', 'aciklama': 'aciklama metni', 'durum': true} |   Ürüm ekle |

# Siparisler

|   Route   |   HTTP Verb   |   POST body   |   Description |
|   --- |   --- |   --- |   --- |
|   /api/siparisler/ekle |   `POST` |   {'musteri_id': '63b4873bcdf06ac796553f19', 'urunler': {'urun_id':'63b4873bcdf06ac796553f19', 'fiyat': 10.99, 'adet': 12}, 'durum': true, 'aciklama': 'aciklama metni'} |   Sipariş ekle |

# Musteriler

|   Route   |   HTTP Verb   |   POST body   |   Description |
|   --- |   --- |   --- |   --- |
|   /api/musteriler/ekle |   `POST` |   {'ad': 'Ahmet Yilmaz', 'firma_ad': 'Yilmaz Yapi', 'telefon': '5325323232', 'email': 'yilmaz@test.com', 'adres': 'Yilmaz mahallesi', 'sifre': 'gizliP4ssw0rd'} |   Müşteri ekle |