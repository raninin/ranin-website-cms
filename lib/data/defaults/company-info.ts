export interface CompanyInfoData {
  address: string;
  phone: string;
  email: string;
  hours: string;
  mapEmbedUrl: string;
  tagline: string;
  logoUrl: string;
}

export const defaultCompanyInfo: CompanyInfoData = {
  address: "Al Aas Ibn Hisham St., Al Safat Dist,\nAl Jubail, 35514, Kingdom of Saudi Arabia",
  phone: "+966 50 801 1632",
  email: "info@ranininternational.com",
  hours: "Sunday – Thursday\n8:00 AM – 5:00 PM",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.515133056317!2d49.653113076515794!3d27.013883676587096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e35a10024d65585%3A0xb70e8ea3cf6fe8ca!2sRANIN%20INTERNATIONAL%20CONTRACTING%20COMPANY!5e0!3m2!1sen!2sca!4v1771898667808!5m2!1sen!2sca",
  tagline:
    "Comprehensive industrial & construction services — powering Saudi Arabia's infrastructure growth since 2010.",
  logoUrl: "/ranin-logo.png",
};
