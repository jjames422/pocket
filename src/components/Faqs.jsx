import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'What is web development?',
      answer:
        'Web development is the process of creating websites or web applications. It involves designing and building the structure, layout, and functionality of web pages using programming languages such as HTML, CSS, and JavaScript.',
    },
    {
      question: 'What is responsive web design?',
      answer:
        'Responsive web design is an approach that ensures web pages automatically adapt and display properly across various devices and screen sizes. It involves using fluid layouts, flexible images, and media queries to provide an optimal viewing experience on desktops, tablets, and mobile devices.',
    },
    {
      question: 'What is VPS?',
      answer:
        'VPS stands for Virtual Private Server. It is a type of hosting service that provides virtualized server resources within a larger physical server infrastructure.',
    },
  ],
  [
    {
      question: 'Are there any benefits for VPS hosting?',
      answer:
      'Absolutely! Each VPS operates independently in its isolated environment, ensuring no impact on the performance and stability of other VPS instances.',
      
    },
    {
      question: 'Where is are you based?',
      answer:
        'While our headquarters are in Winston-Salem, North Carolina, our cloud-based solutions transcend geographical boundaries with servers strategically positioned worldwide.',
    },
    {
      question: 'Can I use my own domain with you?',
      answer:
        'Many of our clients use their domain (e.g., yourname@yourdomain.com) for a more professional and branded email address. DNS settings must be changed on your end (unless we host your domain), but don\'t worry\; we will provide step-by-step instructions.',
    },
  ],
  [
    {
      question: 'What is a Motsinger?',
      answer:
        'Motsinger is our name. We are family owned and operated and have been since 1939. You trusted us to provide unparalleled service, so we slapped our name on the product.',
    },
    {
      question: 'Do you allow SMTP port 25?',
      answer:
        'No. We do not allow this port on our VPS network. However\, our managed solutions can host any mail exchange for you. ',
    },
    {
      question: 'When I clicked the video it was a man dancing\, why?',
      answer:
        'Congratulations! You have been Rick Rolled. Never gonna give you up\, never gonna let you down. Never gonna run around and desert you. It\'s a joke - that was suppose to happen.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
