import { Link } from '@/components/atoms/Link'
import { MenuIcon, PanelsTopLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Menu } from '@/components/molecules/Menu'
import {
    Sheet,
    SheetHeader,
    SheetContent,
    SheetTrigger,
    SheetTitle,
    SheetDescription,
} from '@/components/ui/sheet'

export function SheetMenu() {
    return (
        <Sheet>
            <SheetTrigger className="lg:hidden" asChild>
                <Button className="h-8" variant="outline" size="icon">
                    <MenuIcon size={20} />
                </Button>
            </SheetTrigger>
            <SheetContent className="sm:w-72 px-3 h-full flex flex-col" side="left">
                <SheetHeader>
                    <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                    <SheetDescription className="sr-only">
                        This menu contains navigation links for the application.
                    </SheetDescription>
                    <Button
                        className="flex justify-center items-center pb-2 pt-1"
                        variant="link"
                        asChild
                    >
                        <Link href="/dashboard" className="flex items-center gap-2">
                            <PanelsTopLeft className="w-6 h-6 mr-1" />
                            <h1 className="font-bold text-lg">Brand</h1>
                        </Link>
                    </Button>
                </SheetHeader>
                <Menu isOpen={true} />
            </SheetContent>
        </Sheet>
    )
}
