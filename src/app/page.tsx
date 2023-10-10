"use client"
import { SpinnerInfinity } from 'spinners-react';
import React, { Suspense } from 'react';
import Typical from "react-typical";
import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button';
import { EventList } from '@/components/event-list';

import { useConnection, useWallet } from "@solana/wallet-adapter-react"

import ConnectWalletButton from "@/components/wallet/connect-wallet-button"
// import { EventCardItem } from '@/components/event;
const Spline = React.lazy(() => import('@splinetool/react-spline'));

export default function Home() {
  const { connected, publicKey, sendTransaction } = useWallet()
  const { connection } = useConnection()
  return (
    <div className='container'>
      <div id='hero-section'>
        <div className='grid grid-cols-1 md:grid-cols-12 items-center gap-5 h-full'>
          <div className='col-span-1 md:col-span-6'>
            <p className='font-extrabold text-4xl text-primary'>With an LUV NFT ticket, you can:</p>
            <Separator orientation='horizontal' className='my-5' />
            <ul className='my-6 ml-6 list-disc font-mono text-muted-foreground'>
              <li>
                Prevent event ticket scalping and fraud.
              </li>
              <li>
                Allow your attendees to make money promoting your event.
              </li>
              <li>
                Receive commissions from each seconday ticket transaction.
              </li>
              <li>
                Increase revenue and reduce costs for your event by removing middleman fees.
              </li>
              <li>
                Create exclusive and diverse metaverse experiences for event attendees.
              </li>
              <li>
                Build community and engagement with customers in our <a href="https://discord.gg/U72sPJ75cF">Discord</a>.
              </li>
            </ul>
            <Separator orientation='horizontal' className='my-5' />
            <strong className='text-primary text-xl'>
              Top up your Solana wallet
            </strong>
            <div className='text-muted-foreground font-mono h-10'>
              <Typical
                steps={[
                  "Click the Buy Solana button below", 1500,
                  "Buy Solana with your debit card that will be sent to your Solana wallet.", 1500,
                  "Return to soltix.luvnft.com and connect your Solana wallet", 1500
                ]}
                loop={Infinity}
                wrapper="p"
              />
            </div>
            <div className='my-5 flex items-center justify-center'>
              {/* Add an anchor tag around the button text */}
              <a href="https://crypto.link.com?ref=lb&destination_currency=sol&destination_network=solana" target="_blank" rel="noopener noreferrer">
                <Button className='p-8' variant={'default'}>
                  <strong className='font-extrabold text-xl'>Buy Solana</strong>
                </Button>
              </a>
            </div>
          </div>
          <div className='col-span-1 md:col-span-6 h-[500px] flex justify-center items-center'>
            <Suspense fallback={<SpinnerInfinity size={200} enabled={true} />}>
              <Spline scene="https://prod.spline.design/lz7hvqH6a0vd1xDE/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </div>
      <Separator orientation='horizontal' className='my-5' />
      <div id='event-list-section' className='my-10'>
        {/* <EventList /> */}
        {/* {connected ? (
        ) : (
          <ConnectWalletButton>Connect Wallet</ConnectWalletButton>
        )} */}
      </div>
    </div>
  )
}

