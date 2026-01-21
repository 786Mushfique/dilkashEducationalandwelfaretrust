export interface Donation {
  id: string
  name: string
  description_en: string
  description_ur: string
  priceInCents: number // in cents for Stripe
}

// Donation types as products
export const DONATIONS: Donation[] = [
  {
    id: "zakat",
    name: "Zakat",
    description_en: "Obligatory alms for those who qualify",
    description_ur: "اہل افراد کے لیے واجب خیرات",
    priceInCents: 0, // Custom amount
  },
  {
    id: "sadaqah",
    name: "Sadaqah",
    description_en: "Voluntary charity and donations",
    description_ur: "رضا کارانہ خیرات و عطیات",
    priceInCents: 0, // Custom amount
  },
  {
    id: "lillah",
    name: "Lillah",
    description_en: "Donations dedicated for Allah's sake",
    description_ur: "اللہ کی خاطر کے عطیات",
    priceInCents: 0, // Custom amount
  },
  {
    id: "sponsorship",
    name: "Sponsorship",
    description_en: "Support a student's complete education",
    description_ur: "ایک طالبہ کی مکمل تعلیم میں معاونت",
    priceInCents: 0, // Custom amount
  },
]
