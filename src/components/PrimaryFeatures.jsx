import { CircleBackground } from '@/components/CircleBackground'
import { ChatBubbleOvalLeftEllipsisIcon, HeartIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'End-To-End',
    description:
      'At Motsinger, we believe in providing a personalized and human-centric approach to web development. Our process goes beyond automated bots and impersonal forms. We start by listening to you, understanding your brand, and identifying how we can help you unlock your full potential.',
    icon: TrashIcon,
  },
  {
    name: 'Privacy by',
    description:
      'Illum et aut inventore. Ut et dignissimos quasi. Omnis saepe dolorum. Hic autem fugiat. Voluptatem officiis necessitatibus est.',
    icon: PencilSquareIcon,
  },
  {
    name: 'Email commenting',
    description:
      'Commodi quam quo. In quasi mollitia optio voluptate et est reiciendis. Ut et sunt id officiis vitae perspiciatis. Et accusantium sapiente.',
    icon: ChatBubbleOvalLeftEllipsisIcon,
  },
  {
    name: 'Customer connections',
    description:
      'Deserunt corrupti praesentium quo vel cupiditate est occaecati ad. Aperiam libero modi similique iure praesentium facilis quo cumque quibusdam.',
    icon: HeartIcon,
  },
]
export function PrimaryFeatures() {

  return(
  <div className='bg-black'>
    <CircleBackground color="violet" className="animate-spin-slower" />
  <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Stay on top of customer support
      </h2>
     <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
       {features.map((feature) => (
         <div key={feature.name}>
           <dt className="text-base font-semibold leading-7 text-gray-900">
             <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
               <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
             </div>
             {feature.name}
           </dt>
           <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
         </div>
       ))}
     </dl>
   </div>
 </div>
</div>
</div>

  )
}
