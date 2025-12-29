import img1 from '../assets/1.png'
import img2 from '../assets/2.png'
import img3 from '../assets/3.png'
import img4 from '../assets/4.png'

const properties = [
  {
    id: 1,
    title: '2856 Meadow Park Ave',
    price: '$3,349,000',
    beds: 4,
    baths: 3,
    sqft: '998',
    address: '2856 Meadow Park Ave, Henderson, NV 89052',
    daysOnMarket: 6,
    type: 'House For Sale',
    images: [img1, img2, img3],
    mapX: 60, mapY: 40
  },
  {
    id: 2,
    title: '426 Oak Ave',
    price: '$1,250,000',
    beds: 3,
    baths: 2,
    sqft: '1,850',
    address: '426 Oak Ave, Austin, TX',
    daysOnMarket: 12,
    type: 'Condo For Sale',
    images: [img2, img3],
    mapX: 35, mapY: 50
  },
  {
    id: 3,
    title: '789 Pine Rd',
    price: '$385,000',
    beds: 2,
    baths: 1,
    sqft: '980',
    address: '789 Pine Rd',
    daysOnMarket: 10,
    type: 'Multi-family For Sale',
    images: [img3],
    mapX: 45, mapY: 66
  },
  {
    id: 4,
    title: '101 Maple St',
    price: '$615,000',
    beds: 5,
    baths: 4,
    sqft: '3,200',
    address: '101 Maple St',
    daysOnMarket: 2,
    type: 'House For Sale',
    images: [img4],
    mapX: 20, mapY: 30
  },
  {
    id: 5,
    title: '202 Birch Ln',
    price: '$925,000',
    beds: 4,
    baths: 3,
    sqft: '2,150',
    address: '202 Birch Ln, Austin, TX',
    daysOnMarket: 4,
    type: 'Townhouse For Sale',
    images: [img1, img4],
    mapX: 40, mapY: 45
  },
  {
    id: 6,
    title: '55 Cedar Grove',
    price: '$749,000',
    beds: 3,
    baths: 2,
    sqft: '1,560',
    address: '55 Cedar Grove, Austin, TX',
    daysOnMarket: 8,
    type: 'House For Sale',
    images: [img2, img3],
    mapX: 50, mapY: 52
  }
]

export default properties;
