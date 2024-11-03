'use client';
import { useState } from 'react';
import {
  Bell,
  Home,
  MessageSquare,
  User,
  Search,
  ChevronsUpDown
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import HomeComponent from '@/components/Home';
import Profile from '@/components/Profile';
import Messages from '@/components/Messages';

export default function DevConnect() {
  const [activeTab, setActiveTab] = useState('home');
  const [notifications, setNotifications] = useState(3);

  const clearNotifications = () => setNotifications(0);

  return (
    <SidebarProvider>
      <div className='flex h-screen w-screen bg-gray-100 dark:bg-gray-900'>
        <Sidebar>
          <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size='lg'>
                  <div className='flex items-center'>
                    <span className='font-bold text-xl'>DevConnect</span>
                    <ChevronsUpDown className='ml-auto h-4 w-4' />
                  </div>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setActiveTab('home')}
                      isActive={activeTab === 'home'}
                    >
                      <Home className='mr-2 h-4 w-4' />
                      <span>Home</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setActiveTab('profile')}
                      isActive={activeTab === 'profile'}
                    >
                      <User className='mr-2 h-4 w-4' />
                      <span>Profile</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => setActiveTab('messages')}
                      isActive={activeTab === 'messages'}
                    >
                      <MessageSquare className='mr-2 h-4 w-4' />
                      <span>Messages</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>Online Developers</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {['Alice', 'Bob', 'Charlie'].map((name) => (
                    <SidebarMenuItem key={name}>
                      <SidebarMenuButton>
                        <Avatar className='h-8 w-8 mr-2'>
                          <AvatarImage
                            src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`}
                          />
                          <AvatarFallback>{name[0]}</AvatarFallback>
                        </Avatar>
                        <span>{name}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        {/* Main Content */}
        <main className='flex-1 overflow-y-auto'>
          {/* Header */}
          <header className='bg-white dark:bg-gray-800 border-b dark:border-gray-700 p-4 flex justify-between items-center'>
            <div className='flex items-center'>
              <SidebarTrigger />
              <Input type='search' placeholder='Search...' className='w-64 ml-4' />
              <Button variant='ghost' size='icon' className='ml-2'>
                <Search className='h-4 w-4' />
                <span className='sr-only'>Search</span>
              </Button>
            </div>
            <div className='flex items-center'>
              <Button variant='ghost' size='icon' className='relative' onClick={clearNotifications}>
                <Bell className='h-4 w-4' />
                {notifications > 0 && (
                  <span className='absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center'>
                    {notifications}
                  </span>
                )}
                <span className='sr-only'>Notifications</span>
              </Button>
              <Avatar className='ml-4'>
                <AvatarImage src='https://api.dicebear.com/6.x/initials/svg?seed=JD' />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </header>

          {/* Content */}
          <div className='p-6'>
            {activeTab === 'home' && <HomeComponent />}

            {activeTab === 'profile' && <Profile />}

            {activeTab === 'messages' && <Messages />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
