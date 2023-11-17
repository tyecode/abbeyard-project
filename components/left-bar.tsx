import { Button } from '@/components/ui/button'
import { IconsCollection } from '@/components/icons/radix-icons-collection'

const LeftBar = ({ navLinks }: any) => {
  return (
    <nav className='px-8'>
      <h1 className='px-4 py-8 font-nunito text-3xl font-bold text-foreground'>
        Abbeyard
      </h1>
      <ul className='flex flex-col border-t py-4'>
        {navLinks.map((link: any) => (
          <li key={link.id}>
            <Button
              variant={'ghost'}
              size={'sm'}
              className='group flex w-full items-center justify-start gap-4 text-foreground'
            >
              <IconsCollection icon={link.icon} />
              {link.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default LeftBar
