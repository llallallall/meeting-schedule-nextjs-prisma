import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import {
        DropdownMenu,
        DropdownMenuContent,
        DropdownMenuItem,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function DashboardHeader() {
        const user = {
                id: '091130',
                name: '황명환',
                class: '차장',
                picture: '/profile/091130.jpg'

        }
        return user && (
                <div className='p-4 px-10'>

                                <DropdownMenu>
                                        <DropdownMenuTrigger className='flex items-center float-right'>
                                                        <Image src={user.picture} alt={user.name} width={40} height={40}
                                                                className='rounded-full'
                                                        />
                                                        <ChevronDown />
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent>
                                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                                <DropdownMenuItem>

                                                Logout
                                                </DropdownMenuItem>
                                        </DropdownMenuContent>
                                </DropdownMenu>


                </div>
        )
}

export default DashboardHeader