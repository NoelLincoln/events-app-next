import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import Collection from '@/components/shared/Collection';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Search from '@/components/shared/Search';
import CategoryFilter from '@/components/shared/CategoryFilter';

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 py-10 text-white">
        <div className="wrapper grid grid-cols-1 items-center gap-5 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-8 text-center md:text-left">
            <h1 className="h1-bold">
              Discover upcoming tech events, book your slots, and connect!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Connect with peers and mentors, network and learn!
            </p>
            <Button size="lg" asChild className="button w-full sm:w-auto">
              <Link href="#events">Explore now</Link>
            </Button>
          </div>
          <Image
            src="/assets/images/hero.png"
            alt="hero image"
            width={1100}
            height={1200}
            className="object-contain object-center"
          />
        </div>
      </section>

      <section id="events" className="wrapper my-10 flex flex-col gap-10">
        <h2 className="h2-bold text-center text-blue-700">
          ⁂ Knowledge Sharing and Networking ⁂
        </h2>
        <div className="flex flex-col justify-center gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
