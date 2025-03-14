import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Sidebar } from '../components/ui/Sidebar'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { useEffect, useState } from 'react'
import { useContents } from '../hooks/useContents'
import axios from 'axios'
import { BACKEND_URL, FRONTEND_URL } from '../config'

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { contents, getContents } = useContents();
  console.log(contents);

  useEffect(() => {
    getContents();
  }, [modalOpen]);

  function print(url: string) {
    console.log(url);
  }

  useEffect(() => {
    const mouseMoveHandler = (event: MouseEvent) => {
        if (!sidebarOpen && event.pageX < 100) {
            setSidebarOpen(true);
        }
        if (sidebarOpen && event.pageX > 320) {
            setSidebarOpen(false);
        }
    }
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => window.removeEventListener("mousemove", mouseMoveHandler);
  }, [sidebarOpen])

  return (<div>
      <Sidebar open={sidebarOpen}/>
      <div className='p-3 xl:p-4 ml-24 min-h-screen bg-gray-200'>
          <CreateContentModal open={modalOpen} onClose={() => {
            setModalOpen(false);
          }}/>
          <div className='flex justify-end gap-3'>
            <Button onClick={async () => {
                const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                    share: true
                }, {
                    headers: {
                        "token": localStorage.getItem("token")
                    }
                })

                const shareUrl = `${FRONTEND_URL}/${response.data.link}`;
                print(shareUrl);
            }} variant='Secondary' size='md' text='Share Brain' startIcon={<ShareIcon size='md'/>}/>
            <Button variant='Primary' size='md' text='Add Content' startIcon={<PlusIcon size='md'/>} onClick={() => {
              setModalOpen(true);
            }}/>
          </div>
          <div className='flex justify-center pt-3 2xl:p-6'>
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 xl:gap-8'>
              <Card title='Learn Rust' link='https://www.youtube.com/watch?v=BpPEoZW5IiY' source='Youtube'/>  
              <Card title='X Developers Ad' link='https://x.com/XDevelopers/status/1861111894100320572' source='Twitter'/>  
              <Card title='Apple in 2024' link='https://x.com/theapplehub/status/1873373563857838525' source='Twitter'/>  
              <Card title="Apple Buyer's Guide - Nov 2024" link='https://x.com/theapplehub/status/1856779655182708851' source='Twitter'/>  
              <Card title="Open Source SVG Libraries" link='https://themesberg.com/blog/open-source/10-open-source-free-svg-icon-libraries' source='Notes'/>  
              <Card title="The Algorithms" link='https://github.com/TheAlgorithms' source='Notes'/>  
              {contents.map(({title, link, type}) => <Card title={title} link={link} source={type[0]} /> )}
            </div>
          </div>
      </div>
    </div>
  )
}