import { cn } from '@/lib/utils'
import { Spinner } from '../ui/spinner'

export const Loader = ({className=''}: {className?: string}) => {
  return (
    <div className={cn('w-full flex items-center justify-center', className)}>
      <Spinner className='size-15' />
    </div>
  )
}
