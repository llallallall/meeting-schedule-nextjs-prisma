import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className='text-center mx-w-2xl'>
                <h2 className='font-bold text-[60px]'>Scheduler</h2>
        </div>
        <div className='flex justify-center gap-8'>
                <Button>Sign Up</Button><Button>Sign In</Button>
        </div>
    </div>
  )
}

export default Hero