// Import React and Next.js Image component
import React from 'react'
import Image from 'next/image'

// Define the testimonial type
type Testimonial = {
  name: string
  role: string
  img: any
  text: string
}

// Define the testimonial data
const testimonials: Testimonial[] = [
  {
    name: 'Abbas Khan',
    role: 'Developer Relations at thirdweb',
    img: '/abbas-khan.jpg', // The image path should be relative to the public folder
    text: 'LearnWeb3 provided a very open and helpful community for me who was not only new to web3 but also new to the world to programming when I started my journey, the wealth of knowledge and support from LearnWeb3 was just invaluable.',
  },
  // Add more testimonials here if needed
]

// Define the testimonial component
const Testimonial = ({ name, role, img, text }: Testimonial) => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div className="relative w-24 h-24 mb-4">
        <Image src={img} alt={name} layout="fill" className="rounded-full" />
      </div>
      <p className="text-gray-600 italic text-center mb-4">"{text}"</p>
      <h3 className="text-lg font-bold text-gray-800 mb-1">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  )
}

// Export the testimonial component as default
export default Testimonial
