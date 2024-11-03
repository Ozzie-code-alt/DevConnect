import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Profile = () => {
  return (
    <Card>
      <CardHeader>
        <div className='flex items-center space-x-4'>
          <Avatar className='h-20 w-20'>
            <AvatarImage src='https://api.dicebear.com/6.x/initials/svg?seed=JD' />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h2 className='text-2xl font-bold'>John Doe</h2>
            <p className='text-gray-500 dark:text-gray-400'>Full Stack Developer</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p>
          Passionate about creating efficient and scalable web applications. Always learning and
          exploring new technologies.
        </p>
      </CardContent>
    </Card>
  );
};

export default Profile;
