import { NextResponse } from 'next/server';
import { databaseSeed } from '@/prisma/seed.action';

export async function GET() {
    try {
        await databaseSeed();
        return NextResponse.json({ message: 'Database seeded successfully' });
    } catch (error) {
        console.error('Error seeding database:', error);
        return NextResponse.json({ error: 'Failed to seed database' }, { status: 500 });
    }
}
