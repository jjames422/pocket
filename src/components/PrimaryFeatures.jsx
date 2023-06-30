import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'



import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function PrimaryFeatures() {

  return(
    <div className='bg-black'>
    <CircleBackground color="violet" className="animate-spin-slower" />
  </div>
  )
}
