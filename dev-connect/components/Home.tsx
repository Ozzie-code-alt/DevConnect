import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { ThumbsUp } from 'lucide-react';
const HomeComponent = () => {
  return (
    <div className='space-y-6'>
      {/* Post Input */}
      <Card>
        <CardHeader>
          <Input placeholder="What's on your mind?" />
        </CardHeader>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>Add Image</Button>
          <Button>Post</Button>
        </CardFooter>
      </Card>

      {/* Posts */}
      {[
        { id: 1, author: 'Jane Doe', content: 'Just deployed my first React app!', likes: 15 },
        { id: 2, author: 'John Smith', content: 'Anyone up for a coding challenge?', likes: 8 }
      ].map((post) => (
        <Card key={post.id}>
          <CardHeader>
            <div className='flex items-center'>
              <Avatar className='h-8 w-8'>
                <AvatarImage
                  src={`https://api.dicebear.com/6.x/initials/svg?seed=${post.author}`}
                />
                <AvatarFallback>{post.author[0]}</AvatarFallback>
              </Avatar>
              <span className='ml-2 font-semibold'>{post.author}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p>{post.content}</p>
          </CardContent>
          <CardFooter className='flex justify-between'>
            <Button variant='ghost' size='sm'>
              <ThumbsUp className='mr-2 h-4 w-4' />
              {post.likes} Likes
            </Button>
            <Button variant='ghost' size='sm'>
              Comment
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default HomeComponent;
