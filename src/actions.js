'use server';

import prisma from '@/lib/prisma';
import {redirect} from 'next/navigation';

export async function saveJob(formData) {
  const job = {
    name: formData.get('name'),
    description: formData.get('description'),
    date: formData.get('date')
  }
  await prisma.job.create({data: job});
  redirect('/');
}