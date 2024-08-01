"use client";

import React, { useTransition } from 'react'
import { Button } from '../ui/button'
import { BackpackIcon } from 'lucide-react'
import { useUser } from '@/lib/store/user';
import { manageBilling } from '@/lib/action/stripe';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { cn } from '@/lib/utils';

export default function ManageBiling() {
    const [isPending, startTransition] = useTransition();
    const user = useUser((state)=>state.user);
    const onSubmit = (e:any) => {
        e.preventDefault();
        startTransition(async () => {
            const data = JSON.parse(await manageBilling(user?.stripe_customer_id!));

            window.location.href = data.url;

        })
        
    };
  return (

    <form onSubmit={onSubmit}>
    <Button className="flex items-center justify-between w-full">
        <span className="flex items-center gap-2">
        <AiOutlineLoading3Quarters className={cn("animate-spin",{hidden:!isPending})}/>
        Biling
        </span>
        
        <BackpackIcon/>
    </Button>
    </form>
  )
}
