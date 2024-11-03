import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send } from 'lucide-react';
const Messages = () => {
  return (
    <Card>
      <CardHeader>
        <h2 className='text-xl font-semibold'>Messages</h2>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          {['Alice', 'Bob', 'Charlie'].map((name) => (
            <div key={name} className='flex items-center justify-between'>
              <div className='flex items-center'>
                <Avatar className='h-10 w-10'>
                  <AvatarImage src={`https://api.dicebear.com/6.x/initials/svg?seed=${name}`} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>
                <span className='ml-2 font-semibold'>{name}</span>
              </div>
              <Button size='sm' variant='ghost'>
                <MessageSquare className='h-4 w-4' />
                <span className='sr-only'>Message</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <div className='flex w-full items-center space-x-2'>
          <Input placeholder='Type a message...' />
          <Button size='icon'>
            <Send className='h-4 w-4' />
            <span className='sr-only'>Send</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Messages;
