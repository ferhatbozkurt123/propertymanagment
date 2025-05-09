export interface Tasinmaz {
    id: number;
    il: string;
    ilce: string;
    mahalle: string;
    ada: string;
    parsel: string;
    nitelik: string;
    adres: string;
    koordinatlar: {
        lat: number;
        lng: number;
    };
    durum: 'Aktif' | 'Pasif';
    kayitTarihi: Date;
    olusturmaTarihi: Date;
    guncellemeTarihi?: Date;
} 